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
  sixPackAbsBenefits,
  sixPackAbsCandidates,
  sixPackAbsCta,
  sixPackAbsFaq,
  sixPackAbsHero,
  sixPackAbsMeta,
  sixPackAbsProcess,
  sixPackAbsVideos,
} from "@/data/treatments/six-pack-abs";
import { treatmentsCrumb } from "@/data/treatments/shared";
import { beforeAfter } from "@/data/treatments/beforeAfter";
import ui from "@/components/shared/ui.module.css";

export const metadata: Metadata = {
  title: sixPackAbsMeta.title,
  description: sixPackAbsMeta.description,
};

export default function SixPackAbsPage() {
  return (
    <main className={ui.page}>
      <Breadcrumb current={sixPackAbsHero.breadcrumb} trail={treatmentsCrumb} />
      <TreatmentHero data={sixPackAbsHero} />
      <BeforeAfter data={beforeAfter["six-pack-abs"]} />
      <CardGrid data={sixPackAbsBenefits} />
      <ProcessSteps data={sixPackAbsProcess} />
      <CalloutBanner data={sixPackAbsCandidates} />
      <VideoGallery data={sixPackAbsVideos} tone="ivory" />
      <FaqAccordion data={sixPackAbsFaq} />
      <CtaBand data={sixPackAbsCta} />
    </main>
  );
}
