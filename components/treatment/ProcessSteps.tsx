import Icon from "@/components/Icon";
import type { ProcessData } from "@/data/treatments/types";
import ui from "@/components/shared/ui.module.css";
import styles from "./ProcessSteps.module.css";

export default function ProcessSteps({ data }: { data: ProcessData }) {
  return (
    <section className={`${ui.section} ${ui.ivory}`}>
      <div className={ui.container}>
        <div className={ui.headerSplit}>
          <div>
            <span className={ui.eyebrow}>{data.eyebrow}</span>
            <h2 className={ui.title}>{data.title}</h2>
          </div>
          {data.intro && <p>{data.intro}</p>}
        </div>

        <ol className={styles.grid}>
          {data.steps.map((step, index) => (
            <li key={step.title} className={styles.card}>
              <div>
                <div className={styles.head}>
                  <span className={styles.number}>{String(index + 1).padStart(2, "0")}</span>
                  <span className={styles.iconWrap}>
                    <Icon name={step.icon} className={styles.icon} />
                  </span>
                </div>
                <h3 className={styles.title}>{step.title}</h3>
                <p className={styles.text}>{step.text}</p>
              </div>
              <div className={styles.foot}>
                {step.footLabel && <span className={styles.footLabel}>{step.footLabel}</span>}
                <span className={styles.footValue}>{step.footValue}</span>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
