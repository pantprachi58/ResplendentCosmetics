import type {
  CalloutData,
  CardGridData,
  CtaBandData,
  MediaCardGridData,
  TreatmentHeroData,
  VideoGalleryData,
} from "./types";
import { bookConsultationCta, clinicMeta } from "./shared";

// Content sourced from https://www.resplendentcosmetics.com/laser-hair-removal.php.
// The live page includes a stray paragraph about hair loss / hair transplants, which is omitted.

const IMG = "/images/pages/laser-hair-removal";

export const laserHairRemovalMeta = {
  title: "Laser Hair Removal in Delhi | Resplendent Aesthetics",
  description:
    "Safe, precise laser hair removal for the face, underarms, bikini line, legs, back and full body in Greater Kailash, New Delhi. Indicative per-session pricing.",
};

export const laserHairRemovalHero: TreatmentHeroData = {
  breadcrumb: "Laser Hair Removal",
  eyebrow: "Laser Aesthetics",
  title: "Laser Hair ",
  highlight: "Removal",
  lead: "Laser hair removal uses a beam of a specific wavelength to target hair follicles precisely, reducing hair growth over time. It is a safe, effective and long-lasting way to remove unwanted hair from the face, bikini line, underarms and other areas.",
  pills: [
    { icon: "my_location", label: "Precise & Targeted" },
    { icon: "wc", label: "For Men & Women" },
    { icon: "event_repeat", label: "Typically 6–8 Sessions" },
    { icon: "all_inclusive", label: "Long-Lasting Results" },
  ],
  primaryCta: bookConsultationCta("Book a Laser Consultation"),
  secondaryCta: { label: "See Treatment Areas", href: "#treatment-areas" },
  surgeon: {
    name: "Dr. Sukhbir Singh",
    role: "Cosmetic & Plastic Surgeon",
    initials: "SS",
    credentials: "MBBS • MS General Surgery • DNB Plastic Surgery • 15+ years' experience",
  },
  image: {
    src: `${IMG}/facial-laser.webp`,
    alt: "Laser hair removal on a patient's face",
    tag: "Laser Hair Removal",
    captionTitle: "Silky-smooth skin with minimal effort",
    captionText: "Safe for delicate and hard-to-reach areas",
  },
};

export const laserHairRemovalBenefits: CardGridData = {
  eyebrow: "Why Laser",
  title: "Benefits of Laser Hair Removal",
  intro:
    "Concentrated light energy damages the hair follicles, reducing growth over time without affecting the surrounding skin—making it one of the most accurate long-term alternatives to traditional hair removal.",
  columns: 4,
  cards: [
    { icon: "all_inclusive", title: "Long-Lasting Results", text: "Avoid daily shaving and regular waxing sessions." },
    { icon: "my_location", title: "Precision", text: "Ideal for sensitive, delicate areas such as the face and bikini line." },
    { icon: "schedule", title: "Time-Saving", text: "Spend less time on hair removal routines." },
    { icon: "savings", title: "Cost-Effective", text: "Long-lasting results can save money compared with temporary methods." },
  ],
};

export const laserHairRemovalAreas: MediaCardGridData = {
  id: "treatment-areas",
  eyebrow: "Treatment Areas",
  title: "Hair Removal for Different Body Parts",
  intro: "Laser hair removal can be customised for different areas, for both men and women.",
  columns: 4,
  cards: [
    {
      image: { src: `${IMG}/whole-body-laser.webp`, alt: "Laser hair removal on a man's chest" },
      title: "Whole Body",
      text: "A comprehensive treatment for hair from head to toe.",
    },
    {
      image: { src: `${IMG}/face-laser.webp`, alt: "Facial laser hair removal" },
      title: "Face",
      text: "Sensitive areas such as the upper lip, chin and cheeks.",
    },
    {
      image: { src: `${IMG}/bikini-laser.webp`, alt: "Laser hair removal on the legs" },
      title: "Bikini Line",
      text: "For a clean, smooth bikini line.",
    },
    {
      image: { src: `${IMG}/underarm-laser.webp`, alt: "Underarm laser hair removal" },
      title: "Underarms, Legs, Arms & Back",
      text: "Larger areas, without the hassle of waxing and shaving.",
    },
  ],
};

export const laserHairRemovalCost: CalloutData = {
  icon: "payments",
  eyebrow: "Indicative Cost",
  title: "Laser Hair Removal Cost in Delhi",
  text: "Cost varies with the size of the treatment area and the number of sessions. Your doctor will confirm the cost at consultation.",
  highlights: [
    { icon: "face", title: "Small Areas", text: "₹2,500–5,000 per session — e.g. upper lip or chin" },
    { icon: "back_hand", title: "Medium Areas", text: "₹5,000–7,500 per session — e.g. underarms or bikini line" },
    { icon: "accessibility_new", title: "Large Areas", text: "₹7,500–12,500 per session — e.g. back or legs" },
  ],
  aside: {
    icon: "event_repeat",
    title: "How Many Sessions?",
    subtitle: "Typical Plan",
    items: [
      "Most clients need 6–8 sessions",
      "Depends on hair type, thickness and hormones",
      "Maintenance sessions every few months",
      "Full body: ₹10,000–12,500 package",
    ],
    cta: bookConsultationCta("Get a Personal Quote"),
  },
};

export const laserHairRemovalVideos: VideoGalleryData = {
  id: "videos",
  eyebrow: "Watch & Learn",
  title: "How Laser Hair Reduction Works",
  videos: [
    {
      youtubeId: "mB251t8zE5s",
      title: "Laser Hair Reduction and How Does It Work — Is It Right for You?",
      note: "In Hindi",
    },
  ],
};

export const laserHairRemovalCta: CtaBandData = {
  eyebrow: "Laser Aesthetics • Greater Kailash Part 1",
  title: "Ready for Smooth, Hair-Free Skin?",
  text: "Whether it's the face, bikini line or full body, plan your laser hair removal at R-9, Basement, Greater Kailash Part 1, New Delhi - 110048.",
  primaryCta: bookConsultationCta("Book a Laser Consultation"),
  meta: clinicMeta.slice(0, 1),
};
