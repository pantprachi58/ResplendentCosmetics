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

// Content sourced from https://www.resplendentcosmetics.com/vaginoplasty-surgery.php.
// The live page has no procedure imagery, so the page relies on icons and the clinic's own videos.

export const vaginoplastyMeta = {
  title: "Vaginoplasty & Vaginal Rejuvenation Surgery in Delhi NCR | Resplendent Aesthetics",
  description:
    "Vaginoplasty and vaginal rejuvenation in Greater Kailash, New Delhi. A 30–45 minute procedure under local anaesthesia that tightens lax vaginal tissues using your own tissues and muscles.",
};

export const vaginoplastyHero: TreatmentHeroData = {
  breadcrumb: "Vaginoplasty & Vaginal Rejuvenation",
  eyebrow: "Women's Aesthetic & Intimate Surgery",
  title: "Vaginoplasty — ",
  highlight: "Vaginal Rejuvenation",
  lead: "Vaginal rejuvenation is essentially a facelift for the vulva and vagina. It often combines a vaginoplasty and labiaplasty (labia reduction), with or without vaginal enhancement using fat transfer, to improve its outer appearance for a refreshed look and feel.",
  pills: [
    { icon: "vaccines", label: "Local Anaesthesia" },
    { icon: "timer", label: "30–45 Minute Procedure" },
    { icon: "home", label: "Home the Same Day" },
    { icon: "lock", label: "Confidential Consultation" },
  ],
  primaryCta: bookConsultationCta("Book a Private Consultation"),
  secondaryCta: { label: "Watch Dr. Sukhbir Explain", href: "#videos", iconLeading: "play_circle" },
  image: {
    src: "/images/pages/hymenoplasty/hymenoplasty.jpg",
    alt: "Woman holding a flower, representing confidential intimate care",
    tag: "Confidential Care",
  },
  card: {
    eyebrow: "Procedure at a Glance",
    title: "Vaginoplasty",
    icon: "female",
    checklist: [
      "Tightens vaginal tissues that become lax with age or after childbirth",
      "Performed under local anaesthesia and almost painless",
      "Uses your own tissues and muscles for the tightening effect",
      "Takes about 30–45 minutes; home the same day",
    ],
    footLabel: "Consultation Studio",
    footValue: "R-9, Greater Kailash Part 1, New Delhi",
  },
};

export const vaginoplastyComponents: CardGridData = {
  eyebrow: "What Rejuvenation Can Include",
  title: "Procedures Tailored to You",
  intro:
    "Specific concerns are discussed in detail with Dr. Sukhbir Singh during the consultation, and ancillary procedures can be combined in the same sitting.",
  columns: 4,
  cards: [
    {
      icon: "healing",
      title: "Vaginoplasty",
      text: "Tightens lax vaginal tissues using your own tissues and muscles, with an immediate sense of tightness.",
    },
    {
      icon: "content_cut",
      title: "Labiaplasty",
      text: "Labia reduction to refine the outer appearance of the vulva.",
    },
    {
      icon: "water_drop",
      title: "Fat Transfer Enhancement",
      text: "Optional vaginal enhancement using fat transfer to improve outer appearance.",
    },
    {
      icon: "add_circle",
      title: "Hymenoplasty",
      text: "Can be discussed and combined during the same procedure.",
    },
  ],
};

export const vaginoplastyProcess: ProcessData = {
  eyebrow: "What to Expect",
  title: "Your Vaginoplasty Journey",
  intro: "A short, day-care procedure performed under local anaesthesia at our Greater Kailash Part 1 studio.",
  steps: [
    {
      icon: "forum",
      title: "Consultation & Examination",
      text: "A detailed history is taken and the vaginal area is examined to rule out any infection or white discharge. Combined procedures such as hymenoplasty or labiaplasty are discussed.",
      footValue: "With Dr. Sukhbir Singh",
    },
    {
      icon: "event_note",
      title: "Preparation",
      text: "The procedure is planned at least 2 weeks before or after your period. Routine pre-surgery tests are done; if infection is found, antibiotics are prescribed and the procedure waits a week.",
      footValue: "Light Meal • Shave Pubic Area",
    },
    {
      icon: "medical_services",
      title: "Day of Surgery",
      text: "You read and sign an informed consent form, then each step—including positioning—is explained in the OT suite before the area is numbed and the procedure begins.",
      footValue: "About 30–45 Minutes",
    },
    {
      icon: "self_care",
      title: "Same-Day Recovery",
      text: "A small dressing is applied and you relax for around half an hour before going home with the required medications. Recovery is usually immediate.",
      footValue: "Bath Allowed the Next Day",
    },
  ],
};

export const vaginoplastyAftercare: CalloutData = {
  icon: "healing",
  eyebrow: "Post-Operative Care",
  title: "Aftercare Instructions",
  text: "Precautions mainly concern the vaginal area. Keep it clean and mop it dry after bathing, and follow these guidelines while the tissues heal.",
  highlights: [
    {
      icon: "shower",
      title: "Bathe the Next Day",
      text: "You can bathe the very next day. Keep the vaginal area clean and mop it dry.",
    },
    {
      icon: "do_not_touch",
      title: "No Rubbing — 4–6 Weeks",
      text: "No rubbing, hand manipulation or forceful rubbing of the area.",
    },
    {
      icon: "directions_run",
      title: "No Intercourse or Exercise — 4–6 Weeks",
      text: "No sexual intercourse and no heavy exercise such as jogging, gym, cycling, stretching or squatting.",
    },
  ],
  aside: {
    icon: "support_agent",
    title: "Questions After Surgery?",
    subtitle: "Direct Clinic Line",
    text: "Call the clinic on +91 99103 91229 if you have any concerns during recovery.",
    cta: { label: "+91 99103 91229", href: "tel:+919910391229", iconLeading: "call" },
  },
};

export const vaginoplastyVideos: VideoGalleryData = {
  id: "videos",
  eyebrow: "Watch & Learn",
  title: "Dr. Sukhbir Singh Explains",
  intro: "Short videos from Dr. Sukhbir Singh on vaginal rejuvenation and related intimate aesthetic treatments.",
  videos: [
    {
      youtubeId: "0bq2rz1VBlo",
      title: "Vaginal Rejuvenation kya hota hai — Best Vaginal Rejuvenation Treatment",
      note: "In Hindi",
    },
    {
      youtubeId: "l0C6waFTUlg",
      title: "Lighten Dark Private Parts — Intimate Area Whitening",
      note: "In Hindi",
    },
  ],
};

export const vaginoplastyFaq: FaqData = {
  eyebrow: "Common Questions",
  title: "FAQs on Vaginoplasty",
  items: [
    {
      question: "What is vaginoplasty surgery? Is it done under local or general anaesthesia?",
      answer:
        "Vaginoplasty tightens vaginal tissues that become lax and loose with age, after multiple childbirths, or with sexual intercourse. It is done under local anaesthesia and is almost painless. You are positioned on the table, the local tissues are numbed, and your own tissues and muscles are used to create the tightening effect. It is a safe procedure, and an immediate sense of tightness is felt.",
    },
    {
      question: "What are the pre-operative tests or precautions before surgery?",
      answer:
        "We avoid doing the procedure immediately before or after your period—a gap of 2 weeks either way is preferred. Routine tests are done as before any surgery, a detailed history is taken, and the vaginal area is examined to rule out infection or white discharge. If there are signs of infection, antibiotics are prescribed and a one-week wait is recommended. Specific concerns, and combined procedures such as hymenoplasty or labiaplasty, are discussed with Dr. Sukhbir Singh during the consultation. Have a light meal before the procedure and shave the pubic area to help prevent infection.",
    },
    {
      question: "What happens on the day of surgery?",
      answer:
        "When you arrive, you are given an informed consent form to read and sign. After the formalities, you go to the OT suite, where each step—including positioning on the table—is explained before the procedure begins. The procedure takes about 30–45 minutes. A small dressing is applied, you relax for around half an hour, and you are then sent home with the required medications.",
    },
    {
      question: "Is the procedure painful? Are there any side effects or complications?",
      answer:
        "There is hardly any pain during the procedure, and recovery is usually immediate. It is a very safe procedure with few side effects. The main sensation is slight discomfort, which comes from the tightening of the tissues and muscles.",
    },
    {
      question: "When can I bathe after the procedure?",
      answer:
        "You can bathe the very next day. Keep the vaginal area clean and mop it dry. Avoid any rubbing or manipulation of the area during healing.",
    },
    {
      question: "What post-operative precautions should I follow?",
      answer:
        "The precautions mainly concern the vaginal area. Avoid heavy exercise such as jogging, gym, cycling, stretching or squatting for 4–6 weeks. Avoid sexual intercourse, hand manipulation or forceful rubbing of the area for the same period.",
    },
  ],
};

export const vaginoplastyCta: CtaBandData = {
  eyebrow: "Women's Aesthetic Surgery • Greater Kailash Part 1",
  title: "Discuss Vaginal Rejuvenation in a Private Consultation",
  text: "Speak with Dr. Sukhbir Singh in confidence at Resplendent Aesthetics, R-9, Basement, Greater Kailash Part 1, New Delhi - 110048.",
  primaryCta: bookConsultationCta("Book a Private Consultation"),
  meta: clinicMeta.slice(0, 1),
};
