import type { Metadata } from "next";
import Breadcrumb from "@/components/treatment/Breadcrumb";
import TreatmentHero from "@/components/treatment/TreatmentHero";
import CardGrid from "@/components/treatment/CardGrid";
import ProcessSteps from "@/components/treatment/ProcessSteps";
import CalloutBanner from "@/components/treatment/CalloutBanner";
import VideoGallery from "@/components/treatment/VideoGallery";
import FaqAccordion from "@/components/treatment/FaqAccordion";
import CtaBand from "@/components/treatment/CtaBand";
import {
  vaginoplastyAftercare,
  vaginoplastyComponents,
  vaginoplastyCta,
  vaginoplastyFaq,
  vaginoplastyHero,
  vaginoplastyMeta,
  vaginoplastyProcess,
  vaginoplastyVideos,
} from "@/data/treatments/vaginoplasty";
import { treatmentsCrumb } from "@/data/treatments/shared";
import ui from "@/components/shared/ui.module.css";

export const metadata: Metadata = {
  title: vaginoplastyMeta.title,
  description: vaginoplastyMeta.description,
};

export default function VaginoplastyPage() {
  return (
    <main className={ui.page}>
      <Breadcrumb current={vaginoplastyHero.breadcrumb} trail={treatmentsCrumb} />
      <TreatmentHero data={vaginoplastyHero} />
      <CardGrid data={vaginoplastyComponents} />
      <ProcessSteps data={vaginoplastyProcess} />
      <CalloutBanner data={vaginoplastyAftercare} />
      <VideoGallery data={vaginoplastyVideos} tone="ivory" />
      <FaqAccordion data={vaginoplastyFaq} />
      <CtaBand data={vaginoplastyCta} />
    </main>
  );
}
