import type {
  CalloutData,
  CardGridData,
  CtaBandData,
  FaqData,
  ProcessData,
  TreatmentHeroData,
} from "./types";
import { bookConsultationCta, clinicMeta } from "./shared";

// Content sourced from https://www.resplendentcosmetics.com/vaginal-tightening.php.
// The live page has no procedure imagery or case photos, so this page omits those sections
// rather than inventing outcomes or statistics.

export const vaginalTighteningMeta = {
  title: "Vaginal Tightening Surgery in Delhi NCR | Resplendent Aesthetics",
  description:
    "Vaginal tightening is a surgical procedure that tightens and strengthens the vaginal muscles, perineum and surrounding tissues. Day-care procedure under local anaesthesia in Greater Kailash, New Delhi.",
};

export const vaginalTighteningHero: TreatmentHeroData = {
  breadcrumb: "Vaginal Tightening",
  eyebrow: "Women's Aesthetic & Intimate Surgery",
  title: "Vaginal Tightening — ",
  highlight: "Tone, Strength & Control",
  lead: "Vaginal tightening (vaginoplasty) is a surgical procedure that tightens the vaginal muscles, perineum and surrounding tissues. This gives more tone, strength and control to the vaginal muscles, enhancing sensitivity and sexual experience.",
  pills: [
    { icon: "vaccines", label: "Local Anaesthesia" },
    { icon: "event_available", label: "Day-Care Procedure" },
    { icon: "schedule", label: "3–4 Week Recovery Guidance" },
    { icon: "lock", label: "Confidential Consultation" },
  ],
  primaryCta: bookConsultationCta("Book a Private Consultation"),
  secondaryCta: { label: "Read Common Questions", href: "#faq" },
  card: {
    eyebrow: "Procedure at a Glance",
    title: "Vaginal Tightening",
    icon: "female",
    checklist: [
      "Tightens the vaginal muscles, perineum and surrounding tissues",
      "Can be performed under local anaesthesia",
      "Usually a day-care procedure — no overnight stay",
      "Avoid sexual activity for 3–4 weeks afterwards",
    ],
    footLabel: "Consultation Studio",
    footValue: "R-9, Greater Kailash Part 1, New Delhi",
  },
};

export const vaginalTighteningBenefits: CardGridData = {
  eyebrow: "Why Women Choose It",
  title: "Restoring Tone, Strength & Sensitivity",
  intro:
    "Vaginal muscles lose tone as part of the ageing process, which can cause embarrassment and discomfort. The loss of sensitivity can also affect sexual satisfaction for both you and your partner.",
  columns: 4,
  cards: [
    {
      icon: "fitness_center",
      title: "Muscle Tone",
      text: "Restores tone to vaginal muscles that have loosened with age.",
    },
    {
      icon: "shield",
      title: "Strength",
      text: "Tightens and strengthens the vaginal muscles, perineum and surrounding tissues.",
    },
    {
      icon: "tune",
      title: "Control",
      text: "Gives greater control over the vaginal muscles.",
    },
    {
      icon: "favorite",
      title: "Sensitivity",
      text: "Enhances sensitivity and sexual experience for you and your partner.",
    },
  ],
};

export const vaginalTighteningProcess: ProcessData = {
  eyebrow: "What to Expect",
  title: "Your Vaginal Tightening Journey",
  intro: "A safe and effective procedure, usually completed as a day-care visit at our Greater Kailash Part 1 studio.",
  steps: [
    {
      icon: "forum",
      title: "Private Consultation",
      text: "Discuss your concerns in a confidential consultation so your surgeon can assess suitability and plan your procedure.",
      footValue: "Confidential Assessment",
    },
    {
      icon: "vaccines",
      title: "Local Anaesthesia",
      text: "The procedure can be performed under local anaesthesia, avoiding the need for general anaesthesia.",
      footValue: "Comfort-Focused Care",
    },
    {
      icon: "healing",
      title: "Tightening Procedure",
      text: "The vaginal muscles, perineum and surrounding tissues are surgically tightened to restore tone, strength and control.",
      footValue: "Day-Care Procedure",
    },
    {
      icon: "self_care",
      title: "Recovery",
      text: "You can usually return home the same day. Patients are advised to avoid sexual activity for 3–4 weeks following the procedure.",
      footValue: "3–4 Weeks Before Intimacy",
    },
  ],
};

export const vaginalTighteningCallout: CalloutData = {
  icon: "lock",
  eyebrow: "Privacy & Discretion",
  title: "Confidential, Respectful Care",
  text: "Your consultation takes place privately at our Greater Kailash Part 1 studio, where you can discuss your concerns and ask every question about the procedure.",
  location: { title: "Greater Kailash Part 1", text: "R-9, Basement, New Delhi - 110048" },
  cta: bookConsultationCta("Request Consultation"),
};

export const vaginalTighteningFaq: FaqData = {
  eyebrow: "Common Questions",
  title: "Vaginal Tightening FAQs",
  items: [
    {
      question: "What does vaginal tightening involve?",
      answer:
        "Vaginal tightening (vaginoplasty) is a surgical procedure that tightens the vaginal muscles, perineum and surrounding tissues. This gives more tone, strength and control to the vaginal muscles, enhancing sensitivity and sexual experience.",
    },
    {
      question: "Why do vaginal muscles lose tone?",
      answer:
        "Vaginal muscles lose tone as part of the ageing process. This can cause embarrassment and discomfort, and the loss of sensitivity can affect sexual satisfaction for both you and your partner.",
    },
    {
      question: "Is the procedure done under general anaesthesia?",
      answer:
        "Vaginal tightening is a safe and effective procedure that can be done under local anaesthesia. Your surgeon will confirm the most suitable approach during your consultation.",
    },
    {
      question: "Will I need to stay in hospital overnight?",
      answer: "It is usually a day-care procedure, so most patients return home the same day.",
    },
    {
      question: "When can I resume sexual activity?",
      answer: "Patients are advised to avoid sexual activity for 3–4 weeks following the procedure.",
    },
  ],
};

export const vaginalTighteningCta: CtaBandData = {
  eyebrow: "Women's Aesthetic Surgery • Greater Kailash Part 1",
  title: "Discuss Vaginal Tightening in a Private Consultation",
  text: "Speak with our team in confidence at Resplendent Aesthetics, R-9, Basement, Greater Kailash Part 1, New Delhi - 110048.",
  primaryCta: bookConsultationCta("Book a Private Consultation"),
  meta: clinicMeta.slice(0, 1),
};
