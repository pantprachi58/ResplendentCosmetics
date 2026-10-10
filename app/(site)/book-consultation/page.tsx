import type { Metadata } from "next";
import Image from "next/image";
import Icon from "@/components/Icon";
import Breadcrumb from "@/components/treatment/Breadcrumb";
import CardGrid from "@/components/treatment/CardGrid";
import FaqAccordion from "@/components/treatment/FaqAccordion";
import BookingWizard from "@/components/booking/BookingWizard";
import {
  BOOKING_MAP_IMAGE,
  LEAD_SURGEON_THUMB,
  accreditedBenchmarks,
  bookingFaq,
  sanctuaryStandards,
} from "@/data/booking";
import { MAPS_URL } from "@/data/contact";
import ui from "@/components/shared/ui.module.css";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Book a Consultation | Resplendent Aesthetics",
  description:
    "Schedule a confidential in-person or virtual consultation with our plastic surgeons and aesthetic dermatologists in Greater Kailash, New Delhi.",
};

export default function BookConsultationPage() {
  return (
    <main className={ui.page}>
      <Breadcrumb current="Book Consultation" />

      {/* Editorial Header */}
      <section className={styles.header}>
        <div className={ui.container}>
          <div className={styles.headerCopy}>
            <span className={ui.statusPill}>
              <span className={ui.pulse} />
              Private Clinical Reservation
            </span>
            <h1 className={styles.title}>Your First Step Toward Transformation</h1>
            <p className={styles.lead}>
              Schedule a confidential, in-depth diagnostic consultation with our board-certified cosmetic surgeons and
              senior aesthetic dermatologists within our private South Delhi sanctuary.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Flow + Concierge Sidebar */}
      <section className={styles.booking}>
        <div className={`${ui.container} ${styles.grid}`}>
          <div className={styles.main}>
            <BookingWizard />
            <div className={styles.security}>
              <span>
                <Icon name="lock" className={styles.green} />
                Confidential, encrypted patient records
              </span>
              <span>
                <Icon name="verified" className={styles.green} />
                Exclusive 1-on-1 Sanctuary Consultation
              </span>
            </div>
          </div>

          <aside className={styles.sidebar}>
            <div className={styles.card}>
              <div>
                <span className={ui.eyebrow}>Studio Concierge</span>
                <h2 className={styles.cardTitle}>Greater Kailash Sanctuary</h2>
              </div>
              <div className={styles.concierge}>
                <div className={styles.conciergeItem}>
                  <span className={styles.conciergeIcon}>
                    <Icon name="location_on" />
                  </span>
                  <div>
                    <span className={styles.conciergeLabel}>Sanctuary Address</span>
                    <p className={styles.conciergeText}>
                      R-9, Basement Suite, Greater Kailash Part 1, New Delhi - 110048, India
                    </p>
                    <span className={styles.conciergeAccent}>Private entrance with valet</span>
                  </div>
                </div>
                <div className={styles.conciergeItem}>
                  <span className={styles.conciergeIcon}>
                    <Icon name="call" />
                  </span>
                  <div>
                    <span className={styles.conciergeLabel}>Direct Surgical Desk</span>
                    <a className={styles.conciergeStrong} href="tel:+919910391229">
                      +91 99103 91229
                    </a>
                    <a
                      className={styles.conciergeLink}
                      href="https://wa.me/919910391229"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Connect on WhatsApp →
                    </a>
                  </div>
                </div>
                <div className={styles.conciergeItem}>
                  <span className={styles.conciergeIcon}>
                    <Icon name="schedule" />
                  </span>
                  <div>
                    <span className={styles.conciergeLabel}>Operating Hours</span>
                    <p className={styles.conciergeText}>Mon – Sat: 9:00 AM – 7:00 PM</p>
                    <span className={styles.conciergeMuted}>Strictly by prior scheduled appointment</span>
                  </div>
                </div>
              </div>
              <a className={`${ui.media} ${styles.map}`} href={MAPS_URL} target="_blank" rel="noopener noreferrer">
                <Image src={BOOKING_MAP_IMAGE} alt="Map of the Greater Kailash studio" fill sizes="(min-width: 1024px) 25vw, 100vw" className={ui.cover} />
                <span className={styles.mapLabel}>View Studio Map &amp; Valet Route</span>
              </a>
            </div>

            <div className={`${styles.card} ${styles.cardTint}`}>
              <h2 className={styles.cardTitle}>Sanctuary Standards</h2>
              <div className={styles.standards}>
                {sanctuaryStandards.map((item) => (
                  <div key={item.title} className={styles.standard}>
                    <Icon name={item.icon} className={styles.standardIcon} />
                    <div>
                      <p className={styles.standardTitle}>{item.title}</p>
                      <p className={styles.conciergeText}>{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <figure className={styles.quoteCard}>
              <Icon name="format_quote" className={styles.quoteMark} />
              <blockquote className={styles.quote}>
                “Aesthetic surgery is an uncompromising balance between anatomical science and artistic proportion. We
                never rush the first conversation.”
              </blockquote>
              <figcaption className={styles.quoteAuthor}>
                <span className={`${ui.media} ${styles.quoteAvatar}`}>
                  <Image src={LEAD_SURGEON_THUMB} alt="Dr. Sukhbir Singh" fill sizes="40px" className={ui.cover} />
                </span>
                <span>
                  <span className={styles.quoteName}>Dr. Sukhbir Singh</span>
                  <span className={styles.conciergeMuted}>MS, MCh Plastic Surgery (PUCRS Brazil)</span>
                </span>
              </figcaption>
            </figure>
          </aside>
        </div>
      </section>

      <CardGrid data={accreditedBenchmarks} tone="white" />
      <FaqAccordion data={bookingFaq} tone="ivory" />
    </main>
  );
}
