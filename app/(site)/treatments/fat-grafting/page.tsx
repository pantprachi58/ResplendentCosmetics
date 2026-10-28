import Breadcrumb from "@/components/treatment/Breadcrumb";
import TreatmentHero from "@/components/treatment/TreatmentHero";
import BeforeAfter from "@/components/treatment/BeforeAfter";
import ProcessSteps from "@/components/treatment/ProcessSteps";
import CalloutBanner from "@/components/treatment/CalloutBanner";
import VideoGallery from "@/components/treatment/VideoGallery";
import FaqAccordion from "@/components/treatment/FaqAccordion";
import CtaBand from "@/components/treatment/CtaBand";
import {
  fatGraftingCta,
  fatGraftingFaq,
  fatGraftingHero,
  fatGraftingMeta,
  fatGraftingProcess,
  fatGraftingRecovery,
  fatGraftingVideos,
} from "@/data/treatments/fat-grafting";
import { treatmentsCrumb } from "@/data/treatments/shared";
import { beforeAfter } from "@/data/treatments/beforeAfter";
import ui from "@/components/shared/ui.module.css";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: fatGraftingMeta.title,
  description: fatGraftingMeta.description,
  path: "/treatments/fat-grafting",
  image: fatGraftingHero.image,
});

export default function FatGraftingPage() {
  return (
    <main className={ui.page}>
      <Breadcrumb current={fatGraftingHero.breadcrumb} trail={treatmentsCrumb} />
      <TreatmentHero data={fatGraftingHero} />
      <BeforeAfter data={beforeAfter["fat-grafting"]} />
      <VideoGallery data={fatGraftingVideos} />
      <ProcessSteps data={fatGraftingProcess} />
      <CalloutBanner data={fatGraftingRecovery} />
      <FaqAccordion data={fatGraftingFaq} tone="ivory" />
      <CtaBand data={fatGraftingCta} />
    </main>
  );
}
