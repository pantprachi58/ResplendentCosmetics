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
  dimpleCreationBenefits,
  dimpleCreationCost,
  dimpleCreationCta,
  dimpleCreationFaq,
  dimpleCreationHero,
  dimpleCreationMeta,
  dimpleCreationProcess,
  dimpleCreationVideos,
} from "@/data/treatments/dimple-creation";
import { treatmentsCrumb } from "@/data/treatments/shared";
import { beforeAfter } from "@/data/treatments/beforeAfter";
import ui from "@/components/shared/ui.module.css";

export const metadata: Metadata = {
  title: dimpleCreationMeta.title,
  description: dimpleCreationMeta.description,
};

export default function DimpleCreationPage() {
  return (
    <main className={ui.page}>
      <Breadcrumb current={dimpleCreationHero.breadcrumb} trail={treatmentsCrumb} />
      <TreatmentHero data={dimpleCreationHero} />
      <BeforeAfter data={beforeAfter["dimple-creation"]} />
      <CardGrid data={dimpleCreationBenefits} />
      <ProcessSteps data={dimpleCreationProcess} />
      <CalloutBanner data={dimpleCreationCost} />
      <VideoGallery data={dimpleCreationVideos} tone="ivory" />
      <FaqAccordion data={dimpleCreationFaq} />
      <CtaBand data={dimpleCreationCta} />
    </main>
  );
}
