import { stats, type Stat } from "@/data/stats";
import styles from "./TrustBar.module.css";

const toneClass: Record<Stat["tone"], string> = {
  primary: styles.labelPrimary,
  secondary: styles.labelSecondary,
};

export default function TrustBar() {
  return (
    <section className={styles.root}>
      <div className={styles.columns}>
        {stats.map((item) => (
          <div key={item.label} className={styles.stat}>
            <span className={`${styles.label} ${toneClass[item.tone]}`}>
              {item.value}
            </span>
            <span className={styles.label2}>{item.label}</span>
            <span className={styles.label3}>{item.caption}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
