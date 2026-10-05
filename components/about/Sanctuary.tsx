import Image from "next/image";
import Icon from "@/components/Icon";
import {
  showcase,
  type ShowcaseItem,
  metrics,
  type Metric,
} from "@/data/about";
import styles from "./Sanctuary.module.css";

export default function Sanctuary() {
  return (
    <section className={styles.root}>
      <div className={styles.stack}>
        <div className={styles.columns}>
          <div className={styles.stack2}>
            <span className={styles.label}>Sanctuary Specification</span>
            <h2 className={styles.title}>
              Surgical Sanctuary: Engineered to Hospital-Grade Benchmarks
            </h2>
          </div>
          <div className={styles.box}>
            <p className={styles.text}>
              Our Greater Kailash Part 1 surgical suites replicate tertiary-care
              medical standards with NABH-aligned protocols, ultra-sterile HEPA
              filtration, and German micro-instrumentation.
            </p>
          </div>
        </div>
        <div className={styles.columns2}>
          {showcase.map((item) => (
            <div key={item.title} className={`${styles.tile} ${styles.group}`}>
              <Image
                className={styles.image}
                src={item.image}
                alt={item.imageAlt}
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
              />
              <div className={styles.overlay}>
                <span className={styles.label2}>{item.tag}</span>
                <h4 className={styles.h4}>{item.title}</h4>
                <p className={styles.text2}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.columns3}>
          {metrics.map((item) => (
            <div key={item.title} className={styles.metric}>
              <Icon name={item.icon} className={styles.icon} />
              <div>
                <div className={styles.box2}>{item.title}</div>
                <div className={styles.box3}>{item.caption}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
