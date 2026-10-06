import type { CardGridData, IconText } from "./treatments/types";

const IMG = "/images/pages/why-choose-us";

export const trustMetrics = [
  { value: "18+", unit: "Years", label: "Surgical Mastery", text: "Super-specialized cranial & aesthetic artistry" },
  { value: "Zero", label: "Delegation Guarantee", text: "100% consultant-led graft & incision craft" },
  { value: "Class 100", label: "Laminar Flow OTs", text: "Ultra-clean positive pressure environment" },
  { value: "15,000+", label: "Transformations", text: "Discreetly documented subtle outcomes" },
];

export const facilityShowcase = {
  main: {
    src: `${IMG}/01-ultra-luxurious-state-of-the.jpg`,
    alt: "Sterile modular operating theatre with laminar air flow ceiling",
    eyebrow: "Greater Kailash Facility",
    title: "Micro-Sanctuary in South Delhi",
    text: "Engineered beyond standard outpatient clinics: custom positive pressure HEPA systems, advanced monitoring, and confidential post-operative suites tailored for high-profile patients.",
  },
  side: [
    {
      src: `${IMG}/02-close-up-of-high-precision.jpg`,
      alt: "Precision surgical instruments on a sterile drape",
      eyebrow: "Rigorous Protocol",
      title: "NABH Alignment Standards",
      icon: "verified_user",
    },
    {
      src: `${IMG}/03-doctor-demonstrating-3d-biometric-digital.jpg`,
      alt: "Doctor demonstrating 3D facial morphing analysis",
      eyebrow: "Predictive Harmony",
      title: "3D Biometric Morphing",
      icon: "view_in_ar",
    },
  ],
};

export const pillars: CardGridData = {
  eyebrow: "The Foundations of Excellence",
  title: "Six Inviolable Pillars",
  intro:
    "Every consultation, surgical pathway, and restorative protocol at Resplendent is governed by these six uncompromising clinical tenets.",
  columns: 3,
  cards: [
    {
      icon: "workspace_premium",
      title: "Board-Certified & Fellowship Trained",
      text: "Spearheaded by Dr. Sukhbir Singh with elite international plastic surgery training from PUCRS Brazil, alongside memberships in ISAPS and APSI. You are guided exclusively by proven super-specialists.",
      footValue: "International Accreditation",
    },
    {
      icon: "front_hand",
      title: "Zero-Delegation Protocol",
      text: "Every critical incision, follicle extraction, micro-graft placement, and tissue redraping is performed solely by our consultant plastic surgeons. We never outsource surgical responsibility to technicians.",
      footValue: "100% Surgeon Incision & Grafting",
    },
    {
      icon: "view_in_ar",
      title: "Predictive 3D Biometric Morphing",
      text: "Before a single blade touches skin, we simulate procedural outcomes through millimeter-precise 3D cephalometric rendering, establishing realistic symmetry and preventing surgical surprises.",
      footValue: "Sub-Millimeter Predictive Analytics",
    },
    {
      icon: "sanitizer",
      title: "Hospital-Grade Sterility & Safety",
      text: "Operate with peace of mind in our NABH-aligned Class-100 Laminar Flow modular surgical suites, with continuous positive pressure air circulation and senior anesthesiologist supervision.",
      footValue: "Class-100 Air Purity Filtration",
    },
    {
      icon: "face",
      title: "Bespoke Natural Outcomes",
      text: 'We reject the "operated-on" look. Our philosophy preserves individual ethnic nuances, dynamic muscle movement, and respiratory mechanics so you emerge rejuvenated, undetectable, and distinctly you.',
      footValue: "Subtle Undetectable Harmony",
    },
    {
      icon: "shield_with_heart",
      title: "VIP Discretion & Concierge Recovery",
      text: "Seamless privacy with our dedicated basement entrance, soundproofed consultation sanctuaries, and a 24/7 post-surgical hotline with home nurse visits upon clinical request.",
      footValue: "Private R-9 GK-1 Basement Access",
    },
  ],
};

export type ComparisonRow = {
  topic: string;
  detail: string;
  commercial: string;
  resplendent: string;
};

export const comparisonRows: ComparisonRow[] = [
  {
    topic: "Lead Practitioner",
    detail: "Qualifications & Experience",
    commercial: "Junior associates, revolving duty doctors, or general MBBS practitioners under brand labels.",
    resplendent: "Dr. Sukhbir Singh (International Fellow Plastic Surgeon, Brazil) oversees and operates personally.",
  },
  {
    topic: "Surgical Delegation",
    detail: "Who handles critical stages?",
    commercial: "Hair technicians or assistant staff perform high-density graft placement and micro-slits.",
    resplendent: "Strict Zero-Delegation: 100% of incisions, dissections, and root grafts crafted by surgeons.",
  },
  {
    topic: "Facility Standard",
    detail: "Air safety & sterile compliance",
    commercial: "General outpatient rooms with split ACs and basic procedural disinfection.",
    resplendent: "NABH-aligned Class-100 Laminar Flow Modular OTs with positive pressure HEPA circulation.",
  },
  {
    topic: "Diagnostic Technology",
    detail: "Planning & visualization",
    commercial: "Standard mobile camera snapshots with arbitrary verbal approximations.",
    resplendent: "3D High-Res Biometric Cephalometry and computer-aided facial vector morphing.",
  },
  {
    topic: "Post-Operative Care",
    detail: "Recovery support accessibility",
    commercial: "Generic receptionist WhatsApp desk; unpredictable callback wait times.",
    resplendent: "Direct 24/7 surgeon emergency line, rapid nurse dispatch, and tailored follow-up dossiers.",
  },
  {
    topic: "Pricing Integrity",
    detail: "Billing clarity",
    commercial: "Low teaser entry quotes followed by unexpected OT, dressing, or anesthesia surcharges.",
    resplendent: "100% transparent, all-inclusive dossiers including consumables, anesthesia, and recovery visits.",
  },
];

export const testimonial = {
  headline: "“In an industry of factory clinics, Resplendent feels like an exclusive private atelier.”",
  quote:
    "“As someone in public life, anonymity and discretion were non-negotiable. Walking into Dr. Sukhbir's Greater Kailash studio, I never sat in a waiting room with others. His mathematical assessment of my facial proportions, rather than pushing aggressive interventions, completely set him apart. Six months later, colleagues remark that I look effortlessly rested, yet no one can pinpoint what changed. That is true surgical mastery.”",
  author: "Ambassador & Senior Corporate Counsel",
  procedure: "Deep Plane Facial Contouring & Hairline Restoration • GK-1, New Delhi",
};

export const affiliations: IconText[] = [
  { icon: "local_hospital", title: "NABH Aligned", text: "Modular Safety Benchmarks" },
  { icon: "public", title: "ISAPS Member", text: "Intl. Aesthetic Plastic Surgery" },
  { icon: "health_and_safety", title: "APSI Certified", text: "Association of Plastic Surgeons" },
  { icon: "school", title: "PUCRS Brazil", text: "Craniofacial Surgical Fellow" },
  { icon: "devices", title: "US-FDA Devices", text: "Validated Laser & Suction" },
];

export const consultationPoints = [
  "No pressure or sales advisors",
  "Objective anatomical candidacy",
  "Virtual simulation preview",
  "Comprehensive surgical dossier",
];
