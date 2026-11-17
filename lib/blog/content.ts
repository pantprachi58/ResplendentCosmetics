import sanitizeHtml from "sanitize-html";
import { slugify } from "./slug";

/*
 * Article HTML handling. Everything stored in `content` has been through sanitizeContent(),
 * and it is sanitised again on render, so a bad write to the database can't inject script.
 */

/** Public path prefix of admin uploads (files on disk, see lib/media.ts) */
export const UPLOADS_URL_PREFIX = "/uploads/";

/** Images must be our own files: static under /images, admin uploads under /uploads. */
export const LOCAL_IMAGE_SRC = /^\/(images|uploads)\/[^\s?#"'<>]+$/;

const positiveInt = (value: string | undefined, max: number) => (value && /^\d{1,5}$/.test(value) && +value > 0 && +value <= max ? value : undefined);

/** Table cells keep only real spans (TipTap writes colspan="1" on every cell). */
const cell: sanitizeHtml.Transformer = (tagName, attribs) => {
  const out: sanitizeHtml.Attributes = {};
  const colspan = positiveInt(attribs.colspan, 20);
  const rowspan = positiveInt(attribs.rowspan, 100);
  if (colspan && colspan !== "1") out.colspan = colspan;
  if (rowspan && rowspan !== "1") out.rowspan = rowspan;
  return { tagName, attribs: out };
};

const SANITIZE_OPTIONS: sanitizeHtml.IOptions = {
  allowedTags: [
    "h2", "h3", "h4", "p", "br", "hr", "strong", "b", "em", "i", "u", "s", "blockquote", "ul", "ol", "li", "a", "img", "code", "pre",
    "table", "caption", "thead", "tbody", "tfoot", "tr", "th", "td",
  ],
  allowedAttributes: { a: ["href", "target", "rel"], img: ["src", "alt", "width", "height"], th: ["colspan", "rowspan"], td: ["colspan", "rowspan"] },
  allowedSchemes: ["http", "https", "mailto", "tel"],
  // Image src must be a local path (checked in exclusiveFilter): no scheme allowed
  allowedSchemesByTag: { img: [] },
  allowProtocolRelative: false,
  transformTags: {
    h1: "h2",
    h5: "h4",
    h6: "h4",
    a: (tagName, attribs) => {
      const href = attribs.href ?? "";
      const external = /^https?:\/\//i.test(href);
      const out: sanitizeHtml.Attributes = external ? { href, target: "_blank", rel: "noopener noreferrer" } : { href };
      return { tagName, attribs: out };
    },
    img: (tagName, attribs) => {
      const out: sanitizeHtml.Attributes = { src: attribs.src ?? "", alt: attribs.alt ?? "" };
      const width = positiveInt(attribs.width, 10000);
      const height = positiveInt(attribs.height, 10000);
      if (width && height) Object.assign(out, { width, height });
      return { tagName, attribs: out };
    },
    th: cell,
    td: cell,
  },
  exclusiveFilter: (frame) =>
    (frame.tag === "img" && !LOCAL_IMAGE_SRC.test(frame.attribs.src ?? "")) ||
    // Drop paragraphs the editor leaves behind when a line is cleared (but keep empty table cells' structure)
    (frame.tag === "p" && !frame.text.trim() && !frame.mediaChildren.length),
};

export function sanitizeContent(html: string) {
  return sanitizeHtml(html, SANITIZE_OPTIONS).trim();
}

export function escapeHtml(text: string) {
  return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

const ENTITIES: Record<string, string> = { amp: "&", lt: "<", gt: ">", quot: '"', apos: "'", nbsp: " " };

export function decodeEntities(text: string) {
  return text.replace(/&(#x?[0-9a-f]+|[a-z]+);/gi, (match, code: string) => {
    if (code[0] !== "#") return ENTITIES[code.toLowerCase()] ?? match;
    const n = code[1].toLowerCase() === "x" ? parseInt(code.slice(2), 16) : parseInt(code.slice(1), 10);
    return Number.isFinite(n) ? String.fromCodePoint(n) : match;
  });
}

export function htmlToText(html: string) {
  return decodeEntities(html.replace(/<[^>]*>/g, " ")).replace(/\s+/g, " ").trim();
}

/** Reading time at about 200 words a minute, rounded up. FAQ text counts too. */
export function readMinutesFor(excerpt: string, content: string, extra: string[] = []) {
  const words = [excerpt, htmlToText(content), ...extra].join(" ").split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}

/** Every image path an article references (cover handled separately). */
export function imageSources(html: string) {
  return [...html.matchAll(/<img\b[^>]*\bsrc="([^"]+)"/g)].map((m) => decodeEntities(m[1]));
}

export type TocEntry = { id: string; text: string };

// Ids already used on the article page
const RESERVED_IDS = new Set(["faq"]);

/**
 * Sanitises article HTML for display: gives every <h2> an id (returned as the table of contents) and wraps
 * tables in a keyboard-scrollable region so wide tables scroll sideways on phones instead of breaking the layout.
 */
export function prepareArticle(html: string): { html: string; toc: TocEntry[] } {
  const toc: TocEntry[] = [];
  const used = new Set(RESERVED_IDS);
  const out = sanitizeContent(html)
    .replace(/<h2>([\s\S]*?)<\/h2>/g, (_match, inner: string) => {
      const text = htmlToText(inner);
      const base = slugify(text) || "section";
      let id = base;
      for (let n = 2; used.has(id); n++) id = `${base}-${n}`;
      used.add(id);
      toc.push({ id, text });
      return `<h2 id="${id}">${inner}</h2>`;
    })
    .replace(/<table>/g, '<div data-table-scroll role="region" aria-label="Table" tabindex="0"><table>')
    .replace(/<\/table>/g, "</table></div>");
  return { html: out, toc };
}
