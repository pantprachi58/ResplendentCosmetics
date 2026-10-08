import type { CalloutData, CardGridData, CtaBandData, FaqData, ProcessData, TreatmentHeroData } from "./types";
import { bookConsultationCta, clinicMeta } from "./shared";

// Content sourced from https://www.resplendentcosmetics.com/buttock-calf-augmentation.php.
// All live photos are watermarked by another clinic and are intentionally not used.

export const buttockCalfMeta = {
  title: "Buttock & Calf Augmentation (Brazilian Butt Lift) in Delhi | Resplendent Aesthetics",
  description:
    "Buttock and calf augmentation with implants or fat transfer (Brazilian butt lift), plus pectoral and deltoid implants, in Greater Kailash, New Delhi.",
};

export const buttockCalfHero: TreatmentHeroData = {
  breadcrumb: "Buttock & Calf Augmentation",
  eyebrow: "Body Contouring Surgery",
  title: "Buttock & Calf ",
  highlight: "Reshaping",
  lead: "Buttock (gluteal) and calf augmentation use implants to increase the size of the buttocks or calves, or to reshape them. A Brazilian butt lift instead uses your own fat—harvested from areas such as the abdomen or thighs—to increase buttock size.",
  pills: [
    { icon: "local_hospital", label: "Hospital Day-Care Set-Up" },
    { icon: "vaccines", label: "General Anaesthesia" },
    { icon: "timer", label: "1.5–2 Hours per Area" },
    { icon: "water_drop", label: "Implant or Fat Transfer" },
  ],
  primaryCta: bookConsultationCta("Book a Body Consultation"),
  secondaryCta: { label: "Read Recovery Guidance", href: "#faq" },
  image: {
    src: "/images/procedures/9.png",
    alt: "Contour markings drawn on the buttocks before body reshaping",
    tag: "Body Contouring",
  },
  card: {
    eyebrow: "Procedure at a Glance",
    title: "Body Implants & BBL",
    icon: "accessibility_new",
    checklist: [
      "Implants enhance, reshape or define the area",
      "Brazilian butt lift uses your own fat",
      "Fat transfer may need more than one sitting",
      "Performed under general anaesthesia with full sterile precautions",
    ],
    footLabel: "Consultation Studio",
    footValue: "R-9, Greater Kailash Part 1, New Delhi",
  },
};

export const buttockCalfOptions: CardGridData = {
  eyebrow: "Options",
  title: "Body Augmentation Procedures",
  intro:
    "Body implants enhance, reshape or better define an area. Some patients choose them for cosmetic reasons; others to correct a deformity from a birth defect, disease or excessive weight loss.",
  columns: 4,
  cards: [
    {
      icon: "accessibility_new",
      title: "Buttock Implants",
      text: "Implants increase the size of the buttocks or reshape them.",
    },
    {
      icon: "water_drop",
      title: "Brazilian Butt Lift",
      text: "Your own fat increases buttock size. As some fat is naturally resorbed, more than one sitting may be needed.",
    },
    {
      icon: "directions_walk",
      title: "Calf Implants",
      text: "Implants increase the size of the calves or improve their shape.",
    },
    {
      icon: "fitness_center",
      title: "Pectoral & Deltoid Implants",
      text: "Implants define the chest or shoulders. Pectoral implants can also help mild pectus carinatum or excavatum.",
    },
  ],
};

export const buttockCalfProcess: ProcessData = {
  eyebrow: "What to Expect",
  title: "Your Procedure & Recovery",
  intro: "Usually one area is treated at a time, though buttock and calf implants can be combined as no change of position is needed.",
  steps: [
    {
      icon: "forum",
      title: "Consultation",
      text: "Dr. Sukhbir Singh discusses your goals, the right procedure, and the risks involved.",
      footValue: "Personalised Plan",
    },
    {
      icon: "local_hospital",
      title: "Surgery",
      text: "Performed with complete sterile precautions in a hospital day-care set-up under general anaesthesia.",
      footValue: "1.5–2 Hours per Area",
    },
    {
      icon: "bed",
      title: "Early Recovery",
      text: "After buttock or calf implants, sleep face-down for 10–14 days or more. Mild pain is controlled with medicines.",
      footValue: "Prone Sleeping 10–14 Days",
    },
    {
      icon: "flight",
      title: "Return to Routine",
      text: "Avoid travel for 4 weeks after buttock or calf implants and plan a couple of weeks off work. Final results show after a few months.",
      footValue: "No Travel for 4 Weeks",
    },
  ],
};

export const buttockCalfRecovery: CalloutData = {
  icon: "schedule",
  eyebrow: "Recovery by Procedure",
  title: "How Long Before You're Back to Normal?",
  text: "Rest depends on the procedure you have. Bruising and swelling are common and improve gradually over a few weeks.",
  highlights: [
    { icon: "accessibility_new", title: "Buttock & Calf", text: "Sleep face-down 10–14 days; no travel for 4 weeks; a couple of weeks off work." },
    { icon: "fitness_center", title: "Pectoral & Deltoid", text: "Back to work within a week; no heavy lifting or exercise for 6–8 weeks." },
    { icon: "medication", title: "Pain & Swelling", text: "Mild pain eased by medicine; the final result is seen after a few months." },
  ],
  cta: bookConsultationCta("Book a Body Consultation"),
};

export const buttockCalfFaq: FaqData = {
  eyebrow: "Common Questions",
  title: "FAQs on Body Implants",
  intro: "Covers buttock, calf, pectoral and deltoid augmentation (breast implants are covered separately).",
  items: [
    {
      question: "What do body implants do?",
      answer:
        "Body implants (calf, pectoral, buttock, deltoid and triceps) enhance, reshape or better define an area for a more aesthetic appearance. Some people choose them for purely cosmetic reasons; others to correct a deformity from a birth defect, disease or excessive weight loss.",
    },
    {
      question: "Are these procedures done under local or general anaesthesia? How long do they take?",
      answer:
        "They are done under general anaesthesia with complete sterile precautions in a hospital day-care set-up. On average, each area takes about 1.5–2 hours.",
    },
    {
      question: "Can two or more procedures be combined?",
      answer:
        "We usually recommend one area at a time. In some cases—such as buttock and calf implants—they can be combined because no change of position is needed. The position you must rest in after surgery also determines which procedures can be combined.",
    },
    {
      question: "How long must I rest? When can I return to work or travel?",
      answer:
        "It depends on the procedure. After buttock or calf implants, you will usually sleep face-down for 10–14 days or more and should not travel for 4 weeks, so plan a break of a couple of weeks from work. After pectoral or deltoid implants, you can return to work within a week, avoiding heavy lifting or exercise for 6–8 weeks.",
    },
    {
      question: "Is there a lot of pain or swelling?",
      answer:
        "Pain is mild and easily controlled with medicines, varying with the operation. Bruising and swelling are common and improve gradually over a few weeks. The final result can usually be appreciated a few months after surgery.",
    },
    {
      question: "What are the risks of body implants?",
      answer:
        "The most common risks include bleeding, infection, implant rejection, asymmetry and scarring. These are infrequent but can occur, and Dr. Sukhbir Singh will discuss them with you at consultation.",
    },
    {
      question: "Can pectoral implants help congenital chest problems?",
      answer: "Yes, but only the mild forms of pectus carinatum or pectus excavatum.",
    },
    {
      question: "If revision surgery is needed, will I be charged?",
      answer:
        "Occasionally a patient may have an adverse reaction, rejection or complication that requires revision. In that case there is usually no charge for the surgeon's professional services, but anaesthesia, hospital and other ancillary expenses are payable by the patient.",
    },
  ],
};

export const buttockCalfCta: CtaBandData = {
  eyebrow: "Body Contouring • Greater Kailash Part 1",
  title: "Discuss Your Body Contouring Goals",
  text: "Explore buttock, calf and body implant options with Dr. Sukhbir Singh at R-9, Basement, Greater Kailash Part 1, New Delhi - 110048.",
  primaryCta: bookConsultationCta("Book a Body Consultation"),
  meta: clinicMeta.slice(0, 1),
};
