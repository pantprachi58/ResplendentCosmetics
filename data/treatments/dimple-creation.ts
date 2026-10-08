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

// Content sourced from http://resplendentcosmetics.com/dimple-creation-surgery.php.
// The live before/after photos are watermarked by another clinic, so they are intentionally not used.

export const dimpleCreationMeta = {
  title: "Dimple Creation Surgery (Dimpleplasty) in Delhi | Resplendent Aesthetics",
  description:
    "Dimple creation surgery in Greater Kailash, New Delhi. A quick, almost painless 30-minute procedure under local anaesthesia, performed from inside the cheek with no visible scar.",
};

export const dimpleCreationHero: TreatmentHeroData = {
  breadcrumb: "Dimple Creation",
  eyebrow: "Facial Aesthetic Surgery",
  title: "Dimple Creation — ",
  highlight: "Dimpleplasty",
  lead: "A dimple is a small, noticeable dent on the cheek that makes a smile more cheerful and eye-catching. Dimple creation surgery—also called dimpleplasty—creates a natural-looking dimple through a simple procedure performed from inside the cheek.",
  pills: [
    { icon: "vaccines", label: "Local Anaesthesia" },
    { icon: "timer", label: "About 30 Minutes" },
    { icon: "visibility_off", label: "No Visible Scar" },
    { icon: "home", label: "Home Immediately After" },
  ],
  primaryCta: bookConsultationCta("Book a Dimple Consultation"),
  secondaryCta: { label: "Watch the Procedure Explained", href: "#videos", iconLeading: "play_circle" },
  image: {
    src: "/images/procedures/7.png",
    alt: "Smiling woman with natural cheek dimples",
    tag: "Dimpleplasty",
  },
  card: {
    eyebrow: "Procedure at a Glance",
    title: "Dimple Creation",
    icon: "sentiment_very_satisfied",
    checklist: [
      "Quick and almost painless, taking about half an hour",
      "Performed under local anaesthesia",
      "Done from inside the cheek, so no scar is visible",
      "Recovery is almost immediate",
    ],
    footLabel: "Consultation Studio",
    footValue: "R-9, Greater Kailash Part 1, New Delhi",
  },
};

export const dimpleCreationBenefits: CardGridData = {
  eyebrow: "Benefits",
  title: "Why Patients Choose Dimpleplasty",
  intro:
    "Natural dimples come from a small natural defect in the cheek muscle, usually inherited. Surgery recreates this effect for a pleasing, natural look.",
  columns: 4,
  cards: [
    {
      icon: "mood",
      title: "Enhanced Smile",
      text: "Dimples are a charming feature that can enhance your facial appearance.",
    },
    {
      icon: "self_improvement",
      title: "Boost in Confidence",
      text: "A long-lasting way to feel more confident about the way you look.",
    },
    {
      icon: "all_inclusive",
      title: "Long-Lasting Result",
      text: "Dimple creation is designed as a permanent change.",
    },
    {
      icon: "visibility_off",
      title: "No Scar Marks",
      text: "The surgery is done inside the cheek, not on the outer skin, so no scar is visible.",
    },
  ],
};

export const dimpleCreationProcess: ProcessData = {
  eyebrow: "The Procedure",
  title: "How a Dimple Is Created",
  intro: "A short procedure under local anaesthesia, after which you walk home the same day.",
  steps: [
    {
      icon: "forum",
      title: "Consultation",
      text: "Your surgeon evaluates your facial anatomy and discusses the size and location of the dimple you want.",
      footValue: "Size & Position Planned",
    },
    {
      icon: "draw",
      title: "Marking & Anaesthesia",
      text: "The area for the dimple is marked and numbed with local anaesthesia.",
      footValue: "Local Anaesthesia",
    },
    {
      icon: "healing",
      title: "Creating the Dimple",
      text: "A small incision is made inside the cheek (buccal mucosa), followed by a small dissection through the muscle. An absorbable stitch links the underside of the skin to the cheek lining to form the dimple.",
      footValue: "About 30 Minutes",
    },
    {
      icon: "self_care",
      title: "Recovery",
      text: "Recovery is almost immediate. Swelling settles in 7–10 days (at most 15), and a natural dimple that appears when you smile develops within 2–3 months.",
      footValue: "Home the Same Day",
    },
  ],
};

export const dimpleCreationCost: CalloutData = {
  icon: "payments",
  eyebrow: "Indicative Cost",
  title: "Dimple Creation Cost in Delhi",
  text: "Cost depends on whether you want one or both sides, whether it is a first-time or repeat procedure, and whether a chin dimple is included. The total may also include consultation, anaesthesia and post-operative care—your surgeon will confirm the final cost at consultation.",
  highlights: [
    { icon: "looks_one", title: "One Side", text: "INR 20,000" },
    { icon: "looks_two", title: "Both Sides", text: "INR 35,000" },
    { icon: "info", title: "Confirmed at Consultation", text: "Complex or repeat procedures are priced individually." },
  ],
  cta: bookConsultationCta("Get a Personal Quote"),
};

export const dimpleCreationVideos: VideoGalleryData = {
  id: "videos",
  eyebrow: "Watch & Learn",
  title: "Dr. Sukhbir Singh Explains Dimple Surgery",
  videos: [
    {
      youtubeId: "5t1chqyIkEY",
      title: "Dimple Creation Surgery — How Dimple Surgery Is Done",
      note: "In Hindi",
    },
  ],
};

export const dimpleCreationFaq: FaqData = {
  eyebrow: "Common Questions",
  title: "FAQs on Dimple Creation",
  items: [
    {
      question: "What is dimple creation surgery?",
      answer:
        "Dimple creation recreates the small defect in the cheek muscle that forms a natural dimple. A small incision is made inside the cheek, and an absorbable stitch is placed from the underside of the skin where the dimple is wanted and tied to the cheek lining. It is done painlessly under local anaesthesia, recovery is almost immediate, and you walk home straight after the procedure.",
    },
    {
      question: "Why do dimples occur naturally?",
      answer:
        "Dimples occur due to a natural defect in the cheek muscles. They are usually inherited and may appear on both cheeks or only one, typically when you smile or talk. Dimples are naturally seen on the cheeks and chin.",
    },
    {
      question: "Is dimple creation permanent?",
      answer:
        "At first the dimple is static—visible even at rest—and may not look natural because of swelling, which settles within 7–10 days (at most 15). Within 2–3 months, as internal healing occurs, a natural dimple appears only when you smile, and it usually stays. Occasionally, due to poor healing (most commonly dental infections) or unknown causes, a dimple can fade after 2–3 years; the procedure can then easily be repeated.",
    },
    {
      question: "How much does dimple creation surgery cost?",
      answer:
        "Indicatively, INR 20,000 for one side and INR 35,000 for both sides. Cost depends on whether you want one or both sides, whether it is a first-time or repeat procedure, and whether you also want a chin dimple. Your doctor will discuss this in detail before the surgery is planned.",
    },
    {
      question: "What is chin dimple creation (mentoplasty)?",
      answer:
        "A natural chin dimple forms when the two halves of the lower jaw do not fully fuse in the midline, and it is usually inherited. A chin dimple can be created as a day-care procedure by removing a little soft tissue in the midline beneath the skin, and sometimes shaving a small portion of bone. The surgery is done from inside the mouth, so there are no visible stitches or marks.",
    },
    {
      question: "How can a chin dimple be removed?",
      answer:
        "Some people prefer to remove an inherited chin dimple. This can be done with a chin implant placed through a small incision, which fills the area and gives the lower jaw a uniform shape. It is a day-care procedure and you go home the same day.",
    },
  ],
};

export const dimpleCreationCta: CtaBandData = {
  eyebrow: "Facial Aesthetics • Greater Kailash Part 1",
  title: "Plan Your Natural-Looking Dimples",
  text: "Discuss the size and position of your dimples with our surgeons at R-9, Basement, Greater Kailash Part 1, New Delhi - 110048.",
  primaryCta: bookConsultationCta("Book a Dimple Consultation"),
  meta: clinicMeta.slice(0, 1),
};
