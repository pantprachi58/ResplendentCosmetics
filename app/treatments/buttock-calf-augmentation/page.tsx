import type { Metadata } from "next";
import Breadcrumb from "@/components/treatment/Breadcrumb";
import TreatmentHero from "@/components/treatment/TreatmentHero";
import BeforeAfter from "@/components/treatment/BeforeAfter";
import CardGrid from "@/components/treatment/CardGrid";
import ProcessSteps from "@/components/treatment/ProcessSteps";
import CalloutBanner from "@/components/treatment/CalloutBanner";
import FaqAccordion from "@/components/treatment/FaqAccordion";
import CtaBand from "@/components/treatment/CtaBand";
import {
  buttockCalfCta,
  buttockCalfFaq,
  buttockCalfHero,
  buttockCalfMeta,
  buttockCalfOptions,
  buttockCalfProcess,
  buttockCalfRecovery,
} from "@/data/treatments/buttock-calf-augmentation";
import { treatmentsCrumb } from "@/data/treatments/shared";
import { beforeAfter } from "@/data/treatments/beforeAfter";
import ui from "@/components/shared/ui.module.css";

export const metadata: Metadata = {
  title: buttockCalfMeta.title,
  description: buttockCalfMeta.description,
};

export default function ButtockCalfAugmentationPage() {
  return (
    <main className={ui.page}>
      <Breadcrumb current={buttockCalfHero.breadcrumb} trail={treatmentsCrumb} />
      <TreatmentHero data={buttockCalfHero} />
      <BeforeAfter data={beforeAfter["buttock-calf-augmentation"]} />
      <CardGrid data={buttockCalfOptions} />
      <ProcessSteps data={buttockCalfProcess} />
      <CalloutBanner data={buttockCalfRecovery} />
      <FaqAccordion id="faq" data={buttockCalfFaq} tone="ivory" />
      <CtaBand data={buttockCalfCta} />
    </main>
  );
}
