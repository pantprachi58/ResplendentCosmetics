import type { ImageRef } from "./treatments/types";

/*
 * Home-page "Clinical Gallery" cases, shown as draggable before/after sliders.
 * Rhinoplasty and hair restoration use real clinic pairs; the other two are stand-ins
 * (`sample: true`) until real pairs are supplied. To replace one, point before/after at the
 * photos (same framing) and delete `sample`.
 */
export type CaseStudy = {
  before: ImageRef;
  after: ImageRef;
  /** Stand-in photo: greys out the before side and shows a "Sample" badge */
  sample?: boolean;
  /** CSS object-position for both photos */
  focus?: string;
  tag: string;
  badgeTone: "primary" | "emerald";
  badge: string;
  title: string;
  description: string;
  credit: string;
  note: string;
};

export const results: CaseStudy[] = [
  {
    before: { src: "/images/pages/rhinoplasty/before-after/before.jpg", alt: "Rhinoplasty patient profile before surgery" },
    after: { src: "/images/pages/rhinoplasty/before-after/after.jpg", alt: "Rhinoplasty patient profile after surgery" },
    focus: "75% 50%",
    tag: "Rhinoplasty",
    badgeTone: "primary",
    badge: "12 Months Post-Op",
    title: "Open Structural Rhinoplasty",
    description:
      "Correction of significant dorsal hump and deviated septum, restoring smooth bridge harmony and natural breathing dynamics.",
    credit: "Dr. Sukhbir Singh",
    note: "Closed Technique",
  },
  {
    before: { src: "/images/pages/hair-transplant/before-after/before.jpg", alt: "Hair transplant patient's thinning crown and hairline before treatment" },
    after: { src: "/images/pages/hair-transplant/before-after/after.jpg", alt: "Hair transplant patient's restored hair coverage after treatment" },
    focus: "50% 30%",
    tag: "FUE Hairline",
    badgeTone: "primary",
    badge: "3,400 Grafts",
    title: "Micro-FUE Hair Restoration",
    description:
      "Complete reconstruction of Norwood Grade IV frontal recession with natural multi-directional angulation and dense crown coverage.",
    credit: "DHI Protocol",
    note: "9 Months Post-Op",
  },
  {
    before: { src: "/images/procedures/8.png", alt: "Sample image of a defined abdomen, before view" },
    after: { src: "/images/procedures/8.png", alt: "Sample image of a defined abdomen, after view" },
    sample: true,
    tag: "VASER 4D",
    badgeTone: "emerald",
    badge: "High-Def Result",
    title: "High-Definition Lipo-Sculpture",
    description:
      "Athletic torso definition with selective superficial lipo-etching over rectus and oblique muscles for sculpted abdominal tone.",
    credit: "Ultrasound VASER",
    note: "4 Months Post-Op",
  },
  {
    before: { src: "/images/procedures/3.png", alt: "Sample image of the jawline and neck, before view" },
    after: { src: "/images/procedures/3.png", alt: "Sample image of the jawline and neck, after view" },
    sample: true,
    tag: "SMAS Lift",
    badgeTone: "primary",
    badge: "Deep Plane",
    title: "Face & Neck Lift + Blepharoplasty",
    description:
      "Complete lower face tightening and periorbital refresh eliminating jowls and neck laxity with concealed hairline incisions.",
    credit: "10+ Year Rollback",
    note: "6 Months Post-Op",
  },
];
