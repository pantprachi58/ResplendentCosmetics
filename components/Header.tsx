"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Icon from "./Icon";
import { navItems } from "@/data/navigation";
import styles from "./Header.module.css";

export default function Header() {
  const pathname = usePathname();
  return (
    <header className={styles.root}>
      <div className={styles.box}>
        <div className={styles.row}>
          <div className={styles.row2}>
            <div className={styles.row3}>
              <Icon name="call" className={styles.icon} />
              <span>+91 99103 91229</span>
            </div>
            <div className={styles.row3}>
              <Icon name="location_on" className={styles.icon} />
              <span>
                R-9, Basement, Greater Kailash Part 1, New Delhi - 110048
              </span>
            </div>
            <div className={styles.row3}>
              <Icon name="schedule" className={styles.icon} />
              <span>Mon - Sat: 9:00 AM - 7:00 PM</span>
            </div>
          </div>
          <div className={styles.row4}>
            <Link className={styles.link} href="/international-patients">
              <Icon name="public" className={styles.icon2} />
              <span>International Patient Desk</span>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.row5}>
        <div className={styles.row6}>
          <Link className={styles.link2} href="/">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className={styles.image}
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaP2k0vqTtIrrWbcSatCtFEHpagp3rEgBUdVPfdFwlx0Y1PvOzxRlvkvHAgt4oxfT3U6Fyou_8CJReCtrQv2sR0WBhOGa9vb7guX7SPFzmBCxtdxyouikPpYwRybS3DMI1ZKB8vMeRniHYo3C-SWwhS9fTvos6kUWhcnSnpjMnRiCjQp8QcLgqeoQn1Av7Bj4gr-W1HX8fZFI5a9AOLh5VcvAz-ClUrcLXyAvl2SycnlnJkm_iEqZb7jeYmW8NNWjtAw"
              alt="Resplendent Aesthetics"
            />
          </Link>
        </div>
        <nav className={styles.nav} aria-label="Primary">
          {navItems.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`${styles.navLink} ${active ? styles.navLinkActive : styles.navLinkIdle}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className={styles.row7}>
          <Link className={styles.button} href="/book-consultation">
            <span className={styles.badge} />
            <span>Book Consultation</span>
          </Link>
          <div className={styles.row8}>
            <Icon name="person" className={styles.icon3} />
          </div>
        </div>
      </div>
    </header>
  );
}
