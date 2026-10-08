import type { CalloutData, CtaBandData, FaqData, ProcessData, TreatmentHeroData, VideoGalleryData } from "./types";
import { bookConsultationCta, clinicMeta } from "./shared";

// Content sourced from https://www.resplendentcosmetics.com/autologous-fat-grafting.php.
// The live FAQ covers liposuction (the fat-harvesting step), so it is labelled accordingly.
// The live before/after photos are watermarked by another clinic and are not used.

export const fatGraftingMeta = {
  title: "Autologous Fat Grafting (Fat Transfer) in Delhi | Resplendent Aesthetics",
  description:
    "Autologous fat grafting in Greater Kailash, New Delhi: your own fat, harvested by liposuction, transferred to restore volume and shape to the face, buttocks and other areas.",
};

export const fatGraftingHero: TreatmentHeroData = {
  breadcrumb: "Fat Grafting",
  eyebrow: "Natural Volume Restoration",
  title: "Autologous ",
  highlight: "Fat Grafting",
  lead: "Fat grafting is a natural way to restore volume and shape and to rejuvenate areas such as the face and buttocks. Fat is taken from areas like the abdomen or inner thighs by liposuction or micro-lipo, then transferred to where volume is needed.",
  pills: [
    { icon: "water_drop", label: "Uses Your Own Fat" },
    { icon: "event_available", label: "Day-Care Procedure" },
    { icon: "visibility_off", label: "Small, Hidden Incisions" },
    { icon: "repeat", label: "May Need More Than One Sitting" },
  ],
  primaryCta: bookConsultationCta("Book a Fat Grafting Consultation"),
  secondaryCta: { label: "Watch Fat Grafting Explained", href: "#videos", iconLeading: "play_circle" },
  image: {
    src: "/images/pages/dermal-fillers/under-eye-fillers.webp",
    alt: "Volume being restored beneath the eye with an injection",
    tag: "Natural Volume",
  },
  card: {
    eyebrow: "Procedure at a Glance",
    title: "Fat Grafting",
    icon: "swap_vert",
    checklist: [
      "Restores volume and shape naturally",
      "Fat harvested from the abdomen, thighs and similar areas",
      "Commonly used for the face and buttocks",
      "Some fat is resorbed over about 3 months",
    ],
    footLabel: "Consultation Studio",
    footValue: "R-9, Greater Kailash Part 1, New Delhi",
  },
};

export const fatGraftingProcess: ProcessData = {
  eyebrow: "The Procedure",
  title: "How Fat Grafting Works",
  intro: "Your own fat is moved from where you have extra to where volume is needed.",
  steps: [
    {
      icon: "forum",
      title: "Consultation",
      text: "The areas needing volume and the donor sites for fat are planned with your surgeon.",
      footValue: "Personalised Plan",
    },
    {
      icon: "vertical_align_top",
      title: "Fat Harvest",
      text: "Fat is extracted from areas such as the abdomen or inner thighs by liposuction or micro-lipo, using small incisions at hidden sites.",
      footValue: "Day-Care Procedure",
    },
    {
      icon: "swap_vert",
      title: "Fat Transfer",
      text: "The harvested fat is transferred to the areas that need volume, such as the face or buttocks.",
      footValue: "Natural Volume",
    },
    {
      icon: "repeat",
      title: "Settling",
      text: "Some transferred fat is resorbed by the body over about 3 months, so more than one sitting may be needed for the final result.",
      footValue: "Final Result ~3 Months",
    },
  ],
};

export const fatGraftingRecovery: CalloutData = {
  icon: "healing",
  eyebrow: "Recovery",
  title: "Recovering From the Fat Harvest",
  text: "Mild pain for a few days is easily controlled with painkillers. Slight bruising fades in 2–3 weeks, and swelling takes about 8–12 weeks to settle fully.",
  highlights: [
    { icon: "checkroom", title: "Pressure Garments", text: "Worn continuously for the first 2–3 days, then 12–16 hours a day for 4–6 months." },
    { icon: "shower", title: "Bath After 3–5 Days", text: "Rest at home after discharge; normal walking resumes in about a week." },
    { icon: "fitness_center", title: "No Gym for 8–12 Weeks", text: "Avoid heavy exercise, running and swimming until then." },
  ],
  cta: bookConsultationCta("Book a Consultation"),
};

export const fatGraftingVideos: VideoGalleryData = {
  id: "videos",
  eyebrow: "Watch & Learn",
  title: "Dr. Sukhbir Singh Explains Fat Grafting",
  videos: [{ youtubeId: "gE7tCrnWW68", title: "Fat Grafting kya hota hai — How Fat Transfer Is Done", note: "In Hindi" }],
};

export const fatGraftingFaq: FaqData = {
  eyebrow: "About the Fat Harvest",
  title: "FAQs on Liposuction for Fat Grafting",
  intro: "Fat for grafting is collected by liposuction, so these answers cover that part of the procedure.",
  items: [
    {
      question: "What is liposuction? Is it for weight loss?",
      answer:
        "Liposuction extracts fat from the body using a machine and special cannulas through small incisions at hidden sites. It is usually a day-care procedure with same-day discharge. It is not a weight-reduction procedure—it removes fat to help with inch loss, not weight loss, and doesn't address internal fat.",
    },
    {
      question: "Who is an ideal candidate?",
      answer:
        "Usually a younger person with good skin elasticity, minimal stretch marks, and no sudden major weight gain or loss.",
    },
    {
      question: "How much fat can be removed in one sitting?",
      answer:
        "Liposuction can be done on areas from the abdomen and flanks to the back and thighs, but it is impossible to remove all fat from every area at once. Current guidelines consider more than 5 litres to be mega-liposuction, and the upper limit in one sitting is 10% of your body weight.",
    },
    {
      question: "What happens after surgery? When can I exercise?",
      answer:
        "Pressure garments are worn continuously for the first 2–3 days. Slight oozing is normal and dressings are changed as needed. Rest at home, moving your toes and hands. Bathing is usually allowed after 3–5 days, and normal walking resumes in about a week. Avoid heavy exercise, gym, running and swimming for 8–12 weeks, and wear pressure garments for 12–16 hours a day for 4–6 months for the best result.",
    },
    {
      question: "Who should perform liposuction? Is there pain or bruising?",
      answer:
        "Liposuction should only be performed by a board-certified plastic surgeon. Pain for a few days is easily controlled with painkillers. Slight bruising fades in 2–3 weeks, and swelling—which rises at first, then subsides—takes about 8–12 weeks to settle and show good contouring.",
    },
  ],
};

export const fatGraftingCta: CtaBandData = {
  eyebrow: "Body & Face Contouring • Greater Kailash Part 1",
  title: "Restore Volume Using Your Own Fat",
  text: "Discuss fat grafting with Dr. Sukhbir Singh at R-9, Basement, Greater Kailash Part 1, New Delhi - 110048.",
  primaryCta: bookConsultationCta("Book a Fat Grafting Consultation"),
  meta: clinicMeta.slice(0, 1),
};
