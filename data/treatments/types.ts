export type Cta = {
  label: string;
  href: string;
  /** Trailing Material Symbol */
  icon?: string;
  /** Leading Material Symbol */
  iconLeading?: string;
};

export type ImageRef = {
  src: string;
  alt: string;
};

export type IconText = {
  icon: string;
  title: string;
  text: string;
};

export type SectionHeading = {
  eyebrow: string;
  title: string;
  intro?: string;
};

export type Surgeon = {
  name: string;
  credentials: string;
  role?: string;
  initials?: string;
  image?: string;
  badges?: string[];
  note?: string;
};

export type HeroStat = {
  value: string;
  label: string;
  icon?: string;
};

export type TreatmentHeroData = {
  breadcrumb: string;
  status?: string;
  eyebrow: string;
  title: string;
  /** Rendered after `title` in the brand colour */
  highlight?: string;
  titleSuffix?: string;
  lead: string;
  stats?: HeroStat[];
  pills?: { icon: string; label: string }[];
  primaryCta: Cta;
  secondaryCta?: Cta;
  surgeon?: Surgeon;
  image?: ImageRef & {
    tag?: string;
    captionTitle?: string;
    captionText?: string;
    inset?: ImageRef & { title: string; text: string };
  };
  /** Shown in place of an image when the page has no hero photo */
  card?: {
    eyebrow: string;
    title: string;
    icon: string;
    checklist: string[];
    footLabel: string;
    footValue: string;
  };
};

export type OverviewOption = {
  title: string;
  icon?: string;
  tag?: string;
  subtitle?: string;
  text?: string;
  bullets?: string[];
  facts?: { label: string; value: string }[];
  featured?: boolean;
  muted?: boolean;
};

export type TreatmentOverviewData = SectionHeading & {
  paragraphs?: string[];
  media: ImageRef & {
    tag?: string;
    title: string;
    text: string;
    checklist?: string[];
  };
  options: OverviewOption[];
};

export type ProcessStep = {
  icon: string;
  title: string;
  text: string;
  footLabel?: string;
  footValue: string;
};

export type ProcessData = SectionHeading & {
  steps: ProcessStep[];
};

export type Metric = {
  value: string;
  label: string;
  text?: string;
  icon?: string;
};

export type FeatureBandData = {
  eyebrow: string;
  title: string;
  paragraphs: string[];
  checklist?: string[];
  metrics?: Metric[];
  note?: string;
  cta?: Cta;
  panel?: {
    title: string;
    icon: string;
    text: string;
    items: { title: string; text: string }[];
  };
};

export type CaseStudy = {
  caseId: string;
  title: string;
  text?: string;
  badge?: string;
  image?: ImageRef;
  before?: ImageRef;
  after?: ImageRef & { label: string };
  meta?: [string, string];
};

export type CaseGalleryData = SectionHeading & {
  id: string;
  note: string;
  columns: 2 | 3 | 4;
  cases: CaseStudy[];
};

export type InfoCard = {
  icon: string;
  eyebrow?: string;
  title: string;
  text: string;
  footLabel?: string;
  footValue?: string;
};

export type CardGridData = SectionHeading & {
  id?: string;
  columns: 3 | 4;
  cards: InfoCard[];
  stats?: { value: string; label: string }[];
};

export type CalloutData = {
  id?: string;
  icon: string;
  eyebrow?: string;
  title: string;
  text: string;
  tags?: string[];
  highlights?: IconText[];
  location?: { title: string; text: string };
  cta?: Cta;
  aside?: {
    icon: string;
    title: string;
    subtitle?: string;
    items?: string[];
    text?: string;
    cta?: Cta;
  };
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type FaqData = SectionHeading & {
  items: FaqItem[];
};

export type ConsultationFormData = SectionHeading & {
  id: string;
  contacts: IconText[];
  interestLabel: string;
  interests: string[];
  withDate?: boolean;
  submitLabel: string;
  successMessage: string;
};

export type MediaCard = {
  image: ImageRef;
  title?: string;
  text?: string;
  bullets?: string[];
  footLabel?: string;
  footValue?: string;
};

export type MediaCardGridData = SectionHeading & {
  id?: string;
  columns: 2 | 3 | 4;
  /** "contain" shows the whole photo (e.g. composite before/after shots) instead of cropping */
  fit?: "cover" | "contain";
  /** Portrait suits tall photos such as event shots; landscape is the default */
  aspect?: "landscape" | "portrait";
  note?: string;
  cards: MediaCard[];
};

export type VideoGalleryData = SectionHeading & {
  id?: string;
  /** Optional link shown under the videos, e.g. to the YouTube channel */
  moreLink?: Cta;
  videos: { youtubeId: string; title: string; note?: string }[];
};

export type CtaBandData = {
  eyebrow: string;
  title: string;
  text: string;
  primaryCta: Cta;
  meta?: { icon: string; label: string }[];
};

export type TreatmentPageData = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  hero: TreatmentHeroData;
  overview: TreatmentOverviewData;
  process: ProcessData;
  feature: FeatureBandData;
  cases: CaseGalleryData;
  faq: FaqData;
  cta: CtaBandData;
};
