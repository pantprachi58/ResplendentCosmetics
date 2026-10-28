import Breadcrumb from "@/components/treatment/Breadcrumb";
import TreatmentHero from "@/components/treatment/TreatmentHero";
import BeforeAfter from "@/components/treatment/BeforeAfter";
import CardGrid from "@/components/treatment/CardGrid";
import TreatmentOverview from "@/components/treatment/TreatmentOverview";
import MediaCardGrid from "@/components/treatment/MediaCardGrid";
import CtaBand from "@/components/treatment/CtaBand";
import {
  threadLiftCandidates,
  threadLiftCta,
  threadLiftHero,
  threadLiftMeta,
  threadLiftResults,
  threadLiftTechniques,
} from "@/data/treatments/thread-lift";
import { treatmentsCrumb } from "@/data/treatments/shared";
import { beforeAfter } from "@/data/treatments/beforeAfter";
import ui from "@/components/shared/ui.module.css";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: threadLiftMeta.title,
  description: threadLiftMeta.description,
  path: "/treatments/thread-lift",
  image: threadLiftHero.image,
});

export default function ThreadLiftPage() {
  return (
    <main className={ui.page}>
      <Breadcrumb current={threadLiftHero.breadcrumb} trail={treatmentsCrumb} />
      <TreatmentHero data={threadLiftHero} />
      <BeforeAfter data={beforeAfter["thread-lift"]} />
      <CardGrid data={threadLiftCandidates} />
      <MediaCardGrid data={threadLiftResults} tone="ivory" />
      <TreatmentOverview data={threadLiftTechniques} />
      <CtaBand data={threadLiftCta} />
    </main>
  );
}
