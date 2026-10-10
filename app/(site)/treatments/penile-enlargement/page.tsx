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
  penileEnlargementAftercare,
  penileEnlargementCta,
  penileEnlargementFaq,
  penileEnlargementHero,
  penileEnlargementMeta,
  penileEnlargementProcess,
  penileEnlargementTypes,
  penileEnlargementVideos,
} from "@/data/treatments/penile-enlargement";
import { treatmentsCrumb } from "@/data/treatments/shared";
import { beforeAfter } from "@/data/treatments/beforeAfter";
import ui from "@/components/shared/ui.module.css";

export const metadata: Metadata = {
  title: penileEnlargementMeta.title,
  description: penileEnlargementMeta.description,
};

export default function PenileEnlargementPage() {
  return (
    <main className={ui.page}>
      <Breadcrumb current={penileEnlargementHero.breadcrumb} trail={treatmentsCrumb} />
      <TreatmentHero data={penileEnlargementHero} />
      <BeforeAfter data={beforeAfter["penile-enlargement"]} />
      <CardGrid data={penileEnlargementTypes} />
      <ProcessSteps data={penileEnlargementProcess} />
      <CalloutBanner data={penileEnlargementAftercare} />
      <VideoGallery data={penileEnlargementVideos} tone="ivory" />
      <FaqAccordion data={penileEnlargementFaq} />
      <CtaBand data={penileEnlargementCta} />
    </main>
  );
}
