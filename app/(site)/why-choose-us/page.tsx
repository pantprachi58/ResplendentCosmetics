import type { Metadata } from "next";
import Image from "next/image";
import Icon from "@/components/Icon";
import CtaLink from "@/components/shared/CtaLink";
import Breadcrumb from "@/components/treatment/Breadcrumb";
import CardGrid from "@/components/treatment/CardGrid";
import CtaBand from "@/components/treatment/CtaBand";
import {
  affiliations,
  comparisonRows,
  consultationPoints,
  facilityShowcase,
  pillars,
  testimonial,
  trustMetrics,
} from "@/data/whyChooseUs";
import ui from "@/components/shared/ui.module.css";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Why Choose Us | Resplendent Aesthetics",
  description:
    "Fellowship-trained surgeons, a zero-delegation pledge, Class-100 operating theatres and discreet private recovery in Greater Kailash, New Delhi.",
};

export default function WhyChooseUsPage() {
  const { main, side } = facilityShowcase;

  return (
    <main className={ui.page}>
      <Breadcrumb current="Why Choose Us" />

      {/* Hero */}
      <section className={`${ui.white} ${styles.hero}`}>
        <div className={ui.container}>
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <span className={ui.statusPill}>
                <span className={ui.pulse} />
                The Resplendent Standard
              </span>
              <h1 className={styles.title}>
                Six Reasons Patients Choose <span className={ui.highlight}>Resplendent Aesthetics</span> — And Stay
              </h1>
              <p className={styles.lead}>
                A bespoke clinical sanctuary in South Delhi where international surgical fellowship mastery, an
                unyielding zero-delegation pledge, and discreet private recovery converge.
              </p>
            </div>
            <div className={styles.directorCard}>
              <div className={styles.directorHead}>
                <span className={styles.directorEyebrow}>Surgical Director</span>
                <Icon name="verified" filled className={styles.green} />
              </div>
              <div className={styles.directorId}>
                <span className={styles.initials}>SS</span>
                <div>
                  <p className={styles.directorName}>Dr. Sukhbir Singh</p>
                  <p className={styles.directorCreds}>MS, MCh (Plastic Surgery) • Fellow PUCRS Brazil</p>
                </div>
              </div>
              <p className={styles.directorQuote}>
                “We practice surgery as high-tailored human art, backed by unyielding hospital-grade sterility.”
              </p>
            </div>
          </div>

          <div className={styles.metrics}>
            {trustMetrics.map((metric) => (
              <div key={metric.label} className={styles.metric}>
                <span className={styles.metricValue}>
                  {metric.value}
                  {metric.unit && <small>{metric.unit}</small>}
                </span>
                <span className={styles.metricLabel}>{metric.label}</span>
                <span className={styles.metricText}>{metric.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facility Showcase */}
      <section className={`${ui.ivory} ${styles.showcase}`}>
        <div className={`${ui.container} ${styles.showcaseGrid}`}>
          <div className={`${ui.media} ${styles.showcaseMain}`}>
            <Image src={main.src} alt={main.alt} fill sizes="(min-width: 1024px) 58vw, 100vw" className={ui.cover} />
            <div className={styles.showcaseScrim} />
            <div className={styles.showcaseCopy}>
              <span className={styles.showcaseEyebrow}>{main.eyebrow}</span>
              <h2 className={styles.showcaseTitle}>{main.title}</h2>
              <p className={styles.showcaseText}>{main.text}</p>
            </div>
          </div>
          <div className={styles.showcaseSide}>
            {side.map((tile) => (
              <div key={tile.title} className={`${ui.media} ${styles.showcaseTile}`}>
                <Image src={tile.src} alt={tile.alt} fill sizes="(min-width: 1024px) 40vw, 100vw" className={ui.cover} />
                <div className={styles.showcaseScrim} />
                <div className={styles.tileCopy}>
                  <div>
                    <span className={styles.showcaseEyebrow}>{tile.eyebrow}</span>
                    <h3 className={styles.tileTitle}>{tile.title}</h3>
                  </div>
                  <Icon name={tile.icon} className={styles.tileIcon} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CardGrid data={pillars} />

      {/* Comparison Matrix */}
      <section className={`${ui.section} ${ui.ivory}`}>
        <div className={ui.container}>
          <div className={ui.headerCenter}>
            <span className={ui.eyebrow}>The Transparency Standard</span>
            <h2 className={ui.title}>Commercial Clinics vs. Resplendent Aesthetics</h2>
            <p className={ui.lead}>
              Make an informed choice for your body, safety, and long-term aesthetic investment. Here is how our
              clinical governance differs from retail cosmetic franchises.
            </p>
          </div>
          <div className={styles.tableScroll}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th scope="col">Key Consideration</th>
                  <th scope="col">Commercial Cosmetic Clinics</th>
                  <th scope="col" className={styles.thOurs}>
                    <Icon name="verified" className={styles.green} />
                    Resplendent Aesthetics
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.topic}>
                    <th scope="row">
                      <span className={styles.rowTopic}>{row.topic}</span>
                      <span className={styles.rowDetail}>{row.detail}</span>
                    </th>
                    <td>
                      <span className={styles.cell}>
                        <Icon name="cancel" className={styles.red} />
                        {row.commercial}
                      </span>
                    </td>
                    <td className={styles.tdOurs}>
                      <span className={styles.cell}>
                        <Icon name="check_circle" filled className={styles.green} />
                        {row.resplendent}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Testimonial & Affiliations */}
      <section className={`${ui.section} ${ui.dark} ${styles.testimonialSection}`}>
        <div className={`${ui.container} ${styles.testimonialInner}`}>
          <div className={styles.testimonialGrid}>
            <div className={styles.testimonialIntro}>
              <span className={ui.eyebrow}>Client Testimonial</span>
              <h2 className={styles.testimonialHeadline}>{testimonial.headline}</h2>
              <div className={styles.stars} aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }, (_, i) => (
                  <Icon key={i} name="star" filled />
                ))}
              </div>
            </div>
            <figure className={styles.testimonialCard}>
              <blockquote className={styles.testimonialQuote}>{testimonial.quote}</blockquote>
              <figcaption className={styles.testimonialAuthor}>
                <div>
                  <span className={styles.authorName}>{testimonial.author}</span>
                  <span className={styles.authorProcedure}>{testimonial.procedure}</span>
                </div>
                <span className={styles.lockBadge}>
                  <Icon name="lock" />
                </span>
              </figcaption>
            </figure>
          </div>

          <div>
            <div className={styles.affiliationHead}>
              <div>
                <span className={ui.eyebrow}>Medical Affiliations</span>
                <h3 className={styles.affiliationTitle}>Global Fellowship Accreditations</h3>
              </div>
              <p className={styles.affiliationText}>
                Our operating credentials meet the most stringent standards instituted by international plastic
                surgery assemblies.
              </p>
            </div>
            <div className={styles.affiliationGrid}>
              {affiliations.map((item) => (
                <div key={item.title} className={styles.affiliation}>
                  <Icon name={item.icon} className={styles.affiliationIcon} />
                  <span className={styles.affiliationName}>{item.title}</span>
                  <span className={styles.affiliationDesc}>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Consultation */}
      <section className={`${ui.section} ${ui.white}`}>
        <div className={ui.container}>
          <div className={styles.consult}>
            <div className={styles.consultCopy}>
              <span className={ui.statusPill}>
                <Icon name="schedule" />
                Personalized Evaluation
              </span>
              <h2 className={ui.title}>What Happens in a Resplendent Consultation?</h2>
              <p className={ui.lead}>
                Unlike rapid 10-minute commercial sales pitches, your initial session spans 45 minutes of detailed
                anatomical analysis, medical history review, high-resolution photographic mapping, and candid surgical
                guidance directly with Dr. Sukhbir Singh.
              </p>
              <ul className={styles.consultPoints}>
                {consultationPoints.map((point) => (
                  <li key={point}>
                    <Icon name="done_all" className={styles.green} />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.consultCard}>
              <div>
                <span className={ui.eyebrow}>Reserve An Appointment</span>
                <p className={styles.consultCardTitle}>Private Clinical Session</p>
                <p className={styles.consultCardText}>In-Person at GK-1 or Virtual for Outstation</p>
              </div>
              <CtaLink cta={{ label: "Schedule Evaluation", href: "/book-consultation", icon: "calendar_month" }} block />
              <CtaLink
                cta={{ label: "+91 99103 91229", href: "tel:+919910391229", iconLeading: "phone" }}
                variant="secondary"
                block
              />
              <p className={styles.consultNote}>
                <Icon name="lock" className={styles.green} />
                Strict confidentiality &amp; NDA compliance honored.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        data={{
          eyebrow: "Greater Kailash Part 1 • South Delhi",
          title: "Experience The Difference in Person",
          text: "Step inside our private basement sanctuary where aesthetic plastic surgery is approached with absolute precision, artistic restraint, and world-class hospital safety.",
          primaryCta: { label: "Book Confidential Consultation", href: "/book-consultation", icon: "arrow_forward" },
          meta: [
            { icon: "location_on", label: "R-9, Basement, Greater Kailash Part 1, New Delhi - 110048" },
            { icon: "schedule", label: "Monday to Saturday: 9:00 AM – 7:00 PM" },
          ],
        }}
      />
    </main>
  );
}
