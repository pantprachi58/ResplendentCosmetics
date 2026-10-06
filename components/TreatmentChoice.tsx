import styles from './TreatmentChoice.module.css';

export default function TreatmentChoice() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.label}>A useful first distinction</p>
          <h2 className={styles.title}>
            Surgical or non-surgical?
          </h2>
        </div>

        <p className={styles.description}>
          The right choice depends on the tissue involved, the degree of change you want, your health and the recovery you can accommodate. A consultation should make that trade-off clear.
        </p>

        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <span className={styles.cardLabel}>Surgical Procedures</span>
              <h3 className={styles.cardTitle}>When structural change is needed</h3>
            </div>
            
            <p className={styles.cardDescription}>
              Surgery may be considered when the concern involves bone, cartilage, gland, muscle, significant skin laxity or fat that needs direct removal.
            </p>

            <ul className={styles.list}>
              <li>Usually creates a larger or more durable change</li>
              <li>Requires medical screening and a defined recovery period</li>
              <li>Includes scars and procedure-specific risks</li>
            </ul>
          </div>

          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <span className={styles.cardLabel}>Non-surgical Treatments</span>
              <h3 className={styles.cardTitle}>When a smaller change may be enough</h3>
            </div>
            
            <p className={styles.cardDescription}>
              Injectables, threads, lasers and energy-based treatments can suit selected concerns where surgery is not needed or not desired.
            </p>

            <ul className={styles.list}>
              <li>Often involves less downtime</li>
              <li>Results may be gradual, temporary or session-based</li>
              <li>Still requires qualified assessment and informed consent</li>
            </ul>
          </div>
        </div>

        <div className={styles.cta}>
          <div className={styles.ctaContent}>
            <div>
              <h3 className={styles.ctaTitle}>Not sure which category you fall into?</h3>
              <p className={styles.ctaDescription}>Describe the concern, not the treatment you think you need.</p>
            </div>
            <button className={styles.ctaButton}>Ask for an assessment</button>
          </div>
        </div>
      </div>
    </section>
  );
}
