/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "lh3.googleusercontent.com" }],
  },
  // Legacy top-level treatment URLs → canonical /treatments/<slug> pages
  async redirects() {
    return [
      { source: "/hair-transplant", destination: "/treatments/hair-transplant", permanent: true },
      { source: "/rhinoplasty", destination: "/treatments/rhinoplasty", permanent: true },
      { source: "/face-neck-lift", destination: "/treatments/face-neck-lift", permanent: true },
      { source: "/liposuction-body-contouring", destination: "/treatments/liposuction", permanent: true },
      { source: "/botox-fillers", destination: "/treatments/botox", permanent: true },
    ];
  },
};

export default nextConfig;
