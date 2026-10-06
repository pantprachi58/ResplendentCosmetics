import type {
  CalloutData,
  CtaBandData,
  FaqData,
  MediaCardGridData,
  TreatmentHeroData,
  TreatmentOverviewData,
} from "./types";
import { bookConsultationCta, clinicMeta } from "./shared";

// Content sourced from https://www.resplendentcosmetics.com/body-tightening.php.

const IMG = "/images/pages/body-tightening";

export const bodyTighteningMeta = {
  title: "FaceTite, BodyTite & AccuTite Skin Tightening in Delhi | Resplendent Aesthetics",
  description:
    "Minimally invasive radiofrequency-assisted lipolysis (RFAL) for skin tightening and contouring—FaceTite, BodyTite and AccuTite—in Greater Kailash, New Delhi.",
};

export const bodyTighteningHero: TreatmentHeroData = {
  breadcrumb: "Body Tightening",
  eyebrow: "Minimally Invasive Skin Tightening",
  title: "FaceTite, BodyTite & ",
  highlight: "AccuTite",
  lead: "FaceTite, BodyTite and AccuTite are advanced, minimally invasive treatments for skin tightening and contouring. Using radiofrequency-assisted lipolysis (RFAL), they melt fat, tighten skin and stimulate collagen—without the large scars of traditional surgery.",
  pills: [
    { icon: "vaccines", label: "Local Anaesthesia" },
    { icon: "bolt", label: "Radiofrequency (RFAL)" },
    { icon: "event_available", label: "Minimal Downtime" },
    { icon: "trending_up", label: "Improves for Up to 12 Months" },
  ],
  primaryCta: bookConsultationCta("Book a Tightening Consultation"),
  secondaryCta: { label: "Compare the Treatments", href: "#technologies" },
  card: {
    eyebrow: "Treatment at a Glance",
    title: "RFAL Skin Tightening",
    icon: "bolt",
    checklist: [
      "Tightens mild to moderate skin laxity",
      "Melts stubborn fat while stimulating collagen",
      "Tiny incision, minimal scarring",
      "Results visible immediately, best after 6 weeks",
    ],
    footLabel: "Consultation Studio",
    footValue: "R-9, Greater Kailash Part 1, New Delhi",
  },
};

export const bodyTighteningTechnologies: MediaCardGridData = {
  id: "technologies",
  eyebrow: "Our Technologies",
  title: "Choosing the Right Treatment",
  intro: "All three belong to the radiofrequency-assisted lipolysis (RFAL) family of technologies.",
  columns: 3,
  cards: [
    {
      image: { src: `${IMG}/facetite.webp`, alt: "Specialist assessing a patient's facial contours for FaceTite" },
      title: "FaceTite",
      text: "Facial contouring for mild to moderate skin laxity on the face and neck. A thin probe delivers radiofrequency heat through a tiny incision, melting fat and tightening skin—an alternative to a traditional facelift.",
      footLabel: "Ideal for",
      footValue: "Face & neck",
    },
    {
      image: { src: `${IMG}/bodytite.webp`, alt: "Illustration of a contoured waist and thighs after BodyTite" },
      title: "BodyTite",
      text: "Liquefies and removes targeted fat, coagulates blood vessels and tightens skin—reducing fat without saggy skin, including after weight loss or with ageing.",
      footLabel: "Downtime",
      footValue: "1–2 up to 10 days",
    },
    {
      image: { src: `${IMG}/accutite.webp`, alt: "Specialist using a precision skin-tightening device on a patient's face" },
      title: "AccuTite",
      text: "The smallest contraction device in cosmetic medicine, applying focal radiofrequency to hard-to-reach areas with pinpoint accuracy—avoiding more invasive surgery.",
      footLabel: "Ideal for",
      footValue: "Small, precise areas",
    },
  ],
};

export const faceTiteComparison: TreatmentOverviewData = {
  eyebrow: "FaceTite vs. Facelift",
  title: "Which One Is Right for You?",
  intro:
    "FaceTite is a less invasive option for mild to moderate signs of ageing, while a traditional facelift suits severe sagging or advanced ageing.",
  media: {
    src: `${IMG}/skin-tightening-consultation.webp`,
    alt: "Specialist examining a patient's face during a skin-tightening consultation",
    tag: "Facial Contouring",
    title: "How FaceTite Works",
    text: "Radiofrequency energy heats the deeper layers of skin through a thin probe inserted via a tiny incision. It melts fat and stimulates collagen remodelling for firmer, tighter skin.",
    checklist: ["Performed under local anaesthesia", "Minimal downtime", "Results keep improving over several months"],
  },
  options: [
    {
      title: "FaceTite",
      icon: "check_circle",
      tag: "Minimally Invasive",
      featured: true,
      facts: [
        { label: "Downtime", value: "Minimal" },
        { label: "Anaesthesia", value: "Local" },
        { label: "Scarring", value: "Small incision" },
      ],
      bullets: ["Subtle to moderate improvement", "Ideal for mild to moderate sagging"],
    },
    {
      title: "Traditional Facelift",
      icon: "content_cut",
      tag: "Surgical",
      muted: true,
      facts: [
        { label: "Downtime", value: "Extended" },
        { label: "Anaesthesia", value: "General" },
        { label: "Scarring", value: "Longer incision" },
      ],
      bullets: ["Dramatic changes", "Ideal for severe sagging or advanced ageing"],
    },
  ],
};

export const bodyTighteningCost: CalloutData = {
  icon: "payments",
  eyebrow: "Indicative Cost",
  title: "FaceTite, BodyTite & AccuTite Cost in Delhi",
  text: "Cost depends on the extent of treatment, the body part and any additional services. Contact us for a detailed, accurate estimate.",
  highlights: [
    { icon: "accessibility_new", title: "Per Body Part", text: "Typically INR 40,000–50,000" },
    { icon: "layers", title: "Multiple Areas", text: "Several areas can be treated in one visit, about 15 minutes per zone" },
    { icon: "checkroom", title: "Aftercare", text: "Go home the same day; a compression garment may be recommended" },
  ],
  cta: bookConsultationCta("Get a Personal Quote"),
};

export const bodyTighteningFaq: FaqData = {
  eyebrow: "Common Questions",
  title: "FAQs on FaceTite, BodyTite & AccuTite",
  items: [
    {
      question: "Is FaceTite safe?",
      answer: "Yes, it is a safe procedure when performed by qualified professionals, with minimal risk and minimal invasiveness.",
    },
    {
      question: "How long does the procedure take?",
      answer: "Around 1–2 hours, depending on the area being treated.",
    },
    {
      question: "Are there side effects?",
      answer: "Common side effects include mild swelling, redness and bruising, which usually subside within a few days.",
    },
    {
      question: "How long do the results last?",
      answer: "Results typically last several years, with the best results visible up to 12 months after the procedure.",
    },
    {
      question: "How many FaceTite sessions will I need?",
      answer: "Most patients achieve their desired results after a single session; additional treatments can be discussed if needed.",
    },
    {
      question: "Is BodyTite safe?",
      answer:
        "BodyTite is well tolerated with a quick recovery. The device is FDA-cleared for use on the stomach, arms, chest, knees and thighs, and a computer regulates the temperature to lower the risk of burns.",
    },
    {
      question: "What areas can be treated?",
      answer:
        "With BodyTite, the stomach, arms, chest, knees and inner/outer thighs are the most common zones; multiple areas can be treated in one visit, about 15 minutes each. AccuTite treats the brows, under-eye area, nasolabial folds, lower face and neck, as well as the underarms, upper arms, abdominal etching, inner thighs and knees.",
    },
    {
      question: "How quickly will I see results?",
      answer: "Results can be seen immediately, with the best results after 6 weeks and continuing to improve for up to 12 months.",
    },
    {
      question: "Is AccuTite safe?",
      answer:
        "AccuTite belongs to the RFAL family of technologies, which has over 26 peer-reviewed clinical publications showing a high level of safety. Built-in safeguards ensure uniform, gentle heating.",
    },
  ],
};

export const bodyTighteningCta: CtaBandData = {
  eyebrow: "Skin Tightening • Greater Kailash Part 1",
  title: "Tighten and Contour Without Major Surgery",
  text: "Find out whether FaceTite, BodyTite or AccuTite suits you at R-9, Basement, Greater Kailash Part 1, New Delhi - 110048.",
  primaryCta: bookConsultationCta("Book a Tightening Consultation"),
  meta: clinicMeta.slice(0, 1),
};
