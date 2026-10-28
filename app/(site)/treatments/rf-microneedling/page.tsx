import Breadcrumb from "@/components/treatment/Breadcrumb";
import TreatmentHero from "@/components/treatment/TreatmentHero";
import BeforeAfter from "@/components/treatment/BeforeAfter";
import CardGrid from "@/components/treatment/CardGrid";
import CalloutBanner from "@/components/treatment/CalloutBanner";
import FaqAccordion from "@/components/treatment/FaqAccordion";
import CtaBand from "@/components/treatment/CtaBand";
import {
  rfMicroneedlingConcerns,
  rfMicroneedlingCta,
  rfMicroneedlingFaq,
  rfMicroneedlingHero,
  rfMicroneedlingMeta,
  rfMicroneedlingPlan,
} from "@/data/treatments/rf-microneedling";
import { treatmentsCrumb } from "@/data/treatments/shared";
import { beforeAfter } from "@/data/treatments/beforeAfter";
import ui from "@/components/shared/ui.module.css";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: rfMicroneedlingMeta.title,
  description: rfMicroneedlingMeta.description,
  path: "/treatments/rf-microneedling",
  image: rfMicroneedlingHero.image,
});

export default function RfMicroneedlingPage() {
  return (
    <main className={ui.page}>
      <Breadcrumb current={rfMicroneedlingHero.breadcrumb} trail={treatmentsCrumb} />
      <TreatmentHero data={rfMicroneedlingHero} />
      <BeforeAfter data={beforeAfter["rf-microneedling"]} />
      <CardGrid data={rfMicroneedlingConcerns} />
      <CalloutBanner data={rfMicroneedlingPlan} />
      <FaqAccordion data={rfMicroneedlingFaq} tone="ivory" />
      <CtaBand data={rfMicroneedlingCta} />
    </main>
  );
}
