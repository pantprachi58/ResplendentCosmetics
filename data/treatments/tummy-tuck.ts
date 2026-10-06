import type { CalloutData, CardGridData, CtaBandData, ProcessData, TreatmentHeroData } from "./types";
import { bookConsultationCta, clinicMeta } from "./shared";

// Content sourced from https://www.resplendentcosmetics.com/tummy-tuck-surgery.php.

const IMG = "/images/pages/tummy-tuck";

export const tummyTuckMeta = {
  title: "Tummy Tuck (Abdominoplasty) Surgery in Delhi | Resplendent Aesthetics",
  description:
    "Full, mini and extended tummy tuck (abdominoplasty) in Greater Kailash, New Delhi to remove excess skin and fat and repair separated abdominal muscles.",
};

export const tummyTuckHero: TreatmentHeroData = {
  breadcrumb: "Tummy Tuck",
  eyebrow: "Body Contouring Surgery",
  title: "Tummy Tuck — ",
  highlight: "Abdominoplasty",
  lead: "A tummy tuck is cosmetic surgery that removes excess fat and loose skin around the abdomen and restores weakened or separated abdominal muscles, for a flatter, smoother, toned abdomen. It can also remove stretch marks and improve posture.",
  pills: [
    { icon: "fitness_center", label: "Repairs Abdominal Muscles" },
    { icon: "content_cut", label: "Removes Loose Skin" },
    { icon: "water_drop", label: "Liposuction for Stubborn Fat" },
    { icon: "wc", label: "For Men & Women" },
  ],
  primaryCta: bookConsultationCta("Book a Tummy Tuck Consultation"),
  secondaryCta: { label: "Compare Tummy Tuck Types", href: "#types" },
  image: {
    src: `${IMG}/tummy-tuck-markings.jpg`,
    alt: "Surgeon marking a patient's abdomen before a tummy tuck",
    tag: "Abdominoplasty",
    captionTitle: "A flatter, firmer abdominal profile",
    captionText: "Full, mini and extended tummy tuck options",
  },
};

export const tummyTuckTypes: CardGridData = {
  id: "types",
  eyebrow: "Types of Tummy Tuck",
  title: "Choosing the Right Procedure",
  intro:
    "Stubborn abdominal fat that resists diet and exercise can be removed with liposuction, and the skin is then tightened for a flatter profile.",
  columns: 3,
  cards: [
    {
      icon: "crop_free",
      title: "Full Tummy Tuck",
      text: "A comprehensive procedure for the entire abdomen—removing excess skin, repairing separated muscles and creating a firmer appearance.",
    },
    {
      icon: "crop_7_5",
      title: "Mini Tummy Tuck",
      text: "Less invasive and focused on the lower abdomen—ideal for a small amount of loose skin below the navel.",
    },
    {
      icon: "open_in_full",
      title: "Extended Tummy Tuck",
      text: "For greater skin laxity—removes excess skin from the abdomen, flanks and hips for a more comprehensive contour.",
    },
  ],
};

export const tummyTuckRecovery: ProcessData = {
  eyebrow: "Recovery",
  title: "Recovery After Abdominoplasty",
  intro: "Recovery typically takes place in three phases, with regular follow-ups to monitor your progress.",
  steps: [
    {
      icon: "bed",
      title: "Week 1",
      text: "Expect some swelling and discomfort. Rest completely as advised, and wear compression garments to reduce swelling and support healing.",
      footValue: "Rest & Compression",
    },
    {
      icon: "directions_walk",
      title: "Weeks 2–4",
      text: "Gradually ease back into lighter activities, avoiding heavy lifting and strenuous exercise.",
      footValue: "Light Activity Only",
    },
    {
      icon: "fitness_center",
      title: "Week 6 Onwards",
      text: "Return to normal activities and restart exercise, following your plastic surgeon's instructions.",
      footValue: "Back to Normal",
    },
    {
      icon: "event_available",
      title: "Follow-Up Visits",
      text: "Regular follow-ups are essential to avoid complications and ensure a proper recovery.",
      footValue: "Throughout Recovery",
    },
  ],
};

export const tummyTuckCandidates: CalloutData = {
  icon: "person_check",
  eyebrow: "Who It Suits",
  title: "Is a Tummy Tuck Right for You?",
  text: "The procedure is suitable for healthy men and women who want a flatter, more toned abdomen.",
  highlights: [
    { icon: "pregnant_woman", title: "After Pregnancies", text: "Women who have had several pregnancies may benefit." },
    { icon: "texture", title: "Saggy Skin", text: "People with loose, sagging abdominal skin." },
    { icon: "monitor_weight", title: "After Major Weight Loss", text: "A great option for men and women who were once obese." },
  ],
  aside: {
    icon: "payments",
    title: "Indicative Cost",
    subtitle: "Confirmed at Consultation",
    items: ["INR 1.75–2.75 lakh"],
    text: "Cost depends on the complexity of the procedure, the surgeon's expertise and the facilities used.",
    cta: bookConsultationCta("Get a Personal Quote"),
  },
};

export const tummyTuckCta: CtaBandData = {
  eyebrow: "Body Contouring • Greater Kailash Part 1",
  title: "Take the First Step Towards a Flatter Abdomen",
  text: "Book a consultation at R-9, Basement, Greater Kailash Part 1, New Delhi - 110048, or reach us by phone, email or WhatsApp.",
  primaryCta: bookConsultationCta("Book a Tummy Tuck Consultation"),
  meta: clinicMeta.slice(0, 1),
};
