import type { Metadata } from "next";
import Breadcrumb from "@/components/treatment/Breadcrumb";
import TreatmentHero from "@/components/treatment/TreatmentHero";
import CardGrid from "@/components/treatment/CardGrid";
import FaqAccordion from "@/components/treatment/FaqAccordion";
import CalloutBanner from "@/components/treatment/CalloutBanner";
import MediaCardGrid from "@/components/treatment/MediaCardGrid";
import VideoGallery from "@/components/treatment/VideoGallery";
import CtaBand from "@/components/treatment/CtaBand";
import {
  breastAugmentationFaq,
  breastLiftGuide,
  breastReductionFaq,
  breastSurgeryCta,
  breastSurgeryHero,
  breastSurgeryMeta,
  breastSurgeryProcedures,
  breastSurgeryResults,
  breastSurgeryVideos,
} from "@/data/treatments/female-breast-surgery";
import { treatmentsCrumb } from "@/data/treatments/shared";
import ui from "@/components/shared/ui.module.css";

export const metadata: Metadata = {
  title: breastSurgeryMeta.title,
  description: breastSurgeryMeta.description,
};

export default function BreastSurgeryPage() {
  return (
    <main className={ui.page}>
      <Breadcrumb current={breastSurgeryHero.breadcrumb} trail={treatmentsCrumb} />
      <TreatmentHero data={breastSurgeryHero} />
      <CardGrid data={breastSurgeryProcedures} />
      {/* Section ids match the Women menu deep links */}
      <FaqAccordion id="augmentation" data={breastAugmentationFaq} tone="ivory" />
      <CalloutBanner data={breastLiftGuide} />
      <FaqAccordion id="reduction" data={breastReductionFaq} tone="ivory" />
      <MediaCardGrid data={breastSurgeryResults} />
      <VideoGallery data={breastSurgeryVideos} tone="ivory" />
      <CtaBand data={breastSurgeryCta} />
    </main>
  );
}
