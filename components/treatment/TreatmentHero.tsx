import Image from "next/image";
import Icon from "@/components/Icon";
import CtaLink from "@/components/shared/CtaLink";
import type { TreatmentHeroData } from "@/data/treatments/types";
import ui from "@/components/shared/ui.module.css";
import styles from "./TreatmentHero.module.css";

export default function TreatmentHero({ data }: { data: TreatmentHeroData }) {
  const { surgeon, image, card } = data;

  return (
    <section className={`${ui.ivory} ${styles.root}`}>
      <div className={`${ui.container} ${styles.grid}`}>
        <div className={styles.copy}>
          <span className={ui.statusPill}>
            <span className={ui.pulse} />
            {data.eyebrow}
          </span>
          <h1 className={styles.title}>
            {data.title}
            {data.highlight && <span className={ui.highlight}>{data.highlight}</span>}
            {data.titleSuffix}
          </h1>
          <p className={styles.lead}>{data.lead}</p>

          {data.stats && (
            <div className={styles.stats}>
              {data.stats.map((stat) => (
                <div key={stat.label} className={styles.stat}>
                  {stat.icon && <Icon name={stat.icon} className={styles.statIcon} />}
                  <span className={styles.statValue}>{stat.value}</span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </div>
              ))}
            </div>
          )}

          {data.pills && (
            <div className={styles.pills}>
              {data.pills.map((pill) => (
                <span key={pill.label} className={styles.pill}>
                  <Icon name={pill.icon} className={styles.pillIcon} />
                  {pill.label}
                </span>
              ))}
            </div>
          )}

          <div className={styles.actions}>
            <CtaLink cta={data.primaryCta} />
            {data.secondaryCta && <CtaLink cta={data.secondaryCta} variant="secondary" />}
          </div>

          {surgeon && (
            <div className={styles.surgeon}>
              <div className={styles.surgeonId}>
                {surgeon.image ? (
                  <div className={`${ui.media} ${styles.avatar}`}>
                    <Image src={surgeon.image} alt={surgeon.name} fill sizes="56px" className={ui.cover} />
                  </div>
                ) : (
                  <div className={styles.avatarInitials}>
                    {surgeon.initials ?? <Icon name="verified_user" />}
                  </div>
                )}
                <div>
                  <p className={styles.surgeonName}>
                    {surgeon.name}
                    <Icon name="verified" filled className={styles.verified} />
                  </p>
                  {surgeon.role && <p className={styles.surgeonRole}>{surgeon.role}</p>}
                  <p className={styles.surgeonCreds}>{surgeon.credentials}</p>
                </div>
              </div>
              {surgeon.badges && (
                <div className={styles.badges}>
                  {surgeon.badges.map((badge) => (
                    <span key={badge} className={styles.badge}>
                      {badge}
                    </span>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        <div className={styles.aside}>
          {image && (
            <div className={styles.visual}>
              <div className={`${ui.media} ${styles.photo}`}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className={ui.cover}
                />
                <div className={styles.scrim} />
                {image.tag && <span className={styles.tag}>{image.tag}</span>}
                {image.captionTitle && (
                  <div className={styles.caption}>
                    <p className={styles.captionTitle}>{image.captionTitle}</p>
                    {image.captionText && <p className={styles.captionText}>{image.captionText}</p>}
                  </div>
                )}
              </div>
              {image.inset && (
                <div className={styles.inset}>
                  <div className={`${ui.media} ${styles.insetPhoto}`}>
                    <Image src={image.inset.src} alt={image.inset.alt} fill sizes="200px" className={ui.cover} />
                  </div>
                  <p className={styles.insetTitle}>{image.inset.title}</p>
                  <p className={styles.insetText}>{image.inset.text}</p>
                </div>
              )}
            </div>
          )}

          {card && (
            <div className={styles.card}>
              <div className={styles.cardHead}>
                <div>
                  <span className={styles.cardEyebrow}>{card.eyebrow}</span>
                  <p className={styles.cardTitle}>{card.title}</p>
                </div>
                <Icon name={card.icon} className={styles.cardIcon} />
              </div>
              <ul className={styles.checklist}>
                {card.checklist.map((item) => (
                  <li key={item}>
                    <Icon name="check_circle" className={styles.check} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className={styles.cardFoot}>
                <div>
                  <span className={styles.cardEyebrow}>{card.footLabel}</span>
                  <p className={styles.cardFootValue}>{card.footValue}</p>
                </div>
                <Icon name="location_on" className={styles.cardIcon} />
              </div>
            </div>
          )}

          {surgeon?.note && <p className={styles.note}>{surgeon.note}</p>}
        </div>
      </div>
    </section>
  );
}
