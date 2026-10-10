"use client";

import { useMemo, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Icon from "@/components/Icon";
import { blogCategoryLabel, blogFilters, type BlogFilter } from "@/data/blog";
import type { PostStatus, PostSummary } from "@/lib/blog/types";
import { formatDate } from "./format";
import styles from "./admin.module.css";

type StatusFilter = "all" | PostStatus;

export default function PostsTable({ posts }: { posts: PostSummary[] }) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<BlogFilter>("all");
  const [status, setStatus] = useState<StatusFilter>("all");
  const [pendingDelete, setPendingDelete] = useState<PostSummary | null>(null);
  const [deleting, setDeleting] = useState(false);
  const [error, setError] = useState("");
  const dialogRef = useRef<HTMLDialogElement>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return posts.filter(
      (post) =>
        (category === "all" || post.category === category) &&
        (status === "all" || post.status === status) &&
        (!q || post.title.toLowerCase().includes(q) || post.slug.includes(q) || post.topic.toLowerCase().includes(q))
    );
  }, [posts, query, category, status]);

  const askDelete = (post: PostSummary) => {
    setError("");
    setPendingDelete(post);
    dialogRef.current?.showModal();
  };

  const closeDialog = () => {
    dialogRef.current?.close();
    setPendingDelete(null);
  };

  const confirmDelete = async () => {
    if (!pendingDelete) return;
    setDeleting(true);
    try {
      const res = await fetch(`/api/admin/posts/${pendingDelete.id}`, { method: "DELETE" });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "Delete failed");
      closeDialog();
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Delete failed");
    } finally {
      setDeleting(false);
    }
  };

  return (
    <section className={styles.card}>
      <div className={styles.tableToolbar}>
        <label className={styles.search}>
          <Icon name="search" />
          <input
            type="search"
            className={styles.searchInput}
            placeholder="Search title, URL or topic"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search posts"
          />
        </label>
        <select className={styles.select} value={category} onChange={(e) => setCategory(e.target.value as BlogFilter)} aria-label="Category">
          {blogFilters.map((f) => (
            <option key={f.id} value={f.id}>
              {f.id === "all" ? "All categories" : f.label}
            </option>
          ))}
        </select>
        <select className={styles.select} value={status} onChange={(e) => setStatus(e.target.value as StatusFilter)} aria-label="Status">
          <option value="all">Any status</option>
          <option value="published">Published</option>
          <option value="draft">Draft</option>
        </select>
      </div>

      {filtered.length === 0 ? (
        <div className={styles.emptyState}>
          <Icon name="search_off" />
          <p>{posts.length ? "No posts match these filters." : "No posts yet."}</p>
          {!posts.length && (
            <Link href="/admin/posts/new" className={`${styles.button} ${styles.buttonPrimary}`}>
              Write the first post
            </Link>
          )}
        </div>
      ) : (
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th scope="col">Post</th>
                <th scope="col">Category</th>
                <th scope="col">Status</th>
                <th scope="col">Updated</th>
                <th scope="col">
                  <span className={styles.srOnly}>Actions</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((post) => (
                <tr key={post.id}>
                  <td>
                    <div className={styles.postCell}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={post.coverImage.src} alt="" className={styles.thumb} loading="lazy" />
                      <div className={styles.postCellText}>
                        <Link href={`/admin/posts/${post.id}`} className={styles.postTitle}>
                          {post.title}
                        </Link>
                        <span className={styles.postSlug}>/blog/{post.slug}</span>
                      </div>
                    </div>
                  </td>
                  <td>{blogCategoryLabel[post.category]}</td>
                  <td>
                    <span className={post.status === "published" ? styles.badgePublished : styles.badgeDraft}>
                      {post.status === "published" ? "Published" : "Draft"}
                    </span>
                  </td>
                  <td className={styles.nowrap}>{formatDate(post.updatedAt)}</td>
                  <td>
                    <div className={styles.rowActions}>
                      {post.status === "published" && (
                        <a href={`/blog/${post.slug}`} target="_blank" rel="noopener" className={styles.iconButton} title="View on site">
                          <Icon name="visibility" />
                          <span className={styles.srOnly}>View {post.title} on site</span>
                        </a>
                      )}
                      <Link href={`/admin/posts/${post.id}`} className={styles.iconButton} title="Edit">
                        <Icon name="edit" />
                        <span className={styles.srOnly}>Edit {post.title}</span>
                      </Link>
                      <button type="button" className={`${styles.iconButton} ${styles.iconButtonDanger}`} title="Delete" onClick={() => askDelete(post)}>
                        <Icon name="delete" />
                        <span className={styles.srOnly}>Delete {post.title}</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <dialog ref={dialogRef} className={styles.dialog} onClose={() => setPendingDelete(null)}>
        <h2 className={styles.dialogTitle}>Delete this post?</h2>
        <p className={styles.dialogText}>
          “{pendingDelete?.title}” will be removed from the website permanently. This can’t be undone.
        </p>
        {error && (
          <p className={styles.alertError} role="alert">
            <Icon name="error" />
            {error}
          </p>
        )}
        <div className={styles.dialogActions}>
          <button type="button" className={`${styles.button} ${styles.buttonSecondary}`} onClick={closeDialog} disabled={deleting}>
            Cancel
          </button>
          <button type="button" className={`${styles.button} ${styles.buttonDanger}`} onClick={confirmDelete} disabled={deleting}>
            {deleting ? "Deleting…" : "Delete post"}
          </button>
        </div>
      </dialog>
    </section>
  );
}
