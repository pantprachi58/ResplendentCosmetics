import { MongoBulkWriteError, MongoServerError, type AnyBulkWriteOperation, type Db } from "mongodb";
import { blogPosts, type BlogPost } from "@/data/blog";
import { escapeHtml, readMinutesFor } from "./content";
import { ensurePostIndexes, postsCollection, type PostDoc } from "./store";

/*
 * Seeds the original static articles (data/blog.ts) into MongoDB.
 *
 * Insert-only: a post is added only when no post with its slug exists. Existing posts, including
 * ones created or edited in the admin panel, are never modified or removed.
 */

const MIGRATIONS_COLLECTION = "migrations";
const SEED_MIGRATION_ID = "blog-static-posts-v1";

function staticContentHtml(post: BlogPost) {
  return post.sections
    .map((section) =>
      [
        `<h2>${escapeHtml(section.heading)}</h2>`,
        ...section.paragraphs.map((p) => `<p>${escapeHtml(p)}</p>`),
        section.bullets?.length ? `<ul>${section.bullets.map((b) => `<li>${escapeHtml(b)}</li>`).join("")}</ul>` : "",
      ].join("")
    )
    .join("");
}

/** The static articles as post documents. Publish dates step back a minute per post so the original order is kept. */
export function staticPostDocs(now = new Date()): Omit<PostDoc, "_id">[] {
  return blogPosts.map((post, index) => {
    const content = staticContentHtml(post);
    const date = new Date(now.getTime() - index * 60_000);
    return {
      slug: post.slug,
      title: post.title,
      excerpt: post.excerpt,
      category: post.category,
      topic: post.topic,
      coverImage: { src: post.image.src, alt: post.image.alt },
      treatment: { label: post.treatment.label, href: post.treatment.href },
      content,
      questions: [...post.questions],
      status: "published",
      readMinutes: readMinutesFor(post.excerpt, content, post.questions),
      publishedAt: date,
      createdAt: date,
      updatedAt: date,
    };
  });
}

/** Inserts every static article whose slug is missing. Returns the inserted and skipped slugs. */
export async function seedStaticPosts(db: Db) {
  await ensurePostIndexes(db);
  const docs = staticPostDocs();
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
  return { inserted, skipped };
}

/**
 * Runs the static seed once per database (recorded in the `migrations` collection), so a post an
 * admin deletes later is not brought back on the next deploy. `npm run blog:seed` runs it on demand.
 */
export async function ensureBlogSeeded(db: Db) {
  const migrations = db.collection<{ _id: string; appliedAt: Date; inserted: string[] }>(MIGRATIONS_COLLECTION);
  if (await migrations.findOne({ _id: SEED_MIGRATION_ID })) return;

  const { inserted } = await seedStaticPosts(db);
  try {
    await migrations.insertOne({ _id: SEED_MIGRATION_ID, appliedAt: new Date(), inserted });
  } catch (err) {
    if (!(err instanceof MongoServerError && err.code === 11000)) throw err;
  }
}
