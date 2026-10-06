import Image from "next/image";
import Icon from "./Icon";
import { features, type Feature } from "@/data/facility";
import styles from "./Facility.module.css";

const toneClass: Record<Feature["tone"], string> = {
  blue: styles.iconBoxBlue,
  emerald: styles.iconBoxEmerald,
};

export default function Facility() {
  return (
    <section className={styles.root}>
      <div className={styles.overlay} />
      <div className={styles.inner}>
        <div className={styles.box}>
          <span className={styles.label}>Medical-Grade Excellence</span>
          <h2 className={styles.title}>
            Accredited Private Surgical sanctuary
          </h2>
          <p className={styles.text}>
            Engineered for unparalleled clinical safety, complete patient
            confidentiality, and tranquil healing in the prestigious enclave of
            Greater Kailash Part 1.
          </p>
        </div>
        <div className={styles.columns}>
          <div className={styles.columns2}>
            {features.map((item) => (
              <div key={item.title} className={styles.feature}>
                <div className={`${styles.iconBox} ${toneClass[item.tone]}`}>
                  <Icon name={item.icon} className={styles.icon} />
                </div>
                <h3 className={styles.subtitle}>{item.title}</h3>
                <p className={styles.text2}>{item.description}</p>
              </div>
            ))}
          </div>
          <div className={styles.box2}>
            <div className={styles.card}>
              <Image
                className={styles.image}
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCR3xuLwTPO5XUREyz0Oura5QYUKjbIwxN3NWwodAISP_5muRCXaLwZ1neR5OclH4Lor04LwD34Dohg_6DretayAfbMCqADT2srC0XvHQkQOO_YsJGpWoI6h_Ox0UMsiwWGNCrMwF2ZlvrjZcbYLJraLGC9ohSML5EYERFLJg9v8544u4ptKbCZyBhn52JUBxQSU1L6mMvH1xrEzYTNotmBarOzpRpLYPabzMS97H3NGcnpJFDFv2Fc"
                alt="Architectural photograph of a world-class sterile hospital operating room combined with five-star luxury medical aesthetics, featuring stainless steel surgical towers, high-intensity shadowless surgical LED lamps, and warm wood wall panels."
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
              <div className={styles.overlay2} />
              <div className={styles.decor}>
                <div className={styles.card2}>
                  <p className={styles.text3}>Sterility Protocol #NABH-2025</p>
                  <p className={styles.text4}>
                    Multi-stage autoclaving and European ISO-Class 5 particulate
                    isolation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
