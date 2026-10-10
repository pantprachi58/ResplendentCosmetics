export type BlogStatus = "published" | "draft";

export interface BlogAuthor {
  name: string;
  role: string;
  avatar?: string;
}

export interface BlogPost {
  _id?: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  coverImage: string;
  author: BlogAuthor;
  readingTime: string;
  status: BlogStatus;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
}

export interface BlogPostInput {
  title: string;
  slug?: string;
  excerpt: string;
  content: string;
  category: string;
  tags?: string[] | string;
  coverImage?: string;
  author?: BlogAuthor;
  status: BlogStatus;
  publishedAt?: string;
}

export const BLOG_CATEGORIES = [
  "Facial Aesthetics",
  "Body Contouring",
  "Women's Health",
  "Men's Health",
  "Skin Rejuvenation & Lasers",
  "Hair Restoration",
] as const;

export const DEFAULT_AUTHOR: BlogAuthor = {
  name: "Dr. Sukhbir Singh",
  role: "Senior Consultant Plastic & Cosmetic Surgeon, MS, M.Ch",
  avatar: "/svg/Resplendent Logo Color.png",
};

export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[\s\W-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function calculateReadingTime(text: string): string {
  const wordsPerMinute = 200;
  const words = text.replace(/<[^>]*>/g, " ").trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${Math.max(1, minutes)} min read`;
}
