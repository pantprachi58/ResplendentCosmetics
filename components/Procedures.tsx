import Image from "next/image";
import Icon from "./Icon";
import { procedures, type Procedure } from "@/data/procedures";
import styles from "./Procedures.module.css";

const cardToneClass: Record<Procedure["cardTone"], string> = {
  blue: styles.cardBlue,
  emerald: styles.cardEmerald,
};
const badgeToneClass: Record<Procedure["badgeTone"], string> = {
  navy: styles.tagNavy,
  blue: styles.tagBlue,
  slate: styles.tagSlate,
  mint: styles.tagMint,
  solid: styles.tagSolid,
};

export default function Procedures() {
  return (
    <section className={styles.root} id="procedures">
      <div className={styles.stack}>
        <div className={styles.box}>
          <span className={styles.label}>Curated Clinical Portfolio</span>
          <h2 className={styles.title}>Surgical & Non-Surgical Procedures</h2>
          <p className={styles.text}>
            Bespoke treatments tailored to your unique anatomy, performed inside
            state-of-the-art sterile theatres by credentialed specialists.
          </p>
        </div>
        <div className={styles.row}>
          <span className={styles.label2}>Classification:</span>
          <span className={styles.badge}>All Disciplines</span>
          <span className={styles.badge2}>Surgical</span>
          <span className={styles.badge2}>Dermatology</span>
        </div>
      </div>
      <div className={styles.columns}>
        {procedures.map((item) => (
          <div
            key={item.title}
            className={`${styles.card} ${styles.group} ${cardToneClass[item.cardTone]}`}
          >
            <div className={styles.box2}>
              <Image
                className={styles.image}
                src={item.image}
                alt={item.imageAlt}
                fill
                sizes="(min-width: 1280px) 20vw, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
              />
              <span
                className={`${styles.tag} ${badgeToneClass[item.badgeTone]}`}
              >
                {item.badge}
              </span>
            </div>
            <div className={styles.stack2}>
              <div>
                <h3 className={styles.subtitle}>{item.title}</h3>
                <p className={styles.text2}>{item.description}</p>
              </div>
              <div className={styles.row2}>
                <span className={styles.label3}>Learn More</span>
                <Icon name="arrow_forward" className={styles.icon} />
              </div>
            </div>
            <div className={styles.box3} />
          </div>
        ))}
      </div>
    </section>
  );
}
