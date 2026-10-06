import type { Metadata } from "next";
import Image from "next/image";
import Icon from "@/components/Icon";
import CtaLink from "@/components/shared/CtaLink";
import Breadcrumb from "@/components/treatment/Breadcrumb";
import CtaBand from "@/components/treatment/CtaBand";
import { accreditations, doctorProfiles, philosophyPillars } from "@/data/doctorProfiles";
import ui from "@/components/shared/ui.module.css";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Our Doctors | Resplendent Aesthetics",
  description:
    "Meet the plastic surgeons and aesthetic dermatologists behind Resplendent Aesthetics in Greater Kailash, New Delhi.",
};

export default function DoctorsPage() {
  return (
    <main className={ui.page}>
      <Breadcrumb current="Our Doctors" />

      {/* Editorial Header */}
      <section className={styles.header}>
        <div className={`${ui.container} ${styles.headerInner}`}>
          <span className={ui.statusPill}>
            <span className={ui.pulse} />
            Meet Our Surgical &amp; Clinical Faculty
          </span>
          <h1 className={styles.title}>The Specialists Behind Every Transformation</h1>
          <p className={styles.lead}>
            Every surgeon and aesthetic specialist at Resplendent Aesthetics brings over a decade of dedicated
            clinical artistry, international fellowship training, and uncompromised precision to our Greater Kailash
            private surgical suites.
          </p>
          <div className={styles.divider} />
        </div>
      </section>

      {/* Doctor Profiles */}
      <section className={styles.profiles}>
        <div className={`${ui.container} ${styles.profileList}`}>
          {doctorProfiles.map((doctor, index) => (
            <article key={doctor.name} className={`${styles.profile} ${index % 2 === 1 ? styles.profileReverse : ""}`}>
              <div className={styles.portraitCol}>
                <div className={`${ui.media} ${styles.portrait}`}>
                  <Image
                    src={doctor.image}
                    alt={doctor.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className={`${ui.cover} ${styles.portraitImage}`}
                    priority={index === 0}
                  />
                  <div className={styles.portraitOverlay}>
                    <span className={styles.overlayTag}>
                      <Icon name={doctor.overlayTag.icon} filled />
                      {doctor.overlayTag.label}
                    </span>
                    <p className={styles.overlayTitle}>{doctor.overlayTitle}</p>
                  </div>
                </div>
                <div className={styles.badges}>
                  {doctor.badges.map((badge) => (
                    <span key={badge.label} className={styles.badge}>
                      <Icon name={badge.icon} className={styles.badgeIcon} />
                      {badge.label}
                    </span>
                  ))}
                </div>
              </div>

              <div className={styles.dossier}>
                <div>
                  <span className={styles.specialty}>{doctor.specialty}</span>
                  <h2 className={styles.name}>{doctor.name}</h2>
                  <p className={styles.qualifications}>{doctor.qualifications}</p>
                  <div className={styles.tags}>
                    {doctor.specialties.map((item, tagIndex) => (
                      <span key={item} className={tagIndex % 2 === 0 ? styles.tagBlue : styles.tagGreen}>
                        {item}
                      </span>
                    ))}
                  </div>
                  <p className={styles.bio}>{doctor.bio}</p>
                  <div className={styles.stats}>
                    {doctor.stats.map((stat, statIndex) => (
                      <div key={stat.label}>
                        <span className={statIndex === 2 ? styles.statValueGreen : styles.statValue}>{stat.value}</span>
                        <span className={styles.statLabel}>{stat.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={styles.ctaRow}>
                  <CtaLink cta={{ label: doctor.cta.label, href: "/book-consultation", iconLeading: doctor.cta.icon }} />
                  <span className={styles.ctaNote}>{doctor.ctaNote}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Accreditations */}
      <section className={`${ui.section} ${ui.white} ${styles.accreditations}`}>
        <div className={ui.container}>
          <div className={ui.headerCenter}>
            <span className={ui.eyebrow}>Global Surgical Recognition &amp; Accreditation</span>
            <h2 className={ui.title}>Practicing Under Verified International Standards</h2>
          </div>
          <div className={styles.accreditationGrid}>
            {accreditations.map((item) => (
              <div key={item.title} className={styles.accreditation}>
                <span className={styles.accreditationIcon}>
                  <Icon name={item.icon} />
                </span>
                <span className={styles.accreditationTitle}>{item.title}</span>
                <p className={styles.accreditationText}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Surgical Philosophy */}
      <section className={`${ui.section} ${ui.ivory}`}>
        <div className={ui.container}>
          <div className={styles.philosophy}>
            <Icon name="format_quote" filled className={styles.quoteIcon} />
            <blockquote className={styles.quote}>
              “True aesthetic surgery should never look reconstructed. It must preserve individual identity, honor
              mathematical balance, and remain entirely confidential.”
            </blockquote>
            <div className={styles.pillars}>
              {philosophyPillars.map((pillar) => (
                <div key={pillar.title} className={styles.pillar}>
                  <Icon name={pillar.icon} className={styles.pillarIcon} />
                  <div>
                    <p className={styles.pillarTitle}>{pillar.title}</p>
                    <p className={styles.pillarText}>{pillar.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        data={{
          eyebrow: "Greater Kailash Part 1 • South Delhi",
          title: "Begin Your Aesthetic Journey with India's Foremost Specialists",
          text: "Schedule a confidential, in-depth consultation with our senior plastic surgeons. In-person consultations and secure tele-consults are available for overseas patients.",
          primaryCta: { label: "Book Studio Consultation", href: "/book-consultation", iconLeading: "calendar_today" },
        }}
      />
    </main>
  );
}
