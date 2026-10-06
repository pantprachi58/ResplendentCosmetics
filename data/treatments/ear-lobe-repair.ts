import type {
  CalloutData,
  CardGridData,
  CtaBandData,
  FaqData,
  ProcessData,
  TreatmentHeroData,
  TreatmentOverviewData,
  VideoGalleryData,
} from "./types";
import { bookConsultationCta, clinicMeta } from "./shared";

// Content sourced from https://www.resplendentcosmetics.com/earlobe-repair.php.

const IMG = "/images/pages/ear-lobe-repair";

export const earLobeRepairMeta = {
  title: "Earlobe Repair Surgery in Delhi | Resplendent Aesthetics",
  description:
    "Torn, split or stretched earlobe repair in Greater Kailash, New Delhi with Dr. Sukhbir Singh. A safe 30–45 minute procedure per side under local anaesthesia.",
};

export const earLobeRepairHero: TreatmentHeroData = {
  breadcrumb: "Earlobe Repair",
  eyebrow: "Ear Aesthetic Surgery",
  title: "Earlobe Repair — ",
  highlight: "Restore Natural Shape & Symmetry",
  lead: "The earlobe is especially important in India, where earrings of every shape and size are widely worn. Earlobe repair surgery fixes torn or stretched earlobes—caused by heavy earrings or injury—to restore their natural appearance and symmetry.",
  pills: [
    { icon: "vaccines", label: "Local Anaesthesia" },
    { icon: "timer", label: "30–45 Minutes per Side" },
    { icon: "work", label: "Back to Work the Same Day" },
    { icon: "diamond", label: "Re-pierce After 3–4 Weeks" },
  ],
  primaryCta: bookConsultationCta("Book an Earlobe Consultation"),
  secondaryCta: { label: "Watch the Procedure Explained", href: "#videos", iconLeading: "play_circle" },
  card: {
    eyebrow: "Procedure at a Glance",
    title: "Earlobe Repair",
    icon: "hearing",
    checklist: [
      "Repairs split earlobes and enlarged piercing holes",
      "Performed under local anaesthesia after a test dose",
      "Two-layer stitching with very fine sutures",
      "Stitches removed after 7–10 days",
    ],
    footLabel: "Consultation Studio",
    footValue: "R-9, Greater Kailash Part 1, New Delhi",
  },
};

export const earLobeRepairOverview: TreatmentOverviewData = {
  eyebrow: "Understanding the Earlobe",
  title: "Surgical Repair vs. Tissue Glue",
  intro:
    "The earlobe is the soft, fleshy lower part of the ear. It is made of fat and connective tissue with no cartilage, and has a rich blood supply and many nerve endings. It plays little role in hearing but gives the outer ear stability and shape.",
  media: {
    src: `${IMG}/earlobe-repair.jpg`,
    alt: "Doctor examining a patient's ear during an earlobe consultation",
    tag: "Earlobe Assessment",
    title: "Common Indications",
    text: "The most common reasons for earlobe repair are split earlobes and enlarged piercing holes.",
    checklist: [
      "Trauma or accidental tearing",
      "Prolonged use of heavy earrings",
      "Natural ageing of the earlobe",
    ],
  },
  options: [
    {
      title: "Surgical Earlobe Repair",
      icon: "healing",
      tag: "Recommended",
      featured: true,
      text: "Each side is repaired under local anaesthesia and stitched in two layers with very fine monofilament sutures. It is a safe and effective procedure, and you can return to work or go out immediately afterwards.",
      facts: [
        { label: "Duration", value: "30–45 min per side" },
        { label: "Stitches Out", value: "7–10 days" },
        { label: "Re-piercing", value: "After 3–4 weeks" },
      ],
    },
    {
      title: "Non-Surgical Tissue Glue",
      icon: "water_drop",
      tag: "Not Advised",
      muted: true,
      text: "Tissue glue can stick the two split parts together, but we do not advise it because it has a very high recurrence rate of around 50–70%.",
    },
  ],
};

export const earLobeRepairCauses: CardGridData = {
  eyebrow: "Why Earlobes Stretch",
  title: "Common Causes of Stretched Earlobes",
  columns: 3,
  cards: [
    {
      icon: "fitness_center",
      title: "Weight of Earrings",
      text: "Heavy earrings pull the earlobe down and stretch it over time—more so if the piercing is low on the soft part of the lobe.",
    },
    {
      icon: "genetics",
      title: "Genetic Makeup",
      text: "Some people are born with thin or more elastic earlobes.",
    },
    {
      icon: "hourglass_bottom",
      title: "Ageing",
      text: "Skin loses collagen and elasticity with age, so earlobes can stretch naturally over time.",
    },
    {
      icon: "smoke_free",
      title: "Smoking",
      text: "Smoking weakens skin and tissues, including the earlobes, making them more prone to stretching.",
    },
    {
      icon: "personal_injury",
      title: "Trauma",
      text: "Heavy earrings, accidental tearing, injury or improper piercing technique can all damage the earlobe.",
    },
    {
      icon: "auto_awesome",
      title: "What Repair Restores",
      text: "Natural shape and size, facial symmetry, comfort with headphones or sunglasses, and the freedom to wear earrings again.",
    },
  ],
};

export const earLobeRepairProcess: ProcessData = {
  eyebrow: "The Procedure",
  title: "How Earlobe Repair Is Done",
  intro: "A short, safe procedure under local anaesthesia—you can head to the office straight afterwards.",
  steps: [
    {
      icon: "forum",
      title: "Consultation",
      text: "Your doctor examines your earlobe and explains the procedure, steps and cost. Have a light meal before the procedure day.",
      footValue: "Light Meal Beforehand",
    },
    {
      icon: "vaccines",
      title: "Test Dose & Numbing",
      text: "A test dose of local anaesthetic rules out any reaction. The area is cleaned with betadine, numbed and sterile-draped.",
      footValue: "Local Anaesthesia",
    },
    {
      icon: "healing",
      title: "Two-Layer Repair",
      text: "Each side is stitched in two layers with very fine monofilament sutures, then a tiny dressing is applied.",
      footValue: "30–45 Minutes per Side",
    },
    {
      icon: "self_care",
      title: "Recovery",
      text: "You can bathe within 48 hours without rubbing the area. Avoid heavy exercise until the stitches are removed after 7–10 days.",
      footValue: "Re-pierce After 3–4 Weeks",
    },
  ],
};

export const earLobeRepairCare: CalloutData = {
  icon: "shield",
  eyebrow: "Prevention & Aftercare",
  title: "Keeping Ear Holes From Enlarging",
  text: "After repair, follow your doctor's instructions and the antibiotics and painkillers prescribed. If you smoke, stop until the sutures are removed and the scar heals. To stop ear holes stretching again:",
  highlights: [
    {
      icon: "do_not_disturb_on",
      title: "Avoid Heavy Earrings",
      text: "Choose lightweight earrings instead of heavy ones worn for long periods.",
    },
    {
      icon: "schedule",
      title: "Limit the Duration",
      text: "Give your ears a break from earrings whenever you feel strain.",
    },
    {
      icon: "front_hand",
      title: "Be Gentle",
      text: "Avoid pulling the earlobe and remove earrings carefully.",
    },
  ],
  aside: {
    icon: "payments",
    title: "Indicative Cost",
    subtitle: "Confirmed at Consultation",
    items: ["One side: INR 9,000", "Both sides: INR 18,000"],
    text: "Final cost depends on the extent of the injury, the type of repair and sutures used.",
    cta: bookConsultationCta("Get a Personal Quote"),
  },
};

export const earLobeRepairVideos: VideoGalleryData = {
  id: "videos",
  eyebrow: "Watch & Learn",
  title: "Dr. Sukhbir Singh Explains Earlobe Repair",
  videos: [
    {
      youtubeId: "fX7ii0i2ep4",
      title: "Ear Lobe Repair — Torn Ear Lobe Repair Explained",
      note: "In Hindi",
    },
  ],
};

export const earLobeRepairFaq: FaqData = {
  eyebrow: "Common Questions",
  title: "FAQs on Earlobe Repair",
  items: [
    {
      question: "What are the indications for earlobe repair?",
      answer:
        "The most common indications are split earlobes and enlarged piercing holes, caused by trauma, prolonged use of heavy earrings, or simply ageing.",
    },
    {
      question: "How is earlobe repair done? Is it under local or general anaesthesia?",
      answer:
        "Have a light meal before the procedure. A test dose of local anaesthetic is given and, once any reaction is ruled out, the area is cleaned with betadine and numbed. After sterile draping, the entire procedure is done under local anaesthesia and takes about 30–45 minutes per side. Each side is stitched in two layers with very fine monofilament sutures, which are removed in 7–10 days. A tiny dressing is applied, and you can go to the office or out immediately afterwards. It is a safe and effective procedure.",
    },
    {
      question: "Are there non-surgical options for earlobe repair?",
      answer:
        "Yes—tissue glue can be used to stick the two split parts together. However, we do not advise it, as it has a very high recurrence rate of around 50–70%.",
    },
    {
      question: "When can I get my ears re-pierced?",
      answer:
        "We advise re-piercing only 3–4 weeks after the procedure, so the skin gains strength in the meantime—the earlobe has no cartilage support.",
    },
    {
      question: "What precautions should I take after the procedure?",
      answer:
        "You will be given antibiotics and painkillers to speed recovery and keep you comfortable. Avoid heavy exercise for about 7–10 days until your stitches are out. You can bathe within 48 hours without rubbing the area too much. If you smoke, please stop until the sutures are removed and the scar heals well.",
    },
    {
      question: "What are the risks and complications?",
      answer:
        "Every procedure carries some risk, but earlobe repair is a very safe operation. The most common complications relate to healing—such as a poor scar, infection (rare), or a hypertrophic scar or keloid in people prone to them.",
    },
  ],
};

export const earLobeRepairCta: CtaBandData = {
  eyebrow: "Ear Aesthetics • Greater Kailash Part 1",
  title: "Wear Your Favourite Earrings Again",
  text: "Have your torn or stretched earlobes assessed by Dr. Sukhbir Singh at R-9, Basement, Greater Kailash Part 1, New Delhi - 110048.",
  primaryCta: bookConsultationCta("Book an Earlobe Consultation"),
  meta: clinicMeta.slice(0, 1),
};
