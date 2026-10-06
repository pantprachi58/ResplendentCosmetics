export type TreatmentItem = {
  name: string;
  href: string;
};

export type TreatmentCategory = {
  category: string;
  items: TreatmentItem[];
};

export const treatmentCategories: TreatmentCategory[] = [
  {
    category: "Face",
    items: [
      { name: "Rhinoplasty", href: "/treatments/rhinoplasty" },
      { name: "Face & Neck Lift", href: "/treatments/face-neck-lift" },
      { name: "Blepharoplasty", href: "/treatments/blepharoplasty" },
      { name: "Otoplasty", href: "/treatments/otoplasty" },
      { name: "Ear Lobe Repair", href: "/treatments/ear-lobe-repair" },
      { name: "Dimple Creation", href: "/treatments/dimple-creation" },
      { name: "Brow Lift", href: "/treatments/brow-lift" },
      { name: "Chin & Jawline", href: "/treatments/chin-jawline" },
      { name: "Botox & Neurotoxins", href: "/treatments/botox" },
      { name: "Dermal Fillers", href: "/treatments/dermal-fillers" },
      { name: "Thread Lift", href: "/treatments/thread-lift" },
      { name: "RF Microneedling", href: "/treatments/rf-microneedling" },
      { name: "Laser Resurfacing", href: "/treatments/laser-resurfacing" },
      { name: "Microdermabrasion", href: "/treatments/microdermabrasion" },
      { name: "Chemical Peel", href: "/treatments/chemical-peel" },
      { name: "HydraFacial", href: "/treatments/hydrafacial" },
    ],
  },
  {
    category: "Body",
    items: [
      { name: "Liposuction & 6-Pack", href: "/treatments/liposuction" },
      { name: "Tummy Tuck", href: "/treatments/tummy-tuck" },
      { name: "Buttock & Calf Augmentation", href: "/treatments/buttock-calf-augmentation" },
      { name: "Body Tightening", href: "/treatments/body-tightening" },
      { name: "Fat Grafting", href: "/treatments/fat-grafting" },
      { name: "Body Contouring", href: "/treatments/body-contouring" },
      { name: "VASER Liposuction", href: "/treatments/vaser-liposuction" },
      { name: "Laser Hair Removal", href: "/treatments/laser-hair-removal" },
      { name: "Gender Reassignment", href: "/treatments/gender-reassignment" },
    ],
  },
  {
    category: "Women",
    items: [
      { name: "Breast Augmentation", href: "/treatments/breast-surgery#augmentation" },
      { name: "Breast Reduction", href: "/treatments/breast-surgery#reduction" },
      { name: "Breast Lift", href: "/treatments/breast-surgery#lift" },
      { name: "Vaginoplasty / Rejuvenation", href: "/treatments/vaginoplasty" },
      { name: "Vaginal Tightening", href: "/treatments/vaginal-tightening" },
      { name: "Hymenoplasty", href: "/treatments/hymenoplasty" },
      { name: "Mommy Makeover", href: "/treatments/mommy-makeover" },
      { name: "Lip Augmentation", href: "/treatments/lip-augmentation" },
    ],
  },
  {
    category: "Men",
    items: [
      { name: "Hair Transplant", href: "/treatments/hair-transplant" },
      { name: "Gynecomastia", href: "/treatments/gynecomastia" },
      { name: "Six-Pack Abs Surgery", href: "/treatments/six-pack-abs" },
      { name: "Male Liposuction", href: "/treatments/male-liposuction" },
      { name: "Penile Enlargement", href: "/treatments/penile-enlargement" },
      { name: "PRP Therapy", href: "/treatments/prp-therapy" },
      { name: "Beard Transplant", href: "/treatments/beard-transplant" },
      { name: "Male Face Lift", href: "/treatments/male-face-lift" },
    ],
  },
];
