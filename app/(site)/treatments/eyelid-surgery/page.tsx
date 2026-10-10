import type { Metadata } from "next";
import Breadcrumb from "@/components/treatment/Breadcrumb";
import TreatmentHero from "@/components/treatment/TreatmentHero";
import BeforeAfter from "@/components/treatment/BeforeAfter";
import CardGrid from "@/components/treatment/CardGrid";
import ProcessSteps from "@/components/treatment/ProcessSteps";
import CaseGallery from "@/components/treatment/CaseGallery";
import CalloutBanner from "@/components/treatment/CalloutBanner";
import VideoGallery from "@/components/treatment/VideoGallery";
import FaqAccordion from "@/components/treatment/FaqAccordion";
import CtaBand from "@/components/treatment/CtaBand";
import {
  eyelidSurgeryBenefits,
  eyelidSurgeryCases,
  eyelidSurgeryCost,
  eyelidSurgeryCta,
  eyelidSurgeryFaq,
  eyelidSurgeryHero,
  eyelidSurgeryMeta,
  eyelidSurgeryProcess,
  eyelidSurgeryTypes,
  eyelidSurgeryVideos,
} from "@/data/treatments/eyelid-surgery";
import { treatmentsCrumb } from "@/data/treatments/shared";
import { beforeAfter } from "@/data/treatments/beforeAfter";
import ui from "@/components/shared/ui.module.css";

export const metadata: Metadata = {
  title: eyelidSurgeryMeta.title,
  description: eyelidSurgeryMeta.description,
};

export default function EyelidSurgeryPage() {
  return (
    <main className={ui.page}>
      <Breadcrumb current={eyelidSurgeryHero.breadcrumb} trail={treatmentsCrumb} />
      <TreatmentHero data={eyelidSurgeryHero} />
      <BeforeAfter data={beforeAfter["eyelid-surgery"]} />
      <CardGrid data={eyelidSurgeryTypes} />
      <ProcessSteps data={eyelidSurgeryProcess} />
      <CardGrid data={eyelidSurgeryBenefits} />
      <CaseGallery data={eyelidSurgeryCases} />
      <CalloutBanner data={eyelidSurgeryCost} />
      <VideoGallery data={eyelidSurgeryVideos} tone="ivory" />
      <FaqAccordion data={eyelidSurgeryFaq} />
      <CtaBand data={eyelidSurgeryCta} />
    </main>
  );
}
