import type { Metadata } from "next";
import Breadcrumb from "@/components/treatment/Breadcrumb";
import MediaCardGrid from "@/components/treatment/MediaCardGrid";
import { galleryPhotos } from "@/data/gallery";
import ui from "@/components/shared/ui.module.css";

export const metadata: Metadata = {
  title: "Gallery | Resplendent Aesthetics",
  description:
    "Photo gallery from Dr. Sukhbir Singh and Resplendent Aesthetics—conference highlights including IACD 5.0, WCAM 2026, and Haircon 2026.",
};

export default function GalleryPage() {
  return (
    <main className={ui.page}>
      <Breadcrumb current="Gallery" />
      <MediaCardGrid data={galleryPhotos} />
    </main>
  );
}
