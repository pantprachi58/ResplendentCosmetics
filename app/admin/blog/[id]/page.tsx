"use client";

import { useEffect, useState, use } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import PostEditor from "@/components/admin/PostEditor";
import { BlogPost } from "@/lib/blog-types";
import Icon from "@/components/Icon";
import styles from "@/app/admin/admin.module.css";

interface EditPostPageProps {
  params: Promise<{ id: string }>;
}

export default function EditPostPage({ params }: EditPostPageProps) {
  const { id } = use(params);
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    async function load() {
      try {
        const authRes = await fetch("/api/admin/auth");
        const authData = await authRes.json();
        if (!authData.isAuthenticated) {
          router.push("/admin/login");
          return;
        }

        const res = await fetch(`/api/blog/${id}`);
        if (!res.ok) throw new Error("Failed to load article from MongoDB");
        const data = await res.json();
        setPost(data.post);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Error loading post");
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [id, router]);

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
              href="/admin"
              className={styles.btnAction}
              style={{ color: "#ffffff", borderColor: "rgba(255,255,255,0.2)", backgroundColor: "rgba(255,255,255,0.08)" }}
            >
              <Icon name="dashboard" style={{ fontSize: 16 }} />
              <span>Dashboard</span>
            </Link>
          </div>
        </div>
      </header>

      {loading ? (
        <div style={{ padding: "4rem", textAlign: "center", color: "#64748b" }}>
          Loading post details from MongoDB...
        </div>
      ) : error ? (
        <div style={{ padding: "4rem", textAlign: "center", color: "#b91c1c" }}>
          <p>{error}</p>
          <Link href="/admin" style={{ color: "#0052cc", textDecoration: "underline" }}>
            Return to Dashboard
          </Link>
        </div>
      ) : post ? (
        <PostEditor initialData={post} isEditing={true} />
      ) : null}
    </div>
  );
}
