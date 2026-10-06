import type { CalloutData, CardGridData, ConsultationFormData, TreatmentPageData } from "./types";

const IMG = "/images/pages/hydrafacial";

export const hydrafacial: TreatmentPageData = {
  slug: "hydrafacial",
  metaTitle: "Medical HydraFacial — Deep Hydration & Radiance | Resplendent Aesthetics",
  metaDescription:
    "Dermatologist-supervised medical HydraFacial with vortex extraction, peptide infusion and LED therapy, zero downtime, in Greater Kailash, New Delhi.",
  hero: {
    breadcrumb: "HydraFacial & Medical Infusion",
    status: "GK-1 Aesthetic Suite Active",
    eyebrow: "Clinical Dermatology & Medical Hydro-Infusion",
    title: "HydraFacial — ",
    highlight: "Deep Cellular Hydration",
    titleSuffix: " & Radiance",
    lead: "Medical-grade 4-in-1 vortex technology delivering deep pore extraction, lactic acid resurfacing, peptide bio-infusion, and antioxidant saturation with zero social downtime.",
    pills: [
      { icon: "timer", label: "45-Minute Session" },
      { icon: "bolt", label: "Zero Downtime" },
      { icon: "workspace_premium", label: "US-FDA Patented Vortex-Fusion" },
      { icon: "auto_awesome", label: "Instant Glass-Skin Glow" },
    ],
    primaryCta: { label: "Book HydraFacial Session", href: "#booking-form", icon: "arrow_forward" },
    secondaryCta: { label: "Explore Medical Infusions", href: "#cellular-boosters", icon: "biotech" },
    surgeon: {
      name: "Dr. Ananya Roy",
      role: "Dermatology Lead",
      credentials: "MBBS, MD Dermatology, DNB • Fellowship Aesthetic Lasers (Milan)",
      badges: ["Protocol Oversight & Tailored Serum Calibration"],
    },
    image: {
      src: `${IMG}/01-close-up-photograph-of-a.jpg`,
      alt: "Dermatologist performing a HydraFacial treatment",
      captionTitle: "Triple-Action Cellular Extraction",
      captionText: "Patented Vortex-Fusion®",
      inset: {
        src: `${IMG}/02-monochrome-close-up-detail-of.jpg`,
        alt: "Spiral tip of the HydraFacial wand on skin",
        title: "Vortex Spiral Tip",
        text: "Micro-bubble hydro-infusion with vacuum exfoliation.",
      },
    },
  },
  overview: {
    eyebrow: "Clinical Authority & Pharmacology",
    title: "The Medical Difference: Clinical Infusion vs. Salon Facial",
    intro:
      "Resplendent replaces manual abrasive scrubbing with hydrodynamic cellular vortex pressure, delivering non-irritating clinical serums straight into the dermis.",
    media: {
      src: `${IMG}/02-monochrome-close-up-detail-of.jpg`,
      alt: "Close-up of the HydraFacial treatment tip",
      tag: "Medical Cocktails",
      title: "Targeted Vortex Infusion Bio-Actives",
      text: "Every treatment tip dispenses physician-grade actives with spiral flow dynamics, penetrating deep into unclogged follicular channels.",
      checklist: [
        "Glucosamine HCl & Lactic Acid — softens sebum bonds and dead cell buildup.",
        "Salicylic Acid & Honey Extract — neutralizes acne bacteria without squeezing.",
        "Cross-Linked Hyaluronic Acid — replenishes dermal water reservoirs.",
        "Oligopeptide-68 & Red Algae — strengthens the epidermal lipid barrier.",
      ],
    },
    options: [
      {
        title: "Resplendent Medical HydraFacial",
        subtitle: "Vortex Cellular Hydro-Infusion",
        icon: "check_circle",
        featured: true,
        bullets: [
          "Closed-circuit vortex vacuum smoothly dislodges plugs with zero mechanical pinching.",
          "Simultaneous hydro-peeling replenishes cells at the exact millisecond of pore evacuation.",
          "Targeted physician-calibrated growth factors, antioxidants, and peptide boosters.",
          "Concludes with medical LED photobiomodulation to calm vascular reactivity.",
        ],
      },
      {
        title: "Commercial Salon Facials",
        subtitle: "Manual & Superficial",
        icon: "cancel",
        muted: true,
        bullets: [
          "Manual blackhead squeezing creates micro-tears and broken facial capillaries.",
          "Granular physical scrubs abrade the stratum corneum, compromising lipid moisture.",
          "Generic cosmetic creams cannot cross epidermal barriers effectively.",
          "Frequent post-treatment flare-ups, erythema, and contamination risks.",
        ],
      },
    ],
  },
  process: {
    eyebrow: "The Sequential Protocol",
    title: "The 4-Stage Vortex Pathway",
    intro:
      "An uncompromising 45-minute clinical choreography designed to detoxify, exfoliate, extract, and deeply nourish dermal layers without recovery downtime.",
    steps: [
      {
        icon: "water_ec",
        title: "Cleanse & Gentle Peeling",
        text: "Uncovers a radiant new layer of skin with gentle fluid-assisted exfoliation and relaxing vortex resurfacing. Dissolves keratinized dead surface layers without irritation.",
        footLabel: "Key Serum",
        footValue: "Activ-4™ Bio-Lactic",
      },
      {
        icon: "filter_alt",
        title: "Painless Vacuum Extraction",
        text: "Patented spiral tip suction effortlessly removes sebum plugs, blackheads, and micro-debris directly from congested pores while infusing calming botanicals.",
        footLabel: "Key Serum",
        footValue: "Beta-HD™ Salicylic",
      },
      {
        icon: "opacity",
        title: "Deep Hydration & Infusion",
        text: "Saturates the newly cleared follicular canals with concentrated hyaluronic acid, multi-peptides, horse chestnut, and marine antioxidants to lock in moisture.",
        footLabel: "Key Serum",
        footValue: "Antiox+™ Dermal Nectar",
      },
      {
        icon: "wb_twilight",
        title: "LED Photomodulation & Seal",
        text: "Medical-grade Red LED therapy stimulates fibroblast collagen synthesis, while Blue LED neutralizes residual acne bacteria to seal luminous, glassy skin.",
        footLabel: "Therapy",
        footValue: "LightStim® Medical LED",
      },
    ],
  },
  feature: {
    eyebrow: "Clinical Grade Equipment",
    title: "Genuine US-FDA HydraFacial MD Elite Console",
    paragraphs: [
      "Every treatment is performed on a genuine HydraFacial MD Elite console with certified closed vacuum calibration, supervised by MD dermatologists in Greater Kailash 1.",
    ],
    checklist: ["Sterile Disposables Guaranteed", "Authentic Cartridge Verified", "Dermatologist-Calibrated Flow"],
    metrics: [
      { icon: "spa", value: "100%", label: "Painless Experience" },
      { icon: "event_available", value: "0 Days", label: "Social Downtime" },
      { icon: "timer", value: "45 Mins", label: "Per Treatment Session" },
      { icon: "auto_awesome", value: "99.8%", label: "Immediate Glow Satisfaction" },
    ],
  },
  cases: {
    id: "case-dossiers",
    eyebrow: "Visible Clinical Results",
    title: "Verified Dermal Transformations",
    intro: "High-resolution photographic documentation captured in polarized clinical cross-lighting at our Greater Kailash clinic.",
    note: "Unretouched Clinical Archives",
    columns: 4,
    cases: [
      {
        caseId: "Case #1024",
        badge: "Immediate Post-Tx",
        title: "Enlarged Follicular Pores",
        text: "Complete evacuation of sebum casts without manual bruising or redness.",
        image: { src: `${IMG}/03-high-resolution-dermatological-clinical-split.jpg`, alt: "T-zone pores before and after HydraFacial" },
        meta: ["Congested T-Zone", "Salicylic + Honey"],
      },
      {
        caseId: "Case #1089",
        badge: "Single Session",
        title: "Dull Skin to Dewy Radiance",
        text: "Dermal moisture reservoir replenished, yielding instant soft-focus glass glow.",
        image: { src: `${IMG}/04-before-and-after-aesthetic-photography.jpg`, alt: "Dull skin transformed into dewy skin" },
        meta: ["Cellular Dehydration", "Antiox+ & HA"],
      },
      {
        caseId: "Case #1142",
        badge: "Series of 3 Sessions",
        title: "Blemish Clarification",
        text: "Gentle salicylic vortex clearing paired with Blue light photobiomodulation.",
        image: { src: `${IMG}/05-dermatology-case-photo-comparison-of.jpg`, alt: "Post-acne erythema calmed after treatment" },
        meta: ["Post-Acne Erythema", "Beta-HD + Blue LED"],
      },
      {
        caseId: "Case #1201",
        badge: "Day of Event",
        title: "Red Carpet Glass Glow",
        text: "Immediate surface plumping enabling flawless, seamless makeup application.",
        image: { src: `${IMG}/06-glamorous-close-up-side-angle.jpg`, alt: "Refined skin surface on the day of an event" },
        meta: ["Pre-Event Preparation", "DermaBuilder™ Peptides"],
      },
    ],
  },
  faq: {
    eyebrow: "Direct Physician Insights",
    title: "Frequently Asked Clinical Inquiries",
    intro: "Clear answers regarding session frequency, indications, and immediate outcomes.",
    items: [
      {
        question: "Is there any peeling, redness, or downtime after a HydraFacial?",
        answer:
          "No downtime or visible flaking occurs. Unlike chemical peels or invasive lasers, HydraFacial uses gentle fluid hydro-abrasion and micro-infusion. Most patients step directly from our clinical suite to gatherings or meetings with an immediate, radiant glow.",
      },
      {
        question: "How often should I schedule a medical HydraFacial for optimal results?",
        answer:
          "For cellular maintenance, skin barrier strengthening, and pore decongestion, we recommend one session every 4 weeks. For hyperpigmentation or active acne, an initial series of 3 to 4 sessions spaced 2 weeks apart yields optimal regenerative outcomes.",
      },
      {
        question: "Can HydraFacial be done if I have active acne or sensitive rosacea skin?",
        answer:
          "Yes. Our dermatologists customize the protocol parameters. For active acne, we adjust suction levels, avoid aggressive friction over inflamed pustules, incorporate Beta-HD salicylic cocktails, and conclude with anti-microbial Blue LED phototherapy to calm inflammation safely.",
      },
      {
        question: "How does HydraFacial differ from traditional microdermabrasion?",
        answer:
          "Traditional microdermabrasion relies on dry diamond tips or crystal particles that mechanically scratch the surface, often triggering redness or broken capillaries. HydraFacial utilizes vortex-liquid dynamics: dead skin is liquefied and suctioned while simultaneously bathing the dermis in hydrating active cocktails.",
      },
      {
        question: "Can I wear makeup or go to an event immediately after the treatment?",
        answer:
          "You can wear makeup right after, although most patients skip foundation because the skin displays such natural clarity. For pre-bridal or red carpet events, scheduling the treatment on the day of the event or 24 hours prior produces an ultra-smooth canvas.",
      },
    ],
  },
  cta: {
    eyebrow: "The Pinnacle of Medical Aesthetics",
    title: "Experience Instant Medical-Grade Glow & Vitality",
    text: "Consult with our board-certified dermatologists at R-9, Greater Kailash Part 1, South Delhi. Same-day appointments available for pre-event infusions.",
    primaryCta: { label: "Book Now", href: "#booking-form" },
  },
};

export const hydrafacialBoosters: CardGridData = {
  id: "cellular-boosters",
  eyebrow: "Cellular Biomarker Infusions & Targeted Boosters",
  title: "Bespoke Medical Cocktail Enhancements",
  intro:
    "Dermatologist evaluations allow personalized booster cocktails to target hyperpigmentation, photo-aging, or deep cellular degradation. Every tip and booster vial is unsealed in the presence of the patient.",
  columns: 3,
  cards: [
    {
      icon: "flare",
      eyebrow: "Hyperpigmentation & Sun Damage",
      title: "Britenol® Clarity Booster",
      text: "Formulated with Alpha-Arbutin and stabilized Vitamin C to diminish melasma patches, brown spots, and uneven sun exposure marks.",
      footLabel: "Key Bioactive",
      footValue: "Alpha-Arbutin + Bearberry",
    },
    {
      icon: "grain",
      eyebrow: "Fine Lines & Elasticity",
      title: "DermaBuilder™ Peptides",
      text: "An advanced multi-peptide complex (Acetyl Octapeptide-3 and Palmitoyl Dipeptides) that relaxes micro-muscle tension and recharges collagen architecture.",
      footLabel: "Key Bioactive",
      footValue: "Dual Collagen Peptides",
    },
    {
      icon: "biotech",
      eyebrow: "Cellular Regeneration",
      title: "ReGen GF™ Growth Factors",
      text: "Bio-engineered biomimetic peptides and growth factors accelerate dermal matrix restoration, cellular turnover, and post-laser recovery.",
      footLabel: "Key Bioactive",
      footValue: "M3 Biomimetic Complex",
    },
  ],
};

export const hydrafacialCharter: CalloutData = {
  icon: "verified_user",
  eyebrow: "Resplendent Safety & Authenticity Charter",
  title: "100% Genuine US-FDA Patented Cartridges",
  text: "Counterfeit hydro-dermabrasion cartridges in standard salons can cause skin abrasions, uneven suction, and non-sterile fluid reflux. At Resplendent, every treatment tip is single-use, serialized, and discarded immediately after your session.",
  tags: ["Serialized Packaging", "Closed-Circuit Tubing", "Dermatologist-Calibrated Flow"],
  aside: {
    icon: "task_alt",
    title: "Certified Studio",
    text: "Registered Medical Aesthetic Facility • Greater Kailash 1, New Delhi",
  },
};

export const hydrafacialForm: ConsultationFormData = {
  id: "booking-form",
  eyebrow: "Private Suite Reservation",
  title: "Schedule Your Clinical HydraFacial Assessment",
  intro:
    "Step into our discreet, medical-grade studio in South Delhi. Consult directly with our dermatology team to customize your serum boosters and vortex intensity.",
  contacts: [
    { icon: "pin_drop", title: "Resplendent Aesthetics", text: "R-9, Basement, Greater Kailash Part 1, New Delhi - 110048" },
    { icon: "phone_in_talk", title: "+91 99103 91229", text: "Direct Aesthetic Coordinator Desk" },
    { icon: "event_available", title: "Monday – Saturday", text: "09:00 AM – 07:00 PM (By Clinical Appointment)" },
  ],
  interestLabel: "Primary Skin Goal",
  interests: [
    "Instant Red Carpet Hydration & Glass Glow",
    "Deep Pore Clearing & Blackhead Extraction",
    "Melasma & Pigmentation Reduction (Britenol®)",
    "Fine Line & Peptide Firming (DermaBuilder™)",
    "Active Acne & Blue LED Bacterial Shield",
  ],
  withDate: true,
  submitLabel: "Confirm HydraFacial Appointment Request",
  successMessage:
    "Thank you. Your HydraFacial appointment request has been sent to our GK-1 clinical desk. Our coordinator will contact you shortly on WhatsApp/Phone.",
};
