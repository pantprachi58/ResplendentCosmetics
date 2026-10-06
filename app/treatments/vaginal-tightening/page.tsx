import type { Metadata } from "next";
import Breadcrumb from "@/components/treatment/Breadcrumb";
import TreatmentHero from "@/components/treatment/TreatmentHero";
import CardGrid from "@/components/treatment/CardGrid";
import ProcessSteps from "@/components/treatment/ProcessSteps";
import CalloutBanner from "@/components/treatment/CalloutBanner";
import FaqAccordion from "@/components/treatment/FaqAccordion";
import CtaBand from "@/components/treatment/CtaBand";
import {
  vaginalTighteningBenefits,
  vaginalTighteningCallout,
  vaginalTighteningCta,
  vaginalTighteningFaq,
  vaginalTighteningHero,
  vaginalTighteningMeta,
  vaginalTighteningProcess,
} from "@/data/treatments/vaginal-tightening";
import { treatmentsCrumb } from "@/data/treatments/shared";
import ui from "@/components/shared/ui.module.css";

export const metadata: Metadata = {
  title: vaginalTighteningMeta.title,
  description: vaginalTighteningMeta.description,
};

export default function VaginalTighteningPage() {
  return (
    <main className={ui.page}>
      <Breadcrumb current={vaginalTighteningHero.breadcrumb} trail={treatmentsCrumb} />
      <TreatmentHero data={vaginalTighteningHero} />
      <CardGrid data={vaginalTighteningBenefits} />
      <ProcessSteps data={vaginalTighteningProcess} />
      <CalloutBanner data={vaginalTighteningCallout} />
      <FaqAccordion id="faq" data={vaginalTighteningFaq} tone="ivory" />
      <CtaBand data={vaginalTighteningCta} />
    </main>
  );
}
