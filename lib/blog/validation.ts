import { htmlToText, LOCAL_IMAGE_SRC } from "./content";
import { SLUG_MAX_LENGTH, SLUG_PATTERN } from "./slug";
import { BLOG_CATEGORIES, type BlogCategory, type BlogFaq, type PostInput, type PostStatus } from "./types";

/* Server-side validation of the editor payload (also applied to seeded posts). Never trust the client's shape or lengths. */

export type FieldErrors = Partial<
  Record<
    keyof PostInput | "coverImage.src" | "coverImage.alt" | "treatment" | "seo.title" | "seo.description" | "seo.keywords",
    string
  >
>;

export const POST_LIMITS = {
  title: 160,
  excerpt: 320,
  topic: 60,
  alt: 200,
  treatmentLabel: 80,
  reviewedBy: 80,
  faqs: 30,
  faqQuestion: 300,
  faqAnswer: 3000,
  seoTitle: 120,
  seoDescription: 320,
  keywords: 20,
  keyword: 80,
  content: 300_000,
};

/** Treatment links point at our own pages. */
const INTERNAL_HREF = /^\/[a-z0-9\-/#]*$/i;

const str = (value: unknown) => (typeof value === "string" ? value.trim() : "");
const obj = (value: unknown) => (value && typeof value === "object" && !Array.isArray(value) ? (value as Record<string, unknown>) : {});
const dimension = (value: unknown) => (typeof value === "number" && Number.isInteger(value) && value > 0 && value <= 20_000 ? value : undefined);

export function parsePostInput(body: unknown): { data: PostInput } | { errors: FieldErrors } {
  const b = obj(body);
  const errors: FieldErrors = {};
  const L = POST_LIMITS;

  const title = str(b.title);
  if (!title) errors.title = "Title is required";
  else if (title.length > L.title) errors.title = `Keep the title under ${L.title} characters`;

  const slug = str(b.slug);
  if (!slug) errors.slug = "URL slug is required";
  else if (slug.length > SLUG_MAX_LENGTH || !SLUG_PATTERN.test(slug)) errors.slug = "Use lowercase letters, numbers and single hyphens only";

  const excerpt = str(b.excerpt);
  if (!excerpt) errors.excerpt = "Summary is required";
  else if (excerpt.length > L.excerpt) errors.excerpt = `Keep the summary under ${L.excerpt} characters`;

  const category = str(b.category) as BlogCategory;
  if (!BLOG_CATEGORIES.includes(category)) errors.category = "Choose a category";

  const topic = str(b.topic);
  if (topic.length > L.topic) errors.topic = `Keep the topic under ${L.topic} characters`;

  const cover = obj(b.coverImage);
  const coverSrc = str(cover.src);
  const coverAlt = str(cover.alt);
  if (!coverSrc) errors["coverImage.src"] = "Add a cover image";
  else if (!LOCAL_IMAGE_SRC.test(coverSrc)) errors["coverImage.src"] = "Upload the image, or use a path under /images/";
  if (!coverAlt) errors["coverImage.alt"] = "Describe the image for screen readers and SEO";
  else if (coverAlt.length > L.alt) errors["coverImage.alt"] = `Keep the description under ${L.alt} characters`;
  const coverWidth = dimension(cover.width);
  const coverHeight = dimension(cover.height);

  let treatment: PostInput["treatment"] = null;
  if (b.treatment && typeof b.treatment === "object") {
    const t = obj(b.treatment);
    const label = str(t.label);
    const href = str(t.href);
    if (label || href) {
      if (!label || !href) errors.treatment = "Give both the treatment name and its page";
      else if (label.length > L.treatmentLabel || !INTERNAL_HREF.test(href)) errors.treatment = "Choose a treatment page on this site";
      else treatment = { label, href };
    }
  }

  const content = typeof b.content === "string" ? b.content : "";
  if (!htmlToText(content)) errors.content = "Write the article";
  else if (content.length > L.content) errors.content = "The article is too long";

  const faqs: BlogFaq[] = (Array.isArray(b.faqs) ? b.faqs : [])
    .map((item) => {
      const f = obj(item);
      // Answers keep their line breaks (blank line = new paragraph); other whitespace is tidied
      const answer = (typeof f.answer === "string" ? f.answer : "").replace(/\r\n?/g, "\n").replace(/[ \t]+/g, " ").replace(/\n{3,}/g, "\n\n").trim();
      return { question: str(f.question), answer };
    })
    .filter((f) => f.question || f.answer);
  if (faqs.length > L.faqs) errors.faqs = `Add at most ${L.faqs} questions`;
  else if (faqs.some((f) => !f.question || !f.answer)) errors.faqs = "Every FAQ needs both a question and an answer";
  else if (faqs.some((f) => f.question.length > L.faqQuestion || f.answer.length > L.faqAnswer))
    errors.faqs = `Keep questions under ${L.faqQuestion} and answers under ${L.faqAnswer} characters`;

  const reviewedBy = str(b.reviewedBy);
  if (reviewedBy.length > L.reviewedBy) errors.reviewedBy = `Keep the name under ${L.reviewedBy} characters`;

  const seo = obj(b.seo);
  const seoTitle = str(seo.title);
  const seoDescription = str(seo.description);
  if (seoTitle.length > L.seoTitle) errors["seo.title"] = `Keep the SEO title under ${L.seoTitle} characters`;
  if (seoDescription.length > L.seoDescription) errors["seo.description"] = `Keep the meta description under ${L.seoDescription} characters`;
  const keywords = [...new Set((Array.isArray(seo.keywords) ? seo.keywords : []).map(str).filter(Boolean))];
  if (keywords.length > L.keywords || keywords.some((k) => k.length > L.keyword))
    errors["seo.keywords"] = `Use at most ${L.keywords} keywords of up to ${L.keyword} characters`;

  const status = str(b.status) as PostStatus;
  if (status !== "published" && status !== "draft") errors.status = "Choose draft or published";

  let publishedAt: string | null = null;
  const rawDate = str(b.publishedAt);
  if (rawDate) {
    const date = new Date(rawDate);
    if (Number.isNaN(date.getTime()) || date.getFullYear() < 2000 || date.getTime() > Date.now() + 366 * 86_400_000)
      errors.publishedAt = "Enter a valid date";
    else publishedAt = date.toISOString();
  }

  if (Object.keys(errors).length) return { errors };
  return {
    data: {
      slug,
      title,
      excerpt,
      category,
      topic,
      coverImage: { src: coverSrc, alt: coverAlt, ...(coverWidth && coverHeight ? { width: coverWidth, height: coverHeight } : {}) },
      treatment,
      content,
      faqs,
      reviewedBy,
      seo: { title: seoTitle, description: seoDescription, keywords },
      status,
      publishedAt,
    },
  };
}
