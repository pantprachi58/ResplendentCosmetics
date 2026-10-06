import type { Metadata } from "next";
import Breadcrumb from "@/components/treatment/Breadcrumb";
import PageIntro from "@/components/shared/PageIntro";
import VideoGallery from "@/components/treatment/VideoGallery";
import MediaCardGrid from "@/components/treatment/MediaCardGrid";
import CtaBand from "@/components/treatment/CtaBand";
import { galleryPhotos, galleryVideos } from "@/data/gallery";
import ui from "@/components/shared/ui.module.css";

export const metadata: Metadata = {
  title: "Gallery | Resplendent Aesthetics",
  description:
    "Videos and photos from Dr. Sukhbir Singh and Resplendent Aesthetics—educational treatment videos and conference highlights.",
};

export default function GalleryPage() {
  return (
    <main className={ui.page}>
      <Breadcrumb current="Gallery" />
      <PageIntro
        eyebrow="Gallery"
        title="Videos & Highlights"
        lead="Watch Dr. Sukhbir Singh explain popular treatments, and see highlights from the conferences where he presents and learns alongside surgeons from around the world."
      />
      <VideoGallery data={galleryVideos} />
      <MediaCardGrid data={galleryPhotos} tone="ivory" />
      <CtaBand
        data={{
          eyebrow: "Greater Kailash Part 1 • South Delhi",
          title: "Have a Question About a Treatment?",
          text: "Book a consultation with Dr. Sukhbir Singh at R-9, Basement, Greater Kailash Part 1, New Delhi - 110048.",
          primaryCta: { label: "Book a Consultation", href: "/book-consultation", icon: "arrow_forward" },
        }}
      />
    </main>
  );
}
