"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Icon from "@/components/Icon";
import { blogFilters } from "@/data/blog";
import { treatmentCategories } from "@/data/treatmentCategories";
import { slugify } from "@/lib/blog/slug";
import type { BlogCategory, BlogFaq, Post, PostInput, PostStatus } from "@/lib/blog/types";
import RichTextEditor from "./RichTextEditor";
import { formatDateTime } from "./format";
import { UPLOAD_MAX_MB, uploadImage } from "./upload";
import styles from "./admin.module.css";

type FieldErrors = Partial<Record<string, string>>;

type Props = {
  /** Existing post to edit; omitted for a new post */
  post?: Post;
  /** One-off message shown on load, e.g. after creating the post */
  notice?: string;
};

const EXCERPT_MAX = 320;
const FAQ_MAX = 30;
/** What search results show before cutting off */
const SEO_TITLE_TARGET = 65;
const SEO_DESCRIPTION_TARGET = 160;

const emptyInput: PostInput = {
  slug: "",
  title: "",
  excerpt: "",
  category: "face",
  topic: "",
  coverImage: { src: "", alt: "" },
  treatment: null,
  content: "",
  faqs: [],
  reviewedBy: "",
  seo: { title: "", description: "", keywords: [] },
  status: "draft",
  publishedAt: null,
};

const toInput = (post: Post): PostInput => ({
  slug: post.slug,
  title: post.title,
  excerpt: post.excerpt,
  category: post.category,
  topic: post.topic,
  coverImage: { ...post.coverImage },
  treatment: post.treatment ? { ...post.treatment } : null,
  content: post.content,
  faqs: post.faqs.map((f) => ({ ...f })),
  reviewedBy: post.reviewedBy,
  seo: { ...post.seo, keywords: [...post.seo.keywords] },
  status: post.status,
  publishedAt: post.publishedAt,
});

// Publish dates are edited as calendar days in India time (noon, so the day never shifts across time zones)
const istDay = (iso: string | null) => (iso ? new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Kolkata" }).format(new Date(iso)) : "");
const fromIstDay = (day: string) => (day ? new Date(`${day}T12:00:00+05:30`).toISOString() : null);

const parseKeywords = (text: string) =>
  text
    .split(",")
    .map((k) => k.trim())
    .filter(Boolean);

export default function PostEditor({ post, notice }: Props) {
  const router = useRouter();
  const isNew = !post;
  const [values, setValues] = useState<PostInput>(() => (post ? toInput(post) : emptyInput));
  const [saved, setSaved] = useState(() => JSON.stringify(post ? toInput(post) : emptyInput));
  const [savedStatus, setSavedStatus] = useState<PostStatus | null>(post?.status ?? null);
  const [savedSlug, setSavedSlug] = useState(post?.slug ?? "");
  const [updatedAt, setUpdatedAt] = useState(post?.updatedAt ?? null);
  const [slugTouched, setSlugTouched] = useState(!isNew);
  const [keywordsText, setKeywordsText] = useState(() => post?.seo.keywords.join(", ") ?? "");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [message, setMessage] = useState<{ tone: "success" | "error"; text: string } | null>(
    notice ? { tone: "success", text: notice } : null
  );
  const [saving, setSaving] = useState<PostStatus | null>(null);
  const [uploading, setUploading] = useState(false);
  const coverFileRef = useRef<HTMLInputElement>(null);

  const dirty = JSON.stringify(values) !== saved;

  // Warn before leaving with unsaved changes
  useEffect(() => {
    if (!dirty) return;
    const warn = (e: BeforeUnloadEvent) => e.preventDefault();
    window.addEventListener("beforeunload", warn);
    return () => window.removeEventListener("beforeunload", warn);
  }, [dirty]);

  const set = <K extends keyof PostInput>(key: K, value: PostInput[K]) => {
    setValues((v) => ({ ...v, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const setSeo = (patch: Partial<PostInput["seo"]>) => {
    setValues((v) => ({ ...v, seo: { ...v.seo, ...patch } }));
    setErrors((e) => ({ ...e, ...Object.fromEntries(Object.keys(patch).map((k) => [`seo.${k}`, undefined])) }));
  };

  const setTitle = (title: string) => {
    setValues((v) => ({ ...v, title, slug: slugTouched ? v.slug : slugify(title) }));
    setErrors((e) => ({ ...e, title: undefined, slug: slugTouched ? e.slug : undefined }));
  };

  const setCover = (patch: Partial<PostInput["coverImage"]>) => {
    setValues((v) => ({ ...v, coverImage: { ...v.coverImage, ...patch } }));
    setErrors((e) => ({ ...e, ...("src" in patch ? { "coverImage.src": undefined } : {}), ...("alt" in patch ? { "coverImage.alt": undefined } : {}) }));
  };

  const uploadCover = async (file: File | undefined) => {
    if (!file) return;
    setUploading(true);
    try {
      const image = await uploadImage(file);
      setCover({ src: image.url, width: image.width, height: image.height });
    } catch (err) {
      setErrors((e) => ({ ...e, "coverImage.src": err instanceof Error ? err.message : "Upload failed" }));
    } finally {
      setUploading(false);
      if (coverFileRef.current) coverFileRef.current.value = "";
    }
  };

  const setFaq = (index: number, patch: Partial<BlogFaq>) =>
    set(
      "faqs",
      values.faqs.map((f, i) => (i === index ? { ...f, ...patch } : f))
    );

  const moveFaq = (index: number, by: -1 | 1) => {
    const next = [...values.faqs];
    [next[index], next[index + by]] = [next[index + by], next[index]];
    set("faqs", next);
  };

  const save = async (status: PostStatus) => {
    const payload: PostInput = {
      ...values,
      status,
      faqs: values.faqs.map((f) => ({ question: f.question.trim(), answer: f.answer.trim() })).filter((f) => f.question || f.answer),
      seo: { ...values.seo, keywords: parseKeywords(keywordsText) },
    };
    setSaving(status);
    setMessage(null);
    try {
      const res = await fetch(isNew ? "/api/admin/posts" : `/api/admin/posts/${post.id}`, {
        method: isNew ? "POST" : "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));
      if (res.status === 401) {
        setMessage({ tone: "error", text: "Your session has expired. Sign in again in another tab, then save." });
        return;
      }
      if (!res.ok) {
        setErrors(data.fields ?? {});
        setMessage({ tone: "error", text: data.error || "The post couldn't be saved" });
        return;
      }

      setErrors({});
      if (isNew) {
        setSaved(JSON.stringify(payload)); // so the redirect doesn't trigger the unsaved-changes prompt
        router.replace(`/admin/posts/${data.post.id}?created=${status}`);
        return;
      }
      setValues(payload);
      setSaved(JSON.stringify(payload));
      setSavedStatus(status);
      setSavedSlug(payload.slug);
      setUpdatedAt(data.post?.updatedAt ?? new Date().toISOString());
      setMessage({ tone: "success", text: status === "published" ? "Saved and live on the website." : "Saved as a draft." });
      router.refresh();
    } catch {
      setMessage({ tone: "error", text: "Network error: the post wasn't saved. Check your connection and try again." });
    } finally {
      setSaving(null);
    }
  };

  const treatmentOptions = useMemo(() => {
    const known = treatmentCategories.flatMap((c) => c.items.map((i) => i.href));
    const current = values.treatment && !known.includes(values.treatment.href) ? values.treatment : null;
    return { current };
  }, [values.treatment]);

  const chooseTreatment = (href: string) => {
    if (!href) return set("treatment", null);
    const item = treatmentCategories.flatMap((c) => c.items).find((i) => i.href === href);
    const label = item ? item.name.replace(/\s*\(Non-Surgical\)$/, "") : (values.treatment?.label ?? "");
    set("treatment", { href, label });
  };

  const isPublished = savedStatus === "published";
  const error = (key: string) =>
    errors[key] ? (
      <p className={styles.fieldError} id={`${key.replace(".", "-")}-error`}>
        {errors[key]}
      </p>
    ) : null;
  const invalid = (key: string) => (errors[key] ? { "aria-invalid": true, "aria-describedby": `${key.replace(".", "-")}-error` } : {});

  const seoTitleLength = (values.seo.title || values.title).length;
  const seoDescriptionLength = (values.seo.description || values.excerpt).length;

  return (
    <form className={styles.editorPage} onSubmit={(e) => e.preventDefault()} noValidate>
      {/* Header */}
      <header className={styles.editorHeader}>
        <div className={styles.editorHeading}>
          <Link href="/admin" className={styles.backLink}>
            <Icon name="arrow_back" />
            All posts
          </Link>
          <h1 className={styles.pageTitle}>{isNew ? "New post" : "Edit post"}</h1>
          <p className={styles.editorMeta}>
            {savedStatus && (
              <span className={isPublished ? styles.badgePublished : styles.badgeDraft}>{isPublished ? "Published" : "Draft"}</span>
            )}
            {updatedAt && <span>Last saved {formatDateTime(updatedAt)}</span>}
            {dirty && <span className={styles.unsaved}>Unsaved changes</span>}
          </p>
        </div>
        <div className={styles.editorActions}>
          {isPublished && savedSlug && (
            <a href={`/blog/${savedSlug}`} target="_blank" rel="noopener" className={`${styles.button} ${styles.buttonGhost}`}>
              <Icon name="open_in_new" />
              View live
            </a>
          )}
          <button type="button" className={`${styles.button} ${styles.buttonSecondary}`} onClick={() => save("draft")} disabled={saving !== null}>
            <Icon name={isPublished ? "unpublished" : "save"} />
            {saving === "draft" ? "Saving…" : isPublished ? "Unpublish" : "Save draft"}
          </button>
          <button type="button" className={`${styles.button} ${styles.buttonPrimary}`} onClick={() => save("published")} disabled={saving !== null}>
            <Icon name="publish" />
            {saving === "published" ? "Publishing…" : isPublished ? "Update" : "Publish"}
          </button>
        </div>
      </header>

      {message && (
        <p className={message.tone === "success" ? styles.alertSuccess : styles.alertError} role={message.tone === "error" ? "alert" : "status"}>
          <Icon name={message.tone === "success" ? "check_circle" : "error"} />
          {message.text}
        </p>
      )}

      <div className={styles.editorGrid}>
        {/* Main column */}
        <div className={styles.editorMain}>
          <section className={styles.card}>
            <label className={styles.field}>
              <span className={styles.label}>Title</span>
              <input
                className={`${styles.input} ${styles.inputTitle}`}
                value={values.title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. Rhinoplasty Cost in India – Complete Guide"
                maxLength={160}
                {...invalid("title")}
              />
              <span className={styles.fieldHint}>The heading on the article page and on its blog card.</span>
              {error("title")}
            </label>

            <div className={styles.field}>
              <label className={styles.label} htmlFor="post-slug">
                URL
              </label>
              <div className={styles.slugRow}>
                <span className={styles.slugPrefix}>/blog/</span>
                <input
                  id="post-slug"
                  className={`${styles.input} ${styles.slugInput}`}
                  value={values.slug}
                  onChange={(e) => {
                    setSlugTouched(true);
                    set("slug", e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, "-"));
                  }}
                  onBlur={() => set("slug", slugify(values.slug))}
                  placeholder="rhinoplasty-cost-in-india"
                  maxLength={120}
                  {...invalid("slug")}
                />
                <button
                  type="button"
                  className={`${styles.button} ${styles.buttonGhost} ${styles.buttonSmall}`}
                  onClick={() => {
                    setSlugTouched(false);
                    set("slug", slugify(values.title));
                  }}
                  title="Generate the URL from the title"
                >
                  <Icon name="autorenew" />
                  From title
                </button>
              </div>
              {error("slug")}
              {!isNew && post && values.slug !== post.slug && (
                <p className={styles.fieldHint}>
                  <Icon name="warning" /> Changing the URL of a published post breaks existing links and search rankings for it.
                </p>
              )}
            </div>

            <label className={styles.field}>
              <span className={styles.labelRow}>
                <span className={styles.label}>Summary</span>
                <span className={`${styles.counter} ${values.excerpt.length > SEO_DESCRIPTION_TARGET ? styles.counterWarn : ""}`}>
                  {values.excerpt.length}/{EXCERPT_MAX}
                </span>
              </span>
              <textarea
                className={styles.input}
                rows={3}
                value={values.excerpt}
                onChange={(e) => set("excerpt", e.target.value)}
                placeholder="One or two sentences shown on blog cards and under the title."
                maxLength={EXCERPT_MAX}
                {...invalid("excerpt")}
              />
              <span className={styles.fieldHint}>Also used as the meta description when that field below is empty.</span>
              {error("excerpt")}
            </label>
          </section>

          <section className={styles.card}>
            <div className={styles.cardHeader}>
              <h2 className={styles.cardTitle}>Article</h2>
              <p className={styles.cardSubtitle}>Use “Heading 2” for each main section (they form the table of contents). The table button adds a table.</p>
            </div>
            <RichTextEditor
              initialHtml={values.content}
              onChange={(html) => set("content", html)}
              invalid={Boolean(errors.content)}
              describedBy={errors.content ? "content-error" : undefined}
            />
            {error("content")}
          </section>

          <section className={styles.card}>
            <div className={styles.cardHeader}>
              <h2 className={styles.cardTitle}>Frequently asked questions</h2>
              <p className={styles.cardSubtitle}>Optional. Shown as an accordion after the article and marked up for Google (FAQ structured data).</p>
            </div>
            {values.faqs.length > 0 && (
              <ol className={styles.faqList}>
                {values.faqs.map((faq, index) => (
                  <li key={index} className={styles.faqItem}>
                    <span className={styles.questionNumber}>{index + 1}</span>
                    <div className={styles.faqFields}>
                      <input
                        className={styles.input}
                        value={faq.question}
                        onChange={(e) => setFaq(index, { question: e.target.value })}
                        placeholder="Question, e.g. Is the procedure painful?"
                        maxLength={300}
                        aria-label={`Question ${index + 1}`}
                      />
                      <textarea
                        className={styles.input}
                        rows={3}
                        value={faq.answer}
                        onChange={(e) => setFaq(index, { answer: e.target.value })}
                        placeholder="Answer. Leave a blank line to start a new paragraph."
                        maxLength={3000}
                        aria-label={`Answer ${index + 1}`}
                      />
                    </div>
                    <div className={styles.faqActions}>
                      <button type="button" className={styles.iconButton} onClick={() => moveFaq(index, -1)} disabled={index === 0} title="Move up">
                        <Icon name="arrow_upward" />
                        <span className={styles.srOnly}>Move question {index + 1} up</span>
                      </button>
                      <button
                        type="button"
                        className={styles.iconButton}
                        onClick={() => moveFaq(index, 1)}
                        disabled={index === values.faqs.length - 1}
                        title="Move down"
                      >
                        <Icon name="arrow_downward" />
                        <span className={styles.srOnly}>Move question {index + 1} down</span>
                      </button>
                      <button
                        type="button"
                        className={`${styles.iconButton} ${styles.iconButtonDanger}`}
                        onClick={() => set("faqs", values.faqs.filter((_, i) => i !== index))}
                        title="Remove question"
                      >
                        <Icon name="close" />
                        <span className={styles.srOnly}>Remove question {index + 1}</span>
                      </button>
                    </div>
                  </li>
                ))}
              </ol>
            )}
            {values.faqs.length < FAQ_MAX && (
              <button
                type="button"
                className={`${styles.button} ${styles.buttonGhost} ${styles.buttonSmall}`}
                onClick={() => set("faqs", [...values.faqs, { question: "", answer: "" }])}
              >
                <Icon name="add" />
                Add question
              </button>
            )}
            {error("faqs")}
          </section>

          <section className={styles.card}>
            <div className={styles.cardHeader}>
              <h2 className={styles.cardTitle}>Search engine listing</h2>
              <p className={styles.cardSubtitle}>How the article appears in Google and when shared. Leave blank to use the title and summary.</p>
            </div>
            <label className={styles.field}>
              <span className={styles.labelRow}>
                <span className={styles.label}>Meta title</span>
                <span className={`${styles.counter} ${seoTitleLength > SEO_TITLE_TARGET ? styles.counterWarn : ""}`}>
                  {seoTitleLength}/{SEO_TITLE_TARGET}
                </span>
              </span>
              <input
                className={styles.input}
                value={values.seo.title}
                onChange={(e) => setSeo({ title: e.target.value })}
                placeholder={values.title || "Defaults to the title"}
                maxLength={120}
                {...invalid("seo.title")}
              />
              <span className={styles.fieldHint}>Shown in the browser tab and as the Google headline. Aim for under {SEO_TITLE_TARGET} characters.</span>
              {error("seo.title")}
            </label>
            <label className={styles.field}>
              <span className={styles.labelRow}>
                <span className={styles.label}>Meta description</span>
                <span className={`${styles.counter} ${seoDescriptionLength > SEO_DESCRIPTION_TARGET ? styles.counterWarn : ""}`}>
                  {seoDescriptionLength}/{SEO_DESCRIPTION_TARGET}
                </span>
              </span>
              <textarea
                className={styles.input}
                rows={3}
                value={values.seo.description}
                onChange={(e) => setSeo({ description: e.target.value })}
                placeholder={values.excerpt || "Defaults to the summary"}
                maxLength={320}
                {...invalid("seo.description")}
              />
              <span className={styles.fieldHint}>The text under the headline in Google. Aim for 120–{SEO_DESCRIPTION_TARGET} characters.</span>
              {error("seo.description")}
            </label>
            <label className={styles.field}>
              <span className={styles.label}>Keywords</span>
              <input
                className={styles.input}
                value={keywordsText}
                onChange={(e) => {
                  setKeywordsText(e.target.value);
                  setSeo({ keywords: parseKeywords(e.target.value) });
                }}
                placeholder="e.g. rhinoplasty cost, nose job in Delhi"
                {...invalid("seo.keywords")}
              />
              <span className={styles.fieldHint}>Optional, separated by commas.</span>
              {error("seo.keywords")}
            </label>
          </section>
        </div>

        {/* Sidebar */}
        <aside className={styles.editorSide}>
          <section className={styles.card}>
            <h2 className={styles.cardTitle}>Category</h2>
            <label className={styles.field}>
              <span className={styles.label}>Blog filter</span>
              <select className={styles.select} value={values.category} onChange={(e) => set("category", e.target.value as BlogCategory)} {...invalid("category")}>
                {blogFilters
                  .filter((f) => f.id !== "all")
                  .map((f) => (
                    <option key={f.id} value={f.id}>
                      {f.label}
                    </option>
                  ))}
              </select>
              {error("category")}
            </label>
            <label className={styles.field}>
              <span className={styles.label}>Topic label</span>
              <input
                className={styles.input}
                value={values.topic}
                onChange={(e) => set("topic", e.target.value)}
                placeholder="e.g. Cost guide"
                maxLength={60}
                {...invalid("topic")}
              />
              <span className={styles.fieldHint}>Small green label above the title. Optional.</span>
              {error("topic")}
            </label>
          </section>

          <section className={styles.card}>
            <h2 className={styles.cardTitle}>Cover image</h2>
            <div className={`${styles.coverPreview} ${errors["coverImage.src"] ? styles.coverPreviewInvalid : ""}`}>
              {values.coverImage.src ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={values.coverImage.src} alt="" />
              ) : (
                <span>
                  <Icon name="image" />
                  No image yet
                </span>
              )}
            </div>
            {values.coverImage.width && values.coverImage.height ? (
              <span className={styles.fieldHint}>
                {values.coverImage.width} × {values.coverImage.height} px
                {values.coverImage.width < 1000 && " · small: shown at its own size on the article page. Upload 1600 px or wider for a full-width banner."}
              </span>
            ) : null}
            <input
              ref={coverFileRef}
              type="file"
              accept="image/jpeg,image/png,image/webp,image/avif,image/gif"
              hidden
              onChange={(e) => uploadCover(e.target.files?.[0])}
            />
            <button
              type="button"
              className={`${styles.button} ${styles.buttonSecondary} ${styles.buttonBlock}`}
              onClick={() => coverFileRef.current?.click()}
              disabled={uploading}
            >
              <Icon name="upload" />
              {uploading ? "Uploading…" : values.coverImage.src ? "Replace image" : "Upload image"}
            </button>
            <span className={styles.fieldHint}>
              JPEG, PNG, WebP or AVIF, up to {UPLOAD_MAX_MB} MB. Landscape, 1600 px or wider, works best. Saved as an optimised WebP.
            </span>
            {error("coverImage.src")}
            <label className={styles.field}>
              <span className={styles.label}>Image description (alt text)</span>
              <input
                className={styles.input}
                value={values.coverImage.alt}
                onChange={(e) => setCover({ alt: e.target.value })}
                placeholder="e.g. Side profile of a natural-looking nose"
                maxLength={200}
                {...invalid("coverImage.alt")}
              />
              {error("coverImage.alt")}
            </label>
            <details className={styles.details}>
              <summary>Use an image already on the site</summary>
              <label className={styles.field}>
                <span className={styles.label}>Image path</span>
                <input
                  className={styles.input}
                  value={values.coverImage.src}
                  // Size unknown for a typed path; the page then uses the full-width banner
                  onChange={(e) => setCover({ src: e.target.value.trim(), width: undefined, height: undefined })}
                  placeholder="/images/procedures/2.png"
                />
              </label>
            </details>
          </section>

          <section className={styles.card}>
            <h2 className={styles.cardTitle}>Byline &amp; date</h2>
            <label className={styles.field}>
              <span className={styles.label}>Medically reviewed by</span>
              <input
                className={styles.input}
                value={values.reviewedBy}
                onChange={(e) => set("reviewedBy", e.target.value)}
                placeholder="e.g. Dr. Sukhbir Singh"
                maxLength={80}
                {...invalid("reviewedBy")}
              />
              <span className={styles.fieldHint}>Shown under the title. Leave blank if no doctor reviewed the article.</span>
              {error("reviewedBy")}
            </label>
            <label className={styles.field}>
              <span className={styles.label}>Publish date</span>
              <input
                type="date"
                className={styles.input}
                value={istDay(values.publishedAt)}
                onChange={(e) => set("publishedAt", fromIstDay(e.target.value))}
                {...invalid("publishedAt")}
              />
              <span className={styles.fieldHint}>Orders the blog listing (newest first). Set automatically when first published.</span>
              {error("publishedAt")}
            </label>
          </section>

          <section className={styles.card}>
            <h2 className={styles.cardTitle}>Related treatment</h2>
            <label className={styles.field}>
              <span className={styles.label}>Treatment page</span>
              <select className={styles.select} value={values.treatment?.href ?? ""} onChange={(e) => chooseTreatment(e.target.value)} {...invalid("treatment")}>
                <option value="">None</option>
                {treatmentOptions.current && <option value={treatmentOptions.current.href}>{treatmentOptions.current.label}</option>}
                {treatmentCategories.map((group) => (
                  <optgroup key={group.category} label={group.category}>
                    {group.items.map((item) => (
                      <option key={item.href} value={item.href}>
                        {item.name}
                      </option>
                    ))}
                  </optgroup>
                ))}
              </select>
            </label>
            {values.treatment && (
              <label className={styles.field}>
                <span className={styles.label}>Name shown on the article</span>
                <input
                  className={styles.input}
                  value={values.treatment.label}
                  onChange={(e) => set("treatment", { href: values.treatment!.href, label: e.target.value })}
                  maxLength={80}
                />
              </label>
            )}
            <span className={styles.fieldHint}>Adds a “Related treatment” card beside the article and sets the closing call to action.</span>
            {error("treatment")}
          </section>
        </aside>
      </div>
    </form>
  );
}
