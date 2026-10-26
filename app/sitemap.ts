import type { MetadataRoute } from "next";
import { listPublishedPosts } from "@/lib/blog/repository";
import { siteUrl } from "@/lib/site";

// Served at /sitemap.xml. Re-generated with the blog (ISR + revalidateBlog on admin save).
export const revalidate = 300;

type Entry = { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] };

const pages: Entry[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/treatments", priority: 0.9, changeFrequency: "monthly" },
  { path: "/book-consultation", priority: 0.9, changeFrequency: "yearly" },
  { path: "/about", priority: 0.7, changeFrequency: "yearly" },
  { path: "/doctors", priority: 0.7, changeFrequency: "yearly" },
  { path: "/contact", priority: 0.7, changeFrequency: "yearly" },
  { path: "/why-choose-us", priority: 0.5, changeFrequency: "yearly" },
  { path: "/gallery", priority: 0.6, changeFrequency: "monthly" },
  { path: "/achievements", priority: 0.5, changeFrequency: "monthly" },
  { path: "/blog", priority: 0.7, changeFrequency: "weekly" },
];

// One entry per app/(site)/treatments/<slug>/ page. Keep in sync when adding or removing a page.
const treatmentSlugs = [
  "blepharoplasty",
  "body-tightening",
  "botox",
  "brow-lift",
  "buttock-calf-augmentation",
  "chemical-peel",
  "chin-jawline",
  "dermal-fillers",
  "dimple-creation",
  "ear-lobe-repair",
  "eyelid-surgery",
  "face-neck-lift",
  "fat-grafting",
  "female-breast-surgery",
  "gender-reassignment",
  "gynecomastia",
  "hair-transplant",
  "hydrafacial",
  "hymenoplasty",
  "laser-hair-removal",
  "lip-augmentation",
  "liposuction",
  "microdermabrasion",
  "otoplasty",
  "penile-enlargement",
  "prp-therapy",
  "rf-microneedling",
  "rhinoplasty",
  "six-pack-abs",
  "thread-lift",
  "tummy-tuck",
  "vaginal-tightening",
  "vaginoplasty",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await listPublishedPosts();

  return [
    ...pages.map(({ path, priority, changeFrequency }) => ({ url: `${siteUrl}${path}`, priority, changeFrequency })),
    ...treatmentSlugs.map((slug) => ({
      url: `${siteUrl}/treatments/${slug}`,
      priority: 0.8,
      changeFrequency: "monthly" as const,
    })),
    ...posts.map((post) => ({
      url: `${siteUrl}/blog/${post.slug}`,
      lastModified: post.updatedAt,
      priority: 0.6,
      changeFrequency: "monthly" as const,
    })),
  ];
}
