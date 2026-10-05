import Icon from "@/components/Icon";
import { milestones, type Milestone } from "@/data/about";
import styles from "./Milestones.module.css";

const ringToneClass: Record<Milestone["ringTone"], string> = {
  blue: styles.ringBlue,
  emerald: styles.ringEmerald,
};
const dotToneClass: Record<Milestone["dotTone"], string> = {
  blue: styles.dotBlue,
  green: styles.dotGreen,
};
const yearToneClass: Record<Milestone["yearTone"], string> = {
  blue: styles.yearBlue,
  green: styles.yearGreen,
};

export default function Milestones() {
  return (
    <section className={styles.root}>
      <div className={styles.stack}>
        <div className={styles.stack2}>
          <span className={styles.label}>Our Evolution</span>
          <h2 className={styles.title}>Milestones of Excellence</h2>
          <div className={styles.card} />
        </div>
        <div className={styles.box}>
          <div className={styles.decor} />
          <div className={styles.columns}>
            {milestones.map((item) => (
              <div
                key={item.year}
                className={`${styles.milestone} ${styles.group}`}
              >
                <div
                  className={`${styles.ring} ${ringToneClass[item.ringTone]}`}
                >
                  <span
                    className={`${styles.dot} ${dotToneClass[item.dotTone]}`}
                  />
                </div>
                <span
                  className={`${styles.year} ${yearToneClass[item.yearTone]}`}
                >
                  {item.year}
                </span>
                <h4 className={styles.h4}>{item.title}</h4>
                <p className={styles.text}>{item.description}</p>
              </div>
            ))}
            <div className={`${styles.milestone} ${styles.group}`}>
              <div className={styles.row}>
                <Icon name="public" className={styles.icon} />
              </div>
              <span className={styles.label2}>Present</span>
              <h4 className={styles.h4}>Global Trust</h4>
              <p className={styles.text}>
                Over 15,000 delighted transformations across 45 countries with
                an active International Patient Concierge Desk in South Delhi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
