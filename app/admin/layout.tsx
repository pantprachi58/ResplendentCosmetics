import type { Metadata } from "next";
import styles from "@/components/admin/admin.module.css";

export const metadata: Metadata = {
  title: { default: "Admin | Resplendent Aesthetics", template: "%s | Resplendent Admin" },
  robots: { index: false, follow: false },
};

/** Admin chrome root. Lives outside app/(site), so the public header, footer and WhatsApp button don't render here. */
export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <div className={styles.root}>{children}</div>;
}
