import type { CalloutData, CtaBandData, FaqData, ProcessData, TreatmentHeroData } from "./types";
import { bookConsultationCta, clinicMeta } from "./shared";

// Content sourced from https://www.resplendentcosmetics.com/hymenoplasty-surgery.php.
// Copy is kept neutral and non-judgemental; the self-promotional "best clinic" FAQ is omitted.

const IMG = "/images/pages/hymenoplasty";

export const hymenoplastyMeta = {
  title: "Hymenoplasty (Hymen Restoration Surgery) in Delhi | Resplendent Aesthetics",
  description:
    "Confidential hymenoplasty in Greater Kailash, New Delhi: a 30–60 minute day-care procedure under local anaesthesia with dissolvable stitches. Online or in-clinic consultation.",
};

export const hymenoplastyHero: TreatmentHeroData = {
  breadcrumb: "Hymenoplasty",
  eyebrow: "Women's Intimate Surgery",
  title: "Hymenoplasty — ",
  highlight: "Hymen Restoration Surgery",
  lead: "Hymenoplasty is a minor procedure that reconstructs or restores the hymen, the thin membrane partially covering the vaginal opening. Women choose it for cultural, personal or emotional reasons, and every case is handled with complete discretion, professionalism and care.",
  pills: [
    { icon: "lock", label: "100% Confidential" },
    { icon: "vaccines", label: "Local Anaesthesia" },
    { icon: "timer", label: "30–60 Minutes" },
    { icon: "home", label: "Home the Same Day" },
  ],
  primaryCta: bookConsultationCta("Book a Confidential Consultation"),
  secondaryCta: { label: "Read Common Questions", href: "#faq" },
  image: {
    src: `${IMG}/hymenoplasty.jpg`,
    alt: "Woman holding a flower, representing women's intimate health",
    tag: "Confidential Care",
    captionTitle: "Private, respectful and discreet",
    captionText: "Online or in-clinic consultation",
  },
};

export const hymenoplastyProcess: ProcessData = {
  eyebrow: "The Procedure",
  title: "Hymenoplasty Step by Step",
  intro: "Your specific concerns are addressed before, during and after the procedure.",
  steps: [
    {
      icon: "forum",
      title: "Consultation",
      text: "An in-depth consultation—online or in clinic—where the doctor discusses your expectations and medical history.",
      footValue: "Online or In-Clinic",
    },
    {
      icon: "vaccines",
      title: "Local Anaesthesia",
      text: "The procedure is carried out under local anaesthesia as a minor outpatient procedure.",
      footValue: "Mild Discomfort Only",
    },
    {
      icon: "healing",
      title: "Restoration",
      text: "The remnants of the hymen are stitched together with dissolvable stitches to recreate its natural appearance.",
      footValue: "30–60 Minutes",
    },
    {
      icon: "self_care",
      title: "Recovery",
      text: "You return home the same day and resume normal activities in a few days. Full recovery takes about 4–6 weeks, with complete aftercare instructions provided.",
      footValue: "Full Recovery 4–6 Weeks",
    },
  ],
};

export const hymenoplastyPrivacy: CalloutData = {
  icon: "lock",
  eyebrow: "Privacy & Cost",
  title: "Complete Confidentiality at Every Stage",
  text: "We understand how personal this decision is. Whether you choose an online consultation or an in-clinic visit, your privacy is our top priority, and pricing is transparent with no hidden charges.",
  highlights: [
    { icon: "videocam", title: "Online Consultation", text: "Discuss your concerns privately before visiting." },
    { icon: "shield_lock", title: "Discreet Care", text: "Every case is treated with discretion and compassion." },
    { icon: "receipt_long", title: "Transparent Pricing", text: "No hidden charges; cost explained upfront." },
  ],
  aside: {
    icon: "payments",
    title: "Indicative Cost",
    subtitle: "Confirmed at Consultation",
    items: ["₹25,000–75,000"],
    text: "Cost varies by case, the surgeon's expertise and any additional treatment required.",
    cta: bookConsultationCta("Book a Confidential Consultation"),
  },
};

export const hymenoplastyFaq: FaqData = {
  eyebrow: "Common Questions",
  title: "Hymenoplasty FAQs",
  items: [
    {
      question: "What is a hymenoplasty procedure?",
      answer: "A minor surgical procedure that reconstructs or restores the hymen, the thin membrane at the vaginal opening.",
    },
    {
      question: "How does the hymen tear, and why do women choose restoration?",
      answer:
        "The hymen typically tears during penetrative intercourse, but it can also tear during vigorous physical activities such as cycling, dancing and swimming. Women choose hymen restoration for cultural, emotional or personal reasons.",
    },
    {
      question: "Is hymenoplasty painful? How long does it take?",
      answer:
        "It is done under local anaesthesia and is generally not very painful—you may feel mild discomfort for a few hours. The procedure takes about 30–60 minutes.",
    },
    {
      question: "What happens during hymen reconstruction surgery?",
      answer:
        "The remnants of the torn hymen are carefully stitched together with dissolvable stitches to recreate the appearance of an intact hymen.",
    },
  ],
};

export const hymenoplastyCta: CtaBandData = {
  eyebrow: "Women's Intimate Surgery • Greater Kailash Part 1",
  title: "Book a Confidential Appointment",
  text: "Take the next step with complete privacy—online or in clinic at R-9, Basement, Greater Kailash Part 1, New Delhi - 110048.",
  primaryCta: bookConsultationCta("Book a Confidential Consultation"),
  meta: clinicMeta.slice(0, 1),
};
