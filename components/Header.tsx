"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Icon from "./Icon";
import { navItems } from "@/data/navigation";
import { treatmentCategories } from "@/data/treatmentCategories";
import styles from "./Header.module.css";

export default function Header() {
  const pathname = usePathname();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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
              src="/svg/Resplendent Logo Color.png"
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
            
            // Special handling for Treatments dropdown
            if (item.label === "Treatments") {
              return (
                <div
                  key={item.href}
                  className={styles.dropdownContainer}
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`${styles.navLink} ${active ? styles.navLinkActive : styles.navLinkIdle}`}
                  >
                    {item.label}
                    <Icon name="expand_more" className={styles.dropdownIcon} />
                  </Link>
                  {isDropdownOpen && (
                    <div className={styles.dropdown}>
                      <div className={styles.dropdownContent}>
                        {treatmentCategories.map((category) => (
                          <div key={category.category} className={styles.dropdownColumn}>
                            <h3 className={styles.columnTitle}>{category.category}</h3>
                            <ul className={styles.columnList}>
                              {category.items.map((treatment) => (
                                <li key={treatment.href}>
                                  <Link
                                    href={treatment.href}
                                    className={styles.dropdownLink}
                                  >
                                    {treatment.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            }
            
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
