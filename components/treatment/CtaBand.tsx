import Icon from "@/components/Icon";
import CtaLink from "@/components/shared/CtaLink";
import type { CtaBandData } from "@/data/treatments/types";
import ui from "@/components/shared/ui.module.css";
import styles from "./CtaBand.module.css";

const PHONE_CTA = { label: "+91 99103 91229", href: "tel:+919910391229", iconLeading: "call" };

export default function CtaBand({ data }: { data: CtaBandData }) {
  return (
    <section className={styles.root}>
      <div className={`${ui.container} ${styles.inner}`}>
        <div className={styles.copy}>
          <span className={styles.eyebrow}>{data.eyebrow}</span>
          <h2 className={styles.title}>{data.title}</h2>
          <p className={styles.text}>{data.text}</p>
          {data.meta && (
            <div className={styles.meta}>
              {data.meta.map((item) => (
                <span key={item.label} className={styles.metaItem}>
                  <Icon name={item.icon} className={styles.metaIcon} />
                  {item.label}
                </span>
              ))}
            </div>
          )}
        </div>
        <div className={styles.actions}>
          <CtaLink cta={data.primaryCta} variant="light" />
          <CtaLink cta={PHONE_CTA} variant="green" />
        </div>
      </div>
    </section>
  );
}
