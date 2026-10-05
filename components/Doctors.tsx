import Image from "next/image";
import Link from "next/link";
import Icon from "./Icon";
import {
  credentials,
  type Credential,
  associates,
  type Associate,
} from "@/data/doctors";
import styles from "./Doctors.module.css";

const avatarToneClass: Record<Associate["avatarTone"], string> = {
  emerald: styles.avatarEmerald,
  blue: styles.avatarBlue,
};
const roleToneClass: Record<Associate["roleTone"], string> = {
  emerald: styles.roleEmerald,
  blue: styles.roleBlue,
};

export default function Doctors() {
  return (
    <section className={styles.root}>
      <div className={styles.inner}>
        <div className={styles.card}>
          <div className={styles.columns}>
            <div className={styles.row}>
              <div className={styles.card2}>
                <div className={styles.card3}>
                  <Image
                    className={styles.image}
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4wUbaJlFhDoKQ7Al6LL74KPn2ghs0Eou9-lv9mkJ9v8SG63WQVRDRnfaGGRv_RMbs8MlhPYHSIniv5typxTlDjlnUp7mWWNif_SoZzlCmPAdRJPgwKnYIk_sQJjQi973Q91n3_xcV6Ki-XU9uFw5IOXroGtQB4ehjfvAD5XxMvzfDvIh_Y3oUZKfF8QaK2PpeFbq213BGSYcELg6LzwIGeMUd5_r5RKukgirEEOlv3MEzv5C1R0kop2ibBjUSNfW0PwaJrcGJVZZ7KA"
                    alt="Portrait of Dr. Sukhbir Singh, renowned board-certified plastic and cosmetic surgeon wearing a crisp white clinical coat with surgical embroidery and a red turban, folding hands with clinical confidence."
                    fill
                    sizes="(min-width: 1024px) 360px, 100vw"
                  />
                </div>
                <div className={styles.card4}>Senior Plastic Surgeon</div>
              </div>
            </div>
            <div className={styles.stack}>
              <div className={styles.row2}>
                <Icon name="verified_user" className={styles.icon} />
                <span className={styles.label}>Lead Surgical Director</span>
              </div>
              <h2 className={styles.title}>Dr. Sukhbir Singh</h2>
              <p className={styles.text}>
                MBBS, MS, MCh (Plastic Surgery) • Fellow Cirurgia Plástica
                (PUCRS, Brazil)
              </p>
              <p className={styles.text2}>
                Dr. Sukhbir Singh is an acclaimed Senior Consultant Plastic and
                Cosmetic Surgeon practicing in South Delhi. With specialized
                training from Brazil&apos;s globally celebrated aesthetic
                surgery hubs and over 18 years of specialized clinical
                experience, Dr. Singh has mastered the fine line between
                surgical mathematics and haute-couture facial and body harmony.
              </p>
              <div className={styles.columns2}>
                {credentials.map((item) => (
                  <div key={item.label} className={styles.credential}>
                    <span className={styles.label2}>{item.label}</span>
                    <span className={styles.label3}>{item.value}</span>
                  </div>
                ))}
              </div>
              <div className={styles.box}>
                <Link className={styles.button} href="/book-consultation">
                  <span>Book Direct Private Consultation</span>
                  <Icon name="calendar_today" className={styles.icon2} />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.columns3}>
          {associates.map((item) => (
            <div key={item.name} className={styles.associate}>
              <div
                className={`${styles.avatar} ${avatarToneClass[item.avatarTone]}`}
              >
                <Image
                  className={styles.image}
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  sizes="96px"
                />
              </div>
              <div>
                <span
                  className={`${styles.role} ${roleToneClass[item.roleTone]}`}
                >
                  {item.role}
                </span>
                <h3 className={styles.subtitle}>{item.name}</h3>
                <p className={styles.text3}>{item.credentials}</p>
                <p className={styles.text4}>{item.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
