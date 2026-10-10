"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import PostEditor from "@/components/admin/PostEditor";
import Icon from "@/components/Icon";
import styles from "@/app/admin/admin.module.css";

export default function NewPostPage() {
  const [authChecked, setAuthChecked] = useState(false);
  const router = useRouter();

  useEffect(() => {
    async function check() {
      try {
        const res = await fetch("/api/admin/auth");
        const data = await res.json();
        if (!data.isAuthenticated) {
          router.push("/admin/login");
          return;
        }
        setAuthChecked(true);
      } catch {
        router.push("/admin/login");
      }
    }
    check();
  }, [router]);

  if (!authChecked) {
    return (
      <div style={{ padding: "4rem", textAlign: "center", color: "#64748b" }}>
        Verifying admin authorization...
      </div>
    );
  }

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

      <PostEditor />
    </div>
  );
}
