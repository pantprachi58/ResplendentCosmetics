"use client";

import { useEffect, useState } from "react";
import Icon from "@/components/Icon";
import BlogCard from "./BlogCard";
import type { BlogPost } from "@/lib/blog-types";
import ui from "@/components/shared/ui.module.css";
import styles from "./BlogExplorer.module.css";

const BLOG_PAGE_SIZE = 6;

type BlogFilter = { id: string; label: string };

const blogFilters: BlogFilter[] = [
  { id: "All", label: "All" },
  { id: "Facial Aesthetics", label: "Face" },
  { id: "Body Contouring", label: "Body" },
  { id: "Women's Health", label: "Women" },
  { id: "Men's Health", label: "Men" },
  { id: "Skin Rejuvenation & Lasers", label: "Skin" },
  { id: "Hair Restoration", label: "Hair" },
];

const isFilter = (value: string | null): boolean => blogFilters.some((f) => f.id === value);

/** Category tabs + card grid with "Show more". The active category is mirrored in ?category= so it can be linked. */
export default function BlogExplorer() {
  const [filter, setFilter] = useState<string>("All");
  const [visible, setVisible] = useState(BLOG_PAGE_SIZE);
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch posts from API
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch("/api/blog");
        
        if (!response.ok) {
          throw new Error("Failed to fetch blog posts");
        }
        
        const data = await response.json();
        setPosts(data.posts || []);
      } catch (err) {
        console.error("Error fetching blog posts:", err);
        setError("Failed to load blog posts. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // Read ?category= after hydration so the statically rendered page (All) stays cacheable.
  useEffect(() => {
    const requested = new URLSearchParams(window.location.search).get("category");
    if (requested && isFilter(requested)) setFilter(requested);
  }, []);

  const select = (next: string) => {
    setFilter(next);
    setVisible(BLOG_PAGE_SIZE);
    const url = new URL(window.location.href);
    if (next === "All") url.searchParams.delete("category");
    else url.searchParams.set("category", next);
    window.history.replaceState(null, "", url);
  };

  const postsFor = (filter: string) =>
    filter === "All" ? posts : posts.filter((post) => post.category === filter);

  const filteredPosts = postsFor(filter);
  const shown = filteredPosts.slice(0, visible);
  const remaining = filteredPosts.length - shown.length;

  if (loading) {
    return (
      <section className={`${ui.section} ${styles.root}`} aria-labelledby="blog-articles-heading">
        <div className={ui.container}>
          <div style={{ textAlign: "center", padding: "3rem" }}>
            <p>Loading blog posts...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className={`${ui.section} ${styles.root}`} aria-labelledby="blog-articles-heading">
        <div className={ui.container}>
          <div style={{ textAlign: "center", padding: "3rem" }}>
            <p style={{ color: "red" }}>{error}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`${ui.section} ${styles.root}`} aria-labelledby="blog-articles-heading">
      <div className={ui.container}>
        <h2 id="blog-articles-heading" className={styles.srOnly}>
          Articles
        </h2>

        <div className={styles.toolbar}>
          <div className={styles.filters} role="group" aria-label="Filter articles by category">
            {blogFilters.map((item) => {
              const active = item.id === filter;
              return (
                <button
                  key={item.id}
                  type="button"
                  className={`${styles.filter} ${active ? styles.filterActive : ""}`}
                  aria-pressed={active}
                  onClick={() => select(item.id)}
                >
                  {item.label}
                  <span className={styles.count}>{postsFor(item.id).length}</span>
                </button>
              );
            })}
          </div>
          <p className={styles.status} aria-live="polite">
            Showing {shown.length} of {filteredPosts.length} articles
          </p>
        </div>

        {shown.length === 0 ? (
          <div style={{ textAlign: "center", padding: "3rem" }}>
            <p>No blog posts found.</p>
          </div>
        ) : (
          <>
            <ul className={styles.grid}>
              {shown.map((post) => (
                <li key={post.slug}>
                  <BlogCard post={post} />
                </li>
              ))}
            </ul>

            {remaining > 0 && (
              <div className={styles.more}>
                <button
                  type="button"
                  className={`${ui.btn} ${ui.btnSecondary}`}
                  onClick={() => setVisible((count) => count + BLOG_PAGE_SIZE)}
                >
                  Show more
                  <Icon name="expand_more" />
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
