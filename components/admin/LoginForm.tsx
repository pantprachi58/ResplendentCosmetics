"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Icon from "@/components/Icon";
import styles from "./admin.module.css";

export default function LoginForm() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    setPending(true);
    setError("");
    try {
      const res = await fetch("/api/admin/session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: form.get("email"), password: form.get("password") }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "Sign-in failed");
      router.replace("/admin");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Sign-in failed");
      setPending(false);
    }
  };

  return (
    <form className={styles.form} onSubmit={submit} noValidate={false}>
      {error && (
        <p className={styles.alertError} role="alert">
          <Icon name="error" />
          {error}
        </p>
      )}
      <label className={styles.field}>
        <span className={styles.label}>Email</span>
        <input className={styles.input} name="email" type="email" autoComplete="username" required autoFocus disabled={pending} />
      </label>
      <label className={styles.field}>
        <span className={styles.label}>Password</span>
        <input className={styles.input} name="password" type="password" autoComplete="current-password" required disabled={pending} />
      </label>
      <button type="submit" className={`${styles.button} ${styles.buttonPrimary} ${styles.buttonBlock}`} disabled={pending}>
        <Icon name="lock_open" />
        {pending ? "Signing in…" : "Sign in"}
      </button>
    </form>
  );
}
