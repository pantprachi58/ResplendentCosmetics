import type { Metadata } from "next";
import type { ImageRef } from "@/data/treatments/types";

export const siteName = "Resplendent Aesthetics";

/** Social preview for pages without a photo of their own (1376x768, local file) */
export const defaultShareImage: ImageRef = {
  src: "/images/pages/why-choose-us/01-ultra-luxurious-state-of-the.jpg",
  alt: "Sterile modular operating theatre at Resplendent Aesthetics, Greater Kailash, New Delhi",
};

type PageSeo = {
  title: string;
  description: string;
  /** Route path, e.g. "/treatments/rhinoplasty". Used for og:url and, unless `canonical` is set, the canonical link */
  path: string;
  /** Canonical path when it differs from `path` (duplicate pages pointing at the preferred one) */
  canonical?: string;
  image?: ImageRef;
  article?: { publishedTime?: string; modifiedTime?: string };
};

/**
 * Title, description, canonical, Open Graph and Twitter tags for a public page.
 * Relative URLs resolve against metadataBase (app/layout.tsx). Next replaces a parent's openGraph/twitter
 * objects instead of merging them, so every page must go through this to get its own og:title/og:url.
 */
export function pageMetadata({ title, description, path, canonical = path, image = defaultShareImage, article }: PageSeo): Metadata {
  const images = [{ url: image.src, alt: image.alt }];
  const shared = { siteName, locale: "en_IN", url: canonical, title, description, images };

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: article ? { ...shared, type: "article", ...article } : { ...shared, type: "website" },
    twitter: { card: "summary_large_image", title, description, images },
  };
}
