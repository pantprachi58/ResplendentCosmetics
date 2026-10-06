"use client";

import { useId, useState } from "react";
import Icon from "@/components/Icon";
import type { FaqData } from "@/data/treatments/types";
import ui from "@/components/shared/ui.module.css";
import styles from "./FaqAccordion.module.css";

type FaqAccordionProps = {
  data: FaqData;
  id?: string;
  tone?: "white" | "ivory";
};

export default function FaqAccordion({ data, id, tone = "white" }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  // Unique per instance so pages with more than one FAQ section keep valid aria-controls ids.
  const idPrefix = useId();

  return (
    <section id={id} className={`${ui.section} ${ui[tone]}`}>
      <div className={`${ui.container} ${styles.inner}`}>
        <div className={ui.headerCenter}>
          <span className={ui.eyebrow}>{data.eyebrow}</span>
          <h2 className={ui.title}>{data.title}</h2>
          {data.intro && <p className={ui.lead}>{data.intro}</p>}
        </div>

        <div className={styles.list}>
          {data.items.map((item, index) => {
            const open = openIndex === index;
            const panelId = `${idPrefix}-panel-${index}`;
            return (
              <div key={item.question} className={`${styles.item} ${open ? styles.itemOpen : ""}`}>
                <button
                  type="button"
                  className={styles.question}
                  aria-expanded={open}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(open ? null : index)}
                >
                  <span>{item.question}</span>
                  <Icon name="expand_more" className={`${styles.chevron} ${open ? styles.chevronOpen : ""}`} />
                </button>
                <div id={panelId} className={styles.answer} hidden={!open}>
                  {item.answer}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
