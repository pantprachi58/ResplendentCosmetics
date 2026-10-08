import Icon from "@/components/Icon";
import CtaLink from "@/components/shared/CtaLink";
import CompareSlider from "@/components/shared/CompareSlider";
import type { BeforeAfterData } from "@/data/treatments/types";
import ui from "@/components/shared/ui.module.css";
import styles from "./BeforeAfter.module.css";

export default function BeforeAfter({ data }: { data: BeforeAfterData }) {
  return (
    <section id="before-after-compare" className={`${ui.section} ${styles.root}`}>
      <div className={ui.container}>
        <div className={styles.card}>
          <CompareSlider
            before={data.before}
            after={data.after}
            subject={data.title.replace(/ before & after$/i, "")}
            sizes="(min-width: 1024px) 55vw, 100vw"
            focus={data.focus}
            sample={data.sample}
            className={styles.frame}
          />

          <div className={styles.info}>
            <span className={styles.eyebrow}>{data.eyebrow}</span>
            <h2 className={styles.title}>{data.title}</h2>
            <p className={styles.text}>{data.text}</p>
            <ul className={styles.points}>
              {data.points.map((point) => (
                <li key={point}>
                  <Icon name="check_circle" filled className={styles.check} />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <div className={styles.actions}>
              <CtaLink cta={data.cta} />
            </div>
            <p className={styles.note}>
              <Icon name="info" />
              {data.sample
                ? "Sample image for illustration. Clinic patient results will be added here."
                : "Results vary from person to person; this pair is not a prediction of your outcome."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
