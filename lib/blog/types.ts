import type { BlogCategory } from "@/data/blog";

export type { BlogCategory } from "@/data/blog";

export type PostStatus = "published" | "draft";

export const BLOG_CATEGORIES: readonly BlogCategory[] = ["face", "body", "women", "men"];

/**
 * An image used by a post. `src` is a site path: a static file under /images/ or an admin upload under
 * /uploads/ (the file itself lives on disk; only this path is stored). Width/height are the file's pixel
 * size, used to reserve layout space and to avoid upscaling small images.
 */
export type BlogImage = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

export type BlogFaq = {
  question: string;
  /** Plain text; blank lines separate paragraphs */
  answer: string;
};

/** Search-engine fields. Blank title/description fall back to the post title/excerpt. */
export type BlogSeo = {
  title: string;
  description: string;
  keywords: string[];
};

/** A blog post as the app sees it (MongoDB document with the id and dates serialised). */
export type Post = {
  id: string;
  slug: string;
  /** On-page heading (H1) and card title */
  title: string;
  /** Card text and the lead under the H1 */
  excerpt: string;
  category: BlogCategory;
  /** Short label above the title, e.g. "Cost guide" */
  topic: string;
  coverImage: BlogImage;
  /** Treatment page the article supports (sidebar card + CTA); optional */
  treatment: { label: string; href: string } | null;
  /** Sanitised article HTML */
  content: string;
  /** Rendered as an accordion after the article, plus FAQPage structured data; empty hides it */
  faqs: BlogFaq[];
  /** "Medically reviewed by …" credit; empty hides it */
  reviewedBy: string;
  seo: BlogSeo;
  status: PostStatus;
  readMinutes: number;
  /** Set the first time the post is published (editable); drives listing order */
  publishedAt: string | null;
  createdAt: string;
  updatedAt: string;
};

/** What listing pages (cards, admin table, sitemap) need, without the article body. */
export type PostSummary = Omit<Post, "content" | "faqs">;

/** Fields an editor submits when creating or updating a post. */
export type PostInput = {
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  topic: string;
  coverImage: BlogImage;
  treatment: { label: string; href: string } | null;
  content: string;
  faqs: BlogFaq[];
  reviewedBy: string;
  seo: BlogSeo;
  status: PostStatus;
  /** ISO date; null keeps the stored date (or stamps "now" on first publish) */
  publishedAt: string | null;
};

export function toSummary(post: Post): PostSummary {
  const { content: _content, faqs: _faqs, ...summary } = post;
  return summary;
}
