import Breadcrumb from "@/components/treatment/Breadcrumb";
import TreatmentHero from "@/components/treatment/TreatmentHero";
import BeforeAfter from "@/components/treatment/BeforeAfter";
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
import { beforeAfter } from "@/data/treatments/beforeAfter";
import ui from "@/components/shared/ui.module.css";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: laserHairRemovalMeta.title,
  description: laserHairRemovalMeta.description,
  path: "/treatments/laser-hair-removal",
  image: laserHairRemovalHero.image,
});

export default function LaserHairRemovalPage() {
  return (
    <main className={ui.page}>
      <Breadcrumb current={laserHairRemovalHero.breadcrumb} trail={treatmentsCrumb} />
      <TreatmentHero data={laserHairRemovalHero} />
      <BeforeAfter data={beforeAfter["laser-hair-removal"]} />
      <CardGrid data={laserHairRemovalBenefits} />
      <MediaCardGrid data={laserHairRemovalAreas} tone="ivory" />
      <CalloutBanner data={laserHairRemovalCost} />
      <VideoGallery data={laserHairRemovalVideos} tone="ivory" />
      <CtaBand data={laserHairRemovalCta} />
    </main>
  );
}
