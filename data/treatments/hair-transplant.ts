import type { CalloutData, TreatmentPageData } from "./types";
import { bookConsultationCta, clinicMeta } from "./shared";

const IMG = "/images/pages/hair-transplant";

export const hairTransplant: TreatmentPageData = {
  slug: "hair-transplant",
  metaTitle: "Hair Transplant — FUE & DHI | Resplendent Aesthetics",
  metaDescription:
    "Surgeon-performed Sapphire FUE and DHI hair restoration with natural hairline design in Greater Kailash, New Delhi.",
  hero: {
    breadcrumb: "Hair Transplant",
    eyebrow: "Surgical Hair Restoration & Follicular Bio-Preservation",
    title: "Hair Transplant — ",
    highlight: "FUE & DHI",
    lead: "Permanent, undetectable follicular restoration engineered with millimeter micro-precision by international plastic surgery fellows at our clinical sanctuary in Greater Kailash 1, New Delhi.",
    pills: [
      { icon: "adjust", label: "0.7mm Micro-Punches" },
      { icon: "verified", label: "Zero Linear Scarring" },
      { icon: "vital_signs", label: "98.4% Follicle Survival" },
      { icon: "ac_unit", label: "Chilled Peptide Bio-Bath" },
    ],
    primaryCta: bookConsultationCta("Book Hair Assessment"),
    secondaryCta: { label: "Explore Before & After Cases", href: "#clinical-cases" },
    card: {
      eyebrow: "Accreditation",
      title: "Dr. Sukhbir Singh",
      icon: "award_star",
      checklist: [
        "Direct Surgeon Slit Creation & Graft Harvest",
        "Sapphire Micro-Blade Angulation (30°–45°)",
        "Autologous Platelet Bio-Infusion Included",
        "Full Density Retention Guarantee Protocol",
      ],
      footLabel: "Consultation Sanctuary",
      footValue: "Greater Kailash Part 1 — Delhi Flagship",
    },
  },
  overview: {
    eyebrow: "The Resplendent Approach",
    title: "Micro-Follicular Restoration: Beyond Generic Plugs",
    paragraphs: [
      "Unlike commercial assembly-line transplant clinics, Resplendent treats follicular relocation as a bespoke architectural sculpture. True undetectability relies on three clinical variables: exact depth penetration to protect the dermal vascular plexus, 30° to 45° angular placement replicating native crown whirls, and atraumatic graft preservation in peptide-enriched bio-fluids.",
      "Whether utilizing Sapphire-tip FUE for maximal graft volumes or DHI Choi implanters for delicate hairline transitions, each single-hair graft is placed at the front edge with paired multi-hair units nestled directly behind to generate natural visual density.",
    ],
    media: {
      src: `${IMG}/01-close-up-view-of-plastic.jpg`,
      alt: "Surgeon marking a custom hairline design on a patient's scalp",
      tag: "Pre-Operative Planning",
      title: "Golden-Ratio Hairline Mapping",
      text: "Sub-millimeter anatomical marking calibrated with golden-ratio facial planes. Every follicular canal is mapped to respect natural hair grouping, angle of emergence, and temporal flow.",
    },
    options: [
      {
        title: "Sapphire FUE",
        tag: "High Density",
        featured: true,
        text: "Custom V-shaped sapphire gemstone incisions allowing closer graft proximity up to 60+ units/cm² with rapid scabbing clearance.",
        bullets: ["Best for Norwood 3 to 6 broad restoration"],
      },
      {
        title: "Direct Hair Implantation (DHI)",
        tag: "No Channel Pre-Slit",
        text: "Implantation via Choi hollow needles where incision and graft placement happen concurrently, offering 100% angle lock.",
        bullets: ["Ideal for crown refinement & no-shave cases"],
      },
    ],
  },
  process: {
    eyebrow: "Surgical Pathway",
    title: "The 4-Stage Follicular Architecture",
    intro: "Our meticulous operative sequence performed under twilight local anesthesia inside laminar flow surgical suites.",
    steps: [
      {
        icon: "biotech",
        title: "Trichoscopic Mapping",
        text: "Polarized digital trichoscopy analyzes scalp vascularity, donor zone follicle viability, and miniaturization ratios to calibrate exact safe extraction limits.",
        footLabel: "Phase Target",
        footValue: "Donor preservation index > 92%",
      },
      {
        icon: "architecture",
        title: "Hairline Architecture",
        text: "Dr. Sukhbir Singh hand-draws custom micro-irregular transitions using the golden ratio, preventing flat artificial margins while fortifying temporal points.",
        footLabel: "Phase Target",
        footValue: "Bespoke age-appropriate contours",
      },
      {
        icon: "science",
        title: "Atraumatic Extraction",
        text: "0.70mm to 0.75mm trumpet-tipped micro punches isolate whole follicular units without transection, immediately transferred into a chilled bio-peptide bath.",
        footLabel: "Phase Target",
        footValue: "Transection rate < 2.1%",
      },
      {
        icon: "filter_vintage",
        title: "Bio-Implantation",
        text: "Grafts are inserted with millimeter alignment into recipient sites at strictly dictated 35° natural exit vectors, backed by immediate autologous plasma stimulation.",
        footLabel: "Phase Target",
        footValue: "55-65 follicular units per cm²",
      },
    ],
  },
  feature: {
    eyebrow: "Algorithmic Biometry",
    title: "Predictive AI Hairline Mapping & Digital Symmetry Analysis",
    paragraphs: [
      "Prior to any mechanical intervention, our 3D optical stereolithography suite captures facial contour dynamics, bone angle prominence, and facial mimicry muscles in high resolution. This ensures the reconstructed hairline does not look artificial at age 35, 45, or 65.",
    ],
    metrics: [
      { value: "65+ FU/cm²", label: "Frontal Core Density", text: "Eliminates see-through gaps under overhead downlighting." },
      { value: "0.65 mm", label: "Micro-Incision Width", text: "Prevents scalp dimpling or cobblestoning during long-term healing." },
    ],
    note: "Calibrated strictly to ISHRS (International Society of Hair Restoration Surgery) protocols.",
    cta: bookConsultationCta("Request 3D AI Hair Simulation"),
  },
  cases: {
    id: "clinical-cases",
    eyebrow: "Verified Patient Evidence",
    title: "Documented Clinical Transformations",
    intro:
      "Photographed under clinical-standard non-polarized medical studio illumination. No digital smoothing, volumizing concealers, or fibers applied.",
    note: "Lead Surgeon Dr. S. Singh",
    columns: 2,
    cases: [
      {
        caseId: "Case Study #4092",
        badge: "FUE Sapphire",
        title: "Norwood IV Frontal & Temporal Restoration",
        text: "Complete macro-hairline rebuild utilizing single-follicle feathering in frontal boundary, followed by 3-hair follicular units for profound mid-scalp density.",
        before: { src: `${IMG}/02-medical-clinical-before-photo-of.jpg`, alt: "Norwood IV hair loss before transplant" },
        after: { src: `${IMG}/03-medical-clinical-after-photo-of.jpg`, alt: "Restored hairline 10 months after transplant", label: "10 Months Post-Op" },
        meta: ["3,400 Follicular Units", "Lead Surgeon Dr. S. Singh"],
      },
      {
        caseId: "Case Study #3884",
        badge: "DHI + Exosomes",
        title: "Crown & Vertex Whirl Density Reconstruction",
        text: "Precision radial angulation to preserve natural vertex whirlpool dynamics. Accelerated with autologous biological exosome protocols.",
        before: { src: `${IMG}/04-before-clinical-view-of-male.jpg`, alt: "Crown bald spot before DHI" },
        after: { src: `${IMG}/05-after-clinical-view-of-restored.jpg`, alt: "Restored crown 8 months after DHI", label: "8 Months Post-Op" },
        meta: ["2,800 Follicular Units", "Lead Surgeon Dr. S. Singh"],
      },
      {
        caseId: "Case Study #5118",
        badge: "Corrective Revision",
        title: "Reconstructive Hairline Correction",
        text: "Extraction of misplaced multi-hair plugs from a prior external procedure, followed by delicate re-angulated sapphire re-implantation.",
        before: { src: `${IMG}/06-before-clinical-photograph-of-unnatural.jpg`, alt: "Pluggy hairline from a previous transplant" },
        after: { src: `${IMG}/07-after-corrective-surgery-photo-showing.jpg`, alt: "Feathered hairline 12 months after revision", label: "12 Months Post-Op" },
        meta: ["2,200 Grafts + Plug Removal", "Reconstructive Case"],
      },
      {
        caseId: "Case Study #4802",
        badge: "Beard & Sideburn",
        title: "Beard & Sideburn Architectural Contouring",
        text: "Direct Choi Implanter transfer using single-hair grafts implanted flush at a 15° acute angle to achieve natural lie against facial contours.",
        before: { src: `${IMG}/08-before-clinical-profile-photo-of.jpg`, alt: "Patchy beard before transplant" },
        after: { src: `${IMG}/09-after-clinical-profile-photo-of.jpg`, alt: "Dense beard 9 months after transplant", label: "9 Months Post-Op" },
        meta: ["1,500 Grafts DHI", "Facial Plastic Fellowship"],
      },
    ],
  },
  faq: {
    eyebrow: "Informed Surgery",
    title: "Frequently Asked Questions",
    intro: "Clear, honest clinical answers regarding procedure comfort, timelines, surgeon involvement, and investments.",
    items: [
      {
        question: "Is hair transplant surgery painful, and what anesthesia is used?",
        answer:
          "Hair restoration at Resplendent is performed under a gentle twilight local anesthesia technique utilizing ultra-fine micro-needles and pre-numbing vibrational analgesia. Once numbness is established within 3-4 minutes, the scalp remains completely sensation-free throughout the procedure. Patients routinely watch movies, read, or rest comfortably throughout the day.",
      },
      {
        question: "How much downtime is required before resuming work or workouts?",
        answer:
          "Desk work and work-from-home responsibilities can resume within 48 to 72 hours. Small donor scabs shed naturally within 7 days. We recommend avoiding heavy weightlifting, swimming, and vigorous cardio for 14 days to prevent graft dislodgement or elevated scalp arterial pressure.",
      },
      {
        question: "When will I see full, permanent growth results?",
        answer:
          "Transplanted follicles shed their hair shaft between weeks 2 and 6. New growth commences from month 3 onwards. By month 6, noticeable coverage is evident. Full textural maturity, maximum density, and natural integration peak between 10 and 14 months post-procedure.",
      },
      {
        question: "How is the procedural cost calculated at Resplendent?",
        answer:
          "We follow a strictly transparent, all-inclusive per-graft pricing structure determined during your pre-operative trichoscopy. There are zero surprise charges for operation theatre sterilization, disposable micro-sapphire blades, specialized implanter cartridges, or your post-op exosome-enhanced PRP session.",
      },
      {
        question: "Who performs the graft extraction and slit creation?",
        answer:
          "Critical surgical phases—including micro-slit creation, hairline geometry mapping, and donor graft harvesting—are performed directly by Lead Consultant Plastic Surgeon Dr. Sukhbir Singh alongside board-certified medical fellows. Uncertified clinical technicians never create surgical incisions on your scalp.",
      },
    ],
  },
  cta: {
    eyebrow: "Confidential Surgical Concierge",
    title: "Restore Your Hairline, Reclaim Your Confidence",
    text: "Schedule a private, in-depth digital trichoscopy consultation with Dr. Sukhbir Singh at R-9, Basement, Greater Kailash Part 1, New Delhi.",
    primaryCta: bookConsultationCta("Book Hair Consultation"),
    meta: clinicMeta.slice(0, 1),
  },
};

export const hairExosomeProtocol: CalloutData = {
  icon: "vital_signs",
  eyebrow: "Cellular Longevity Enhancement",
  title: "Exosome & Bio-Enhanced PRP Acceleration Protocol",
  text: "Every surgical restoration at Resplendent includes our proprietary post-operative cellular infusion. By delivering concentrated autologous growth factors and laboratory-grade mesenchymal exosomes directly to the freshly grafted bed, we dramatically compress inflammatory downtime and awaken dormant telogen roots weeks earlier than conventional methods.",
  highlights: [
    { icon: "speed", title: "40% Faster", text: "Crust fallout achieved typically between days 5 to 7." },
    { icon: "verified", title: "98.4% Retention", text: "Near-zero shock loss through microvascular preservation." },
    { icon: "flare", title: "Diameter Boost", text: "Thicker shaft caliber in adjacent native hair zones." },
  ],
  aside: {
    icon: "science",
    title: "Biological Safety Standard",
    subtitle: "Zero External Additives",
    text: "Processed in our certified Greater Kailash in-house biotherapy laboratory following strict aseptic protocols.",
  },
};
