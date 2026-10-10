import type { Metadata } from "next";
import Image from "next/image";
import Icon from "@/components/Icon";
import Breadcrumb from "@/components/treatment/Breadcrumb";
import CtaBand from "@/components/treatment/CtaBand";
import Certificates from "@/components/Certificates";
import type { CtaBandData } from "@/data/treatments/types";
import { certificates } from "@/data/certificates";
import ui from "@/components/shared/ui.module.css";
import styles from "./page.module.css";

const DOCTOR_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDSTJ5gTWMFzZv27HqAbUpkkDnbqAF_Iu46ZbbRkDtsPs_HM23XUzMh5-2MKBdMlyoeYcDLRNy5r3DBW7U88RjQZOPBCokOHarR2bZO8igf4FkAJR62zRrFrL-zk4dmqoZLAUwhlzwJF_IOcM1SLNf7RqbbRA0Eille2AjkOQG74se0oTscwKcaVfA3zAnJqbxu84o8mZGeXtblAFmUbJh_WiUu7bYl9tOUB23l0wB1sS9CAdJ1UQM0B44J_sTbQgUQhQ";

const STATS = [
  { value: "15,000+", label: "Transformations Performed" },
  { value: "45+", label: "Countries Represented" },
  { value: "100%", label: "Surgeon-Led Care", green: true },
];

const VALUES = [
  {
    icon: "straighten",
    tone: "blue",
    title: "1. Precision",
    text: "Millimeter-level surgical accuracy in every contour, ensuring symmetrical balance and biological harmony tailored to facial vectors.",
  },
  {
    icon: "lock",
    tone: "green",
    title: "2. Privacy",
    text: "Discrete private lounge access, separate recovery portals, and VIP confidential protocols protecting personal dignity and peace of mind.",
  },
  {
    icon: "fingerprint",
    tone: "blue",
    title: "3. Personalization",
    text: "No cookie-cutter outcomes. Every surgical strategy begins with unique musculoskeletal scans and anatomy-first customized planning.",
  },
  {
    icon: "health_and_safety",
    tone: "green",
    title: "4. Patient Safety",
    text: "Hospital-grade sterile operation suites, HEPA class laminar air, and uncompromised post-operative continuous vital tracking.",
  },
];

const MOSAIC = [
  {
    tag: "Sterile Field",
    title: "Laminar Airflow & HEPA 14",
    text: "Zero-pathogen micro-climate ensuring zero post-surgical infection rates.",
    alt: "Modern sterile operation theatre with laminar HEPA airflow ceiling and surgical lighting.",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDLSvjWa3L0rny5-RjujxmQ7faeXYi6UHIy6kd0qyP9ybPq4yxB1sJ4dxfDb45LQi28M9o5pJK7bHrFAPklu3szsbLCbMMQ4rYev1mkGNE39zGvOZo8o-13gcau9gg15BXyygBuNGGZI9Qrk9zB0EV28bBpg3VB1aGtFOFAPJ3kTbY2DgyBTiuk5GkWvhxNhPM-IDTP5sZAvlFUoC8npYaX6SXhsXZbsK3sr4Jp3qCJtIGw66T2yl4d",
  },
  {
    tag: "Instrumentation",
    title: "German Precision Optics",
    text: "Ultra-refined micro-instruments for minimal tissue trauma and rapid recovery.",
    alt: "German micro-surgical instruments on sterile stainless steel trays.",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCnucWfxdTTUxYygFXGEMYWKaeiYjiJylI7setMrnbdBxeg8Ya_wl4OukPFvHd8_soRqCObGzKUnwZHay9mChuzj1K7I4d2t7Y63RB5xSmYmYCOMLSy8YcI0opyvFB8D-9rDR5ejl-PYfM6H9et-DOS-9xHeLujOqIeR0qsvThO8lc2zRrU2wYxGMHwPqfhE5wnzdtWEIHc2VlD--_rTjfM5Z9t3FwvvjZthRKkZXtEHJmMU9PllyKx",
  },
  {
    tag: "VIP Recovery",
    title: "Acoustic Private Suites",
    text: "A hotel-grade recovery sanctuary paired with continuous nursing vigilance.",
    alt: "Private boutique patient recovery suite with soft ivory finishes and warm lighting.",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAQQOqrKD0xFkArJUkOLvqo-ZIAitrtHxCIlBFPdSBTE6cLwa_mgWYjq0a3mX3ux6r4DL_MeEcThFF5kXAym5WlUP8jx-a_dOjyfuS9JDjJqU5j76ZNqXo4h6xD3iRYDglETkyJEBmbFw2Z1kUWi5HOgC2RmD7yrDC47MsVqXEm-pTAFrcNbv2-rDY4yBngs2a5Q3Vik5lEwwGam-ME12I79_io8RZAP6oLiipJwDWnIp_se72_ph30",
  },
];

const METRICS = [
  { icon: "verified_user", title: "NABH Aligned", sub: "Protocol Compliance" },
  { icon: "air", title: "Class 10,000 OT", sub: "Positive Pressure Airflow" },
  { icon: "monitoring", title: "Critical Care", sub: "24/7 Anesthesia Monitoring" },
  { icon: "local_hospital", title: "Autoclave Sterility", sub: "Class-B Vacuum Tech" },
];

const MILESTONES = [
  {
    year: "2008",
    icon: "school",
    title: "International Fellowships",
    text: "Dr. Sukhbir Singh completes rigorous training and aesthetic surgical residency at PUCRS Brazil, absorbing refined Rio de Janeiro contouring mastery.",
  },
  {
    year: "2014",
    icon: "apartment",
    title: "GK-1 Sanctuary Launch",
    text: "Inauguration of Resplendent Aesthetics in Greater Kailash Part 1, South Delhi, creating an exclusive sanctuary for bespoke plastic surgery.",
  },
  {
    year: "2018",
    icon: "biotech",
    title: "Micro-FUE Innovation",
    text: "Introduction of specialized motorized Micro-FUE & sapphire slit graft implanters for natural, dense hairline transformations.",
    green: true,
  },
  {
    year: "2021",
    icon: "auto_awesome",
    title: "HD Sculpting & RF",
    text: "Deployment of 4D high-definition ultrasonic liposuction, RF subdermal skin tightening, and advanced nonsurgical lasers.",
  },
  {
    year: "Present",
    icon: "public",
    title: "Global Trust",
    text: "Over 15,000 delighted transformations across 45 countries with an active International Patient Concierge Desk in South Delhi.",
    highlight: true,
  },
];

const CTA: CtaBandData = {
  eyebrow: "Your Journey To Harmony",
  title: "Begin Your Transformation",
  text: "Schedule a private, in-depth consultation with Dr. Sukhbir Singh at Resplendent Aesthetics, Greater Kailash 1.",
  primaryCta: { label: "Book Consultation", href: "/book-consultation", icon: "calendar_today" },
};

export const metadata: Metadata = {
  title: "About Us | Resplendent Aesthetics",
  description:
    "Founded by senior plastic surgeons to bring world-class aesthetic and reconstructive craftsmanship to Greater Kailash, New Delhi.",
};

export default function AboutPage() {
  return (
    <main className={ui.page}>
      <Breadcrumb current="About Us" />

      {/* Hero */}
      <section className={styles.hero}>
        <div className={`${ui.container} ${styles.heroInner}`}>
          <span className={ui.statusPill}>
            <span className={ui.pulse} />
            About Resplendent Aesthetics
          </span>
          <h1 className={styles.heroTitle}>A Philosophy Built on Precision, Discretion and Care</h1>
          <div className={styles.divider} />
          <p className={styles.heroLead}>
            Founded by senior plastic surgeons to bring world-class aesthetic and reconstructive craftsmanship to
            Greater Kailash, New Delhi.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className={`${ui.section} ${ui.white} ${styles.story}`}>
        <div className={`${ui.container} ${styles.storyGrid}`}>
          <div className={styles.profileFrame}>
            <div className={`${ui.media} ${styles.profilePhoto}`}>
              <Image
                src={DOCTOR_IMG}
                alt="Dr. Sukhbir Singh, Senior Plastic Surgeon"
                fill
                sizes="(min-width: 1024px) 40vw, (min-width: 640px) 70vw, 100vw"
                className={`${ui.cover} ${styles.profileImage}`}
                priority
              />
              <div className={styles.profileCaption}>
                <span className={styles.profileRole}>Founder &amp; Chief Consultant</span>
                <h3 className={styles.profileName}>Dr. Sukhbir Singh</h3>
                <p className={styles.profileCred}>MS, MCh (Plastic Surgery) • Fellow PUCRS (Brazil)</p>
              </div>
            </div>
            <div className={styles.certCard}>
              <div className={styles.certLeft}>
                <span className={styles.certIcon}>
                  <Icon name="verified" filled />
                </span>
                <div>
                  <p className={styles.certTitle}>Board Certified</p>
                  <p className={styles.certSub}>ISAPS, APSI &amp; IAAPS Fellow</p>
                </div>
              </div>
              <span className={styles.expPill}>18+ Yrs Exp</span>
            </div>
          </div>

          <div className={styles.narrative}>
            <span className={styles.narrativeTag}>
              <span className={styles.narrativeLine} />
              <span className={ui.eyebrow}>Architectural Beauty &amp; Science</span>
            </span>
            <h2 className={ui.title}>Where International Surgical Pedigree Meets South Delhi Serenity</h2>
            <div className={styles.prose}>
              <p>
                Resplendent Aesthetics was founded in the enclave of Greater Kailash Part 1, South Delhi, with a
                resolute objective: to transcend industrial-scale aesthetic clinics and restore clinical plastic
                surgery as a dedicated, bespoke fine art.
              </p>
              <p>
                Formed through extensive international surgical training—notably specializing in advanced Brazilian
                aesthetic plastic surgery techniques at the esteemed{" "}
                <em>PUCRS (Pontifícia Universidade Católica do Rio Grande do Sul)</em>—our approach balances
                anatomically sound surgical integrity with fluid organic silhouettes.
              </p>
              <p>
                Whether performing high-definition micro-follicular hair transplants, structural preservation
                rhinoplasty, or refined facial rejuvenation, every protocol is engineered for patients who prioritize
                discretion, natural subtlety, and zero compromise on surgical safety.
              </p>
            </div>
            <dl className={styles.stats}>
              {STATS.map((s) => (
                <div key={s.label} className={styles.stat}>
                  <dt className={styles.statLabel}>{s.label}</dt>
                  <dd className={`${styles.statValue} ${s.green ? styles.statValueGreen : ""}`}>{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className={`${ui.section} ${ui.ivory}`}>
        <div className={ui.container}>
          <div className={ui.headerCenter}>
            <span className={ui.eyebrow}>Guiding Tenets</span>
            <h2 className={ui.title}>The Pillars of Resplendent Aesthetics</h2>
            <div className={`${styles.divider} ${styles.dividerCenter}`} />
          </div>
          <div className={styles.valuesGrid}>
            {VALUES.map((v) => (
              <article key={v.title} className={styles.valueCard}>
                <span className={`${styles.valueIcon} ${v.tone === "green" ? styles.valueGreen : styles.valueBlue}`}>
                  <Icon name={v.icon} />
                </span>
                <h3 className={styles.valueTitle}>{v.title}</h3>
                <p className={styles.valueText}>{v.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Sanctuary */}
      <section className={`${ui.section} ${ui.dark} ${styles.sanctuary}`}>
        <div className={`${ui.container} ${styles.sanctuaryWrap}`}>
          <div className={ui.headerSplit}>
            <div className={styles.sanctuaryHeadTitle}>
              <span className={ui.eyebrow}>Sanctuary Specification</span>
              <h2 className={ui.title}>Surgical Sanctuary: Engineered to Hospital-Grade Benchmarks</h2>
            </div>
            <p className={styles.sanctuaryText}>
              Our Greater Kailash Part 1 surgical suites replicate tertiary-care medical standards with NABH-aligned
              protocols, ultra-sterile HEPA filtration, and German micro-instrumentation.
            </p>
          </div>

          <div className={styles.mosaic}>
            {MOSAIC.map((m) => (
              <figure key={m.title} className={`${ui.media} ${styles.mosaicItem}`}>
                <Image
                  src={m.src}
                  alt={m.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className={`${ui.cover} ${styles.mosaicImage}`}
                />
                <figcaption className={styles.mosaicOverlay}>
                  <span className={styles.mosaicTag}>{m.tag}</span>
                  <h3 className={styles.mosaicTitle}>{m.title}</h3>
                  <p className={styles.mosaicText}>{m.text}</p>
                </figcaption>
              </figure>
            ))}
          </div>

          <ul className={styles.metrics}>
            {METRICS.map((m) => (
              <li key={m.title} className={styles.metric}>
                <span className={styles.metricIcon}>
                  <Icon name={m.icon} />
                </span>
                <div>
                  <p className={styles.metricTitle}>{m.title}</p>
                  <p className={styles.metricSub}>{m.sub}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Timeline */}
      <section className={`${ui.section} ${ui.white}`}>
        <div className={ui.container}>
          <div className={ui.headerCenter}>
            <span className={ui.eyebrow}>Our Evolution</span>
            <h2 className={ui.title}>Milestones of Excellence</h2>
            <div className={`${styles.divider} ${styles.dividerCenter}`} />
          </div>
          <ol className={styles.timeline}>
            {MILESTONES.map((m) => (
              <li key={m.year} className={styles.milestone}>
                <span
                  className={`${styles.milestoneDot} ${m.green ? styles.milestoneDotGreen : ""} ${
                    m.highlight ? styles.milestoneDotHighlight : ""
                  }`}
                >
                  <Icon name={m.icon} />
                </span>
                <div className={styles.milestoneBody}>
                  <span className={`${styles.milestoneYear} ${m.green ? styles.milestoneYearGreen : ""}`}>
                    {m.year}
                  </span>
                  <h3 className={styles.milestoneTitle}>{m.title}</h3>
                  <p className={styles.milestoneText}>{m.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Certificates */}
      <section className={`${ui.section} ${ui.ivory}`}>
        <div className={ui.container}>
          <div className={ui.headerCenter}>
            <span className={ui.eyebrow}>Credentials & Recognition</span>
            <h2 className={ui.title}>Certifications & Professional Memberships</h2>
            <div className={`${styles.divider} ${styles.dividerCenter}`} />
            <p className={styles.heroLead} style={{ paddingTop: '1rem', maxWidth: '48rem' }}>
              Board-certified and internationally trained, Dr. Sukhbir Singh holds prestigious memberships 
              and fellowships from leading plastic surgery organizations worldwide.
            </p>
          </div>
          <Certificates certificates={certificates} columns={3} />
        </div>
      </section>

      {/* CTA */}
      <CtaBand data={CTA} />
    </main>
  );
}
