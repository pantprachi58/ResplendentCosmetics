/*
 * Blog categories and listing settings. The posts themselves live in MongoDB and are edited in /admin;
 * the articles imported from the old website are seeded with `npm run blog:seed`
 * (scripts/seed-data/legacy-blog-posts.json).
 */

export type BlogCategory = "face" | "body" | "women" | "men";
export type BlogFilter = "all" | BlogCategory;

export const blogFilters: { id: BlogFilter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "face", label: "Face" },
  { id: "body", label: "Body" },
  { id: "women", label: "Women" },
  { id: "men", label: "Men" },
];

export const blogCategoryLabel: Record<BlogCategory, string> = {
  face: "Face",
  body: "Body",
  women: "Women",
  men: "Men",
};

/** Cards shown before (and added by) "Show more" on the blog index */
export const BLOG_PAGE_SIZE = 12;
