import sanitizeHtml from "sanitize-html";
import { slugify } from "./slug";

/*
 * Article HTML handling. Everything stored in `content` has been through sanitizeContent(),
 * and it is sanitised again on render, so a bad write to the database can't inject script.
 */

const SANITIZE_OPTIONS: sanitizeHtml.IOptions = {
  allowedTags: ["h2", "h3", "h4", "p", "br", "hr", "strong", "b", "em", "i", "u", "s", "blockquote", "ul", "ol", "li", "a", "img", "code", "pre"],
  allowedAttributes: { a: ["href", "target", "rel"], img: ["src", "alt"] },
  allowedSchemes: ["http", "https", "mailto", "tel"],
  // Images must be our own files (uploads under /media, static under /images): no scheme allowed
  allowedSchemesByTag: { img: [] },
  allowProtocolRelative: false,
  transformTags: {
    h1: "h2",
    a: (tagName, attribs) => {
      const href = attribs.href ?? "";
      const external = /^https?:\/\//i.test(href);
      const out: sanitizeHtml.Attributes = external ? { href, target: "_blank", rel: "noopener noreferrer" } : { href };
      return { tagName, attribs: out };
    },
  },
  exclusiveFilter: (frame) =>
    (frame.tag === "img" && !/^\/(media|images)\//.test(frame.attribs.src ?? "")) ||
    // Drop paragraphs the editor leaves behind when a line is cleared
    (frame.tag === "p" && !frame.text.trim() && !frame.mediaChildren.length),
};

export function sanitizeContent(html: string) {
  return sanitizeHtml(html, SANITIZE_OPTIONS).trim();
}

export function escapeHtml(text: string) {
  return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

const ENTITIES: Record<string, string> = { amp: "&", lt: "<", gt: ">", quot: '"', apos: "'", nbsp: " " };

function decodeEntities(text: string) {
  return text.replace(/&(#x?[0-9a-f]+|[a-z]+);/gi, (match, code: string) => {
    if (code[0] !== "#") return ENTITIES[code.toLowerCase()] ?? match;
    const n = code[1].toLowerCase() === "x" ? parseInt(code.slice(2), 16) : parseInt(code.slice(1), 10);
    return Number.isFinite(n) ? String.fromCodePoint(n) : match;
  });
}

export function htmlToText(html: string) {
  return decodeEntities(html.replace(/<[^>]*>/g, " ")).replace(/\s+/g, " ").trim();
}

/** Reading time at about 200 words a minute, rounded up (same rule as the original static blog). */
export function readMinutesFor(excerpt: string, content: string, questions: string[]) {
  const words = [excerpt, htmlToText(content), ...questions].join(" ").split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}

export type TocEntry = { id: string; text: string };

// Ids already used on the article page
const RESERVED_IDS = new Set(["questions"]);

/** Sanitises article HTML and gives every <h2> an id, returning the table of contents. */
export function prepareArticle(html: string): { html: string; toc: TocEntry[] } {
  const toc: TocEntry[] = [];
  const used = new Set(RESERVED_IDS);
  const out = sanitizeContent(html).replace(/<h2>([\s\S]*?)<\/h2>/g, (_match, inner: string) => {
    const text = htmlToText(inner);
    const base = slugify(text) || "section";
    let id = base;
    for (let n = 2; used.has(id); n++) id = `${base}-${n}`;
    used.add(id);
    toc.push({ id, text });
    return `<h2 id="${id}">${inner}</h2>`;
  });
  return { html: out, toc };
}
