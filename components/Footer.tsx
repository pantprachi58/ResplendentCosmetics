import Link from "next/link";
import Image from "next/image";
import Icon from "./Icon";
import { quickLinks, treatmentLinks } from "@/data/footer";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.root}>
      <div className={styles.inner}>
        <div className={styles.columns}>
          <div className={styles.stack}>
            <div className={styles.row}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className={styles.image}
                src="/images/footer-logo.png"
                alt="Resplendent Aesthetics"
              />
            </div>
            <p className={styles.text}>
              An ultra-luxurious, medical-grade sanctuary in Greater Kailash,
              South Delhi. We deliver bespoke surgical precision, natural
              harmony, and confidential aesthetic transformations led by
              board-certified plastic surgeons.
            </p>
            <div className={styles.row2}>
              <a
                className={styles.button}
                href="https://www.instagram.com/resplendent__aesthetics"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
              >
                <Image
                  src="/icons/instagram.svg"
                  alt="Instagram"
                  width={24}
                  height={24}
                  className={styles.icon}
                />
              </a>
              <a
                className={styles.button}
                href="https://www.facebook.com/sukhbir.singh.3557"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Facebook"
              >
                <Image
                  src="/icons/facebook.svg"
                  alt="Facebook"
                  width={24}
                  height={24}
                  className={styles.icon}
                />
              </a>
              <a
                className={styles.button}
                href="https://www.youtube.com/@resplendentaesthetics"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Subscribe to our YouTube channel"
              >
                <Image
                  src="/icons/youtube.svg"
                  alt="YouTube"
                  width={24}
                  height={24}
                  className={styles.icon}
                />
              </a>
            </div>
          </div>
          <div className={styles.stack2}>
            <h3 className={styles.subtitle}>Quick Links</h3>
            <ul className={styles.list}>
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <Link className={styles.link} href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.stack2}>
            <h3 className={styles.subtitle}>Key Treatments</h3>
            <ul className={styles.list}>
              {treatmentLinks.map((item) => (
                <li key={item.href}>
                  <Link className={styles.link} href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.stack2}>
            <h3 className={styles.subtitle}>Studio Concierge</h3>
            <div className={styles.stack3}>
              <div className={styles.row3}>
                <Icon name="location_on" className={styles.icon2} />
                <span>
                  R-9, Basement, Greater Kailash Part 1, New Delhi - 110048
                </span>
              </div>
              <div className={styles.row4}>
                <Icon name="call" className={styles.icon3} />
                <span>+91 99103 91229</span>
              </div>
              <div className={styles.row4}>
                <Icon name="mail" className={styles.icon3} />
                <span>info@resplendentaesthetics.com</span>
              </div>
              <div className={styles.row4}>
                <Icon name="schedule" className={styles.icon3} />
                <span>Mon - Sat: 9:00 AM - 7:00 PM</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.stack4}>
          <p>© 2026 Resplendent Aesthetics. All Rights Reserved. Crafted with ❤️ by VD Infotech.</p>
          <p className={styles.text2}>
            Disclaimer: Medical and surgical outcomes vary by individual
            anatomy. Content on this portal is for informative consultation
            guidance and does not replace dedicated clinical evaluation.
          </p>
        </div>
      </div>
    </footer>
  );
}
