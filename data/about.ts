export type StoryStat = {
  span: "normal" | "wide";
  tone: "primary" | "secondary";
  value: string;
  label: string;
};

export const storyStats: StoryStat[] = [
  {
    span: "normal",
    tone: "primary",
    value: "15,000+",
    label: "Transformations Performed",
  },
  {
    span: "normal",
    tone: "primary",
    value: "45+",
    label: "Countries Represented",
  },
  { span: "wide", tone: "secondary", value: "100%", label: "Surgeon-Led Care" },
];

export type Pillar = {
  tone: "blue" | "emerald";
  icon: string;
  title: string;
  description: string;
};

export const pillars: Pillar[] = [
  {
    tone: "blue",
    icon: "straighten",
    title: "1. Precision",
    description:
      "Millimeter-level surgical accuracy in every contour, ensuring symmetrical balance and biological harmony tailored to facial vectors.",
  },
  {
    tone: "emerald",
    icon: "lock",
    title: "2. Privacy",
    description:
      "Discrete private lounge access, separate recovery portals, and VIP confidential protocols protecting personal dignity and peace of mind.",
  },
  {
    tone: "blue",
    icon: "fingerprint",
    title: "3. Personalization",
    description:
      "No cookie-cutter outcomes. Every surgical strategy begins with unique musculoskeletal scans and anatomy-first customized planning.",
  },
  {
    tone: "emerald",
    icon: "health_and_safety",
    title: "4. Patient Safety",
    description:
      "Hospital-grade sterile operation suites, HEPA class laminar air, and uncompromised post-operative continuous vital tracking.",
  },
];

export type ShowcaseItem = {
  image: string;
  imageAlt: string;
  tag: string;
  title: string;
  description: string;
};

export const showcase: ShowcaseItem[] = [
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDLSvjWa3L0rny5-RjujxmQ7faeXYi6UHIy6kd0qyP9ybPq4yxB1sJ4dxfDb45LQi28M9o5pJK7bHrFAPklu3szsbLCbMMQ4rYev1mkGNE39zGvOZo8o-13gcau9gg15BXyygBuNGGZI9Qrk9zB0EV28bBpg3VB1aGtFOFAPJ3kTbY2DgyBTiuk5GkWvhxNhPM-IDTP5sZAvlFUoC8npYaX6SXhsXZbsK3sr4Jp3qCJtIGw66T2yl4d",
    imageAlt:
      "Modern sterile operation theatre inside a luxury cosmetic surgery clinic in New Delhi, featuring laminar HEPA airflow ceiling, surgical lighting array, and German surgical monitoring equipment under calm medical blue and warm amber illumination.",
    tag: "Sterile Field",
    title: "Laminar Airflow & HEPA 14",
    description:
      "Zero-pathogen micro-climate ensuring zero post-surgical infection rates.",
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCnucWfxdTTUxYygFXGEMYWKaeiYjiJylI7setMrnbdBxeg8Ya_wl4OukPFvHd8_soRqCObGzKUnwZHay9mChuzj1K7I4d2t7Y63RB5xSmYmYCOMLSy8YcI0opyvFB8D-9rDR5ejl-PYfM6H9et-DOS-9xHeLujOqIeR0qsvThO8lc2zRrU2wYxGMHwPqfhE5wnzdtWEIHc2VlD--_rTjfM5Z9t3FwvvjZthRKkZXtEHJmMU9PllyKx",
    imageAlt:
      "High precision German micro-surgical instruments, precision scalpels, and specialized cosmetic contouring devices resting on sterile stainless steel medical trays in a boutique South Delhi aesthetic clinic.",
    tag: "Instrumentation",
    title: "German Precision Optics",
    description:
      "Ultra-refined micro-instruments for minimal tissue trauma and rapid recovery.",
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAQQOqrKD0xFkArJUkOLvqo-ZIAitrtHxCIlBFPdSBTE6cLwa_mgWYjq0a3mX3ux6r4DL_MeEcThFF5kXAym5WlUP8jx-a_dOjyfuS9JDjJqU5j76ZNqXo4h6xD3iRYDglETkyJEBmbFw2Z1kUWi5HOgC2RmD7yrDC47MsVqXEm-pTAFrcNbv2-rDY4yBngs2a5Q3Vik5lEwwGam-ME12I79_io8RZAP6oLiipJwDWnIp_se72_ph30",
    imageAlt:
      "Private boutique patient recovery suite at an elite cosmetic surgery clinic, soft ivory architectural finishes, warm ambient lighting, plush ergonomic recovery bed, and discreet medical monitoring.",
    tag: "VIP Recovery",
    title: "Acoustic Private Suites",
    description:
      "A hotel-grade recovery sanctuary paired with continuous nursing vigilance.",
  },
];

export type Metric = {
  icon: string;
  title: string;
  caption: string;
};

export const metrics: Metric[] = [
  {
    icon: "verified_user",
    title: "NABH Aligned",
    caption: "Protocol Compliance",
  },
  {
    icon: "air",
    title: "Class 10,000 OT",
    caption: "Positive Pressure Airflow",
  },
  {
    icon: "monitoring",
    title: "Critical Care",
    caption: "24/7 Anesthesia Monitoring",
  },
  {
    icon: "local_hospital",
    title: "Autoclave Sterility",
    caption: "Class-B Vacuum Tech",
  },
];

export type Milestone = {
  ringTone: "blue" | "emerald";
  dotTone: "blue" | "green";
  yearTone: "blue" | "green";
  year: string;
  title: string;
  description: string;
};

export const milestones: Milestone[] = [
  {
    ringTone: "blue",
    dotTone: "blue",
    yearTone: "blue",
    year: "2008",
    title: "International Fellowships",
    description:
      "Dr. Sukhbir Singh completes rigorous training and aesthetic surgical residency at PUCRS Brazil, absorbing refined Rio de Janeiro contouring mastery.",
  },
  {
    ringTone: "blue",
    dotTone: "blue",
    yearTone: "blue",
    year: "2014",
    title: "GK-1 Sanctuary Launch",
    description:
      "Inauguration of Resplendent Aesthetics in Greater Kailash Part 1, South Delhi, creating an exclusive sanctuary for bespoke plastic surgery.",
  },
  {
    ringTone: "emerald",
    dotTone: "green",
    yearTone: "green",
    year: "2018",
    title: "Micro-FUE Innovation",
    description:
      "Introduction of specialized motorized Micro-FUE & sapphire slit graft implanters for natural, dense hairline transformations.",
  },
  {
    ringTone: "blue",
    dotTone: "blue",
    yearTone: "blue",
    year: "2021",
    title: "HD Sculpting & RF",
    description:
      "Deployment of 4D high-definition ultrasonic liposuction, RF subdermal skin tightening, and advanced nonsurgical lasers.",
  },
];
