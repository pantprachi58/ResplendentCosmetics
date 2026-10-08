import type {
  CalloutData,
  CardGridData,
  CtaBandData,
  FaqData,
  TreatmentHeroData,
  VideoGalleryData,
} from "./types";
import { bookConsultationCta, clinicMeta } from "./shared";

// Content sourced from https://www.resplendentcosmetics.com/female-breast-surgery.php.
// The live page's before/after photos carry another clinic's watermark and are not used; the
// before/after slider (data/treatments/beforeAfter.ts) shows a clean clinic pair instead.

export const breastSurgeryMeta = {
  title: "Female Breast Surgery in Delhi NCR | Augmentation, Lift & Reduction | Resplendent Aesthetics",
  description:
    "Female breast surgery and breast enhancement in Greater Kailash, New Delhi: breast augmentation with implants or fat, breast lift (mastopexy) for sagging breasts, and breast reduction.",
};

export const breastSurgeryHero: TreatmentHeroData = {
  breadcrumb: "Female Breast Surgery",
  eyebrow: "Women's Aesthetic Surgery",
  title: "Female Breast Surgery — ",
  highlight: "Augmentation, Mastopexy & Reduction",
  lead: "Whether you want to increase breast size, lift and reshape sagging breasts, or reduce large, heavy breasts that cause backache, our breast procedures are planned around your anatomy and goals.",
  pills: [
    { icon: "verified", label: "US FDA-Approved Implants" },
    { icon: "event_available", label: "Day-Care Procedures" },
    { icon: "visibility_off", label: "Hidden Incisions" },
    { icon: "lock", label: "Confidential Consultation" },
  ],
  primaryCta: bookConsultationCta("Book a Breast Consultation"),
  secondaryCta: { label: "Explore the Procedures", href: "#procedures" },
  image: {
    src: "/images/procedures/12.png",
    alt: "Woman in a sports top, representing breast and body contouring",
    tag: "Women's Aesthetic Surgery",
  },
  card: {
    eyebrow: "Procedures",
    title: "Breast Surgery",
    icon: "female",
    checklist: [
      "Augmentation with silicone implants or your own fat",
      "Lift (mastopexy) to reshape and raise the breast",
      "Reduction to relieve heavy, large breasts",
      "Usually day-care, with discharge the same day",
    ],
    footLabel: "Consultation Studio",
    footValue: "R-9, Greater Kailash Part 1, New Delhi",
  },
};

export const breastSurgeryProcedures: CardGridData = {
  id: "procedures",
  eyebrow: "Our Procedures",
  title: "Choosing the Right Breast Procedure",
  columns: 3,
  cards: [
    {
      icon: "add_circle",
      title: "Breast Augmentation",
      text: "Increases breast size with a medical implant—usually silicone, placed through an incision in the crease beneath the breast—or with fat taken from the abdomen or buttocks.",
      footLabel: "Recovery",
      footValue: "Normal activity in 4–5 days",
    },
    {
      icon: "north",
      title: "Breast Lift (Mastopexy)",
      text: "A group of operations that lift or change the shape of the breast. It may involve repositioning the areola and nipple, lifting breast tissue and removing excess skin.",
      footLabel: "Best for",
      footValue: "Sagging breasts",
    },
    {
      icon: "remove_circle",
      title: "Breast Reduction",
      text: "Removes breast tissue, fat and skin, then moves the remaining tissue and nipple higher—relieving backache and other problems caused by large, heavy breasts.",
      footLabel: "Recovery",
      footValue: "Normal activity in 5–7 days",
    },
  ],
};

export const breastAugmentationFaq: FaqData = {
  eyebrow: "Breast Augmentation",
  title: "Breast Augmentation FAQs",
  intro:
    "Breast augmentation is the medical name for the ‘boob job’. It means increasing the size of the breast with a medical implant or fat. The implant is usually made of silicone and is inserted via an incision in the crease underneath the breasts. Fat can also be taken from the abdomen or buttocks and used for breast enlargement.",
  items: [
    {
      question: "Where are the incisions placed for breast implants?",
      answer:
        "There are three main incision options—inframammary (in the breast crease), periareolar (around the areola) and transaxillary (in the armpit). We prefer the inframammary incision because the scar is hidden and the results are more stable and predictable.",
    },
    {
      question: "What type of implants are best?",
      answer:
        "We use US FDA-approved, high-grade cohesive gel silicone implants that come with a guarantee and the lowest chance of rupture. They are the safest, with the most natural feel. Though they are a bit more expensive than Chinese and French implants, they have good longevity with rare chances of complications.",
    },
    {
      question: "How long is recovery? When can I exercise?",
      answer:
        "It is usually a day-care procedure with discharge the same day. Rest for 1–2 days; you can resume normal activities in 4–5 days and normal walking in 7–10 days. Avoid heavy exercise, gym, swimming and lifting heavy weights for 4–6 weeks.",
    },
  ],
};

export const breastLiftGuide: CalloutData = {
  id: "lift",
  icon: "north",
  eyebrow: "Breast Lift (Mastopexy)",
  title: "Do You Need Implants, a Lift, or Both?",
  text: "Stand in front of a mirror and look at your nipples in relation to the natural crease beneath your breasts. Adding implants without removing excess skin when the nipples sit low makes breasts sag more—and gravity makes it worse over time.",
  highlights: [
    {
      icon: "arrow_downward",
      title: "Nipples Below the Crease",
      text: "You need a lift first. If you still want a bigger size, implants can be added later.",
    },
    {
      icon: "arrow_upward",
      title: "Nipples On or Above the Crease",
      text: "Implant surgery alone is usually the best option.",
    },
    {
      icon: "forum",
      title: "Not Sure?",
      text: "Your surgeon will assess this with you at consultation.",
    },
  ],
  cta: bookConsultationCta("Book a Breast Consultation"),
};

export const breastReductionFaq: FaqData = {
  eyebrow: "Breast Reduction",
  title: "Breast Reduction FAQs",
  intro:
    "Many women find that large, heavy breasts cause backache and other physical problems. There are psychological issues as well, including a lack of self-confidence and self-esteem, and some women are subject to unwanted attention or comments about their appearance. The surgery removes breast tissue, fat and skin; the remaining underlying tissues and nipple are then moved to a higher position.",
  items: [
    {
      question: "Where are the incisions placed for breast reduction?",
      answer:
        "The inverted-T incision used to be the most popular, but it had side effects and its results didn't last as long. We now prefer the vertical incision, which gives the best scar and is more predictable and long-lasting.",
    },
    {
      question: "Is breast reduction permanent?",
      answer: "Yes, unless you gain excess weight and the remaining fat cells grow again.",
    },
    {
      question: "What should I expect after surgery?",
      answer:
        "Some swelling and bruising are expected. Suction drains usually stay in for 2–3 days, and padded bandages support the breasts for 2–3 weeks. Pain is tolerable and easily controlled with mild painkillers.",
    },
    {
      question: "When can I resume exercise?",
      answer:
        "It is usually a day-care procedure, with discharge the same day or the next morning. Rest for 2–3 days until the drains are removed; you can resume normal activities in 5–7 days and normal walking in 10–12 days. Avoid heavy exercise, gym, swimming and lifting heavy weights for 6–8 weeks.",
    },
  ],
};

export const breastSurgeryVideos: VideoGalleryData = {
  id: "videos",
  eyebrow: "Watch & Learn",
  title: "Are Breast Implants Safe?",
  videos: [{ youtubeId: "mHIPY3eKI6o", title: "Are Breast Implants Safe? — Dr. Sukhbir Singh", note: "In Hindi" }],
};

export const breastSurgeryCta: CtaBandData = {
  eyebrow: "Women's Aesthetic Surgery • Greater Kailash Part 1",
  title: "Discuss Your Breast Surgery Options in Private",
  text: "Plan augmentation, lift or reduction with Dr. Sukhbir Singh at R-9, Basement, Greater Kailash Part 1, New Delhi - 110048.",
  primaryCta: bookConsultationCta("Book a Breast Consultation"),
  meta: clinicMeta.slice(0, 1),
};
