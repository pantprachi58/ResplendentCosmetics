import type { ImageRef } from "./treatments/types";

/*
 * Blog categories and the original (pre-CMS) articles, exactly as published on the live site.
 * Posts are now stored in MongoDB and edited in /admin; `blogPosts` below is only the seed
 * that lib/blog/seed.ts inserts for slugs the database doesn't have yet, and the read-only
 * fallback when the database is unreachable. Edit live posts in the admin panel, not here.
 */

export type BlogCategory = "face" | "body" | "women" | "men";
export type BlogFilter = "all" | BlogCategory;

export const blogFilters: { id: BlogFilter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "face", label: "Face" },
  { id: "body", label: "Body" },
  { id: "women", label: "Women" },
  { id: "men", label: "Men" },
];

export const blogCategoryLabel: Record<BlogCategory, string> = {
  face: "Face",
  body: "Body",
  women: "Women",
  men: "Men",
};

export type BlogSection = {
  /** Anchor id for the in-article table of contents */
  id: string;
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

/** A seed article in its original structured form (converted to HTML when inserted) */
export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  /** Short topic label shown above the title, e.g. "Rhinoplasty guide" */
  topic: string;
  image: ImageRef;
  /** Treatment page the article supports */
  treatment: { label: string; href: string };
  sections: BlogSection[];
  /** "Questions to ask at your consultation" checklist */
  questions: string[];
};

/** Cards shown before (and added by) "Show more" on the blog index */
export const BLOG_PAGE_SIZE = 6;

export const blogPosts: BlogPost[] = [
  /* ---------- Face ---------- */
  {
    slug: "rhinoplasty-appearance-breathing-recovery",
    title: "Rhinoplasty: Appearance, Breathing and Recovery",
    excerpt:
      "What to discuss about your goals, technique, swelling and healing, and why cosmetic and functional planning are assessed separately.",
    category: "face",
    topic: "Rhinoplasty guide",
    image: { src: "/images/procedures/2.png", alt: "Side profile of a natural-looking nose" },
    treatment: { label: "Rhinoplasty", href: "/treatments/rhinoplasty" },
    sections: [
      {
        id: "goals",
        heading: "Start with what bothers you, not a photo of someone else",
        paragraphs: [
          "A good rhinoplasty consultation begins with your own concern: a bump on the bridge, a wide or drooping tip, asymmetry after an injury, or difficulty breathing through one side. Describing the concern clearly helps the surgeon judge what can change while keeping the nose in balance with the rest of your face.",
          "Reference photos can be useful to show a direction, but every face has different skin thickness, bone structure and proportions. The aim is a nose that suits you, not a copy of another person's profile.",
        ],
      },
      {
        id: "breathing",
        heading: "Appearance and breathing are planned together",
        paragraphs: [
          "The shape of the nose and the way air flows through it are closely linked. Reducing or narrowing the nose without supporting its internal structure can affect breathing, so the airway is assessed as part of planning, even when the main goal is cosmetic.",
          "If you already have a blocked side, frequent congestion or a history of nasal injury, mention it early. Some functional problems can be addressed during the same procedure.",
        ],
      },
      {
        id: "recovery",
        heading: "What recovery usually involves",
        paragraphs: [
          "Most people notice swelling and some bruising around the nose and eyes in the first days. Visible bruising settles first, while subtle swelling, especially at the tip, takes much longer to fade. The final shape develops gradually, so early results are not the end result.",
        ],
        bullets: [
          "Plan for a few days of rest and avoid strenuous activity until you are advised otherwise",
          "Follow instructions on sleeping position, splints and cleaning",
          "Protect the nose from knocks and avoid pressure from heavy glasses until cleared",
          "Attend follow-up visits so healing can be checked",
        ],
      },
      {
        id: "non-surgical",
        heading: "When a non-surgical option may be discussed",
        paragraphs: [
          "Small contour irregularities can sometimes be camouflaged with injectable fillers. This does not reduce the size of the nose or improve breathing, and it carries its own risks, so it is only suitable for selected concerns after a careful assessment.",
        ],
      },
    ],
    questions: [
      "Which changes are realistic for my skin type and nasal structure?",
      "Will my breathing be assessed and, if needed, treated at the same time?",
      "How long does swelling usually take to settle at the tip?",
      "What are the risks, and how are revisions handled if they are needed?",
    ],
  },
  {
    slug: "botox-or-dermal-fillers",
    title: "Botox or Dermal Fillers? How the Two Differ",
    excerpt:
      "Relaxing muscle movement and replacing lost volume are different treatments. Here is how to tell which concern you have.",
    category: "face",
    topic: "Non-surgical guide",
    image: { src: "/images/procedures/14.png", alt: "Injectable treatment being given beside the eye" },
    treatment: { label: "Dermal Fillers", href: "/treatments/dermal-fillers" },
    sections: [
      {
        id: "two-treatments",
        heading: "Two injectables, two different jobs",
        paragraphs: [
          "Botulinum toxin (often called Botox) temporarily relaxes the muscles that create expression lines, such as frown lines, forehead creases and crow's feet. Dermal fillers, usually made of hyaluronic acid, add volume or structure where it has been lost or where more definition is wanted.",
          "Because they work in different ways, the right choice depends on what is causing the line or hollow you want to treat.",
        ],
      },
      {
        id: "which-concern",
        heading: "A simple way to think about your concern",
        paragraphs: ["A doctor will examine your face at rest and in movement, but these patterns are a helpful starting point:"],
        bullets: [
          "Lines that appear or deepen when you frown, raise your brows or smile often relate to muscle movement",
          "Lines or folds that are visible even when your face is relaxed may relate to volume loss or skin changes",
          "Hollows under the eyes, flat cheeks or thin lips are usually volume concerns",
          "Many people have a mix of both, so treatments are sometimes combined",
        ],
      },
      {
        id: "what-to-expect",
        heading: "What to expect from each",
        paragraphs: [
          "Botulinum toxin takes effect gradually over the first couple of weeks and wears off over time, so maintenance treatments are planned. Fillers show a change straight away, may swell slightly at first, and are gradually broken down by the body.",
          "Both are medical treatments. They should be given by a qualified practitioner after a consultation that covers your medical history, expectations and possible side effects.",
        ],
      },
    ],
    questions: [
      "Is my concern caused by movement, volume loss or both?",
      "What product will be used, and how long is it expected to last for me?",
      "What side effects should I watch for, and who do I contact if they happen?",
      "How will you keep my result looking natural?",
    ],
  },
  {
    slug: "eyelid-surgery-who-it-suits",
    title: "Eyelid Surgery: Who It Suits and What Recovery Looks Like",
    excerpt:
      "Heavy upper lids, under-eye bags and a tired look have different causes. Learn how blepharoplasty is planned and how healing usually progresses.",
    category: "face",
    topic: "Eyelid surgery guide",
    image: { src: "/images/pages/eyelid-surgery/eyelid-surgery.jpg", alt: "Doctor examining a patient's eye area" },
    treatment: { label: "Eyelid Surgery", href: "/treatments/eyelid-surgery" },
    sections: [
      {
        id: "concerns",
        heading: "Common reasons people ask about eyelid surgery",
        paragraphs: [
          "Blepharoplasty addresses excess skin, puffiness or fat bulges around the eyes. People often describe looking tired even when they are rested, or feeling that heavy upper lids make the eyes look smaller.",
        ],
        bullets: [
          "Hooded or heavy upper eyelids",
          "Bags or fullness under the eyes",
          "Fine, crepey skin on the lids",
          "A tired appearance that does not improve with rest",
        ],
      },
      {
        id: "brow-or-lid",
        heading: "Is it the eyelid or the brow?",
        paragraphs: [
          "Sometimes heaviness above the eye comes from a lowered brow rather than the eyelid itself. In that case, removing eyelid skin alone may not give the expected result. An examination helps decide whether eyelid surgery, a brow lift or a combination is more suitable.",
        ],
      },
      {
        id: "recovery",
        heading: "How recovery usually progresses",
        paragraphs: [
          "Swelling and bruising are normal at first and generally settle over the following weeks. Cold compresses, rest with the head raised and careful eye care are commonly advised. Incisions for the upper lid are placed in the natural crease so that they become less noticeable as they heal.",
        ],
        bullets: [
          "Avoid rubbing the eyes and follow instructions on eye drops or ointment",
          "Ask when you can return to screens, contact lenses and make-up",
          "Wear sunglasses outdoors while healing",
        ],
      },
    ],
    questions: [
      "Is my concern caused by the eyelid, the brow or both?",
      "Will surgery be on the upper lids, the lower lids or both?",
      "Where will the incisions be, and how visible are they likely to be?",
      "Do I need an eye check before surgery?",
    ],
  },
  {
    slug: "how-to-choose-a-skin-treatment-safely",
    title: "How to Choose a Skin Treatment Safely",
    excerpt:
      "A practical checklist for diagnosis, provider qualifications, device choice, realistic outcomes and aftercare before a peel, resurfacing or RF treatment.",
    category: "face",
    topic: "Skin guide",
    image: { src: "/images/pages/body-tightening/facetite.webp", alt: "Gloved hands assessing a patient's facial skin" },
    treatment: { label: "Chemical Peel", href: "/treatments/chemical-peel" },
    sections: [
      {
        id: "diagnosis",
        heading: "Begin with a diagnosis, not a device",
        paragraphs: [
          "Pigmentation, acne scars, open pores, fine lines and dullness can look similar in a mirror but have different causes. Choosing a treatment before the concern is assessed is the most common reason people are disappointed with results.",
          "A consultation should look at your skin type, history of acne or pigmentation, current skincare and any medicines that make skin more sensitive.",
        ],
      },
      {
        id: "options",
        heading: "Common options and what they are for",
        paragraphs: ["Each treatment works at a different depth and suits different concerns:"],
        bullets: [
          "Chemical peels remove damaged surface layers to improve tone, texture and some pigmentation",
          "Microdermabrasion gently exfoliates the surface for smoother, fresher-looking skin",
          "Microneedling RF (such as Morpheus8) works deeper to stimulate collagen for texture and firmness",
          "Laser and energy-based treatments target specific concerns such as hair, pigment or laxity",
        ],
      },
      {
        id: "darker-skin",
        heading: "Extra care for darker and sensitive skin",
        paragraphs: [
          "Indian skin can be more prone to pigmentation after inflammation. Settings, peel strength and preparation should be chosen with this in mind, and a patch test or gentler starting plan may be advised.",
        ],
      },
      {
        id: "aftercare",
        heading: "Aftercare matters as much as the treatment",
        paragraphs: [
          "Most skin treatments make the skin more sensitive to sun for a while. Daily sunscreen, gentle cleansing and avoiding harsh actives until cleared all protect your result. A course of sessions is usually needed, so ask how many are planned and how far apart.",
        ],
      },
    ],
    questions: [
      "What is causing my skin concern?",
      "Which treatment suits my skin type, and why?",
      "How many sessions will I need, and what downtime should I expect?",
      "What aftercare and sun protection will I need?",
    ],
  },

  /* ---------- Body ---------- */
  {
    slug: "liposuction-or-tummy-tuck",
    title: "Liposuction or Tummy Tuck? Fat, Skin and Muscle Explained",
    excerpt:
      "Why stubborn fat, loose skin and separated abdominal muscles are different concerns that may need different approaches.",
    category: "body",
    topic: "Body contouring guide",
    image: { src: "/images/pages/tummy-tuck/tummy-tuck-markings.jpg", alt: "Surgical markings on the abdomen before body contouring" },
    treatment: { label: "Tummy Tuck", href: "/treatments/tummy-tuck" },
    sections: [
      {
        id: "three-concerns",
        heading: "Three different concerns in one area",
        paragraphs: [
          "The abdomen can change shape for several reasons, and each points to a different treatment:",
        ],
        bullets: [
          "Stubborn fat that does not respond to diet and exercise",
          "Loose or overhanging skin, often after pregnancy or weight loss",
          "Separated abdominal muscles that cause the tummy to bulge outward",
        ],
      },
      {
        id: "liposuction",
        heading: "When liposuction may be enough",
        paragraphs: [
          "Liposuction removes localised fat through small incisions. It works best when the skin still has good elasticity and can tighten over the new contour. It is not a weight-loss treatment and does not tighten loose skin or repair muscles.",
        ],
      },
      {
        id: "tummy-tuck",
        heading: "When a tummy tuck may be considered",
        paragraphs: [
          "A tummy tuck (abdominoplasty) removes excess skin and can repair separated muscles. It leaves a longer scar, placed low so it can sit under most clothing, and involves a longer recovery. Liposuction is often combined with it to refine the contour.",
        ],
      },
      {
        id: "planning",
        heading: "Timing and planning",
        paragraphs: [
          "Results last best when your weight is stable. If you plan future pregnancies, discuss timing, as pregnancy can stretch the skin and muscles again. A physical examination is the only reliable way to decide which approach suits you.",
        ],
      },
    ],
    questions: [
      "Is my concern mainly fat, loose skin, muscle separation or a combination?",
      "What scars should I expect with each option?",
      "How long is recovery, and when can I return to work and exercise?",
      "Should I wait until my weight is stable or I have finished having children?",
    ],
  },
  {
    slug: "laser-hair-removal-why-sessions",
    title: "Laser Hair Removal: Why You Need a Course of Sessions",
    excerpt:
      "Hair grows in cycles, so one session is never enough. Here is how to prepare, what sessions feel like and how to care for your skin between them.",
    category: "body",
    topic: "Laser guide",
    image: { src: "/images/pages/laser-hair-removal/underarm-laser.webp", alt: "Laser hair removal being performed on the underarm" },
    treatment: { label: "Laser Hair Removal", href: "/treatments/laser-hair-removal" },
    sections: [
      {
        id: "cycles",
        heading: "Why one session is not enough",
        paragraphs: [
          "Laser energy targets hair that is in its active growth phase. At any time, only some of your hair is in that phase, so sessions are spaced out to catch each hair at the right moment. This is why laser hair removal is planned as a course.",
        ],
      },
      {
        id: "skin-type",
        heading: "Settings are matched to your skin and hair",
        paragraphs: [
          "Skin tone and hair colour affect how the laser should be set. Darker skin needs settings that protect the surrounding skin, while very light, grey or red hair responds less well. A consultation and patch test help set realistic expectations.",
        ],
      },
      {
        id: "preparation",
        heading: "How to prepare and what to avoid",
        paragraphs: ["Simple steps make treatment safer and more effective:"],
        bullets: [
          "Shave the area as advised, but avoid waxing, threading or plucking between sessions",
          "Avoid sun exposure and tanning before and after treatment",
          "Tell the clinic about medicines, recent skin treatments or a history of pigmentation",
          "Use sunscreen on treated areas that are exposed to the sun",
        ],
      },
    ],
    questions: [
      "How many sessions do you expect I will need for this area?",
      "Is my skin and hair type suitable for laser treatment?",
      "What might I feel during a session, and how is discomfort managed?",
      "What should I avoid between sessions?",
    ],
  },
  {
    slug: "fat-grafting-restoring-volume",
    title: "Fat Grafting: Using Your Own Fat to Restore Volume",
    excerpt:
      "How autologous fat transfer works, where it is commonly used, and why the final result takes a few months to show.",
    category: "body",
    topic: "Fat grafting guide",
    image: { src: "/images/procedures/9.png", alt: "Contour markings on the buttocks before fat transfer" },
    treatment: { label: "Fat Grafting", href: "/treatments/fat-grafting" },
    sections: [
      {
        id: "how-it-works",
        heading: "How fat grafting works",
        paragraphs: [
          "Fat grafting moves fat from an area where you have extra, such as the abdomen or thighs, to an area that needs volume. The fat is harvested with gentle liposuction, purified, and then injected in small amounts so it can establish a blood supply.",
        ],
      },
      {
        id: "uses",
        heading: "Where it is commonly used",
        bullets: [
          "Restoring volume to the face, such as hollow cheeks or under-eye areas",
          "Shaping the buttocks, as in a Brazilian butt lift",
          "Improving contour irregularities after previous surgery",
        ],
        paragraphs: ["Because it uses your own tissue, fat grafting can give a soft, natural feel."],
      },
      {
        id: "results",
        heading: "Why the result takes time",
        paragraphs: [
          "Not all transferred fat survives. Some is naturally reabsorbed over the first few months, so the early result looks fuller than the final one. More than one session may be advised for larger changes.",
          "You need enough spare fat in a donor area, and a stable weight helps the result last.",
        ],
      },
    ],
    questions: [
      "Do I have enough fat in a suitable donor area?",
      "How much of the transferred fat is likely to remain?",
      "Might I need more than one session?",
      "What recovery should I expect at both the donor and treated areas?",
    ],
  },

  /* ---------- Women ---------- */
  {
    slug: "breast-augmentation-lift-or-reduction",
    title: "Breast Augmentation, Lift or Reduction: Which Fits Your Goal?",
    excerpt:
      "Volume, position and size are different concerns. Understand the three main breast procedures and what to discuss at your consultation.",
    category: "women",
    topic: "Breast surgery guide",
    image: { src: "/images/procedures/12.png", alt: "Woman in a sports top, representing breast and body contouring" },
    treatment: { label: "Female Breast Surgery", href: "/treatments/female-breast-surgery" },
    sections: [
      {
        id: "three-procedures",
        heading: "Three procedures for three different concerns",
        paragraphs: ["Most breast concerns fall into one of these groups:"],
        bullets: [
          "Augmentation adds volume, using implants or your own fat",
          "A lift (mastopexy) raises and reshapes breasts that have sagged",
          "A reduction removes tissue to relieve the weight and discomfort of large breasts",
        ],
      },
      {
        id: "combinations",
        heading: "When procedures are combined",
        paragraphs: [
          "After pregnancy or weight loss, breasts can lose both volume and position. In that case an implant alone may not lift the breast, and a lift alone may not restore fullness, so the two are sometimes combined.",
        ],
      },
      {
        id: "implant-choices",
        heading: "Choices to make together",
        paragraphs: [
          "For augmentation, implant size, shape, type and placement are decided with you based on your frame, chest measurements and goals. Bringing a clear idea of the look you want helps, but measurements guide what will suit your body.",
        ],
      },
      {
        id: "recovery",
        heading: "Recovery and long-term care",
        paragraphs: [
          "A support garment and limits on lifting and exercise form part of recovery. Breast tissue changes with age, weight and pregnancy, so it is worth discussing long-term follow-up and how future changes might be managed.",
        ],
      },
    ],
    questions: [
      "Is my concern volume, position, size or a combination?",
      "Which implant options suit my frame, and what are their trade-offs?",
      "Where will the scars be?",
      "How might pregnancy or breastfeeding affect my result in future?",
    ],
  },
  {
    slug: "preparing-for-an-intimate-surgery-consultation",
    title: "Preparing for a Confidential Intimate Surgery Consultation",
    excerpt:
      "What to expect from a private consultation about vaginal tightening, vaginoplasty or hymenoplasty, and how to make the most of it.",
    category: "women",
    topic: "Intimate surgery guide",
    image: { src: "/images/pages/hymenoplasty/hymenoplasty.jpg", alt: "Woman holding a flower, representing confidential intimate care" },
    treatment: { label: "Vaginal Tightening", href: "/treatments/vaginal-tightening" },
    sections: [
      {
        id: "privacy",
        heading: "Your privacy comes first",
        paragraphs: [
          "Intimate concerns are personal, and many women wait a long time before asking for help. A consultation is a confidential conversation. You can share as much or as little as you are comfortable with, and you can ask for a female staff member to be present.",
        ],
      },
      {
        id: "describe",
        heading: "Describe the concern in your own words",
        paragraphs: [
          "Concerns after childbirth or with age can include looseness, reduced sensation, discomfort or changes in appearance. Explaining how the concern affects your daily life or relationships helps the doctor understand whether surgical or non-surgical options are worth discussing.",
        ],
      },
      {
        id: "options",
        heading: "Options that may be discussed",
        bullets: [
          "Vaginal tightening to improve tone and support",
          "Vaginoplasty or vaginal rejuvenation, which may include labiaplasty",
          "Hymenoplasty for women who request hymen restoration",
        ],
        paragraphs: ["Not every concern needs surgery. The right plan depends on your symptoms, health and goals."],
      },
      {
        id: "recovery",
        heading: "Planning recovery",
        paragraphs: [
          "Many intimate procedures are performed as day care. Recovery usually includes a period of rest from sexual activity and certain exercise, so it helps to plan around work and family commitments.",
        ],
      },
    ],
    questions: [
      "Which options suit my specific concern?",
      "Can the procedure be done under local anaesthesia, and is it day care?",
      "How long should I avoid sexual activity and exercise?",
      "How is my privacy protected before, during and after treatment?",
    ],
  },
  {
    slug: "body-surgery-after-pregnancy",
    title: "Planning Body Surgery After Pregnancy",
    excerpt:
      "Changes to the tummy and breasts after pregnancy are common. Here is how to think about timing, combined procedures and recovery with young children.",
    category: "women",
    topic: "Post-pregnancy guide",
    image: { src: "/images/pages/body-tightening/bodytite.webp", alt: "Illustration of a contoured body silhouette" },
    treatment: { label: "Tummy Tuck", href: "/treatments/tummy-tuck" },
    sections: [
      {
        id: "changes",
        heading: "Common changes after pregnancy",
        paragraphs: [
          "Pregnancy can stretch the skin and abdominal muscles and change breast volume and position. For some women these changes settle with time and exercise; for others, loose skin, a persistent bulge or deflated breasts remain.",
        ],
      },
      {
        id: "timing",
        heading: "Timing matters",
        paragraphs: ["A few general principles help with planning:"],
        bullets: [
          "Allow your body time to recover after delivery and after breastfeeding ends",
          "Aim for a stable weight before surgery",
          "If you plan more pregnancies, discuss whether to wait, as a future pregnancy can change your result",
        ],
      },
      {
        id: "combined",
        heading: "Combining procedures",
        paragraphs: [
          "A tummy tuck, liposuction and breast surgery are sometimes planned together so that recovery happens once. Whether this is suitable depends on your health and the extent of surgery, and some women prefer to stage procedures.",
        ],
      },
      {
        id: "support",
        heading: "Arrange support at home",
        paragraphs: [
          "Lifting is restricted for a period after abdominal and breast surgery. If you have young children, plan for help with lifting and care during the early weeks of recovery.",
        ],
      },
    ],
    questions: [
      "How long after pregnancy and breastfeeding should I wait?",
      "Would combining procedures be safe for me, or should they be staged?",
      "How would a future pregnancy affect my result?",
      "How long will I need help with lifting and childcare?",
    ],
  },

  /* ---------- Men ---------- */
  {
    slug: "gynecomastia-surgery-cost-factors",
    title: "What Determines Gynecomastia Surgery Cost?",
    excerpt:
      "Why the grade of gynecomastia, gland versus fat, loose skin, anaesthesia and follow-up all affect an individual estimate.",
    category: "men",
    topic: "Gynecomastia guide",
    image: { src: "/images/procedures/11.png", alt: "Defined, flat male chest contour" },
    treatment: { label: "Gynecomastia", href: "/treatments/gynecomastia" },
    sections: [
      {
        id: "why-it-varies",
        heading: "Why there is no single price",
        paragraphs: [
          "Gynecomastia surgery is planned around your chest, so an accurate estimate is only possible after an examination. Two people with a similar-looking chest can need quite different procedures.",
        ],
      },
      {
        id: "factors",
        heading: "The main factors that affect the plan",
        bullets: [
          "Whether the fullness is mostly fat, firm gland tissue or both",
          "The grade of gynecomastia and whether there is loose or excess skin",
          "Whether liposuction alone is enough or gland excision is needed",
          "The type of anaesthesia and whether it is day care",
          "Compression garments, follow-up visits and aftercare",
        ],
        paragraphs: [],
      },
      {
        id: "causes",
        heading: "Checking the cause first",
        paragraphs: [
          "Enlarged male breasts can be linked to hormones, certain medicines, weight changes or other medical conditions. A doctor may ask about your history or suggest tests before surgery, so that any underlying cause is addressed.",
        ],
      },
      {
        id: "comparing",
        heading: "Comparing quotes sensibly",
        paragraphs: [
          "When comparing clinics, check what is included: the surgeon's qualifications, facility, anaesthesia, garments and follow-up. A lower quote that leaves out essential parts of care may not be the better choice.",
        ],
      },
    ],
    questions: [
      "Is my chest fullness mainly fat, gland or both?",
      "Will I need gland excision or skin removal as well as liposuction?",
      "What exactly is included in the estimate?",
      "How long will I wear a compression garment?",
    ],
  },
  {
    slug: "planning-a-natural-looking-hairline",
    title: "Planning a Natural-Looking Hairline",
    excerpt:
      "Donor supply, future hair loss and graft placement all shape a hair transplant plan that still looks right in the years ahead.",
    category: "men",
    topic: "Hair restoration guide",
    image: { src: "/images/pages/hair-transplant/01-close-up-view-of-plastic.jpg", alt: "Surgeon implanting grafts along a patient's hairline" },
    treatment: { label: "Hair Transplant", href: "/treatments/hair-transplant" },
    sections: [
      {
        id: "donor",
        heading: "Your donor supply sets the limits",
        paragraphs: [
          "Hair transplants move follicles from the back and sides of the scalp, where hair is usually more resistant to thinning, to areas of loss. The number of grafts that can be safely taken is limited, so every plan has to balance density in one area against coverage elsewhere.",
        ],
      },
      {
        id: "future-loss",
        heading: "Planning for future hair loss",
        paragraphs: [
          "Pattern hair loss often continues after a transplant. A hairline that looks right at 25 may look out of place later if surrounding hair thins. A good plan considers your age, family history and pattern of loss, and may include medical treatment to protect existing hair.",
        ],
      },
      {
        id: "design",
        heading: "What makes a hairline look natural",
        bullets: [
          "A slightly irregular, softly graded front edge rather than a straight line",
          "Single-hair grafts at the front and denser grafts behind",
          "Hairs placed at the angle and direction of natural growth",
          "A height and shape that suit your face and age",
        ],
        paragraphs: [],
      },
      {
        id: "timeline",
        heading: "Results develop gradually",
        paragraphs: [
          "Transplanted hairs often shed in the first weeks before new growth begins. Growth then develops over several months, so patience is part of the process.",
        ],
      },
    ],
    questions: [
      "How many grafts can my donor area safely provide?",
      "How have you allowed for future hair loss in my plan?",
      "Which technique do you recommend for me, and why?",
      "When should I expect to see new growth?",
    ],
  },
  {
    slug: "is-six-pack-abs-surgery-right-for-you",
    title: "Is 6-Pack Abs Surgery Right for You?",
    excerpt:
      "Abdominal etching can sharpen definition, but it works best with the right starting point. Here is who tends to be a good candidate.",
    category: "men",
    topic: "Body contouring guide",
    image: { src: "/images/procedures/8.png", alt: "Defined abdominal muscles" },
    treatment: { label: "6-Pack Abs Surgery", href: "/treatments/six-pack-abs" },
    sections: [
      {
        id: "what-it-is",
        heading: "What abdominal etching does",
        paragraphs: [
          "6-pack abs surgery uses targeted liposuction to remove fat in a pattern that highlights the natural lines of the abdominal muscles. It enhances definition that is already partly there; it does not build muscle.",
        ],
      },
      {
        id: "candidates",
        heading: "Who tends to be a good candidate",
        bullets: [
          "People who are close to their ideal weight with a thin layer of stubborn abdominal fat",
          "Good underlying muscle tone from regular exercise",
          "Skin with good elasticity",
          "Realistic expectations and a commitment to keeping fit afterwards",
        ],
        paragraphs: [],
      },
      {
        id: "maintaining",
        heading: "Maintaining the result",
        paragraphs: [
          "Weight gain can blur the definition, so the result lasts best with a stable weight and an active lifestyle. Compression garments and a gradual return to exercise are part of recovery, and definition becomes clearer as swelling settles.",
        ],
      },
    ],
    questions: [
      "Is my body fat level and muscle tone suitable for etching?",
      "How natural will the definition look for my build?",
      "How long until I can return to the gym?",
      "What happens to the result if my weight changes?",
    ],
  },
];
