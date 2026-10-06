"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Icon from "./Icon";
import { TREATMENTS_HREF, navItems } from "@/data/navigation";
import { treatmentCategories } from "@/data/treatmentCategories";
import styles from "./Header.module.css";

const PHONE_DISPLAY = "+91 99103 91229";
const PHONE_HREF = "tel:+919910391229";
const INTERNATIONAL_DESK_HREF = "/contact#international-desk";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
}

export default function Header() {
  const pathname = usePathname();
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileTreatmentsOpen, setMobileTreatmentsOpen] = useState(false);
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const megaRef = useRef<HTMLLIElement>(null);
  const megaId = useId();
  const mobileId = useId();

  const closeAll = () => {
    setMegaOpen(false);
    setMobileOpen(false);
  };

  // Close menus whenever the route changes (covers browser back/forward too).
  useEffect(() => {
    setMegaOpen(false);
    setMobileOpen(false);
  }, [pathname]);

  // Escape closes any open menu; a click outside closes the desktop mega menu.
  useEffect(() => {
    if (!megaOpen && !mobileOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeAll();
    };
    const onPointerDown = (event: PointerEvent) => {
      if (megaOpen && megaRef.current && !megaRef.current.contains(event.target as Node)) {
        setMegaOpen(false);
      }
    };
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [megaOpen, mobileOpen]);

  // Lock page scroll behind the mobile menu.
  useEffect(() => {
    if (!mobileOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [mobileOpen]);

  const treatmentsActive = isActive(pathname, TREATMENTS_HREF);

  return (
    <header className={styles.root}>
      {/* Top contact bar (desktop) */}
      <div className={styles.topBar}>
        <div className={styles.topBarInner}>
          <div className={styles.topBarGroup}>
            <a className={styles.topBarItem} href={PHONE_HREF}>
              <Icon name="call" className={styles.topBarIcon} />
              <span>{PHONE_DISPLAY}</span>
            </a>
            <span className={styles.topBarItem}>
              <Icon name="location_on" className={styles.topBarIcon} />
              <span>R-9, Basement, Greater Kailash Part 1, New Delhi - 110048</span>
            </span>
            <span className={styles.topBarItem}>
              <Icon name="schedule" className={styles.topBarIcon} />
              <span>Mon - Sat: 9:00 AM - 7:00 PM</span>
            </span>
          </div>
          <Link className={styles.topBarLink} href={INTERNATIONAL_DESK_HREF}>
            <Icon name="public" className={styles.topBarIcon} />
            <span>International Patient Desk</span>
          </Link>
        </div>
      </div>

      {/* Main bar */}
      <div className={styles.mainBar}>
        <Link className={styles.logoLink} href="/" onClick={closeAll}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className={styles.logo} src="/logo.svg" alt="Resplendent Aesthetics" />
        </Link>

        {/* Desktop navigation */}
        <nav className={styles.nav} aria-label="Primary">
          <ul className={styles.navList}>
            {navItems.map((item) => {
              if (item.href === TREATMENTS_HREF) {
                return (
                  <li
                    key={item.href}
                    ref={megaRef}
                    className={styles.navItemMega}
                    // Hover only for real mice; touch taps go through the toggle button's click.
                    onPointerEnter={(event) => event.pointerType === "mouse" && setMegaOpen(true)}
                    onPointerLeave={(event) => event.pointerType === "mouse" && setMegaOpen(false)}
                  >
                    <Link
                      href={item.href}
                      aria-current={pathname === item.href ? "page" : undefined}
                      className={`${styles.navLink} ${treatmentsActive ? styles.navLinkActive : ""}`}
                      onClick={closeAll}
                    >
                      {item.label}
                    </Link>
                    <button
                      type="button"
                      className={styles.megaToggle}
                      aria-expanded={megaOpen}
                      aria-controls={megaId}
                      aria-label={`${megaOpen ? "Hide" : "Show"} treatment categories`}
                      onClick={() => setMegaOpen((open) => !open)}
                    >
                      <Icon name="expand_more" className={`${styles.chevron} ${megaOpen ? styles.chevronOpen : ""}`} />
                    </button>

                    <div id={megaId} className={styles.mega} hidden={!megaOpen}>
                      <div className={styles.megaInner}>
                        {treatmentCategories.map((category) => (
                          <div
                            key={category.category}
                            className={`${styles.megaColumn} ${category.items.length > 10 ? styles.megaColumnWide : ""}`}
                          >
                            <h3 className={styles.megaTitle}>{category.category}</h3>
                            <ul className={styles.megaList}>
                              {category.items.map((treatment) => (
                                <li key={treatment.href}>
                                  <Link
                                    href={treatment.href}
                                    className={`${styles.megaLink} ${
                                      isActive(pathname, treatment.href) ? styles.megaLinkActive : ""
                                    }`}
                                    aria-current={isActive(pathname, treatment.href) ? "page" : undefined}
                                    onClick={closeAll}
                                  >
                                    {treatment.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                      <div className={styles.megaFooter}>
                        <Link className={styles.megaAll} href={TREATMENTS_HREF} onClick={closeAll}>
                          View all treatments
                          <Icon name="arrow_forward" />
                        </Link>
                      </div>
                    </div>
                  </li>
                );
              }

              const active = isActive(pathname, item.href);
              return (
                <li key={item.href} className={styles.navItem}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`${styles.navLink} ${active ? styles.navLinkActive : ""}`}
                    onClick={closeAll}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className={styles.actions}>
          <Link className={styles.bookButton} href="/book-consultation" onClick={closeAll}>
            <span className={styles.bookDot} />
            <span className={styles.bookLabelFull}>Book Consultation</span>
            <span className={styles.bookLabelShort}>Book</span>
          </Link>
          <button
            type="button"
            className={styles.menuButton}
            aria-expanded={mobileOpen}
            aria-controls={mobileId}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((open) => !open)}
          >
            <Icon name={mobileOpen ? "close" : "menu"} />
          </button>
        </div>
      </div>

      {/* Mobile / tablet navigation */}
      <div id={mobileId} className={styles.mobilePanel} hidden={!mobileOpen}>
        <nav aria-label="Mobile">
          <ul className={styles.mobileList}>
            {navItems.map((item) => {
              if (item.href === TREATMENTS_HREF) {
                return (
                  <li key={item.href} className={styles.mobileItem}>
                    <button
                      type="button"
                      className={`${styles.mobileLink} ${treatmentsActive ? styles.mobileLinkActive : ""}`}
                      aria-expanded={mobileTreatmentsOpen}
                      onClick={() => setMobileTreatmentsOpen((open) => !open)}
                    >
                      {item.label}
                      <Icon
                        name="expand_more"
                        className={`${styles.chevron} ${mobileTreatmentsOpen ? styles.chevronOpen : ""}`}
                      />
                    </button>
                    {mobileTreatmentsOpen && (
                      <div className={styles.mobileTreatments}>
                        <Link className={styles.mobileAll} href={TREATMENTS_HREF} onClick={closeAll}>
                          View all treatments
                          <Icon name="arrow_forward" />
                        </Link>
                        {treatmentCategories.map((category) => {
                          const open = openCategory === category.category;
                          return (
                            <div key={category.category} className={styles.mobileCategory}>
                              <button
                                type="button"
                                className={styles.mobileCategoryButton}
                                aria-expanded={open}
                                onClick={() => setOpenCategory(open ? null : category.category)}
                              >
                                <span>
                                  {category.category}
                                  <span className={styles.mobileCount}>{category.items.length}</span>
                                </span>
                                <Icon name="expand_more" className={`${styles.chevron} ${open ? styles.chevronOpen : ""}`} />
                              </button>
                              {open && (
                                <ul className={styles.mobileSubList}>
                                  {category.items.map((treatment) => (
                                    <li key={treatment.href}>
                                      <Link
                                        href={treatment.href}
                                        className={`${styles.mobileSubLink} ${
                                          isActive(pathname, treatment.href) ? styles.mobileLinkActive : ""
                                        }`}
                                        aria-current={isActive(pathname, treatment.href) ? "page" : undefined}
                                        onClick={closeAll}
                                      >
                                        {treatment.name}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </li>
                );
              }

              const active = isActive(pathname, item.href);
              return (
                <li key={item.href} className={styles.mobileItem}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`${styles.mobileLink} ${active ? styles.mobileLinkActive : ""}`}
                    onClick={closeAll}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className={styles.mobileFooter}>
          <Link className={styles.mobileBook} href="/book-consultation" onClick={closeAll}>
            <Icon name="calendar_month" />
            Book Consultation
          </Link>
          <a className={styles.mobileCall} href={PHONE_HREF}>
            <Icon name="call" />
            {PHONE_DISPLAY}
          </a>
          <Link className={styles.mobileDesk} href={INTERNATIONAL_DESK_HREF} onClick={closeAll}>
            <Icon name="public" />
            International Patient Desk
          </Link>
        </div>
      </div>
    </header>
  );
}
