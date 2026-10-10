"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  BlogPost,
  BlogPostInput,
  BLOG_CATEGORIES,
  DEFAULT_AUTHOR,
  slugify,
} from "@/lib/blog-types";
import Icon from "@/components/Icon";
import styles from "./PostEditor.module.css";
import ui from "@/components/shared/ui.module.css";
import articleStyles from "@/app/blog/[slug]/page.module.css";

interface PostEditorProps {
  initialData?: BlogPost;
  isEditing?: boolean;
}

export default function PostEditor({ initialData, isEditing = false }: PostEditorProps) {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [title, setTitle] = useState(initialData?.title || "");
  const [slug, setSlug] = useState(initialData?.slug || "");
  const [isCustomSlug, setIsCustomSlug] = useState(!!initialData?.slug);
  const [excerpt, setExcerpt] = useState(initialData?.excerpt || "");
  const [category, setCategory] = useState(initialData?.category || BLOG_CATEGORIES[0]);
  const [tags, setTags] = useState(initialData?.tags ? initialData.tags.join(", ") : "");
  const [coverImage, setCoverImage] = useState(
    initialData?.coverImage ||
      "https://lh3.googleusercontent.com/p/AF1QipNkJW8f7U2_Z1E87P2c9Hh94iWvYVkWtqB0WzY=s1360-w1360-h1020"
  );
  const [content, setContent] = useState(
    initialData?.content ||
      `<h2>Introduction</h2>\n<p>Start writing your clinical article here...</p>\n\n<h3>Key Clinical Takeaways</h3>\n<ul>\n  <li>First point</li>\n  <li>Second point</li>\n</ul>`
  );
  const [status, setStatus] = useState<"published" | "draft">(
    initialData?.status || "published"
  );
  const [authorName, setAuthorName] = useState(
    initialData?.author?.name || DEFAULT_AUTHOR.name
  );
  const [authorRole, setAuthorRole] = useState(
    initialData?.author?.role || DEFAULT_AUTHOR.role
  );

  const [activeTab, setActiveTab] = useState<"edit" | "preview">("edit");
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");

  const handleTitleChange = (val: string) => {
    setTitle(val);
    if (!isCustomSlug) {
      setSlug(slugify(val));
    }
  };

  const handleInsertTag = (tagOpen: string, tagClose: string = "") => {
    const textarea = document.getElementById("content-textarea") as HTMLTextAreaElement;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selected = content.substring(start, end);
    const replacement = `${tagOpen}${selected || "Text"}${tagClose}`;

    const newContent =
      content.substring(0, start) + replacement + content.substring(end);
    setContent(newContent);

    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(
        start + tagOpen.length,
        start + tagOpen.length + (selected.length || 4)
      );
    }, 50);
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setUploading(true);
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Upload failed");

      setCoverImage(data.url);
    } catch (err: unknown) {
      alert("Image upload failed: " + (err instanceof Error ? err.message : String(err)));
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (!title.trim() || !excerpt.trim() || !content.trim()) {
      setError("Please fill in Title, Excerpt, and Content.");
      setLoading(false);
      return;
    }

    const payload: BlogPostInput = {
      title,
      slug: slug || slugify(title),
      excerpt,
      content,
      category,
      tags,
      coverImage,
      author: {
        name: authorName,
        role: authorRole,
      },
      status,
    };

    try {
      let res;
      if (isEditing && initialData?._id) {
        res = await fetch(`/api/blog/${initialData._id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      } else {
        res = await fetch("/api/blog", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      }

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to save post");

      router.push("/admin");
      router.refresh();
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Save failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.editorContainer}>
      <div className={styles.topRow}>
        <Link href="/admin" className={styles.backLink}>
          <Icon name="arrow_back" style={{ fontSize: 16 }} />
          <span>Back to Dashboard</span>
        </Link>
        <div style={{ display: "flex", gap: "0.5rem" }}>
          {isEditing && initialData?.slug && initialData.status === "published" && (
            <Link
              href={`/blog/${initialData.slug}`}
              target="_blank"
              className={`${ui.btn} ${ui.btnSecondary}`}
              style={{ fontSize: 12, padding: "0.5rem 1rem" }}
            >
              <Icon name="visibility" />
              View Live
            </Link>
          )}
        </div>
      </div>

      {error && (
        <div
          style={{
            backgroundColor: "#fef2f2",
            border: "1px solid #fecaca",
            color: "#b91c1c",
            padding: "0.75rem 1rem",
            borderRadius: "0.5rem",
            marginBottom: "1.5rem",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <Icon name="error" />
          <span>{error}</span>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className={styles.formGrid}>
          {/* Main Column: Content & Metadata */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div className={styles.card}>
              <h2 className={styles.sectionTitle}>
                {isEditing ? "Edit Article" : "Write New Article"}
              </h2>

              {/* Title */}
              <div className={ui.field}>
                <label className={ui.label} htmlFor="post-title">
                  Article Title *
                </label>
                <input
                  id="post-title"
                  type="text"
                  required
                  className={ui.input}
                  placeholder="e.g. Understanding Rhinoplasty Recovery: Week-by-Week Guide"
                  value={title}
                  onChange={(e) => handleTitleChange(e.target.value)}
                />
              </div>

              {/* Slug Preview & Edit */}
              <div className={ui.field}>
                <label className={ui.label} htmlFor="post-slug">
                  Clean URL Slug *
                </label>
                <div style={{ display: "flex", gap: "0.5rem" }}>
                  <input
                    id="post-slug"
                    type="text"
                    required
                    className={ui.input}
                    placeholder="e.g. rhinoplasty-recovery-guide-delhi"
                    value={slug}
                    onChange={(e) => {
                      setIsCustomSlug(true);
                      setSlug(slugify(e.target.value));
                    }}
                  />
                  <button
                    type="button"
                    className={`${ui.btn} ${ui.btnSecondary}`}
                    style={{ fontSize: 11, padding: "0.4rem 0.8rem", whiteSpace: "nowrap" }}
                    onClick={() => {
                      setIsCustomSlug(false);
                      setSlug(slugify(title));
                    }}
                  >
                    Reset Slug
                  </button>
                </div>
                <div className={styles.slugPreview}>
                  <Icon name="link" style={{ fontSize: 14 }} />
                  <span>Public URL: /blog/{slug || "your-slug-here"}</span>
                </div>
              </div>

              {/* Excerpt */}
              <div className={ui.field}>
                <label className={ui.label} htmlFor="post-excerpt">
                  Short Excerpt / SEO Meta Summary *
                </label>
                <textarea
                  id="post-excerpt"
                  required
                  rows={3}
                  className={ui.input}
                  placeholder="Brief 1-2 sentence clinical summary for cards and search engine results..."
                  value={excerpt}
                  onChange={(e) => setExcerpt(e.target.value)}
                />
                <span style={{ fontSize: 11, color: "#64748b" }}>
                  {excerpt.length} characters (Recommended: 120-160 characters)
                </span>
              </div>
            </div>

            {/* Rich Content Editor */}
            <div className={styles.card}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  borderBottom: "1px solid #f1f5f9",
                  paddingBottom: "0.75rem",
                }}
              >
                <h2 className={styles.sectionTitle} style={{ borderBottom: "none", paddingBottom: 0 }}>
                  Article Content (HTML / Markdown) *
                </h2>
                <div className={styles.tabButtons}>
                  <button
                    type="button"
                    className={`${styles.tabBtn} ${
                      activeTab === "edit" ? styles.tabBtnActive : ""
                    }`}
                    onClick={() => setActiveTab("edit")}
                  >
                    Editor
                  </button>
                  <button
                    type="button"
                    className={`${styles.tabBtn} ${
                      activeTab === "preview" ? styles.tabBtnActive : ""
                    }`}
                    onClick={() => setActiveTab("preview")}
                  >
                    Live Preview
                  </button>
                </div>
              </div>

              {activeTab === "edit" ? (
                <div>
                  {/* Formatting Toolbar */}
                  <div className={styles.toolbar}>
                    <button
                      type="button"
                      className={styles.toolBtn}
                      onClick={() => handleInsertTag("<h2>", "</h2>")}
                    >
                      H2
                    </button>
                    <button
                      type="button"
                      className={styles.toolBtn}
                      onClick={() => handleInsertTag("<h3>", "</h3>")}
                    >
                      H3
                    </button>
                    <button
                      type="button"
                      className={styles.toolBtn}
                      onClick={() => handleInsertTag("<strong>", "</strong>")}
                    >
                      <strong>B</strong>
                    </button>
                    <button
                      type="button"
                      className={styles.toolBtn}
                      onClick={() => handleInsertTag("<em>", "</em>")}
                    >
                      <em>I</em>
                    </button>
                    <button
                      type="button"
                      className={styles.toolBtn}
                      onClick={() => handleInsertTag("<ul>\n  <li>", "</li>\n</ul>")}
                    >
                      List
                    </button>
                    <button
                      type="button"
                      className={styles.toolBtn}
                      onClick={() =>
                        handleInsertTag(
                          "<blockquote>\n  ",
                          "\n  <footer>— Dr. Sukhbir Singh</footer>\n</blockquote>"
                        )
                      }
                    >
                      Quote
                    </button>
                  </div>
                  <textarea
                    id="content-textarea"
                    required
                    className={styles.textarea}
                    placeholder="Enter formatted HTML or Markdown content here..."
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                  />
                </div>
              ) : (
                <div className={styles.previewBox}>
                  <div
                    className={articleStyles.articleBody}
                    dangerouslySetInnerHTML={{ __html: content }}
                  />
                </div>
              )}
            </div>
          </div>

          {/* Sidebar Column: Settings, Image, Category & Publishing */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {/* Publish Actions Card */}
            <div className={styles.card}>
              <h2 className={styles.sectionTitle}>Publishing</h2>

              <div className={ui.field}>
                <label className={ui.label}>Post Status</label>
                <div style={{ display: "flex", gap: "1rem" }}>
                  <label style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: 13, cursor: "pointer" }}>
                    <input
                      type="radio"
                      name="status"
                      value="published"
                      checked={status === "published"}
                      onChange={() => setStatus("published")}
                    />
                    <span style={{ fontWeight: 600, color: "#065f46" }}>Published Live</span>
                  </label>
                  <label style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: 13, cursor: "pointer" }}>
                    <input
                      type="radio"
                      name="status"
                      value="draft"
                      checked={status === "draft"}
                      onChange={() => setStatus("draft")}
                    />
                    <span style={{ fontWeight: 600, color: "#92400e" }}>Draft</span>
                  </label>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`${ui.btn} ${ui.btnPrimary} ${ui.btnBlock}`}
              >
                {loading ? (
                  <span>Saving to MongoDB...</span>
                ) : (
                  <>
                    <Icon name="save" />
                    <span>{isEditing ? "Update Article" : "Publish Article"}</span>
                  </>
                )}
              </button>
            </div>

            {/* Category & Tags Card */}
            <div className={styles.card}>
              <h2 className={styles.sectionTitle}>Categorization</h2>

              <div className={ui.field}>
                <label className={ui.label} htmlFor="post-category">
                  Clinical Category *
                </label>
                <select
                  id="post-category"
                  className={ui.input}
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  {BLOG_CATEGORIES.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              <div className={ui.field}>
                <label className={ui.label} htmlFor="post-tags">
                  Tags (Comma separated)
                </label>
                <input
                  id="post-tags"
                  type="text"
                  className={ui.input}
                  placeholder="e.g. Rhinoplasty, Recovery, Delhi, Surgery"
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                />
              </div>
            </div>

            {/* Cover Image Card */}
            <div className={styles.card}>
              <h2 className={styles.sectionTitle}>Featured Cover Image</h2>

              <div className={ui.field}>
                <label className={ui.label} htmlFor="cover-image-url">
                  Image URL
                </label>
                <input
                  id="cover-image-url"
                  type="text"
                  className={ui.input}
                  placeholder="https://... or /images/..."
                  value={coverImage}
                  onChange={(e) => setCoverImage(e.target.value)}
                />
              </div>

              <div className={styles.uploadRow}>
                <input
                  type="file"
                  ref={fileInputRef}
                  style={{ display: "none" }}
                  accept="image/*"
                  onChange={handleFileUpload}
                />
                <button
                  type="button"
                  disabled={uploading}
                  className={`${ui.btn} ${ui.btnSecondary} ${ui.btnBlock}`}
                  style={{ fontSize: 12, padding: "0.5rem 1rem" }}
                  onClick={() => fileInputRef.current?.click()}
                >
                  <Icon name="upload" />
                  <span>{uploading ? "Uploading..." : "Upload New Image"}</span>
                </button>
              </div>

              {coverImage && (
                <div>
                  <span style={{ fontSize: 11, color: "#64748b", fontWeight: 700, textTransform: "uppercase" }}>
                    Image Preview
                  </span>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={coverImage}
                    alt="Cover preview"
                    className={styles.imagePreview}
                  />
                </div>
              )}
            </div>

            {/* Author Settings Card */}
            <div className={styles.card}>
              <h2 className={styles.sectionTitle}>Author Details</h2>

              <div className={ui.field}>
                <label className={ui.label} htmlFor="author-name">
                  Author Name
                </label>
                <input
                  id="author-name"
                  type="text"
                  className={ui.input}
                  value={authorName}
                  onChange={(e) => setAuthorName(e.target.value)}
                />
              </div>

              <div className={ui.field}>
                <label className={ui.label} htmlFor="author-role">
                  Credentials / Role
                </label>
                <input
                  id="author-role"
                  type="text"
                  className={ui.input}
                  value={authorRole}
                  onChange={(e) => setAuthorRole(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
