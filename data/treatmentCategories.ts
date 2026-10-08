export type TreatmentItem = {
  name: string;
  href: string;
};

export type TreatmentCategory = {
  category: string;
  items: TreatmentItem[];
};

// Mirrors the Face / Body / Women / Men menu on the live site (resplendentcosmetics.com),
// with Hair Transplant removed from Face. Every href must resolve to a page under app/treatments.
export const treatmentCategories: TreatmentCategory[] = [
  {
    category: "Face",
    items: [
      { name: "Brow Lift", href: "/treatments/brow-lift" },
      { name: "Thread Lift", href: "/treatments/thread-lift" },
      { name: "Dimple Surgery", href: "/treatments/dimple-creation" },
      { name: "Earlobe Repair", href: "/treatments/ear-lobe-repair" },
      { name: "Ear Surgery", href: "/treatments/otoplasty" },
      { name: "Eyelid Surgery", href: "/treatments/eyelid-surgery" },
      { name: "Face Lift", href: "/treatments/face-neck-lift" },
      { name: "Lip Augmentation", href: "/treatments/lip-augmentation" },
      { name: "Injectable Dermal Fillers", href: "/treatments/dermal-fillers" },
      { name: "PRP Therapy (Non-Surgical)", href: "/treatments/prp-therapy" },
      { name: "Nose Job", href: "/treatments/rhinoplasty" },
      { name: "Botox (Non-Surgical)", href: "/treatments/botox" },
      { name: "Microdermabrasion (Non-Surgical)", href: "/treatments/microdermabrasion" },
      { name: "Chemical Peel (Non-Surgical)", href: "/treatments/chemical-peel" },
    ],
  },
  {
    category: "Body",
    items: [
      { name: "Liposuction Surgery", href: "/treatments/liposuction" },
      // The live "Body Lift" item links to the buttock & calf augmentation page.
      { name: "Body Lift", href: "/treatments/buttock-calf-augmentation" },
      { name: "Gender Reassignment Surgery", href: "/treatments/gender-reassignment" },
      { name: "Laser Hair Removal", href: "/treatments/laser-hair-removal" },
      { name: "Body Tightening", href: "/treatments/body-tightening" },
      { name: "Microneedling RF (Morpheus8)", href: "/treatments/rf-microneedling" },
      { name: "Autologous Fat Grafting", href: "/treatments/fat-grafting" },
      { name: "Tummy Tuck Surgery", href: "/treatments/tummy-tuck" },
    ],
  },
  {
    category: "Women",
    items: [
      { name: "Female Breast Surgery", href: "/treatments/female-breast-surgery" },
      { name: "Hymenoplasty Surgery", href: "/treatments/hymenoplasty" },
      { name: "Vaginal Tightening", href: "/treatments/vaginal-tightening" },
      { name: "Vaginoplasty Surgery", href: "/treatments/vaginoplasty" },
    ],
  },
  {
    category: "Men",
    items: [
      { name: "Penis Enlargement", href: "/treatments/penile-enlargement" },
      { name: "Male Breast Reduction", href: "/treatments/gynecomastia" },
      { name: "Six Pack Plastic Surgery", href: "/treatments/six-pack-abs" },
    ],
  },
];
