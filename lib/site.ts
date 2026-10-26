/** Canonical origin for absolute URLs (sitemap, robots). Override with NEXT_PUBLIC_SITE_URL. */
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.resplendentcosmetics.com").replace(/\/$/, "");
