export type Stat = {
  tone: "primary" | "secondary";
  value: string;
  label: string;
  caption: string;
};

export const stats: Stat[] = [
  {
    tone: "primary",
    value: "18+",
    label: "Years of Excellence",
    caption: "Pioneering Aesthetic Plastic Surgery",
  },
  {
    tone: "primary",
    value: "15,000+",
    label: "Procedures Performed",
    caption: "Surgical & Advanced Lasers",
  },
  {
    tone: "secondary",
    value: "99.4%",
    label: "Satisfaction Rate",
    caption: "Independently Audited Outcomes",
  },
  {
    tone: "primary",
    value: "45+",
    label: "Countries Served",
    caption: "Dedicated International Desk",
  },
];
