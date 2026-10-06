import type { Metadata } from "next";
import Breadcrumb from "@/components/treatment/Breadcrumb";
import TreatmentHero from "@/components/treatment/TreatmentHero";
import MediaCardGrid from "@/components/treatment/MediaCardGrid";
import TreatmentOverview from "@/components/treatment/TreatmentOverview";
import CalloutBanner from "@/components/treatment/CalloutBanner";
import FaqAccordion from "@/components/treatment/FaqAccordion";
import CtaBand from "@/components/treatment/CtaBand";
import {
  bodyTighteningCost,
  bodyTighteningCta,
  bodyTighteningFaq,
  bodyTighteningHero,
  bodyTighteningMeta,
  bodyTighteningTechnologies,
  faceTiteComparison,
} from "@/data/treatments/body-tightening";
import { treatmentsCrumb } from "@/data/treatments/shared";
import ui from "@/components/shared/ui.module.css";

export const metadata: Metadata = {
  title: bodyTighteningMeta.title,
  description: bodyTighteningMeta.description,
};

export default function BodyTighteningPage() {
  return (
    <main className={ui.page}>
      <Breadcrumb current={bodyTighteningHero.breadcrumb} trail={treatmentsCrumb} />
      <TreatmentHero data={bodyTighteningHero} />
      <TreatmentOverview data={faceTiteComparison} />
      <MediaCardGrid data={bodyTighteningTechnologies} tone="ivory" />
      <CalloutBanner data={bodyTighteningCost} />
      <FaqAccordion data={bodyTighteningFaq} tone="ivory" />
      <CtaBand data={bodyTighteningCta} />
    </main>
  );
}
