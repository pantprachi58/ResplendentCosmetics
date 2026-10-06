import Icon from "../Icon";
import styles from "./ContactHero.module.css";

export default function ContactHero() {
  return (
    <section className={styles.root}>
      <div className={styles.container}>
        <nav className={styles.breadcrumb}>
          <span>Home</span>
          <span className={styles.separator}>/</span>
          <span className={styles.current}>Contact Us</span>
        </nav>
        
        <div className={styles.content}>
          <h1 className={styles.title}>
            Get In Touch With Our Sanctuary
          </h1>
          
          <h2 className={styles.subtitle}>
            Let's Start the Conversation
          </h2>
          
          <p className={styles.description}>
            Schedule a confidential surgical assessment, request international patient guidance, 
            or connect directly with our South Delhi clinical concierge.
          </p>
        </div>
      </div>
    </section>
  );
}
