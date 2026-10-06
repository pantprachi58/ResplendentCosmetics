"use client";

import { useState, type FormEvent } from "react";
import Icon from "@/components/Icon";
import { contactTreatments, countryCodes } from "@/data/contact";
import ui from "@/components/shared/ui.module.css";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  // No backend yet: the inquiry is acknowledged client-side only.
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div id="contact-form" className={styles.card}>
      <div className={styles.accentBar} />
      <div className={styles.head}>
        <div>
          <p className={styles.title}>Send a Confidential Inquiry</p>
          <p className={styles.subtitle}>Handled under rigorous surgeon-patient clinical privilege</p>
        </div>
        <span className={styles.lock}>
          <Icon name="lock" filled />
        </span>
      </div>

      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={ui.field}>
          <span className={ui.label}>Full Name *</span>
          <input className={ui.input} type="text" placeholder="e.g. Dr. R. Malhotra" required />
        </label>

        <div className={styles.phoneRow}>
          <label className={ui.field}>
            <span className={ui.label}>Country Code</span>
            <select className={ui.input} defaultValue="+91">
              {countryCodes.map((code) => (
                <option key={code.value} value={code.value}>
                  {code.label}
                </option>
              ))}
            </select>
          </label>
          <label className={ui.field}>
            <span className={ui.label}>Mobile / WhatsApp *</span>
            <input className={ui.input} type="tel" placeholder="99103 91229" required />
          </label>
        </div>

        <label className={ui.field}>
          <span className={ui.label}>Email Address *</span>
          <input className={ui.input} type="email" placeholder="your.name@private.com" required />
        </label>

        <label className={ui.field}>
          <span className={ui.label}>Treatment of Interest *</span>
          <select className={ui.input} defaultValue="" required>
            <option value="" disabled>
              Select Primary Aesthetic Focus
            </option>
            {contactTreatments.map((treatment) => (
              <option key={treatment}>{treatment}</option>
            ))}
          </select>
        </label>

        <fieldset className={styles.fieldset}>
          <legend className={ui.label}>Preferred Consultation Format</legend>
          <div className={styles.formatGrid}>
            <label className={styles.formatOption}>
              <input type="radio" name="consultationType" value="in-person" defaultChecked />
              <span>
                <span className={styles.formatTitle}>In-Person Assessment</span>
                <span className={styles.formatText}>Greater Kailash Part 1 Suite</span>
              </span>
            </label>
            <label className={styles.formatOption}>
              <input type="radio" name="consultationType" value="virtual" />
              <span>
                <span className={styles.formatTitle}>Virtual Telehealth</span>
                <span className={styles.formatText}>Global HD Video Call</span>
              </span>
            </label>
          </div>
        </fieldset>

        <label className={ui.field}>
          <span className={ui.label}>Message / Specific Inquiries (optional)</span>
          <textarea
            className={ui.input}
            rows={4}
            placeholder="Briefly specify any prior surgeries, timeline goals, or aesthetic concerns..."
          />
        </label>

        <label className={styles.consent}>
          <input type="checkbox" required />
          <span>
            I agree to confidential medical records handling under statutory healthcare regulations and opt to receive
            discreet appointment notices via encrypted WhatsApp/SMS.
          </span>
        </label>

        <button type="submit" className={`${ui.btn} ${ui.btnPrimary} ${ui.btnBlock}`}>
          <span>Send Confidential Message</span>
          <Icon name="arrow_forward" />
        </button>
        <p className={styles.responseNote}>
          <Icon name="timelapse" className={styles.green} />
          Responses typically delivered within 2 business hours by our medical concierge.
        </p>

        {submitted && (
          <p className={ui.success} role="status">
            <Icon name="check_circle" />
            <span>Thank you. Your inquiry has been routed directly to our private GK-1 concierge desk.</span>
          </p>
        )}
      </form>
    </div>
  );
}
