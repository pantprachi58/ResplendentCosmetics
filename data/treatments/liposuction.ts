import type { TreatmentPageData } from "./types";
import { bookConsultationCta, clinicMeta } from "./shared";

const IMG = "/images/pages/liposuction";

export const liposuction: TreatmentPageData = {
  slug: "liposuction",
  metaTitle: "VASER® Liposuction & High-Definition Body Sculpting | Resplendent Aesthetics",
  metaDescription:
    "High-definition VASER® 4D liposculpture and MicroAire® body contouring with minimal downtime by Dr. Sukhbir Singh in Greater Kailash, New Delhi.",
  hero: {
    breadcrumb: "Liposuction & Body Architecture",
    status: "Accredited Center of Aesthetic Excellence",
    eyebrow: "High-Definition 4D Liposculpture & VASER® Precision",
    title: "Liposuction — ",
    highlight: "Architectural Body Sculpting",
    titleSuffix: " & High-Definition Harmony",
    lead: "Artistic anatomical fat redistribution, athletic muscular etching, and VASER® ultrasound-assisted contouring with minimal downtime and zero skin laxity.",
    stats: [
      { value: "0.3 cm", label: "Micro-Cannulas" },
      { value: "VASER® 2.0", label: "Acoustic Precision" },
      { value: "+53%", label: "Skin Retraction" },
      { value: "7–10 Days", label: "Social Downtime" },
    ],
    primaryCta: bookConsultationCta("Book Body Assessment"),
    secondaryCta: { label: "Explore Case Dossiers", href: "#case-dossiers", iconLeading: "photo_library" },
    surgeon: {
      name: "Dr. Sukhbir Singh",
      role: "Lead Plastic Surgeon",
      credentials: "MBBS, MS, MCh (Plastic Surgery) • Fellow PUCRS (Brazil) • ISAPS & APSI Member",
      badges: ["VASER® 4D Master", "MicroAire PAL Certified", "360° Circumferential Lipo"],
    },
    image: {
      src: `${IMG}/01-high-fashion-monochromatic-clinical-photography.jpg`,
      alt: "Contoured male torso with defined abdominal etching",
      tag: "Vectra 4D Topology",
      captionTitle: "Sub-Dermal Muscular Etching",
      captionText: "Selective fat preservation along anatomical grooves",
    },
  },
  overview: {
    eyebrow: "Scientific Distinction",
    title: "Ultrasound-Assisted VASER® 4D vs. Traditional Liposuction",
    intro:
      "Resplendent operates exclusively with third-generation acoustic tissue liquefaction, preserving vital vascularity and eliciting collagenous dermal retraction.",
    media: {
      src: `${IMG}/02-monochrome-close-up-of-female.jpg`,
      alt: "Female waist with golden ratio contour markings",
      tag: "Hourglass Curvature • VASER® High-Def",
      title: "Targeted Anatomical Precision",
      text: "Sub-millimeter calibration across the body's key contour zones.",
      checklist: [
        "Male 6-Pack & Pectorals",
        "Hourglass Flanks & Waist",
        "Submental & Jowl Definition",
        "Posterior Bra & Thigh Bulges",
      ],
    },
    options: [
      {
        title: "VASER® 4D Ultrasonic Emulsification",
        icon: "graphic_eq",
        tag: "The Gold Standard at Resplendent",
        featured: true,
        text: "Ultrasound energy targets fat cells exclusively. By vibrating at 36 kHz, it turns fat into a liquid emulsion without severing connective tissues, cutaneous nerves, or blood vessels.",
        bullets: [
          "Tissue Selectivity: spares blood vessels, drastically mitigating bruising and hemorrhage.",
          "53% Skin Retraction: acoustic thermal action stimulates neocollagenesis for tightened skin.",
          "Viable Fat Transfer: emulsified adipocytes possess 85%+ viability for BBL or facial grafting.",
          "Athletic Etching: sculpts true 3D athletic shadow grooves following genuine musculature.",
        ],
      },
      {
        title: "Traditional Mechanical Suction Liposuction",
        icon: "do_not_disturb_on",
        muted: true,
        text: "Uses brute mechanical thrusting to rip through adipose clusters. Lacks tissue discrimination, elevating surgical trauma, hematoma risks, and irregular rippling.",
        bullets: [
          "High risk of skin sagging & irregularities",
          "Significant blood loss & prolonged bruising",
          "Traumatic tearing of subcutaneous septa",
          "Cannot execute high-definition athletic etching",
        ],
      },
    ],
  },
  process: {
    eyebrow: "Surgical Architecture",
    title: "The 4-Stage Precision Protocol",
    intro:
      "A bespoke sequence refined by Brazilian fellowship guidelines, executing microscopic contour transitions with absolute patient safety.",
    steps: [
      {
        icon: "straighten",
        title: "Biometric Surface Mapping",
        text: "Patient stands under specialized surgical lighting while Dr. Sukhbir Singh demarcates dynamic anatomical landmarks, muscular insertions, and planned contour transitions.",
        footValue: "Pre-Op Vector Design",
      },
      {
        icon: "water_drop",
        title: "Tumescent Super-Wet Infiltration",
        text: "Sterile chilled Klein tumescent solution with buffered epinephrine is infused. This constricts local blood vessels to eliminate surgical bleeding while preparing adipose clusters.",
        footValue: "Hemostatic Protection",
      },
      {
        icon: "waves",
        title: "VASER® Acoustic Emulsification",
        text: "Solid grooved titanium ultrasound probes deliver controlled acoustic frequencies. Fat cells gently detach into an emulsion while blood vessels and collagen fibers remain intact.",
        footValue: "Tissue-Selective Cavitation",
      },
      {
        icon: "air",
        title: "MicroAire® Smooth Sculpt & Compression",
        text: "Power-assisted micro-cannulas gently aspirate the liquid emulsion with surgical symmetry. An immediate custom medical compression garment is applied to seal dermal planes.",
        footValue: "Harmonic Evacuation",
      },
    ],
  },
  feature: {
    eyebrow: "Surgical Suite Telemetry",
    title: "VASER 2.0 & MicroAire Power-Assisted Lipo Technology",
    paragraphs: [
      "High-Definition 4D Liposculpture is not merely fat evacuation; it is the fine art of negative space. By utilizing third-generation VASER® acoustic ultrasound paired with MicroAire® reciprocating micro-cannulas, Dr. Sukhbir Singh shapes athletic muscular convexity and concavity without unnatural surgical grooving.",
      "All procedures are conducted in our Class-100 Laminar Sterile Operating Theatre in Greater Kailash, monitored continuously by senior consultant anesthesiologists.",
    ],
    checklist: ["Zero-Compromise Asepsis", "Rapid Cellular Rebound"],
    metrics: [
      { value: "98.2%", label: "Acoustic Precision", text: "Tissue selectivity sparing microvascular and neurovascular network bundles." },
      { value: "+53%", label: "Thermal Retraction", text: "Enhanced skin tightening compared to standard mechanical suction lipoplasty." },
      { value: "0.3 cm", label: "Incision Footprint", text: "Micro-puncture access sites concealed within natural anatomical creases." },
      { value: "Class-100", label: "Facility Accreditation", text: "Ultra-pure positive pressure laminar airflow operating theatre setup." },
    ],
  },
  cases: {
    id: "case-dossiers",
    eyebrow: "Surgical Results",
    title: "Documented Clinical Transformations",
    note: "Unretouched clinical results",
    columns: 4,
    cases: [
      {
        caseId: "Case #5102",
        badge: "6 Months Post-Op",
        title: "Male 4D Abdominal Etching",
        text: "Athletic rectus muscle definition and flank sculpting.",
        image: { src: `${IMG}/03-black-and-white-medical-aesthetic.jpg`, alt: "Male abdomen after high-definition VASER liposuction" },
        meta: ["Extracted: 3.2L", "Age: 34 • Male"],
      },
      {
        caseId: "Case #4881",
        badge: "3 Months Post-Op",
        title: "360° Waist Contouring",
        text: "Circumferential waist cinch with high dermal retraction.",
        image: { src: `${IMG}/04-monochrome-clinical-photography-of-female.jpg`, alt: "Female waist after circumferential liposuction" },
        meta: ["Extracted: 2.8L", "Age: 29 • Female"],
      },
      {
        caseId: "Case #3924",
        badge: "4 Months Post-Op",
        title: "Bra Roll & Flank Sculpt",
        text: "Smooth posterior contouring and sub-scapular fat removal.",
        image: { src: `${IMG}/05-clinical-black-and-white-photography.jpg`, alt: "Female back after bra roll liposuction" },
        meta: ["Extracted: 1.4L", "Age: 38 • Female"],
      },
      {
        caseId: "Case #6015",
        badge: "6 Months Post-Op",
        title: "Deltoid & Arm Definition",
        text: "Micro-cannula definition of upper arm athletic lines.",
        image: { src: `${IMG}/06-monochrome-male-athletic-arm-and.jpg`, alt: "Male arm and shoulder definition" },
        meta: ["Extracted: 0.9L", "Age: 42 • Male"],
      },
    ],
  },
  faq: {
    eyebrow: "Clarity & Medical Consultation",
    title: "Frequently Asked Clinical Questions",
    items: [
      {
        question: "Is liposuction a weight loss procedure or body contouring?",
        answer:
          "Liposuction is strictly an anatomical body contouring procedure, not a systemic obesity treatment. Its primary objective is the targeted elimination of stubborn genetic fat deposits that resist disciplined diet and training. The best candidates are within 15–20% of their target body weight with reasonably good skin elasticity.",
      },
      {
        question: "What is the recovery timeline and how long must I wear the compression garment?",
        answer:
          "Most patients return to desk duties and light social activities within 7 to 10 days. A bespoke medical-grade compression garment must be worn 24/7 for the first 3 to 4 weeks, followed by 2 weeks of nighttime wear. This minimizes dead space, prevents seroma accumulation, and supports harmonious skin retraction.",
      },
      {
        question: "Will the removed fat cells return over time?",
        answer:
          "No. The human body has a finite number of fat cells after adolescence. Once emulsified and extracted via VASER® liposuction, those specific adipocytes do not regenerate. Provided a stable lifestyle is maintained, the newly contoured proportions are permanent.",
      },
      {
        question: "How are incisions hidden and will there be visible scars?",
        answer:
          "Dr. Sukhbir Singh utilizes ultra-fine micro-cannulas that require entry points of only 0.3 to 0.4 cm. These are positioned within the navel fold, along underwear seams, or inside natural skin creases. After healing and silicone scar gel therapy, they typically fade into virtually imperceptible faint marks.",
      },
      {
        question: "Can the harvested fat be transferred to the buttocks (BBL) or breasts?",
        answer:
          "Yes. Because VASER® technology employs gentle acoustic liquefaction rather than destructive shearing, the aspirate contains highly intact fat cells and regenerative stromal vascular cells. This fat can be purified and transferred to enhance buttocks curvature (Brazilian Butt Lift), chest, or facial volume deficits.",
      },
    ],
  },
  cta: {
    eyebrow: "South Delhi Private Surgical Sanctuary",
    title: "Sculpt Your Silhouette with International Fellowship Precision",
    text: "Experience bespoke anatomical artistry led by Dr. Sukhbir Singh. Private, confidential consultations in Greater Kailash Part 1.",
    primaryCta: bookConsultationCta("Schedule Confidential Assessment"),
    meta: clinicMeta.slice(0, 1),
  },
};
