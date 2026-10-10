import type { Metadata } from "next";
import Breadcrumb from "@/components/treatment/Breadcrumb";
import TreatmentHero from "@/components/treatment/TreatmentHero";
import TreatmentOverview from "@/components/treatment/TreatmentOverview";
import ProcessSteps from "@/components/treatment/ProcessSteps";
import FeatureBand from "@/components/treatment/FeatureBand";
import { JawlineScan } from "@/components/treatment/Diagrams";
import CaseGallery from "@/components/treatment/CaseGallery";
import CardGrid from "@/components/treatment/CardGrid";
import FaqAccordion from "@/components/treatment/FaqAccordion";
import CtaBand from "@/components/treatment/CtaBand";
import { chinJawline as page, chinGovernance } from "@/data/treatments/chin-jawline";
import { treatmentsCrumb } from "@/data/treatments/shared";
import ui from "@/components/shared/ui.module.css";

export const metadata: Metadata = {
  title: page.metaTitle,
  description: page.metaDescription,
};

export default function ChinJawlinePage() {
  return (
    <main className={ui.page}>
      <Breadcrumb current={page.hero.breadcrumb} trail={treatmentsCrumb} status={page.hero.status} />
      <TreatmentHero data={page.hero} />
      <TreatmentOverview data={page.overview} />
      <ProcessSteps data={page.process} />
      <FeatureBand data={page.feature} visual={<JawlineScan />} />
      <CaseGallery data={page.cases} />
      <CardGrid data={chinGovernance} />
      <FaqAccordion data={page.faq} tone="ivory" />
      <CtaBand data={page.cta} />
    </main>
  );
}
