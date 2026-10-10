import type { Metadata } from "next";
import { requireAdminPage } from "@/lib/auth/session";
import ChangePasswordForm from "@/components/admin/ChangePasswordForm";
import styles from "@/components/admin/admin.module.css";

export const metadata: Metadata = { title: "Account" };

export default async function AccountPage() {
  const admin = await requireAdminPage();

  return (
    <>
      <header className={styles.pageHeader}>
        <div>
          <h1 className={styles.pageTitle}>Account</h1>
          <p className={styles.pageSubtitle}>
            Signed in as <strong>{admin.name}</strong> ({admin.email})
          </p>
        </div>
      </header>

      <section className={`${styles.card} ${styles.narrowCard}`}>
        <div className={styles.cardHeader}>
          <h2 className={styles.cardTitle}>Change password</h2>
          <p className={styles.cardSubtitle}>Changing it signs out every other device.</p>
        </div>
        <ChangePasswordForm />
      </section>
    </>
  );
}
