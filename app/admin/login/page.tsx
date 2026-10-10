import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { getCurrentAdmin } from "@/lib/auth/session";
import LoginForm from "@/components/admin/LoginForm";
import styles from "@/components/admin/admin.module.css";

export const metadata: Metadata = { title: "Sign in" };
export const dynamic = "force-dynamic";

export default async function AdminLoginPage() {
  // Already signed in (or the DB is down, in which case the form reports it on submit)
  const admin = await getCurrentAdmin().catch(() => null);
  if (admin) redirect("/admin");

  return (
    <main className={styles.loginPage}>
      <div className={styles.loginCard}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/svg/logo.png" alt="Resplendent Aesthetics" width={443} height={117} className={styles.loginLogo} />
        <div className={styles.loginHeading}>
          <h1>Admin sign in</h1>
          <p>Manage blog articles for resplendentcosmetics.com</p>
        </div>
        <LoginForm />
      </div>
      <a href="/" className={styles.loginBack}>
        ← Back to the website
      </a>
    </main>
  );
}
