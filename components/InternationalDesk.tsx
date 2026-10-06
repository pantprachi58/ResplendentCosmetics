import Link from "next/link";
import Icon from "./Icon";
import { perks, type Perk } from "@/data/internationalDesk";
import styles from "./InternationalDesk.module.css";

export default function InternationalDesk() {
  return (
    <section className={styles.root}>
      <div className={styles.decor} />
      <div className={styles.inner}>
        <div className={styles.columns}>
          <div className={styles.stack}>
            <div className={styles.row}>
              <Icon name="public" className={styles.icon} />
              <span className={styles.label}>
                Global Medical Tourism Program
              </span>
            </div>
            <h2 className={styles.title}>International Patient Concierge</h2>
            <p className={styles.text}>
              From seamless virtual initial consultations to Delhi Indira Gandhi
              International (DEL) airport pickup, luxury 5-star hotel
              accommodation in South Delhi, and multilingual translation
              services — we coordinate your surgical journey with white-glove
              hospitality.
            </p>
            <div className={styles.columns2}>
              {perks.map((item) => (
                <div key={item.label} className={styles.perk}>
                  <Icon name={item.icon} className={styles.icon2} />
                  <span className={styles.label2}>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.stack2}>
            <Link className={styles.button} href="/contact#international-desk">
              <span>Contact International Desk</span>
              <Icon name="travel_explore" className={styles.icon3} />
            </Link>
            <span className={styles.label3}>
              Direct WhatsApp Hotline: +91 99103 91229
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
