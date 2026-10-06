import type { ReactNode } from "react";
import Icon from "@/components/Icon";
import CtaLink from "@/components/shared/CtaLink";
import type { FeatureBandData, Metric } from "@/data/treatments/types";
import ui from "@/components/shared/ui.module.css";
import styles from "./FeatureBand.module.css";

type FeatureBandProps = {
  data: FeatureBandData;
  id?: string;
  /** Optional diagram for the right column; metrics then move under the copy */
  visual?: ReactNode;
};

function MetricGrid({ metrics, compact }: { metrics: Metric[]; compact?: boolean }) {
  return (
    <div className={compact ? styles.metricsCompact : styles.metrics}>
      {metrics.map((metric) => (
        <div key={metric.label} className={styles.metric}>
          {metric.icon && <Icon name={metric.icon} className={styles.metricIcon} />}
          <span className={styles.metricValue}>{metric.value}</span>
          <span className={styles.metricLabel}>{metric.label}</span>
          {metric.text && <p className={styles.metricText}>{metric.text}</p>}
        </div>
      ))}
    </div>
  );
}

export default function FeatureBand({ data, id, visual }: FeatureBandProps) {
  const aside = visual ?? data.panel;
  const metricsInCopy = Boolean(aside) && data.metrics;

  return (
    <section id={id} className={`${ui.section} ${ui.dark} ${styles.root}`}>
      <div className={`${ui.container} ${styles.grid}`}>
        <div className={styles.copy}>
          <span className={ui.eyebrow}>{data.eyebrow}</span>
          <h2 className={styles.title}>{data.title}</h2>
          {data.paragraphs.map((paragraph) => (
            <p key={paragraph} className={styles.paragraph}>
              {paragraph}
            </p>
          ))}
          {data.checklist && (
            <ul className={styles.checklist}>
              {data.checklist.map((item) => (
                <li key={item}>
                  <span className={styles.checkBadge}>
                    <Icon name="check" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}
          {metricsInCopy && data.metrics && <MetricGrid metrics={data.metrics} compact />}
          {data.note && (
            <p className={styles.note}>
              <Icon name="verified" className={styles.noteIcon} />
              <span>{data.note}</span>
            </p>
          )}
          {data.cta && (
            <div>
              <CtaLink cta={data.cta} />
            </div>
          )}
        </div>

        <div className={styles.aside}>
          {visual}
          {!visual && data.panel && (
            <div className={styles.panel}>
              <div className={styles.panelHead}>
                <span className={styles.panelTitle}>{data.panel.title}</span>
                <Icon name={data.panel.icon} className={styles.metricIcon} />
              </div>
              <p className={styles.paragraph}>{data.panel.text}</p>
              <div className={styles.panelItems}>
                {data.panel.items.map((item) => (
                  <div key={item.title} className={styles.panelItem}>
                    <Icon name="check_circle" className={styles.metricIcon} />
                    <div>
                      <span className={styles.panelItemTitle}>{item.title}</span>
                      <p className={styles.panelItemText}>{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {!aside && data.metrics && <MetricGrid metrics={data.metrics} />}
        </div>
      </div>
    </section>
  );
}
