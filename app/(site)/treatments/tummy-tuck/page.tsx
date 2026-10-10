import type { Metadata } from "next";
import Breadcrumb from "@/components/treatment/Breadcrumb";
import TreatmentHero from "@/components/treatment/TreatmentHero";
import BeforeAfter from "@/components/treatment/BeforeAfter";
import CardGrid from "@/components/treatment/CardGrid";
import ProcessSteps from "@/components/treatment/ProcessSteps";
import CalloutBanner from "@/components/treatment/CalloutBanner";
import CtaBand from "@/components/treatment/CtaBand";
import {
  tummyTuckCandidates,
  tummyTuckCta,
  tummyTuckHero,
  tummyTuckMeta,
  tummyTuckRecovery,
  tummyTuckTypes,
} from "@/data/treatments/tummy-tuck";
import { treatmentsCrumb } from "@/data/treatments/shared";
import { beforeAfter } from "@/data/treatments/beforeAfter";
import ui from "@/components/shared/ui.module.css";

export const metadata: Metadata = {
  title: tummyTuckMeta.title,
  description: tummyTuckMeta.description,
};

export default function TummyTuckPage() {
  return (
    <main className={ui.page}>
      <Breadcrumb current={tummyTuckHero.breadcrumb} trail={treatmentsCrumb} />
      <TreatmentHero data={tummyTuckHero} />
      <BeforeAfter data={beforeAfter["tummy-tuck"]} />
      <CardGrid data={tummyTuckTypes} />
      <ProcessSteps data={tummyTuckRecovery} />
      <CalloutBanner data={tummyTuckCandidates} />
      <CtaBand data={tummyTuckCta} />
    </main>
  );
}
