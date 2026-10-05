import Icon from "@/components/Icon";
import { pillars, type Pillar } from "@/data/about";
import styles from "./Values.module.css";

const toneClass: Record<Pillar["tone"], string> = {
  blue: styles.iconBoxBlue,
  emerald: styles.iconBoxEmerald,
};

export default function Values() {
  return (
    <section className={styles.root}>
      <div className={styles.inner}>
        <div className={styles.stack}>
          <span className={styles.label}>Guiding Tenets</span>
          <h2 className={styles.title}>
            The Pillars of Resplendent Aesthetics
          </h2>
          <div className={styles.card} />
        </div>
        <div className={styles.columns}>
          {pillars.map((item) => (
            <div
              key={item.title}
              className={`${styles.pillar} ${styles.group}`}
            >
              <div className={`${styles.iconBox} ${toneClass[item.tone]}`}>
                <Icon name={item.icon} className={styles.icon} />
              </div>
              <h3 className={styles.subtitle}>{item.title}</h3>
              <p className={styles.text}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
