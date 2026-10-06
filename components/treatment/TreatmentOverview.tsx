import Image from "next/image";
import Icon from "@/components/Icon";
import type { TreatmentOverviewData } from "@/data/treatments/types";
import ui from "@/components/shared/ui.module.css";
import styles from "./TreatmentOverview.module.css";

export default function TreatmentOverview({ data }: { data: TreatmentOverviewData }) {
  const { media } = data;

  return (
    <section className={`${ui.section} ${ui.white}`}>
      <div className={ui.container}>
        <div className={ui.headerCenter}>
          <span className={ui.eyebrow}>{data.eyebrow}</span>
          <h2 className={ui.title}>{data.title}</h2>
          {data.intro && <p className={ui.lead}>{data.intro}</p>}
        </div>

        <div className={styles.grid}>
          <div className={styles.mediaCard}>
            <div className={`${ui.media} ${styles.photo}`}>
              <Image src={media.src} alt={media.alt} fill sizes="(min-width: 1024px) 40vw, 100vw" className={ui.cover} />
              {media.tag && <span className={styles.tag}>{media.tag}</span>}
            </div>
            <div className={styles.mediaBody}>
              <h3 className={styles.mediaTitle}>{media.title}</h3>
              <p className={styles.mediaText}>{media.text}</p>
              {media.checklist && (
                <ul className={styles.checklist}>
                  {media.checklist.map((item) => (
                    <li key={item}>
                      <Icon name="check_circle" className={styles.check} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <div className={styles.options}>
            {data.paragraphs?.map((paragraph) => (
              <p key={paragraph} className={styles.paragraph}>
                {paragraph}
              </p>
            ))}
            {data.options.map((option) => (
              <article
                key={option.title}
                className={`${styles.option} ${option.featured ? styles.featured : ""} ${option.muted ? styles.muted : ""}`}
              >
                <div className={styles.optionHead}>
                  <div className={styles.optionTitleRow}>
                    {option.icon && <Icon name={option.icon} className={styles.optionIcon} />}
                    <div>
                      <h3 className={styles.optionTitle}>{option.title}</h3>
                      {option.subtitle && <p className={styles.optionSubtitle}>{option.subtitle}</p>}
                    </div>
                  </div>
                  {option.tag && <span className={styles.optionTag}>{option.tag}</span>}
                </div>
                {option.text && <p className={styles.optionText}>{option.text}</p>}
                {option.bullets && (
                  <ul className={styles.bullets}>
                    {option.bullets.map((bullet) => (
                      <li key={bullet}>
                        <Icon
                          name={option.muted ? "remove" : "check_circle"}
                          className={option.muted ? styles.bulletMuted : styles.check}
                        />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {option.facts && (
                  <div className={styles.facts}>
                    {option.facts.map((fact) => (
                      <div key={fact.label} className={styles.fact}>
                        <span className={styles.factLabel}>{fact.label}</span>
                        <span className={styles.factValue}>{fact.value}</span>
                      </div>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
