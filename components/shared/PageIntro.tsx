import ui from "./ui.module.css";
import styles from "./PageIntro.module.css";

type PageIntroProps = {
  eyebrow: string;
  title: string;
  lead: string;
  stats?: { value: string; label: string }[];
};

/** Centred page heading for non-treatment pages (gallery, achievements). */
export default function PageIntro({ eyebrow, title, lead, stats }: PageIntroProps) {
  return (
    <section className={styles.root}>
      <div className={`${ui.container} ${styles.inner}`}>
        <span className={ui.statusPill}>
          <span className={ui.pulse} />
          {eyebrow}
        </span>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.lead}>{lead}</p>
        <div className={styles.divider} />
        {stats && (
          <dl className={styles.stats}>
            {stats.map((stat) => (
              <div key={stat.label} className={styles.stat}>
                <dt>{stat.label}</dt>
                <dd>{stat.value}</dd>
              </div>
            ))}
          </dl>
        )}
      </div>
    </section>
  );
}
