import Link from "next/link";
import Icon from "./Icon";
import styles from "./AppointmentCta.module.css";

export default function AppointmentCta() {
  return (
    <section className={styles.root}>
      <div className={styles.inner}>
        <div className={styles.stack}>
          <div>
            <span className={styles.label}>Confidential & Bespoke</span>
            <h3 className={styles.subtitle}>
              Ready to discuss your aesthetic goals?
            </h3>
            <p className={styles.text}>
              Meet with Dr. Sukhbir Singh in Greater Kailash 1 for a detailed
              facial or anatomical assessment.
            </p>
          </div>
          <div className={styles.row}>
            <Link className={styles.button} href="/book-consultation">
              Reserve Studio Appointment
            </Link>
            <a className={styles.button2} href="tel:+919910391229">
              <Icon name="call" className={styles.icon} />
              <span>+91 99103 91229</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
