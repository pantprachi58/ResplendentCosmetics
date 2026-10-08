import type {
  CalloutData,
  CtaBandData,
  FaqData,
  MediaCardGridData,
  ProcessData,
  TreatmentHeroData,
  VideoGalleryData,
} from "./types";
import { bookConsultationCta, clinicMeta } from "./shared";

// Content sourced from https://www.resplendentcosmetics.com/injectable-dermal-fillers.php.

const IMG = "/images/pages/dermal-fillers";

export const dermalFillersMeta = {
  title: "Dermal Fillers Treatment in Delhi | Resplendent Aesthetics",
  description:
    "Injectable dermal fillers in Greater Kailash, New Delhi for wrinkles, lips, cheeks, under-eyes, jawline and non-surgical nose reshaping, with natural-looking results.",
};

export const dermalFillersHero: TreatmentHeroData = {
  breadcrumb: "Dermal Fillers",
  eyebrow: "Non-Surgical Facial Rejuvenation",
  title: "Injectable ",
  highlight: "Dermal Fillers",
  lead: "Dermal fillers are injectable substances that add volume, lift and definition to the face. They reduce wrinkles and enhance facial features subtly, giving natural-looking results through a minimally invasive treatment.",
  pills: [
    { icon: "spa", label: "Minimally Invasive" },
    { icon: "face", label: "Natural-Looking Results" },
    { icon: "schedule", label: "Lasts Months to a Year" },
    { icon: "healing", label: "Numbing Cream for Comfort" },
  ],
  primaryCta: bookConsultationCta("Book a Filler Consultation"),
  secondaryCta: { label: "Explore Filler Treatments", href: "#filler-types" },
  image: {
    src: "/images/pages/dermal-fillers/cheek-fillers.webp",
    alt: "Dermal filler being injected into a patient's cheek",
    tag: "Non-Surgical",
  },
  card: {
    eyebrow: "Treatment at a Glance",
    title: "Dermal Fillers",
    icon: "vaccines",
    checklist: [
      "Adds volume, lift and definition",
      "Smooths fine lines and wrinkles",
      "Results last several months to a year",
      "Administered by qualified professionals",
    ],
    footLabel: "Consultation Studio",
    footValue: "R-9, Greater Kailash Part 1, New Delhi",
  },
};

export const dermalFillerTypes: MediaCardGridData = {
  id: "filler-types",
  eyebrow: "Our Filler Treatments",
  title: "Dermal Filler Services",
  intro: "Choose a filler treatment based on your specific needs—each is tailored to the area and the result you want.",
  note: "Prices are indicative",
  columns: 3,
  cards: [
    {
      image: { src: `${IMG}/wrinkle-fillers.webp`, alt: "Filler injection near the eye to smooth wrinkles" },
      title: "Wrinkle Fillers",
      text: "Smooth fine lines and wrinkles on the forehead, cheeks and around the eyes. The filler used depends on the depth of the lines.",
      bullets: ["Softer, smoother skin", "Reduced fine lines and wrinkles"],
      footLabel: "Indicative cost",
      footValue: "₹15,000–35,000 / ml",
    },
    {
      image: { src: `${IMG}/lip-fillers.webp`, alt: "Lip filler being injected" },
      title: "Lip Fillers",
      text: "Add volume and shape, define the lip border and correct asymmetry for fuller lips.",
      bullets: ["Fuller, plumper lips", "Enhanced definition and shape"],
      footLabel: "Indicative cost",
      footValue: "₹20,000–50,000 / session",
    },
    {
      image: { src: `${IMG}/cheek-fillers.webp`, alt: "Cheek filler treatment" },
      title: "Cheek Fillers",
      text: "Add volume to the cheeks, lift sagging cheeks and improve facial contours for a sculpted, youthful look.",
      bullets: ["Fuller cheeks", "Lifted, enhanced features"],
    },
    {
      image: { src: `${IMG}/under-eye-fillers.webp`, alt: "Under-eye filler treatment" },
      title: "Under-Eye Fillers",
      text: "Reduce hollows and the appearance of dark circles for a smoother, brighter and more refreshed under-eye area.",
      bullets: ["Less visible dark circles", "Reduced hollowness"],
      footLabel: "Indicative cost",
      footValue: "₹18,000–25,000 / ml",
    },
    {
      image: { src: `${IMG}/jawline-fillers.webp`, alt: "Jawline filler treatment" },
      title: "Jawline Fillers",
      text: "Define and sharpen a weak or receding jawline for a more balanced facial appearance.",
      bullets: ["Defined, sculpted jawline", "Improved facial balance"],
    },
    {
      image: { src: `${IMG}/nose-fillers.webp`, alt: "Nose filler for non-surgical rhinoplasty" },
      title: "Nose Fillers",
      text: "A non-surgical rhinoplasty that can correct a bump or asymmetry and subtly refine the shape of the nose.",
      bullets: ["Improved nasal symmetry", "Non-surgical alternative to rhinoplasty"],
    },
  ],
};

export const dermalFillersProcess: ProcessData = {
  eyebrow: "What to Expect",
  title: "Your Filler Treatment",
  intro: "A personalised, minimally invasive treatment focused on subtle, natural-looking results.",
  steps: [
    {
      icon: "forum",
      title: "Consultation",
      text: "We understand your concerns and goals so the right filler can be chosen for the treatment area and how long you want results to last.",
      footValue: "Personalised Plan",
    },
    {
      icon: "healing",
      title: "Numbing",
      text: "A numbing cream is applied to avoid or minimise discomfort during the injections.",
      footValue: "Mild Discomfort at Most",
    },
    {
      icon: "vaccines",
      title: "Injection",
      text: "The filler is injected to add volume, lift and definition, enhancing features subtly rather than dramatically.",
      footValue: "Natural-Looking Change",
    },
    {
      icon: "ac_unit",
      title: "Aftercare",
      text: "Swelling and bruising are common. A cold compress, keeping your head elevated and avoiding strenuous activity help them settle.",
      footValue: "Results Last Months to a Year",
    },
  ],
};

export const dermalFillersCost: CalloutData = {
  icon: "payments",
  eyebrow: "Indicative Cost",
  title: "How Much Do Dermal Fillers Cost in Delhi?",
  text: "Cost depends on the type of filler, the amount needed, the doctor's experience and the result you want. Your doctor will confirm the cost at consultation.",
  highlights: [
    { icon: "water_drop", title: "General Guide", text: "Around ₹15,000–25,000 per ml of filler" },
    { icon: "science", title: "Type & Brand", text: "Different fillers and brands are priced differently" },
    { icon: "straighten", title: "Amount Needed", text: "Depends on the area and the depth of correction" },
  ],
  cta: bookConsultationCta("Get a Personal Quote"),
};

export const dermalFillersVideos: VideoGalleryData = {
  id: "videos",
  eyebrow: "Watch & Learn",
  title: "Dr. Sukhbir Singh Explains Dermal Fillers",
  videos: [{ youtubeId: "J8-2ob0Y0ZE", title: "Dermal Fillers Explained", note: "In Hindi" }],
};

export const dermalFillersFaq: FaqData = {
  eyebrow: "Common Questions",
  title: "Dermal Filler FAQs",
  items: [
    {
      question: "Who can inject dermal fillers?",
      answer:
        "Dermal fillers should be administered by an expert plastic surgeon, or by dermatologists and physician assistants trained in aesthetic medicine.",
    },
    {
      question: "How long do dermal fillers last?",
      answer:
        "Dermal fillers last from a few months to a year, depending on the type of filler, your metabolism and the treatment area.",
    },
    {
      question: "Is dermal filler treatment painful?",
      answer:
        "You may feel mild discomfort during the procedure. A numbing cream is applied to avoid or minimise it.",
    },
    {
      question: "How do I choose the right filler?",
      answer:
        "A qualified professional chooses the filler based on your needs and goals—the result you want, the treatment area and how long you want it to last.",
    },
    {
      question: "How can I reduce swelling after filler injections?",
      answer:
        "Swelling is a common side effect. A cold compress, keeping your head elevated and avoiding strenuous activity usually help it settle.",
    },
    {
      question: "How can I cover bruises from filler injections?",
      answer:
        "Bruising is common after fillers. Concealer or make-up and a cold compress help, and bruises fade gradually over time.",
    },
    {
      question: "Are dermal fillers safe?",
      answer:
        "Dermal fillers are safe when administered by qualified professionals. Possible side effects include bruising, swelling, infection and allergic reactions.",
    },
  ],
};

export const dermalFillersCta: CtaBandData = {
  eyebrow: "Facial Aesthetics • Greater Kailash Part 1",
  title: "Enhance Your Features, Naturally",
  text: "Discuss the right filler for you with Dr. Sukhbir Singh's team at R-9, Basement, Greater Kailash Part 1, New Delhi - 110048.",
  primaryCta: bookConsultationCta("Book a Filler Consultation"),
  meta: clinicMeta.slice(0, 1),
};
