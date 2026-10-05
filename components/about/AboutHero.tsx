import styles from "./AboutHero.module.css";

export default function AboutHero() {
  return (
    <section className={styles.root}>
      <div className={styles.stack}>
        <div className={styles.row}>
          <span className={styles.badge} />
          <span className={styles.label}>ABOUT RESPLENDENT AESTHETICS</span>
        </div>
        <h1 className={styles.title}>
          A Philosophy Built on Precision, Discretion and Care
        </h1>
        <div className={styles.card} />
        <p className={styles.text}>
          Founded by senior plastic surgeons to bring world-class aesthetic and
          reconstructive craftsmanship to Greater Kailash, New Delhi.
        </p>
      </div>
    </section>
  );
}
