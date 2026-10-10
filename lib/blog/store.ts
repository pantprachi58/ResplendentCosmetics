import type { Collection, Db, ObjectId } from "mongodb";
import type { Post, PostInput } from "./types";

/* MongoDB shape of a blog post. Shared by the app (repository.ts) and the seed script. */

export type PostDoc = PostInput & {
  _id: ObjectId;
  readMinutes: number;
  publishedAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
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

export function docToPost(doc: Omit<PostDoc, "_id"> & { _id: ObjectId | string }): Post {
  return {
    id: doc._id.toString(),
    slug: doc.slug,
    title: doc.title,
    excerpt: doc.excerpt,
    category: doc.category,
    topic: doc.topic ?? "",
    coverImage: doc.coverImage,
    treatment: doc.treatment ?? null,
    content: doc.content,
    questions: doc.questions ?? [],
    status: doc.status,
    readMinutes: doc.readMinutes,
    publishedAt: doc.publishedAt ? doc.publishedAt.toISOString() : null,
    createdAt: doc.createdAt.toISOString(),
    updatedAt: doc.updatedAt.toISOString(),
  };
}
