import type { CalloutData, CardGridData, CtaBandData, FaqData, ProcessData, TreatmentHeroData } from "./types";
import { bookConsultationCta, clinicMeta } from "./shared";

// Content sourced from https://www.resplendentcosmetics.com/chemical-peel.php (no imagery or video on the live page).

export const chemicalPeelMeta = {
  title: "Chemical Peel Treatment in Delhi NCR | Resplendent Aesthetics",
  description:
    "Professional chemical peels in Greater Kailash, New Delhi for even-toned, fresh and smooth skin — treating pigmentation, acne, acne scars, open pores and fine lines.",
};

export const chemicalPeelHero: TreatmentHeroData = {
  breadcrumb: "Chemical Peel",
  eyebrow: "Non-Surgical Skin Rejuvenation",
  title: "Chemical Peel — ",
  highlight: "Even, Fresh & Radiant Skin",
  lead: "As we age, skin appears dull because dead skin cells do not slough off as easily as when we are young. Light, medium and deep chemical peels are non-surgical procedures that peel away the skin's top layer to improve sun-damaged, unevenly pigmented and wrinkled skin—restoring a healthy, radiant appearance.",
  pills: [
    { icon: "spa", label: "Non-Surgical" },
    { icon: "block", label: "No Anaesthesia Needed" },
    { icon: "event_available", label: "Options With No Downtime" },
    { icon: "medical_services", label: "Done by Professionals Only" },
  ],
  primaryCta: bookConsultationCta("Book a Skin Consultation"),
  secondaryCta: { label: "Explore Peel Types", href: "#peel-types" },
  image: {
    src: "/images/pages/body-tightening/accutite.webp",
    alt: "Doctor assessing a patient's facial skin",
    tag: "Skin Assessment",
  },
  card: {
    eyebrow: "When to Consider a Peel",
    title: "Chemical Peel",
    icon: "face_retouching_natural",
    checklist: [
      "Wrinkles with sun-damaged skin",
      "Skin discolouration, blotchiness or brown spots",
      "Acne, acne scars and open pores",
      "Hyperpigmentation or tanning on the face or body",
    ],
    footLabel: "Consultation Studio",
    footValue: "R-9, Greater Kailash Part 1, New Delhi",
  },
};

export const chemicalPeelTypes: CardGridData = {
  id: "peel-types",
  eyebrow: "Peels We Offer",
  title: "Choosing the Right Peel",
  intro:
    "Different peels suit different skin concerns—some have downtime and some have none. Your doctor decides which peel, or combination of peels, suits your face or body.",
  columns: 3,
  cards: [
    {
      icon: "water_drop",
      eyebrow: "Active Acne",
      title: "Salicylic Peel",
      text: "Non-invasive with rapid onset. Kills the bacteria inside active acne and reduces inflammation; it is neutralised immediately after frosting.",
    },
    {
      icon: "flare",
      eyebrow: "Glow & Texture",
      title: "Glycolic Peel",
      text: "One of the oldest peels (20–40%). Removes excess sebum and dead cells, evens texture and tone, and improves fine lines—though results need frequent sessions.",
    },
    {
      icon: "science",
      eyebrow: "Scars & Melasma",
      title: "TCA Peel",
      text: "Trichloroacetic acid peel used as a spot peel or for the full face to treat fine lines, hyperpigmentation, melasma, acne scars and sun damage. Strictly doctor-administered.",
    },
    {
      icon: "wb_sunny",
      eyebrow: "Progressive Renewal",
      title: "Yellow Peel",
      text: "A combination peel with retinoids, phytic, kojic and azelaic acids. Left on for at least 12 hours; a fresher new layer appears over about 3 weeks.",
    },
    {
      icon: "auto_awesome",
      eyebrow: "No Downtime",
      title: "Carbon (Hollywood) Peel",
      text: "A charcoal-based peel removed with a Q-switched laser. Improves open pores, pigmentation, oiliness and uneven tone with immediate recovery.",
    },
    {
      icon: "spa",
      eyebrow: "Acne & Pigmentation",
      title: "Black (Organic) Peel",
      text: "Helps treat acne and, in addition, hyperpigmentation. Your doctor will explain the pros and cons of each option.",
    },
  ],
};

export const chemicalPeelProcess: ProcessData = {
  eyebrow: "What to Expect",
  title: "How a Chemical Peel Session Works",
  intro:
    "A peel generates a chemical reaction and heat, so it is always performed in a professional clinical setting.",
  steps: [
    {
      icon: "forum",
      title: "Consultation",
      text: "Your doctor assesses your concern and recommends the right peel, number of sessions and expected downtime before treatment begins.",
      footValue: "Personalised Peel Plan",
    },
    {
      icon: "clean_hands",
      title: "Thorough Cleansing",
      text: "The face is cleaned thoroughly, removing any make-up or creams previously applied.",
      footValue: "Skin Prepared",
    },
    {
      icon: "format_paint",
      title: "Peel Application",
      text: "One or two coats are applied depending on your condition. Sometimes layering or a combination of peels is used, then the peel is neutralised.",
      footValue: "Controlled Peeling",
    },
    {
      icon: "wb_sunny",
      title: "Protect & Aftercare",
      text: "The skin is cleaned and layered with antibiotic cream, moisturiser and sunscreen. Post-peel instructions are explained before you leave.",
      footValue: "Moisturise • Sunscreen",
    },
  ],
};

export const chemicalPeelAftercare: CalloutData = {
  icon: "wb_sunny",
  eyebrow: "Post-Peel Care",
  title: "Aftercare Is as Important as the Peel",
  text: "Chemical peels rarely make skin worse when post-peel instructions are followed. Sun protection is the cornerstone of your treatment—if in doubt, ask your doctor rather than trying home remedies.",
  highlights: [
    {
      icon: "soap",
      title: "No Face Wash for 24–48 Hours",
      text: "Splash gently with water only and dab dry, then apply moisturiser and sunscreen straight away.",
    },
    {
      icon: "opacity",
      title: "Moisturise Frequently",
      text: "Peeling dries the skin, so moisturise at regular intervals.",
    },
    {
      icon: "light_mode",
      title: "Sunscreen Every 3–4 Hours",
      text: "Use SPF 30–50, indoors and outdoors, and avoid direct sun exposure as advised.",
    },
  ],
  cta: bookConsultationCta("Plan Your Peel"),
};

export const chemicalPeelFaq: FaqData = {
  eyebrow: "Common Questions",
  title: "FAQs on Chemical Peels",
  items: [
    {
      question: "What is a chemical peel?",
      answer:
        "Chemical peel, skin peel and face peel all mean the same thing. Professionally approved chemicals are applied by professionals to treat facial and body skin concerns such as hyperpigmentation and tanning, ageing spots, acne on the face and body, and pigmentation anywhere on the body including the underarms and intimate area. The skin is peeled in a controlled manner to achieve the desired result. Newer peels such as the Carbon (Hollywood) peel work on deeper tissues without visible peeling, so there is no downtime.",
    },
    {
      question: "Which chemical peel is used for acne?",
      answer:
        "Acne affects more than 30–40% of the population. Peels work best alongside the medication your doctor prescribes, especially for nodulo-pustular acne. The most common acne peels are the Salicylic, Black and Carbon peels; all work by killing the bacteria causing inflammation and speeding healing. The Black peel also helps hyperpigmentation, and the Carbon peel also improves open pores, oiliness and pigmentation. Your doctor decides which peel is right for you.",
    },
    {
      question: "How does a chemical peel help acne scars?",
      answer:
        "Acne scars are usually permanent to semi-permanent and can be difficult to treat. Chemical peels soften scars and promote collagen synthesis, helping healing from the deeper dermis. Peels can be combined with lasers or micro-needling for better results, and they also help keep active acne in check.",
    },
    {
      question: "What are the side effects of a chemical peel?",
      answer:
        "Like any treatment, peels have side effects, which is why they must be done by a professional in a clinic—never try them at home. Common side effects include redness, peeling, dryness and itching, and the face may look slightly darker at first before it improves. Your doctor will discuss the pros, cons and downtime of the recommended peel.",
    },
    {
      question: "How much does a chemical peel cost?",
      answer:
        "Cost depends on the type of peel suitable for your face or body, your indication, the number of sessions, the downtime, and whether it is a superficial or deeper peel. Some people need one or more peel combinations in the same or different sessions. Your doctor will discuss all of this before starting, as post-peel care is equally important.",
    },
    {
      question: "How many sessions are needed?",
      answer:
        "Chemical peeling is progressive, so multiple sessions are needed. The number depends on your indication, whether a single or combination peel is required, and the expected result. Your doctor may add treatments such as laser or micro-needling depending on how your skin responds.",
    },
    {
      question: "Can micro-needling and a chemical peel be combined?",
      answer:
        "Yes. Micro-needling or a derma roller is done first to open the skin pores, and the peel is applied afterwards. This increases peel penetration and improves collagen synthesis, helping large pores, acne scars, overall texture and skin firmness.",
    },
    {
      question: "Can chemical peels treat large pores and acne scars?",
      answer:
        "Yes. Combinations of peels can improve both—for example, the Carbon peel for large pores and TCA for acne scars—sometimes with micro-needling or lasers. Your doctor will plan the combination with you, and multiple sessions at varied intervals are required.",
    },
    {
      question: "Is there a chemical peel for the under-eye area?",
      answer:
        "The under-eye skin is very thin, so deep or strong peels cannot be used. We use highly specific periorbital peels that cause no peeling and hardly any downtime, with results building over time. Multiple sessions are needed, no more often than every 3 weeks, performed by your doctor or a trained professional under their supervision.",
    },
    {
      question: "Can I use a chemical peel at home?",
      answer:
        "After an in-clinic peel, mild peeling or exfoliating agents may be suggested for home use—but only as prescribed by your doctor. Do not buy peeling agents from chemist shops or unqualified sources, as concentrations vary and can damage your skin.",
    },
    {
      question: "Can chemical peels make skin worse?",
      answer:
        "Only if post-peel instructions are not followed; otherwise this is rare. Avoid direct sunlight, moisturise properly to prevent excessive dryness, and treat sun protection as the cornerstone of your treatment.",
    },
    {
      question: "Will a chemical peel remove beauty marks?",
      answer:
        "Peels can reduce beauty spots to a great extent, depending on how deep the mark is, the number of sessions and the type of peel—spot, deep or superficial. Consult your doctor rather than trying home remedies.",
    },
    {
      question: "Can I get a chemical peel on my back?",
      answer:
        "Yes, back peels are routinely done and are effective—most commonly for body acne and pigmentation. As the back has thicker skin, sessions tend to be longer and more frequent. Underlying problems such as dandruff or hormonal issues are evaluated and treated at the same time for the best results.",
    },
    {
      question: "Does a chemical peel remove stretch marks?",
      answer:
        "Stretch marks form when the skin's elastin is destroyed, and it cannot be fully restored. Peels soften the marks, reduce their redness and support collagen regeneration so they look lighter. Your doctor can suggest complementary treatments.",
    },
  ],
};

export const chemicalPeelCta: CtaBandData = {
  eyebrow: "Skin Rejuvenation • Greater Kailash Part 1",
  title: "Find the Right Peel for Your Skin",
  text: "Consult our doctors at Resplendent Aesthetics, R-9, Basement, Greater Kailash Part 1, New Delhi - 110048, for a peel plan tailored to your skin.",
  primaryCta: bookConsultationCta("Book a Skin Consultation"),
  meta: clinicMeta.slice(0, 1),
};
