import Link from "next/link";
import Icon from "./Icon";
import { quickLinks, type FooterLink, treatmentLinks } from "@/data/footer";
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
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfhJ8JNzkS-mPLBvz5QO6jjA9YrW7iSpusXt6o1Lqt5REfRSoOtVW8JVF-i1z9YSgKQq9q2LIjxomiDnvtn-wTjf8n_4doGsi6Tnph6OgEIv4ClosLlVU6eKNIVZznZr3tY5wqK_gacZrOBAimIUgxDczZBipDuXM961aqKm2_X6gIFtfZI1nwaVGFOQJfLzl860vRg-2JiH5JMhi80gNpT4P6m42wRn7YSQAR-uvAnyS1jlBL3RK8yIIbNSJAygVICg"
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
              <a className={styles.button} href="#">
                <Icon name="photo_camera" className={styles.icon} />
              </a>
              <a className={styles.button} href="#">
                <Icon name="share" className={styles.icon} />
              </a>
              <a className={styles.button} href="#">
                <Icon name="play_circle" className={styles.icon} />
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
          <p>© 2025 Resplendent Aesthetics. All Rights Reserved.</p>
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
