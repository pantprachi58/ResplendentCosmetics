import type {
  CalloutData,
  CardGridData,
  CtaBandData,
  FaqData,
  ProcessData,
  TreatmentHeroData,
  VideoGalleryData,
} from "./types";
import { bookConsultationCta, clinicMeta } from "./shared";

// Content sourced from https://www.resplendentcosmetics.com/penis-enlargement.php.
// Unsupported medical claims on the live page (surgery "cures" Peyronie's disease and
// dysmorphophobia, "sexual potency", PRP "cures erectile dysfunction", "only proven way")
// are not reproduced.

const IMG = "/images/pages/penile-enlargement";

export const penileEnlargementMeta = {
  title: "Penile Enlargement Surgery in Delhi | Resplendent Aesthetics",
  description:
    "Confidential penile enlargement in Greater Kailash, New Delhi: girth enhancement with fat grafting under local anaesthesia, penile lengthening and implant options.",
};

export const penileEnlargementHero: TreatmentHeroData = {
  breadcrumb: "Penile Enlargement",
  eyebrow: "Men's Intimate Surgery",
  title: "Penile Enlargement ",
  highlight: "Surgery",
  lead: "Concern about penile size is common among men of all ages and can affect confidence and relationships. Penile enlargement procedures increase girth, length or both, and can also address medical conditions such as a buried penis or micropenis.",
  pills: [
    { icon: "lock", label: "100% Confidential" },
    { icon: "vaccines", label: "Girth Enlargement Under Local" },
    { icon: "water_drop", label: "Uses Your Own Fat" },
    { icon: "home", label: "Home the Same Day" },
  ],
  primaryCta: bookConsultationCta("Book a Confidential Consultation"),
  secondaryCta: { label: "Compare Procedure Types", href: "#types" },
  image: {
    src: `${IMG}/penile-enlargement.jpg`,
    alt: "Doctor holding a measuring tape, representing penile enlargement consultation",
    tag: "Men's Health",
    captionTitle: "Private, judgement-free consultation",
    captionText: "Girth, length and combined options",
  },
};

export const penileEnlargementTypes: CardGridData = {
  id: "types",
  eyebrow: "Procedure Types",
  title: "Penile Enlargement Options",
  intro:
    "Girth enlargement and lengthening are separate procedures. Your surgeon recommends the right option—or combination—at a private pre-operative counselling session.",
  columns: 3,
  cards: [
    {
      icon: "water_drop",
      title: "Girth Enhancement",
      text: "Increases the circumference of the penis using fat transfer, grafting or dermal fillers. Fat grafting is done under local anaesthesia.",
      footLabel: "Expected gain",
      footValue: "1.5–3 cm girth",
    },
    {
      icon: "straighten",
      title: "Penile Lengthening",
      text: "The ligament attaching the penis to the pubic bone is surgically released, increasing visible length.",
      footLabel: "Expected gain",
      footValue: "1–3 cm length",
    },
    {
      icon: "medical_services",
      title: "Penile Implants (Prosthesis)",
      text: "Semi-rigid or inflatable devices, mainly used to treat erectile dysfunction. Modern implants can also add some length and thickness.",
      footLabel: "Surgery time",
      footValue: "1–2 hours",
    },
    {
      icon: "join",
      title: "Implant With Lengthening",
      text: "Combines an implant with lengthening for men who have both size concerns and erectile dysfunction.",
    },
    {
      icon: "compress",
      title: "Vacuum Erection Device",
      text: "A non-surgical pump that draws blood into the penis to increase size temporarily and help achieve or maintain an erection.",
      footLabel: "Effect",
      footValue: "Temporary",
    },
    {
      icon: "bloodtype",
      title: "PRP Therapy",
      text: "Platelet-rich plasma from your own blood injected into the penis to support tissue regeneration. It does not enlarge the penis. Takes about an hour.",
      footLabel: "Enlarges?",
      footValue: "No",
    },
  ],
};

export const penileEnlargementProcess: ProcessData = {
  eyebrow: "Girth Enlargement",
  title: "How Fat-Grafting Girth Enlargement Works",
  intro: "The entire procedure is performed under local anaesthesia and takes about 60–90 minutes.",
  steps: [
    {
      icon: "forum",
      title: "Counselling & Tests",
      text: "A detailed history and examination rule out infection; routine pre-surgery tests are done. If infection is found, antibiotics are given and surgery waits 7–10 days.",
      footValue: "Shave Pubic Area Beforehand",
    },
    {
      icon: "vertical_align_top",
      title: "Fat Harvest",
      text: "After you sign the informed consent form, fat is harvested from the abdomen or thigh under local tumescent anaesthesia.",
      footValue: "Local Anaesthesia",
    },
    {
      icon: "science",
      title: "Micro-Droplet Transfer",
      text: "The fat is centrifuged, the penis is fully numbed, and small micro-droplets of fat are placed to increase girth.",
      footValue: "About 60–90 Minutes",
    },
    {
      icon: "self_care",
      title: "Same-Day Discharge",
      text: "A small dressing is applied and you rest for about half an hour before going home with medications. Swelling settles over a few days.",
      footValue: "Bath the Next Day",
    },
  ],
};

export const penileEnlargementAftercare: CalloutData = {
  icon: "healing",
  eyebrow: "Aftercare & Cost",
  title: "Recovery Instructions",
  text: "There is little pain during the procedure apart from some discomfort during infiltration. Mild discomfort and swelling from tissue engorgement settle over a few days, and any discharge from the harvest site settles in 2–3 days.",
  highlights: [
    { icon: "shower", title: "Bath the Next Day", text: "Keep the area clean and mop it dry." },
    { icon: "fitness_center", title: "No Exercise for 8–10 Weeks", text: "No jogging, gym, cycling or stretching." },
    { icon: "block", title: "No Intercourse for 3 Months", text: "No hand manipulation or forceful rubbing of the area either." },
  ],
  aside: {
    icon: "payments",
    title: "Indicative Cost",
    subtitle: "Confirmed at Consultation",
    items: ["INR 60,000–1,00,000"],
    text: "Each case is assessed individually; procedure fees and aftercare are discussed upfront in total privacy.",
    cta: bookConsultationCta("Get a Confidential Quote"),
  },
};

export const penileEnlargementVideos: VideoGalleryData = {
  id: "videos",
  eyebrow: "Watch & Learn",
  title: "Dr. Sukhbir Singh Explains",
  videos: [
    { youtubeId: "KlHGRB7JGJk", title: "Penis Enlargement Treatment Explained", note: "In Hindi" },
    { youtubeId: "UwxEDSrTVn0", title: "Penis Enlargement Surgery Treatment", note: "In Hindi" },
    { youtubeId: "OLuiYQST_rQ", title: "Penile Enlargement, Erectile Dysfunction & Premature Ejaculation", note: "In Hindi" },
    { youtubeId: "icbvalLqE1c", title: "Glanular Enhancement and Penile Lengthening", note: "In Hindi" },
  ],
};

export const penileEnlargementFaq: FaqData = {
  eyebrow: "Common Questions",
  title: "FAQs on Penile Enlargement",
  items: [
    {
      question: "Does penile enlargement increase girth, length or both?",
      answer:
        "Penile enlargement essentially refers to girth enlargement. Lengthening is a separate procedure called penile lengthening surgery. Girth enlargement is usually done under local anaesthesia by placing micro fat droplets, taken from the abdomen or thigh, into the penis.",
    },
    {
      question: "How is girth enlargement done? How much increase can I expect?",
      answer:
        "It is a fat grafting procedure. Fat is harvested from the abdomen or thigh under local tumescent anaesthesia, as planned with Dr. Sukhbir Singh at pre-operative counselling. The fat is centrifuged and, once the penis is completely numbed, small micro-droplets are placed. Girth can increase by 1.5–3 cm depending on tissue laxity and ethnicity.",
    },
    {
      question: "What tests or precautions are needed before surgery?",
      answer:
        "Routine pre-surgery tests are done, a detailed history is taken and the area is examined to rule out infection. If there are signs of infection, antibiotics are prescribed and surgery waits 7–10 days. Shaving the pubic area beforehand is recommended.",
    },
    {
      question: "What happens on the day of surgery?",
      answer:
        "You read and sign an informed consent form, then each step—including positioning—is explained again in the OT suite. The procedure takes about 60–90 minutes. A small dressing is applied, you rest for about half an hour, and you go home with your medications.",
    },
    {
      question: "Is it painful? Are there side effects?",
      answer:
        "There is hardly any pain apart from some discomfort during infiltration, and recovery is quick. The main sensation afterwards is slight discomfort from engorgement of the tissues. Local swelling resolves over a few days, and there may be some discharge from the harvest site for 2–3 days.",
    },
    {
      question: "When can I bathe, and what precautions should I follow?",
      answer:
        "You can bathe the next day; keep the area clean and mop it dry. Avoid heavy exercise such as jogging, gym, cycling and stretching for 8–10 weeks, and avoid sexual intercourse, hand manipulation or forceful rubbing of the area for 3 months.",
    },
  ],
};

export const penileEnlargementCta: CtaBandData = {
  eyebrow: "Men's Intimate Surgery • Greater Kailash Part 1",
  title: "Discuss Your Concerns in Complete Privacy",
  text: "Speak with Dr. Sukhbir Singh confidentially at R-9, Basement, Greater Kailash Part 1, New Delhi - 110048.",
  primaryCta: bookConsultationCta("Book a Confidential Consultation"),
  meta: clinicMeta.slice(0, 1),
};
