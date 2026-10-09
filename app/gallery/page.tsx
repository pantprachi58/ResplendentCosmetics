import type { Metadata } from "next";
import Breadcrumb from "@/components/treatment/Breadcrumb";
import PageIntro from "@/components/shared/PageIntro";
import VideoGallery from "@/components/treatment/VideoGallery";
import MediaCardGrid from "@/components/treatment/MediaCardGrid";
import { galleryPhotos, galleryVideos } from "@/data/gallery";
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
      <PageIntro
        eyebrow="Images"
        title="Conferences & Events"
        lead="Dr. Sukhbir Singh presenting and meeting colleagues at national and international plastic surgery conferences, including recent highlights from IACD 5.0, WCAM 2026, and Haircon 2026."
      />
      <VideoGallery data={galleryVideos} />
      <MediaCardGrid data={galleryPhotos} tone="ivory" />
    </main>
  );
}
