import type { TreatmentPageData } from "./types";
import { bookConsultationCta, clinicMeta } from "./shared";

const IMG = "/images/pages/brow-lift";

export const browLift: TreatmentPageData = {
  slug: "brow-lift",
  metaTitle: "Endoscopic Brow Lift | Resplendent Aesthetics",
  metaDescription:
    "Minimally invasive endoscopic brow lift with incisions hidden in the hairline, performed by Dr. Sukhbir Singh in Greater Kailash, South Delhi.",
  hero: {
    breadcrumb: "Brow Lift & Periorbital Architecture",
    status: "Sub-Periosteal Keyhole Suite",
    eyebrow: "Endoscopic Sub-Periosteal Brow Elevation & Temporal Fixation",
    title: "Brow Lift — Refresh Tired Eyes with ",
    highlight: "Natural Arch Restoration",
    lead: "Minimally invasive endoscopic brow elevation concealing incisions entirely within the hairline to open heavy lids, soften deep forehead furrows, and restore youthful alert eyes without changing your unique facial identity.",
    stats: [
      { value: "1.5 cm", label: "Incision Port — in hairline" },
      { value: "Zero Loss", label: "Follicles — no shaving" },
      { value: "4K HD Endo", label: "Sub-mm nerve care" },
      { value: "7–10 Days", label: "Rapid social return" },
    ],
    primaryCta: bookConsultationCta("Book Brow Assessment"),
    secondaryCta: { label: "Explore Case Dossiers", href: "#cases", iconLeading: "photo_library" },
    surgeon: {
      name: "Dr. Sukhbir Singh",
      role: "Board Certified",
      initials: "DS",
      credentials: "MBBS, MS, MCh Plastic Surgery • Fellow PUCRS Brazil (Aesthetic Facial Surgery)",
      badges: ["Endoscopic HD 4K", "Endotine®"],
    },
    image: {
      src: `${IMG}/01-close-up-high-resolution-luxury.jpg`,
      alt: "Surgeon marking brow elevation vectors along a patient's eyebrow arch",
      tag: "Periorbital Vector Alignment",
      captionTitle: "Westmore Aesthetic Criteria",
      captionText:
        "Calibrated lateral apex elevation preserving natural eyebrow mobility without tension distortion or sensory compromise.",
    },
  },
  overview: {
    eyebrow: "Procedural Discrimination • Surgical Taxonomy",
    title: "The Endoscopic Distinction: Modern Keyhole vs. Traditional Coronal & Threads",
    intro:
      "Not all brow procedures achieve anatomical structural longevity. At Resplendent Delhi, Dr. Sukhbir Singh employs sub-periosteal endoscopic optical release to reposition sagging musculature at its foundational origin, rather than superficially tightening the skin.",
    media: {
      src: `${IMG}/02-detailed-monochrome-medical-surgical-planning.jpg`,
      alt: "Brow surgical planning with vector markings and nerve safety boundaries",
      tag: "Anatomical Vector Map",
      title: "Optical Sub-Periosteal Release",
      text: "The Arcus Marginalis and corrugator supercilii are released under microscopic video visualization, eliminating frown furrows while shielding supraorbital neurovascular bundles.",
    },
    options: [
      {
        title: "Endoscopic Sub-Periosteal Lift (Resplendent Standard)",
        tag: "10–12+ Years Durability",
        featured: true,
        text: "Executed via 3 to 4 micro keyhole ports (1.5cm) tucked entirely within the hairline. Utilizes 4K rigid endoscopes to dissect below the deep temporal fascia and periosteum. Secured with bio-absorbable Endotine multi-point tines.",
        facts: [
          { label: "Scarring", value: "Completely hidden in hair" },
          { label: "Sensation", value: "100% nerve protection" },
          { label: "Tissue Loss", value: "Zero scalp excised" },
        ],
      },
      {
        title: "Traditional Open Coronal Brow Lift",
        tag: "Obsolete Open Technique",
        muted: true,
        text: "Involves a continuous ear-to-ear incision across the top of the skull with full scalp resection. Leaves a permanent long linear scar, elevated hairline risk, and prolonged scalp numbness. Used strictly in rare reconstructive revisions.",
      },
      {
        title: "Non-Surgical Thread Lifts (PDO / Cog Threads)",
        tag: "Temporary 6–9 Months",
        muted: true,
        text: "Barbed sutures pulled through subcutaneous tissue without muscle or periosteal release. Provides mild, transient suspension that fails quickly under the weight of active forehead mimetic muscles, carrying risk of thread extrusion and dimpling.",
      },
    ],
  },
  process: {
    eyebrow: "Surgical Protocol Architecture",
    title: "The 4-Stage Endoscopic Clinical Pathway",
    intro:
      "Calibrated execution at our Greater Kailash clinic under twilight conscious sedation or brief general anesthesia with rapid same-day discharge.",
    steps: [
      {
        icon: "straighten",
        title: "Vector Dynamics & Brow Asymmetry Mapping",
        text: "Dr. Sukhbir Singh evaluates the lateral canthus, orbital rim protrusion, and existing ocular asymmetry. Using the Westmore aesthetic model, the precise lateral arch apex is marked relative to the pupil-limbus axis to prevent an over-arched posture.",
        footLabel: "Pre-Operative",
        footValue: "Millimeter Caliper Precision",
      },
      {
        icon: "content_cut",
        title: "Keyhole Hairline Access Ports",
        text: "Three to four micro-incisions measuring approximately 1.5 cm are created 2 cm behind the anterior hairline. No hair is shaved. Trichophytic beveled angles ensure hair follicles regenerate directly through the tiny closure line.",
        footLabel: "Incision Strategy",
        footValue: "Follicular Sparing Ports",
      },
      {
        icon: "videocam",
        title: "Endoscopic Sub-Periosteal Release",
        text: "Under 4K rigid endoscopic video guidance, specialized micro-elevators release the confluent periosteum from the superior orbital margin. The depressor supercilii and corrugator muscles are meticulously modified, eradicating deep vertical glabella lines.",
        footLabel: "Endoscopic Work",
        footValue: "4K Optical Magnification",
      },
      {
        icon: "security",
        title: "Bio-Absorbable Endotine Fixation",
        text: "Elevated brow tissues are anchored without uneven tension using bio-absorbable Endotine® implants. These distribute anchoring force evenly across 5 micro-tines and naturally metabolize away once healing completes at 6 months.",
        footLabel: "Biomechanic Hold",
        footValue: "Multi-Point Tension Balance",
      },
    ],
  },
  feature: {
    eyebrow: "Anatomical Safety & Neuro-Preservation",
    title: "HD Endoscopy & Sub-Millimeter Supraorbital Nerve Preservation",
    paragraphs: [
      "The hallmark of expert facial plastic surgery lies in natural mobility and preserved sensation. Traditional blind techniques risked sensory loss across the scalp. Under Dr. Sukhbir Singh's endoscopic direct visualization, each terminal branch of the supraorbital and supratrochlear nerves is identified and protected with zero traction injury.",
    ],
    metrics: [
      { value: "100%", label: "Sensation Preservation", text: "Complete visualization of sensory nerve arcades" },
      { value: "0.0 mm", label: "Visible Facial Scars", text: "Entirely concealed within hair-bearing scalp" },
      { value: "4–6 mm", label: "Vertical Elevation", text: "Re-establishes open, refreshed ocular aperture" },
      { value: "Class 100", label: "Laminar Flow OT", text: "Ultra-sterile private surgical suite GK-1" },
    ],
    panel: {
      title: 'Avoiding the "Startled / Surprised" Expression',
      icon: "health_and_safety",
      text: "An unnatural look occurs when the medial (inner) brow is lifted excessively. Resplendent's technique utilizes a selective tri-vector lateral suspension: stabilizing the medial head while gracefully cantilevering the lateral tail upward and outward.",
      items: [
        {
          title: "Dynamic Animation Retained",
          text: "Frontalis muscle remains functionally intact, allowing expressive smiling and natural forehead movement.",
        },
        {
          title: "Decompressing Upper Eyelid Hooding",
          text: "Lifting the descended brow naturally draws excess upper eyelid skin upward, frequently eliminating or diminishing the need for skin excision around the eyes.",
        },
        {
          title: "Permanent Glabellar Softening",
          text: 'Selective myotomy of corrugator supercilii provides a long-lasting chemical-free reduction in the "angry 11" frown furrows.',
        },
      ],
    },
  },
  cases: {
    id: "cases",
    eyebrow: "Verified Clinical Outcomes",
    title: "Documented Clinical Transformations",
    note: "Unretouched Medical Dossiers • GK-1 Clinic",
    columns: 2,
    cases: [
      {
        caseId: "Case #3210 • Female, 46",
        badge: "Post-Op: 4 Months",
        title: "Lateral Hooding & Heavy Brow Ptosis",
        text: "Treated via Endoscopic Tri-Vector Brow Lift. Concurrently alleviated lateral dermatochalasis without excising eyelid skin, fully restoring eye aperture.",
        image: { src: `${IMG}/03-high-quality-dual-medical-comparison.jpg`, alt: "Before and after brow ptosis correction" },
        meta: ["Technique: Endotine® 3-Port", "Full Arch Restored"],
      },
      {
        caseId: "Case #2884 • Female, 52",
        badge: "Post-Op: 6 Months",
        title: "Severe Brow Asymmetry & Deep Glabellar Furrows",
        text: "Sub-periosteal release with partial corrugator myotomy. Rectified 3.5mm horizontal asymmetry and erased deep vertical forehead creases permanently.",
        image: { src: `${IMG}/04-clinical-before-and-after-photo.jpg`, alt: "Before and after brow asymmetry correction" },
        meta: ["Technique: Endoscopic + Myotomy", "Symmetry Re-established"],
      },
      {
        caseId: "Case #4409 • Male, 58",
        badge: "Post-Op: 3 Months",
        title: "Male Heavy Brow Descent & Visual Field Impairment",
        text: "Temporal and endoscopic fixation designed with masculine straight-arch vector criteria to avoid feminine arching while clearing superior visual fatigue.",
        image: { src: `${IMG}/05-male-aesthetic-surgical-case-photo.jpg`, alt: "Male brow lift result" },
        meta: ["Technique: Male Vector Temporal Lift", "Masculine Contour Maintained"],
      },
      {
        caseId: "Case #1998 • Female, 41",
        badge: "Post-Op: 9 Months",
        title: "Combined Endoscopic Brow Lift + Upper Blepharoplasty",
        text: "Holistic periorbital rejuvenation simultaneously addressing low-lying lateral brow framework and redundant upper eyelid tarsal platform fullness.",
        image: { src: `${IMG}/06-comprehensive-periorbital-transformation-photography-of.jpg`, alt: "Combined brow lift and blepharoplasty result" },
        meta: ["Technique: Dual Periorbital Synchrony", "Complete Rejuvenation"],
      },
    ],
  },
  faq: {
    eyebrow: "Patient Guidance • Surgical Clarity",
    title: "Frequently Answered Clinical Inquiries",
    intro:
      "In-depth clarity regarding anesthesia, incisions, recovery timelines, and procedural safety directly from our lead surgeon.",
    items: [
      {
        question: "How is an endoscopic brow lift different from upper eyelid surgery (blepharoplasty)?",
        answer:
          "Upper blepharoplasty removes redundant skin and fat specifically from the eyelids themselves. However, in many patients, the eyelid skin appears heavy simply because the underlying eyebrow framework has descended below the superior orbital rim. Performing eyelid surgery alone when brow ptosis is the true culprit risks pulling the brow even lower. An endoscopic brow lift restores the structural position of the forehead and brow, naturally opening up the upper eyelid. During your consultation, Dr. Sukhbir Singh uses precise manual elevation tests to determine whether you need a brow lift, blepharoplasty, or a harmonized combination.",
      },
      {
        question: "Will my hair need to be shaved, and will there be visible scars?",
        answer:
          "No hair is shaved. We gently part the hair and secure it temporarily during the procedure. The incisions are tiny (1.2 to 1.5 cm) keyhole access portals positioned 2 to 3 cm behind the anterior hairline. We use a meticulous trichophytic bevel incision technique that preserves follicular integrity, allowing your natural hair to grow directly through the micro-scars. Once healed, these marks are virtually undetectable, even when parting your hair or swimming.",
      },
      {
        question: "How long does the recovery take, and when can I wash my hair?",
        answer:
          "Patients are usually discharged on the same day. A light protective forehead compression wrap is kept in place for the first 24 to 48 hours. You may gently wash your hair with clinical antiseptic shampoo on day 3 post-op. Mild swelling and bruising around the temples or upper eyelids typically resolves within 7 to 10 days, allowing most patients to resume desk work and normal social engagements comfortably. Strenuous workouts can resume at 3 to 4 weeks.",
      },
      {
        question: "Will I look surprised or unnatural after the brow lift?",
        answer:
          "The unnatural, startled appearance seen in outdated plastic surgery resulted from excessive upward pulling of the medial (inner) eyebrow head and over-stretching the forehead skin. Dr. Singh concentrates vector elevation on the lateral two-thirds of the eyebrow—the area that naturally sags first—while maintaining the medial brow at its natural anatomic level. You retain complete, natural facial expressions without tension or an artificial pull.",
      },
      {
        question: "How long do the surgical results last compared to Botox or threads?",
        answer:
          "While Botox brow lifts offer a subtle 1–2 mm lift that dissipates after 3 to 4 months, and thread lifts generally fail within 6 to 9 months, an endoscopic sub-periosteal brow lift delivers profound structural rejuvenation lasting 10 to 12+ years. Because the periosteum is released and re-anchored at a higher position, biological re-adhesion creates permanent tissue redraping.",
      },
    ],
  },
  cta: {
    eyebrow: "Bespoke Periorbital Surgery Suite • South Delhi",
    title: "Awaken Your Eyes with Subtle Surgical Artistry",
    text: "Consult directly with Dr. Sukhbir Singh at our private clinical sanctuary in Greater Kailash 1. Experience microscopic endoscopic precision, total discretion, and natural facial harmony.",
    primaryCta: bookConsultationCta("Schedule Confidential Consultation"),
    meta: clinicMeta,
  },
};
