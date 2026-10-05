export type FooterLink = {
  href: string;
  label: string;
};

export const quickLinks: FooterLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/why-choose-us", label: "Why Choose Us" },
  { href: "/doctors", label: "Our Doctors" },
  { href: "/before-after", label: "Before & After Gallery" },
  { href: "/international-patients", label: "International Patients" },
];

export const treatmentLinks: FooterLink[] = [
  { href: "/hair-transplant", label: "Hair Transplant — FUE & DHI" },
  { href: "/rhinoplasty", label: "Rhinoplasty (Nose Reshaping)" },
  { href: "/face-neck-lift", label: "Face & Neck Lift" },
  {
    href: "/liposuction-body-contouring",
    label: "Liposuction & Body Contouring",
  },
  { href: "/botox-fillers", label: "Botox & Dermal Fillers" },
  { href: "/laser-treatments", label: "Medical Laser Treatments" },
];
