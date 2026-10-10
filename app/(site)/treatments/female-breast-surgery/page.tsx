import type { Metadata } from "next";
import Breadcrumb from "@/components/treatment/Breadcrumb";
import TreatmentHero from "@/components/treatment/TreatmentHero";
import BeforeAfter from "@/components/treatment/BeforeAfter";
import CardGrid from "@/components/treatment/CardGrid";
import FaqAccordion from "@/components/treatment/FaqAccordion";
import CalloutBanner from "@/components/treatment/CalloutBanner";
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
  breastSurgeryVideos,
} from "@/data/treatments/female-breast-surgery";
import { treatmentsCrumb } from "@/data/treatments/shared";
import { beforeAfter } from "@/data/treatments/beforeAfter";
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
      <BeforeAfter data={beforeAfter["female-breast-surgery"]} />
      <CardGrid data={breastSurgeryProcedures} />
      {/* Section ids match the Women menu deep links */}
      <FaqAccordion id="augmentation" data={breastAugmentationFaq} tone="ivory" />
      <CalloutBanner data={breastLiftGuide} />
      <FaqAccordion id="reduction" data={breastReductionFaq} tone="ivory" />
      <VideoGallery data={breastSurgeryVideos} tone="ivory" />
      <CtaBand data={breastSurgeryCta} />
    </main>
  );
}
