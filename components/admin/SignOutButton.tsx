"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Icon from "@/components/Icon";
import styles from "./admin.module.css";

export default function SignOutButton() {
  const router = useRouter();
  const [pending, setPending] = useState(false);

  const signOut = async () => {
    setPending(true);
    await fetch("/api/admin/session", { method: "DELETE" }).catch(() => undefined);
    router.replace("/admin/login");
    router.refresh();
  };

  return (
    <button type="button" className={`${styles.navLink} ${styles.signOut}`} onClick={signOut} disabled={pending}>
      <Icon name="logout" />
      <span>{pending ? "Signing out…" : "Sign out"}</span>
    </button>
  );
}
