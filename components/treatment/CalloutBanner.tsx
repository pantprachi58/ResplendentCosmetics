import Icon from "@/components/Icon";
import CtaLink from "@/components/shared/CtaLink";
import type { CalloutData } from "@/data/treatments/types";
import ui from "@/components/shared/ui.module.css";
import styles from "./CalloutBanner.module.css";

export default function CalloutBanner({ data }: { data: CalloutData }) {
  const { aside } = data;

  return (
    <section id={data.id} className={`${ui.section} ${ui.white}`}>
      <div className={ui.container}>
        <div className={`${styles.panel} ${aside ? styles.withAside : ""}`}>
          <div className={styles.main}>
            <div className={styles.headRow}>
              <span className={styles.iconWrap}>
                <Icon name={data.icon} className={styles.icon} />
              </span>
              <div className={styles.headCopy}>
                {data.eyebrow && <span className={ui.eyebrow}>{data.eyebrow}</span>}
                <h2 className={styles.title}>{data.title}</h2>
                <p className={styles.text}>{data.text}</p>
              </div>
            </div>

            {data.tags && (
              <div className={styles.tags}>
                {data.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>
                    <Icon name="check_circle" className={styles.tagIcon} />
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {data.highlights && (
              <div className={styles.highlights}>
                {data.highlights.map((item) => (
                  <div key={item.title} className={styles.highlight}>
                    <Icon name={item.icon} className={styles.tagIcon} />
                    <span className={styles.highlightTitle}>{item.title}</span>
                    <p className={styles.highlightText}>{item.text}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {(data.location || data.cta) && !aside && (
            <div className={styles.actions}>
              {data.location && (
                <div className={styles.location}>
                  <span className={styles.locationTitle}>{data.location.title}</span>
                  <span className={styles.locationText}>{data.location.text}</span>
                </div>
              )}
              {data.cta && <CtaLink cta={data.cta} />}
            </div>
          )}

          {aside && (
            <div className={styles.aside}>
              <div className={styles.asideHead}>
                <span className={styles.asideIcon}>
                  <Icon name={aside.icon} />
                </span>
                <div>
                  <p className={styles.asideTitle}>{aside.title}</p>
                  {aside.subtitle && <span className={styles.asideSubtitle}>{aside.subtitle}</span>}
                </div>
              </div>
              {aside.text && <p className={styles.asideText}>{aside.text}</p>}
              {aside.items && (
                <ul className={styles.asideList}>
                  {aside.items.map((item) => (
                    <li key={item}>
                      <Icon name="check" className={styles.tagIcon} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
              {aside.cta && <CtaLink cta={aside.cta} variant="light" block />}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
