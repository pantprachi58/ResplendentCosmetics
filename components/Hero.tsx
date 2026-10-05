import Image from "next/image";
import Link from "next/link";
import Icon from "./Icon";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.root}>
      <div className={styles.overlay} />
      <div className={styles.card} />
      <div className={styles.card2} />
      <div className={styles.columns}>
        <div className={styles.stack}>
          <div className={styles.row}>
            <span className={styles.badge} />
            <span className={styles.label}>
              Greater Kailash Part 1 • South Delhi
            </span>
          </div>
          <h1 className={styles.title}>
            Sculpting Natural Elegance with{" "}
            <span className={styles.label2}>Board-Certified</span> Surgical
            Mastery.
          </h1>
          <p className={styles.text}>
            Resplendent Aesthetics is an elite surgical sanctuary dedicated to
            bespoke aesthetic rejuvenation and micro-architectural refinement,
            directed by world-renowned Senior Plastic Surgeon{" "}
            <strong className={styles.strong}>Dr. Sukhbir Singh</strong>.
          </p>
          <div className={styles.row2}>
            <Link
              className={`${styles.button} ${styles.group}`}
              href="/book-consultation"
            >
              <span>Book a Consultation</span>
              <Icon name="arrow_forward" className={styles.icon} />
            </Link>
            <a className={styles.button2} href="#procedures">
              <span>Explore Procedures</span>
              <Icon name="expand_more" className={styles.icon2} />
            </a>
          </div>
          <div className={styles.row3}>
            <div className={styles.row4}>
              <Icon name="verified" className={styles.icon3} />
              <span className={styles.label3}>NABH-Accredited OT</span>
            </div>
            <div className={styles.box} />
            <div className={styles.row4}>
              <Icon name="lock" className={styles.icon3} />
              <span className={styles.label3}>100% Confidential Protocol</span>
            </div>
            <div className={styles.box} />
            <div className={styles.row4}>
              <Icon name="flight" className={styles.icon3} />
              <span className={styles.label3}>Diplomatic & Global Desk</span>
            </div>
          </div>
        </div>
        <div className={styles.row5}>
          <div className={styles.box2}>
            <div className={styles.card3} />
            <div className={styles.card4}>
              <div className={styles.box3}>
                <Image
                  className={styles.image}
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2hWjMZoUPDDaA0WPGnAOjNjwFMsQZSg279fr4IuW_cTe9UbMF5D5q1DaBeEdM_WqSdZvOMuhUGtrksEPK2KdXRUPeICaiU6wKFQTDuy4ei4WBEVSfsj_U80eXs85T18fkJqTp0irGalARqZHGI3_MR_jCUGqnYTmgOhuywzeonMsFrqUOrwQBfhMq9fCyp6hfO714rpmpzFy01ZCQdYennHmO-BWUjL1WI4u846R17vRZK1U1yVIUesjmnlfqMq3kLq-5L2gtP42TRA"
                  alt="Ultra-luxurious, minimalist private aesthetic consultation suite in Greater Kailash Delhi with architectural lighting, warm ivory limestone walls, sleek contemporary medical lounge furniture, and subtle burgundy accents. Warm editorial atmosphere with soft dramatic lighting."
                  fill
                  sizes="(min-width: 1024px) 440px, 100vw"
                />
                <div className={styles.overlay2} />
                <div className={styles.card5}>
                  <div className={styles.row6}>
                    <div className={styles.row7}>
                      <div className={styles.row8}>
                        <Icon name="award_star" className={styles.icon4} />
                      </div>
                      <div>
                        <p className={styles.text2}>Dr. Sukhbir Singh</p>
                        <p className={styles.text3}>
                          Senior Plastic Surgeon • PUCRS Brazil
                        </p>
                      </div>
                    </div>
                    <Icon name="shield_with_heart" className={styles.icon3} />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.card6}>
              <div className={styles.row9}>
                <Icon name="neurology" className={styles.icon4} />
              </div>
              <div>
                <p className={styles.text4}>Surgical Standard</p>
                <p className={styles.text5}>Sub-Millimeter Precision</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
