import type { Metadata } from "next";
import Link from "next/link";
import styles from "./not-found.module.css";

// Unmatched URLs and notFound() calls. Next also sends noindex for 404 responses.
export const metadata: Metadata = {
  title: "Page Not Found | Resplendent Aesthetics",
  description: "The page you were looking for could not be found.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className={styles.page}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/svg/logo.png" alt="Resplendent Aesthetics" width={443} height={117} className={styles.logo} />
      <p className={styles.code}>404</p>
      <h1 className={styles.title}>Page not found</h1>
      <p className={styles.text}>The page you were looking for may have moved or no longer exists.</p>
      <div className={styles.actions}>
        <Link href="/" className={styles.primary}>
          Back to home
        </Link>
        <Link href="/treatments" className={styles.secondary}>
          View treatments
        </Link>
      </div>
    </main>
  );
}
