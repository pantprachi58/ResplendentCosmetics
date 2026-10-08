import type { IconText } from "./treatments/types";

export type DoctorProfile = {
  name: string;
  specialty: string;
  qualifications: string;
  image: string;
  imageAlt: string;
  overlayTag: { icon: string; label: string };
  overlayTitle: string;
  badges: { icon: string; label: string }[];
  specialties: string[];
  bio: string;
  stats: { value: string; label: string }[];
  cta: { label: string; icon: string };
  ctaNote: string;
};

const IMG = "/images/pages/doctors";

export const doctorProfiles: DoctorProfile[] = [
  {
    name: "Dr. Sukhbir Singh",
    specialty: "Board Certified Plastic Surgeon",
    qualifications:
      "MBBS, MS (General Surgery), MCh (Plastic & Reconstructive Surgery), Fellow PUCRS (Brazil)",
    image: `${IMG}/01-dr-sukhbir-singh-lead-consultant.jpg`,
    imageAlt: "Dr. Sukhbir Singh - Lead Consultant Plastic Surgeon & Founder",
    overlayTag: { icon: "verified", label: "Director & Founder" },
    overlayTitle: "Lead Consultant Plastic Surgeon",
    badges: [
      { icon: "workspace_premium", label: "18+ Yrs Experience" },
      { icon: "public", label: "ISAPS • APSI • IAAPS Fellow" },
    ],
    specialties: [
      "Hair Transplant (FUE & DHI)",
      "Rhinoplasty (Nose Reshaping)",
      "Deep Plane Face & Neck Lift",
      "Gynecomastia & Chest Sculpting",
    ],
    bio: "Dr. Sukhbir Singh is an internationally acclaimed Senior Plastic & Cosmetic Surgeon practicing in Greater Kailash, South Delhi. Trained extensively in Brazil under world-renowned aesthetic masters at Pontifícia Universidade Católica do Rio Grande do Sul (PUCRS), he specializes in micro-vascular tissue handling, structural preservation rhinoplasty, and natural high-density follicular hair restoration. He believes aesthetic surgery should enhance innate anatomy with imperceptible scars and lasting mathematical harmony.",
    stats: [
      { value: "15,000+", label: "Procedures" },
      { value: "45+", label: "Countries" },
      { value: "99.4%", label: "Patient Approval" },
    ],
    cta: { label: "Book Consultation with Dr. Sukhbir", icon: "calendar_month" },
    ctaNote: "Direct surgeon evaluation • Private suites",
  },
];

export const accreditations: IconText[] = [
  { icon: "public", title: "ISAPS", text: "International Society of Aesthetic Plastic Surgery Active Membership" },
  { icon: "military_tech", title: "APSI", text: "Association of Plastic Surgeons of India Life Fellowship" },
  { icon: "workspace_premium", title: "IAAPS", text: "Indian Association of Aesthetic Plastic Surgeons Certified Member" },
  { icon: "local_hospital", title: "NABH Suites", text: "Class-100 Laminar Air Flow Sterilized Surgical Environments" },
  { icon: "verified_user", title: "DMC • IMC", text: "Registered Specialist Practice under Delhi & National Medical Councils" },
];

export const philosophyPillars: IconText[] = [
  { icon: "lock", title: "Bespoke Privacy Protocols", text: "Separate VIP arrival, discrete waiting suites, and non-disclosure care standards." },
  { icon: "shield_person", title: "Zero-Technician Handover", text: "Every incision, suture, and hair follicle harvest is surgeon-executed end-to-end." },
  { icon: "monitoring", title: "Dedicated Aftercare Team", text: "24/7 post-operative clinical monitoring and continuous surgeon consultations." },
];
