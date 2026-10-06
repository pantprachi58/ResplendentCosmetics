import type { CalloutData, TreatmentPageData } from "./types";
import { bookConsultationCta } from "./shared";

const IMG = "/images/pages/rhinoplasty";

export const rhinoplasty: TreatmentPageData = {
  slug: "rhinoplasty",
  metaTitle: "Rhinoplasty — Nose Reshaping & Facial Harmony | Resplendent Aesthetics",
  metaDescription:
    "Preservation and structural rhinoplasty with piezo ultrasonic precision and airway protection by Dr. Sukhbir Singh in Greater Kailash, New Delhi.",
  hero: {
    breadcrumb: "Rhinoplasty",
    eyebrow: "Structural & Preservation Facial Sculpting",
    title: "Rhinoplasty — Nose Reshaping & ",
    highlight: "Facial Harmony",
    lead: "Bespoke preservation rhinoplasty and structural nasal remodeling engineered with millimeter precision by international plastic surgery fellows at our clinical sanctuary in Greater Kailash 1, New Delhi.",
    pills: [
      { icon: "straighten", label: "Preservation & Structural Anatomy" },
      { icon: "air", label: "Preserved Natural Airway Dynamics" },
      { icon: "visibility_off", label: "Invisible Columellar Incision" },
      { icon: "verified", label: "Zero Artificial Over-Resection" },
    ],
    primaryCta: bookConsultationCta("Book Rhinoplasty Assessment"),
    secondaryCta: { label: "Explore 3D Nose Simulation", href: "#simulation-section", iconLeading: "view_in_ar" },
    card: {
      eyebrow: "Lead Consultant Plastic Surgeon",
      title: "Dr. Sukhbir Singh",
      icon: "verified",
      checklist: [
        "MBBS, MS, MCh (Plastic Surgery) • Fellow PUCRS Brazil",
        "ISAPS Member • APSI Certified",
        "Piezotome Technology: ultrasonic bone reshaping with zero mucosal tearing",
        "Airway Protection: concomitant spreader grafts ensure laminar flow",
      ],
      footLabel: "Direct Case Lead",
      footValue: "Greater Kailash 1, New Delhi",
    },
  },
  overview: {
    eyebrow: "Anatomy & Philosophy",
    title: "Surgical vs Non-Surgical Liquid Rhinoplasty: The Resplendent Approach",
    paragraphs: [
      "Unlike standard one-size-fits-all reduction rhinoplasties that can collapse nasal valves or produce a pinched, artificial appearance, Resplendent specializes in preservation rhinoplasty and piezo ultrasonic osteotomies to sculpt bone and cartilage without traumatic hammer fracturing.",
      "By remaining strictly in anatomical tissue planes, our plastic surgeons conserve the natural dorsal roof and periosteum, yielding smoother supratip contours, negligible postoperative bruising, and enduring respiratory mechanics tailored to authentic South Asian and global nasal morphologies.",
    ],
    media: {
      src: `${IMG}/01-pre-operative-profile-assessment-nasofrontal.jpg`,
      alt: "Pre-operative nasal profile assessment",
      tag: "Clinical Dossier: Morphometric Analysis",
      title: "Pre-Operative Profile Assessment",
      text: "Nasofrontal angle, dorsum projection, and nasolabial inclination mapped to individualized golden-ratio facial parameters.",
    },
    options: [
      {
        title: "Structural & Preservation Rhinoplasty",
        icon: "medical_services",
        featured: true,
        bullets: [
          "Permanent structural correction of osteocartilaginous vault",
          "Ultrasonic micro-piezo accuracy without bone crushing",
          "Complete septoplasty & internal valve reconstruction",
        ],
      },
      {
        title: "Non-Surgical Liquid Rhinoplasty",
        icon: "water_drop",
        bullets: [
          "Targeted micro-droplet crosslinked HA dermal filler",
          "Camouflages minor dorsal humps & asymmetry in 15 mins",
          "Zero surgical downtime; reversible biocompatible finish",
        ],
      },
    ],
  },
  process: {
    eyebrow: "Methodology",
    title: "The 4-Stage Nasal Sculpting Pathway",
    intro:
      "An internationally accredited protocol combining endonasal endoscopy, ultrasonic osteotomy, and precise sub-perichondrial cartilage stabilization.",
    steps: [
      {
        icon: "camera_indoor",
        title: "Consultation & Digital Morphing",
        text: "3D biometric imaging, endonasal endoscopy to assess internal valve patency, and exact alignment of patient aesthetic expectations with cranial proportions.",
        footLabel: "Stage 1",
        footValue: "Diagnostic",
      },
      {
        icon: "tune",
        title: "Anesthetic & Piezo Preparation",
        text: "Administered under specialized twilight sedation or TIVA general anesthesia. High-frequency piezotome sculpting selectively remodels bone while keeping delicate nasal mucosa intact.",
        footLabel: "Stage 2",
        footValue: "Precision Osteotomy",
      },
      {
        icon: "healing",
        title: "Cartilage Grafting & Contouring",
        text: "Micro-sutured tip cartilages, columellar strut, and autologous spreader grafts reinforce the internal nasal valve, ensuring structural stability and eliminating late tip drop.",
        footLabel: "Stage 3",
        footValue: "Structural Craft",
      },
      {
        icon: "verified_user",
        title: "Splinting & Rapid-Rx Recovery",
        text: "Customized thermoplastic external nasal splint with soft internal silicone airway splints, supported by our targeted anti-inflammatory botanical and lymphatic protocol.",
        footLabel: "Stage 4",
        footValue: "Rehabilitation",
      },
    ],
  },
  feature: {
    eyebrow: "Predictive Diagnostics",
    title: "Predictive 3D Stereophotogrammetry & Nasal Biometric Simulation",
    paragraphs: [
      "Before any incision or ultrasonic adjustment, our 3D optical stereolithography captures your exact facial contours from multiple angles, allowing surgeon and patient to co-visualize the reshaped profile in photo-realistic 360° resolution.",
    ],
    metrics: [
      { icon: "precision_manufacturing", value: "0.1 mm", label: "Micro-Piezotome Accuracy", text: "Ultrasonic bone remodeling without soft-tissue bruising or blind fractures." },
      { icon: "verified", value: "100%", label: "Functional Airway Preservation", text: "Internal nasal valve reinforcement prevents post-op breathing obstruction." },
    ],
    cta: bookConsultationCta("Request Your 3D Profile Simulation"),
  },
  cases: {
    id: "case-dossiers",
    eyebrow: "Verified Case Dossiers",
    title: "Documented Clinical Transformations",
    intro:
      "Real anatomical corrections highlighting natural dorsum preservation, precise osteocartilaginous reshaping, and functional restoration.",
    note: "Unretouched Standardized Clinical Lighting",
    columns: 2,
    cases: [
      {
        caseId: "Case Study #3104",
        badge: "Lead Surgeon: Dr. Sukhbir Singh",
        title: "Dorsal Hump Reduction & Supratip Break Definition",
        text: "Ultrasonic Preservation Rhinoplasty. The bony vault was spared from excision and lowered as an intact unit, yielding an immaculate natural bridge.",
        before: { src: `${IMG}/02-clinical-pre-operative-side-profile.jpg`, alt: "Prominent dorsal hump before rhinoplasty" },
        after: { src: `${IMG}/03-clinical-post-operative-side-profile.jpg`, alt: "Straight nasal dorsum after preservation rhinoplasty", label: "After (1 Year)" },
        meta: ["Ultrasonic Preservation", "Natural Bridge"],
      },
      {
        caseId: "Case Study #2890",
        badge: "Lead Surgeon: Dr. Sukhbir Singh",
        title: "Crooked Nose & Deviated Septum Reconstruction",
        text: "Septorhinoplasty + Spreader Grafts. Extensive sub-mucosal septal realignments restored laminar airflow with bilateral symmetry.",
        before: { src: `${IMG}/04-clinical-frontal-view-of-a.jpg`, alt: "C-shaped nasal deviation before surgery" },
        after: { src: `${IMG}/05-clinical-frontal-view-showing-a.jpg`, alt: "Symmetrical straight nasal midline after surgery", label: "After (9 Months)" },
        meta: ["Septorhinoplasty", "Airway Restored"],
      },
      {
        caseId: "Case Study #4412",
        badge: "Lead Surgeon: Dr. Sukhbir Singh",
        title: "Bulbous Tip Refinement & Columellar Angle Lift",
        text: "Open Structural Rhinoplasty. Interdomal micro-suturing and cephalic trim with columellar strut graft to deliver elegant definition without pinched contours.",
        before: { src: `${IMG}/06-clinical-basilar-and-oblique-view.jpg`, alt: "Bulbous nasal tip before surgery" },
        after: { src: `${IMG}/07-clinical-oblique-view-showing-a.jpg`, alt: "Refined nasal tip after surgery", label: "After (6 Months)" },
        meta: ["Open Structural", "Tip Refinement"],
      },
      {
        caseId: "Case Study #1985",
        badge: "Lead Surgeon: Dr. Sukhbir Singh",
        title: "Revision Rhinoplasty with Rib Cartilage Grafting",
        text: "Complex Secondary Rhinoplasty. Autologous costal cartilage harvest reconstituted the collapsed bridge framework and established durable internal air conduction.",
        before: { src: `${IMG}/08-clinical-profile-view-of-a.jpg`, alt: "Collapsed saddle nose before revision" },
        after: { src: `${IMG}/09-clinical-profile-view-showing-full.jpg`, alt: "Reconstructed nasal bridge after revision", label: "After (14 Months)" },
        meta: ["Secondary Rhinoplasty", "Rib Cartilage"],
      },
    ],
  },
  faq: {
    eyebrow: "Patient Inquiries",
    title: "Frequently Asked Questions",
    intro: "Essential surgical guidance direct from our clinical team at Greater Kailash Part 1.",
    items: [
      {
        question: "Is rhinoplasty painful, and what type of anesthesia is utilized?",
        answer:
          "Most patients describe the sensation as mild sinus congestion or facial pressure rather than acute pain. Resplendent utilizes Total Intravenous Anesthesia (TIVA) or targeted twilight sedation administered by board-certified anesthetists, guaranteeing zero operative awareness and minimal nausea upon awakening.",
      },
      {
        question: "What is the difference between open and closed (endonasal) rhinoplasty?",
        answer:
          "In closed rhinoplasty, all incisions remain inside the nostrils, leaving zero visible skin scar. In open rhinoplasty, a tiny stair-step micro-incision is placed across the columella (the skin between nostrils), which heals to an undetectable line within months. The open technique affords comprehensive visualization for complex tip sculpting, structural grafts, and revision surgery.",
      },
      {
        question: "What is the recovery timeline for swelling and bruising to subside?",
        answer:
          "Due to our ultrasonic piezotome technology, standard black-eye bruising is largely mitigated or clears within 7–10 days. The external splint is removed on Day 7, at which point 75–80% of major swelling has resolved. Refined tip definition continues to mature over 6 to 12 months.",
      },
      {
        question: "Will rhinoplasty improve my breathing as well as my appearance?",
        answer:
          "Yes. Every surgical plan incorporates internal functional assessment. If you have a deviated septum, enlarged turbinates, or collapsed nasal valves, Dr. Sukhbir Singh performs simultaneous structural corrections. Many patients find their post-procedure airflow substantially improved.",
      },
      {
        question: "Can a previously unsatisfactory nose surgery be corrected (Revision Rhinoplasty)?",
        answer:
          "Absolutely. Resplendent is a referral hub in Delhi NCR for complex revision rhinoplasty. Dr. Singh reconstructs depleted structural foundations using ear cartilage or autologous rib cartilage to restore symmetry, bridge height, tip projection, and unencumbered nasal respiration.",
      },
    ],
  },
  cta: {
    eyebrow: "Direct Plastic Surgery Suite",
    title: "Envision Your Refined Profile, Sculpted with Integrity",
    text: "Schedule an in-depth 3D morphing consultation with Dr. Sukhbir Singh at R-9, Basement, Greater Kailash Part 1, New Delhi.",
    primaryCta: bookConsultationCta("Book Rhinoplasty Consultation"),
    meta: [
      { icon: "lock", label: "100% Confidential Clinical Evaluation" },
      { icon: "flight", label: "International Patient Protocol Supported" },
    ],
  },
};

export const rhinoplastyAirway: CalloutData = {
  icon: "air",
  eyebrow: "Integrative Breathing Health",
  title: "Why Breathing Function Is Never Compromised for Aesthetics",
  text: "A beautiful nose is worthless if it impedes respiration. Our board-certified surgeons view the nose as a unified biomechanical airway. Whenever structural changes are made to the nasal vault, simultaneous septoplasty, radiofrequency turbinoplasty, and spreader graft internal valve stabilization are deployed.",
  highlights: [
    { icon: "nights_stay", title: "Turbinate Reduction", text: "Eliminates chronic nocturnal congestion" },
    { icon: "open_in_full", title: "Internal Valve Spreaders", text: "Prevents inspiratory lateral wall collapse" },
    { icon: "align_horizontal_center", title: "Septal Repositioning", text: "Equalizes bilateral airflow vectors" },
  ],
};
