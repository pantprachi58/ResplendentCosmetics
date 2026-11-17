import "server-only";
import { getImageProps } from "next/image";
import { decodeEntities, escapeHtml } from "./content";

/** Main column: 864px from 1320px up, viewport minus sidebar + gutters from 1024px, full width minus gutters below. */
const ARTICLE_WIDTH = 864;
const ARTICLE_IMAGE_SIZES = `(min-width: 1320px) ${ARTICLE_WIDTH}px, (min-width: 1024px) calc(100vw - 26rem), calc(100vw - 2rem)`;

/** Images narrower than the column are shown at their own width (width attribute + max-width: 100%) */
const sizesFor = (width: number) => (width < ARTICLE_WIDTH ? `(min-width: ${width + 32}px) ${width}px, calc(100vw - 2rem)` : ARTICLE_IMAGE_SIZES);

const attr = (attrs: string, name: string) => {
  const match = attrs.match(new RegExp(`\\b${name}="([^"]*)"`));
  return match ? decodeEntities(match[1]) : undefined;
};

/**
 * Turns the sanitised article's <img> tags into optimised ones: a responsive srcset served by Next's image
 * optimiser (WebP/AVIF, resized), explicit width/height so the page doesn't jump while they load, and lazy loading.
 * Runs on sanitised HTML only (prepareArticle), so attribute values are already restricted to local paths.
 */
export function optimiseArticleImages(html: string) {
  return html.replace(/<img\b([^>]*?)\s*\/?>/g, (_tag, attrs: string) => {
    const src = attr(attrs, "src");
    if (!src) return "";
    const alt = attr(attrs, "alt") ?? "";
    const width = Number(attr(attrs, "width"));
    const height = Number(attr(attrs, "height"));

    if (!width || !height) return `<img src="${escapeHtml(src)}" alt="${escapeHtml(alt)}" loading="lazy" decoding="async">`;

    const { props } = getImageProps({ src, alt, width, height, sizes: sizesFor(width) });
    const out: Record<string, string | number | undefined> = {
      src: props.src,
      srcset: props.srcSet,
      sizes: props.sizes,
      width: props.width,
      height: props.height,
      alt,
      loading: "lazy",
      decoding: "async",
    };
    return `<img ${Object.entries(out)
      .filter(([, v]) => v !== undefined && v !== "")
      .map(([k, v]) => `${k}="${escapeHtml(String(v))}"`)
      .join(" ")}>`;
  });
}
