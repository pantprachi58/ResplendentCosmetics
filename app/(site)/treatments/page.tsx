import TreatmentsCatalog from "./TreatmentsCatalog";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Surgical & Non-Surgical Treatments | Resplendent Aesthetics",
  description:
    "Face, body, breast, intimate and skin treatments at Resplendent Aesthetics, Greater Kailash, New Delhi: plastic and cosmetic surgery and non-surgical care.",
  path: "/treatments",
});

export default function TreatmentsPage() {
  return <TreatmentsCatalog />;
}
