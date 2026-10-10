"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { BlogPost } from "@/lib/blog-types";
import Icon from "@/components/Icon";
import styles from "./admin.module.css";
import ui from "@/components/shared/ui.module.css";

export default function AdminDashboardPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const router = useRouter();

  const fetchPosts = useCallback(async () => {
    try {
      setLoading(true);
      setFetchError(null);
      const res = await fetch("/api/blog?mode=admin");
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to load posts");
      }
      setPosts(data.posts || []);
    } catch (err: unknown) {
      setFetchError(err instanceof Error ? err.message : "Failed to load posts");
    } finally {
      setLoading(false);
    }
  }, []);

  const checkAuth = useCallback(async () => {
    try {
      const res = await fetch("/api/admin/auth");
      const data = await res.json();
      if (!data.isAuthenticated) {
        router.push("/admin/login");
        return;
      }
      fetchPosts();
    } catch {
      router.push("/admin/login");
    }
  }, [router, fetchPosts]);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  const handleLogout = async () => {
    await fetch("/api/admin/auth", { method: "DELETE" });
    router.push("/admin/login");
  };

  const handleDelete = async (id: string, title: string) => {
    if (!confirm(`Are you sure you want to delete "${title}"? This cannot be undone.`)) {
      return;
    }

    try {
      setDeletingId(id);
      const res = await fetch(`/api/blog/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Delete failed");
      setPosts((prev) => prev.filter((p) => p._id !== id));
    } catch (err) {
      alert("Failed to delete post: " + String(err));
    } finally {
      setDeletingId(null);
    }
  };

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesCat = categoryFilter === "All" || post.category === categoryFilter;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        post.title.toLowerCase().includes(query) ||
        post.slug.toLowerCase().includes(query) ||
        post.category.toLowerCase().includes(query);
      return matchesCat && matchesSearch;
    });
  }, [posts, categoryFilter, searchQuery]);

  const totalPublished = posts.filter((p) => p.status === "published").length;
  const totalDrafts = posts.filter((p) => p.status === "draft").length;
  const categoriesCount = new Set(posts.map((p) => p.category)).size;

  const formatDate = (dateString: string) => {
    try {
      return new Date(dateString).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      });
    } catch {
      return dateString;
    }
  };

  return (
    <div className={styles.adminRoot}>
      {/* Topbar */}
      <header className={styles.topbar}>
        <div className={styles.topbarInner}>
          <Link href="/admin" className={styles.brand}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/svg/Resplendent Logo Color.png"
              alt="Logo"
              className={styles.brandLogo}
            />
            <span className={styles.brandText}>Resplendent Aesthetics</span>
            <span className={styles.brandBadge}>Admin Portal</span>
          </Link>

          <div className={styles.topbarNav}>
            <Link
              href="/"
              target="_blank"
              className={`${styles.btnAction}`}
              style={{ color: "#ffffff", borderColor: "rgba(255,255,255,0.2)", backgroundColor: "rgba(255,255,255,0.08)" }}
            >
              <Icon name="open_in_new" style={{ fontSize: 16 }} />
              <span>Public Website</span>
            </Link>
            <Link
              href="/blog"
              target="_blank"
              className={`${styles.btnAction}`}
              style={{ color: "#ffffff", borderColor: "rgba(255,255,255,0.2)", backgroundColor: "rgba(255,255,255,0.08)" }}
            >
              <Icon name="article" style={{ fontSize: 16 }} />
              <span>Live Blog</span>
            </Link>
            <button
              type="button"
              onClick={handleLogout}
              className={`${styles.btnAction}`}
              style={{ color: "#f87171", borderColor: "rgba(248,113,113,0.3)", backgroundColor: "rgba(248,113,113,0.1)" }}
            >
              <Icon name="logout" style={{ fontSize: 16 }} />
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className={styles.container}>
        {/* Page Header */}
        <div className={styles.pageHeader}>
          <div>
            <h1 className={styles.pageTitle}>Blog Management</h1>
            <p className={styles.pageSubtitle}>
              Create, edit, publish, and manage clean-URL medical articles powered by MongoDB.
            </p>
          </div>
          <Link
            href="/admin/blog/new"
            className={`${ui.btn} ${ui.btnPrimary}`}
            style={{ padding: "0.625rem 1.25rem", fontSize: 13 }}
          >
            <Icon name="add" />
            <span>Write New Article</span>
          </Link>
        </div>

        {/* Metric Cards */}
        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <div>
              <div className={styles.statValue}>{posts.length}</div>
              <div className={styles.statLabel}>Total Articles</div>
            </div>
            <Icon name="article" className={styles.statIcon} />
          </div>
          <div className={styles.statCard}>
            <div>
              <div className={styles.statValue} style={{ color: "#10b981" }}>
                {totalPublished}
              </div>
              <div className={styles.statLabel}>Published Live</div>
            </div>
            <Icon name="check_circle" className={styles.statIcon} style={{ color: "#10b981" }} />
          </div>
          <div className={styles.statCard}>
            <div>
              <div className={styles.statValue} style={{ color: "#f59e0b" }}>
                {totalDrafts}
              </div>
              <div className={styles.statLabel}>Drafts</div>
            </div>
            <Icon name="edit_note" className={styles.statIcon} style={{ color: "#f59e0b" }} />
          </div>
          <div className={styles.statCard}>
            <div>
              <div className={styles.statValue}>{categoriesCount}</div>
              <div className={styles.statLabel}>Active Categories</div>
            </div>
            <Icon name="category" className={styles.statIcon} />
          </div>
        </div>

        {/* Posts Table Card */}
        <div className={styles.tableCard}>
          {/* Table Toolbar */}
          <div className={styles.tableToolbar}>
            <div className={styles.searchBox}>
              <Icon name="search" className={styles.searchBoxIcon} />
              <input
                type="text"
                className={styles.searchBoxInput}
                placeholder="Search by title, slug, or category..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <span style={{ fontSize: 12, fontWeight: 700, color: "#64748b", textTransform: "uppercase" }}>
                Category:
              </span>
              <select
                className={ui.input}
                style={{ padding: "0.5rem 0.75rem", fontSize: 13, width: "auto" }}
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
              >
                <option value="All">All Categories ({posts.length})</option>
                {Array.from(new Set(posts.map((p) => p.category))).map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Table Content */}
          <div className={styles.tableResponsive}>
            {loading ? (
              <div style={{ padding: "3rem", textAlign: "center", color: "#64748b" }}>
                Loading blog posts...
              </div>
            ) : fetchError ? (
              <div style={{ padding: "3rem", textAlign: "center", color: "#b91c1c" }}>
                <p style={{ marginBottom: "1rem" }}>{fetchError}</p>
                <button
                  type="button"
                  onClick={fetchPosts}
                  className={`${ui.btn} ${ui.btnSecondary}`}
                  style={{ fontSize: 12, padding: "0.5rem 1rem" }}
                >
                  <Icon name="refresh" /> Retry
                </button>
              </div>
            ) : filteredPosts.length === 0 ? (
              <div style={{ padding: "3rem", textAlign: "center", color: "#64748b" }}>
                No articles match your query. Click &quot;Write New Article&quot; to publish your first post.
              </div>
            ) : (
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Article Details & Clean URL</th>
                    <th>Category</th>
                    <th>Status</th>
                    <th>Publish Date</th>
                    <th style={{ textAlign: "right" }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredPosts.map((post) => (
                    <tr key={post._id || post.slug}>
                      <td>
                        <Link
                          href={`/admin/blog/${post._id}`}
                          className={styles.postCellTitle}
                        >
                          {post.title}
                        </Link>
                        <div className={styles.postCellSlug}>
                          <span>/blog/{post.slug}</span>
                        </div>
                      </td>
                      <td>
                        <span style={{ fontWeight: 600, color: "#334155" }}>
                          {post.category}
                        </span>
                      </td>
                      <td>
                        {post.status === "published" ? (
                          <span className={styles.badgePublished}>
                            <span style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: "#10b981" }} />
                            Published
                          </span>
                        ) : (
                          <span className={styles.badgeDraft}>
                            <span style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: "#f59e0b" }} />
                            Draft
                          </span>
                        )}
                      </td>
                      <td>{formatDate(post.publishedAt)}</td>
                      <td>
                        <div className={styles.actionBtnGroup} style={{ justifyContent: "flex-end" }}>
                          {post.status === "published" && (
                            <Link
                              href={`/blog/${post.slug}`}
                              target="_blank"
                              className={styles.btnAction}
                              title="View live post on frontend"
                            >
                              <Icon name="visibility" style={{ fontSize: 16 }} />
                              <span>View</span>
                            </Link>
                          )}
                          <Link
                            href={`/admin/blog/${post._id}`}
                            className={styles.btnAction}
                            title="Edit article"
                          >
                            <Icon name="edit" style={{ fontSize: 16 }} />
                            <span>Edit</span>
                          </Link>
                          <button
                            type="button"
                            onClick={() => post._id && handleDelete(post._id, post.title)}
                            disabled={deletingId === post._id}
                            className={`${styles.btnAction} ${styles.btnDelete}`}
                            title="Delete article"
                          >
                            <Icon name="delete" style={{ fontSize: 16 }} />
                            <span>{deletingId === post._id ? "..." : "Delete"}</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
