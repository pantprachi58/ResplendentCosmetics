"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Icon from "@/components/Icon";
import styles from "./page.module.css";
import ui from "@/components/shared/ui.module.css";

export default function AdminLoginPage() {
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/admin/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Authentication failed");
      }

      router.push("/admin");
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.loginPage}>
      <div className={styles.loginCard}>
        <div className={styles.loginHeader}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/svg/Resplendent Logo Color.png"
            alt="Resplendent Cosmetics"
            className={styles.loginLogo}
          />
          <h1 className={styles.loginTitle}>Resplendent Admin</h1>
          <p className={styles.loginSubtitle}>
            Sign in to manage dynamic blog articles & content
          </p>
        </div>

        {error && (
          <div className={styles.errorMessage}>
            <Icon name="error" style={{ fontSize: 18 }} />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleLogin} className={styles.form}>
          <div className={ui.field}>
            <label className={ui.label} htmlFor="admin-password">
              Admin Access Password
            </label>
            <input
              id="admin-password"
              type="password"
              required
              className={ui.input}
              placeholder="Enter password..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={loading}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`${ui.btn} ${ui.btnPrimary} ${ui.btnBlock}`}
            style={{ marginTop: "0.5rem" }}
          >
            {loading ? (
              <span>Authenticating...</span>
            ) : (
              <>
                <Icon name="lock_open" />
                <span>Access Dashboard</span>
              </>
            )}
          </button>
        </form>

        <Link href="/" className={styles.backLink}>
          ← Return to Public Website
        </Link>
      </div>
    </div>
  );
}
