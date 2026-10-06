import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import InternationalConcierge from "@/components/contact/InternationalConcierge";
import QuickResponse from "@/components/contact/QuickResponse";
import ContactFooterNote from "@/components/contact/ContactFooterNote";
import styles from "./page.module.css";

export const metadata = {
  title: "Contact Us | Resplendent Aesthetics",
  description: "Get in touch with our sanctuary in Greater Kailash, New Delhi. Schedule a confidential consultation with our board-certified plastic surgeons."
};

export default function ContactPage() {
  return (
    <main className={styles.main}>
      <ContactHero />
      <section className={styles.contentSection}>
        <div className={styles.container}>
          <div className={styles.grid}>
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </section>
      <InternationalConcierge />
      <QuickResponse />
      <ContactFooterNote />
    </main>
  );
}
