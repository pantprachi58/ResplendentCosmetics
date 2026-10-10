import "server-only";
import { cache } from "react";
import { MongoServerError, ObjectId, type Db } from "mongodb";
import { getDb, isDatabaseConfigured } from "@/lib/mongodb";
import { readMinutesFor, sanitizeContent } from "./content";
import { ensureBlogSeeded, staticPostDocs } from "./seed";
import { docToPost, ensurePostIndexes, postsCollection, type PostDoc } from "./store";
import { toSummary, type Post, type PostInput, type PostSummary } from "./types";

export class SlugTakenError extends Error {
  constructor(slug: string) {
    super(`The URL /blog/${slug} is already used by another post`);
    this.name = "SlugTakenError";
  }
}

let ready: Promise<Db> | null = null;

/** Database with indexes in place and the one-time static seed applied. */
function blogDb(): Promise<Db> {
  ready ??= (async () => {
    const db = await getDb();
    await ensurePostIndexes(db);
    await ensureBlogSeeded(db);
    return db;
  })().catch((err) => {
    ready = null;
    throw err;
  });
  return ready;
}

const newestFirst = { publishedAt: -1, createdAt: -1 } as const;

/* ---------- Public site (read-only, falls back to the static articles if the DB is down) ---------- */

function fallbackPosts(): Post[] {
  return staticPostDocs().map((doc) => docToPost({ ...doc, _id: doc.slug }));
}

async function withFallback<T>(read: (db: Db) => Promise<T>, fallback: () => T): Promise<T> {
  if (!isDatabaseConfigured()) return fallback();
  try {
    return await read(await blogDb());
  } catch (err) {
    console.error("[blog] database read failed, serving the static articles:", err);
    return fallback();
  }
}

/** Cached per request (the article page reads it in generateMetadata and the page). */
export const listPublishedPosts = cache((): Promise<PostSummary[]> =>
  withFallback(
    async (db) => {
      const docs = await postsCollection(db)
        .find({ status: "published" }, { projection: { content: 0, questions: 0 } })
        .sort(newestFirst)
        .toArray();
      return docs.map((doc) => toSummary(docToPost({ ...doc, content: "", questions: [] })));
    },
    () => fallbackPosts().map(toSummary)
  )
);

export const getPublishedPost = cache((slug: string): Promise<Post | null> =>
  withFallback(
    async (db) => {
      const doc = await postsCollection(db).findOne({ slug, status: "published" });
      return doc ? docToPost(doc) : null;
    },
    () => fallbackPosts().find((post) => post.slug === slug) ?? null
  )
);

/* ---------- Admin (requires the database; errors propagate) ---------- */

export async function listAllPosts(): Promise<PostSummary[]> {
  const docs = await postsCollection(await blogDb())
    .find({}, { projection: { content: 0, questions: 0 } })
    .sort({ updatedAt: -1 })
    .toArray();
  return docs.map((doc) => toSummary(docToPost({ ...doc, content: "", questions: [] })));
}

export async function getPostById(id: string): Promise<Post | null> {
  if (!ObjectId.isValid(id)) return null;
  const doc = await postsCollection(await blogDb()).findOne({ _id: new ObjectId(id) });
  return doc ? docToPost(doc) : null;
}

function prepare(input: PostInput) {
  const content = sanitizeContent(input.content);
  return { ...input, content, readMinutes: readMinutesFor(input.excerpt, content, input.questions) };
}

function rethrowDuplicateSlug(err: unknown, slug: string): never {
  if (err instanceof MongoServerError && err.code === 11000) throw new SlugTakenError(slug);
  throw err;
}

export async function createPost(input: PostInput): Promise<Post> {
  const now = new Date();
  const doc: PostDoc = {
    _id: new ObjectId(),
    ...prepare(input),
    publishedAt: input.status === "published" ? now : null,
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

/** Returns the updated post and the slug it had before (so both URLs can be revalidated), or null if missing. */
export async function updatePost(id: string, input: PostInput): Promise<{ post: Post; previousSlug: string } | null> {
  if (!ObjectId.isValid(id)) return null;
  const posts = postsCollection(await blogDb());
  const _id = new ObjectId(id);
  const existing = await posts.findOne({ _id }, { projection: { slug: 1, publishedAt: 1 } });
  if (!existing) return null;

  const publishedAt = input.status === "published" ? (existing.publishedAt ?? new Date()) : existing.publishedAt;
  try {
    const updated = await posts.findOneAndUpdate(
      { _id },
      { $set: { ...prepare(input), publishedAt, updatedAt: new Date() } },
      { returnDocument: "after" }
    );
    return updated ? { post: docToPost(updated), previousSlug: existing.slug } : null;
  } catch (err) {
    rethrowDuplicateSlug(err, input.slug);
  }
}

/** Deletes a post; returns its slug, or null if it didn't exist. */
export async function deletePost(id: string): Promise<string | null> {
  if (!ObjectId.isValid(id)) return null;
  const deleted = await postsCollection(await blogDb()).findOneAndDelete({ _id: new ObjectId(id) });
  return deleted?.slug ?? null;
}
