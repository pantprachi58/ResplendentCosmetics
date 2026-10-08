import type { Metadata } from "next";
import Breadcrumb from "@/components/treatment/Breadcrumb";
import TreatmentHero from "@/components/treatment/TreatmentHero";
import BeforeAfter from "@/components/treatment/BeforeAfter";
import ProcessSteps from "@/components/treatment/ProcessSteps";
import CalloutBanner from "@/components/treatment/CalloutBanner";
import FaqAccordion from "@/components/treatment/FaqAccordion";
import CtaBand from "@/components/treatment/CtaBand";
import {
  hymenoplastyCta,
  hymenoplastyFaq,
  hymenoplastyHero,
  hymenoplastyMeta,
  hymenoplastyPrivacy,
  hymenoplastyProcess,
} from "@/data/treatments/hymenoplasty";
import { treatmentsCrumb } from "@/data/treatments/shared";
import { beforeAfter } from "@/data/treatments/beforeAfter";
import ui from "@/components/shared/ui.module.css";

export const metadata: Metadata = {
  title: hymenoplastyMeta.title,
  description: hymenoplastyMeta.description,
};

export default function HymenoplastyPage() {
  return (
    <main className={ui.page}>
      <Breadcrumb current={hymenoplastyHero.breadcrumb} trail={treatmentsCrumb} />
      <TreatmentHero data={hymenoplastyHero} />
      <BeforeAfter data={beforeAfter.hymenoplasty} />
      <CalloutBanner data={hymenoplastyPrivacy} />
      <ProcessSteps data={hymenoplastyProcess} />
      <FaqAccordion id="faq" data={hymenoplastyFaq} />
      <CtaBand data={hymenoplastyCta} />
    </main>
  );
}
