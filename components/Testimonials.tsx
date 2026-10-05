import Icon from "./Icon";
import { testimonials, type Testimonial } from "@/data/testimonials";
import styles from "./Testimonials.module.css";

export default function Testimonials() {
  return (
    <section className={styles.root}>
      <div className={styles.stack}>
        <div>
          <span className={styles.label}>Patient Voices</span>
          <h2 className={styles.title}>
            Subtle Elegance, Uncompromised Discretion
          </h2>
        </div>
        <div className={styles.row}>
          {Array.from({ length: 5 }, (_, i) => (
            <Icon key={i} name="star" className={styles.icon} filled />
          ))}
          <span className={styles.label2}>4.9/5 from 820+ Audited Reviews</span>
        </div>
      </div>
      <div className={styles.columns}>
        {testimonials.map((item) => (
          <div key={item.name} className={styles.quote}>
            <div>
              <span className={styles.label3}>“</span>
              <p className={styles.text}>{item.quote}</p>
            </div>
            <div className={styles.row2}>
              <div>
                <p className={styles.text2}>{item.name}</p>
                <p className={styles.text3}>{item.meta}</p>
              </div>
              <Icon name="verified" className={styles.icon2} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
