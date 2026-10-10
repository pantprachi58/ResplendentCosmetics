"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Icon from "@/components/Icon";
import styles from "./admin.module.css";

const links = [
  { href: "/admin", label: "Posts", icon: "article", match: (p: string) => p === "/admin" || /^\/admin\/posts\/(?!new)/.test(p) },
  { href: "/admin/posts/new", label: "New post", icon: "edit_square", match: (p: string) => p === "/admin/posts/new" },
  { href: "/admin/account", label: "Account", icon: "manage_accounts", match: (p: string) => p.startsWith("/admin/account") },
];

export default function AdminNav() {
  const pathname = usePathname();
  return (
    <nav className={styles.nav} aria-label="Admin">
      {links.map((link) => {
        const active = link.match(pathname);
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`${styles.navLink} ${active ? styles.navLinkActive : ""}`}
            aria-current={active ? "page" : undefined}
          >
            <Icon name={link.icon} />
            <span>{link.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
