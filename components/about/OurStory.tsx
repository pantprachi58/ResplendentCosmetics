import Image from "next/image";
import Icon from "@/components/Icon";
import { storyStats, type StoryStat } from "@/data/about";
import styles from "./OurStory.module.css";

const spanClass: Record<StoryStat["span"], string> = {
  normal: styles.statNormal,
  wide: styles.statWide,
};
const toneClass: Record<StoryStat["tone"], string> = {
  primary: styles.valuePrimary,
  secondary: styles.valueSecondary,
};

export default function OurStory() {
  return (
    <section className={styles.root}>
      <div className={styles.columns}>
        <div className={styles.stack}>
          <div className={styles.card}>
            <div className={styles.card2}>
              <Image
                className={styles.image}
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSTJ5gTWMFzZv27HqAbUpkkDnbqAF_Iu46ZbbRkDtsPs_HM23XUzMh5-2MKBdMlyoeYcDLRNy5r3DBW7U88RjQZOPBCokOHarR2bZO8igf4FkAJR62zRrFrL-zk4dmqoZLAUwhlzwJF_IOcM1SLNf7RqbbRA0Eille2AjkOQG74se0oTscwKcaVfA3zAnJqbxu84o8mZGeXtblAFmUbJh_WiUu7bYl9tOUB23l0wB1sS9CAdJ1UQM0B44J_sTbQgUQhQ"
                alt="Dr. Sukhbir Singh, Senior Plastic Surgeon"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
              <div className={styles.decor}>
                <span className={styles.label}>Founder & Chief Consultant</span>
                <h3 className={styles.subtitle}>Dr. Sukhbir Singh</h3>
                <p className={styles.text}>
                  MS, MCh (Plastic Surgery) • Fellow PUCRS (Brazil)
                </p>
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.row2}>
                <div className={styles.row3}>
                  <Icon name="verified" className={styles.icon} />
                </div>
                <div>
                  <div className={styles.box}>Board Certified</div>
                  <div className={styles.box2}>ISAPS, APSI & IAAPS Fellow</div>
                </div>
              </div>
              <span className={styles.badge}>18+ Yrs Exp</span>
            </div>
          </div>
        </div>
        <div className={styles.stack2}>
          <div className={styles.row4}>
            <span className={styles.badge2} />
            <span className={styles.label2}>
              Architectural Beauty & Science
            </span>
          </div>
          <h2 className={styles.title}>
            Where International Surgical Pedigree Meets South Delhi Serenity
          </h2>
          <div className={styles.box3}>
            <p>
              Resplendent Aesthetics was founded in the enclave of Greater
              Kailash Part 1, South Delhi, with a resolute objective: to
              transcend industrial-scale aesthetic clinics and restore clinical
              plastic surgery as a dedicated, bespoke fine art.
            </p>
            <p>
              Formed through extensive international surgical training—notably
              specializing in advanced Brazilian aesthetic plastic surgery
              techniques at the esteemed{" "}
              <em>
                PUCRS (Pontifícia Universidade Católica do Rio Grande do Sul)
              </em>
              —our approach balances anatomically sound surgical integrity with
              fluid organic silhouettes.
            </p>
            <p>
              Whether performing high-definition micro-follicular hair
              transplants, structural preservation rhinoplasty, or refined
              facial rejuvenation, every protocol is engineered for patients who
              prioritize discretion, natural subtlety, and zero compromise on
              surgical safety.
            </p>
          </div>
          <div className={styles.columns2}>
            {storyStats.map((item) => (
              <div
                key={item.label}
                className={`${styles.stat} ${spanClass[item.span]}`}
              >
                <div className={`${styles.value} ${toneClass[item.tone]}`}>
                  {item.value}
                </div>
                <div className={styles.box4}>{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
