import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Best Cosmetic & Plastic Surgeon in Delhi - Resplendent Cosmetics Studio",
  description:
    "Dr. Sukhbir Singh is a highly reputed cosmetic and plastic surgeon in Delhi NCR. A board-certified doctor with over 15 years of experience, he specializes in Nose, Face, Breast, Eyelid Surgery, and more.",
  keywords: ["Cosmetic surgeon in delhi", "plastic surgeon in delhi"],
  authors: [{ name: "Dr. Sukhbir Singh" }],
  publisher: "Resplendent Cosmetics",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  metadataBase: new URL("https://www.resplendentcosmetics.com"),
  alternates: {
    canonical: "https://www.resplendentcosmetics.com/",
  },
  icons: {
    icon: "/images/fav.png",
    shortcut: "/images/fav.png",
    apple: "/images/fav.png",
  },
  openGraph: {
    title: "Best Cosmetic & Plastic Surgeon in Delhi - Resplendent Cosmetics Studio",
    description:
      "Dr. Sukhbir Singh is a highly reputed cosmetic and plastic surgeon in Delhi NCR. A board-certified doctor with over 15 years of experience, he specializes in Nose, Face, Breast, Eyelid Surgery, and more.",
    url: "https://www.resplendentcosmetics.com/",
    siteName: "Resplendent Cosmetics Studio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Cosmetic & Plastic Surgeon in Delhi - Resplendent Cosmetics Studio",
    description:
      "Dr. Sukhbir Singh is a highly reputed cosmetic and plastic surgeon in Delhi NCR. A board-certified doctor with over 15 years of experience, he specializes in Nose, Face, Breast, Eyelid Surgery, and more.",
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
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
