import type {
  CalloutData,
  CardGridData,
  CtaBandData,
  FaqData,
  TreatmentOverviewData,
  TreatmentHeroData,
  VideoGalleryData,
} from "./types";
import { bookConsultationCta, clinicMeta } from "./shared";

// Content sourced from https://www.resplendentcosmetics.com/lip-augmentation.php.
// The live before/after photos are watermarked by another clinic and are not used.

const IMG = "/images/pages/lip-augmentation";

export const lipAugmentationMeta = {
  title: "Lip Augmentation (Lip Fillers & Lip Lift) in Delhi | Resplendent Aesthetics",
  description:
    "Lip augmentation in Greater Kailash, New Delhi: hyaluronic acid lip fillers, lip lift, lip implants and fat grafting for fuller, well-defined lips.",
};

export const lipAugmentationHero: TreatmentHeroData = {
  breadcrumb: "Lip Augmentation",
  eyebrow: "Facial Aesthetics",
  title: "Lip ",
  highlight: "Augmentation",
  lead: "Lip augmentation uses precise surgical and non-surgical techniques to improve the proportion, symmetry and shape of the lips—addressing thin lips, a gummy smile, long upper lips and a lack of definition for a youthful, alluring smile.",
  pills: [
    { icon: "timer", label: "Fillers in 15–30 Minutes" },
    { icon: "event_available", label: "Day-Care Procedures" },
    { icon: "undo", label: "Fillers Are Reversible" },
    { icon: "healing", label: "Local Anaesthesia" },
  ],
  primaryCta: bookConsultationCta("Book a Lip Consultation"),
  secondaryCta: { label: "Compare Lip Treatments", href: "#types" },
  image: {
    src: `${IMG}/lip-filler-profile.jpg`,
    alt: "Lip filler injection being prepared for a patient's upper lip",
    tag: "Lip Enhancement",
    captionTitle: "Fuller, well-defined lips with natural curves",
    captionText: "Cupid's bow and lip tubercles carefully preserved",
  },
};

export const lipAugmentationTypes: CardGridData = {
  id: "types",
  eyebrow: "Treatment Options",
  title: "Types of Lip Augmentation",
  intro:
    "Surgical and non-surgical options differ in technique, longevity and cost. The right choice depends on your goals, how long you want results to last, and your budget.",
  columns: 4,
  cards: [
    {
      icon: "vaccines",
      eyebrow: "Non-Surgical",
      title: "Lip Fillers",
      text: "Hyaluronic acid fillers injected to enhance volume, symmetry and shape in 15–30 minutes with minimal downtime. Results last about 6–12 months.",
      footLabel: "Indicative cost",
      footValue: "₹20,000–25,000 / session",
    },
    {
      icon: "north",
      eyebrow: "Surgical • Permanent",
      title: "Lip Lift",
      text: "Excess skin above the upper lip or at the corners is removed, shortening the space under the nose and revealing more of the lip for a fuller look.",
      footLabel: "Indicative cost",
      footValue: "₹40,000–90,000",
    },
    {
      icon: "healing",
      eyebrow: "Surgical • Long-Term",
      title: "Lip Implants",
      text: "Soft, flexible implants are placed through small incisions at the corners of the mouth under local anaesthesia for long-term volume.",
      footLabel: "Indicative cost",
      footValue: "₹70,000–1,50,000",
    },
    {
      icon: "water_drop",
      eyebrow: "Surgical • Natural",
      title: "Fat Grafting",
      text: "Your own fat, taken by liposuction from the abdomen or thighs, is purified and injected into the lips—reducing the risk of allergic reaction.",
      footLabel: "Indicative cost",
      footValue: "₹60,000–1,20,000",
    },
  ],
};

export const lipAugmentationBenefits: TreatmentOverviewData = {
  eyebrow: "Benefits & Candidates",
  title: "Why Patients Choose Lip Augmentation",
  intro:
    "Done by experienced professionals, lip augmentation offers both cosmetic and psychological benefits—with a natural, balanced result.",
  media: {
    src: `${IMG}/lip-filler-treatment.jpg`,
    alt: "Aesthetic doctor injecting lip filler",
    tag: "Lip Fillers",
    title: "Key Benefits",
    text: "Fuller, well-shaped lips improve overall facial harmony.",
    checklist: [
      "Corrects thin, asymmetrical or ageing lips",
      "Results visible almost immediately",
      "Minimal bruising and no visible external scars",
      "Fillers allow gradual change and are reversible",
      "Most patients return to routine within a day or two",
    ],
  },
  options: [
    {
      title: "Who It Suits",
      icon: "person_check",
      featured: true,
      text: "Your facial structure, skin and goals are assessed first to choose the right technique and level of enhancement.",
      bullets: [
        "Naturally thin lips lacking volume",
        "Asymmetrical or uneven lips",
        "Downturned lip corners or a gummy smile",
        "Wanting a smoother, more defined smile curve",
        "Lips losing volume and definition with age",
      ],
    },
  ],
};

export const lipAugmentationCost: CalloutData = {
  icon: "payments",
  eyebrow: "Indicative Cost",
  title: "Lip Augmentation Cost in Delhi",
  text: "Cost depends on the treatment goal, the type of procedure, the complexity of the case, the surgeon's experience and the care involved. Your doctor will confirm the cost after a thorough consultation.",
  highlights: [
    { icon: "vaccines", title: "Non-Surgical", text: "About ₹25,000–30,000 (fillers)" },
    { icon: "healing", title: "Surgical", text: "Around ₹35,000–40,000 on average" },
    { icon: "info", title: "Not Final Pricing", text: "Varies with the procedure finalised at consultation" },
  ],
  cta: bookConsultationCta("Get a Personal Quote"),
};

export const lipAugmentationVideos: VideoGalleryData = {
  id: "videos",
  eyebrow: "Watch & Learn",
  title: "Dr. Sukhbir Singh on Lip Surgery",
  videos: [{ youtubeId: "JZ33r8MQ1C4", title: "Lip Reduction Surgery — Watch Before Your Procedure", note: "In Hindi" }],
};

export const lipAugmentationFaq: FaqData = {
  eyebrow: "Common Questions",
  title: "FAQs on Lip Augmentation",
  items: [
    {
      question: "What is lip augmentation?",
      answer:
        "Lip augmentation increases the size of the lips with surgical and/or non-surgical methods. It is usually a quick day-care procedure, and the lips heal quickly thanks to their rich blood supply. There is swelling immediately afterwards, but you are usually back to work soon.",
    },
    {
      question: "What are the lip enlargement options?",
      answer:
        "Surgical options include autologous fat grafting or a dermal fat graft, which give long-term results but can occasionally be uneven due to irregular fat absorption. Non-surgical augmentation uses hyaluronic acid filler, which gives an immediate result lasting about 12–15 months and takes around 15 minutes.",
    },
    {
      question: "How will my lips look afterwards?",
      answer:
        "Swelling is visible straight after treatment—more after surgery and minimal after fillers. It settles in 5–7 days after surgery and 1–2 days after fillers, and by 15 days you can appreciate the final look. Preserving the natural curves, especially the cupid's bow and tubercles, is essential whichever method is used.",
    },
    {
      question: "How long does lip augmentation take?",
      answer:
        "Surgical lip augmentation takes about 45 minutes to 1 hour; non-surgical augmentation takes about 15 minutes. What matters most is a natural, pleasing result.",
    },
    {
      question: "What is lip augmentation with hyaluronic acid filler?",
      answer:
        "Hyaluronic acid fillers such as the Juvéderm range give a soft, pleasing result. They contour every part of the lip, help evert the lips, can be adjusted to the volume you want, and are reversible.",
    },
    {
      question: "What is fat-grafting lip augmentation?",
      answer:
        "Autologous lip augmentation uses your own fat or a dermal fat graft to enlarge the lips. It is effective but can be limited by irregular fat absorption, or occasionally nodules or cysts that can be difficult to remove.",
    },
  ],
};

export const lipAugmentationCta: CtaBandData = {
  eyebrow: "Facial Aesthetics • Greater Kailash Part 1",
  title: "Plan Your Lip Enhancement",
  text: "Discuss fillers, a lip lift or other options with Dr. Sukhbir Singh at R-9, Basement, Greater Kailash Part 1, New Delhi - 110048.",
  primaryCta: bookConsultationCta("Book a Lip Consultation"),
  meta: clinicMeta.slice(0, 1),
};
