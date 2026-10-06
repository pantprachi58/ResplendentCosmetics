import type { Metadata } from "next";
import Breadcrumb from "@/components/treatment/Breadcrumb";
import TreatmentHero from "@/components/treatment/TreatmentHero";
import CardGrid from "@/components/treatment/CardGrid";
import MediaCardGrid from "@/components/treatment/MediaCardGrid";
import CalloutBanner from "@/components/treatment/CalloutBanner";
import VideoGallery from "@/components/treatment/VideoGallery";
import CtaBand from "@/components/treatment/CtaBand";
import {
  laserHairRemovalAreas,
  laserHairRemovalBenefits,
  laserHairRemovalCost,
  laserHairRemovalCta,
  laserHairRemovalHero,
  laserHairRemovalMeta,
  laserHairRemovalVideos,
} from "@/data/treatments/laser-hair-removal";
import { treatmentsCrumb } from "@/data/treatments/shared";
import ui from "@/components/shared/ui.module.css";

export const metadata: Metadata = {
  title: laserHairRemovalMeta.title,
  description: laserHairRemovalMeta.description,
};

export default function LaserHairRemovalPage() {
  return (
    <main className={ui.page}>
      <Breadcrumb current={laserHairRemovalHero.breadcrumb} trail={treatmentsCrumb} />
      <TreatmentHero data={laserHairRemovalHero} />
      <CardGrid data={laserHairRemovalBenefits} />
      <MediaCardGrid data={laserHairRemovalAreas} tone="ivory" />
      <CalloutBanner data={laserHairRemovalCost} />
      <VideoGallery data={laserHairRemovalVideos} tone="ivory" />
      <CtaBand data={laserHairRemovalCta} />
    </main>
  );
}
