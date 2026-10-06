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

// Content sourced from https://www.resplendentcosmetics.com/prp-therapy.php.
// Overstated claims on the live page ("guaranteed", "no side effects", "rejection not an option")
// are restated accurately; the live before/after photos are watermarked by another clinic and not used.

const IMG = "/images/pages/prp-therapy";

export const prpTherapyMeta = {
  title: "PRP Hair Treatment in Delhi | PRP Therapy Cost | Resplendent Aesthetics",
  description:
    "Platelet-rich plasma (PRP) therapy for hair thinning and facial rejuvenation in Greater Kailash, New Delhi, using your own blood's growth factors.",
};

export const prpTherapyHero: TreatmentHeroData = {
  breadcrumb: "PRP Therapy",
  eyebrow: "Hair & Skin Regeneration",
  title: "PRP Therapy — ",
  highlight: "Platelet-Rich Plasma",
  lead: "PRP therapy uses platelets from your own blood, rich in growth factors, injected into the scalp to strengthen existing hair roots and improve hair thinning and density. It can also be used on the face for rejuvenation.",
  pills: [
    { icon: "bloodtype", label: "Uses Your Own Blood" },
    { icon: "spa", label: "Non-Surgical" },
    { icon: "event_repeat", label: "4 Sessions, 1 Month Apart" },
    { icon: "healing", label: "Area Numbed First" },
  ],
  primaryCta: bookConsultationCta("Book a PRP Consultation"),
  secondaryCta: { label: "Watch PRP Explained", href: "#videos", iconLeading: "play_circle" },
  image: {
    src: `${IMG}/prp-scalp-injection.jpg`,
    alt: "PRP being injected into a patient's scalp",
    tag: "Platelet-Rich Plasma",
    captionTitle: "Strengthens existing roots for thicker, denser hair",
    captionText: "An adjunct to—not a replacement for—hair transplant",
  },
};

export const prpTherapyBenefits: CardGridData = {
  eyebrow: "Benefits",
  title: "Benefits of PRP Hair Treatment",
  columns: 3,
  cards: [
    { icon: "grass", title: "Natural Hair Growth", text: "Supports natural hair growth by improving the health of existing follicles." },
    { icon: "anchor", title: "Stronger Hair Roots", text: "Growth factors in platelet-rich plasma help strengthen the follicles and reduce thinning." },
    { icon: "density_medium", title: "Improved Thickness", text: "Reduces thinning while improving the thickness of the hair strands." },
    { icon: "verified_user", title: "Low Risk", text: "Because PRP comes from your own blood, the risk of allergy or rejection is very low." },
    { icon: "trending_up", title: "More Volume", text: "With successive sessions, hair volume increases and hair can look darker and shinier." },
    { icon: "face", title: "Facial Rejuvenation", text: "On the face, PRP helps fine lines and collagen production, and can be combined with micro-needling or laser for scars." },
  ],
};

export const prpTherapyProcess: ProcessData = {
  eyebrow: "The Procedure",
  title: "How PRP Therapy Works",
  intro: "Three main stages, plus a treatment plan built around how advanced your hair loss is.",
  steps: [
    {
      icon: "forum",
      title: "Consultation",
      text: "Your medical history, the treatment area and the extent of hair loss are assessed to plan your sessions.",
      footValue: "Personalised Plan",
    },
    {
      icon: "bloodtype",
      title: "Blood Extraction",
      text: "A small amount of blood is drawn. How much depends on the plasma needed and how severe the hair fall is.",
      footValue: "Your Own Blood",
    },
    {
      icon: "science",
      title: "Sample Processing",
      text: "The blood is centrifuged to separate the platelets, which are combined with plasma to make platelet-rich plasma.",
      footValue: "Centrifugation",
    },
    {
      icon: "vaccines",
      title: "Plasma Injection",
      text: "The area is numbed, then PRP is injected with a fine insulin syringe at many small points across the scalp.",
      footValue: "Heaviness Settles in Hours",
    },
  ],
};

export const prpTherapyCandidates: CalloutData = {
  icon: "person_check",
  eyebrow: "Who It Suits",
  title: "Who Is a Good Candidate for PRP?",
  text: "PRP works on existing hair roots—it cannot grow hair on completely bald areas, which is a common myth. It is best suited to:",
  highlights: [
    { icon: "schedule", title: "Early Hair Loss", text: "People in the early stages of hair loss, as a preventive measure." },
    { icon: "visibility", title: "Noticeable Thinning", text: "When thinning becomes noticeable, the benefits are more visible." },
    { icon: "grass", title: "Weakened Growth", text: "Where follicles are still active but hair growth has weakened." },
  ],
  aside: {
    icon: "payments",
    title: "Indicative Cost",
    subtitle: "Confirmed at Consultation",
    items: ["From INR 7,000–8,000 per session"],
    text: "Final cost depends on your medical history, the treatment area and the extent of hair loss.",
    cta: bookConsultationCta("Get a Personal Quote"),
  },
};

export const prpTherapyVideos: VideoGalleryData = {
  id: "videos",
  eyebrow: "Watch & Learn",
  title: "Dr. Sukhbir Singh Explains PRP",
  videos: [{ youtubeId: "D4IQbHIL21I", title: "PRP kya hota hai — Benefits of PRP Hair Treatment", note: "In Hindi" }],
};

export const prpTherapyFaq: FaqData = {
  eyebrow: "Common Questions",
  title: "FAQs on PRP Therapy",
  items: [
    {
      question: "What is PRP therapy?",
      answer:
        "PRP stands for platelet-rich plasma. It is an autologous treatment—made from your own blood—containing growth factors that improve existing hair roots, reducing thinning and increasing follicle thickness and overall density. It usually requires 4 sessions at 1-month intervals, with a booster session every 6 months.",
    },
    {
      question: "Does PRP work for hair loss?",
      answer:
        "Yes, PRP works well for hair loss, but only on existing roots—it cannot grow hair on completely bald areas, which is a common myth. It is an adjunct to hair transplant, not a replacement for it.",
    },
    {
      question: "Are there side effects after PRP hair treatment?",
      answer:
        "Because PRP is made from your own blood, the risk of allergy or rejection is very low. It is injected with an insulin syringe at many small points across the scalp, which can cause temporary heaviness and mild pain.",
    },
    {
      question: "How long does it hurt after a PRP injection?",
      answer:
        "PRP is denser than blood, so it causes some heaviness and mild pain at the injection site, which usually disappears 5–7 minutes after injection. Any remaining heaviness settles within a couple of hours.",
    },
    {
      question: "Is PRP good for the face? What is a vampire facelift?",
      answer:
        "Yes. PRP's growth factors rejuvenate the face, improve fine lines and support collagen production. A vampire facelift is PRP injected into the face for rejuvenation and a lifting effect. It can be combined with micro-needling, and with laser or micro-needling to improve facial and acne scars.",
    },
  ],
};

export const prpTherapyCta: CtaBandData = {
  eyebrow: "Hair Restoration • Greater Kailash Part 1",
  title: "Strengthen Your Hair With PRP",
  text: "Find out whether PRP is right for your hair loss with a consultation at R-9, Basement, Greater Kailash Part 1, New Delhi - 110048.",
  primaryCta: bookConsultationCta("Book a PRP Consultation"),
  meta: clinicMeta.slice(0, 1),
};
