"use client";

import { useState, type FormEvent } from "react";
import Icon from "@/components/Icon";
import type { ConsultationFormData } from "@/data/treatments/types";
import ui from "@/components/shared/ui.module.css";
import styles from "./ConsultationForm.module.css";

export default function ConsultationForm({ data }: { data: ConsultationFormData }) {
  const [submitted, setSubmitted] = useState(false);

  // No backend yet: the request is acknowledged client-side only.
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id={data.id} className={`${ui.section} ${ui.white}`}>
      <div className={`${ui.container} ${styles.grid}`}>
        <div className={styles.intro}>
          <span className={ui.eyebrow}>{data.eyebrow}</span>
          <h2 className={ui.title}>{data.title}</h2>
          {data.intro && <p className={ui.lead}>{data.intro}</p>}
          <div className={styles.contacts}>
            {data.contacts.map((contact) => (
              <div key={contact.title} className={styles.contact}>
                <Icon name={contact.icon} className={styles.contactIcon} />
                <div>
                  <p className={styles.contactTitle}>{contact.title}</p>
                  <p className={styles.contactText}>{contact.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.row}>
            <label className={ui.field}>
              <span className={ui.label}>Full Name *</span>
              <input className={ui.input} type="text" placeholder="e.g. Rohini Malhotra" required />
            </label>
            <label className={ui.field}>
              <span className={ui.label}>Mobile / WhatsApp *</span>
              <input className={ui.input} type="tel" placeholder="+91 98765 43210" required />
            </label>
          </div>
          <div className={styles.row}>
            {data.withDate ? (
              <label className={ui.field}>
                <span className={ui.label}>Preferred Date</span>
                <input className={ui.input} type="date" />
              </label>
            ) : (
              <label className={ui.field}>
                <span className={ui.label}>Email Address *</span>
                <input className={ui.input} type="email" placeholder="contact@example.com" required />
              </label>
            )}
            <label className={ui.field}>
              <span className={ui.label}>{data.interestLabel}</span>
              <select className={ui.input} defaultValue={data.interests[0]}>
                {data.interests.map((interest) => (
                  <option key={interest}>{interest}</option>
                ))}
              </select>
            </label>
          </div>
          <label className={ui.field}>
            <span className={ui.label}>Medical Notes (Optional)</span>
            <textarea
              className={ui.input}
              rows={3}
              placeholder="Describe symptoms, previous procedures, or preferred consultation dates..."
            />
          </label>
          <label className={styles.consent}>
            <input type="checkbox" required />
            <span>I agree to the confidential medical scheduling policy and private WhatsApp coordination.</span>
          </label>
          <button type="submit" className={`${ui.btn} ${ui.btnPrimary} ${ui.btnBlock}`}>
            {data.submitLabel}
          </button>
          {submitted && (
            <p className={ui.success} role="status">
              <Icon name="check_circle" />
              <span>{data.successMessage}</span>
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
