import type { CalloutData, CtaBandData, ProcessData, TreatmentHeroData } from "./types";
import { bookConsultationCta, clinicMeta } from "./shared";

// Content sourced from https://www.resplendentcosmetics.com/gender-reassignment-surgery.php.
// The live page is a single paragraph, so this page stays deliberately concise and does not
// describe specific operations, outcomes or timelines the clinic has not published.

export const genderReassignmentMeta = {
  title: "Gender Reassignment Surgery in Delhi | Resplendent Aesthetics",
  description:
    "Confidential guidance on gender reassignment (male-to-female and female-to-male) with Dr. Sukhbir Singh in Greater Kailash, New Delhi, combining surgical and hormonal treatment over time.",
};

export const genderReassignmentHero: TreatmentHeroData = {
  breadcrumb: "Gender Reassignment",
  eyebrow: "Gender-Affirming Care",
  title: "Gender Reassignment ",
  highlight: "Surgery",
  lead: "Gender reassignment—male-to-female or female-to-male—combines surgical and hormonal treatments over a period of time. Before treatment begins, medico-legal formalities, including psychiatric opinions, are completed. Consult us so we can guide you through each step.",
  pills: [
    { icon: "lock", label: "Confidential Consultation" },
    { icon: "psychology", label: "Psychiatric Evaluation" },
    { icon: "gavel", label: "Medico-Legal Guidance" },
    { icon: "timeline", label: "Treatment Over Time" },
  ],
  primaryCta: bookConsultationCta("Book a Confidential Consultation"),
  image: {
    src: "/images/procedures/13.png",
    alt: "Male torso representing gender-affirming body contouring",
    tag: "Gender-Affirming Care",
  },
  card: {
    eyebrow: "Your Journey",
    title: "Step-by-Step Guidance",
    icon: "diversity_3",
    checklist: [
      "Male-to-female and female-to-male transition",
      "Surgical and hormonal treatment over time",
      "Medico-legal formalities completed first",
      "Psychiatric opinions as part of the process",
    ],
    footLabel: "Consultation Studio",
    footValue: "R-9, Greater Kailash Part 1, New Delhi",
  },
};

export const genderReassignmentProcess: ProcessData = {
  eyebrow: "The Process",
  title: "How Your Journey Is Guided",
  intro: "Every step is discussed with you in advance so you can make the best decisions for yourself.",
  steps: [
    {
      icon: "forum",
      title: "Confidential Consultation",
      text: "Discuss your goals with Dr. Sukhbir Singh, who will explain the steps involved and guide you through them.",
      footValue: "Private & Respectful",
    },
    {
      icon: "psychology",
      title: "Psychiatric Opinions",
      text: "Psychiatric opinions are obtained as part of the formalities before any treatment starts.",
      footValue: "Before Treatment",
    },
    {
      icon: "gavel",
      title: "Medico-Legal Formalities",
      text: "The required medico-legal formalities are completed before the procedure begins.",
      footValue: "Completed First",
    },
    {
      icon: "timeline",
      title: "Surgical & Hormonal Treatment",
      text: "Transition is achieved with a combination of surgical and hormonal treatments over a period of time.",
      footValue: "Planned Over Time",
    },
  ],
};

export const genderReassignmentPrivacy: CalloutData = {
  icon: "lock",
  eyebrow: "Privacy & Discretion",
  title: "Confidential, Respectful Care",
  text: "Your consultation takes place privately at our Greater Kailash Part 1 studio, where you can discuss your goals openly and ask every question about the steps involved.",
  location: { title: "Greater Kailash Part 1", text: "R-9, Basement, New Delhi - 110048" },
  cta: bookConsultationCta("Request Consultation"),
};

export const genderReassignmentCta: CtaBandData = {
  eyebrow: "Gender-Affirming Care • Greater Kailash Part 1",
  title: "Start the Conversation in Confidence",
  text: "Speak with Dr. Sukhbir Singh privately at Resplendent Aesthetics, R-9, Basement, Greater Kailash Part 1, New Delhi - 110048.",
  primaryCta: bookConsultationCta("Book a Confidential Consultation"),
  meta: clinicMeta.slice(0, 1),
};
