"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./AdminToolbar.module.css";

type AdminToolbarProps = {
  postSlug: string;
};

/**
 * Floating toolbar that appears on blog posts for admin users.
 * Shows quick access to edit the post in the admin panel.
 */
export default function AdminToolbar({ postSlug }: AdminToolbarProps) {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    // Check if user is on admin domain or has admin cookie/session
    // For now, we'll check if they've visited the admin panel recently
    const isAdminSession = sessionStorage.getItem("admin-session") === "true";
    const hasAdminPath = document.referrer.includes("/admin/");
    
    setIsAdmin(isAdminSession || hasAdminPath);

    // If coming from admin, set session flag
    if (hasAdminPath) {
      sessionStorage.setItem("admin-session", "true");
    }
  }, []);

  if (!isAdmin) return null;

  return (
    <div className={styles.toolbar}>
      <div className={styles.badge}>
        <span className={styles.dot} />
        <span>Admin View</span>
      </div>
      <div className={styles.actions}>
        <Link href={`/admin/blog/${postSlug}`} className={styles.editBtn}>
          <span className="material-symbols-outlined">edit</span>
          <span>Edit Post</span>
        </Link>
        <Link href="/admin/blog" className={styles.dashboardBtn}>
          <span className="material-symbols-outlined">dashboard</span>
          <span>Dashboard</span>
        </Link>
      </div>
    </div>
  );
}
