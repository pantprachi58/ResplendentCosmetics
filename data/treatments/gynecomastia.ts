import type {
  CalloutData,
  CardGridData,
  CtaBandData,
  FaqData,
  ProcessData,
  TreatmentHeroData,
  VideoGalleryData,
} from "./types";
import { bookConsultationCta, clinicMeta } from "./shared";

// Content sourced from https://www.resplendentcosmetics.com/gynecomastia-surgery-in-delhi.php.
// The live before/after photos are watermarked by another clinic (or are stock), so none are used.
// The stray "Read also: Hair Transplantation" link and self-promotional "best doctor" FAQ are omitted.

export const gynecomastiaMeta = {
  title: "Gynecomastia (Male Breast Reduction) Surgery in Delhi | Resplendent Aesthetics",
  description:
    "Gynecomastia surgery in Greater Kailash, New Delhi: liposuction and gland excision for a flatter, masculine chest. Local anaesthesia from ₹50,000.",
};

export const gynecomastiaHero: TreatmentHeroData = {
  breadcrumb: "Gynecomastia",
  eyebrow: "Men's Aesthetic Surgery",
  title: "Gynecomastia — ",
  highlight: "Male Breast Reduction",
  lead: "Gynecomastia causes enlarged breasts in men and boys, sometimes with pain or sensitivity around the nipples. It can be linked to hormonal imbalance, a medication or a medical condition—and it is treatable. Surgery removes excess glandular tissue and fat for a flatter, more masculine chest.",
  pills: [
    { icon: "vaccines", label: "Usually Local Anaesthesia" },
    { icon: "home", label: "Home the Same Day" },
    { icon: "work", label: "Office in 2–3 Days" },
    { icon: "visibility_off", label: "Small Incisions" },
  ],
  primaryCta: bookConsultationCta("Book a Gynecomastia Consultation"),
  secondaryCta: { label: "Watch Gynecomastia Explained", href: "#videos", iconLeading: "play_circle" },
  image: {
    src: "/images/procedures/11.png",
    alt: "Defined, flat male chest contour",
    tag: "Male Breast Reduction",
  },
  card: {
    eyebrow: "Procedure at a Glance",
    title: "Male Breast Reduction",
    icon: "man",
    checklist: [
      "Liposuction removes excess fat",
      "Glandular tissue excised through a small areolar incision",
      "Chest reshaped for a natural masculine contour",
      "Pressure garment worn during recovery",
    ],
    footLabel: "Consultation Studio",
    footValue: "R-9, Greater Kailash Part 1, New Delhi",
  },
};

export const gynecomastiaBenefits: CardGridData = {
  eyebrow: "Benefits",
  title: "Benefits of Male Breast Reduction",
  columns: 3,
  cards: [
    { icon: "man", title: "Masculine Chest Contour", text: "A flatter chest and a more masculine appearance." },
    { icon: "healing", title: "Greater Comfort", text: "Removes excess tissue that can cause tenderness and chafing." },
    { icon: "self_improvement", title: "Confidence & Well-Being", text: "Can ease anxiety and social discomfort about your chest." },
    { icon: "checkroom", title: "Better Clothing Fit", text: "Clothes fit better, without self-consciousness." },
    { icon: "pool", title: "More Active Life", text: "Swimming, sport and other activities become easier." },
    { icon: "visibility_off", title: "Minimal Scarring", text: "Tiny incisions and aftercare keep scars minimal." },
  ],
};

export const gynecomastiaProcess: ProcessData = {
  eyebrow: "The Procedure",
  title: "How Gynecomastia Surgery Works",
  intro: "Excess glandular tissue and fat are removed to achieve a flatter chest contour.",
  steps: [
    {
      icon: "forum",
      title: "Consultation",
      text: "An in-depth review of your medical history and a physical examination prepare you for surgery.",
      footValue: "Medical History & Exam",
    },
    {
      icon: "vaccines",
      title: "Local Anaesthesia",
      text: "On the day, local anaesthesia is given and small incisions are made around the areola or under the arm.",
      footValue: "Small Incisions",
    },
    {
      icon: "healing",
      title: "Fat & Gland Removal",
      text: "Excess fat is removed with liposuction, the firm glandular tissue is excised, and the chest is reshaped for a natural finish.",
      footValue: "Masculine Contour",
    },
    {
      icon: "self_care",
      title: "Recovery & Follow-Up",
      text: "Incisions are closed, you are monitored, then go home. Healing is checked at follow-up visits as swelling settles.",
      footValue: "Normal Activity in 2–3 Days",
    },
  ],
};

export const gynecomastiaCandidates: CalloutData = {
  icon: "person_check",
  eyebrow: "Who It Suits",
  title: "Is Gynecomastia Surgery Right for You?",
  text: "Surgery is best for men who are past puberty, physically healthy with a stable weight, and have realistic expectations. If you are overweight, losing weight may resolve enlarged breasts first.",
  highlights: [
    { icon: "fitness_center", title: "Persistent Tissue", text: "Glandular chest tissue that remains despite fitness and diet." },
    { icon: "cake", title: "Past Puberty", text: "Usually after about 18–20, once pubertal changes have settled." },
    { icon: "monitor_weight", title: "Stable Weight", text: "Healthy and not overweight, with realistic expectations." },
  ],
  aside: {
    icon: "payments",
    title: "Indicative Cost",
    subtitle: "Confirmed at Consultation",
    items: ["Local anaesthesia: about ₹50,000", "General anaesthesia: about ₹1,00,000"],
    cta: bookConsultationCta("Get a Personal Quote"),
  },
};

export const gynecomastiaVideos: VideoGalleryData = {
  id: "videos",
  eyebrow: "Watch & Learn",
  title: "Gynecomastia: Causes, Symptoms & Treatment",
  videos: [{ youtubeId: "m84PTM_t8r8", title: "Gynecomastia — Causes, Signs, Diagnosis and Treatment" }],
};

export const gynecomastiaFaq: FaqData = {
  eyebrow: "Common Questions",
  title: "FAQs on Gynecomastia Surgery",
  items: [
    {
      question: "Is gynecomastia surgery high risk?",
      answer:
        "It is considered safe when carried out after thorough assessment by experienced professionals. As with any surgery, there are risks such as scarring, swelling and asymmetry.",
    },
    {
      question: "What are the essential steps of the procedure?",
      answer:
        "Male breast reduction involves removing excess fat with liposuction, followed by excision of the glandular tissue through an incision within the areola.",
    },
    {
      question: "Why surgery and not just exercise?",
      answer:
        "The glandular tissue is firm and fat is trapped within it, so it cannot be removed by weight loss and exercise alone. Surgery is safe and helps restore self-esteem.",
    },
    {
      question: "What is the recommended age for the procedure?",
      answer:
        "Many boys have some fat and glandular tissue during puberty, which usually decreases towards 18 and has mostly disappeared by 20. If it persists beyond that, surgical correction is needed.",
    },
    {
      question: "What anaesthesia is used, and is it painful?",
      answer:
        "It is mostly done as an outpatient procedure under local anaesthesia. Recovery is quick and you go home straight afterwards, though you may feel discomfort and tenderness for several days.",
    },
    {
      question: "What precautions should I take? When can I exercise?",
      answer:
        "Don't drive straight after surgery, rest completely that day, and wear the pressure garment continuously to reduce the chance of a haematoma. You can return to the office and walking in 2–3 days, but avoid exercise, gym and swimming for 6–8 weeks.",
    },
  ],
};

export const gynecomastiaCta: CtaBandData = {
  eyebrow: "Men's Aesthetic Surgery • Greater Kailash Part 1",
  title: "Get a Flatter, More Masculine Chest",
  text: "Have your chest assessed by Dr. Sukhbir Singh at R-9, Basement, Greater Kailash Part 1, New Delhi - 110048.",
  primaryCta: bookConsultationCta("Book a Gynecomastia Consultation"),
  meta: clinicMeta.slice(0, 1),
};
