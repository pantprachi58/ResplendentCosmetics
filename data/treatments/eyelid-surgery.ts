import type {
  CalloutData,
  CardGridData,
  CaseGalleryData,
  CtaBandData,
  FaqData,
  ProcessData,
  TreatmentHeroData,
  VideoGalleryData,
} from "./types";
import { bookConsultationCta, clinicMeta } from "./shared";

// Content and photos sourced from https://www.resplendentcosmetics.com/eyelid-surgery.php.

const IMG = "/images/pages/eyelid-surgery";

export const eyelidSurgeryMeta = {
  title: "Eyelid Surgery (Blepharoplasty) in Delhi | Resplendent Aesthetics",
  description:
    "Upper and lower eyelid surgery in Greater Kailash, New Delhi. A 30–45 minute day-care procedure under local anaesthesia to remove excess skin and fat for a fresher, more youthful look.",
};

export const eyelidSurgeryHero: TreatmentHeroData = {
  breadcrumb: "Eyelid Surgery",
  eyebrow: "Facial Aesthetic Surgery",
  title: "Eyelid Surgery — ",
  highlight: "Blepharoplasty",
  lead: "Our eyes show our thoughts and emotions—and tiredness, puffiness, drooping skin and age show there first. Eyelid surgery treats sagging skin, excess fat and drooping muscles of the eyelids for a lasting, brighter and more youthful look.",
  pills: [
    { icon: "vaccines", label: "Local Anaesthesia" },
    { icon: "timer", label: "30–45 Minutes" },
    { icon: "event_available", label: "Day-Care Procedure" },
    { icon: "visibility", label: "Can Improve Vision" },
  ],
  primaryCta: bookConsultationCta("Book an Eyelid Consultation"),
  secondaryCta: { label: "See Before & After", href: "#before-after" },
  image: {
    src: `${IMG}/eyelid-surgery.jpg`,
    alt: "Surgeon marking a patient's lower eyelids before blepharoplasty",
    tag: "Blepharoplasty",
    captionTitle: "Skin tightening, fat removal and a brighter look",
    captionText: "Upper, lower and four-eyelid surgery",
  },
};

export const eyelidSurgeryTypes: CardGridData = {
  eyebrow: "Types of Eyelid Surgery",
  title: "Tailored to Your Eyelids",
  intro:
    "Blepharoplasty is performed mainly for aesthetic reasons, removing or readjusting eyelid tissue to reduce puffiness, wrinkles and drooping.",
  columns: 4,
  cards: [
    {
      icon: "keyboard_arrow_up",
      title: "Upper Eyelid Surgery",
      text: "Removes excess skin and/or fat through an incision in the upper eyelid crease, relieving puffiness and drooping.",
    },
    {
      icon: "keyboard_arrow_down",
      title: "Lower Eyelid Surgery",
      text: "Removes or repositions excess fat through a hidden transconjunctival or subciliary incision to improve eye bags and wrinkles.",
    },
    {
      icon: "grid_view",
      title: "Four-Eyelid Surgery",
      text: "All four eyelids treated in one sitting—often with canthal tilt correction—for late middle-aged to elderly patients.",
    },
    {
      icon: "visibility",
      title: "Double Eyelid (Asian Blepharoplasty)",
      text: "Creates a natural upper eyelid crease for those of Asian descent who lack one.",
    },
  ],
};

export const eyelidSurgeryProcess: ProcessData = {
  eyebrow: "The Procedure",
  title: "How Blepharoplasty Is Performed",
  intro: "A day-care procedure under local anaesthesia, performed with minute, discreet incisions to avoid visible scarring.",
  steps: [
    {
      icon: "forum",
      title: "Consultation & Marking",
      text: "The areas to treat are agreed so your surgeon knows the result you want. Excess skin is marked before surgery.",
      footValue: "Customised Plan",
    },
    {
      icon: "vaccines",
      title: "Local Anaesthesia",
      text: "Upper and lower eyelid surgery are both performed under local anaesthesia as day-care procedures.",
      footValue: "Day-Care Procedure",
    },
    {
      icon: "healing",
      title: "Surgery",
      text: "Excess skin is removed and herniated fat pads are removed or repositioned. Layers are closed carefully so the scar falls in a natural crease or out of sight.",
      footValue: "About 30–45 Minutes",
    },
    {
      icon: "self_care",
      title: "Recovery",
      text: "Sterile tapes support the eyelids for a few days. Wear dark glasses, use ice for swelling, and return to work from the next day if you wish. Stitches come out after 10 days.",
      footValue: "Back to Work Next Day",
    },
  ],
};

export const eyelidSurgeryBenefits: CardGridData = {
  eyebrow: "Benefits",
  title: "Why Patients Choose Eyelid Surgery",
  columns: 3,
  cards: [
    {
      icon: "face",
      title: "Youthful Appearance",
      text: "Reduces wrinkles, under-eye bags, puffiness, and excess skin and fat for a rejuvenated look.",
    },
    {
      icon: "visibility",
      title: "Vision Improvement",
      text: "Droopy lids, extra skin and fat can obstruct vision; removing them can improve it, especially in older patients.",
    },
    {
      icon: "self_improvement",
      title: "Self-Confidence",
      text: "Addresses the tired, aged look around the eyes that can affect how you feel about yourself.",
    },
    {
      icon: "all_inclusive",
      title: "Long-Lasting Results",
      text: "Results usually last 5–7 years or longer, depending on how your skin ages and how well you care for it.",
    },
    {
      icon: "tune",
      title: "Customised Solutions",
      text: "Target areas are discussed with you so incisions are planned for the result you want.",
    },
    {
      icon: "person_check",
      title: "Who It Suits",
      text: "People with wrinkled or sagging eyelids, droopy or tired-looking eyes, or vision impaired by excess fat—from ageing or genetics.",
    },
  ],
};

export const eyelidSurgeryCases: CaseGalleryData = {
  id: "before-after",
  eyebrow: "Results",
  title: "Before & After Eyelid Surgery",
  note: "Individual results vary",
  columns: 3,
  cases: [1, 2, 3].map((n) => ({
    caseId: `Patient ${n}`,
    title: "Eyelid Surgery — Before & After",
    before: { src: `${IMG}/before-after-${n * 2 - 1}.jpg`, alt: `Patient ${n} eyes before eyelid surgery` },
    after: { src: `${IMG}/before-after-${n * 2}.jpg`, alt: `Patient ${n} eyes after eyelid surgery`, label: "After" },
  })),
};

export const eyelidSurgeryCost: CalloutData = {
  icon: "payments",
  eyebrow: "Indicative Cost",
  title: "Blepharoplasty Cost in Delhi",
  text: "Cost depends on the surgeon's expertise, the facility, and whether upper, lower or both eyelids are treated. Prices include post-operative care and all facility and medicine charges for the duration of surgery. Your surgeon will confirm the final cost at consultation.",
  highlights: [
    { icon: "keyboard_arrow_up", title: "Upper Eyelid", text: "INR 40,000–50,000" },
    { icon: "keyboard_arrow_down", title: "Lower Eyelid", text: "INR 45,000–55,000" },
    { icon: "receipt_long", title: "Inclusive Pricing", text: "Post-operative care, facility charges and medicines included." },
  ],
  cta: bookConsultationCta("Get a Personal Quote"),
};

export const eyelidSurgeryVideos: VideoGalleryData = {
  id: "videos",
  eyebrow: "Watch & Learn",
  title: "Upper & Lower Eyelid Surgery Explained",
  videos: [
    {
      youtubeId: "ijhVn1fM3g8",
      title: "Upper and Lower Eyelid Surgery: Blepharoplasty — Dr. Sukhbir Singh",
    },
  ],
};

export const eyelidSurgeryFaq: FaqData = {
  eyebrow: "Common Questions",
  title: "FAQs on Eyelid Surgery (Blepharoplasty)",
  items: [
    {
      question: "What is blepharoplasty (eyelid surgery)?",
      answer:
        "Blepharoplasty, also known as eyelid surgery, is performed mainly for aesthetic reasons. Upper blepharoplasty removes excess skin and/or fat. Lower blepharoplasty removes or repositions excess fat to give a contoured eyelid, and can be combined with lateral canthopexy in selected cases.",
    },
    {
      question: "How is upper eyelid surgery performed?",
      answer:
        "Upper blepharoplasty is performed through an incision in the upper eyelid crease, under local anaesthesia, as a day-care procedure. Excess skin is removed according to pre-operative markings, then herniated fat pads are addressed. The layers are closed carefully so the final scar falls in the eyelid crease for a natural look. Tapes are applied at the end, and sutures are removed after 10 days.",
    },
    {
      question: "How is lower eyelid surgery performed?",
      answer:
        "Lower blepharoplasty is performed through a subciliary incision or a transconjunctival approach, under local anaesthesia, as a day-care procedure. The transconjunctival approach suits younger people with only excess fat bulging—the incision is inside the eyelid, so no scar is visible. The subciliary incision is placed carefully below the eyelashes to remove or reposition excess fat. Procedures such as lateral canthopexy can be combined to correct the canthal tilt.",
    },
    {
      question: "What is four-eyelid surgery?",
      answer:
        "Four-eyelid surgery treats all four eyelids (upper and lower, both sides) in a single sitting. It is usually done for late middle-aged to elderly patients who need correction of excess skin and/or fat as well as canthal tilt or other issues discussed at consultation. It is a day-care procedure under local anaesthesia.",
    },
    {
      question: "What is Asian blepharoplasty (double eyelid surgery)?",
      answer:
        "Double eyelid surgery creates an eyelid crease in people of Asian descent who usually lack one. It is done for aesthetic reasons as a day-care procedure under local anaesthesia. The missing attachment between the eyelid-lifting muscle and the skin is recreated with permanent sutures so the crease stays permanent; excess skin and fat may also be removed for a deep, natural crease.",
    },
    {
      question: "Where are the scars after blepharoplasty?",
      answer:
        "Scars are permanent, so they are planned carefully. In upper blepharoplasty the incision sits in the upper eyelid crease, mimicking a natural crease. With the transconjunctival approach, scars are inside the eyelid and never seen. A well-placed subciliary scar is hardly visible after a couple of days and heals well.",
    },
    {
      question: "What can I expect after eyelid surgery?",
      answer:
        "Heaviness and swelling of the eyelids are expected immediately after surgery. Sterile tapes support the eyelids for a few days. You can wear dark glasses and return to work from the next day if you wish, and icing helps the swelling settle over a few days. You will be given antibiotics, anti-inflammatory medication, and eye drops or ointment to keep your eyes moist during sleep. Stitches are removed after 10 days, after which an anti-scar cream helps the scar fade further.",
    },
    {
      question: "How long does the surgery take?",
      answer:
        "Upper or lower blepharoplasty usually takes 30–45 minutes under local anaesthesia. Because it is performed so close to the eyes, it should only be done by an experienced surgeon who takes great care to protect the cornea and conjunctiva.",
    },
    {
      question: "Can upper eyelid surgery improve vision?",
      answer:
        "Yes. As well as the aesthetic benefit, upper blepharoplasty can improve vision—especially in older patients—because it removes excess skin and the herniated fat that presses on the upper eyelid.",
    },
    {
      question: "How long do the results last?",
      answer:
        "Results usually last 5–7 years or longer, depending on how your skin ages and how you care for it—regular moisturiser, sunscreen and serums help prevent sun damage.",
    },
    {
      question: "How can droopy eyelids be fixed without surgery?",
      answer:
        "For younger people who prefer to avoid surgery, a thread lift can lift the eyelids and eyebrows. It is a quick outpatient procedure; mild swelling settles quickly and results are best after 3 weeks.",
    },
    {
      question: "Can eyelid fat be removed without surgery?",
      answer:
        "Eyelid fat cannot be removed without surgery. Instead, fillers placed at a few strategic points can stretch the ligaments around the eyes and help reposition the fat more favourably.",
    },
    {
      question: "How much does eyelid surgery cost?",
      answer:
        "Cost depends on several factors. Indicatively, it ranges from INR 40,000–50,000 for the upper eyelids and INR 45,000–55,000 for the lower eyelids in Delhi.",
    },
  ],
};

export const eyelidSurgeryCta: CtaBandData = {
  eyebrow: "Facial Aesthetics • Greater Kailash Part 1",
  title: "Refresh Tired Eyes With Eyelid Surgery",
  text: "Discuss upper, lower or four-eyelid surgery with our surgeons at R-9, Basement, Greater Kailash Part 1, New Delhi - 110048.",
  primaryCta: bookConsultationCta("Book an Eyelid Consultation"),
  meta: clinicMeta.slice(0, 1),
};
