import type { Metadata } from "next";
import Breadcrumb from "@/components/treatment/Breadcrumb";
import TreatmentHero from "@/components/treatment/TreatmentHero";
import TreatmentOverview from "@/components/treatment/TreatmentOverview";
import FeatureBand from "@/components/treatment/FeatureBand";
import { NasalProfileScan } from "@/components/treatment/Diagrams";
import ProcessSteps from "@/components/treatment/ProcessSteps";
import CaseGallery from "@/components/treatment/CaseGallery";
import CalloutBanner from "@/components/treatment/CalloutBanner";
import FaqAccordion from "@/components/treatment/FaqAccordion";
import CtaBand from "@/components/treatment/CtaBand";
import { rhinoplasty as page, rhinoplastyAirway } from "@/data/treatments/rhinoplasty";
import { treatmentsCrumb } from "@/data/treatments/shared";
import ui from "@/components/shared/ui.module.css";

export const metadata: Metadata = {
  title: page.metaTitle,
  description: page.metaDescription,
};

export default function RhinoplastyPage() {
  return (
    <main className={ui.page}>
      <Breadcrumb current={page.hero.breadcrumb} trail={treatmentsCrumb} />
      <TreatmentHero data={page.hero} />
      <TreatmentOverview data={page.overview} />
      <FeatureBand id="simulation-section" data={page.feature} visual={<NasalProfileScan />} />
      <ProcessSteps data={page.process} />
      <CaseGallery data={page.cases} />
      <CalloutBanner data={rhinoplastyAirway} />
      <FaqAccordion data={page.faq} tone="ivory" />
      <CtaBand data={page.cta} />
    </main>
  );
}
