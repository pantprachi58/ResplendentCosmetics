import Link from "next/link";
import { requireAdminPage } from "@/lib/auth/session";
import AdminNav from "@/components/admin/AdminNav";
import SignOutButton from "@/components/admin/SignOutButton";
import Icon from "@/components/Icon";
import styles from "@/components/admin/admin.module.css";

// Everything under the panel depends on the session cookie
export const dynamic = "force-dynamic";

export default async function PanelLayout({ children }: { children: React.ReactNode }) {
  const admin = await requireAdminPage();

  return (
    <div className={styles.shell}>
      <aside className={styles.sidebar}>
        <Link href="/admin" className={styles.brand}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/svg/Resplendent_Logo_White.png" alt="Resplendent Aesthetics" className={styles.brandLogo} />
          <span className={styles.brandBadge}>Admin</span>
        </Link>

        <AdminNav />

        <div className={styles.sidebarFooter}>
          <a href="/blog" target="_blank" rel="noopener" className={styles.navLink}>
            <Icon name="open_in_new" />
            <span>View blog</span>
          </a>
          <div className={styles.user}>
            <span className={styles.userAvatar} aria-hidden="true">
              {admin.name.charAt(0).toUpperCase()}
            </span>
            <span className={styles.userText}>
              <span className={styles.userName}>{admin.name}</span>
              <span className={styles.userEmail}>{admin.email}</span>
            </span>
          </div>
          <SignOutButton />
        </div>
      </aside>

      <div className={styles.main}>{children}</div>
    </div>
  );
}
