import type { CalloutData, ConsultationFormData, TreatmentPageData } from "./types";

const IMG = "/images/pages/blepharoplasty";

export const blepharoplasty: TreatmentPageData = {
  slug: "blepharoplasty",
  metaTitle: "Blepharoplasty — Eyelid Rejuvenation | Resplendent Aesthetics",
  metaDescription:
    "Upper and lower eyelid surgery with invisible crease incisions and fat repositioning by Dr. Sukhbir Singh in Greater Kailash, South Delhi.",
  hero: {
    breadcrumb: "Blepharoplasty",
    eyebrow: "Periorbital Aesthetic Surgery & Canthoplasty",
    title: "Blepharoplasty — Eyelid Rejuvenation & ",
    highlight: "Brow Harmony",
    lead: "Precision removal of redundant periorbital tissue, herniated fat pad repositioning, and tarsal crease definition without hollowed or startled expressions. Guided by micro-anatomical precision in South Delhi.",
    stats: [
      { value: "0.3 mm", label: "Micro-Incisions" },
      { value: "Preserved", label: "Supratarsal Crease" },
      { value: "Twilight", label: "Sedation Anesthesia" },
      { value: "5-7 Days", label: "Rapid Social Recovery" },
    ],
    primaryCta: { label: "Book Eyelid Assessment", href: "#consultation-booking", icon: "arrow_forward" },
    secondaryCta: { label: "View Case Dossiers", href: "#clinical-dossiers" },
    surgeon: {
      name: "Dr. Sukhbir Singh",
      credentials: "MBBS, MS, MCh Plastic Surgery • Fellow PUCRS Brazil",
      badges: ["NABH Accredited", "Zero Scar Visibility"],
    },
    image: {
      src: `${IMG}/01-periorbital-treatment-consultation-and-natural.jpg`,
      alt: "Periorbital treatment consultation and natural gaze",
      tag: "Surgical Naturalism",
      captionTitle: "Sculpting light across the periorbital terrace without hollowed margins.",
      inset: {
        src: `${IMG}/02-surgical-mapping-marker-lines-on.jpg`,
        alt: "Surgical mapping marker lines on upper eyelid",
        title: "Submillimeter Mapping",
        text: "Preserving orbicularis oculi sphincter dynamic tone.",
      },
    },
  },
  overview: {
    eyebrow: "Anatomical Distinction",
    title: "Upper vs. Lower Periorbital Dynamics",
    intro:
      "Every eyelid presents distinct micro-fascial planes. We differentiate structural dermatochalasis from deep fat herniation to formulate a tailored, non-reductive surgical vector.",
    media: {
      src: `${IMG}/03-close-up-eyelid-surgical-anatomy.jpg`,
      alt: "Close up eyelid surgical anatomy mapping",
      tag: "Tarsal Crease • Septum Orbitale • Arcus Marginalis",
      title: "Anatomical Mapping",
      text: "Each eyelid is charted across the tarsal crease line, septum orbitale and tear trough transition before any incision is planned.",
      checklist: [
        "Physiological Preservation: zero disruption of lacrimal gland architecture and involuntary blink reflexes.",
        "Customized Tarsal Height: matched to gender, ethnic heritage, and natural orbital bone depth.",
      ],
    },
    options: [
      {
        title: "Superior Palpebral Hooding Relief",
        icon: "visibility",
        tag: "Upper Eyelid",
        subtitle: "Dermatochalasis Correction",
        text: "Addresses redundant sagging skin that conceals the upper tarsal plate and causes visual obstruction or persistent ocular fatigue. The micro-incision is positioned precisely within the natural supratarsal furrow.",
        facts: [
          { label: "Scar", value: "Inconspicuous fold-line" },
          { label: "Duration", value: "45–60 min surgery" },
        ],
        featured: true,
      },
      {
        title: "Fat Repositioning & Smooth Tear Troughs",
        icon: "auto_fix_high",
        tag: "Lower Eyelid",
        subtitle: "Transconjunctival Approach",
        text: "Eliminates lower eye bags without leaving any external scar. Through an internal mucous membrane incision (conjunctiva), pseudo-herniated orbital fat is redraped across the hollow tear trough depression to create a continuous contour.",
        facts: [
          { label: "Incision", value: "Zero external line" },
          { label: "Support", value: "Preserves lower lid tone" },
        ],
      },
    ],
  },
  process: {
    eyebrow: "Surgical Method",
    title: "The 4-Stage Periorbital Pathway",
    intro:
      "Conducted within private Class-100 Laminar Flow surgical suites in Greater Kailash, prioritizing comfort, exact micro-dissection, and tissue preservation.",
    steps: [
      {
        icon: "straighten",
        title: "Ophthalmic & Vector Mapping",
        text: "Pre-operative calibration of marginal reflex distances (MRD-1/MRD-2), lid laxity snap-back test, and orbital fat compartmentalization analysis.",
        footLabel: "Metric",
        footValue: "Sub-millimeter Caliper",
      },
      {
        icon: "draw",
        title: "Infiltration & Tarsal Marking",
        text: "High-magnification surgical marking along relaxed skin tension lines, followed by gentle buffered local anesthesia with epinephrine.",
        footLabel: "Sedation",
        footValue: "Twilight Comfort",
      },
      {
        icon: "precision_manufacturing",
        title: "Microsurgical Recontouring",
        text: "Bipolar radiofrequency coagulation to excise skin laxity and transpose herniated medial and central fat deposits into the nasojugal groove.",
        footLabel: "Safety",
        footValue: "Hemostatic Control",
      },
      {
        icon: "healing",
        title: "Suture Artistry & Rapid-Rx",
        text: "Continuous 6-0/7-0 non-absorbable intradermal closure. Immediate post-op targeted cold cryotherapy with swift suture retrieval on Day 5.",
        footLabel: "Closure",
        footValue: "7-0 Micro-Filament",
      },
    ],
  },
  feature: {
    eyebrow: "Architectural Aesthetics",
    title: "Invisible Crease Architecture & Anatomical Naturalism",
    paragraphs: [
      "The telltale signs of poorly executed eyelid surgery include a surprised expression, excessive orbital hollowing, or pulled lateral corners. At Resplendent Aesthetics, our philosophy is conservative release and structural volume transposition. We accentuate the eye without ever altering personal identity.",
    ],
    checklist: [
      "Preservation of natural palpebral tilt and canthal integrity",
      "Intra-operative dynamic assessment with patient awake and blinking",
      "Zero tissue over-resection, preventing lagophthalmos (inability to close eye)",
    ],
    metrics: [
      { icon: "architecture", value: "0.3 mm", label: "Incision Depth", text: "Microsurgical blade entry confined to skin level." },
      { icon: "eye_tracking", value: "100%", label: "Reflex Integrity", text: "Uncompromised levator muscle biomechanics." },
      { icon: "verified", value: "99.4%", label: "Clinical Satisfaction", text: "Documented over 1,400+ periorbital cases." },
      { icon: "medical_services", value: "Class-100", label: "Surgical Suites", text: "Ultra-filtered HEPA laminar airflow theatre." },
    ],
  },
  cases: {
    id: "clinical-dossiers",
    eyebrow: "Verified Results",
    title: "Documented Clinical Transformations",
    note: "Unretouched medical clinical photographs",
    columns: 4,
    cases: [
      {
        caseId: "Case #3118",
        badge: "6 Mos Post-Op",
        title: "Upper Blepharoplasty",
        text: "48yo female with heavy lateral eyelid hooding and visual fatigue. Restored supratarsal platform.",
        image: { src: `${IMG}/04-clinical-close-up-photograph-of.jpg`, alt: "Female upper eyelid with rejuvenated tarsal crease" },
        meta: ["Technique: Crease Incision", "Healed 100%"],
      },
      {
        caseId: "Case #2945",
        badge: "4 Mos Post-Op",
        title: "Transconjunctival Lower",
        text: "36yo male with hereditary prominent fat herniation. Internal incision, zero external scar.",
        image: { src: `${IMG}/05-clinical-medical-photo-showing-smooth.jpg`, alt: "Smooth lower eyelid tear trough junction after surgery" },
        meta: ["Fat Transposition", "Tear Trough Fill"],
      },
      {
        caseId: "Case #4220",
        badge: "1 Yr Post-Op",
        title: "Double Eyelid & Canthus",
        text: "28yo female requesting parallel natural crease creation and medial epicanthal web easing.",
        image: { src: `${IMG}/06-close-up-clinical-portrait-of.jpg`, alt: "Natural double eyelid crease after canthoplasty" },
        meta: ["Incisional Double Fold", "Custom Height"],
      },
      {
        caseId: "Case #5104",
        badge: "9 Mos Post-Op",
        title: "Quad-Lid & Micro-Fat",
        text: "54yo female combined upper and lower eyelid correction with structural micro-fat grafting to temporal hollows.",
        image: { src: `${IMG}/07-medical-clinical-transformation-photo-of.jpg`, alt: "Result after quad blepharoplasty" },
        meta: ["Combined Rejuvenation", "Global Orbital"],
      },
    ],
  },
  faq: {
    eyebrow: "Clarity & Recovery",
    title: "Clinical Questions & Recovery Answers",
    intro: "Transparent insights regarding downtime, incision healing, and eyelid dynamics.",
    items: [
      {
        question: "How long does swelling and bruising last after eyelid surgery?",
        answer:
          "Most patients experience mild periorbital bruising that peaks within 48 to 72 hours and subsides substantially by day 7. Delicate sutures are removed on day 5. By day 7 to 10, patients routinely return to work and social activities, with any minimal residual discoloration effortlessly concealed with light mineral sunscreen.",
      },
      {
        question: "Will my natural eye shape or vision be altered?",
        answer:
          'No. Our philosophy emphasizes structural harmony. We remove only redundant skin and reposition fat rather than aggressively resecting tissue, preventing the "hollowed-out" or "startled round-eye" appearance. Furthermore, upper blepharoplasty frequently restores obstructed superior and peripheral fields of vision caused by severe eyelid hooding.',
      },
      {
        question: "Is eyelid surgery performed under general anesthesia or twilight sedation?",
        answer:
          "The overwhelming majority of upper and lower blepharoplasties at Resplendent Aesthetics are comfortably performed under twilight sedation (intravenous monitored anesthesia care) combined with gentle local infiltration. Patients remain completely pain-free, calm, and breathing spontaneously, enabling immediate same-day discharge within two hours post-procedure.",
      },
      {
        question: "Will there be visible scars on my eyelids?",
        answer:
          "In upper blepharoplasty, the micro-fine scar is tucked precisely within the natural upper eyelid crease, rendering it practically undetectable when the eyes are open. With lower transconjunctival blepharoplasty, the incision is placed inside the lower eyelid lining, resulting in zero visible external scarring on the skin.",
      },
      {
        question: "Can blepharoplasty be combined with a brow lift or micro-fat grafting?",
        answer:
          "Yes, this is frequently recommended. If heavy upper eyelid excess stems from a descending brow rather than lid skin alone, combining blepharoplasty with an endoscopic or temporal brow lift yields optimal harmony. Autologous micro-fat grafting to hollow temples and tear troughs also complements eyelid surgery seamlessly.",
      },
    ],
  },
  cta: {
    eyebrow: "Resplendent Aesthetics Sanctuary • South Delhi",
    title: "Rediscover Bright, Refreshed Eyes with Surgical Precision",
    text: "Under Dr. Sukhbir Singh's direct surgical supervision, your natural eye shape is restored with balanced periorbital harmony and lasting results.",
    primaryCta: { label: "Book Blepharoplasty Consultation", href: "#consultation-booking" },
  },
};

export const blepharoplastyCallout: CalloutData = {
  icon: "policy",
  title: "The Zero-Delegation Guarantee",
  text: "Unlike commercial centers where technicians or junior associates handle surgical markings or incision steps, Dr. Sukhbir Singh performs 100% of your surgical marking, micro-dissection, and suture execution personally.",
  location: { title: "Greater Kailash Part 1", text: "South Delhi Flagship Suite" },
  cta: { label: "Schedule Private Visit", href: "#consultation-booking" },
};

export const blepharoplastyForm: ConsultationFormData = {
  id: "consultation-booking",
  eyebrow: "In-Clinic & Virtual Consultation",
  title: "Schedule Your Periorbital Evaluation",
  intro:
    "Begin with a confidential 45-minute clinical mapping session with Dr. Sukhbir Singh at our Greater Kailash Part 1 studio. Comprehensive mirror assessment and digital high-resolution vector planning included.",
  contacts: [
    { icon: "location_on", title: "Greater Kailash Part 1", text: "R-9, Basement, New Delhi - 110048" },
    { icon: "phone_in_talk", title: "Direct Clinical Hotline", text: "+91 99103 91229 / Mon-Sat 9am-7pm" },
  ],
  interestLabel: "Primary Interest",
  interests: [
    "Upper Blepharoplasty (Drooping Skin)",
    "Lower Blepharoplasty (Eye Bags)",
    "Combined Quad Eyelid Rejuvenation",
    "Double Eyelid & Epicanthoplasty",
    "Revision Blepharoplasty",
  ],
  submitLabel: "Request Blepharoplasty Consultation",
  successMessage:
    "Your consultation request has been received. Our clinical coordinator will contact you shortly.",
};
