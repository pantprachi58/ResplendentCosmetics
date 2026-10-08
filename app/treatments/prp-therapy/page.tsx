import type { Metadata } from "next";
import Breadcrumb from "@/components/treatment/Breadcrumb";
import TreatmentHero from "@/components/treatment/TreatmentHero";
import BeforeAfter from "@/components/treatment/BeforeAfter";
import CardGrid from "@/components/treatment/CardGrid";
import ProcessSteps from "@/components/treatment/ProcessSteps";
import CalloutBanner from "@/components/treatment/CalloutBanner";
import VideoGallery from "@/components/treatment/VideoGallery";
import FaqAccordion from "@/components/treatment/FaqAccordion";
import CtaBand from "@/components/treatment/CtaBand";
import {
  prpTherapyBenefits,
  prpTherapyCandidates,
  prpTherapyCta,
  prpTherapyFaq,
  prpTherapyHero,
  prpTherapyMeta,
  prpTherapyProcess,
  prpTherapyVideos,
} from "@/data/treatments/prp-therapy";
import { treatmentsCrumb } from "@/data/treatments/shared";
import { beforeAfter } from "@/data/treatments/beforeAfter";
import ui from "@/components/shared/ui.module.css";

export const metadata: Metadata = {
  title: prpTherapyMeta.title,
  description: prpTherapyMeta.description,
};

export default function PrpTherapyPage() {
  return (
    <main className={ui.page}>
      <Breadcrumb current={prpTherapyHero.breadcrumb} trail={treatmentsCrumb} />
      <TreatmentHero data={prpTherapyHero} />
      <BeforeAfter data={beforeAfter["prp-therapy"]} />
      <CardGrid data={prpTherapyBenefits} />
      <ProcessSteps data={prpTherapyProcess} />
      <CalloutBanner data={prpTherapyCandidates} />
      <VideoGallery data={prpTherapyVideos} tone="ivory" />
      <FaqAccordion data={prpTherapyFaq} />
      <CtaBand data={prpTherapyCta} />
    </main>
  );
}
