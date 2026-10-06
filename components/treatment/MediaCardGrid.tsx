import Image from "next/image";
import Icon from "@/components/Icon";
import type { MediaCardGridData } from "@/data/treatments/types";
import ui from "@/components/shared/ui.module.css";
import styles from "./MediaCardGrid.module.css";

type MediaCardGridProps = {
  data: MediaCardGridData;
  tone?: "white" | "ivory";
};

const gridClass = {
  2: styles.grid2,
  3: styles.grid3,
  4: styles.grid4,
};

/** Photo-led cards: service types with an image, or a plain photo gallery when cards have no text. */
export default function MediaCardGrid({ data, tone = "white" }: MediaCardGridProps) {
  const contain = data.fit === "contain";
  const sizes =
    data.columns === 2
      ? "(min-width: 768px) 50vw, 100vw"
      : "(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw";

  return (
    <section id={data.id} className={`${ui.section} ${ui[tone]}`}>
      <div className={ui.container}>
        <div className={ui.headerSplit}>
          <div>
            <span className={ui.eyebrow}>{data.eyebrow}</span>
            <h2 className={ui.title}>{data.title}</h2>
            {data.intro && <p className={ui.lead}>{data.intro}</p>}
          </div>
          {data.note && (
            <span className={styles.note}>
              <Icon name="info" className={styles.noteIcon} />
              {data.note}
            </span>
          )}
        </div>

        <div className={gridClass[data.columns]}>
          {data.cards.map((card) => (
            <article key={card.image.src} className={styles.card}>
              <div
                className={`${ui.media} ${contain ? styles.photoContain : styles.photo} ${
                  data.aspect === "portrait" ? styles.portrait : ""
                }`}
              >
                <Image
                  src={card.image.src}
                  alt={card.image.alt}
                  fill
                  sizes={sizes}
                  className={contain ? styles.contain : ui.cover}
                />
              </div>
              {(card.title || card.text || card.bullets) && (
                <div className={styles.body}>
                  {card.title && <h3 className={styles.title}>{card.title}</h3>}
                  {card.text && <p className={styles.text}>{card.text}</p>}
                  {card.bullets && (
                    <ul className={styles.bullets}>
                      {card.bullets.map((bullet) => (
                        <li key={bullet}>
                          <Icon name="check_circle" className={styles.check} />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
              {card.footValue && (
                <div className={styles.foot}>
                  {card.footLabel && <span>{card.footLabel}</span>}
                  <span className={styles.footValue}>{card.footValue}</span>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
