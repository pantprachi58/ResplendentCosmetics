import type { CardGridData, CtaBandData, MediaCardGridData, TreatmentHeroData, TreatmentOverviewData } from "./types";
import { bookConsultationCta, clinicMeta } from "./shared";

// Content and photos sourced from https://www.resplendentcosmetics.com/thread-lift.php.
// The live page's FAQ block is a copy of the PRP FAQs and its meta description is about PRP,
// so neither is reused here. The doctor's first-person commentary is attributed to Dr. Sukhbir Singh.

const IMG = "/images/pages/thread-lift";

export const threadLiftMeta = {
  title: "Thread Lift (Non-Surgical Face Lift) in Delhi | Resplendent Aesthetics",
  description:
    "Non-surgical thread lift with fourth-generation double-needle PCLA threads in Greater Kailash, New Delhi, for jawline, cheek, neck and brow contouring.",
};

export const threadLiftHero: TreatmentHeroData = {
  breadcrumb: "Thread Lift",
  eyebrow: "Non-Surgical Lifting & Contouring",
  title: "Thread Lift — ",
  highlight: "Reshaping & Contouring",
  lead: "Dr. Sukhbir Singh uses fourth-generation double-needle PCLA threads to reshape and contour the face. Threads support sagging skin and help relocate fat pads for a naturally contoured look—without surgery.",
  pills: [
    { icon: "spa", label: "Non-Surgical" },
    { icon: "all_inclusive", label: "Results Up to 18 Months" },
    { icon: "event_available", label: "Visible Results in 3 Weeks" },
    { icon: "wc", label: "For Men & Women" },
  ],
  primaryCta: bookConsultationCta("Book a Thread Lift Consultation"),
  secondaryCta: { label: "See Patient Results", href: "#results" },
  card: {
    eyebrow: "Treatment at a Glance",
    title: "PCLA Thread Lift",
    icon: "face",
    checklist: [
      "Supports sagging skin and relocates fat pads",
      "Treats jawline, cheeks, double chin, brows and neck",
      "Fourth-generation threads: less pain, faster recovery",
      "Also improves skin texture and glow",
    ],
    footLabel: "Consultation Studio",
    footValue: "R-9, Greater Kailash Part 1, New Delhi",
  },
};

export const threadLiftCandidates: CardGridData = {
  eyebrow: "Who It Suits",
  title: "Ideal Candidates for a Thread Lift",
  intro:
    "Patients who have lost weight, or plan to, often want a natural contoured look and face issues such as sagging skin and a double chin.",
  columns: 3,
  cards: [
    {
      icon: "monitor_weight",
      title: "After Weight Loss",
      text: "Patients with obesity concerns who have lost—or plan to lose—weight and want a contoured face.",
    },
    {
      icon: "favorite",
      title: "Ages 26–35, Pre-Wedding",
      text: "Younger patients planning to get married who want natural facial contouring.",
    },
    {
      icon: "face_retouching_natural",
      title: "Ages 40–60",
      text: "Patients who want a slimmer face shape with correction of sagging skin.",
    },
  ],
};

export const threadLiftTechniques: TreatmentOverviewData = {
  eyebrow: "Perfecting the Technique",
  title: "Specialised Thread Lift Techniques",
  intro:
    "For mild to moderate lifting, a combination plan is often best. Threads can be combined with energy-based devices, botulinum toxin and hyaluronic acid fillers for a natural, subtle 360-degree transformation.",
  media: {
    src: `${IMG}/result-01.jpeg`,
    alt: "Thread lift patient before and after jawline contouring",
    tag: "Before & After",
    title: "Dr. Sukhbir Singh's Approach",
    text: "For a middle-aged patient, he recommends a thread lift with PCLA threads first, followed by hyaluronic acid fillers for volume and refinement two to four weeks later.",
  },
  options: [
    {
      title: "JR Technique (Jawline Reshaping)",
      icon: "architecture",
      featured: true,
      text: "Three reshaping lines: from 1 cm above the jaw angle to beside the marionette line, from there to the front of the ear, and a short return line—forming a 'J stitch' where the thread holds most strongly.",
    },
    {
      title: "MR Technique (Malar Reshaping)",
      icon: "face",
      text: "A specialised technique for reshaping the cheekbone area that also helps reduce the nasolabial fold.",
    },
    {
      title: "Double-Needle Threads",
      icon: "linear_scale",
      text: "Smooth to use and also suitable for double chin, eyebrow lift and neck lift. Patients don't feel the thread, recover faster, and results last up to 18 months—versus 12–14 months with older threads.",
      facts: [
        { label: "Threads", value: "Definisse PCLA" },
        { label: "Results", value: "Up to 18 months" },
        { label: "Visible", value: "After 3 weeks" },
      ],
    },
  ],
};

export const threadLiftResults: MediaCardGridData = {
  id: "results",
  eyebrow: "Patient Results",
  title: "Thread Lift Before & After",
  intro:
    "Apart from contouring, PCLA threads (poly-L-lactic acid and caprolactone) stimulate collagen and improve microcirculation, leaving skin with better texture and glow.",
  note: "Individual results vary",
  columns: 3,
  fit: "contain",
  // result-01 is shown beside the techniques section, so the gallery starts at result-02.
  cards: Array.from({ length: 13 }, (_, i) => ({
    image: {
      src: `${IMG}/result-${String(i + 2).padStart(2, "0")}.jpeg`,
      alt: `Thread lift patient ${i + 2}, before and after`,
    },
  })),
};

export const threadLiftCta: CtaBandData = {
  eyebrow: "Non-Surgical Aesthetics • Greater Kailash Part 1",
  title: "Contour Your Face Without Surgery",
  text: "See pre- and post-treatment images and plan your thread lift with Dr. Sukhbir Singh at R-9, Basement, Greater Kailash Part 1, New Delhi - 110048.",
  primaryCta: bookConsultationCta("Book a Thread Lift Consultation"),
  meta: clinicMeta.slice(0, 1),
};
