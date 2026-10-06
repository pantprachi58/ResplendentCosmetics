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

// Content sourced from https://www.resplendentcosmetics.com/six-pack-plastic-surgery.php.
// "Instant", "definite" and unconditional "permanent" claims are restated in line with the live FAQ
// (results last with a balanced diet and exercise). The live before/after image is a stock photo and not used.

const IMG = "/images/pages/six-pack-abs";

export const sixPackAbsMeta = {
  title: "6-Pack Abs Surgery (Abdominal Etching) in Delhi | Resplendent Aesthetics",
  description:
    "Six-pack abs surgery (abdominal etching) in Greater Kailash, New Delhi: precise fat removal and muscle sculpting for defined abs. Indicative cost ₹1–1.75 lakh.",
};

export const sixPackAbsHero: TreatmentHeroData = {
  breadcrumb: "6-Pack Abs Surgery",
  eyebrow: "Body Contouring Surgery",
  title: "6-Pack Abs Surgery — ",
  highlight: "Abdominal Etching",
  lead: "When diet and exercise alone don't reveal your abdominal muscles, six-pack abs surgery removes excess fat and sculpts the underlying muscle structure for sculpted, well-defined abs—without months of waiting for results.",
  pills: [
    { icon: "content_cut", label: "Small Incisions" },
    { icon: "timer", label: "2–3 Hours" },
    { icon: "event_available", label: "Normal Activity in 7–10 Days" },
    { icon: "wc", label: "For Men & Women" },
  ],
  primaryCta: bookConsultationCta("Book an Abs Consultation"),
  secondaryCta: { label: "Watch Dr. Sukhbir Explain", href: "#videos", iconLeading: "play_circle" },
  image: {
    src: `${IMG}/six-pack-abs.jpg`,
    alt: "Toned male abdomen with stubborn fat being pinched at the waist",
    tag: "Abdominal Etching",
    captionTitle: "Defined abs, sculpted by precise fat removal",
    captionText: "Results last with a balanced diet and exercise",
  },
};

export const sixPackAbsBenefits: CardGridData = {
  eyebrow: "Benefits",
  title: "Key Benefits of 6-Pack Abs Surgery",
  columns: 4,
  cards: [
    { icon: "bolt", title: "Faster Results", text: "Defined abdominal muscles without spending months or years of training." },
    { icon: "all_inclusive", title: "Long-Lasting", text: "Results last when you maintain a balanced diet and regular exercise." },
    { icon: "content_cut", title: "Small Incisions", text: "Precise fat removal through a few small incisions." },
    { icon: "event_available", title: "Quicker Recovery", text: "Comparatively low downtime; normal activity in 7–10 days." },
  ],
};

export const sixPackAbsProcess: ProcessData = {
  eyebrow: "The Procedure",
  title: "6-Pack Abs Surgery Step by Step",
  intro: "A well-defined sequence from assessment to recovery.",
  steps: [
    {
      icon: "forum",
      title: "Consultation & Evaluation",
      text: "Your fat percentage and muscle definition are assessed to decide whether you are a suitable candidate.",
      footValue: "Candidacy Confirmed",
    },
    {
      icon: "vaccines",
      title: "Anaesthesia",
      text: "Anaesthesia is administered and the right surgical approach is chosen based on your assessment.",
      footValue: "Tailored Approach",
    },
    {
      icon: "fitness_center",
      title: "Fat Removal & Sculpting",
      text: "Excess fat is removed and the underlying muscle definition is sculpted for a six-pack appearance.",
      footValue: "About 2–3 Hours",
    },
    {
      icon: "self_care",
      title: "Recovery",
      text: "Expect some discomfort for a couple of weeks. Compression garments aid healing and reduce swelling.",
      footValue: "Normal Activity in 7–10 Days",
    },
  ],
};

export const sixPackAbsCandidates: CalloutData = {
  icon: "person_check",
  eyebrow: "Who It Suits & Aftercare",
  title: "Is 6-Pack Abs Surgery Right for You?",
  text: "Ideal candidates are in good health, have stubborn belly fat despite a healthy diet and exercise, are non-smokers (or willing to quit before surgery), and have realistic expectations.",
  highlights: [
    { icon: "checkroom", title: "Compression Garments", text: "Wear them to support healing and reduce swelling." },
    { icon: "do_not_disturb_on", title: "Avoid Strenuous Activity", text: "For a few weeks after surgery." },
    { icon: "restaurant", title: "Healthy Diet & Follow-Ups", text: "Maintain results and attend every follow-up." },
  ],
  aside: {
    icon: "payments",
    title: "Indicative Cost",
    subtitle: "Confirmed at Consultation",
    items: ["₹1–1.75 lakh"],
    text: "Cost depends on the surgeon's expertise, the facility and the complexity of the procedure.",
    cta: bookConsultationCta("Get a Personal Quote"),
  },
};

export const sixPackAbsVideos: VideoGalleryData = {
  id: "videos",
  eyebrow: "Watch & Learn",
  title: "Dr. Sukhbir Singh on 6-Pack Abs Surgery",
  videos: [{ youtubeId: "G-PnGGWkbXU", title: "Six Pack Abs Surgery — Get Abs Without Workout" }],
};

export const sixPackAbsFaq: FaqData = {
  eyebrow: "Common Questions",
  title: "FAQs on 6-Pack Abs Surgery",
  items: [
    {
      question: "What is 6-pack abs surgery (abdominal etching)?",
      answer: "A cosmetic procedure that removes excess fat from the abdomen and sculpts the muscles to give a six-pack appearance.",
    },
    {
      question: "How long does the procedure take?",
      answer: "Usually no more than 2–3 hours, depending on the complexity of the procedure.",
    },
    {
      question: "What can I expect during recovery?",
      answer:
        "Mild swelling and bruising, with discomfort lasting a few days. Most swelling subsides within about 2 weeks, and full recovery takes around 3–6 weeks.",
    },
    {
      question: "Is 6-pack abs surgery permanent?",
      answer: "The results are long-lasting, but a regular diet and normal exercise are essential to maintain them.",
    },
    {
      question: "Will I need a special diet or exercise plan afterwards?",
      answer: "Yes, but it doesn't need to be rigorous—a balanced diet and mild exercise are best.",
    },
    {
      question: "Can it be combined with other body contouring procedures?",
      answer: "Yes. For example, surgeons may perform six-pack sculpting after a tummy tuck.",
    },
    {
      question: "Is 6-pack abs surgery suitable for both men and women?",
      answer: "Yes. It is more popular among men, but women can also choose it.",
    },
  ],
};

export const sixPackAbsCta: CtaBandData = {
  eyebrow: "Body Contouring • Greater Kailash Part 1",
  title: "Ready for Sculpted, Defined Abs?",
  text: "Find out if you're a candidate for abdominal etching at R-9, Basement, Greater Kailash Part 1, New Delhi - 110048.",
  primaryCta: bookConsultationCta("Book an Abs Consultation"),
  meta: clinicMeta.slice(0, 1),
};
