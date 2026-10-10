import type { Metadata } from "next";
import Link from "next/link";
import { requireAdminPage } from "@/lib/auth/session";
import { listAllPosts } from "@/lib/blog/repository";
import PostsTable from "@/components/admin/PostsTable";
import Icon from "@/components/Icon";
import styles from "@/components/admin/admin.module.css";

export const metadata: Metadata = { title: "Posts" };

export default async function AdminPostsPage() {
  await requireAdminPage();
  const posts = await listAllPosts();
  const published = posts.filter((p) => p.status === "published").length;

  const stats = [
    { label: "All posts", value: posts.length, icon: "article" },
    { label: "Published", value: published, icon: "public" },
    { label: "Drafts", value: posts.length - published, icon: "draft" },
  ];

  return (
    <>
      <header className={styles.pageHeader}>
        <div>
          <h1 className={styles.pageTitle}>Blog posts</h1>
          <p className={styles.pageSubtitle}>Write, edit and publish articles shown on /blog.</p>
        </div>
        <Link href="/admin/posts/new" className={`${styles.button} ${styles.buttonPrimary}`}>
          <Icon name="add" />
          New post
        </Link>
      </header>

      <div className={styles.stats}>
        {stats.map((stat) => (
          <div key={stat.label} className={styles.stat}>
            <Icon name={stat.icon} className={styles.statIcon} />
            <div>
              <p className={styles.statValue}>{stat.value}</p>
              <p className={styles.statLabel}>{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      <PostsTable posts={posts} />
    </>
  );
}
