// Content sourced from https://www.resplendentcosmetics.com/achievement.php.
// Citations are normalised (title case, journal names, obvious typos) but otherwise unchanged.

export const RESEARCHGATE_URL = "https://www.researchgate.net/profile/Sukhbir_Singh7";

export type Book = {
  title: string;
};

export type Article = {
  title: string;
  authors: string;
  journal: string;
  year: number;
};

export const books: Book[] = [
  { title: "Utility of Biochemical Markers in the Management of Electrical Burns" },
  { title: "Monograph on PRP in Hair Rejuvenation and Various Hair Disorders" },
];

/** Listed newest first */
export const articles: Article[] = [
  {
    title: "Occupational Lip Asymmetry Managed by Hyaluronic Acid Fillers",
    authors: "Singh S, Chauhan A",
    journal: "Annals of Plastic & Reconstructive Surgery, 3(6): 1047",
    year: 2019,
  },
  {
    title: "Injection Rhinoplasty in Indian Population: A Paradigm Shift",
    authors: "Singh S",
    journal: "Advances in Plastic & Reconstructive Surgery, 3(1): 242–245",
    year: 2019,
  },
  {
    title: "Management of Delayed Skin Necrosis Following Hyaluronic Acid Filler Injection Using Pulsed Hyaluronidase",
    authors: "Chauhan A, Singh S",
    journal: "Journal of Cutaneous and Aesthetic Surgery, 12(3), Jul–Sep",
    year: 2019,
  },
  {
    title: "Practical Tips and Techniques for Injection Rhinoplasty",
    authors: "Singh S",
    journal: "Journal of Cutaneous and Aesthetic Surgery, 12(1), Jan–Mar",
    year: 2019,
  },
  {
    title:
      "Comparative (Quantitative and Qualitative) Analysis of Three Different Reagents for Preparation of Platelet-Rich Plasma for Hair Rejuvenation",
    authors: "Singh S",
    journal: "Journal of Cutaneous and Aesthetic Surgery, 11(3), Jul–Sep",
    year: 2018,
  },
  {
    title: "Role of Platelet-Rich Plasma in Chronic Alopecia Areata: Our Centre Experience",
    authors: "Singh S",
    journal: "Indian Journal of Plastic Surgery, Vol 48, Issue 1: 57–59, Jan–Apr",
    year: 2015,
  },
  {
    title: "Fat Grafting: Novel Approach for Sunken Cheeks",
    authors: "Singh S",
    journal: "The Aestheticians Journal, Vol 4, Issue 5: 38–40, Jun",
    year: 2014,
  },
  {
    title: "Role of Negative Pressure Wound Therapy in Plastic Surgery: Its Basics, Indications and Contraindications",
    authors: "Singh S",
    journal: "Negative Pressure Wound Therapy Journal, Vol 1, Issue 2: 36–38, Apr",
    year: 2014,
  },
  {
    title: "Role of Platelet-Rich Plasma in Primary Cicatricial Alopecia",
    authors: "Singh S",
    journal: "The Aestheticians Journal, Vol 4, Issue 1: 42–44, Feb",
    year: 2014,
  },
  {
    title: "Platelet-Rich Plasma: Protocol for Its Preparation and Its Role in Hair Rejuvenation",
    authors: "Singh S",
    journal: "The Aestheticians Journal, Vol 3, Issue 10: 40–42, Oct",
    year: 2013,
  },
  {
    title: "Dental Impression Compound as an Effective Splint for Maintenance of Ear Elevation in Microtia Reconstruction",
    authors: "Bhandari P S, Singh S",
    journal: "Indian Journal of Plastic Surgery, Vol 46, Issue 3: 518–520, Sep–Dec",
    year: 2013,
  },
  {
    title: "Botulinum Toxin in Hemifacial Spasm: Revisited",
    authors: "Singh S",
    journal: "Indian Journal of Plastic Surgery, Vol 46, Issue 1: 159, Jan–Apr",
    year: 2013,
  },
  {
    title: "A New and Simplified Functional Tendon Transfer for a Dropped Hallux",
    authors: "Singh S, Singh T",
    journal: "Indian Journal of Plastic Surgery, Vol 43, Issue 1: 76–78, Jan–Jun",
    year: 2010,
  },
  {
    title: "Foreign Body in the Common Bile Duct: Defying Nature",
    authors: "Singh K B, Premkumar B, Sasikumar M, Singh S, et al.",
    journal: "Sri Ramachandra Journal of Medicine, Vol 1, Issue 1: 43–44, Sep",
    year: 2006,
  },
];
