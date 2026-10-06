import type { CalloutData, CardGridData, CtaBandData, FaqData, ProcessData, TreatmentHeroData } from "./types";
import { bookConsultationCta, clinicMeta } from "./shared";

// Content sourced from https://www.resplendentcosmetics.com/microdermabrasion.php (no imagery or video on the live page).

export const microdermabrasionMeta = {
  title: "Microdermabrasion Treatment in Delhi | Resplendent Aesthetics",
  description:
    "Microdermabrasion in Greater Kailash, New Delhi: a 20–30 minute, non-chemical, non-invasive treatment for superficial acne scars, fine wrinkles, sunspots and uneven texture.",
};

export const microdermabrasionHero: TreatmentHeroData = {
  breadcrumb: "Microdermabrasion",
  eyebrow: "Non-Surgical Skin Resurfacing",
  title: "Microdermabrasion — ",
  highlight: "Smoother, Fresher Skin",
  lead: "Microdermabrasion is a lunchtime, non-chemical, non-invasive procedure that removes the outermost layer of dry, dead skin cells to reveal younger, healthier-looking skin. It reduces acne scars, fine wrinkles and sunspots—with no chemicals or laser beams.",
  pills: [
    { icon: "timer", label: "20–30 Minutes" },
    { icon: "block", label: "No Chemicals or Lasers" },
    { icon: "work", label: "Back to Work Immediately" },
    { icon: "diversity_3", label: "Suits All Skin Types" },
  ],
  primaryCta: bookConsultationCta("Book a Skin Consultation"),
  secondaryCta: { label: "Is It Right for Me?", href: "#faq" },
  card: {
    eyebrow: "Treatment at a Glance",
    title: "Microdermabrasion",
    icon: "auto_awesome",
    checklist: [
      "Aluminium oxide micro-crystals gently resurface the skin",
      "Encourages new skin with more collagen and elastin",
      "Almost painless with a numbing cream",
      "Usually 6–8 sessions, 2–3 weeks apart",
    ],
    footLabel: "Consultation Studio",
    footValue: "R-9, Greater Kailash Part 1, New Delhi",
  },
};

export const microdermabrasionConcerns: CardGridData = {
  eyebrow: "Who It Helps",
  title: "Concerns Microdermabrasion Treats",
  intro:
    "During your consultation, tell Dr. Sukhbir Singh about the concerns on your face. If they include any of the following, you are a good candidate. All skin types and colours can be treated.",
  columns: 4,
  cards: [
    { icon: "texture", title: "Superficial Acne Scars", text: "Softens shallow scarring by removing the top layers of skin." },
    { icon: "wb_sunny", title: "Sun Damage & Spots", text: "Improves blotchy, sunburnt skin, sunspots and age spots." },
    { icon: "blur_on", title: "Pores & Blackheads", text: "Helps large pores and blackheads for a cleaner texture." },
    { icon: "gesture", title: "Fine Wrinkles & Tone", text: "Improves fine wrinkles and uneven skin tone and texture." },
  ],
};

export const microdermabrasionProcess: ProcessData = {
  eyebrow: "The Procedure",
  title: "How a Session Works",
  intro: "Minimal preparation, almost no pain, and you can return to work straight after.",
  steps: [
    {
      icon: "event_note",
      title: "Preparation",
      text: "Stop aspirin-based medicines, Retin-A and glycolic acid products. Avoid smoking, alcohol, waxing and sunbathing for at least a week beforehand.",
      footValue: "1 Week Before",
    },
    {
      icon: "clean_hands",
      title: "Cleansing",
      text: "The skin is degreased and cleaned thoroughly. A numbing cream can be applied to make the treatment almost painless.",
      footValue: "Skin Prepared",
    },
    {
      icon: "auto_awesome",
      title: "Resurfacing",
      text: "A handheld device gently sandblasts aluminium oxide micro-crystals across the face—or adjustable microneedles are used—to remove the top layer.",
      footValue: "20–30 Minutes",
    },
    {
      icon: "wb_sunny",
      title: "Protect",
      text: "Antibiotic cream, moisturiser and sunscreen are applied so you can go straight home or back to work.",
      footValue: "Immediate Recovery",
    },
  ],
};

export const microdermabrasionAftercare: CalloutData = {
  icon: "healing",
  eyebrow: "Aftercare & Suitability",
  title: "After Your Treatment",
  text: "Some redness may appear on treated areas but usually fades within a few hours, and skin may feel dry for the first 24 hours. Skin usually heals in a couple of days with improved texture and radiance.",
  highlights: [
    { icon: "opacity", title: "Moisturise Well", text: "Use plenty of moisturiser for the first few days." },
    { icon: "light_mode", title: "Avoid Sun for a Week", text: "Avoid direct sun and don't use peeling products." },
    { icon: "brush", title: "No Full Make-Up for 3–4 Days", text: "Avoid liquid foundation or pressed powder." },
  ],
  aside: {
    icon: "do_not_disturb_on",
    title: "Not Recommended For",
    subtitle: "Contraindications",
    items: [
      "Excessive keratosis or active rosacea",
      "Weeping acne (stages 3–4)",
      "Uncontrolled diabetes or auto-immune disorders",
      "Fragile capillaries, eczema, psoriasis or lupus",
    ],
  },
};

export const microdermabrasionFaq: FaqData = {
  eyebrow: "Common Questions",
  title: "FAQs on Microdermabrasion",
  items: [
    {
      question: "How does microdermabrasion work?",
      answer:
        "Microdermabrasion is a lunchtime treatment that reduces acne scars, fine wrinkles and sunspots by removing the top layers of skin. No chemicals or lasers are used—aluminium oxide micro-crystals gently sandblast the skin, leaving it smooth and fresh, and stimulate collagen production to rejuvenate the skin.",
    },
    {
      question: "Are dermabrasion and microdermabrasion the same?",
      answer:
        "No. Dermabrasion uses a power-driven handheld device to remove the top layers of skin and may need local anaesthetic; afterwards the skin is red, swollen and very sensitive for about 10 days. It is used for deep wrinkles, scars and hyperpigmentation. Microdermabrasion is much less invasive, with immediate recovery.",
    },
    {
      question: "Who should perform microdermabrasion?",
      answer:
        "Microdermabrasion should be performed only by trained plastic surgeons or dermatologists, although many beauty specialists also offer it.",
    },
    {
      question: "How long does a session take?",
      answer:
        "A typical face treatment takes 20–30 minutes. Treating other areas as well may take a little longer.",
    },
    {
      question: "How many sessions will I need?",
      answer:
        "Dr. Sukhbir Singh will advise you at your initial consultation. On average, 6–8 sessions, 2–3 weeks apart, give good results, and maintenance sessions may be needed depending on your skin.",
    },
    {
      question: "What precautions should I take before treatment? Is it painful?",
      answer:
        "Minimal preparation is needed. Stop aspirin-based medicines, Retin-A or glycolic acid products, and avoid smoking, alcohol, waxing and sunbathing for at least a week beforehand. The procedure is almost painless, recovery is immediate and you can return to the office soon after.",
    },
    {
      question: "How will my face look afterwards?",
      answer:
        "Some redness may appear but usually fades within a few hours, and skin may feel dry for 24 hours. Moisturise well, avoid direct sun for at least a week, don't use peeling products, and avoid full-face make-up (liquid foundation or pressed powder) for 3–4 days.",
    },
    {
      question: "Who should not have microdermabrasion?",
      answer:
        "It is not recommended for people with excessive keratosis, active rosacea, weeping acne (stages 3–4), uncontrolled diabetes, auto-immune disorders, fragile capillaries, eczema, psoriasis or lupus.",
    },
  ],
};

export const microdermabrasionCta: CtaBandData = {
  eyebrow: "Skin Rejuvenation • Greater Kailash Part 1",
  title: "Reveal Smoother, Brighter Skin",
  text: "Plan your microdermabrasion sessions with Dr. Sukhbir Singh at R-9, Basement, Greater Kailash Part 1, New Delhi - 110048.",
  primaryCta: bookConsultationCta("Book a Skin Consultation"),
  meta: clinicMeta.slice(0, 1),
};
