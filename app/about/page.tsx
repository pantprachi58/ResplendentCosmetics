import Link from "next/link";
import styles from "./page.module.css";

const LOGO =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDPNiCEd88On6IYXIt52bTgVim-AU5HEFFLqCtPVHA9r7vhVfUCEBGU65U8igK2m_23ctC6fsgsqBORZQs9HUFBRCgzXLaOl5e7_HZ_QxuKwkPPIOZQx1OwdLIW9WEVk6KL7xZQDOeF-EJzsWYuxqv4aKfeJSmXrLMEVT06eNMib2M2xt8G9yMvRDufaMLA2aaB4ydeLUvhChDAj4U4P4uwnvB5trD3iqPZU4BTpIo6CppVVtG1sAA6XPQOc2oLIu-5cA";
const FOOTER_LOGO =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuA-x605TaqYNFbY37ND_GioE4MJ1nGv-fV3yPHXO5_hY6m4V0ozdok5-tzXTQ1sOVfC68VrOBwzH7PWvHyjGfHfMe0eGz9ivxAxTASU27Y-8szloNqiVjGxvL5hJKMeqUNTW2g1fPYvydpzL8VVN74M_lue68ftwv1BZZPlf6eTgTiwDhbnRXdxtPZZoljCp2Fcth_dZHS6P-dzyX7otFYGIa0HUhcaMgJh7iuS0Fb_NXwySvtBuodMUYUmmqooLeNIZw";
const DOCTOR_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDSTJ5gTWMFzZv27HqAbUpkkDnbqAF_Iu46ZbbRkDtsPs_HM23XUzMh5-2MKBdMlyoeYcDLRNy5r3DBW7U88RjQZOPBCokOHarR2bZO8igf4FkAJR62zRrFrL-zk4dmqoZLAUwhlzwJF_IOcM1SLNf7RqbbRA0Eille2AjkOQG74se0oTscwKcaVfA3zAnJqbxu84o8mZGeXtblAFmUbJh_WiUu7bYl9tOUB23l0wB1sS9CAdJ1UQM0B44J_sTbQgUQhQ";

const NAV = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us", active: true },
  { label: "Treatments", href: "/treatments" },
  { label: "Doctors", href: "/doctors" },
  { label: "Hair Transplant", href: "/hair-transplant" },
  { label: "Why Choose Us", href: "/why-choose-us" },
  { label: "Contact", href: "/contact" },
];

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
    title: "International Fellowships",
    text: "Dr. Sukhbir Singh completes rigorous training and aesthetic surgical residency at PUCRS Brazil, absorbing refined Rio de Janeiro contouring mastery.",
  },
  {
    year: "2014",
    title: "GK-1 Sanctuary Launch",
    text: "Inauguration of Resplendent Aesthetics in Greater Kailash Part 1, South Delhi, creating an exclusive sanctuary for bespoke plastic surgery.",
  },
  {
    year: "2018",
    title: "Micro-FUE Innovation",
    text: "Introduction of specialized motorized Micro-FUE & sapphire slit graft implanters for natural, dense hairline transformations.",
    green: true,
  },
  {
    year: "2021",
    title: "HD Sculpting & RF",
    text: "Deployment of 4D high-definition ultrasonic liposuction, RF subdermal skin tightening, and advanced nonsurgical lasers.",
  },
  {
    year: "Present",
    title: "Global Trust",
    text: "Over 15,000 delighted transformations across 45 countries with an active International Patient Concierge Desk in South Delhi.",
    globe: true,
  },
];

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Why Choose Us", href: "/why-choose-us" },
  { label: "Our Doctors", href: "/doctors" },
  { label: "Before & After Gallery", href: "/before-after" },
  { label: "International Patients", href: "/international-patients" },
];

const TREATMENTS = [
  { label: "Hair Transplant — FUE & DHI", href: "/hair-transplant" },
  { label: "Rhinoplasty (Nose Reshaping)", href: "/rhinoplasty" },
  { label: "Face & Neck Lift", href: "/face-neck-lift" },
  { label: "Liposuction & Body Contouring", href: "/liposuction-body-contouring" },
  { label: "Botox & Dermal Fillers", href: "/botox-fillers" },
  { label: "Medical Laser Treatments", href: "/laser-treatments" },
];

const Icon = ({ name }: { name: string }) => (
  <span className={styles.icon} aria-hidden="true">
    {name}
  </span>
);

export const metadata = {
  title: "About Us | Resplendent Aesthetics",
  description:
    "Founded by senior plastic surgeons to bring world-class aesthetic and reconstructive craftsmanship to Greater Kailash, New Delhi.",
};

export default function AboutPage() {
  return (
    <div className={styles.page}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.topBar}>
          <div className={styles.topBarInner}>
            <div className={styles.topBarGroup}>
              <div className={styles.topBarItem}>
                <Icon name="call" />
                <span>+91 99103 91229</span>
              </div>
              <div className={styles.topBarItem}>
                <Icon name="location_on" />
                <span>R-9, Basement, Greater Kailash Part 1, New Delhi - 110048</span>
              </div>
              <div className={styles.topBarItem}>
                <Icon name="schedule" />
                <span>Mon - Sat: 9:00 AM - 7:00 PM</span>
              </div>
            </div>
            <Link href="/international-patients" className={styles.intlLink}>
              <Icon name="public" />
              <span>International Patient Desk</span>
            </Link>
          </div>
        </div>

        <div className={styles.navBar}>
          <img src={LOGO} alt="Resplendent Aesthetics" className={styles.logo} />
          <nav className={styles.nav} aria-label="Main">
            {NAV.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                aria-current={item.active ? "page" : undefined}
                className={`${styles.navLink} ${item.active ? styles.navActive : ""}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className={styles.navActions}>
            <Link href="/book-consultation" className={styles.btnPrimary}>
              Book Consultation
            </Link>
            <div className={styles.avatar}>
              <Icon name="person" />
            </div>
          </div>
        </div>
      </header>

      <main className={styles.main}>
        {/* Hero */}
        <section className={`${styles.section} ${styles.hero}`}>
          <div className={`${styles.container} ${styles.heroInner}`}>
            <div className={styles.badge}>
              <span className={styles.badgeDot} />
              <span className={styles.eyebrow}>About Resplendent Aesthetics</span>
            </div>
            <h1 className={styles.heroTitle}>
              A Philosophy Built on Precision, Discretion and Care
            </h1>
            <div className={styles.divider} />
            <p className={styles.heroLead}>
              Founded by senior plastic surgeons to bring world-class aesthetic and
              reconstructive craftsmanship to Greater Kailash, New Delhi.
            </p>
          </div>
        </section>

        {/* Story */}
        <section className={`${styles.section} ${styles.story}`}>
          <div className={`${styles.container} ${styles.storyGrid}`}>
            <div className={styles.profileCol}>
              <div className={styles.profileFrame}>
                <div className={styles.profilePhoto}>
                  <img src={DOCTOR_IMG} alt="Dr. Sukhbir Singh, Senior Plastic Surgeon" />
                  <div className={styles.profileCaption}>
                    <span className={styles.profileRole}>Founder &amp; Chief Consultant</span>
                    <h3 className={styles.profileName}>Dr. Sukhbir Singh</h3>
                    <p className={styles.profileCred}>
                      MS, MCh (Plastic Surgery) • Fellow PUCRS (Brazil)
                    </p>
                  </div>
                </div>
                <div className={styles.certCard}>
                  <div className={styles.certLeft}>
                    <div className={styles.certIcon}>
                      <Icon name="verified" />
                    </div>
                    <div>
                      <div className={styles.certTitle}>Board Certified</div>
                      <div className={styles.certSub}>ISAPS, APSI &amp; IAAPS Fellow</div>
                    </div>
                  </div>
                  <span className={styles.expPill}>18+ Yrs Exp</span>
                </div>
              </div>
            </div>

            <div className={styles.narrative}>
              <div className={styles.narrativeTag}>
                <span className={styles.narrativeLine} />
                <span className={styles.eyebrow}>Architectural Beauty &amp; Science</span>
              </div>
              <h2 className={styles.sectionTitle}>
                Where International Surgical Pedigree Meets South Delhi Serenity
              </h2>
              <div className={styles.prose}>
                <p>
                  Resplendent Aesthetics was founded in the enclave of Greater Kailash Part 1,
                  South Delhi, with a resolute objective: to transcend industrial-scale
                  aesthetic clinics and restore clinical plastic surgery as a dedicated,
                  bespoke fine art.
                </p>
                <p>
                  Formed through extensive international surgical training—notably specializing
                  in advanced Brazilian aesthetic plastic surgery techniques at the esteemed{" "}
                  <em>PUCRS (Pontifícia Universidade Católica do Rio Grande do Sul)</em>—our
                  approach balances anatomically sound surgical integrity with fluid organic
                  silhouettes.
                </p>
                <p>
                  Whether performing high-definition micro-follicular hair transplants,
                  structural preservation rhinoplasty, or refined facial rejuvenation, every
                  protocol is engineered for patients who prioritize discretion, natural
                  subtlety, and zero compromise on surgical safety.
                </p>
              </div>
              <div className={styles.stats}>
                {STATS.map((s) => (
                  <div key={s.label} className={styles.stat}>
                    <div className={s.green ? styles.statValueGreen : styles.statValue}>
                      {s.value}
                    </div>
                    <div className={styles.statLabel}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className={`${styles.section} ${styles.values}`}>
          <div className={styles.container}>
            <div className={styles.sectionHead}>
              <span className={styles.eyebrow}>Guiding Tenets</span>
              <h2 className={styles.sectionTitle}>The Pillars of Resplendent Aesthetics</h2>
              <div className={styles.divider} />
            </div>
            <div className={styles.valuesGrid}>
              {VALUES.map((v) => (
                <div key={v.title} className={styles.valueCard}>
                  <div
                    className={`${styles.valueIcon} ${
                      v.tone === "green" ? styles.valueGreen : styles.valueBlue
                    }`}
                  >
                    <Icon name={v.icon} />
                  </div>
                  <h3 className={styles.valueTitle}>{v.title}</h3>
                  <p className={styles.valueText}>{v.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sanctuary */}
        <section className={`${styles.section} ${styles.sanctuary}`}>
          <div className={`${styles.container} ${styles.sanctuaryWrap}`}>
            <div className={styles.sanctuaryHead}>
              <div className={styles.sanctuaryHeadTitle}>
                <span className={styles.eyebrowLight}>Sanctuary Specification</span>
                <h2 className={styles.sanctuaryTitle}>
                  Surgical Sanctuary: Engineered to Hospital-Grade Benchmarks
                </h2>
              </div>
              <div className={styles.sanctuaryHeadText}>
                <p className={styles.sanctuaryText}>
                  Our Greater Kailash Part 1 surgical suites replicate tertiary-care medical
                  standards with NABH-aligned protocols, ultra-sterile HEPA filtration, and
                  German micro-instrumentation.
                </p>
              </div>
            </div>

            <div className={styles.mosaic}>
              {MOSAIC.map((m) => (
                <div key={m.title} className={styles.mosaicItem}>
                  <img src={m.src} alt={m.alt} />
                  <div className={styles.mosaicOverlay}>
                    <span className={styles.mosaicTag}>{m.tag}</span>
                    <h4 className={styles.mosaicTitle}>{m.title}</h4>
                    <p className={styles.mosaicText}>{m.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.metrics}>
              {METRICS.map((m) => (
                <div key={m.title} className={styles.metric}>
                  <Icon name={m.icon} />
                  <div>
                    <div className={styles.metricTitle}>{m.title}</div>
                    <div className={styles.metricSub}>{m.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className={`${styles.section} ${styles.timeline}`}>
          <div className={styles.container}>
            <div className={`${styles.sectionHead} ${styles.timelineHead}`}>
              <span className={styles.eyebrow}>Our Evolution</span>
              <h2 className={styles.sectionTitle}>Milestones of Excellence</h2>
              <div className={styles.divider} />
            </div>
            <div className={styles.timelineWrap}>
              <div className={styles.timelineLine} />
              <div className={styles.timelineGrid}>
                {MILESTONES.map((m) => (
                  <div key={m.year} className={styles.milestone}>
                    <div
                      className={`${styles.milestoneDot} ${
                        m.green ? styles.milestoneDotGreen : ""
                      } ${m.globe ? styles.milestoneDotGlobe : ""}`}
                    >
                      {m.globe ? (
                        <Icon name="public" />
                      ) : (
                        <span className={`${styles.dot} ${m.green ? styles.dotGreen : ""}`} />
                      )}
                    </div>
                    <span className={m.green ? styles.milestoneYearGreen : styles.milestoneYear}>
                      {m.year}
                    </span>
                    <h4 className={styles.milestoneTitle}>{m.title}</h4>
                    <p className={styles.milestoneText}>{m.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className={`${styles.section} ${styles.cta}`}>
          <div className={`${styles.container} ${styles.ctaInner}`}>
            <div className={styles.ctaCopy}>
              <span className={styles.eyebrowLight}>Your Journey To Harmony</span>
              <h2 className={styles.ctaTitle}>Begin Your Transformation</h2>
              <p className={styles.ctaText}>
                Schedule a private, in-depth consultation with Dr. Sukhbir Singh at
                Resplendent Aesthetics, Greater Kailash 1.
              </p>
            </div>
            <div className={styles.ctaActions}>
              <Link href="/book-consultation" className={styles.ctaPrimary}>
                <span>Book Consultation</span>
                <Icon name="calendar_today" />
              </Link>
              <a href="tel:+919910391229" className={styles.ctaPhone}>
                <Icon name="call" />
                <span>+91 99103 91229</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerGrid}>
            <div className={styles.footerCol}>
              <img src={FOOTER_LOGO} alt="Resplendent Aesthetics" className={styles.footerLogo} />
              <p className={styles.footerText}>
                An ultra-luxurious, medical-grade sanctuary in Greater Kailash, South Delhi. We
                deliver bespoke surgical precision, natural harmony, and confidential aesthetic
                transformations led by board-certified plastic surgeons.
              </p>
              <div className={styles.socials}>
                {["photo_camera", "share", "play_circle"].map((i) => (
                  <a key={i} href="#" className={styles.social} aria-label={i}>
                    <Icon name={i} />
                  </a>
                ))}
              </div>
            </div>

            <div className={styles.footerCol}>
              <h3 className={styles.footerHeading}>Quick Links</h3>
              <ul className={styles.footerList}>
                {QUICK_LINKS.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href}>{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.footerCol}>
              <h3 className={styles.footerHeading}>Key Treatments</h3>
              <ul className={styles.footerList}>
                {TREATMENTS.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href}>{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.footerCol}>
              <h3 className={styles.footerHeading}>Studio Concierge</h3>
              <div className={styles.footerList}>
                <div className={styles.contactRow}>
                  <Icon name="location_on" />
                  <span>R-9, Basement, Greater Kailash Part 1, New Delhi - 110048</span>
                </div>
                <div className={styles.contactRow}>
                  <Icon name="call" />
                  <span>+91 99103 91229</span>
                </div>
                <div className={styles.contactRow}>
                  <Icon name="mail" />
                  <span>info@resplendentcosmetics.com</span>
                </div>
                <div className={styles.contactRow}>
                  <Icon name="schedule" />
                  <span>Mon - Sat: 9:00 AM - 7:00 PM</span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.footerBottom}>
            <p>© 2025 Resplendent Aesthetics. All Rights Reserved.</p>
            <p className={styles.disclaimer}>
              Disclaimer: Medical and surgical outcomes vary by individual anatomy. Content on
              this portal is for informative consultation guidance and does not replace dedicated.            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}