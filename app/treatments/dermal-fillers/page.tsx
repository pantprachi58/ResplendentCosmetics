import type { Metadata } from "next";
import Breadcrumb from "@/components/treatment/Breadcrumb";
import TreatmentHero from "@/components/treatment/TreatmentHero";
import MediaCardGrid from "@/components/treatment/MediaCardGrid";
import ProcessSteps from "@/components/treatment/ProcessSteps";
import CalloutBanner from "@/components/treatment/CalloutBanner";
import VideoGallery from "@/components/treatment/VideoGallery";
import FaqAccordion from "@/components/treatment/FaqAccordion";
import CtaBand from "@/components/treatment/CtaBand";
import {
  dermalFillerTypes,
  dermalFillersCost,
  dermalFillersCta,
  dermalFillersFaq,
  dermalFillersHero,
  dermalFillersMeta,
  dermalFillersProcess,
  dermalFillersVideos,
} from "@/data/treatments/dermal-fillers";
import { treatmentsCrumb } from "@/data/treatments/shared";
import ui from "@/components/shared/ui.module.css";

export const metadata: Metadata = {
  title: dermalFillersMeta.title,
  description: dermalFillersMeta.description,
};

export default function DermalFillersPage() {
  return (
    <main className={ui.page}>
      <Breadcrumb current={dermalFillersHero.breadcrumb} trail={treatmentsCrumb} />
      <TreatmentHero data={dermalFillersHero} />
      <MediaCardGrid data={dermalFillerTypes} />
      <ProcessSteps data={dermalFillersProcess} />
      <CalloutBanner data={dermalFillersCost} />
      <VideoGallery data={dermalFillersVideos} tone="ivory" />
      <FaqAccordion data={dermalFillersFaq} />
      <CtaBand data={dermalFillersCta} />
    </main>
  );
}
