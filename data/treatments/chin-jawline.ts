import type { CardGridData, TreatmentPageData } from "./types";
import { bookConsultationCta, clinicMeta } from "./shared";

const IMG = "/images/pages/chin-jawline";

export const chinJawline: TreatmentPageData = {
  slug: "chin-jawline",
  metaTitle: "Chin & Jawline Contouring | Resplendent Aesthetics",
  metaDescription:
    "Chin augmentation, sliding genioplasty and jawline contouring with intra-oral incisions and 3D profile planning in Greater Kailash, New Delhi.",
  hero: {
    breadcrumb: "Chin & Jawline",
    status: "Surgical Facial Sculpting Suite",
    eyebrow: "Mandibular Architecture & Profile Harmony",
    title: "Chin & Jawline — ",
    highlight: "Structural Definition",
    titleSuffix: " & Contouring",
    lead: "Sculpting proportionate mandibular angles, mentocervical definition, and harmonious profile balance using custom biocompatible implants and ultrasonic bone contouring under elite craniofacial surgical protocols.",
    pills: [
      { icon: "view_in_ar", label: "3D Biometric CT Mapping" },
      { icon: "visibility_off", label: "Intra-Oral Stealth Incisions" },
      { icon: "check_circle", label: "Zero Visible Scars" },
      { icon: "vital_signs", label: "Custom Anatomical Silastic Implants" },
    ],
    primaryCta: bookConsultationCta("Book Jawline Assessment"),
    secondaryCta: { label: "Explore Profile Dossiers", href: "#clinical-dossiers", icon: "arrow_downward" },
    surgeon: {
      name: "Dr. Sukhbir Singh",
      role: "MS, MCh (Plastic Surgery) • ISAPS Fellow",
      image: `${IMG}/01-distinguished-plastic-surgeon-dr-sukhbir.jpg`,
      credentials: "Lead Craniofacial & Aesthetic Surgeon with 16+ Years Experience",
    },
    image: {
      src: `${IMG}/02-detailed-clinical-side-profile-showcasing.jpg`,
      alt: "Clinical side profile showcasing contoured jawline and balanced chin projection",
      tag: "Mental Nerve Sparing",
      captionTitle: "105° Ideal Cervicomental Contour",
      captionText: "Projection vector: +9.4 mm Pogonion",
    },
  },
  overview: {
    eyebrow: "Anatomical Demarcation",
    title: "Profile Harmony: Choosing the Right Intervention",
    intro:
      "True facial aesthetics rely on the relationship between nasal projection, lip posture, and the pogonion (chin forward point). Resplendent evaluates microgenia, retrognathia, and obtuse cervical angles to prescribe permanent bone-level corrections versus temporary injectable contouring.",
    media: {
      src: `${IMG}/02-detailed-clinical-side-profile-showcasing.jpg`,
      alt: "Surgical side-profile reference for cephalometric vectors",
      tag: "Cephalometric Profile Vectors",
      title: "Mentocervical Angle — 110° Standard",
      text: "Riedel projection plane balanced to a 0mm tangent between lips and pogonion, mapped before every surgical plan.",
    },
    options: [
      {
        title: "Surgical Mandibular Contouring & Implants",
        icon: "precision_manufacturing",
        subtitle: "Permanent Anatomical Bone Correction",
        tag: "Definitive",
        featured: true,
        text: "The gold-standard surgical approach utilizes high-density, anatomical medical-grade Silastic implants or a precise sliding genioplasty to physically advance or expand the symphyseal mandibular bone. This permanently corrects microgenia, retrognathia, and heavy submental skin sagging without altering bite alignment.",
        facts: [
          { label: "Longevity", value: "Permanent" },
          { label: "Incision Site", value: "Intra-Oral (Zero Scar)" },
          { label: "Anesthesia", value: "Day-care / Twilight" },
        ],
      },
      {
        title: "Non-Surgical High-G' Dermal Fillers",
        icon: "vaccines",
        subtitle: "Temporary Viscoelastic Micro-Sculpting",
        tag: "Temporary",
        muted: true,
        text: "High modulus hyaluronic acid gels (e.g., Juvéderm Volux) are placed deep along the periosteum to simulate bone projection and camouflage minor mandibular deficiencies. Excellent for patients seeking an immediate preview before committing to permanent surgery.",
        facts: [
          { label: "Longevity", value: "12–18 Months" },
          { label: "Downtime", value: "< 24 Hours" },
          { label: "Volume Limit", value: "Mild Deficits (1-3cc)" },
        ],
      },
    ],
  },
  process: {
    eyebrow: "Systematic Surgical Protocol",
    title: "The 4-Stage Mandibular Sculpting Pathway",
    intro:
      "From advanced volumetric CT modeling to discreet intra-oral stabilization, Dr. Sukhbir Singh's sequence guarantees sub-millimeter precision and rapid clinical recovery.",
    steps: [
      {
        icon: "view_in_ar",
        title: "3D Stereolithographic Profile Analysis",
        text: "High-resolution CBCT scans map mandibular bony morphology, density, and mental nerve foramina. Implant dimensions are mapped in virtual 3D space to balance horizontal projection, vertical height, and lateral jawline flare.",
        footValue: "Micro-CT Custom Sizing",
      },
      {
        icon: "healing",
        title: "Stealth Intra-Oral Access",
        text: "A meticulous 1.5 cm incision is placed inside the lower labial sulcus, behind the lower lip mucosa. No external skin incision is made, ensuring zero post-operative facial scarring.",
        footValue: "Zero Dermal Marks",
      },
      {
        icon: "hardware",
        title: "Sub-Periosteal Pocket & Fixation",
        text: "A precise sub-periosteal pocket is dissected strictly along the bone cortex, completely shielding mental sensory nerves. The implant is firmly secured with titanium micro-screws to eliminate rotation or migration.",
        footValue: "Titanium Micro-Fixation",
      },
      {
        icon: "timer",
        title: "Ergonomic Compression & Healing",
        text: "Multilayered dissolvable mucosal sutures seal the incision. A bespoke anatomic compression garment is applied for 72 hours, paired with antiseptic oral rinses and clear dietary protocols for a swift 7-day social return.",
        footValue: "7-Day Social Re-entry",
      },
    ],
  },
  feature: {
    eyebrow: "Precision Cephalometry",
    title: "3D Computer-Aided Cephalometrics & Facial Balance",
    paragraphs: [
      "Facial disharmony is rarely isolated to the chin alone. Our computerized profile simulator evaluates facial thirds, Frankfort horizontal alignment, and the relationship between the nasal tip and labiomental groove. Every surgical plan is simulated with mathematical rigor before entering the operating theater.",
    ],
    metrics: [
      { value: "8–12 mm", label: "Projection Range" },
      { value: "0.0 mm", label: "External Cut Marks" },
      { value: "100%", label: "Mental Nerve Safety" },
    ],
    note: "All surgical workflows at Resplendent strictly enforce intraoperative electrophysiological nerve monitoring during submental pocket dissection to preserve mental nerve sensory innervation.",
  },
  cases: {
    id: "clinical-dossiers",
    eyebrow: "Verified Clinical Registry",
    title: "Documented Profile Dossiers",
    note: "All cases operated personally by Dr. Sukhbir Singh",
    columns: 2,
    cases: [
      {
        caseId: "Case #4012 • Female, 32",
        title: "Microgenia Chin Augmentation with Anatomical Extended Implant",
        text: "Corrected significant skeletal retrognathia with a tailor-fitted silicone extended-wing anatomical implant (+9mm projection), establishing a crisp 108° cervicomental angle and full lip closure competence.",
        before: { src: `${IMG}/03-clinical-profile-view-before-microgenia.jpg`, alt: "Receding chin profile before surgery" },
        after: { src: `${IMG}/04-clinical-profile-view-1-year.jpg`, alt: "Balanced chin projection one year after implant", label: "1 Year Post-Op" },
        meta: ["Intra-Oral Access", "+9mm Projection"],
      },
      {
        caseId: "Case #3890 • Male, 29",
        title: "Male Mandibular Angle & Square Chin Definition",
        text: "A bespoke widening square chin implant combined with micro-liposuction of the subplatysmal fat pad produced a bold, athletic jawline contour with heightened lateral mandibular flare.",
        before: { src: `${IMG}/05-medical-profile-photography-of-29.jpg`, alt: "Blunt chin before jawline contouring" },
        after: { src: `${IMG}/06-medical-profile-photograph-8-months.jpg`, alt: "Sharp masculine jawline 8 months after contouring", label: "8 Months Post-Op" },
        meta: ["Combined Modality", "Square Chin Implant"],
      },
      {
        caseId: "Case #4711 • Female, 35",
        title: "Sliding Genioplasty for Severe Receding Chin",
        text: "Horizontal mandibular osteotomy sliding the patient's living chin bone 10mm forward and 2mm vertically, secured with rigid bicortical titanium step-plates. Natural bony healing with no prosthetic implant.",
        before: { src: `${IMG}/07-profile-photograph-of-35-year.jpg`, alt: "Retruded chin before sliding genioplasty" },
        after: { src: `${IMG}/08-profile-photograph-14-months-post.jpg`, alt: "Advanced chin 14 months after genioplasty", label: "14 Months Post-Op" },
        meta: ["Sliding Genioplasty", "10mm Advancement"],
      },
      {
        caseId: "Case #5320 • Female, 26",
        title: "Profile Balancing: Combined Rhinoplasty & Chin Implant",
        text: "Simultaneous structural preservation rhinoplasty and anatomically tailored chin enhancement, restoring holistic harmony across the upper, mid, and lower thirds of the facial architecture.",
        before: { src: `${IMG}/09-side-profile-pre-operative-view.jpg`, alt: "Dorsal hump and underprojected chin before surgery" },
        after: { src: `${IMG}/10-side-profile-post-operative-view.jpg`, alt: "Balanced profile after rhinoplasty and chin implant", label: "10 Months Post-Op" },
        meta: ["Profiloplasty", "Dual Procedure"],
      },
    ],
  },
  faq: {
    eyebrow: "Consultative Clarity",
    title: "Frequently Addressed Inquiries",
    items: [
      {
        question: "Will chin surgery leave any visible scars on my face?",
        answer:
          "In 95% of our chin augmentation procedures, Dr. Sukhbir Singh uses the intra-oral approach. The incision is made completely inside your mouth, along the mucosal groove behind your lower lip, so there is zero external incision or mark on your face. In rare submental approaches (e.g., when combined with neck liposuction), the incision is nestled inside the natural horizontal fold beneath the chin, becoming virtually invisible within weeks.",
      },
      {
        question: "How does an implant feel compared to real jaw bone?",
        answer:
          "We use custom anatomical solid Silastic or porous polyethylene implants tailored to the exact curvature of your mandibular cortex. When placed beneath the thick periosteum and stabilized with titanium micro-fixation, the implant feels rigid and immovable—indistinguishable from natural mandibular bone. It will not shift, bend, or feel synthetic to the touch.",
      },
      {
        question: "What is the difference between a chin implant and sliding genioplasty?",
        answer:
          "A chin implant adds synthetic volume to the anterior bone cortex, making it ideal for mild to moderate horizontal chin deficiencies. A sliding genioplasty is an osseous procedure where the chin bone itself is sectioned with an ultrasonic saw and advanced forward, backward, or adjusted vertically. Genioplasty is chosen for severe microgenia, asymmetry, or when vertical dimension changes are required without prosthetics.",
      },
      {
        question: "Is there any risk of facial numbness or nerve injury?",
        answer:
          "The mental nerve emerges on either side of the jaw to provide sensation to the lower lip and chin. Because our sub-periosteal dissection is executed with microscopic instruments and nerve monitoring, the mental nerve is visualized and completely spared. Temporary numbness of the lower lip from tissue stretching is normal and typically resolves within 7 to 14 days.",
      },
      {
        question: "Can chin augmentation be performed alongside neck liposuction or rhinoplasty?",
        answer:
          "Yes, this is frequently known as a profiloplasty. Chin advancement is often paired with neck VASER liposuction or deep cervical neck lifting to sharpen an obtuse double chin, or with rhinoplasty to counterbalance a prominent nasal dorsum. Combining these in a single session maximizes profile harmony and streamlines downtime into a single recovery period.",
      },
    ],
  },
  cta: {
    eyebrow: "Greater Kailash Part 1 • New Delhi",
    title: "Define Your Profile with Balanced Surgical Mastery",
    text: "Schedule your confidential 3D biometric assessment with Dr. Sukhbir Singh. Receive custom anatomical computer simulations and an honest, surgeon-led recommendation for your chin and mandibular architecture.",
    primaryCta: bookConsultationCta("Reserve Surgical Consultation"),
    meta: clinicMeta,
  },
};

export const chinGovernance: CardGridData = {
  eyebrow: "Clinical Governance",
  title: "Surgeon-Led Safety Standards",
  columns: 4,
  cards: [
    { icon: "security", title: "NABH Standards", text: "Class 10,000 Modular OTs" },
    { icon: "fingerprint", title: "FDA Biocompatibility", text: "Pure Medical Silastic / PEEK" },
    { icon: "neurology", title: "Nerve Monitoring", text: "Mental Branch Sparing Protocol" },
    { icon: "emergency", title: "24/7 Concierge", text: "Personalized Post-Op Liaison" },
  ],
};
