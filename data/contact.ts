import type { CardGridData, IconText } from "./treatments/types";

export const MAP_IMAGE = "/images/pages/contact/01-map-location.png";
export const MAPS_URL = "https://maps.google.com/?q=R-9+Greater+Kailash+1+New+Delhi";

export const countryCodes = [
  { value: "+91", label: "🇮🇳 +91 (India)" },
  { value: "+44", label: "🇬🇧 +44 (UK)" },
  { value: "+971", label: "🇦🇪 +971 (UAE)" },
  { value: "+1", label: "🇺🇸 +1 (US/Canada)" },
  { value: "+61", label: "🇦🇺 +61 (Australia)" },
  { value: "+65", label: "🇸🇬 +65 (Singapore)" },
  { value: "+49", label: "🇩🇪 +49 (Germany)" },
];

export const contactTreatments = [
  "Rhinoplasty (Functional & Aesthetic Nose Reshaping)",
  "Hair Restoration (FUE / DHI Micro-Grafting)",
  "Deep Plane Face & Neck Lift",
  "Blepharoplasty (Upper / Lower Eyelid Surgery)",
  "Chin Augmentation & Mandibular Contouring",
  "High-Definition Liposuction & Body Sculpting",
  "Bespoke Injectables, Fillers & Neurotoxins",
  "Medical Grade HydraFacial & Laser Resurfacing",
  "Comprehensive Multi-Procedure Consultation",
];

export type ContactChannel = IconText & { value: string; href?: string; accent?: string };

export const contactChannels: ContactChannel[] = [
  {
    icon: "call",
    title: "Direct Phone & Emergency Hotline",
    value: "+91 99103 91229",
    href: "tel:+919910391229",
    text: "Immediate coordination for surgical emergencies & priority scheduling",
  },
  {
    icon: "mail",
    title: "Encrypted Medical Inquiries",
    value: "info@resplendentcosmetics.com",
    href: "mailto:info@resplendentcosmetics.com",
    text: "For medical case records, high-res photos & physician referrals",
  },
  {
    icon: "schedule",
    title: "Clinical Suite Timings",
    value: "Monday – Saturday: 9:00 AM – 7:00 PM",
    text: "",
    accent: "Sunday: Strictly By Prior Confirmed Appointment",
  },
];

export const internationalDesk: CardGridData = {
  eyebrow: "Dedicated Overseas Concierge",
  title: "Welcoming Global Patients to New Delhi",
  intro:
    "Comprehensive clinical hospitality designed for our patients traveling from the UK, UAE, US, Australia, and beyond.",
  columns: 3,
  cards: [
    {
      icon: "airport_shuttle",
      eyebrow: "01 / Seamless Transit",
      title: "Airport Transfers & Chauffeur",
      text: "Seamless luxury transit from Indira Gandhi International Airport (DEL) directly to your accommodation and GK-1 surgical center in South Delhi.",
    },
    {
      icon: "hotel",
      eyebrow: "02 / Convalescent Rest",
      title: "Partner Hotel Stays",
      text: "Preferential rates at curated 5-star boutique hotels within 10 minutes of our surgical suites, tailored for peaceful post-operative privacy.",
    },
    {
      icon: "vital_signs",
      eyebrow: "03 / Long-Term Continuity",
      title: "Virtual Telemedicine Follow-Up",
      text: "Continued surgical post-op checks and healing monitoring with Dr. Sukhbir Singh via scheduled telemedicine once you return safely home.",
    },
  ],
};

export const socialLinks = [
  { icon: "chat", label: "WhatsApp: +91 99103 91229", href: "https://wa.me/919910391229", primary: true },
  { icon: "photo_camera", label: "@resplendentcosmetics", href: "https://instagram.com/resplendentcosmetics" },
  { icon: "play_circle", label: "Surgical Video Case Studies", href: "#" },
];

export const reassurances = [
  { icon: "verified_user", label: "Strict Confidentiality Guaranteed" },
  { icon: "block", label: "Zero Unsolicited Marketing" },
  { icon: "medical_services", label: "Board-Certified Specialists Only" },
];
