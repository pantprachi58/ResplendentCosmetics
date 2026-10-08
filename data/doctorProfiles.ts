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
  // {
  //   name: "Dr. Ananya Roy",
  //   specialty: "Clinical & Aesthetic Dermatology",
  //   qualifications:
  //     "MBBS, MD (Dermatology, Venereology & Leprosy), DNB, Fellowship in Aesthetic Lasers (Milan, Italy)",
  //   image: `${IMG}/02-dr-ananya-roy-gold-medalist.jpg`,
  //   imageAlt: "Dr. Ananya Roy - Gold Medalist Dermatologist & Laser Specialist",
  //   overlayTag: { icon: "spa", label: "Aesthetic Medicine" },
  //   overlayTitle: "Gold Medalist Dermatologist",
  //   badges: [
  //     { icon: "workspace_premium", label: "12+ Yrs Experience" },
  //     { icon: "military_tech", label: "Milan Laser Fellow" },
  //   ],
  //   specialties: [
  //     "Botox & Neuromodulators",
  //     "Dermal Fillers & Sculptra",
  //     "Laser Skin Resurfacing (CO2/Nd:YAG)",
  //     "RF Microneedling & PRP",
  //   ],
  //   bio: "Dr. Ananya Roy is a distinguished aesthetic dermatologist known for her nuanced, non-surgical facial rejuvenation and cellular skin therapies. Having trained across European dermatology institutes, she pairs medical science with subtle micro-droplet injection techniques to restore volume, clear stubborn pigmentation, and stimulate collagen without artificial rigidity.",
  //   stats: [
  //     { value: "8,500+", label: "Injectables" },
  //     { value: "US-FDA", label: "Approved Lasers" },
  //     { value: "Bespoke", label: "Protocol Design" },
  //   ],
  //   cta: { label: "Consult Dr. Ananya Roy", icon: "event_available" },
  //   ctaNote: "Comprehensive digital skin mapping included",
  // },
  // {
  //   name: "Dr. Rajesh Khanna",
  //   specialty: "Body Contouring & Breast Architecture",
  //   qualifications:
  //     "MBBS, MS, MCh (Plastic Surgery), Fellowship in High-Definition Liposculpture (Colombia & Spain)",
  //   image: `${IMG}/03-dr-rajesh-khanna-senior-consultant.jpg`,
  //   imageAlt: "Dr. Rajesh Khanna - Senior Consultant Aesthetic & Reconstructive Surgeon",
  //   overlayTag: { icon: "medical_services", label: "Body Sculpting Lead" },
  //   overlayTitle: "Reconstructive Specialist",
  //   badges: [
  //     { icon: "workspace_premium", label: "15+ Yrs Experience" },
  //     { icon: "architecture", label: "4D VASER Certified" },
  //   ],
  //   specialties: [
  //     "4D VASER Liposuction",
  //     "Breast Augmentation & Lift",
  //     "Abdominoplasty (Tummy Tuck)",
  //     "Body Contouring Post-Weight Loss",
  //   ],
  //   bio: "Specializing in athletic torso etching, ultrasound-assisted 4D liposculpture, and subfascial breast augmentation, Dr. Rajesh Khanna integrates 3D anatomical planning with rapid-recovery surgical techniques. His focus on vascular preservation ensures minimal bruising, immediate skin retraction, and bespoke anatomical silhouettes tailored to each patient's lifestyle.",
  //   stats: [
  //     { value: "6,200+", label: "Transformations" },
  //     { value: "Class-100", label: "NABH Theatres" },
  //     { value: "Rapid-Rx", label: "Recovery Protocol" },
  //   ],
  //   cta: { label: "Consult Dr. Rajesh Khanna", icon: "calendar_month" },
  //   ctaNote: "Confidential physical assessment",
  // },
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
