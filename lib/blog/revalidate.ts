import "server-only";
import { revalidatePath } from "next/cache";

/** Refreshes the cached blog pages after a post changes (listing, every article's related list, and the given URLs). */
export function revalidateBlog(...slugs: string[]) {
  revalidatePath("/blog");
  revalidatePath("/blog/[slug]", "page");
  for (const slug of new Set(slugs)) revalidatePath(`/blog/${slug}`);
}
