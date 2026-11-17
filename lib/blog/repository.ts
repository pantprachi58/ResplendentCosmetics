import "server-only";
import { cache } from "react";
import { MongoServerError, ObjectId, type Collection, type Db } from "mongodb";
import { getDb, isDatabaseConfigured } from "@/lib/mongodb";
import { readMinutesFor, sanitizeContent, UPLOADS_URL_PREFIX } from "./content";
import { docToPost, ensurePostIndexes, imagesOf, postsCollection, type PostDoc } from "./store";
import { toSummary, type Post, type PostInput, type PostSummary } from "./types";

export class SlugTakenError extends Error {
  constructor(slug: string) {
    super(`The URL /blog/${slug} is already used by another post`);
    this.name = "SlugTakenError";
  }
}

let ready: Promise<Db> | null = null;

/** Database with the blog indexes in place. */
function blogDb(): Promise<Db> {
  ready ??= (async () => {
    const db = await getDb();
    await ensurePostIndexes(db);
    return db;
  })().catch((err) => {
    ready = null;
    throw err;
  });
  return ready;
}

const newestFirst = { publishedAt: -1, createdAt: -1 } as const;
const withoutBody = { projection: { content: 0, faqs: 0 } } as const;
const docToSummary = (doc: PostDoc) => toSummary(docToPost(doc));

/* ---------- Public site (read-only) ---------- */

/*
 * No database configured (e.g. local dev without .env) → an empty blog. A database error is thrown rather
 * than hidden: Next then keeps serving the last good version of the cached page instead of caching an empty
 * or broken one, and a production build fails loudly if the database is unreachable.
 */
async function publicRead<T>(read: (db: Db) => Promise<T>, empty: T): Promise<T> {
  if (!isDatabaseConfigured()) return empty;
  return read(await blogDb());
}

/** Cached per request (the article page, its metadata and the sitemap all read it). */
export const listPublishedPosts = cache(
  (): Promise<PostSummary[]> =>
    publicRead(async (db) => {
      const docs = await postsCollection(db).find({ status: "published" }, withoutBody).sort(newestFirst).toArray();
      return docs.map(docToSummary);
    }, [])
);

export const getPublishedPost = cache(
  (slug: string): Promise<Post | null> =>
    publicRead(async (db) => {
      const doc = await postsCollection(db).findOne({ slug, status: "published" });
      return doc ? docToPost(doc) : null;
    }, null)
);

/* ---------- Admin (requires the database; errors propagate) ---------- */

export async function listAllPosts(): Promise<PostSummary[]> {
  const docs = await postsCollection(await blogDb()).find({}, withoutBody).sort({ updatedAt: -1 }).toArray();
  return docs.map(docToSummary);
}

export async function getPostById(id: string): Promise<Post | null> {
  if (!ObjectId.isValid(id)) return null;
  const doc = await postsCollection(await blogDb()).findOne({ _id: new ObjectId(id) });
  return doc ? docToPost(doc) : null;
}

/** Stored fields derived from the editor input (sanitised HTML, reading time); publishedAt is handled by the caller. */
export function preparePost(input: PostInput) {
  const { publishedAt: _publishedAt, ...fields } = input;
  const content = sanitizeContent(input.content);
  const faqText = input.faqs.flatMap((faq) => [faq.question, faq.answer]);
  return { ...fields, content, readMinutes: readMinutesFor(input.excerpt, content, faqText) };
}

function rethrowDuplicateSlug(err: unknown, slug: string): never {
  if (err instanceof MongoServerError && err.code === 11000) throw new SlugTakenError(slug);
  throw err;
}

const escapeRegex = (text: string) => text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

/** Of the given upload paths, those no post references any more (safe to delete from disk). */
async function unreferencedUploads(posts: Collection<PostDoc>, candidates: string[]) {
  const orphans: string[] = [];
  for (const src of new Set(candidates)) {
    if (!src.startsWith(UPLOADS_URL_PREFIX)) continue; // static /images files are part of the code, never deleted
    const used = await posts.findOne(
      { $or: [{ "coverImage.src": src }, { content: { $regex: escapeRegex(`src="${src}"`) } }] },
      { projection: { _id: 1 } }
    );
    if (!used) orphans.push(src);
  }
  return orphans;
}

export async function createPost(input: PostInput): Promise<Post> {
  const now = new Date();
  const doc: PostDoc = {
    _id: new ObjectId(),
    ...preparePost(input),
    publishedAt: input.publishedAt ? new Date(input.publishedAt) : input.status === "published" ? now : null,
    createdAt: now,
    updatedAt: now,
  };
  try {
    await postsCollection(await blogDb()).insertOne(doc);
  } catch (err) {
    rethrowDuplicateSlug(err, input.slug);
  }
  return docToPost(doc);
}

/**
 * Returns the updated post, the slug it had before (so both URLs can be revalidated) and the uploaded images it
 * stopped using that no other post uses either (the caller deletes those files); null if the post is missing.
 */
export async function updatePost(id: string, input: PostInput) {
  if (!ObjectId.isValid(id)) return null;
  const posts = postsCollection(await blogDb());
  const _id = new ObjectId(id);
  const existing = await posts.findOne({ _id }, { projection: { slug: 1, publishedAt: 1, coverImage: 1, content: 1 } });
  if (!existing) return null;

  const publishedAt = input.publishedAt
    ? new Date(input.publishedAt)
    : input.status === "published"
      ? (existing.publishedAt ?? new Date())
      : existing.publishedAt;
  let updated: PostDoc | null;
  try {
    updated = await posts.findOneAndUpdate(
      { _id },
      { $set: { ...preparePost(input), publishedAt, updatedAt: new Date() } },
      { returnDocument: "after" }
    );
  } catch (err) {
    rethrowDuplicateSlug(err, input.slug);
  }
  if (!updated) return null;

  const stillUsed = new Set(imagesOf(updated));
  const dropped = imagesOf(existing).filter((src) => !stillUsed.has(src));
  return { post: docToPost(updated), previousSlug: existing.slug, orphanedImages: await unreferencedUploads(posts, dropped) };
}

/** Deletes a post; returns its slug and its now-unused uploaded images, or null if it didn't exist. */
export async function deletePost(id: string) {
  if (!ObjectId.isValid(id)) return null;
  const posts = postsCollection(await blogDb());
  const deleted = await posts.findOneAndDelete({ _id: new ObjectId(id) });
  if (!deleted) return null;
  return { slug: deleted.slug, orphanedImages: await unreferencedUploads(posts, imagesOf(deleted)) };
}
