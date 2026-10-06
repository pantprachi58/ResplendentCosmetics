import type { Cta } from "./types";

/** Breadcrumb trail for pages under /treatments */
export const treatmentsCrumb = [{ label: "Treatments", href: "/treatments" }];

export const bookConsultationCta = (label: string): Cta => ({
  label,
  href: "/book-consultation",
  icon: "arrow_forward",
});

export const clinicMeta = [
  { icon: "location_on", label: "R-9, Basement, Greater Kailash Part 1, New Delhi - 110048" },
  { icon: "verified", label: "Private Valet & Confidential VIP Entry" },
];
