"use client";

import { useEffect, useState, type FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";
import {
  bookingCategories,
  bookingSpecialists,
  bookingSteps,
  consultFormats,
  timeSlots,
} from "@/data/booking";
import ui from "@/components/shared/ui.module.css";
import styles from "./BookingWizard.module.css";

type Step = 1 | 2 | 3 | 4;

/** Next `count` clinic days (Mon–Sat), starting tomorrow. */
function upcomingClinicDays(count: number): Date[] {
  const days: Date[] = [];
  const cursor = new Date();
  while (days.length < count) {
    cursor.setDate(cursor.getDate() + 1);
    if (cursor.getDay() !== 0) days.push(new Date(cursor));
  }
  return days;
}

export default function BookingWizard() {
  const [step, setStep] = useState<Step>(1);
  const [submitted, setSubmitted] = useState(false);
  const [category, setCategory] = useState(bookingCategories[0].value);
  const [specialist, setSpecialist] = useState(bookingSpecialists[0].value);
  const [format, setFormat] = useState(consultFormats[0].value);
  // Dates depend on the visitor's clock, so they are filled in after mount to avoid hydration mismatches.
  const [dates, setDates] = useState<Date[]>([]);
  const [dateIndex, setDateIndex] = useState(0);
  const [slot, setSlot] = useState(timeSlots[0].slots[0]);

  useEffect(() => {
    setDates(upcomingClinicDays(5));
  }, []);

  const goTo = (next: Step) => {
    setStep(next);
    document.getElementById("booking-card")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div id="booking-card" className={styles.card}>
        <div className={styles.success}>
          <span className={styles.successIcon}>
            <Icon name="verified_user" />
          </span>
          <h2 className={styles.stepTitle}>Clinical Reservation Submitted</h2>
          <p className={styles.successText}>
            Thank you. Your details have been routed directly to our Greater Kailash Studio Concierge. Our Chief Patient
            Coordinator will contact you confidentially within 2 business hours to finalize your slot.
          </p>
          <dl className={styles.summary}>
            <div>
              <dt>Requested Slot</dt>
              <dd>
                {dates[dateIndex]?.toLocaleDateString("en-IN", { weekday: "short", day: "numeric", month: "short" })} ·{" "}
                {slot}
              </dd>
            </div>
            <div>
              <dt>Location</dt>
              <dd>{format === "virtual" ? "Virtual Video Consultation" : "GK-1, South Delhi Sanctuary"}</dd>
            </div>
            <div>
              <dt>Direct Inquiries</dt>
              <dd className={styles.accent}>+91 99103 91229</dd>
            </div>
          </dl>
          <Link className={`${ui.btn} ${ui.btnPrimary}`} href="/">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div id="booking-card" className={styles.card}>
      {/* Progress */}
      <ol className={styles.progress}>
        {bookingSteps.map((label, index) => {
          const number = (index + 1) as Step;
          const state = number < step ? styles.done : number === step ? styles.current : "";
          return (
            <li key={label} className={styles.progressItem}>
              <button type="button" className={styles.progressButton} onClick={() => goTo(number)}>
                <span className={`${styles.badge} ${state}`}>
                  {number < step ? <Icon name="check" /> : number}
                </span>
                <span className={styles.progressLabel}>
                  <span>{label}</span>
                  <small>Step {number}</small>
                </span>
              </button>
              {index < bookingSteps.length - 1 && (
                <span className={styles.track}>
                  <span className={styles.trackFill} style={{ width: number < step ? "100%" : "0%" }} />
                </span>
              )}
            </li>
          );
        })}
      </ol>

      {/* Step 1: Aesthetic goal */}
      {step === 1 && (
        <div className={styles.step}>
          <div>
            <span className={styles.phase}>Phase 01 / Diagnostics</span>
            <h2 className={styles.stepTitle}>Select Your Procedure or Objective</h2>
            <p className={styles.stepText}>Select the aesthetic focus requiring specialist anatomical mapping and evaluation.</p>
          </div>
          <div className={styles.optionGrid}>
            {bookingCategories.map((item) => (
              <label key={item.value} className={`${styles.option} ${category === item.value ? styles.selected : ""}`}>
                <input
                  type="radio"
                  name="treatment_category"
                  value={item.value}
                  checked={category === item.value}
                  onChange={() => setCategory(item.value)}
                  className={styles.hiddenInput}
                />
                <span className={styles.optionHead}>
                  <span className={styles.optionIcon}>
                    <Icon name={item.icon} />
                  </span>
                  <Icon name="check_circle" className={styles.check} />
                </span>
                <span className={styles.optionTitle}>{item.title}</span>
                <span className={styles.optionText}>{item.text}</span>
                <span className={styles.optionMeta}>
                  <span className={styles.optionTag}>{item.tag}</span>
                  <span className={styles.optionNote}>{item.note}</span>
                </span>
              </label>
            ))}
          </div>
          <label className={`${styles.optionWide} ${category === "unsure" ? styles.selected : ""}`}>
            <input
              type="radio"
              name="treatment_category"
              value="unsure"
              checked={category === "unsure"}
              onChange={() => setCategory("unsure")}
            />
            <span>
              <span className={styles.optionTitle}>Unsure / Need Comprehensive Surgical Assessment</span>
              <span className={styles.optionText}>
                Allow our senior medical directors to examine your facial/body balance and curate a tailored plan.
              </span>
            </span>
          </label>
          <div className={styles.navEnd}>
            <button type="button" className={`${ui.btn} ${ui.btnPrimary}`} onClick={() => goTo(2)}>
              Proceed to Specialist Selection
              <Icon name="arrow_forward" />
            </button>
          </div>
        </div>
      )}

      {/* Step 2: Specialist */}
      {step === 2 && (
        <div className={styles.step}>
          <div>
            <span className={styles.phase}>Phase 02 / Attending Surgeon</span>
            <h2 className={styles.stepTitle}>Select Your Consulting Specialist</h2>
            <p className={styles.stepText}>
              Consultations are strictly conducted by board-certified consultants with verified global credentials.
            </p>
          </div>
          <div className={styles.specialists}>
            {bookingSpecialists.map((doctor) => (
              <label
                key={doctor.value}
                className={`${styles.specialist} ${specialist === doctor.value ? styles.selected : ""}`}
              >
                <input
                  type="radio"
                  name="specialist"
                  value={doctor.value}
                  checked={specialist === doctor.value}
                  onChange={() => setSpecialist(doctor.value)}
                  className={styles.hiddenInput}
                />
                <span className={styles.specialistId}>
                  {doctor.image ? (
                    <span className={`${ui.media} ${styles.avatar}`}>
                      <Image src={doctor.image} alt={doctor.name} fill sizes="64px" className={ui.cover} />
                    </span>
                  ) : (
                    <span className={styles.avatarIcon}>
                      <Icon name="clinical_notes" />
                    </span>
                  )}
                  <span className={styles.specialistCopy}>
                    <span className={styles.specialistName}>
                      {doctor.name}
                      {doctor.role && <span className={styles.roleTag}>{doctor.role}</span>}
                    </span>
                    {doctor.credentials && <span className={styles.credentials}>{doctor.credentials}</span>}
                    <span className={styles.optionText}>{doctor.focus}</span>
                  </span>
                </span>
                {doctor.accreditation ? (
                  <span className={styles.accreditation}>
                    <small>{doctor.accreditation.label}</small>
                    {doctor.accreditation.value}
                  </span>
                ) : (
                  <Icon name="speed" className={styles.check} />
                )}
              </label>
            ))}
          </div>
          <div className={styles.navBetween}>
            <button type="button" className={`${ui.btn} ${ui.btnSecondary}`} onClick={() => goTo(1)}>
              <Icon name="arrow_back" />
              Back
            </button>
            <button type="button" className={`${ui.btn} ${ui.btnPrimary}`} onClick={() => goTo(3)}>
              Proceed to Schedule
              <Icon name="arrow_forward" />
            </button>
          </div>
        </div>
      )}

      {/* Step 3: Schedule */}
      {step === 3 && (
        <div className={styles.step}>
          <div>
            <span className={styles.phase}>Phase 03 / Reservation Time</span>
            <h2 className={styles.stepTitle}>Select Consultation Format &amp; Timing</h2>
            <p className={styles.stepText}>
              Select an in-person sanctuary evaluation or a high-definition encrypted virtual consultation.
            </p>
          </div>
          <div className={styles.optionGrid}>
            {consultFormats.map((item) => (
              <label key={item.value} className={`${styles.optionWide} ${format === item.value ? styles.selected : ""}`}>
                <input
                  type="radio"
                  name="consult_format"
                  value={item.value}
                  checked={format === item.value}
                  onChange={() => setFormat(item.value)}
                />
                <span>
                  <span className={styles.optionTitle}>
                    <Icon name={item.icon} className={styles.inlineIcon} />
                    {item.title}
                  </span>
                  <span className={styles.optionText}>{item.text}</span>
                </span>
              </label>
            ))}
          </div>

          <div className={styles.group}>
            <span className={ui.label}>Available Calendar Windows (Next 5 Clinic Days)</span>
            <div className={styles.dates}>
              {dates.map((date, index) => (
                <button
                  key={date.toISOString()}
                  type="button"
                  className={`${styles.date} ${dateIndex === index ? styles.dateActive : ""}`}
                  onClick={() => setDateIndex(index)}
                  aria-pressed={dateIndex === index}
                >
                  <small>{date.toLocaleDateString("en-IN", { weekday: "short" })}</small>
                  <span>{date.getDate()}</span>
                  <small>{date.toLocaleDateString("en-IN", { month: "short" })}</small>
                </button>
              ))}
            </div>
          </div>

          <div className={styles.group}>
            <span className={ui.label}>Select Specific Consultation Slot</span>
            {timeSlots.map((group) => (
              <div key={group.period} className={styles.slotGroup}>
                <span className={styles.slotPeriod}>{group.period}</span>
                <div className={styles.slots}>
                  {group.slots.map((time) => (
                    <button
                      key={time}
                      type="button"
                      className={`${styles.slot} ${slot === time ? styles.slotActive : ""}`}
                      onClick={() => setSlot(time)}
                      aria-pressed={slot === time}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className={styles.navBetween}>
            <button type="button" className={`${ui.btn} ${ui.btnSecondary}`} onClick={() => goTo(2)}>
              <Icon name="arrow_back" />
              Back
            </button>
            <button type="button" className={`${ui.btn} ${ui.btnPrimary}`} onClick={() => goTo(4)}>
              Proceed to Patient Details
              <Icon name="arrow_forward" />
            </button>
          </div>
        </div>
      )}

      {/* Step 4: Patient details */}
      {step === 4 && (
        <form className={styles.step} onSubmit={handleSubmit}>
          <div>
            <span className={styles.phase}>Phase 04 / Confidential Intake</span>
            <h2 className={styles.stepTitle}>Patient Details &amp; Registration</h2>
            <p className={styles.stepText}>All submissions are held under physician-patient privilege.</p>
          </div>
          <div className={styles.fields}>
            <label className={ui.field}>
              <span className={ui.label}>Full Legal Name *</span>
              <input className={ui.input} type="text" placeholder="e.g. Rohini Malhotra" required />
            </label>
            <label className={ui.field}>
              <span className={ui.label}>Mobile / WhatsApp Number *</span>
              <input className={ui.input} type="tel" placeholder="+91 98100 XXXXX" required />
            </label>
            <label className={ui.field}>
              <span className={ui.label}>Email Address *</span>
              <input className={ui.input} type="email" placeholder="you@example.com" required />
            </label>
            <label className={ui.field}>
              <span className={ui.label}>City &amp; Country of Residence *</span>
              <input className={ui.input} type="text" placeholder="e.g. New Delhi, India or London, UK" required />
            </label>
            <label className={`${ui.field} ${styles.fullWidth}`}>
              <span className={ui.label}>Aesthetic Objectives or Prior Procedures (Optional)</span>
              <textarea
                className={ui.input}
                rows={3}
                placeholder="Detail any previous cosmetic procedures, aesthetic concerns, or outcomes you wish to address..."
              />
            </label>
          </div>
          <label className={styles.consent}>
            <input type="checkbox" required />
            <span>
              I agree to confidential medical scheduling under doctor-patient privilege and consent to receiving my
              appointment confirmation, clinic location, and pre-consultation guidelines via WhatsApp and email.
            </span>
          </label>
          <div className={styles.navBetween}>
            <button type="button" className={`${ui.btn} ${ui.btnSecondary}`} onClick={() => goTo(3)}>
              <Icon name="arrow_back" />
              Back
            </button>
            <button type="submit" className={`${ui.btn} ${ui.btnPrimary}`}>
              Confirm Confidential Consultation
              <Icon name="verified" />
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
