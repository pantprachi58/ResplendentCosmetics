import styles from "./page.module.css";
import Icon from "@/components/Icon";
import AppointmentCta from "@/components/AppointmentCta";

export const metadata = {
  title: "About Us - Resplendent Aesthetics | World-Class Plastic Surgery",
  description:
    "Learn about Resplendent Aesthetics, founded by Dr. Sukhbir Singh. International surgical expertise, 15,000+ transformations, and bespoke aesthetic care in Greater Kailash, New Delhi.",
};

export default function AboutPage() {
  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.heroTitle}>ABOUT RESPLENDENT AESTHETICS</h1>
          <p className={styles.heroSubtitle}>
            A Philosophy Built on Precision, Discretion and Care
          </p>
          <p className={styles.heroDescription}>
            Founded by senior plastic surgeons to bring world-class aesthetic
            and reconstructive craftsmanship to Greater Kailash, New Delhi.
          </p>
        </div>
      </section>

      {/* Founder Section */}
      <section className={styles.founder}>
        <div className={styles.container}>
          <div className={styles.founderCard}>
            <div className={styles.founderInfo}>
              <p className={styles.founderLabel}>Founder & Chief Consultant</p>
              <h2 className={styles.founderName}>Dr. Sukhbir Singh</h2>
              <p className={styles.founderCredentials}>
                MS, MCh (Plastic Surgery) • Fellow PUCRS (Brazil)
              </p>
            </div>
            <div className={styles.founderBadges}>
              <div className={styles.badge}>
                <Icon name="verified" />
                <div>
                  <p className={styles.badgeTitle}>Board Certified</p>
                  <p className={styles.badgeText}>ISAPS, APSI & IAAPS Fellow</p>
                </div>
              </div>
              <div className={styles.badge}>
                <p className={styles.badgeHighlight}>18+ Yrs Exp</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className={styles.story}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>
            Architectural Beauty & Science
          </h2>
          <p className={styles.sectionSubtitle}>
            Where International Surgical Pedigree Meets South Delhi Serenity
          </p>

          <div className={styles.storyContent}>
            <p>
              Resplendent Aesthetics was founded in the enclave of Greater
              Kailash Part 1, South Delhi, with a resolute objective: to
              transcend industrial-scale aesthetic clinics and restore clinical
              plastic surgery as a dedicated, bespoke fine art.
            </p>
            <p>
              Formed through extensive international surgical training—notably
              specializing in advanced Brazilian aesthetic plastic surgery
              techniques at the esteemed PUCRS (Pontifícia Universidade Católica
              do Rio Grande do Sul)—our approach balances anatomically sound
              surgical integrity with fluid organic silhouettes.
            </p>
            <p>
              Whether performing high-definition micro-follicular hair
              transplants, structural preservation rhinoplasty, or refined facial
              rejuvenation, every protocol is engineered for patients who
              prioritize discretion, natural subtlety, and zero compromise on
              surgical safety.
            </p>
          </div>

          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <p className={styles.statNumber}>15,000+</p>
              <p className={styles.statLabel}>Transformations Performed</p>
            </div>
            <div className={styles.statCard}>
              <p className={styles.statNumber}>45+</p>
              <p className={styles.statLabel}>Countries Represented</p>
            </div>
            <div className={styles.statCard}>
              <p className={styles.statNumber}>100%</p>
              <p className={styles.statLabel}>Surgeon-Led Care</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className={styles.pillars}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Guiding Tenets</h2>
          <p className={styles.sectionSubtitle}>
            The Pillars of Resplendent Aesthetics
          </p>

          <div className={styles.pillarsGrid}>
            <div className={styles.pillarCard}>
              <Icon name="straighten" className={styles.pillarIcon} />
              <h3 className={styles.pillarTitle}>1. Precision</h3>
              <p className={styles.pillarText}>
                Millimeter-level surgical accuracy in every contour, ensuring
                symmetrical balance and biological harmony tailored to facial
                vectors.
              </p>
            </div>

            <div className={styles.pillarCard}>
              <Icon name="lock" className={styles.pillarIcon} />
              <h3 className={styles.pillarTitle}>2. Privacy</h3>
              <p className={styles.pillarText}>
                Discrete private lounge access, separate recovery portals, and
                VIP confidential protocols protecting personal dignity and peace
                of mind.
              </p>
            </div>

            <div className={styles.pillarCard}>
              <Icon name="fingerprint" className={styles.pillarIcon} />
              <h3 className={styles.pillarTitle}>3. Personalization</h3>
              <p className={styles.pillarText}>
                No cookie-cutter outcomes. Every surgical strategy begins with
                unique musculoskeletal scans and anatomy-first customized
                planning.
              </p>
            </div>

            <div className={styles.pillarCard}>
              <Icon name="health_and_safety" className={styles.pillarIcon} />
              <h3 className={styles.pillarTitle}>4. Patient Safety</h3>
              <p className={styles.pillarText}>
                Hospital-grade sterile operation suites, HEPA class laminar air,
                and uncompromised post-operative continuous vital tracking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Facility Section */}
      <section className={styles.facility}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Sanctuary Specification</h2>
          <p className={styles.sectionSubtitle}>
            Surgical Sanctuary: Engineered to Hospital-Grade Benchmarks
          </p>
          <p className={styles.facilityIntro}>
            Our Greater Kailash Part 1 surgical suites replicate tertiary-care
            medical standards with NABH-aligned protocols, ultra-sterile HEPA
            filtration, and German micro-instrumentation.
          </p>

          <div className={styles.facilityGrid}>
            <div className={styles.facilityCard}>
              <h3 className={styles.facilityTitle}>Sterile Field</h3>
              <p className={styles.facilitySubtitle}>
                Laminar Airflow & HEPA 14
              </p>
              <p className={styles.facilityText}>
                Zero-pathogen micro-climate ensuring zero post-surgical infection
                rates.
              </p>
            </div>

            <div className={styles.facilityCard}>
              <h3 className={styles.facilityTitle}>Instrumentation</h3>
              <p className={styles.facilitySubtitle}>
                German Precision Optics
              </p>
              <p className={styles.facilityText}>
                Ultra-refined micro-instruments for minimal tissue trauma and
                rapid recovery.
              </p>
            </div>

            <div className={styles.facilityCard}>
              <h3 className={styles.facilityTitle}>VIP Recovery</h3>
              <p className={styles.facilitySubtitle}>Acoustic Private Suites</p>
              <p className={styles.facilityText}>
                A hotel-grade recovery sanctuary paired with continuous nursing
                vigilance.
              </p>
            </div>
          </div>

          <div className={styles.certifications}>
            <div className={styles.certItem}>
              <Icon name="verified_user" />
              <div>
                <p className={styles.certTitle}>NABH Aligned</p>
                <p className={styles.certText}>Protocol Compliance</p>
              </div>
            </div>
            <div className={styles.certItem}>
              <Icon name="air" />
              <div>
                <p className={styles.certTitle}>Class 10,000 OT</p>
                <p className={styles.certText}>Positive Pressure Airflow</p>
              </div>
            </div>
            <div className={styles.certItem}>
              <Icon name="monitoring" />
              <div>
                <p className={styles.certTitle}>Critical Care</p>
                <p className={styles.certText}>24/7 Anesthesia Monitoring</p>
              </div>
            </div>
            <div className={styles.certItem}>
              <Icon name="local_hospital" />
              <div>
                <p className={styles.certTitle}>Autoclave Sterility</p>
                <p className={styles.certText}>Class-B Vacuum Tech</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className={styles.timeline}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Our Evolution</h2>
          <p className={styles.sectionSubtitle}>Milestones of Excellence</p>

          <div className={styles.timelineList}>
            <div className={styles.timelineItem}>
              <div className={styles.timelineYear}>2008</div>
              <div className={styles.timelineContent}>
                <h3 className={styles.timelineTitle}>
                  International Fellowships
                </h3>
                <p className={styles.timelineText}>
                  Dr. Sukhbir Singh completes rigorous training and aesthetic
                  surgical residency at PUCRS Brazil, absorbing refined Rio de
                  Janeiro contouring mastery.
                </p>
              </div>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.timelineYear}>2014</div>
              <div className={styles.timelineContent}>
                <h3 className={styles.timelineTitle}>GK-1 Sanctuary Launch</h3>
                <p className={styles.timelineText}>
                  Inauguration of Resplendent Aesthetics in Greater Kailash Part
                  1, South Delhi, creating an exclusive sanctuary for bespoke
                  plastic surgery.
                </p>
              </div>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.timelineYear}>2018</div>
              <div className={styles.timelineContent}>
                <h3 className={styles.timelineTitle}>Micro-FUE Innovation</h3>
                <p className={styles.timelineText}>
                  Introduction of specialized motorized Micro-FUE & sapphire slit
                  graft implanters for natural, dense hairline transformations.
                </p>
              </div>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.timelineYear}>2021</div>
              <div className={styles.timelineContent}>
                <h3 className={styles.timelineTitle}>HD Sculpting & RF</h3>
                <p className={styles.timelineText}>
                  Deployment of 4D high-definition ultrasonic liposuction, RF
                  subdermal skin tightening, and advanced nonsurgical lasers.
                </p>
              </div>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.timelineYear}>
                <Icon name="public" />
                Present
              </div>
              <div className={styles.timelineContent}>
                <h3 className={styles.timelineTitle}>Global Trust</h3>
                <p className={styles.timelineText}>
                  Over 15,000 delighted transformations across 45 countries with
                  an active International Patient Concierge Desk in South Delhi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <AppointmentCta />
    </main>
  );
}
