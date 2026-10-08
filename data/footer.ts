export type FooterLink = {
  href: string;
  label: string;
};

export const quickLinks: FooterLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/why-choose-us", label: "Why Choose Us" },
  // { href: "/doctors", label: "Our Doctors" },
  { href: "/blog", label: "Blog" },
  { href: "/gallery", label: "Gallery" },
  { href: "/achievements", label: "Achievements" },
  { href: "/contact#international-desk", label: "International Patients" },
];

export const treatmentLinks: FooterLink[] = [
  { href: "/treatments/hair-transplant", label: "Hair Transplant — FUE & DHI" },
  { href: "/treatments/rhinoplasty", label: "Rhinoplasty (Nose Reshaping)" },
  { href: "/treatments/face-neck-lift", label: "Face & Neck Lift" },
  {
    href: "/treatments/liposuction",
    label: "Liposuction & Body Contouring",
  },
  { href: "/treatments/botox", label: "Botox & Dermal Fillers" },
  { href: "/treatments/laser-hair-removal", label: "Laser Hair Removal" },
];
