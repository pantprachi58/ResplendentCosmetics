import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Resplendent Aesthetics | Plastic & Cosmetic Surgery, Greater Kailash, New Delhi",
  description:
    "Bespoke aesthetic and reconstructive surgery led by Senior Plastic Surgeon Dr. Sukhbir Singh in Greater Kailash Part 1, South Delhi.",
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
