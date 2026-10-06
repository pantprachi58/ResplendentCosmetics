import type { Metadata } from "next";
import Breadcrumb from "@/components/treatment/Breadcrumb";
import TreatmentHero from "@/components/treatment/TreatmentHero";
import CardGrid from "@/components/treatment/CardGrid";
import TreatmentOverview from "@/components/treatment/TreatmentOverview";
import CalloutBanner from "@/components/treatment/CalloutBanner";
import VideoGallery from "@/components/treatment/VideoGallery";
import FaqAccordion from "@/components/treatment/FaqAccordion";
import CtaBand from "@/components/treatment/CtaBand";
import {
  lipAugmentationBenefits,
  lipAugmentationCost,
  lipAugmentationCta,
  lipAugmentationFaq,
  lipAugmentationHero,
  lipAugmentationMeta,
  lipAugmentationTypes,
  lipAugmentationVideos,
} from "@/data/treatments/lip-augmentation";
import { treatmentsCrumb } from "@/data/treatments/shared";
import ui from "@/components/shared/ui.module.css";

export const metadata: Metadata = {
  title: lipAugmentationMeta.title,
  description: lipAugmentationMeta.description,
};

export default function LipAugmentationPage() {
  return (
    <main className={ui.page}>
      <Breadcrumb current={lipAugmentationHero.breadcrumb} trail={treatmentsCrumb} />
      <TreatmentHero data={lipAugmentationHero} />
      <TreatmentOverview data={lipAugmentationBenefits} />
      <CardGrid data={lipAugmentationTypes} tone="ivory" />
      <CalloutBanner data={lipAugmentationCost} />
      <VideoGallery data={lipAugmentationVideos} tone="ivory" />
      <FaqAccordion data={lipAugmentationFaq} />
      <CtaBand data={lipAugmentationCta} />
    </main>
  );
}
