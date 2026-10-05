import Link from "next/link";
import Icon from "@/components/Icon";
import styles from "./AboutCta.module.css";

export default function AboutCta() {
  return (
    <section className={styles.root}>
      <div className={styles.stack}>
        <div className={styles.stack2}>
          <span className={styles.label}>Your Journey To Harmony</span>
          <h2 className={styles.title}>Begin Your Transformation</h2>
          <p className={styles.text}>
            Schedule a private, in-depth consultation with Dr. Sukhbir Singh at
            Resplendent Aesthetics, Greater Kailash 1.
          </p>
        </div>
        <div className={styles.stack3}>
          <Link className={styles.button} href="/book-consultation">
            <span>Book Consultation</span>
            <Icon name="calendar_today" className={styles.icon} />
          </Link>
          <a className={styles.button2} href="tel:+919910391229">
            <Icon name="call" className={styles.icon2} />
            <span>+91 99103 91229</span>
          </a>
        </div>
      </div>
    </section>
  );
}
