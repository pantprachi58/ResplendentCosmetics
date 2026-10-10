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
  otoplastyAftercare,
  otoplastyCta,
  otoplastyFaq,
  otoplastyHero,
  otoplastyIndications,
  otoplastyMeta,
  otoplastyProcess,
} from "@/data/treatments/otoplasty";
import { treatmentsCrumb } from "@/data/treatments/shared";
import { beforeAfter } from "@/data/treatments/beforeAfter";
import ui from "@/components/shared/ui.module.css";

export const metadata: Metadata = {
  title: otoplastyMeta.title,
  description: otoplastyMeta.description,
};

export default function OtoplastyPage() {
  return (
    <main className={ui.page}>
      <Breadcrumb current={otoplastyHero.breadcrumb} trail={treatmentsCrumb} />
      <TreatmentHero data={otoplastyHero} />
      <BeforeAfter data={beforeAfter.otoplasty} />
      <CardGrid data={otoplastyIndications} />
      <ProcessSteps data={otoplastyProcess} />
      <CalloutBanner data={otoplastyAftercare} />
      <FaqAccordion id="faq" data={otoplastyFaq} tone="ivory" />
      <CtaBand data={otoplastyCta} />
    </main>
  );
}
