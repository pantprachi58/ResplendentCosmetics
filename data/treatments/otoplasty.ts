import type { CalloutData, CardGridData, CtaBandData, FaqData, ProcessData, TreatmentHeroData } from "./types";
import { bookConsultationCta, clinicMeta } from "./shared";

// Content sourced from https://www.resplendentcosmetics.com/ear-surgery.php.
// The live page's only photo is watermarked by another clinic, so it is intentionally not used.

export const otoplastyMeta = {
  title: "Otoplasty (Ear Reshaping Surgery) in Delhi NCR | Resplendent Aesthetics",
  description:
    "Otoplasty in Greater Kailash, New Delhi to correct prominent (bat) ears and reshape the ears, with the incision hidden behind the ear. Local or general anaesthesia.",
};

export const otoplastyHero: TreatmentHeroData = {
  breadcrumb: "Otoplasty",
  eyebrow: "Ear Aesthetic Surgery",
  title: "Otoplasty — ",
  highlight: "Cosmetic Ear Surgery",
  lead: "Otoplasty is a procedure to change the shape, position or size of the ears. You might consider it if you are bothered by how far your ears stick out from your head (prominent or bat ears), after an injury to the ear, or for a birth defect such as microtia.",
  pills: [
    { icon: "visibility_off", label: "Incision Hidden Behind the Ear" },
    { icon: "vaccines", label: "Local or General Anaesthesia" },
    { icon: "child_care", label: "Possible From Age 9–10" },
    { icon: "all_inclusive", label: "Near-Permanent Results" },
  ],
  primaryCta: bookConsultationCta("Book an Ear Consultation"),
  secondaryCta: { label: "Read Recovery Guidance", href: "#faq" },
  card: {
    eyebrow: "Procedure at a Glance",
    title: "Otoplasty",
    icon: "hearing",
    checklist: [
      "Corrects prominent (bat) ears on one or both sides",
      "Cartilage reshaped with sutures through an incision behind the ear",
      "Result shown to you before dressing when done under local",
      "Skin sutures removed after 10–14 days",
    ],
    footLabel: "Consultation Studio",
    footValue: "R-9, Greater Kailash Part 1, New Delhi",
  },
};

export const otoplastyIndications: CardGridData = {
  eyebrow: "Who It Helps",
  title: "When to Consider Otoplasty",
  intro:
    "Prominent ears do not affect hearing; the concern is cosmetic and becomes more noticeable as a child grows. Ears reach about 90% of their growth by age 9–10, so correction can be done any time after that.",
  columns: 3,
  cards: [
    {
      icon: "hearing",
      title: "Prominent or Bat Ears",
      text: "Ears that protrude from the head—on one side (unilateral) or both (bilateral)—are a common deformity that otoplasty corrects.",
    },
    {
      icon: "personal_injury",
      title: "Ear Injury",
      text: "Otoplasty can reshape an ear that has been damaged by injury.",
    },
    {
      icon: "child_care",
      title: "Birth Defects (Microtia)",
      text: "Otoplasty is also indicated for congenital ear defects such as microtia.",
    },
  ],
};

export const otoplastyProcess: ProcessData = {
  eyebrow: "The Procedure",
  title: "How Otoplasty Is Performed",
  intro: "The aim is ear correction with as much symmetry as possible, using an incision that is not visible from the front.",
  steps: [
    {
      icon: "forum",
      title: "Consultation",
      text: "Your surgeon assesses your ears and agrees the anaesthesia approach based on your age and preference.",
      footValue: "Symmetry Planned",
    },
    {
      icon: "vaccines",
      title: "Anaesthesia",
      text: "General anaesthesia is usually preferred for children up to 16, and local above that. In adults, one ear is usually done under local and both ears under general anaesthesia.",
      footValue: "Local or General",
    },
    {
      icon: "healing",
      title: "Reshaping the Cartilage",
      text: "The incision is placed behind the ear and the cartilage is shaped with sutures. Under local anaesthesia, Dr. Sukhbir Singh usually shows you the result before the dressing.",
      footValue: "Hidden Incision",
    },
    {
      icon: "self_care",
      title: "Dressing & Discharge",
      text: "A contour dressing is placed around your head. You can go home right away after local anaesthesia, or after 4–6 hours after general. First review is usually at 5 days.",
      footValue: "Sutures Out at 10–14 Days",
    },
  ],
};

export const otoplastyAftercare: CalloutData = {
  icon: "healing",
  eyebrow: "Post-Operative Care",
  title: "Recovery Instructions",
  text: "Follow these instructions to protect your result while the wounds heal. Contact the clinic sooner than your 5-day review if you have more pain or any other concern.",
  highlights: [
    {
      icon: "bed",
      title: "Don't Sleep on the Operated Side",
      text: "The most important instruction during early healing.",
    },
    {
      icon: "fitness_center",
      title: "No Exercise for 3 Weeks",
      text: "Avoid any trauma or physical exercise until the wound heals and sutures are removed.",
    },
    {
      icon: "shower",
      title: "Head Bath After 5–7 Days",
      text: "Sauna is restricted for 4–6 weeks after surgery.",
    },
    {
      icon: "pool",
      title: "Swimming & Running After 6 Weeks",
      text: "Activities such as swimming and running can resume after 6 weeks.",
    },
    {
      icon: "sports_kabaddi",
      title: "No Wrestling for 6 Months",
      text: "Contact sports like wrestling carry a high risk of damage for around 6 months.",
    },
    {
      icon: "diamond",
      title: "Ear Piercing",
      text: "Get piercings done before surgery or at least 3–4 weeks after, once wounds have healed and sutures are out.",
    },
  ],
  cta: bookConsultationCta("Book an Ear Consultation"),
};

export const otoplastyFaq: FaqData = {
  eyebrow: "Common Questions",
  title: "FAQs on Ear Surgery",
  items: [
    {
      question: "What is a prominent or bat ear deformity?",
      answer:
        "Prominent ear, also called bat ear deformity, is a common condition named for the protrusion of the ear, on one side (unilateral) or both (bilateral). It is mainly cosmetic, becomes more noticeable as a child grows, and does not affect hearing. It can be corrected any time after age 9–10, when the ears have reached about 90% of their growth.",
    },
    {
      question: "How is otoplasty done? Is it under local or general anaesthesia?",
      answer:
        "Otoplasty can be done under local or general anaesthesia depending on age and preference. For children up to 16 we usually prefer general anaesthesia, and local above that. In adults, one ear is usually done under local and both ears under general anaesthesia. The incision is placed behind the ear so it is not visible from the front, and the cartilage is shaped with sutures. Under local anaesthesia, Dr. Sukhbir Singh usually shows you the result before the dressing is applied.",
    },
    {
      question: "What happens immediately after surgery, and what precautions should I take?",
      answer:
        "An ear contour dressing is placed around your head. After local anaesthesia you can go home once medications are prescribed; after general anaesthesia, after 4–6 hours. Do not sleep on the operated side, and avoid any trauma or physical exercise for 3 weeks until the wound heals and sutures are removed. Swimming and running can resume after 6 weeks, but avoid wrestling for at least 6 months. Head baths can resume in 5–7 days, and sauna is restricted for 4–6 weeks. The first review is usually after 5 days, or earlier if you have more pain or any other issue.",
    },
    {
      question: "When will my sutures be removed?",
      answer:
        "Skin sutures are normally removed 10–14 days after surgery, when all dressings are also removed. A headband may or may not be needed at night if you follow all instructions—an overly tight headband can itself damage the ear.",
    },
    {
      question: "Will I get a 100% symmetric result?",
      answer:
        "No two sides of the body are 100% symmetric, but we aim to make the ears as close to perfect as possible. Dr. Sukhbir Singh usually shows you both sides before the final dressing.",
    },
    {
      question: "Are the results permanent?",
      answer:
        "Results are nearly permanent, as the sutures reshape the ears over time. In fewer than 5–7% of cases, the cartilage's 'memory' can cause it to shift position; this is rare and can be corrected later.",
    },
    {
      question: "Can I have my ears pierced after the operation?",
      answer:
        "We suggest getting piercings done before surgery or at least 3–4 weeks after, as there is a risk of infection or of sutures cutting through the pierced ear. Once the wounds have healed and the sutures are removed, piercing can be done easily.",
    },
  ],
};

export const otoplastyCta: CtaBandData = {
  eyebrow: "Ear Aesthetics • Greater Kailash Part 1",
  title: "Discuss Ear Reshaping With Our Surgeons",
  text: "Book a consultation for prominent ear correction or ear reshaping at R-9, Basement, Greater Kailash Part 1, New Delhi - 110048.",
  primaryCta: bookConsultationCta("Book an Ear Consultation"),
  meta: clinicMeta.slice(0, 1),
};
