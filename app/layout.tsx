import type { Metadata } from "next";
import { siteUrl } from "@/lib/site";
import { defaultShareImage, siteName } from "@/lib/seo";
import "./globals.css";

// Site-wide defaults. Public pages override title/description/canonical/openGraph via lib/seo pageMetadata;
// no canonical here, it would be inherited by every page that forgets its own.
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${siteName} | Plastic & Cosmetic Surgery, Greater Kailash, New Delhi`,
  description:
    "Bespoke aesthetic and reconstructive surgery led by Senior Plastic Surgeon Dr. Sukhbir Singh in Greater Kailash Part 1, South Delhi.",
  applicationName: siteName,
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  openGraph: {
    type: "website",
    siteName,
    locale: "en_IN",
    images: [{ url: defaultShareImage.src, alt: defaultShareImage.alt }],
  },
  twitter: { card: "summary_large_image" },
  icons: {
    icon: "/svg/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,300..800;1,300..800&family=Plus+Jakarta+Sans:ital,wght@0,300..800;1,300..800&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0..1,0&display=block"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
