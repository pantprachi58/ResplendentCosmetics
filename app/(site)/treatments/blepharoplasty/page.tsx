import Breadcrumb from "@/components/treatment/Breadcrumb";
import TreatmentHero from "@/components/treatment/TreatmentHero";
import TreatmentOverview from "@/components/treatment/TreatmentOverview";
import ProcessSteps from "@/components/treatment/ProcessSteps";
import FeatureBand from "@/components/treatment/FeatureBand";
import CaseGallery from "@/components/treatment/CaseGallery";
import CalloutBanner from "@/components/treatment/CalloutBanner";
import FaqAccordion from "@/components/treatment/FaqAccordion";
import ConsultationForm from "@/components/treatment/ConsultationForm";
import CtaBand from "@/components/treatment/CtaBand";
import { blepharoplasty as page, blepharoplastyCallout, blepharoplastyForm } from "@/data/treatments/blepharoplasty";
import { treatmentsCrumb } from "@/data/treatments/shared";
import ui from "@/components/shared/ui.module.css";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: page.metaTitle,
  description: page.metaDescription,
  path: "/treatments/blepharoplasty",
  // Same procedure as eyelid-surgery: consolidate ranking signals there until the pages are merged
  canonical: "/treatments/eyelid-surgery",
  image: page.hero.image,
});

export default function BlepharoplastyPage() {
  return (
    <main className={ui.page}>
      <Breadcrumb current={page.hero.breadcrumb} trail={treatmentsCrumb} />
      <TreatmentHero data={page.hero} />
      <TreatmentOverview data={page.overview} />
      <ProcessSteps data={page.process} />
      <FeatureBand data={page.feature} />
      <CaseGallery data={page.cases} />
      <CalloutBanner data={blepharoplastyCallout} />
      <FaqAccordion data={page.faq} tone="ivory" />
      <ConsultationForm data={blepharoplastyForm} />
      <CtaBand data={page.cta} />
    </main>
  );
}
