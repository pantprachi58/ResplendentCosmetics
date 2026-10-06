import type { CalloutData, TreatmentPageData } from "./types";
import { bookConsultationCta, clinicMeta } from "./shared";

const IMG = "/images/pages/face-neck-lift";

export const faceNeckLift: TreatmentPageData = {
  slug: "face-neck-lift",
  metaTitle: "Deep Plane Face & Neck Lift | Resplendent Aesthetics",
  metaDescription:
    "Deep plane SMAS facelift and platysmaplasty neck lift for natural, tension-free rejuvenation by Dr. Sukhbir Singh in Greater Kailash, New Delhi.",
  hero: {
    breadcrumb: "Face & Neck Lift",
    status: "Class-100 Laminar Flow OTs • Greater Kailash 1",
    eyebrow: "Deep-Plane SMAS & Submental Architecture",
    title: "Face & Neck Lift — ",
    highlight: "Natural Architectural Rejuvenation",
    lead: "Restoring defined jawlines, cervical contouring, and midface elevation through discreet sub-SMAS vector repositioning—without tension or artificial tightness.",
    stats: [
      { value: "Sub-SMAS Release", label: "Anatomy" },
      { value: "Platysma Hammock", label: "Neckline" },
      { value: "Retro-Tragal", label: "Incision Cloaking" },
      { value: "Zero Windblown", label: "Outcome" },
    ],
    primaryCta: bookConsultationCta("Book Surgical Assessment"),
    secondaryCta: { label: "Explore Before & After Dossiers", href: "#case-dossiers", iconLeading: "verified" },
    surgeon: {
      name: "Dr. Sukhbir Singh",
      role: "Senior Consultant Plastic Surgeon",
      initials: "DS",
      credentials: "MBBS, MS, MCh Plastic Surgery • Fellow PUCRS Brazil",
    },
    image: {
      src: `${IMG}/01-cervical-and-jawline-architectural-contour.jpg`,
      alt: "Cervical and jawline architectural contour profile",
      tag: "Deep Plane SMAS",
      captionTitle: "Tension-Free Structural Repositioning",
      captionText: "Cervical Arc: 105° Perfect Mandibular Angle",
    },
  },
  overview: {
    eyebrow: "Anatomical Precision",
    title: "Deep Plane SMAS Facelift vs. Submentoplasty (Neck Lift)",
    paragraphs: [
      "Conventional superficial facelifts stretch the cutaneous skin layer alone, often leading to rapid relapse within 24 to 36 months, widened scars, and the dreaded flattened \"pulled\" look. Our Deep Plane SMAS & Submentoplasty technique accesses the anatomical foundational scaffolding beneath the facial nerves and muscle sheets.",
      "Led personally by Dr. Sukhbir Singh in Greater Kailash, the procedure methodically releases the zygocutaneous, masseteric, and mandibular retaining ligaments. Once freed, the drooping buccal fat pad, jowls, and descended midface structures are repositioned along an oblique 60° vector to their anatomical position of 15 years prior.",
    ],
    media: {
      src: `${IMG}/02-graceful-cervical-and-midface-lift.jpg`,
      alt: "Graceful cervical and midface lift anatomy",
      tag: "SMAS Anatomy & Cervical Vectors",
      title: "True Composite Harmony",
      text: "By entering the deep surgical plane underneath the SMAS, natural midface ligaments are freed and elevated tension-free. Skin redrapes effortlessly over repositioned cheek fat pads and strengthened neck musculature—no tight skin-pull, no \"pixie-ear\" deformity.",
    },
    options: [
      {
        title: "Deep Plane Facelift & Neck Lift",
        icon: "check_circle",
        featured: true,
        bullets: [
          "Full ligamentous release & repositioning",
          "Surgically trims excess redundant skin",
          "Creates midline platysmal muscle hammock",
          "Lasts 10–15+ years of verified structural youth",
        ],
      },
      {
        title: "Non-Surgical Threads / RF Tightening",
        icon: "info",
        muted: true,
        bullets: [
          "Temporary soft-tissue micro-compression",
          "No removal of excess loose skin envelope",
          "Platysmal muscle bands remain unaddressed",
          "Downtime low, but results fade in 9–18 months",
        ],
      },
    ],
  },
  process: {
    eyebrow: "Surgical Protocol",
    title: "The 4-Stage Rejuvenation Pathway",
    intro:
      "From high-resolution anatomical vector planning to hyperbaric lymphatic recovery, each surgical milestone guarantees patient comfort, discretion, and perfection.",
    steps: [
      {
        icon: "view_in_ar",
        title: "Vector Analysis & Digital Mapping",
        text: "Volumetric 3D assessment of jowl descent, midface deflation, platysmal muscle diastasis, and skin elasticity to calibrate patient-specific lifting angles.",
        footLabel: "Milestone Target",
        footValue: "Bespoke 3D Vector Geometry",
      },
      {
        icon: "medical_services",
        title: "Twilight Anesthesia & Infiltration",
        text: "Targeted tumescent infiltration infused with tranexamic acid to virtually eliminate intraoperative bleeding, accompanied by certified twilight sedation.",
        footLabel: "Milestone Target",
        footValue: "Zero Bruising Infiltration",
      },
      {
        icon: "handshake",
        title: "Deep-Plane SMAS & Platysmaplasty",
        text: "Dr. Sukhbir Singh performs composite anatomical release of retaining ligaments, securing a continuous muscular suspension sling across the neck and jawline.",
        footLabel: "Milestone Target",
        footValue: "Natural Structural Fixation",
      },
      {
        icon: "healing",
        title: "Rapid-Rx Recovery & Lymphatics",
        text: "Multi-layer micro-suturing with hair-bearing preservation, gentle ergonomic chin support, hyperbaric oxygen therapy sessions, and private concierge aftercare.",
        footLabel: "Milestone Target",
        footValue: "Accelerated 7–10 Day Social Return",
      },
    ],
  },
  feature: {
    eyebrow: "Sub-Cutaneous Telemetry",
    title: "Vector-Specific SMAS Elevation & Concealed Incision Artistry",
    paragraphs: [
      "Invisible retro-tragal incisions preserved within natural anatomical contours to ensure zero detectable surgical footprint.",
      "Our Greater Kailash theater integrates calibrated harmonic scalpel dissection, ensuring coagulative sealing of micro-capillaries at the point of release. By securing tension solely at the level of the deep fascial SMAS structures, external skin margins are closed under complete zero-tension, eliminating distorted ear lobules or widened retro-auricular track marks.",
    ],
    cta: bookConsultationCta("Request 3D Facial Vector Assessment"),
    metrics: [
      { icon: "north_east", value: "45°– 60°", label: "3D Vector Suspension Angle", text: "True vertical anti-gravity vector countering descending midface and jowl tissues." },
      { icon: "tune", value: "100%", label: "Platysma Hammock Suspension", text: "Submental midline muscle plication eliminating turkey neck bands." },
      { icon: "precision_manufacturing", value: "0.2 mm", label: "Micro-Suture Precision", text: "Discreet retro-tragal alignment hiding every incisional landmark." },
      { icon: "recommend", value: "99.1%", label: "Patient Satisfaction Score", text: "Verified natural rejuvenation across international and domestic cohorts." },
    ],
  },
  cases: {
    id: "case-dossiers",
    eyebrow: "Documented Clinical Audits",
    title: "Verified Architectural Case Studies",
    intro:
      "All surgical outcomes captured under standardized medical studio illumination without cosmetic filters or digital alteration.",
    note: "Audited by Dr. Sukhbir Singh",
    columns: 4,
    cases: [
      {
        caseId: "Case #3821",
        badge: "1 Year Post-Op",
        title: "Deep Plane SMAS & Neck Lift",
        text: "Indication: Severe lower-third jowling & cervical skin laxity. Addressed through sub-SMAS vertical elevation.",
        image: { src: `${IMG}/03-clinical-case-dossier-of-deep.jpg`, alt: "Deep plane face and neck lift result" },
        meta: ["Anesthesia", "Tumescent Twilight"],
      },
      {
        caseId: "Case #4109",
        badge: "9 Mos Post-Op",
        title: "Submental Platysmaplasty",
        text: "Indication: Heavy submental adiposity & midline platysmal separation. Corset muscle approximation performed.",
        image: { src: `${IMG}/04-submental-platysmaplasty-jawline-transformation-result.jpg`, alt: "Submental platysmaplasty jawline result" },
        meta: ["Approach", "Concealed Submental"],
      },
      {
        caseId: "Case #2940",
        badge: "6 Mos Post-Op",
        title: "Midface & Temporal Lift",
        text: "Indication: Malar pad descent & periorbital hollows. Combined with autologous micro-fat transfer to cheek apex.",
        image: { src: `${IMG}/05-midface-suspension-and-autologous-micro.jpg`, alt: "Midface suspension with micro-fat grafting" },
        meta: ["Volume", "Autologous Fat 14cc"],
      },
      {
        caseId: "Case #5218",
        badge: "14 Mos Post-Op",
        title: "Male Jawline Contouring",
        text: "Indication: Obtuse cervicomental angle in 56yo male executive. Masculine sharp mandibular edge preserved.",
        image: { src: `${IMG}/06-male-extended-neck-lift-and.jpg`, alt: "Male extended neck lift result" },
        meta: ["Incision", "Beard-Line Preserved"],
      },
    ],
  },
  faq: {
    eyebrow: "Clinical Clarity",
    title: "Frequently Asked Surgical Questions",
    intro: "Clear, medically factual explanations addressing surgical anatomy, scars, recovery, and results.",
    items: [
      {
        question: "What is the difference between a traditional skin-pull facelift and a Deep Plane SMAS lift?",
        answer:
          'A traditional superficial facelift detaches and pulls only the skin envelope. Because facial skin is elastic, this tension causes rapid stretching, "windblown" distortion around the mouth, and widened scars. The Deep Plane SMAS Facelift goes beneath the muscle and ligament layer. By freeing deep retaining ligaments, the fallen facial fat pads and deep muscular framework are lifted vertically. The overlying skin is then redraped tension-free, creating a natural rejuvenation that preserves your facial character for over a decade.',
      },
      {
        question: "Where are the incisions placed and will scars be visible?",
        answer:
          "Dr. Sukhbir Singh utilizes ultra-fine retro-tragal and submental incisions. The incision tracks along the temporal hairline, wraps behind the tragus of the ear, curves beneath the earlobe, and finishes behind the ear. Because closure is performed with microscopic sutures under zero tension, these lines fade into near-invisibility within a few months and cannot be detected even when hair is tied back.",
      },
      {
        question: "What is the realistic downtime before I can return to public and social engagements?",
        answer:
          "Most patients are comfortable returning to desk work and low-key social settings within 10 to 14 days. Initial swelling and light bruising peak around day 3, diminishing sharply by day 7 when hairline sutures are removed. Major social galas, weddings, or on-camera appearances are ideally scheduled at 4 to 6 weeks.",
      },
      {
        question: "How many years does a deep plane face and neck lift typically last?",
        answer:
          "A comprehensive Deep Plane SMAS and platysmaplasty routinely yields results that endure for 10 to 15+ years. While natural aging continues, you will permanently age from a more youthful baseline—effectively winding back the anatomical clock by 10 to 12 years.",
      },
      {
        question: "What type of anesthesia is utilized during the procedure?",
        answer:
          "The procedure is typically conducted under Tumescent Local Anesthesia with intravenous Twilight Sedation, administered and monitored by a senior consultant anesthesiologist. This avoids the grogginess, nausea, and intubation discomfort associated with deep general anesthesia.",
      },
    ],
  },
  cta: {
    eyebrow: "R-9, Greater Kailash Part 1, South Delhi",
    title: "Rediscover Your Defined Profile with Surgical Mastery",
    text: "Schedule an in-depth private consultation with Dr. Sukhbir Singh at R-9, Greater Kailash Part 1, South Delhi. Discreet, bespoke, and transformative.",
    primaryCta: bookConsultationCta("Book Face & Neck Assessment"),
    meta: clinicMeta.slice(1),
  },
};

export const faceNeckGovernance: CalloutData = {
  icon: "verified_user",
  eyebrow: "Clinical Governance & Zero Delegation",
  title: "Surgeon-Led SMAS Dissection: Guaranteed Zero Delegation",
  text: "Every millimeter of your deep plane release, ligamentous elevation, and platysmal plication is personally performed from start to finish by Dr. Sukhbir Singh (MCh Plastic Surgery, Fellow PUCRS Brazil) and senior board-certified plastic surgical colleagues. We do not permit trainee or technician delegation during any critical anatomical phase.",
  highlights: [
    { icon: "air", title: "Class-100 Airflow", text: "Laminar HEPA flow suites guaranteeing sterile international safety standards." },
    { icon: "monitor_heart", title: "Dedicated Anesthesia", text: "Senior MD Anesthesiologist continuously monitoring vitals throughout twilight sleep." },
    { icon: "health_and_safety", title: "NABH Protocol", text: "Hospital-grade emergency resuscitation readiness with complete private suites." },
  ],
  aside: {
    icon: "workspace_premium",
    title: "Surgical Credentialing",
    subtitle: "South Delhi Surgical Desk",
    items: [
      "Member of International Society of Aesthetic Plastic Surgery (ISAPS)",
      "Fellowship in Advanced Facial Plastic Surgery, PUCRS Brazil",
      "Class-100 Modular Theatres in Greater Kailash Part 1",
      "Continuous 24/7 post-operative surgeon-on-call cell",
    ],
    cta: { label: "View Full Surgical Dossier", href: "/doctors" },
  },
};
