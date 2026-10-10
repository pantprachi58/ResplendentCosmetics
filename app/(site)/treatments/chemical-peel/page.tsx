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
  chemicalPeelAftercare,
  chemicalPeelCta,
  chemicalPeelFaq,
  chemicalPeelHero,
  chemicalPeelMeta,
  chemicalPeelProcess,
  chemicalPeelTypes,
} from "@/data/treatments/chemical-peel";
import { treatmentsCrumb } from "@/data/treatments/shared";
import { beforeAfter } from "@/data/treatments/beforeAfter";
import ui from "@/components/shared/ui.module.css";

export const metadata: Metadata = {
  title: chemicalPeelMeta.title,
  description: chemicalPeelMeta.description,
};

export default function ChemicalPeelPage() {
  return (
    <main className={ui.page}>
      <Breadcrumb current={chemicalPeelHero.breadcrumb} trail={treatmentsCrumb} />
      <TreatmentHero data={chemicalPeelHero} />
      <BeforeAfter data={beforeAfter["chemical-peel"]} />
      <CardGrid data={chemicalPeelTypes} />
      <ProcessSteps data={chemicalPeelProcess} />
      <CalloutBanner data={chemicalPeelAftercare} />
      <FaqAccordion data={chemicalPeelFaq} tone="ivory" />
      <CtaBand data={chemicalPeelCta} />
    </main>
  );
}
