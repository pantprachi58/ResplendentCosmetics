import type { Metadata } from "next";
import Breadcrumb from "@/components/treatment/Breadcrumb";
import TreatmentHero from "@/components/treatment/TreatmentHero";
import BeforeAfter from "@/components/treatment/BeforeAfter";
import CardGrid from "@/components/treatment/CardGrid";
import ProcessSteps from "@/components/treatment/ProcessSteps";
import CalloutBanner from "@/components/treatment/CalloutBanner";
import FaqAccordion from "@/components/treatment/FaqAccordion";
import CtaBand from "@/components/treatment/CtaBand";
import {
  microdermabrasionAftercare,
  microdermabrasionConcerns,
  microdermabrasionCta,
  microdermabrasionFaq,
  microdermabrasionHero,
  microdermabrasionMeta,
  microdermabrasionProcess,
} from "@/data/treatments/microdermabrasion";
import { treatmentsCrumb } from "@/data/treatments/shared";
import { beforeAfter } from "@/data/treatments/beforeAfter";
import ui from "@/components/shared/ui.module.css";

export const metadata: Metadata = {
  title: microdermabrasionMeta.title,
  description: microdermabrasionMeta.description,
};

export default function MicrodermabrasionPage() {
  return (
    <main className={ui.page}>
      <Breadcrumb current={microdermabrasionHero.breadcrumb} trail={treatmentsCrumb} />
      <TreatmentHero data={microdermabrasionHero} />
      <BeforeAfter data={beforeAfter.microdermabrasion} />
      <CardGrid data={microdermabrasionConcerns} />
      <ProcessSteps data={microdermabrasionProcess} />
      <CalloutBanner data={microdermabrasionAftercare} />
      <FaqAccordion id="faq" data={microdermabrasionFaq} tone="ivory" />
      <CtaBand data={microdermabrasionCta} />
    </main>
  );
}
