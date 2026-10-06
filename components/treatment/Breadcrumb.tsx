import Link from "next/link";
import ui from "@/components/shared/ui.module.css";
import styles from "./Breadcrumb.module.css";

type BreadcrumbProps = {
  current: string;
  /** Intermediate crumbs between Home and the current page */
  trail?: { label: string; href: string }[];
  status?: string;
};

export default function Breadcrumb({ current, trail = [], status }: BreadcrumbProps) {
  return (
    <div className={styles.root}>
      <div className={`${ui.container} ${styles.inner}`}>
        <nav aria-label="Breadcrumb" className={styles.nav}>
          <Link className={styles.link} href="/">
            Home
          </Link>
          {trail.map((crumb) => (
            <span key={crumb.href} className={styles.crumb}>
              <span className={styles.separator}>/</span>
              <Link className={styles.link} href={crumb.href}>
                {crumb.label}
              </Link>
            </span>
          ))}
          <span className={styles.separator}>/</span>
          <span className={styles.current} aria-current="page">
            {current}
          </span>
        </nav>
        {status && (
          <span className={styles.status}>
            <span className={ui.pulse} />
            {status}
          </span>
        )}
      </div>
    </div>
  );
}
