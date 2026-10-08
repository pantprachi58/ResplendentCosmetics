export type NavItem = {
  href: string;
  label: string;
};

export const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/treatments", label: "Treatments" },
  // { href: "/doctors", label: "Doctors" },
  { href: "/gallery", label: "Gallery" },
  { href: "/achievements", label: "Achievements" },
  { href: "/contact", label: "Contact" },
];

/** Nav item that opens the treatments mega menu instead of linking directly */
export const TREATMENTS_HREF = "/treatments";
