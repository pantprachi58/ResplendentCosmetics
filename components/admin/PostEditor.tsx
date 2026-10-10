"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Icon from "@/components/Icon";
import { blogFilters } from "@/data/blog";
import { treatmentCategories } from "@/data/treatmentCategories";
import { slugify } from "@/lib/blog/slug";
import type { BlogCategory, Post, PostInput, PostStatus } from "@/lib/blog/types";
import RichTextEditor from "./RichTextEditor";
import { formatDateTime } from "./format";
import { uploadImage } from "./upload";
import styles from "./admin.module.css";

type FieldErrors = Partial<Record<string, string>>;

type Props = {
  /** Existing post to edit; omitted for a new post */
  post?: Post;
  /** One-off message shown on load, e.g. after creating the post */
  notice?: string;
};

const EXCERPT_MAX = 320;

const emptyInput: PostInput = {
  slug: "",
  title: "",
  excerpt: "",
  category: "face",
  topic: "",
  coverImage: { src: "", alt: "" },
  treatment: null,
  content: "",
  questions: [],
  status: "draft",
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
  questions: [...post.questions],
  status: post.status,
});

export default function PostEditor({ post, notice }: Props) {
  const router = useRouter();
  const isNew = !post;
  const [values, setValues] = useState<PostInput>(() => (post ? toInput(post) : emptyInput));
  const [saved, setSaved] = useState(() => JSON.stringify(post ? toInput(post) : emptyInput));
  const [savedStatus, setSavedStatus] = useState<PostStatus | null>(post?.status ?? null);
  const [updatedAt, setUpdatedAt] = useState(post?.updatedAt ?? null);
  const [slugTouched, setSlugTouched] = useState(!isNew);
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
      setCover({ src: await uploadImage(file) });
    } catch (err) {
      setErrors((e) => ({ ...e, "coverImage.src": err instanceof Error ? err.message : "Upload failed" }));
    } finally {
      setUploading(false);
      if (coverFileRef.current) coverFileRef.current.value = "";
    }
  };

  const save = async (status: PostStatus) => {
    const payload: PostInput = { ...values, status, questions: values.questions.map((q) => q.trim()).filter(Boolean) };
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
      setUpdatedAt(new Date().toISOString());
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
          {isPublished && post && (
            <a href={`/blog/${post.slug}`} target="_blank" rel="noopener" className={`${styles.button} ${styles.buttonGhost}`}>
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
                placeholder="e.g. Rhinoplasty: Appearance, Breathing and Recovery"
                maxLength={160}
                {...invalid("title")}
              />
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
                  placeholder="rhinoplasty-recovery-guide"
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
                  <Icon name="warning" /> Changing the URL of a published post breaks existing links to it.
                </p>
              )}
            </div>

            <label className={styles.field}>
              <span className={styles.labelRow}>
                <span className={styles.label}>Summary</span>
                <span className={`${styles.counter} ${values.excerpt.length > 160 ? styles.counterWarn : ""}`}>
                  {values.excerpt.length}/{EXCERPT_MAX}
                </span>
              </span>
              <textarea
                className={styles.input}
                rows={3}
                value={values.excerpt}
                onChange={(e) => set("excerpt", e.target.value)}
                placeholder="One or two sentences shown on blog cards, under the title and in Google results."
                maxLength={EXCERPT_MAX}
                {...invalid("excerpt")}
              />
              <span className={styles.fieldHint}>Aim for 120–160 characters so search results don’t cut it off.</span>
              {error("excerpt")}
            </label>
          </section>

          <section className={styles.card}>
            <div className={styles.cardHeader}>
              <h2 className={styles.cardTitle}>Article</h2>
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
              <h2 className={styles.cardTitle}>Questions to ask at your consultation</h2>
              <p className={styles.cardSubtitle}>Optional checklist shown at the end of the article.</p>
            </div>
            {values.questions.length > 0 && (
              <ol className={styles.questionList}>
                {values.questions.map((question, index) => (
                  <li key={index} className={styles.questionItem}>
                    <span className={styles.questionNumber}>{index + 1}</span>
                    <input
                      className={styles.input}
                      value={question}
                      onChange={(e) => set("questions", values.questions.map((q, i) => (i === index ? e.target.value : q)))}
                      placeholder="e.g. How long does swelling usually take to settle?"
                      maxLength={300}
                      aria-label={`Question ${index + 1}`}
                    />
                    <button
                      type="button"
                      className={`${styles.iconButton} ${styles.iconButtonDanger}`}
                      onClick={() => set("questions", values.questions.filter((_, i) => i !== index))}
                      title="Remove question"
                    >
                      <Icon name="close" />
                      <span className={styles.srOnly}>Remove question {index + 1}</span>
                    </button>
                  </li>
                ))}
              </ol>
            )}
            {values.questions.length < 20 && (
              <button
                type="button"
                className={`${styles.button} ${styles.buttonGhost} ${styles.buttonSmall}`}
                onClick={() => set("questions", [...values.questions, ""])}
              >
                <Icon name="add" />
                Add question
              </button>
            )}
            {error("questions")}
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
                placeholder="e.g. Rhinoplasty guide"
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
            <span className={styles.fieldHint}>JPEG, PNG, WebP or AVIF, up to 5 MB. Landscape (16:10) works best.</span>
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
                  onChange={(e) => setCover({ src: e.target.value.trim() })}
                  placeholder="/images/procedures/2.png"
                />
              </label>
            </details>
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
