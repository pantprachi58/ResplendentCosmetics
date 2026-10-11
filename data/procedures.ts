export type Procedure = {
  cardTone: "blue" | "emerald";
  image: string;
  imageAlt: string;
  badgeTone: "navy" | "blue" | "slate" | "mint" | "solid";
  badge: string;
  title: string;
  description: string;
  href: string;
};

export const procedures: Procedure[] = [
  {
    cardTone: "blue",
    image: "/images/procedures/1.webp",
    imageAlt:
      "High-density Follicular Unit Extraction hair transplant procedure showing precise hairline mapping and follicular graft integration under sterile surgical theatre illumination.",
    badgeTone: "navy",
    badge: "Surgical",
    title: "Hair Transplant",
    description:
      "Advanced FUE & DHI micro-follicular restoration for hairline precision.",
    href: "/treatments/hair-transplant",
  },
  {
    cardTone: "blue",
    image: "/images/procedures/2.png",
    imageAlt:
      "Close-up monochrome profile view of refined aesthetic nasal contours, demonstrating subtle natural projection and dorsal balance from corrective cosmetic rhinoplasty.",
    badgeTone: "blue",
    badge: "Signature",
    title: "Rhinoplasty",
    description:
      "Preservation and structural nose reshaping in balance with facial symmetry.",
    href: "/treatments/rhinoplasty",
  },
  {
    cardTone: "blue",
    image: "/images/procedures/3.png",
    imageAlt: "Face & Neck Lift",
    badgeTone: "navy",
    badge: "Surgical",
    title: "Face & Neck Lift",
    description:
      "Deep-plane SMAS suspension restoring jawline sharpness and cervical tone.",
    href: "/treatments/face-neck-lift",
  },
  {
    cardTone: "blue",
    image: "/images/procedures/4.png",
    imageAlt: "Blepharoplasty",
    badgeTone: "slate",
    badge: "Oculoplastic",
    title: "Blepharoplasty",
    description:
      "Upper & lower eyelid surgery removing redundant tissue and tired bags.",
    href: "/treatments/blepharoplasty",
  },
  {
    cardTone: "blue",
    image: "/images/procedures/5.png",
    imageAlt: "Otoplasty",
    badgeTone: "slate",
    badge: "Aesthetic",
    title: "Otoplasty",
    description:
      "Cosmetic ear pinning and structural cartilage remodeling for symmetry.",
    href: "/treatments/otoplasty",
  },
  {
    cardTone: "blue",
    image: "/images/procedures/6.png",
    imageAlt: "Ear Lobe Repair",
    badgeTone: "slate",
    badge: "Day Care",
    title: "Ear Lobe Repair",
    description:
      "Surgical restoration of torn, split, or elongated ear lobes with sutureless finish.",
    href: "/treatments/ear-lobe-repair",
  },
  {
    cardTone: "blue",
    image: "/images/procedures/7.png",
    imageAlt: "Dimple Creation",
    badgeTone: "mint",
    badge: "Minimally Invasive",
    title: "Dimple Creation",
    description:
      "Bespoke dynamic cheek dimpleplasty created from internal mucosal approach.",
    href: "/treatments/dimple-creation",
  },
  {
    cardTone: "blue",
    image: "/images/procedures/8.png",
    imageAlt: "Liposuction & 6-Pack Sculpting",
    badgeTone: "solid",
    badge: "High Definition",
    title: "Liposuction & 6-Pack",
    description:
      "VASER ultrasound-assisted 4D abdominal definition and muscular etching.",
    href: "/treatments/liposuction",
  },
  {
    cardTone: "blue",
    image: "/images/procedures/9.png",
    imageAlt: "Buttock Enhancement",
    badgeTone: "slate",
    badge: "Contouring",
    title: "Buttock Enhancement",
    description:
      "Brazilian Butt Lift (BBL) and natural autologous micro-fat grafting.",
    href: "/treatments/buttock-calf-augmentation",
  },
  {
    cardTone: "blue",
    image: "/images/procedures/10.png",
    imageAlt: "Abdominoplasty",
    badgeTone: "navy",
    badge: "Surgical",
    title: "Abdominoplasty",
    description:
      "Tummy tuck with muscle diastasis repair and complete waistline tapering.",
    href: "/treatments/tummy-tuck",
  },
  {
    cardTone: "blue",
    image: "/images/procedures/11.png",
    imageAlt: "Gynecomastia",
    badgeTone: "slate",
    badge: "Men's Aesthetic",
    title: "Gynecomastia",
    description:
      "Male chest reduction combining glandular excision & laser lipolysis.",
    href: "/treatments/gynecomastia",
  },
  {
    cardTone: "blue",
    image: "/images/procedures/12.png",
    imageAlt: "Breast Augmentation",
    badgeTone: "slate",
    badge: "Cosmetic",
    title: "Breast Augmentation",
    description:
      "US-FDA cohesive silicone implants and mastopexy for voluptuous lift.",
    href: "/treatments/female-breast-surgery",
  },
  {
    cardTone: "blue",
    image: "/images/Regenerative.jpeg",
    imageAlt: "Regenerative Medicine Surgery",
    badgeTone: "slate",
    badge: "Affirming",
    title: "Regenerative Medicine",
    description:
      "Advanced treatments designed to support natural healing, improve tissue health.",
    href: "/treatments/gender-reassignment",
  },
  {
    cardTone: "emerald",
    image: "/images/procedures/14.png",
    imageAlt: "Botox",
    badgeTone: "mint",
    badge: "Non-Surgical",
    title: "Botox & Neurotoxins",
    description:
      "Expression-preserving micro-dosing for crow's feet, forehead, and masseter.",
    href: "/treatments/botox",
  },
  {
    cardTone: "emerald",
    image: "/images/procedures/15.png",
    imageAlt: "Dermal Fillers",
    badgeTone: "mint",
    badge: "Non-Surgical",
    title: "Dermal Fillers",
    description:
      "Hyaluronic acid volumization for lips, tear troughs, cheekbones, and chin.",
    href: "/treatments/dermal-fillers",
  },
  {
    cardTone: "emerald",
    image: "/images/procedures/16.png",
    imageAlt: "RF Microneedling",
    badgeTone: "blue",
    badge: "Collagen",
    title: "RF Microneedling",
    description:
      "Deep dermal fractional radiofrequency delivering instant tightening & scar reduction.",
    href: "/treatments/rf-microneedling",
  },
  {
    cardTone: "emerald",
    image: "/images/procedures/17.png",
    imageAlt: "Microdermabrasion",
    badgeTone: "blue",
    badge: "Medi-Facial",
    title: "Microdermabrasion",
    description:
      "Medical hydra-exfoliation infused with peptide serums for glass skin radiance.",
    href: "/treatments/microdermabrasion",
  },
  {
    cardTone: "emerald",
    image: "/images/procedures/18.png",
    imageAlt: "Laser Skin Resurfacing",
    badgeTone: "blue",
    badge: "Technology",
    title: "Laser Resurfacing",
    description:
      "Fractional CO2 and Q-Switched Nd:YAG laser systems for pigmentation & pores.",
    href: "/treatments/laser-hair-removal",
  },
  {
    cardTone: "emerald",
    image: "/images/procedures/19.webp",
    imageAlt:
      "High-end dermatological procedure showing delicate placement of bio-absorbable polydioxanone PDO threads along the midface vector for skin tension lifting.",
    badgeTone: "mint",
    badge: "Non-Surgical",
    title: "PDO Thread Lift",
    description:
      "Barbed bio-absorbable threads repositioning sagging cheek fat pads instantly.",
    href: "/treatments/thread-lift",
  },
  {
    cardTone: "emerald",
    image: "/images/procedures/20.webp",
    imageAlt:
      "Clinical sterile preparation and micro-injection of autologous Platelet-Rich Plasma PRP into the scalp dermis with precision gold micro-cannula needles.",
    badgeTone: "mint",
    badge: "Regenerative",
    title: "PRP Scalp Therapy",
    description:
      "High-concentration autologous growth factors stimulating dormant hair follicles.",
    href: "/treatments/prp-therapy",
  },
];
