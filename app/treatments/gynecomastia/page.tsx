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
  gynecomastiaBenefits,
  gynecomastiaCandidates,
  gynecomastiaCta,
  gynecomastiaFaq,
  gynecomastiaHero,
  gynecomastiaMeta,
  gynecomastiaProcess,
  gynecomastiaVideos,
} from "@/data/treatments/gynecomastia";
import { treatmentsCrumb } from "@/data/treatments/shared";
import { beforeAfter } from "@/data/treatments/beforeAfter";
import ui from "@/components/shared/ui.module.css";

export const metadata: Metadata = {
  title: gynecomastiaMeta.title,
  description: gynecomastiaMeta.description,
};

export default function GynecomastiaPage() {
  return (
    <main className={ui.page}>
      <Breadcrumb current={gynecomastiaHero.breadcrumb} trail={treatmentsCrumb} />
      <TreatmentHero data={gynecomastiaHero} />
      <BeforeAfter data={beforeAfter.gynecomastia} />
      <CardGrid data={gynecomastiaBenefits} />
      <ProcessSteps data={gynecomastiaProcess} />
      <CalloutBanner data={gynecomastiaCandidates} />
      <VideoGallery data={gynecomastiaVideos} tone="ivory" />
      <FaqAccordion data={gynecomastiaFaq} />
      <CtaBand data={gynecomastiaCta} />
    </main>
  );
}
