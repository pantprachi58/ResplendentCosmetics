import type { Metadata } from "next";
import Breadcrumb from "@/components/treatment/Breadcrumb";
import TreatmentHero from "@/components/treatment/TreatmentHero";
import BeforeAfter from "@/components/treatment/BeforeAfter";
import TreatmentOverview from "@/components/treatment/TreatmentOverview";
import CardGrid from "@/components/treatment/CardGrid";
import ProcessSteps from "@/components/treatment/ProcessSteps";
import CalloutBanner from "@/components/treatment/CalloutBanner";
import VideoGallery from "@/components/treatment/VideoGallery";
import FaqAccordion from "@/components/treatment/FaqAccordion";
import CtaBand from "@/components/treatment/CtaBand";
import {
  earLobeRepairCare,
  earLobeRepairCauses,
  earLobeRepairCta,
  earLobeRepairFaq,
  earLobeRepairHero,
  earLobeRepairMeta,
  earLobeRepairOverview,
  earLobeRepairProcess,
  earLobeRepairVideos,
} from "@/data/treatments/ear-lobe-repair";
import { treatmentsCrumb } from "@/data/treatments/shared";
import { beforeAfter } from "@/data/treatments/beforeAfter";
import ui from "@/components/shared/ui.module.css";

export const metadata: Metadata = {
  title: earLobeRepairMeta.title,
  description: earLobeRepairMeta.description,
};

export default function EarLobeRepairPage() {
  return (
    <main className={ui.page}>
      <Breadcrumb current={earLobeRepairHero.breadcrumb} trail={treatmentsCrumb} />
      <TreatmentHero data={earLobeRepairHero} />
      <BeforeAfter data={beforeAfter["ear-lobe-repair"]} />
      <TreatmentOverview data={earLobeRepairOverview} />
      <ProcessSteps data={earLobeRepairProcess} />
      <CardGrid data={earLobeRepairCauses} />
      <CalloutBanner data={earLobeRepairCare} />
      <VideoGallery data={earLobeRepairVideos} tone="ivory" />
      <FaqAccordion data={earLobeRepairFaq} />
      <CtaBand data={earLobeRepairCta} />
    </main>
  );
}
