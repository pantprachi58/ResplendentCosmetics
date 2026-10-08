import type { CalloutData, CardGridData, CtaBandData, FaqData, TreatmentHeroData } from "./types";
import { bookConsultationCta, clinicMeta } from "./shared";

// Content sourced from https://www.resplendentcosmetics.com/microneedling_rf.php.
// The live page's meta description is copied from the chemical peel page and is replaced here.

export const rfMicroneedlingMeta = {
  title: "Microneedling RF (Morpheus8) in Delhi | Resplendent Aesthetics",
  description:
    "Morpheus8 microneedling RF in Greater Kailash, New Delhi for acne scars, enlarged pores, wrinkles, skin tightening, stretch marks and cellulite—suitable for all skin types.",
};

export const rfMicroneedlingHero: TreatmentHeroData = {
  breadcrumb: "Microneedling RF (Morpheus8)",
  eyebrow: "Fractional Skin Remodelling",
  title: "Microneedling RF — ",
  highlight: "Morpheus8",
  lead: "Morpheus8 is a fractional skin treatment that combines microneedling with radiofrequency to stimulate collagen in the deeper layers of the dermis. By remodelling tissue beneath the surface, it reveals a more radiant, youthful appearance on the face and body.",
  pills: [
    { icon: "bolt", label: "Microneedling + Radiofrequency" },
    { icon: "diversity_3", label: "Suits All Skin Types" },
    { icon: "event_repeat", label: "3–4 Sessions" },
    { icon: "trending_up", label: "Improves for 3 Months" },
  ],
  primaryCta: bookConsultationCta("Book a Morpheus8 Consultation"),
  secondaryCta: { label: "What Can It Treat?", href: "#concerns" },
  image: {
    src: "/images/procedures/16.png",
    alt: "Morpheus8 microneedling RF handpiece",
    tag: "Morpheus8",
  },
  card: {
    eyebrow: "Treatment at a Glance",
    title: "Morpheus8",
    icon: "grain",
    checklist: [
      "Stimulates collagen in the deeper dermis",
      "Targets fat that contributes to sagging skin",
      "Treats face and body",
      "Colour-blind technology for darker skin tones",
    ],
    footLabel: "Consultation Studio",
    footValue: "R-9, Greater Kailash Part 1, New Delhi",
  },
};

export const rfMicroneedlingConcerns: CardGridData = {
  id: "concerns",
  eyebrow: "What It Treats",
  title: "Areas & Concerns Morpheus8 Can Treat",
  intro:
    "Morpheus8 can be used on any area that benefits from resurfacing and subdermal renewal—most commonly the face, under-eye area, abdomen, thighs, legs and buttocks.",
  columns: 3,
  cards: [
    { icon: "texture", title: "Acne & Acne Scars", text: "Reduces the appearance of acne and acne scarring." },
    { icon: "blur_on", title: "Enlarged Pores", text: "Refines enlarged pores for smoother skin texture." },
    { icon: "gesture", title: "Wrinkles & Laxity", text: "Softens wrinkles and tightens skin by remodelling deeper layers." },
    { icon: "straighten", title: "Stretch Marks", text: "Improves the appearance of stretch marks on the body." },
    { icon: "palette", title: "Discolouration", text: "Helps even out discolouration for a more uniform tone." },
    { icon: "grain", title: "Cellulite", text: "Improves the look of cellulite on the thighs, legs and buttocks." },
  ],
};

export const rfMicroneedlingPlan: CalloutData = {
  icon: "event_repeat",
  eyebrow: "Sessions & Results",
  title: "Your Morpheus8 Treatment Plan",
  text: "Your practitioner will recommend the right number of sessions for your goals. Because Morpheus8 uses colour-blind technology, it can be used on all skin types, including darker skin tones.",
  highlights: [
    { icon: "repeat", title: "3–4 Sessions", text: "Spaced roughly 4–6 weeks apart for full results." },
    { icon: "visibility", title: "Visible in Days", text: "Results can be seen after the first treatment; most noticeable after 3 weeks." },
    { icon: "trending_up", title: "Up to 3 Months", text: "Improvements continue for up to three months after treatment." },
  ],
  cta: bookConsultationCta("Book a Morpheus8 Consultation"),
};

export const rfMicroneedlingFaq: FaqData = {
  eyebrow: "Common Questions",
  title: "FAQs on Microneedling RF (Morpheus8)",
  items: [
    {
      question: "What is Morpheus8?",
      answer:
        "Morpheus8 is a fractional skin treatment that stimulates collagen production in the underlying layers of the dermis. It combines microneedling and radiofrequency to achieve deep fractional remodelling, directing energy towards the fat that contributes to sagging skin. Targeting these deeper layers remodels the tissues of the face and body for a more radiant, youthful appearance.",
    },
    {
      question: "What areas can be treated?",
      answer:
        "Any area that benefits from resurfacing and subdermal renewal. The most commonly treated areas are the face, under-eye area, abdomen, thighs, legs and buttocks. It can also reduce the appearance of acne and acne scars, stretch marks, enlarged pores, wrinkles, discolouration and cellulite, and tighten skin.",
    },
    {
      question: "How many sessions are recommended?",
      answer:
        "Your practitioner will recommend the optimal number based on your goals, but at least 3–4 sessions spaced roughly 4–6 weeks apart are recommended for full results.",
    },
    {
      question: "How quickly will I see results?",
      answer:
        "You can see results from your first treatment. Visible results appear within a few days, with the most noticeable results typically after three weeks. Improvements continue for up to three months.",
    },
    {
      question: "Can anyone use Morpheus8?",
      answer:
        "Morpheus8's colour-blind technology means it can be used on all skin types, including darker skin tones.",
    },
  ],
};

export const rfMicroneedlingCta: CtaBandData = {
  eyebrow: "Skin Rejuvenation • Greater Kailash Part 1",
  title: "Remodel Your Skin From Within",
  text: "Plan your Morpheus8 sessions with our team at R-9, Basement, Greater Kailash Part 1, New Delhi - 110048.",
  primaryCta: bookConsultationCta("Book a Morpheus8 Consultation"),
  meta: clinicMeta.slice(0, 1),
};
