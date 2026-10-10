"use client";

import { useState } from "react";
import Icon from "@/components/Icon";
import styles from "./admin.module.css";

type Field = "currentPassword" | "newPassword" | "confirmPassword";

export default function ChangePasswordForm() {
  const [pending, setPending] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<{ field?: Field; text: string } | null>(null);

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formEl = event.currentTarget;
    const form = new FormData(formEl);
    const newPassword = String(form.get("newPassword"));
    setDone(false);
    if (newPassword !== form.get("confirmPassword")) {
      setError({ field: "confirmPassword", text: "The new passwords don’t match" });
      return;
    }
    setPending(true);
    setError(null);
    try {
      const res = await fetch("/api/admin/password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ currentPassword: form.get("currentPassword"), newPassword }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError({ field: data.field, text: data.error || "The password wasn't changed" });
        return;
      }
      formEl.reset();
      setDone(true);
    } catch {
      setError({ text: "Network error: the password wasn't changed" });
    } finally {
      setPending(false);
    }
  };

  const fieldError = (field: Field) =>
    error?.field === field ? (
      <p className={styles.fieldError} id={`${field}-error`}>
        {error.text}
      </p>
    ) : null;
  const invalid = (field: Field) => (error?.field === field ? { "aria-invalid": true, "aria-describedby": `${field}-error` } : {});

  return (
    <form className={styles.form} onSubmit={submit}>
      {done && (
        <p className={styles.alertSuccess} role="status">
          <Icon name="check_circle" />
          Password changed.
        </p>
      )}
      {error && !error.field && (
        <p className={styles.alertError} role="alert">
          <Icon name="error" />
          {error.text}
        </p>
      )}
      <label className={styles.field}>
        <span className={styles.label}>Current password</span>
        <input className={styles.input} name="currentPassword" type="password" autoComplete="current-password" required {...invalid("currentPassword")} />
        {fieldError("currentPassword")}
      </label>
      <label className={styles.field}>
        <span className={styles.label}>New password</span>
        <input className={styles.input} name="newPassword" type="password" autoComplete="new-password" minLength={10} required {...invalid("newPassword")} />
        <span className={styles.fieldHint}>At least 10 characters. A short phrase is easier to remember.</span>
        {fieldError("newPassword")}
      </label>
      <label className={styles.field}>
        <span className={styles.label}>Repeat new password</span>
        <input className={styles.input} name="confirmPassword" type="password" autoComplete="new-password" required {...invalid("confirmPassword")} />
        {fieldError("confirmPassword")}
      </label>
      <button type="submit" className={`${styles.button} ${styles.buttonPrimary}`} disabled={pending}>
        {pending ? "Saving…" : "Change password"}
      </button>
    </form>
  );
}
