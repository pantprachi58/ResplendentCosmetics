import type { MediaCardGridData, VideoGalleryData } from "./treatments/types";

// Content sourced from https://www.resplendentcosmetics.com/gallery.php.
// One live photo shows identifiable patients on operating tables and is intentionally excluded.

const IMG = "/images/pages/gallery";

export const YOUTUBE_CHANNEL_URL = "https://www.youtube.com/@resplendentAesthetics";

export const galleryVideos: VideoGalleryData = {
  id: "videos",
  eyebrow: "Videos",
  title: "Dr. Sukhbir Singh Explains",
  intro: "Short educational videos on skin, laser and aesthetic treatments from Dr. Sukhbir Singh's YouTube channel.",
  moreLink: { label: "More Videos on YouTube", href: YOUTUBE_CHANNEL_URL, iconLeading: "smart_display" },
  videos: [
    { youtubeId: "CEvmaXl5DiA", title: "Pigmentation Improvement by Lasers", note: "In Hindi" },
    { youtubeId: "KR1pb25hiuc", title: "Chemical Peels — Complete Guide", note: "In Hindi" },
    { youtubeId: "mB251t8zE5s", title: "Laser Hair Reduction — How Does It Work?", note: "In Hindi" },
    { youtubeId: "s97Q4Loesc0", title: "Why Is Skin Care Important?", note: "In Hindi" },
    { youtubeId: "xxgOoLBVClI", title: "Best Skin Care Products & Routine", note: "In Hindi" },
    { youtubeId: "xzfBn5yyNHc", title: "Laser Tattoo Removal — Can Tattoos Be Removed?" },
    { youtubeId: "qFonC0eLbJE", title: "Dental Implants and Facial Wrinkles" },
  ],
};

export const galleryPhotos: MediaCardGridData = {
  id: "photos",
  eyebrow: "Images",
  title: "Conferences & Events",
  intro: "Dr. Sukhbir Singh presenting and meeting colleagues at national and international plastic surgery conferences, including recent highlights from IACD 5.0, WCAM 2026, and Haircon 2026.",
  columns: 4,
  aspect: "portrait",
  cards: [
    { 
      image: { src: `${IMG}/event-01.jpg`, alt: "Dr. Sukhbir Singh at IACD 5.0 workshop" }, 
      title: "IACD 5.0 Workshop",
      text: "2-day workshop focused on advanced facial anatomy, cadaver dissection, and precision-based injectable techniques."
    },
    { 
      image: { src: `${IMG}/event-02.jpg`, alt: "Dr. Sukhbir Singh at 14th Annual Haircon Conference" }, 
      title: "14th Annual Haircon Conference",
      text: "Hair Restoration Surgeon of India — chairing sessions and interacting with colleagues."
    },
    { 
      image: { src: `${IMG}/event-03.jpg`, alt: "Dr. Sukhbir Singh at WCAM 2026 in Bangkok" }, 
      title: "WCAM 2026, Bangkok",
      text: "Sharing expertise on facial aesthetics at the World Congress of Aesthetic Medicine in Thailand."
    },
    { 
      image: { src: `${IMG}/event-04.jpg`, alt: "Dr. Sukhbir Singh with fellow surgeons at a conference" }, 
      title: "With Fellow Surgeons" 
    },
    {
      image: { src: `${IMG}/event-05.jpg`, alt: "Dr. Sukhbir Singh at the podium of an ISAPS conference" },
      title: "ISAPS Conference",
    },
    {
      image: { src: `${IMG}/event-06.jpg`, alt: "Dr. Sukhbir Singh presenting at an ISAPS conference" },
      title: "Presenting at ISAPS",
    },
    { 
      image: { src: `${IMG}/event-07.jpg`, alt: "Dr. Sukhbir Singh with an international colleague" }, 
      title: "With an International Colleague" 
    },
    {
      image: { src: `${IMG}/event-08.jpg`, alt: "Dr. Sukhbir Singh at the Fall Symposium 2016 in Nepal" },
      title: "Fall Symposium 2016, Nepal",
    },
    { 
      image: { src: `${IMG}/event-09.jpg`, alt: "Dr. Sukhbir Singh with a group of surgeons at a conference" }, 
      title: "Conference Faculty Group" 
    },
    {
      image: { src: `${IMG}/event-10.jpg`, alt: "Dr. Sukhbir Singh presenting at the 51st APSICON conference" },
      title: "51st APSICON",
    },
    {
      image: { src: `${IMG}/event-11.jpg`, alt: "Dr. Sukhbir Singh with surgeons at Aesthetics Chennai 2015" },
      title: "Aesthetics Chennai 2015",
    },
    { 
      image: { src: `${IMG}/event-12.jpg`, alt: "Dr. Sukhbir Singh speaking at a podium" }, 
      title: "Speaking at a Conference" 
    },
    {
      image: { src: `${IMG}/event-13.jpg`, alt: "Faculty group photo at Aesthetics Chennai 2015" },
      title: "Aesthetics Chennai 2015",
    },
    { 
      image: { src: `${IMG}/event-14.jpg`, alt: "Dr. Sukhbir Singh with a senior colleague" }, 
      title: "With a Senior Colleague" 
    },
  ],
};
