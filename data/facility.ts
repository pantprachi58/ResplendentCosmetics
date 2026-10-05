export type Feature = {
  tone: "blue" | "emerald";
  icon: string;
  title: string;
  description: string;
};

export const features: Feature[] = [
  {
    tone: "blue",
    icon: "air",
    title: "Class-100 Laminar OT",
    description:
      "Ultra-clean HEPA filtration with positive air pressure ensuring zero microbial exposure for major aesthetic procedures.",
  },
  {
    tone: "emerald",
    icon: "hotel",
    title: "Private VIP Recovery",
    description:
      "Five-star hotel-standard recovery chambers featuring en-suite amenities, private nurse call, and discrete subterranean ingress.",
  },
  {
    tone: "blue",
    icon: "monitor_heart",
    title: "Advanced Anesthesia Care",
    description:
      "Dräger anesthesia workstations paired with continuous multi-parameter hemodynamic monitoring by board-certified cardiac anaesthesiologists.",
  },
  {
    tone: "emerald",
    icon: "concierge",
    title: "Dedicated Concierge",
    description:
      "Personal patient relation managers oversee round-the-clock appointment scheduling, recovery medication logistics, and follow-ups.",
  },
];
