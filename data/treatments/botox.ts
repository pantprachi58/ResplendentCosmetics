import type { CardGridData, TreatmentPageData } from "./types";
import { bookConsultationCta, clinicMeta } from "./shared";

const IMG = "/images/pages/botox";

export const botox: TreatmentPageData = {
  slug: "botox",
  metaTitle: "Botox & Neurotoxins — Dynamic Wrinkle Softening | Resplendent Aesthetics",
  metaDescription:
    "Doctor-administered micro-dose Botox for forehead lines, crow's feet and frown lines with natural, expressive results in Greater Kailash, New Delhi.",
  hero: {
    breadcrumb: "Botox & Neurotoxins",
    status: "GK-1 Clinical Sanctuary",
    eyebrow: "US-FDA Approved Neuromodulator Therapy & Micro-Dosing",
    title: "Botox — Precision ",
    highlight: "Dynamic Wrinkle Softening",
    titleSuffix: " & Facial Harmony",
    lead: "Doctor-administered micro-droplet neuromodulators to soften forehead creases, crow's feet, and frown lines while preserving complete, expressive facial naturalism without stiffness.",
    stats: [
      { icon: "science", value: "100% Genuine", label: "US-FDA Allergan®" },
      { icon: "tune", value: "Sub-Millimeter", label: "Micro-Dosing Units" },
      { icon: "sentiment_satisfied", value: "Zero Frozen Look", label: "Full Micro-Motion" },
      { icon: "speed", value: "Fast Onset", label: "Results in 3–5 Days" },
    ],
    primaryCta: bookConsultationCta("Book Botox Consultation"),
    secondaryCta: { label: "View Dosage & Areas", href: "#dosage-zones" },
    // surgeon: {
    //   name: "Clinical Leadership Directive",
    //   initials: "R",
    //   credentials: "Administered strictly by Dr. Ananya Roy (MD Derm) & Dr. Sukhbir Singh (MS, MCh Plastic Surgery)",
    // },
    image: {
      src: `${IMG}/01-close-up-high-end-medical.jpg`,
      alt: "Doctor marking dynamic injection points on a patient's forehead",
      tag: "0% Freeze",
      captionTitle: "15-Minute Lunchtime Protocol",
      captionText: "Zero Downtime · Resume Daily Schedule",
    },
  },
  overview: {
    eyebrow: "Scientific Distinction",
    title: "Baby Botox® & Hyper-Targeted Micro-Dosing",
    intro:
      "Understanding neuromuscular junction modulation. How Resplendent replaces artificial immobility with anatomical calibration, relaxing isolated hyperkinetic fibers while honoring organic micro-expressions.",
    media: {
      src: `${IMG}/02-monochrome-medical-photography-of-female.jpg`,
      alt: "Sterile micro-injection around the crow's feet area",
      tag: "32-Gauge Sub-Dermal Precision Delivery",
      title: "Mechanism of Action — Botulinum Toxin Type A",
      text: "Targeted interruption of acetylcholine release at the presynaptic motor endplate temporarily dampens overactive muscle contractions. Skin overlying the muscle remains supple and completely uncreased during animated conversation.",
    },
    options: [
      {
        title: "Resplendent Micro-Dosing",
        icon: "verified",
        featured: true,
        bullets: [
          "Softens dynamic creases while maintaining active brow arches",
          "Preserves micro-twitches and emotional warmth in smiles",
          "Tailored micro-units calibrated to individual facial mass",
        ],
      },
      {
        title: "Conventional Over-Freezing",
        icon: "cancel",
        muted: true,
        bullets: [
          'Heavy blanket paralyzation resulting in "shiny marble" forehead',
          "Spock-like artificial brow hyper-elevation",
          "Stiffened smile creating unnatural tension in the lower eyelid",
        ],
      },
    ],
  },
  process: {
    eyebrow: "Procedural Cadence",
    title: "The 4-Stage Precision Injection Protocol",
    intro:
      "Every micro-drop is plotted with surgical mathematics, ensuring absolute symmetry, painless administration, and restorative elegance.",
    steps: [
      {
        icon: "psychology",
        title: "Dynamic Facial Myography",
        text: "We photograph and analyze muscle mobility under extreme smiling, squinting, and furrowing to chart individual vector coordinates.",
        footLabel: "Duration",
        footValue: "10 Mins",
      },
      {
        icon: "vaccines",
        title: "Ultra-Fine 32G Infiltration",
        text: "Virtually imperceptible micro-needles deliver measured micro-units directly into muscle bellies, preventing capillary rupture or visible bruising.",
        footLabel: "Discomfort Level",
        footValue: "Mild / Pinch Only",
      },
      {
        icon: "ac_unit",
        title: "Rapid Calming Cryo-Compress",
        text: "Infusion of arnica botanicals and medical-grade sterile cooling packs eliminates local erythema within 15 minutes of completion.",
        footLabel: "Downtime",
        footValue: "Immediate Return",
      },
      {
        icon: "balance",
        title: "Day-14 Symmetry Touch-Up",
        text: "Mandatory complimentary review session at day fourteen to perform high-resolution balance audits and micro-dose balancing if required.",
        footLabel: "Review Policy",
        footValue: "Included",
      },
    ],
  },
  feature: {
    eyebrow: "Pharmaceutical Purity Protocol",
    title: "Cold-Chain Integrity & Sealed Allergan® Vials",
    paragraphs: [
      "Botulinum protein efficacy deteriorates swiftly when exposed to thermal fluctuation. At Resplendent GK-1, your vial is extracted directly from precision cold storage and opened in your direct view before dilution.",
      "Our board-certified dermatologists strictly map injection safe margins, avoiding diffusion into the levator palpebrae superioris muscle — completely safeguarding against undesirable ptosis (eyelid droop) or skewed brow elevations.",
    ],
    checklist: ["Zero Dilution Alterations", "Never Administered by Nurses"],
    metrics: [
      { icon: "thermostat", value: "2°C – 8°C", label: "Cold Chain Monitored", text: "Continuous digitally monitored medical refrigeration preserves full neuromodulator potency." },
      { icon: "lock_open", value: "100% Transparent", label: "Unsealed In Front of You", text: "Original factory hologram security seal verified and broken right beside your chair." },
      { icon: "clinical_notes", value: "Zero Delegation", label: "Doctor-Exclusivity", text: "Administered exclusively by credentialed consultant dermatologists and plastic surgeons." },
      { icon: "timelapse", value: "3 – 4 Months", label: "Sustained Harmony", text: "Sustained clinical relaxation that naturally and gracefully dissipates without rebound laxity." },
    ],
  },
  cases: {
    id: "case-dossiers",
    eyebrow: "Case Documentation",
    title: "Documented Clinical Transformations",
    note: "Standardized studio lighting & zero digital post-filtering",
    columns: 4,
    cases: [
      {
        caseId: "Case #2108",
        title: "Glabellar Complex & Forehead Creases",
        text: "Complete relief of deep hyperactive furrowing without dropping eyebrow position.",
        image: { src: `${IMG}/03-clinical-close-up-before-and.jpg`, alt: "Forehead lines softened after treatment" },
        meta: ["Female, 32", "28 Units Allergan®"],
      },
      {
        caseId: "Case #1944",
        title: "Lateral Canthal Crow's Feet Softening",
        text: "Smooth transition of the lateral orbital rim maintaining natural cheek warmth during laughter.",
        image: { src: `${IMG}/04-detailed-clinical-portrait-of-male.jpg`, alt: "Male crow's feet softened with natural smile" },
        meta: ["Male, 44", "20 Units Allergan®"],
      },
      {
        caseId: "Case #3019",
        title: "Masseter Hypertrophy & Jaw Slimming",
        text: "Tension reduction from nocturnal teeth grinding paired with a sleek tapered lower facial oval.",
        image: { src: `${IMG}/05-before-and-after-medical-cosmetic.jpg`, alt: "Masseter jawline slimming result" },
        meta: ["Female, 27", "45 Units Allergan®"],
      },
      {
        caseId: "Case #4112",
        title: "Gummy Smile & Bunny Lines Correction",
        text: "Calibrated release of levator labii superioris alaeque nasi to balance gum exposure during full smiles.",
        image: { src: `${IMG}/06-clinical-close-up-result-of.jpg`, alt: "Gummy smile correction result" },
        meta: ["Female, 29", "8 Units Allergan®"],
      },
    ],
  },
  faq: {
    eyebrow: "Direct Answers",
    title: "Frequently Answered Clinical Queries",
    items: [
      {
        question: "Will Botox make my face look frozen, stiff, or artificial?",
        answer:
          'No. The dreaded "frozen mask" is an artifact of outdated, excessive commercial dosages injected indiscriminately across wide muscle spans. At Resplendent GK-1, our doctors utilize micro-dosing and Baby Botox® principles. By targeting only the specific hyperkinetic muscle fibers causing skin creasing, we preserve your full range of expressive facial movement, from heartfelt smiles to inquisitive eyebrow lifts.',
      },
      {
        question: "How quickly do the results show and how long do they last?",
        answer:
          "Initial muscle relaxation commences within 72 to 96 hours post-treatment, with full peak refinement evident by Day 10 to Day 14. Results typically maintain their crisp elegance for 3 to 5 months depending on individual metabolic rates and muscle strength. Repeated regular treatments often train the target muscles to remain in a relaxed state longer over time.",
      },
      {
        question: "Does the procedure hurt, and is there any bruising or downtime?",
        answer:
          "Discomfort is minimal and feels like tiny fleeting pinpricks. We administer an optional medical-grade topical anesthetic cream and utilize ultra-fine 32-gauge needles designed for painless ophthalmological microsurgery. Tiny mosquito-bite-like wheals vanish within 15–20 minutes, allowing you to return to work or social commitments immediately.",
      },
      {
        question: "What is the distinction between Botox and Dermal Fillers?",
        answer:
          'Botox is a neurotoxin that relaxes dynamic muscle contractions (wrinkles formed during facial expressions like frowning or squinting). In contrast, Dermal Fillers (such as Hyaluronic Acid) restore static volume loss, sculpt structure, and plump sunken hollows like cheek deflation, tear troughs, or thin lips. Many patients benefit from combining both in a holistic "Liquid Harmonization" session.',
      },
      {
        question: "Can I combine Botox with HydraFacial, peels, or microneedling on the same day?",
        answer:
          "Medical facials and superficial chemical peels must be performed prior to injecting Botox, or deferred for at least 7 days afterward. Injected neurotoxins require 4 hours of undisturbed resting to prevent unintentional mechanical displacement into surrounding muscle groups.",
      },
    ],
  },
  cta: {
    eyebrow: "Bespoke Facial Rejuvenation",
    title: "Refresh Your Expressions with Uncompromising Clinical Finesse",
    text: "Experience confidential, doctor-led neuromodulator refinement at South Delhi's premier cosmetic surgical atelier. Reserve your comprehensive 3D facial mapping session today.",
    primaryCta: bookConsultationCta("Schedule Doctor Assessment"),
    meta: clinicMeta.slice(0, 1),
  },
};

export const botoxZones: CardGridData = {
  id: "dosage-zones",
  eyebrow: "Treatment Map",
  title: "Master Anatomical Zones Treated at GK-1",
  columns: 3,
  cards: [
    { icon: "horizontal_rule", eyebrow: "Frontalis", title: "Forehead Lines", text: "Smoothes horizontal stress bands without brow ptosis." },
    { icon: "unfold_less", eyebrow: "Glabellar Complex", title: "Frown Lines (11s)", text: "Releases furrowed brow tension for a rested gaze." },
    { icon: "visibility", eyebrow: "Orbicularis Oculi", title: "Crow's Feet", text: "Softens radiating eye creases with unconstrained smiling." },
    { icon: "face", eyebrow: "Nasalis", title: "Bunny Lines", text: "Eliminates crinkling along the nasal bridge effortlessly." },
    { icon: "face_retouching_natural", eyebrow: "Masseter Muscle", title: "Jawline Slimming", text: "Relieves bruxism while contouring a sculpted V-line profile." },
    { icon: "north", eyebrow: "Platysma Bands", title: "Nefertiti Neck Lift", text: "Lifts sagging jawline boundaries and softens neck cords." },
  ],
};
