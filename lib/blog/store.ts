import type { Collection, Db, ObjectId } from "mongodb";
import { imageSources } from "./content";
import type { Post, PostInput } from "./types";

/* MongoDB shape of a blog post. Shared by the app (repository.ts) and the seed script. */

export type PostDoc = Omit<PostInput, "publishedAt"> & {
  _id: ObjectId;
  readMinutes: number;
  publishedAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
  /** Where an imported post came from (the old site's URL); absent for posts written in the admin */
  legacyUrl?: string;
};

export const POSTS_COLLECTION = "blog_posts";

export function postsCollection(db: Db): Collection<PostDoc> {
  return db.collection<PostDoc>(POSTS_COLLECTION);
}

export async function ensurePostIndexes(db: Db) {
  const posts = postsCollection(db);
  await posts.createIndex({ slug: 1 }, { unique: true });
  await posts.createIndex({ status: 1, publishedAt: -1 });
}

/** Image paths a post uses (cover + article body). */
export const imagesOf = (doc: Pick<PostDoc, "coverImage" | "content">) => [doc.coverImage?.src ?? "", ...imageSources(doc.content ?? "")].filter(Boolean);

/** Every image path referenced by any post (draft or published), for the upload prune script. */
export async function referencedImages(db: Db) {
  const docs = await postsCollection(db).find({}, { projection: { coverImage: 1, content: 1 } }).toArray();
  return new Set(docs.flatMap(imagesOf));
}

/** Document → app type. Defaults keep older documents (written before a field existed) readable. */
export function docToPost(doc: PostDoc): Post {
  return {
    id: doc._id.toString(),
    slug: doc.slug,
    title: doc.title,
    excerpt: doc.excerpt,
    category: doc.category,
    topic: doc.topic ?? "",
    coverImage: doc.coverImage,
    treatment: doc.treatment ?? null,
    content: doc.content ?? "",
    faqs: doc.faqs ?? [],
    reviewedBy: doc.reviewedBy ?? "",
    seo: { title: doc.seo?.title ?? "", description: doc.seo?.description ?? "", keywords: doc.seo?.keywords ?? [] },
    status: doc.status,
    readMinutes: doc.readMinutes,
    publishedAt: doc.publishedAt ? doc.publishedAt.toISOString() : null,
    createdAt: doc.createdAt.toISOString(),
    updatedAt: doc.updatedAt.toISOString(),
  };
}
