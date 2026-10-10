import { htmlToText } from "./content";
import { SLUG_MAX_LENGTH, SLUG_PATTERN } from "./slug";
import { BLOG_CATEGORIES, type BlogCategory, type PostInput, type PostStatus } from "./types";

/* Server-side validation of the editor payload. Never trust the client's shape or lengths. */

export type FieldErrors = Partial<Record<keyof PostInput | "coverImage.src" | "coverImage.alt" | "treatment", string>>;

const LIMITS = {
  title: 160,
  excerpt: 320,
  topic: 60,
  alt: 200,
  treatmentLabel: 80,
  question: 300,
  questions: 20,
  content: 200_000,
};

/** Local image paths only: static files under /images or uploads under /media. */
const IMAGE_SRC = /^\/(images|media)\/[^\s?#]+$/;
/** Treatment links point at our own pages. */
const INTERNAL_HREF = /^\/[a-z0-9\-/#]*$/i;

const str = (value: unknown) => (typeof value === "string" ? value.trim() : "");

export function parsePostInput(body: unknown): { data: PostInput } | { errors: FieldErrors } {
  const b = (body && typeof body === "object" ? body : {}) as Record<string, unknown>;
  const errors: FieldErrors = {};

  const title = str(b.title);
  if (!title) errors.title = "Title is required";
  else if (title.length > LIMITS.title) errors.title = `Keep the title under ${LIMITS.title} characters`;

  const slug = str(b.slug);
  if (!slug) errors.slug = "URL slug is required";
  else if (slug.length > SLUG_MAX_LENGTH || !SLUG_PATTERN.test(slug))
    errors.slug = "Use lowercase letters, numbers and single hyphens only";

  const excerpt = str(b.excerpt);
  if (!excerpt) errors.excerpt = "Summary is required";
  else if (excerpt.length > LIMITS.excerpt) errors.excerpt = `Keep the summary under ${LIMITS.excerpt} characters`;

  const category = str(b.category) as BlogCategory;
  if (!BLOG_CATEGORIES.includes(category)) errors.category = "Choose a category";

  const topic = str(b.topic);
  if (topic.length > LIMITS.topic) errors.topic = `Keep the topic under ${LIMITS.topic} characters`;

  const cover = (b.coverImage && typeof b.coverImage === "object" ? b.coverImage : {}) as Record<string, unknown>;
  const coverSrc = str(cover.src);
  const coverAlt = str(cover.alt);
  if (!coverSrc) errors["coverImage.src"] = "Add a cover image";
  else if (!IMAGE_SRC.test(coverSrc)) errors["coverImage.src"] = "Upload the image, or use a path under /images/";
  if (!coverAlt) errors["coverImage.alt"] = "Describe the image for screen readers and SEO";
  else if (coverAlt.length > LIMITS.alt) errors["coverImage.alt"] = `Keep the description under ${LIMITS.alt} characters`;

  let treatment: PostInput["treatment"] = null;
  if (b.treatment && typeof b.treatment === "object") {
    const t = b.treatment as Record<string, unknown>;
    const label = str(t.label);
    const href = str(t.href);
    if (label || href) {
      if (!label || !href) errors.treatment = "Give both the treatment name and its page";
      else if (label.length > LIMITS.treatmentLabel || !INTERNAL_HREF.test(href))
        errors.treatment = "Choose a treatment page on this site";
      else treatment = { label, href };
    }
  }

  const content = typeof b.content === "string" ? b.content : "";
  if (!htmlToText(content)) errors.content = "Write the article";
  else if (content.length > LIMITS.content) errors.content = "The article is too long";

  const questions = Array.isArray(b.questions) ? b.questions.map(str).filter(Boolean) : [];
  if (questions.length > LIMITS.questions) errors.questions = `Add at most ${LIMITS.questions} questions`;
  else if (questions.some((q) => q.length > LIMITS.question))
    errors.questions = `Keep each question under ${LIMITS.question} characters`;

  const status = str(b.status) as PostStatus;
  if (status !== "published" && status !== "draft") errors.status = "Choose draft or published";

  if (Object.keys(errors).length) return { errors };
  return {
    data: { slug, title, excerpt, category, topic, coverImage: { src: coverSrc, alt: coverAlt }, treatment, content, questions, status },
  };
}
