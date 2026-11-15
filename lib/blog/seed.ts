import { readFile } from "node:fs/promises";
import path from "node:path";
import { MongoBulkWriteError, type AnyBulkWriteOperation, type Db } from "mongodb";
import { readMinutesFor, sanitizeContent } from "./content";
import { ensurePostIndexes, postsCollection, type PostDoc } from "./store";
import { parsePostInput } from "./validation";

/*
 * Seeds the 37 articles imported from the old website (scripts/seed-data/legacy-blog-posts.json, built from
 * the archived www.resplendentcosmetics.com/blog.php) into MongoDB. Same slugs, titles, meta titles/descriptions,
 * keywords, content, FAQs and featured images; images are static files under public/images/blog/<slug>/ and
 * only their paths are stored.
 *
 * Insert-only by default: a post is added only when no post with its slug exists, so edits made in the admin
 * panel are never overwritten. `reset` first deletes every blog post (and the pre-import GridFS image store).
 */

export const LEGACY_SEED_FILE = path.join(process.cwd(), "scripts/seed-data/legacy-blog-posts.json");

type LegacySeed = { source: string; posts: (Record<string, unknown> & { slug: string; publishedAt: string; legacyUrl: string })[] };

/** The seed file as post documents, each checked with the same validation the admin API applies. */
export async function legacyPostDocs(file = LEGACY_SEED_FILE): Promise<Omit<PostDoc, "_id">[]> {
  const seed = JSON.parse(await readFile(file, "utf8")) as LegacySeed;
  return seed.posts.map((raw) => {
    const parsed = parsePostInput({ ...raw, status: "published" });
    if ("errors" in parsed) throw new Error(`Seed post "${raw.slug}" is invalid: ${JSON.stringify(parsed.errors)}`);
    const { publishedAt, ...input } = parsed.data;
    const content = sanitizeContent(input.content);
    const date = new Date(publishedAt ?? raw.publishedAt);
    return {
      ...input,
      content,
      readMinutes: readMinutesFor(input.excerpt, content, input.faqs.flatMap((f) => [f.question, f.answer])),
      publishedAt: date,
      createdAt: date,
      updatedAt: date,
      legacyUrl: raw.legacyUrl,
    };
  });
}

/** Removes every blog post plus storage left over from the pre-import CMS (GridFS images, seed marker). */
async function resetBlog(db: Db) {
  const { deletedCount } = await postsCollection(db).deleteMany({});
  const existing = new Set((await db.listCollections({}, { nameOnly: true }).toArray()).map((c) => c.name));
  for (const name of ["media.files", "media.chunks"]) if (existing.has(name)) await db.collection(name).drop();
  if (existing.has("migrations")) await db.collection<{ _id: string }>("migrations").deleteOne({ _id: "blog-static-posts-v1" });
  return deletedCount;
}

export async function seedLegacyPosts(db: Db, { reset = false } = {}) {
  const docs = await legacyPostDocs(); // validate before touching the database
  await ensurePostIndexes(db);
  const removed = reset ? await resetBlog(db) : 0;

  const ops: AnyBulkWriteOperation<PostDoc>[] = docs.map((doc) => ({
    updateOne: { filter: { slug: doc.slug }, update: { $setOnInsert: doc }, upsert: true },
  }));
  let upserted: number[] = [];
  try {
    const result = await postsCollection(db).bulkWrite(ops, { ordered: false });
    upserted = Object.keys(result.upsertedIds).map(Number);
  } catch (err) {
    // A concurrent seed can race on the unique slug index; those posts exist, which is the goal.
    const writeErrors = err instanceof MongoBulkWriteError ? [err.writeErrors].flat() : [];
    if (!writeErrors.length || writeErrors.some((e) => e.code !== 11000)) throw err;
    upserted = Object.keys((err as MongoBulkWriteError).result.upsertedIds).map(Number);
  }

  const inserted = upserted.map((i) => docs[i].slug);
  const skipped = docs.map((d) => d.slug).filter((slug) => !inserted.includes(slug));
  return { removed, inserted, skipped };
}
