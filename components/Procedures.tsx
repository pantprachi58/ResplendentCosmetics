"use client";

import { useState } from "react";
import Image from "next/image";
import Icon from "./Icon";
import { procedures, type Procedure } from "@/data/procedures";
import styles from "./Procedures.module.css";

const cardToneClass: Record<Procedure["cardTone"], string> = {
  blue: styles.cardBlue,
  emerald: styles.cardEmerald,
};
const badgeToneClass: Record<Procedure["badgeTone"], string> = {
  navy: styles.tagNavy,
  blue: styles.tagBlue,
  slate: styles.tagSlate,
  mint: styles.tagMint,
  solid: styles.tagSolid,
};

type FilterType = "all" | "surgical" | "dermatology";

export default function Procedures() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");

  const filteredProcedures = procedures.filter((item) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "surgical") return item.cardTone === "blue";
    if (activeFilter === "dermatology") return item.cardTone === "emerald";
    return true;
  });

  return (
    <section className={styles.root} id="procedures">
      <div className={styles.stack}>
        <div className={styles.box}>
          <span className={styles.label}>Curated Clinical Portfolio</span>
          <h2 className={styles.title}>Surgical & Non-Surgical Procedures</h2>
          <p className={styles.text}>
            Bespoke treatments tailored to your unique anatomy, performed inside
            state-of-the-art sterile theatres by credentialed specialists.
          </p>
        </div>
        <div className={styles.row}>
          <span className={styles.label2}>Classification:</span>
          <button
            className={activeFilter === "all" ? styles.badge : styles.badge2}
            onClick={() => setActiveFilter("all")}
          >
            All Disciplines
          </button>
          <button
            className={
              activeFilter === "surgical" ? styles.badge : styles.badge2
            }
            onClick={() => setActiveFilter("surgical")}
          >
            Surgical
          </button>
          <button
            className={
              activeFilter === "dermatology" ? styles.badge : styles.badge2
            }
            onClick={() => setActiveFilter("dermatology")}
          >
            Dermatology
          </button>
        </div>
      </div>
      <div className={styles.columns}>
        {filteredProcedures.map((item) => (
          <div
            key={item.title}
            className={`${styles.card} ${styles.group} ${cardToneClass[item.cardTone]}`}
          >
            <div className={styles.box2}>
              <Image
                className={styles.image}
                src={item.image}
                alt={item.imageAlt}
                fill
                sizes="(min-width: 1280px) 20vw, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
              />
              <span
                className={`${styles.tag} ${badgeToneClass[item.badgeTone]}`}
              >
                {item.badge}
              </span>
            </div>
            <div className={styles.stack2}>
              <div>
                <h3 className={styles.subtitle}>{item.title}</h3>
                <p className={styles.text2}>{item.description}</p>
              </div>
              <div className={styles.row2}>
                <span className={styles.label3}>Learn More</span>
                <Icon name="arrow_forward" className={styles.icon} />
              </div>
            </div>
            <div className={styles.box3} />
          </div>
        ))}
      </div>
    </section>
  );
}
