import type { Metadata } from "next";
import Image from "next/image";
import Icon from "@/components/Icon";
import CtaLink from "@/components/shared/CtaLink";
import Breadcrumb from "@/components/treatment/Breadcrumb";
import CardGrid from "@/components/treatment/CardGrid";
import ContactForm from "@/components/contact/ContactForm";
import {
  MAP_IMAGE,
  MAPS_URL,
  contactChannels,
  internationalDesk,
  reassurances,
  socialLinks,
} from "@/data/contact";
import ui from "@/components/shared/ui.module.css";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Contact Us | Resplendent Aesthetics",
  description:
    "Contact Resplendent Aesthetics at R-9, Greater Kailash Part 1, New Delhi. Confidential surgical inquiries, international patient guidance and directions.",
};

export default function ContactPage() {
  return (
    <main className={ui.page}>
      <Breadcrumb current="Contact Us" />

      <section className={styles.intro}>
        <div className={ui.container}>
          {/* Page Header */}
          <div className={styles.header}>
            <span className={ui.statusPill}>
              <span className={ui.pulse} />
              Get In Touch With Our Sanctuary
            </span>
            <h1 className={styles.title}>
              Let’s Start the <span className={ui.highlight}>Conversation</span>
            </h1>
            <p className={styles.lead}>
              Schedule a confidential surgical assessment, request international patient guidance, or connect directly
              with our South Delhi clinical concierge.
            </p>
          </div>

          <div className={styles.grid}>
            <ContactForm />

            <div className={styles.side}>
              {/* Studio Location */}
              <div className={styles.card}>
                <span className={styles.cardEyebrow}>
                  <Icon name="storefront" filled />
                  Studio Location
                </span>
                <h2 className={styles.cardTitle}>Resplendent Sanctuary</h2>
                <p className={styles.address}>
                  R-9, Basement, Greater Kailash Part 1,
                  <br />
                  New Delhi – 110048, India
                </p>
                <span className={styles.landmark}>
                  <Icon name="near_me" className={styles.green} />
                  Landmark: Near M-Block Market, South Delhi
                </span>
                <a className={`${ui.media} ${styles.map}`} href={MAPS_URL} target="_blank" rel="noopener noreferrer">
                  <Image src={MAP_IMAGE} alt="Map of R-9, Greater Kailash Part 1" fill sizes="(min-width: 1024px) 35vw, 100vw" className={ui.cover} />
                  <span className={styles.mapPin}>
                    <span className={styles.ping} />
                    Resplendent Studio
                  </span>
                </a>
                <a className={styles.mapLink} href={MAPS_URL} target="_blank" rel="noopener noreferrer">
                  Open in Google Maps
                  <Icon name="open_in_new" />
                </a>
              </div>

              {/* Concierge Channels */}
              <div className={styles.card}>
                <h2 className={styles.cardTitle}>Direct Concierge Channels</h2>
                <div className={styles.channels}>
                  {contactChannels.map((channel) => (
                    <div key={channel.title} className={styles.channel}>
                      <span className={styles.channelIcon}>
                        <Icon name={channel.icon} />
                      </span>
                      <div>
                        <span className={styles.channelLabel}>{channel.title}</span>
                        {channel.href ? (
                          <a className={styles.channelValue} href={channel.href}>
                            {channel.value}
                          </a>
                        ) : (
                          <span className={styles.channelValue}>{channel.value}</span>
                        )}
                        {channel.text && <span className={styles.channelText}>{channel.text}</span>}
                        {channel.accent && <span className={styles.channelAccent}>{channel.accent}</span>}
                      </div>
                    </div>
                  ))}
                </div>
                <p className={styles.parking}>
                  <Icon name="local_parking" className={styles.green} />
                  <span>
                    <strong>VIP Arrival Protocol:</strong> Complimentary valet parking is available at our private
                    basement entrance with discreet VIP elevator access straight into the consultation lounge.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CardGrid data={internationalDesk} tone="dark" />

      {/* Direct WhatsApp & Social Connect */}
      <section className={styles.connect}>
        <div className={ui.container}>
          <div className={styles.connectCard}>
            <div className={styles.connectCopy}>
              <span className={styles.connectIcon}>
                <Icon name="chat" />
              </span>
              <div>
                <p className={styles.connectTitle}>Need an Immediate Response?</p>
                <p className={styles.connectText}>Our clinical coordinators are actively online during working studio hours.</p>
              </div>
            </div>
            <div className={styles.socials}>
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={link.primary ? styles.socialPrimary : styles.social}
                >
                  <Icon name={link.icon} />
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div className={styles.reassurances}>
            {reassurances.map((item) => (
              <span key={item.label}>
                <Icon name={item.icon} className={styles.green} />
                {item.label}
              </span>
            ))}
          </div>
          <div className={styles.connectCta}>
            <CtaLink cta={{ label: "Book a Consultation", href: "/book-consultation", icon: "arrow_forward" }} />
          </div>
        </div>
      </section>
    </main>
  );
}
