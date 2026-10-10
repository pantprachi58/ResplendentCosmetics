import type { BeforeAfterData, ImageRef } from "./types";
import { bookConsultationCta } from "./shared";

/*
 * Before/after slider content for every treatment page in the header menu, keyed by slug.
 *
 * Swapping in real clinic results: point `before` / `after` at the two photos (same framing,
 * ideally saved as public/images/pages/<slug>/before-after/{before,after}.jpg) and delete
 * `sample: true`. Pairs marked `sample` currently reuse one related stand-in photo for both sides.
 */

const PAGES = "/images/pages";

/** Same stand-in photo on both sides until a real pair is supplied */
const samplePair = (src: string, subject: string): Pick<BeforeAfterData, "before" | "after" | "sample"> => ({
  before: { src, alt: `Sample image illustrating ${subject}, before view` },
  after: { src, alt: `Sample image illustrating ${subject}, after view` },
  sample: true,
});

const realPair = (slug: string, subject: string): { before: ImageRef; after: ImageRef } => ({
  before: { src: `${PAGES}/${slug}/before-after/before.jpg`, alt: `${subject} patient before treatment` },
  after: { src: `${PAGES}/${slug}/before-after/after.jpg`, alt: `${subject} patient after treatment` },
});

export const beforeAfter = {
  /* ---------- Face ---------- */
  "brow-lift": {
    eyebrow: "Facial Plastic Surgery",
    title: "Brow Lift Before & After",
    text: "Drag the slider to compare brow position and upper-eye openness before and after a brow lift.",
    points: [
      "Brow height is planned to suit your face, not a fixed template",
      "Incisions are placed to sit hidden within the hairline",
      "Ask whether a brow lift, eyelid surgery or both suit your concern",
    ],
    cta: bookConsultationCta("Ask About Brow Lift"),
    ...samplePair(`${PAGES}/body-tightening/skin-tightening-consultation.webp`, "a brow lift"),
  },
  "thread-lift": {
    eyebrow: "Non-Surgical Lifting & Contouring",
    title: "Thread Lift Before & After",
    text: "Drag the slider to compare jawline and lower-face contour before and after a thread lift.",
    points: [
      "Suited to mild-to-moderate sagging of the lower face and neck",
      "The lift is visible straight away and refines as collagen builds",
      "Threads can be combined with fillers or Botox for a subtle, all-round result",
    ],
    cta: bookConsultationCta("Ask About Thread Lift"),
    ...realPair("thread-lift", "Thread lift"),
    focus: "50% 30%",
  },
  "dimple-creation": {
    eyebrow: "Facial Aesthetic Surgery",
    title: "Dimple Creation Before & After",
    text: "Drag the slider to compare the smile before and after dimpleplasty.",
    points: [
      "Dimple position is marked with you before the procedure",
      "Dimples often show at rest early on and soften as healing settles",
      "Ask how eating and oral hygiene are managed during recovery",
    ],
    cta: bookConsultationCta("Ask About Dimple Creation"),
    ...samplePair("/images/procedures/7.png", "dimple creation"),
  },
  "ear-lobe-repair": {
    eyebrow: "Ear Aesthetic Surgery",
    title: "Earlobe Repair Before & After",
    text: "Drag the slider to compare earlobe shape before and after repair.",
    points: [
      "Torn, stretched and gauged lobes are each repaired differently",
      "Re-piercing is usually possible once the lobe has fully healed",
      "Ask how long to wait before wearing heavy earrings again",
    ],
    cta: bookConsultationCta("Ask About Earlobe Repair"),
    ...samplePair("/images/procedures/6.png", "earlobe repair"),
  },
  otoplasty: {
    eyebrow: "Ear Aesthetic Surgery",
    title: "Otoplasty Before & After",
    text: "Drag the slider to compare ear position and shape before and after otoplasty.",
    points: [
      "Prominent ears are set back to sit in natural proportion",
      "Incisions are usually placed in the crease behind the ear",
      "A protective headband is worn during the early recovery period",
    ],
    cta: bookConsultationCta("Ask About Otoplasty"),
    ...samplePair("/images/procedures/5.png", "otoplasty"),
  },
  "eyelid-surgery": {
    eyebrow: "Facial Aesthetic Surgery",
    title: "Eyelid Surgery Before & After",
    text: "Drag the slider to compare the eye area before and after blepharoplasty.",
    points: [
      "Upper, lower or combined eyelid surgery is planned to your concern",
      "Bruising and swelling usually settle over the first few weeks",
      "The aim is a fresher look that keeps your natural eye shape",
    ],
    cta: bookConsultationCta("Ask About Eyelid Surgery"),
    before: { src: `${PAGES}/eyelid-surgery/before-after-1.jpg`, alt: "Eyelid surgery patient before treatment" },
    after: { src: `${PAGES}/eyelid-surgery/before-after-2.jpg`, alt: "Eyelid surgery patient after treatment" },
  },
  "face-neck-lift": {
    eyebrow: "Facial Plastic Surgery",
    title: "Face & Neck Lift Before & After",
    text: "Drag the slider to compare jawline and neck definition before and after a face and neck lift.",
    points: [
      "Deeper tissue layers are repositioned for a natural, unpulled look",
      "Incisions are planned around the ear and within the hairline",
      "Ask how the result is expected to age with you over time",
    ],
    cta: bookConsultationCta("Ask About Face & Neck Lift"),
    ...samplePair("/images/procedures/3.png", "a face and neck lift"),
  },
  "lip-augmentation": {
    eyebrow: "Facial Aesthetics",
    title: "Lip Augmentation Before & After",
    text: "Drag the slider to compare lip shape and volume before and after augmentation.",
    points: [
      "Volume is built gradually to keep the lips in proportion",
      "Some swelling is normal for the first few days",
      "Fillers are temporary; a lip lift offers a longer-lasting change",
    ],
    cta: bookConsultationCta("Ask About Lip Augmentation"),
    ...samplePair(`${PAGES}/lip-augmentation/lip-filler-profile.jpg`, "lip augmentation"),
  },
  "dermal-fillers": {
    eyebrow: "Non-Surgical Facial Rejuvenation",
    title: "Dermal Fillers Before & After",
    text: "Drag the slider to compare facial volume and contour before and after dermal filler treatment.",
    points: [
      "Results show straight away and refine as any swelling settles",
      "Hyaluronic acid fillers are temporary and gradually absorbed",
      "Conservative volumes help keep the result natural",
    ],
    cta: bookConsultationCta("Ask About Dermal Fillers"),
    ...samplePair("/images/procedures/15.png", "dermal fillers"),
  },
  "prp-therapy": {
    eyebrow: "Hair & Skin Regeneration",
    title: "PRP Therapy Before & After",
    text: "Drag the slider to compare hair density before and after a course of PRP therapy.",
    points: [
      "Prepared from a small sample of your own blood",
      "Improvement builds gradually over a course of sessions",
      "Maintenance sessions help sustain the result",
    ],
    cta: bookConsultationCta("Ask About PRP Therapy"),
    ...samplePair(`${PAGES}/prp-therapy/prp-scalp-injection.jpg`, "PRP therapy"),
  },
  rhinoplasty: {
    eyebrow: "Facial Plastic Surgery",
    title: "Rhinoplasty Before & After",
    text: "Drag the slider to compare the nasal profile before and after rhinoplasty.",
    points: [
      "Cosmetic shape and breathing concerns are assessed separately",
      "Swelling settles gradually, so the final shape takes months to show",
      "Your nose is planned to suit your own facial proportions",
    ],
    cta: bookConsultationCta("Ask About Rhinoplasty"),
    ...realPair("rhinoplasty", "Rhinoplasty"),
    focus: "75% 50%",
  },
  botox: {
    eyebrow: "Non-Surgical Facial Rejuvenation",
    title: "Botox Before & After",
    text: "Drag the slider to compare expression lines before and after neuromodulator treatment.",
    points: [
      "Results build gradually over the first couple of weeks",
      "Effects are temporary, so maintenance sessions are planned",
      "Dosing aims to soften lines while keeping natural expression",
    ],
    cta: bookConsultationCta("Ask About Botox"),
    ...samplePair("/images/procedures/14.png", "Botox treatment"),
  },
  microdermabrasion: {
    eyebrow: "Non-Surgical Skin Resurfacing",
    title: "Microdermabrasion Before & After",
    text: "Drag the slider to compare skin smoothness and glow before and after microdermabrasion.",
    points: [
      "Little to no downtime after each session",
      "A series of sessions gives the most visible improvement",
      "Daily sunscreen helps protect the result",
    ],
    cta: bookConsultationCta("Ask About Microdermabrasion"),
    ...samplePair(`${PAGES}/body-tightening/facetite.webp`, "microdermabrasion"),
  },
  "chemical-peel": {
    eyebrow: "Non-Surgical Skin Rejuvenation",
    title: "Chemical Peel Before & After",
    text: "Drag the slider to compare skin tone and texture before and after a chemical peel.",
    points: [
      "Peel strength is chosen for your skin type and concern",
      "A course of peels is often needed for the best result",
      "Strict sun protection is essential after every peel",
    ],
    cta: bookConsultationCta("Ask About Chemical Peels"),
    ...samplePair(`${PAGES}/body-tightening/facetite.webp`, "a chemical peel"),
  },

  /* ---------- Body ---------- */
  liposuction: {
    eyebrow: "Body Contouring Surgery",
    title: "Liposuction Before & After",
    text: "Drag the slider to compare body contour before and after liposuction.",
    points: [
      "Liposuction removes stubborn fat; it is not a weight-loss treatment",
      "Swelling settles over several weeks to reveal the final contour",
      "Compression garments support healing and skin retraction",
    ],
    cta: bookConsultationCta("Ask About Liposuction"),
    before: { src: "/images/Liposuction/lipo-before.jpg", alt: "Liposuction patient before treatment" },
    after: { src: "/images/Liposuction/Lipo after.jpeg", alt: "Liposuction patient after treatment" },
  },
  "buttock-calf-augmentation": {
    eyebrow: "Body Contouring Surgery",
    title: "Buttock & Calf Reshaping Before & After",
    text: "Drag the slider to compare body contour before and after buttock or calf reshaping.",
    points: [
      "Fat transfer and implant options are discussed at assessment",
      "Some transferred fat is naturally reabsorbed during healing",
      "Sitting and activity guidance form part of recovery planning",
    ],
    cta: bookConsultationCta("Ask About Body Reshaping"),
    ...samplePair("/images/procedures/12.png", "buttock and calf reshaping"),
  },
  "gender-reassignment": {
    eyebrow: "Gender-Affirming Care",
    title: "Gender-Affirming Surgery Before & After",
    text: "Drag the slider to compare body contour before and after gender-affirming surgery.",
    points: [
      "Surgery is planned as part of a broader, supportive care pathway",
      "Procedures are staged and tailored to your goals",
      "Your privacy is protected at every step",
    ],
    cta: bookConsultationCta("Book a Private Consultation"),
    ...samplePair("/images/procedures/13.png", "gender-affirming surgery"),
  },
  "laser-hair-removal": {
    eyebrow: "Laser Aesthetics",
    title: "Laser Hair Removal Before & After",
    text: "Drag the slider to compare hair density before and after a course of laser hair removal.",
    points: [
      "Several sessions are needed because hair grows in cycles",
      "Settings are matched to your skin type and hair colour",
      "Avoid sun exposure and waxing between sessions",
    ],
    cta: bookConsultationCta("Ask About Laser Hair Removal"),
    ...samplePair(`${PAGES}/laser-hair-removal/underarm-laser.webp`, "laser hair removal"),
  },
  "body-tightening": {
    eyebrow: "Minimally Invasive Skin Tightening",
    title: "Skin Tightening Before & After",
    text: "Drag the slider to compare skin firmness and contour before and after FaceTite, BodyTite or AccuTite.",
    points: [
      "Best suited to mild-to-moderate skin laxity",
      "Tightening continues to develop over the following months",
      "Your skin quality and treatment area guide the device choice",
    ],
    cta: bookConsultationCta("Ask About Skin Tightening"),
    ...samplePair(`${PAGES}/body-tightening/skin-tightening-consultation.webp`, "skin tightening"),
  },
  "rf-microneedling": {
    eyebrow: "Fractional Skin Remodelling",
    title: "Microneedling RF Before & After",
    text: "Drag the slider to compare skin texture and firmness before and after Morpheus8 treatment.",
    points: [
      "Collagen remodelling continues for weeks after each session",
      "Expect some redness for a few days afterwards",
      "A course of treatments is usually recommended",
    ],
    cta: bookConsultationCta("Ask About Microneedling RF"),
    ...samplePair(`${PAGES}/body-tightening/accutite.webp`, "microneedling RF"),
  },
  "fat-grafting": {
    eyebrow: "Natural Volume Restoration",
    title: "Fat Grafting Before & After",
    text: "Drag the slider to compare volume and contour before and after autologous fat grafting.",
    points: [
      "Your own fat is harvested, purified and re-injected",
      "Some fat is reabsorbed, so the final result takes a few months to show",
      "More than one session may be advised for larger changes",
    ],
    cta: bookConsultationCta("Ask About Fat Grafting"),
    ...samplePair(`${PAGES}/dermal-fillers/wrinkle-fillers.webp`, "fat grafting"),
  },
  "tummy-tuck": {
    eyebrow: "Body Contouring Surgery",
    title: "Tummy Tuck Before & After",
    text: "Drag the slider to compare abdominal contour before and after abdominoplasty.",
    points: [
      "Removes loose skin and can repair separated abdominal muscles",
      "The scar is placed low so it can sit under most clothing",
      "Ask about recovery time before returning to work and exercise",
    ],
    cta: bookConsultationCta("Ask About Tummy Tuck"),
    ...samplePair(`${PAGES}/tummy-tuck/tummy-tuck-markings.jpg`, "a tummy tuck"),
  },

  /* ---------- Women ---------- */
  "female-breast-surgery": {
    eyebrow: "Women's Aesthetic Surgery",
    title: "Breast Surgery Before & After",
    text: "Drag the slider to compare breast shape and volume before and after surgery.",
    points: [
      "Augmentation, lift and reduction are planned to your frame and goals",
      "Implant size, type and placement are decided together at consultation",
      "A support garment and activity limits form part of recovery",
    ],
    cta: bookConsultationCta("Ask About Breast Surgery"),
    ...realPair("female-breast-surgery", "Breast surgery"),
  },
  hymenoplasty: {
    eyebrow: "Women's Intimate Surgery",
    title: "Hymenoplasty Before & After",
    text: "Drag the slider to compare the before and after views for hymen restoration.",
    points: [
      "Consultations and procedures are fully confidential",
      "Timing can be planned around your personal schedule",
      "Ask about healing time and activity restrictions",
    ],
    cta: bookConsultationCta("Ask About Hymenoplasty"),
    ...samplePair(`${PAGES}/hymenoplasty/hymenoplasty.jpg`, "hymenoplasty"),
  },
  "vaginal-tightening": {
    eyebrow: "Women's Intimate Surgery",
    title: "Vaginal Tightening Before & After",
    text: "Drag the slider to compare the before and after views for vaginal tightening.",
    points: [
      "Surgical and non-surgical options are discussed in private",
      "Treatment is planned around your symptoms and goals",
      "Ask about healing time and when normal activity can resume",
    ],
    cta: bookConsultationCta("Ask About Vaginal Tightening"),
    ...samplePair(`${PAGES}/hymenoplasty/hymenoplasty.jpg`, "vaginal tightening"),
  },
  vaginoplasty: {
    eyebrow: "Women's Intimate Surgery",
    title: "Vaginoplasty Before & After",
    text: "Drag the slider to compare the before and after views for vaginal rejuvenation surgery.",
    points: [
      "Your concerns are discussed in a private, confidential consultation",
      "Surgery is tailored to your anatomy and goals",
      "Recovery includes a period of rest from sexual activity",
    ],
    cta: bookConsultationCta("Ask About Vaginoplasty"),
    ...samplePair(`${PAGES}/hymenoplasty/hymenoplasty.jpg`, "vaginoplasty"),
  },

  /* ---------- Men ---------- */
  "penile-enlargement": {
    eyebrow: "Men's Intimate Surgery",
    title: "Penile Enlargement Before & After",
    text: "Drag the slider to compare the before and after views for penile enlargement surgery.",
    points: [
      "Realistic expectations are discussed openly at consultation",
      "Your consultation is private and confidential",
      "Recovery includes a period of rest from sexual activity",
    ],
    cta: bookConsultationCta("Ask About Penile Enlargement"),
    ...samplePair(`${PAGES}/penile-enlargement/penile-enlargement.jpg`, "penile enlargement"),
  },
  gynecomastia: {
    eyebrow: "Men's Aesthetic Surgery",
    title: "Gynecomastia Before & After",
    text: "Drag the slider to compare chest contour before and after male breast reduction.",
    points: [
      "Assessment distinguishes fat, gland tissue and loose skin",
      "Technique and scars depend on the grade of gynecomastia",
      "Compression garments and activity limits support recovery",
    ],
    cta: bookConsultationCta("Ask About Gynecomastia"),
    ...realPair("gynecomastia", "Gynecomastia"),
  },
  "six-pack-abs": {
    eyebrow: "Body Contouring Surgery",
    title: "6-Pack Abs Surgery Before & After",
    text: "Drag the slider to compare abdominal definition before and after abdominal etching.",
    points: [
      "Best results come with low body fat and good muscle tone",
      "Definition becomes clearer as swelling settles",
      "A stable weight and active lifestyle help maintain the result",
    ],
    cta: bookConsultationCta("Ask About 6-Pack Abs Surgery"),
    ...samplePair("/images/procedures/8.png", "6-pack abs surgery"),
  },
} satisfies Record<string, BeforeAfterData>;
