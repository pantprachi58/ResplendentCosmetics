import type { Metadata } from "next";
import Breadcrumb from "@/components/treatment/Breadcrumb";
import TreatmentHero from "@/components/treatment/TreatmentHero";
import BeforeAfter from "@/components/treatment/BeforeAfter";
import TreatmentOverview from "@/components/treatment/TreatmentOverview";
import ProcessSteps from "@/components/treatment/ProcessSteps";
import FeatureBand from "@/components/treatment/FeatureBand";
import CaseGallery from "@/components/treatment/CaseGallery";
import CalloutBanner from "@/components/treatment/CalloutBanner";
import FaqAccordion from "@/components/treatment/FaqAccordion";
import CtaBand from "@/components/treatment/CtaBand";
import { faceNeckLift as page, faceNeckGovernance } from "@/data/treatments/face-neck-lift";
import { treatmentsCrumb } from "@/data/treatments/shared";
import { beforeAfter } from "@/data/treatments/beforeAfter";
import ui from "@/components/shared/ui.module.css";

export const metadata: Metadata = {
  title: page.metaTitle,
  description: page.metaDescription,
};

export default function FaceNeckLiftPage() {
  return (
    <main className={ui.page}>
      <Breadcrumb current={page.hero.breadcrumb} trail={treatmentsCrumb} status={page.hero.status} />
      <TreatmentHero data={page.hero} />
      <BeforeAfter data={beforeAfter["face-neck-lift"]} />
      <TreatmentOverview data={page.overview} />
      <ProcessSteps data={page.process} />
      <FeatureBand data={page.feature} />
      <CaseGallery data={page.cases} />
      <CalloutBanner data={faceNeckGovernance} />
      <FaqAccordion data={page.faq} tone="ivory" />
      <CtaBand data={page.cta} />
    </main>
  );
}
