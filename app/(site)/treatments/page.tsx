"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Icon from "@/components/Icon";
import { procedures, type Procedure } from "@/data/procedures";
import styles from "./page.module.css";

const badgeToneClass: Record<Procedure["badgeTone"], string> = {
  navy: styles.badgeNavy,
  blue: styles.badgeBlue,
  slate: styles.badgeSlate,
  mint: styles.badgeMint,
  solid: styles.badgeSolid,
};

type FilterType = "all" | "surgical" | "non-surgical" | "face" | "body" | "skin";

export default function TreatmentsPage() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");

  const filterProcedures = (filter: FilterType): Procedure[] => {
    if (filter === "all") return procedures;

    const filterMap: Record<FilterType, string[]> = {
      all: [],
      surgical: ["Surgical", "Signature", "Oculoplastic", "Aesthetic", "High Definition", "Contouring", "Men's Aesthetic", "Cosmetic", "Affirming"],
      "non-surgical": ["Non-Surgical", "Minimally Invasive", "Collagen", "Medi-Facial", "Technology", "Regenerative"],
      face: ["Signature", "Oculoplastic", "Aesthetic", "Day Care", "Minimally Invasive", "Non-Surgical", "Collagen", "Medi-Facial", "Technology"],
      body: ["High Definition", "Contouring", "Surgical", "Men's Aesthetic", "Cosmetic"],
      skin: ["Non-Surgical", "Collagen", "Medi-Facial", "Technology", "Regenerative"],
    };

    return procedures.filter((proc) =>
      filterMap[filter]?.includes(proc.badge)
    );
  };

  const filteredProcedures = filterProcedures(activeFilter);

  // Count procedures by category
  const surgicalCount = procedures.filter((p) =>
    ["Surgical", "Signature", "Oculoplastic", "Aesthetic", "High Definition", "Contouring", "Men's Aesthetic", "Cosmetic", "Affirming"].includes(p.badge)
  ).length;

  const nonSurgicalCount = procedures.filter((p) =>
    ["Non-Surgical", "Minimally Invasive", "Collagen", "Medi-Facial", "Technology", "Regenerative"].includes(p.badge)
  ).length;

  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.heroTitle}>
            Surgical & Non-Surgical Procedures
          </h1>
          <p className={styles.heroSubtitle}>
            Bespoke treatments tailored to your unique anatomy, performed inside
            state-of-the-art sterile theatres by board-certified specialists.
            Every protocol is engineered for patients who prioritize discretion,
            natural subtlety, and zero compromise on surgical safety.
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className={styles.filters}>
        <div className={styles.filterContainer}>
          <span className={styles.filterLabel}>Filter by:</span>
          <button
            className={`${styles.filterButton} ${
              activeFilter === "all" ? styles.active : ""
            }`}
            onClick={() => setActiveFilter("all")}
          >
            All Treatments
          </button>
          <button
            className={`${styles.filterButton} ${
              activeFilter === "surgical" ? styles.active : ""
            }`}
            onClick={() => setActiveFilter("surgical")}
          >
            Surgical
          </button>
          <button
            className={`${styles.filterButton} ${
              activeFilter === "non-surgical" ? styles.active : ""
            }`}
            onClick={() => setActiveFilter("non-surgical")}
          >
            Non-Surgical
          </button>
          <button
            className={`${styles.filterButton} ${
              activeFilter === "face" ? styles.active : ""
            }`}
            onClick={() => setActiveFilter("face")}
          >
            Face
          </button>
          <button
            className={`${styles.filterButton} ${
              activeFilter === "body" ? styles.active : ""
            }`}
            onClick={() => setActiveFilter("body")}
          >
            Body
          </button>
          <button
            className={`${styles.filterButton} ${
              activeFilter === "skin" ? styles.active : ""
            }`}
            onClick={() => setActiveFilter("skin")}
          >
            Skin & Laser
          </button>
        </div>
      </section>

      {/* Treatments Grid */}
      <section className={styles.treatments}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>
            {activeFilter === "all"
              ? "All Available Treatments"
              : activeFilter === "surgical"
              ? "Surgical Procedures"
              : activeFilter === "non-surgical"
              ? "Non-Surgical Treatments"
              : activeFilter === "face"
              ? "Facial Treatments"
              : activeFilter === "body"
              ? "Body Contouring"
              : "Skin & Laser Treatments"}
          </h2>
          <p className={styles.sectionSubtitle}>
            {filteredProcedures.length} treatment
            {filteredProcedures.length !== 1 ? "s" : ""} available in this
            category
          </p>

          <div className={styles.treatmentsGrid}>
            {filteredProcedures.map((procedure) => (
              <div key={procedure.title} className={styles.treatmentCard}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={procedure.image}
                    alt={procedure.imageAlt}
                    fill
                    sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className={styles.treatmentImage}
                  />
                  <span
                    className={`${styles.badge} ${
                      badgeToneClass[procedure.badgeTone]
                    }`}
                  >
                    {procedure.badge}
                  </span>
                </div>
                <div className={styles.content}>
                  <h3 className={styles.treatmentTitle}>{procedure.title}</h3>
                  <p className={styles.treatmentDescription}>
                    {procedure.description}
                  </p>
                  <div className={styles.learnMore}>
                    <span>Learn More</span>
                    <Icon name="arrow_forward" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Categories */}
      <section className={styles.categories}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Treatment Categories</h2>
          <p className={styles.sectionSubtitle}>
            Explore our comprehensive range of aesthetic procedures
          </p>

          <div className={styles.categoriesGrid}>
            <div
              className={styles.categoryCard}
              onClick={() => setActiveFilter("surgical")}
            >
              <Icon name="medical_services" className={styles.categoryIcon} />
              <h3 className={styles.categoryTitle}>Surgical Procedures</h3>
              <p className={styles.categoryCount}>
                {surgicalCount} treatments available
              </p>
            </div>

            <div
              className={styles.categoryCard}
              onClick={() => setActiveFilter("non-surgical")}
            >
              <Icon name="spa" className={styles.categoryIcon} />
              <h3 className={styles.categoryTitle}>Non-Surgical Treatments</h3>
              <p className={styles.categoryCount}>
                {nonSurgicalCount} treatments available
              </p>
            </div>

            <div
              className={styles.categoryCard}
              onClick={() => setActiveFilter("face")}
            >
              <Icon name="face" className={styles.categoryIcon} />
              <h3 className={styles.categoryTitle}>Facial Aesthetics</h3>
              <p className={styles.categoryCount}>Multiple options available</p>
            </div>

            <div
              className={styles.categoryCard}
              onClick={() => setActiveFilter("body")}
            >
              <Icon name="accessibility_new" className={styles.categoryIcon} />
              <h3 className={styles.categoryTitle}>Body Contouring</h3>
              <p className={styles.categoryCount}>
                Advanced sculpting techniques
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className={styles.infoCards}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Why Choose Resplendent</h2>
          <p className={styles.sectionSubtitle}>
            The difference that sets us apart
          </p>

          <div className={styles.infoGrid}>
            <div className={styles.infoCard}>
              <Icon
                name="verified_user"
                className={styles.infoCardIcon}
              />
              <h3 className={styles.infoCardTitle}>Board-Certified Surgeons</h3>
              <p className={styles.infoCardText}>
                100% surgeon-led care with international fellowship training and
                18+ years of specialized experience in aesthetic procedures.
              </p>
            </div>

            <div className={styles.infoCard}>
              <Icon name="science" className={styles.infoCardIcon} />
              <h3 className={styles.infoCardTitle}>
                Hospital-Grade Standards
              </h3>
              <p className={styles.infoCardText}>
                NABH-aligned protocols, HEPA 14 sterile fields, and
                German precision instrumentation ensuring zero-compromise safety.
              </p>
            </div>

            <div className={styles.infoCard}>
              <Icon name="psychology" className={styles.infoCardIcon} />
              <h3 className={styles.infoCardTitle}>Personalized Approach</h3>
              <p className={styles.infoCardText}>
                No cookie-cutter outcomes. Every treatment begins with unique
                anatomical assessment and customized planning for natural results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation CTA */}
      <section className={styles.consultation}>
        <div className={styles.container}>
          <div className={styles.consultationContent}>
            <h2 className={styles.sectionTitle}>
              Begin Your Transformation Journey
            </h2>
            <p className={styles.sectionSubtitle}>
              Schedule a private, in-depth consultation
            </p>
            <p className={styles.consultationText}>
              Every transformation begins with a detailed consultation where Dr.
              Sukhbir Singh personally evaluates your anatomy, discusses your
              aesthetic goals, and designs a bespoke treatment protocol tailored
              exclusively for you.
            </p>
            <Link href="/book-consultation" className={styles.ctaButton}>
              <Icon name="calendar_today" />
              <span>Book Your Consultation</span>
              <Icon name="arrow_forward" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
