import type { Metadata } from "next";
import Breadcrumb from "@/components/treatment/Breadcrumb";
import TreatmentHero from "@/components/treatment/TreatmentHero";
import BeforeAfter from "@/components/treatment/BeforeAfter";
import TreatmentOverview from "@/components/treatment/TreatmentOverview";
import ProcessSteps from "@/components/treatment/ProcessSteps";
import FeatureBand from "@/components/treatment/FeatureBand";
import CaseGallery from "@/components/treatment/CaseGallery";
import FaqAccordion from "@/components/treatment/FaqAccordion";
import CtaBand from "@/components/treatment/CtaBand";
import { liposuction as page } from "@/data/treatments/liposuction";
import { treatmentsCrumb } from "@/data/treatments/shared";
import { beforeAfter } from "@/data/treatments/beforeAfter";
import ui from "@/components/shared/ui.module.css";

export const metadata: Metadata = {
  title: page.metaTitle,
  description: page.metaDescription,
};

export default function LiposuctionPage() {
  return (
    <main className={ui.page}>
      <Breadcrumb current={page.hero.breadcrumb} trail={treatmentsCrumb} status={page.hero.status} />
      <TreatmentHero data={page.hero} />
      <BeforeAfter data={beforeAfter.liposuction} />
      <TreatmentOverview data={page.overview} />
      <ProcessSteps data={page.process} />
      <FeatureBand data={page.feature} />
      <CaseGallery data={page.cases} />
      <FaqAccordion data={page.faq} />
      <CtaBand data={page.cta} />
    </main>
  );
}
