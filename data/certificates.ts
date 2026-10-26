import type { CertificateData } from "@/components/Certificates";

// Scans of Dr. Sukhbir Singh's certificates (public/images/certificate/). Titles, issuers and years are
// transcribed from the certificates themselves; memberships first, then courses and conferences, newest first.
const IMG = "/images/certificate/PHOTO-2026-10-10-10-03-03";

export const certificates: CertificateData[] = [
  {
    id: "asps-international-member",
    title: "International Member",
    organization: "American Society of Plastic Surgeons (ASPS)",
    imageUrl: `${IMG} (10).jpg.jpeg`,
  },
  {
    id: "isaps-active-member",
    title: "Active Member",
    organization: "International Society of Aesthetic Plastic Surgery (ISAPS)",
    imageUrl: `${IMG} (7).jpg.jpeg`,
  },
  {
    id: "iaaps-member",
    title: "Member",
    organization: "Indian Association of Aesthetic Plastic Surgeons (IAAPS)",
    imageUrl: `${IMG} (11).jpg.jpeg`,
  },
  {
    id: "ahrs-full-member",
    title: "Full Member",
    organization: "Association of Hair Restoration Surgeons – India (AHRS)",
    year: "2017",
    imageUrl: `${IMG} (9).jpg.jpeg`,
  },
  {
    id: "apsi-life-member",
    title: "Full Life Member",
    organization: "Association of Plastic Surgeons of India (APSI)",
    year: "2011",
    imageUrl: `${IMG} (8).jpg.jpeg`,
  },
  {
    id: "aesurg-isaps-2023",
    title: "Faculty, AESURG ISAPS 2023",
    organization: "IAAPS & ISAPS Symposium, Aamby Valley",
    year: "2023",
    imageUrl: `${IMG} (5).jpg.jpeg`,
  },
  {
    id: "icd-nepal-2016",
    title: "2nd International Conference of Dermatology",
    organization: "SODVELON, Kathmandu, Nepal",
    year: "2016",
    imageUrl: `${IMG} (2).jpg.jpeg`,
  },
  {
    id: "oman-rhinoplasty-2016",
    title: "10th Oman Functional & Aesthetic Rhinoplasty Course (Hands-on Cadaver Dissection)",
    organization: "Al Nahdha Hospital, Ministry of Health, Oman",
    year: "2016",
    imageUrl: `${IMG}.jpg.jpeg`,
  },
  {
    id: "pucrs-aesthetic-surgery-2011",
    title: "Aesthetic Surgery Training Programme",
    organization: "Hospital São Lucas, PUCRS, Porto Alegre, Brazil",
    year: "2011",
    imageUrl: `${IMG} (6).jpg.jpeg`,
  },
  {
    id: "ipras-2009",
    title: "15th IPRAS World Congress",
    organization: "International Confederation for Plastic, Reconstructive and Aesthetic Surgery, New Delhi",
    year: "2009",
    imageUrl: `${IMG} (1).jpg.jpeg`,
  },
];
