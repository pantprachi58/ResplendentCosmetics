import type { Metadata } from "next";
import Breadcrumb from "@/components/treatment/Breadcrumb";
import TreatmentHero from "@/components/treatment/TreatmentHero";
import TreatmentOverview from "@/components/treatment/TreatmentOverview";
import ProcessSteps from "@/components/treatment/ProcessSteps";
import CardGrid from "@/components/treatment/CardGrid";
import FeatureBand from "@/components/treatment/FeatureBand";
import CaseGallery from "@/components/treatment/CaseGallery";
import CalloutBanner from "@/components/treatment/CalloutBanner";
import FaqAccordion from "@/components/treatment/FaqAccordion";
import ConsultationForm from "@/components/treatment/ConsultationForm";
import CtaBand from "@/components/treatment/CtaBand";
import {
  hydrafacial as page,
  hydrafacialBoosters,
  hydrafacialCharter,
  hydrafacialForm,
} from "@/data/treatments/hydrafacial";
import { treatmentsCrumb } from "@/data/treatments/shared";
import ui from "@/components/shared/ui.module.css";

export const metadata: Metadata = {
  title: page.metaTitle,
  description: page.metaDescription,
};

export default function HydrafacialPage() {
  return (
    <main className={ui.page}>
      <Breadcrumb current={page.hero.breadcrumb} trail={treatmentsCrumb} status={page.hero.status} />
      <TreatmentHero data={page.hero} />
      <TreatmentOverview data={page.overview} />
      <ProcessSteps data={page.process} />
      <CardGrid data={hydrafacialBoosters} tone="dark" />
      <CaseGallery data={page.cases} />
      <FeatureBand data={page.feature} />
      <CalloutBanner data={hydrafacialCharter} />
      <FaqAccordion data={page.faq} tone="ivory" />
      <ConsultationForm data={hydrafacialForm} />
      <CtaBand data={page.cta} />
    </main>
  );
}
