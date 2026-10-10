import type { Metadata } from "next";
import Breadcrumb from "@/components/treatment/Breadcrumb";
import TreatmentHero from "@/components/treatment/TreatmentHero";
import TreatmentOverview from "@/components/treatment/TreatmentOverview";
import ProcessSteps from "@/components/treatment/ProcessSteps";
import FeatureBand from "@/components/treatment/FeatureBand";
import { HairlineScan } from "@/components/treatment/Diagrams";
import CaseGallery from "@/components/treatment/CaseGallery";
import CalloutBanner from "@/components/treatment/CalloutBanner";
import FaqAccordion from "@/components/treatment/FaqAccordion";
import CtaBand from "@/components/treatment/CtaBand";
import { hairTransplant as page, hairExosomeProtocol } from "@/data/treatments/hair-transplant";
import { treatmentsCrumb } from "@/data/treatments/shared";
import ui from "@/components/shared/ui.module.css";

export const metadata: Metadata = {
  title: page.metaTitle,
  description: page.metaDescription,
};

export default function HairTransplantPage() {
  return (
    <main className={ui.page}>
      <Breadcrumb current={page.hero.breadcrumb} trail={treatmentsCrumb} />
      <TreatmentHero data={page.hero} />
      <TreatmentOverview data={page.overview} />
      <ProcessSteps data={page.process} />
      <FeatureBand data={page.feature} visual={<HairlineScan />} />
      <CaseGallery data={page.cases} />
      <CalloutBanner data={hairExosomeProtocol} />
      <FaqAccordion data={page.faq} tone="ivory" />
      <CtaBand data={page.cta} />
    </main>
  );
}
