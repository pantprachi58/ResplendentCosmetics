"use client";

import { useEffect, useState } from "react";
import Icon from "@/components/Icon";
import BlogCard from "./BlogCard";
import { BLOG_PAGE_SIZE, blogFilters, type BlogFilter } from "@/data/blog";
import type { PostSummary } from "@/lib/blog/types";
import ui from "@/components/shared/ui.module.css";
import styles from "./BlogExplorer.module.css";

const isFilter = (value: string | null): value is BlogFilter => blogFilters.some((f) => f.id === value);

/** Category tabs + card grid with "Show more". The active category is mirrored in ?category= so it can be linked. */
export default function BlogExplorer({ posts: allPosts }: { posts: PostSummary[] }) {
  const [filter, setFilter] = useState<BlogFilter>("all");
  const [visible, setVisible] = useState(BLOG_PAGE_SIZE);

  // Read ?category= after hydration so the statically rendered page (All) stays cacheable.
  useEffect(() => {
    const requested = new URLSearchParams(window.location.search).get("category");
    if (isFilter(requested)) setFilter(requested);
  }, []);

  const select = (next: BlogFilter) => {
    setFilter(next);
    setVisible(BLOG_PAGE_SIZE);
    const url = new URL(window.location.href);
    if (next === "all") url.searchParams.delete("category");
    else url.searchParams.set("category", next);
    window.history.replaceState(null, "", url);
  };

  const postsFor = (category: BlogFilter) =>
    category === "all" ? allPosts : allPosts.filter((post) => post.category === category);

  const posts = postsFor(filter);
  const shown = posts.slice(0, visible);
  const remaining = posts.length - shown.length;

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
            Showing {shown.length} of {posts.length} articles
          </p>
        </div>

        {shown.length > 0 ? (
          <ul className={styles.grid}>
            {shown.map((post) => (
              <li key={post.slug}>
                <BlogCard post={post} />
              </li>
            ))}
          </ul>
        ) : (
          <p className={styles.empty}>No articles in this category yet.</p>
        )}

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
      </div>
    </section>
  );
}
