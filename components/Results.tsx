import Icon from "./Icon";
import CompareSlider from "./shared/CompareSlider";
import { results, type CaseStudy } from "@/data/results";
import styles from "./Results.module.css";

const badgeToneClass: Record<CaseStudy["badgeTone"], string> = {
  primary: styles.stampPrimary,
  emerald: styles.stampEmerald,
};

export default function Results() {
  return (
    <section className={styles.root}>
      <div className={styles.box}>
        <span className={styles.label}>Verified Transformations</span>
        <h2 className={styles.title}>Clinical Gallery of Elegance</h2>
        <p className={styles.text}>
          Explore natural aesthetic transformations achieved with customized
          surgical plans. All photographs are genuine clinical records displayed
          with explicit patient consent.
        </p>
      </div>
      <div className={styles.columns}>
        {results.map((item) => (
          <div key={item.title} className={styles.case}>
            <CompareSlider
              className={styles.box2}
              size="sm"
              before={item.before}
              after={item.after}
              subject={item.title}
              focus={item.focus}
              sample={item.sample}
              sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
            >
              <div className={styles.card}>{item.tag}</div>
              <div
                className={`${styles.stamp} ${badgeToneClass[item.badgeTone]}`}
              >
                {item.badge}
              </div>
            </CompareSlider>
            <div className={styles.stack}>
              <div>
                <h3 className={styles.subtitle}>{item.title}</h3>
                <p className={styles.text2}>{item.description}</p>
              </div>
              <div className={styles.row}>
                <span className={styles.label2}>{item.credit}</span>
                <span className={styles.label3}>{item.note}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.row2}>
        <Icon name="info" className={styles.icon} />
        <p className={styles.text3}>
          <strong>Mandatory Medical Notice:</strong> Aesthetic and
          reconstructive results are unique to individual anatomical
          characteristics, skin laxity, and healing responses. Case studies
          shown represent actual surgical results under standardized
          photographic conditions. A formal in-person consultation is essential
          to evaluate candidate suitability.
        </p>
      </div>
    </section>
  );
}
