import type { Metadata } from "next";
import Breadcrumb from "@/components/treatment/Breadcrumb";
import TreatmentHero from "@/components/treatment/TreatmentHero";
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
import ui from "@/components/shared/ui.module.css";

export const metadata: Metadata = {
  title: rfMicroneedlingMeta.title,
  description: rfMicroneedlingMeta.description,
};

export default function RfMicroneedlingPage() {
  return (
    <main className={ui.page}>
      <Breadcrumb current={rfMicroneedlingHero.breadcrumb} trail={treatmentsCrumb} />
      <TreatmentHero data={rfMicroneedlingHero} />
      <CardGrid data={rfMicroneedlingConcerns} />
      <CalloutBanner data={rfMicroneedlingPlan} />
      <FaqAccordion data={rfMicroneedlingFaq} tone="ivory" />
      <CtaBand data={rfMicroneedlingCta} />
    </main>
  );
}
