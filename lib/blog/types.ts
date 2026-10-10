import type { BlogCategory } from "@/data/blog";
import type { ImageRef } from "@/data/treatments/types";

export type { BlogCategory } from "@/data/blog";

export type PostStatus = "published" | "draft";

export const BLOG_CATEGORIES: readonly BlogCategory[] = ["face", "body", "women", "men"];

/** A blog post as the app sees it (MongoDB document with the id and dates serialised). */
export type Post = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  /** Short label above the title, e.g. "Rhinoplasty guide" */
  topic: string;
  coverImage: ImageRef;
  /** Treatment page the article supports (sidebar card + CTA); optional */
  treatment: { label: string; href: string } | null;
  /** Sanitised article HTML */
  content: string;
  /** "Questions to ask at your consultation" checklist; empty hides the block */
  questions: string[];
  status: PostStatus;
  readMinutes: number;
  /** Set the first time the post is published; drives listing order */
  publishedAt: string | null;
  createdAt: string;
  updatedAt: string;
};

/** What listing pages (cards, admin table) need, without the article body. */
export type PostSummary = Omit<Post, "content" | "questions">;

/** Fields an editor submits when creating or updating a post. */
export type PostInput = {
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  topic: string;
  coverImage: ImageRef;
  treatment: { label: string; href: string } | null;
  content: string;
  questions: string[];
  status: PostStatus;
};

export function toSummary(post: Post): PostSummary {
  const { content: _content, questions: _questions, ...summary } = post;
  return summary;
}
