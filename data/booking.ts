import type { CardGridData, FaqData, IconText } from "./treatments/types";

const IMG = "/images/pages/book-consultation";

export const BOOKING_MAP_IMAGE = `${IMG}/04-map-location.png`;
export const LEAD_SURGEON_THUMB = `${IMG}/03-close-up-thumbnail-of-dr.jpg`;

export type BookingCategory = {
  value: string;
  icon: string;
  title: string;
  text: string;
  tag: string;
  note: string;
};

export const bookingCategories: BookingCategory[] = [
  {
    value: "facial",
    icon: "face",
    title: "Facial & Reconstructive",
    text: "Rhinoplasty, Preservation Deep-Plane Face & Neck Lift, Blepharoplasty, Chin Reshaping.",
    tag: "Surgical Precision",
    note: "45 Min Diagnostic",
  },
  {
    value: "hair",
    icon: "spa",
    title: "Follicular Hair Restoration",
    text: "FUE Sapphire Micro-Grafting, DHI Direct Hair Implantation, High-Density Hairline Sculpting.",
    tag: "Trichology & Graft Lab",
    note: "Density Scan",
  },
  {
    value: "body",
    icon: "accessibility_new",
    title: "Body Architecture",
    text: "VASER High-Definition Liposuction, Male Gynecomastia, Lipoabdominoplasty, Breast Sculpting.",
    tag: "VASER & MicroAire",
    note: "Vectra 3D",
  },
  {
    value: "dermatology",
    icon: "auto_awesome",
    title: "Clinical Dermatology & Laser",
    text: "Botox Cosmetic, Juvederm Voluma Fillers, Secret RF Microneedling, Lumenis ResurFX Laser.",
    tag: "US-FDA Gold Standard",
    note: "Visia Analysis",
  },
];

export type BookingSpecialist = {
  value: string;
  name: string;
  role?: string;
  credentials?: string;
  focus: string;
  image?: string;
  accreditation?: { label: string; value: string };
};

export const bookingSpecialists: BookingSpecialist[] = [
  {
    value: "dr-sukhbir",
    name: "Dr. Sukhbir Singh",
    role: "Lead Plastic Surgeon",
    credentials: "MS, MCh (Plastic Surgery) • Fellow PUCRS Brazil",
    focus: "Specialist in Rhinoplasty, Face Lifting, VASER Liposuction & Hair Micro-Grafting",
    image: "/images/pages/doctors/01-dr-sukhbir-singh-lead-consultant.jpg",
    accreditation: { label: "Accredited", value: "ISAPS & APSI Member" },
  },
  {
    value: "next-available",
    name: "Next Available Senior Specialist",
    focus: "Prioritize the quickest available clinical opening across our senior surgical board.",
  },
];

export const consultFormats = [
  {
    value: "in-person",
    icon: "location_city",
    title: "Sanctuary Visit (GK-1, New Delhi)",
    text: "Direct physical assessment, 3D anatomical imaging, and dedicated suite consultation.",
  },
  {
    value: "virtual",
    icon: "videocam",
    title: "Virtual Video Consultation",
    text: "For international or outstation patients. Encrypted video link provided via WhatsApp / Email.",
  },
];

export const timeSlots = [
  { period: "Morning Windows", slots: ["10:00 AM", "11:30 AM"] },
  { period: "Afternoon Windows", slots: ["02:00 PM", "03:30 PM"] },
  { period: "Evening Windows", slots: ["05:00 PM", "06:30 PM"] },
];

export const bookingSteps = ["Aesthetic Goal", "Specialist", "Schedule", "Dossier"];

export const sanctuaryStandards: IconText[] = [
  { icon: "encrypted", title: "100% Confidential Protocol", text: "Encrypted digital records with staggered arrival to guarantee full patient anonymity." },
  { icon: "verified_user", title: "Zero Junior Delegation", text: "Diagnostics and procedural design are executed entirely by our Lead Plastic Surgeons." },
  { icon: "timer", title: "45-Minute In-Depth Diagnostic", text: "Unrushed analysis including structural facial mapping and photographic simulation." },
  { icon: "directions_car", title: "Complimentary Valet Service", text: "Private lower-ground elevator access directly into the private consulting chambers." },
];

export const accreditedBenchmarks: CardGridData = {
  eyebrow: "Clinical Governance",
  title: "Accredited Surgical Benchmarks",
  columns: 4,
  cards: [
    { icon: "verified", title: "ISAPS Member", text: "Global Aesthetic Standard" },
    { icon: "medical_services", title: "APSI Certified", text: "Plastic Surgeons India" },
    { icon: "health_and_safety", title: "NABH-Aligned", text: "OT & Safety Protocols" },
    { icon: "devices", title: "US-FDA Approved", text: "Energy Devices & Lasers" },
  ],
};

export const bookingFaq: FaqData = {
  eyebrow: "Diagnostic Clarity",
  title: "Pre-Consultation Inquiries",
  intro: "Answers to essential questions prior to visiting our South Delhi cosmetic suite.",
  items: [
    {
      question: "What happens during the initial consultation?",
      answer:
        "Your appointment is a dedicated 45-minute surgical assessment. Dr. Sukhbir Singh will review your physiological health, perform detailed facial or body structural assessment, conduct computer-assisted simulations where applicable, and formulate an evidence-based roadmap. You will receive completely transparent feedback on surgical vs. non-surgical outcomes.",
    },
    {
      question: "Is there a fee for surgical assessments?",
      answer:
        "Yes, our direct consultant diagnostic session carries a nominal clinical fee that covers the comprehensive in-person anatomical mapping, high-definition photographic records, and customized surgical planning. If you proceed with a surgical procedure within 30 days, this fee is fully credited toward your treatment package.",
    },
    {
      question: "Can outstation or international patients conduct virtual simulations first?",
      answer:
        "Absolutely. We host daily encrypted virtual consultations for patients flying in from the UK, UAE, USA, Canada, and pan-India. You will submit standardized angled medical photos via our secure portal prior to the call, allowing the surgeon to review your anatomical suitability, estimated recovery time, and tentative surgical scheduling.",
    },
    {
      question: "What privacy precautions are taken for high-profile patients?",
      answer:
        "Our Greater Kailash Part 1 studio is designed specifically for discretion. We feature a private basement entrance with dedicated parking and elevator access directly to our private consultation lounges. We enforce staggered patient appointments to ensure zero lobby overlap, and all records are safeguarded under strict non-disclosure medical standards.",
    },
  ],
};
