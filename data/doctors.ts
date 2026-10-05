export type Credential = {
  label: string;
  value: string;
};

export const credentials: Credential[] = [
  { label: "Fellowship", value: "PUCRS Brazil" },
  { label: "Affiliation", value: "IAAPS & APSI" },
  { label: "Specialization", value: "Facial & Body Sculpt" },
];

export type Associate = {
  avatarTone: "emerald" | "blue";
  image: string;
  imageAlt: string;
  roleTone: "emerald" | "blue";
  role: string;
  name: string;
  credentials: string;
  bio: string;
};

export const associates: Associate[] = [
  {
    avatarTone: "emerald",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAJgnVHkx5ffi65p0oq8c4wgN24mgvpS3HmBr21UeXCnlB__yUnjYd7TjtCT4EA_MOsN9K7nxO5rP6vJpSZdsZp27QaXozMDATLb9lsRDk9lO9CPHaLzqFLkm5Rk_zzg3Z-qNwbs37aCvy8Kqp6HvmQ8gaZE_0btQDnzTbcx68cJjzDPEWxPgn1yBQ1abZCaf6H3uKLW9TLmnTKiEp0-wpSNhf5AfTiNF7x8YOLo6yLk14RUVr-__VD",
    imageAlt:
      "Portrait of senior female cosmetic dermatologist in medical coat smiling warmly in modern aesthetic consultation suite.",
    roleTone: "emerald",
    role: "Aesthetic Dermatology",
    name: "Dr. Ananya Roy",
    credentials: "MD Dermatology (AIIMS), DNB • 12+ Yrs Experience",
    bio: "Expert in non-surgical full-face liquid harmonization, advanced RF resurfacing, and stubborn pigment disorders.",
  },
  {
    avatarTone: "blue",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuClg1Lg-yVDKV7Hfso-73UY9m__9pAtsov6Jj1sHVOuOc_V32m_9_hpY7giCKslZvctOJ3-obKTaTOQccBr9PTdIjwGh9MBX5UuOaDLyrVvkrhBbnMqef9DP0nyuxU1METhrYjXSI1DNULgbcTn4p77lVa2Xa77UmMJJ9h0eNwbfbSlNN1iiVJauEdVSjY0dYQUi6r6XsKk1rBVEnTYCD_ONNWO-ZFMUqvlMPP7nv6nMNmnupQkkx5u",
    imageAlt:
      "Portrait of experienced male anaesthesiologist in sterile surgical scrubs in medical facility.",
    roleTone: "blue",
    role: "Clinical Safety & Sedation",
    name: "Dr. Rajesh Khanna",
    credentials: "MD Anaesthesiology (PGI), FICA • 16+ Yrs Experience",
    bio: "Dedicated exclusively to procedural sedation and patient comfort with zero post-operative nausea protocols.",
  },
];
