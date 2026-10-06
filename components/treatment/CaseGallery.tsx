import Image from "next/image";
import Icon from "@/components/Icon";
import type { CaseGalleryData, CaseStudy } from "@/data/treatments/types";
import ui from "@/components/shared/ui.module.css";
import styles from "./CaseGallery.module.css";

function CaseMedia({ item, columns }: { item: CaseStudy; columns: 2 | 4 }) {
  const sizes = columns === 4 ? "(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw" : "(min-width: 768px) 25vw, 50vw";

  if (item.before && item.after) {
    return (
      <div className={styles.pair}>
        <div className={`${ui.media} ${styles.pairPhoto}`}>
          <Image src={item.before.src} alt={item.before.alt} fill sizes={sizes} className={ui.cover} />
          <span className={styles.beforeLabel}>Before</span>
        </div>
        <div className={`${ui.media} ${styles.pairPhoto}`}>
          <Image src={item.after.src} alt={item.after.alt} fill sizes={sizes} className={ui.cover} />
          <span className={styles.afterLabel}>{item.after.label}</span>
        </div>
      </div>
    );
  }

  if (!item.image) return null;
  return (
    <div className={`${ui.media} ${columns === 4 ? styles.photo : styles.photoWide}`}>
      <Image src={item.image.src} alt={item.image.alt} fill sizes={sizes} className={ui.cover} />
      {columns === 4 && <span className={styles.caseTag}>{item.caseId}</span>}
      {columns === 4 && item.badge && <span className={styles.badge}>{item.badge}</span>}
    </div>
  );
}

export default function CaseGallery({ data }: { data: CaseGalleryData }) {
  return (
    <section id={data.id} className={`${ui.section} ${ui.ivory}`}>
      <div className={ui.container}>
        <div className={ui.headerSplit}>
          <div>
            <span className={ui.eyebrow}>{data.eyebrow}</span>
            <h2 className={ui.title}>{data.title}</h2>
            {data.intro && <p className={ui.lead}>{data.intro}</p>}
          </div>
          <span className={styles.note}>
            <Icon name="photo_filter" className={styles.noteIcon} />
            {data.note}
          </span>
        </div>

        <div className={data.columns === 4 ? styles.grid4 : styles.grid2}>
          {data.cases.map((item) => (
            <article key={item.caseId} className={styles.card}>
              <CaseMedia item={item} columns={data.columns} />
              <div className={styles.body}>
                {(item.before || data.columns === 2) && (
                  <div className={styles.bodyHead}>
                    <span className={styles.caseId}>{item.caseId}</span>
                    {item.badge && <span className={styles.inlineBadge}>{item.badge}</span>}
                  </div>
                )}
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.text}>{item.text}</p>
              </div>
              <div className={styles.meta}>
                <span>{item.meta[0]}</span>
                <span className={styles.metaAccent}>{item.meta[1]}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
