import Icon from "@/components/Icon";
import type { CardGridData } from "@/data/treatments/types";
import ui from "@/components/shared/ui.module.css";
import styles from "./CardGrid.module.css";

type CardGridProps = {
  data: CardGridData;
  tone?: "white" | "ivory" | "dark";
};

export default function CardGrid({ data, tone = "white" }: CardGridProps) {
  const toneClass = tone === "dark" ? `${ui.dark} ${styles.darkRoot}` : ui[tone];

  return (
    <section id={data.id} className={`${ui.section} ${toneClass}`}>
      <div className={ui.container}>
        <div className={ui.headerCenter}>
          <span className={ui.eyebrow}>{data.eyebrow}</span>
          <h2 className={ui.title}>{data.title}</h2>
          {data.intro && <p className={ui.lead}>{data.intro}</p>}
        </div>

        <div className={data.columns === 4 ? styles.grid4 : styles.grid3}>
          {data.cards.map((card) => (
            <article key={card.title} className={styles.card}>
              <div>
                <span className={styles.iconWrap}>
                  <Icon name={card.icon} className={styles.icon} />
                </span>
                {card.eyebrow && <span className={styles.eyebrow}>{card.eyebrow}</span>}
                <h3 className={styles.title}>{card.title}</h3>
                <p className={styles.text}>{card.text}</p>
              </div>
              {card.footValue && (
                <div className={styles.foot}>
                  {card.footLabel && <span>{card.footLabel}</span>}
                  <span className={styles.footValue}>{card.footValue}</span>
                </div>
              )}
            </article>
          ))}
        </div>

        {data.stats && (
          <div className={styles.stats}>
            {data.stats.map((stat) => (
              <div key={stat.label}>
                <span className={styles.statValue}>{stat.value}</span>
                <p className={styles.statLabel}>{stat.label}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
