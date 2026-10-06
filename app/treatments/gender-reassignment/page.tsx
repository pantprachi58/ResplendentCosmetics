import type { Metadata } from "next";
import Breadcrumb from "@/components/treatment/Breadcrumb";
import TreatmentHero from "@/components/treatment/TreatmentHero";
import ProcessSteps from "@/components/treatment/ProcessSteps";
import CalloutBanner from "@/components/treatment/CalloutBanner";
import CtaBand from "@/components/treatment/CtaBand";
import {
  genderReassignmentCta,
  genderReassignmentHero,
  genderReassignmentMeta,
  genderReassignmentPrivacy,
  genderReassignmentProcess,
} from "@/data/treatments/gender-reassignment";
import { treatmentsCrumb } from "@/data/treatments/shared";
import ui from "@/components/shared/ui.module.css";

export const metadata: Metadata = {
  title: genderReassignmentMeta.title,
  description: genderReassignmentMeta.description,
};

export default function GenderReassignmentPage() {
  return (
    <main className={ui.page}>
      <Breadcrumb current={genderReassignmentHero.breadcrumb} trail={treatmentsCrumb} />
      <TreatmentHero data={genderReassignmentHero} />
      <ProcessSteps data={genderReassignmentProcess} />
      <CalloutBanner data={genderReassignmentPrivacy} />
      <CtaBand data={genderReassignmentCta} />
    </main>
  );
}
