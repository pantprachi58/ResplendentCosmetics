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
      // Legacy production URLs from the old PHP site
      { source: "/vaginal-tightening.php", destination: "/treatments/vaginal-tightening", permanent: true },
      { source: "/vaginal-tightening", destination: "/treatments/vaginal-tightening", permanent: true },
      { source: "/vaginoplasty-surgery.php", destination: "/treatments/vaginoplasty", permanent: true },
      { source: "/treatments/vaginal-rejuvenation", destination: "/treatments/vaginoplasty", permanent: true },
      { source: "/chemical-peel.php", destination: "/treatments/chemical-peel", permanent: true },
      { source: "/dimple-creation-surgery.php", destination: "/treatments/dimple-creation", permanent: true },
      { source: "/earlobe-repair.php", destination: "/treatments/ear-lobe-repair", permanent: true },
      { source: "/ear-surgery.php", destination: "/treatments/otoplasty", permanent: true },
      { source: "/eyelid-surgery.php", destination: "/treatments/eyelid-surgery", permanent: true },
      { source: "/injectable-dermal-fillers.php", destination: "/treatments/dermal-fillers", permanent: true },
      { source: "/prp-therapy.php", destination: "/treatments/prp-therapy", permanent: true },
      { source: "/microdermabrasion.php", destination: "/treatments/microdermabrasion", permanent: true },
      { source: "/thread-lift.php", destination: "/treatments/thread-lift", permanent: true },
      { source: "/buttock-calf-augmentation.php", destination: "/treatments/buttock-calf-augmentation", permanent: true },
      { source: "/gender-reassignment-surgery.php", destination: "/treatments/gender-reassignment", permanent: true },
      { source: "/laser-hair-removal.php", destination: "/treatments/laser-hair-removal", permanent: true },
      { source: "/body-tightening.php", destination: "/treatments/body-tightening", permanent: true },
      { source: "/microneedling_rf.php", destination: "/treatments/rf-microneedling", permanent: true },
      { source: "/autologous-fat-grafting.php", destination: "/treatments/fat-grafting", permanent: true },
      { source: "/tummy-tuck-surgery.php", destination: "/treatments/tummy-tuck", permanent: true },
      { source: "/female-breast-surgery.php", destination: "/treatments/breast-surgery", permanent: true },
      { source: "/hymenoplasty-surgery.php", destination: "/treatments/hymenoplasty", permanent: true },
      { source: "/penis-enlargement.php", destination: "/treatments/penile-enlargement", permanent: true },
      { source: "/gynecomastia-surgery-in-delhi.php", destination: "/treatments/gynecomastia", permanent: true },
      { source: "/six-pack-plastic-surgery.php", destination: "/treatments/six-pack-abs", permanent: true },
      { source: "/gallery.php", destination: "/gallery", permanent: true },
      { source: "/achievement.php", destination: "/achievements", permanent: true },
      // Old menu slugs renamed to match the live site's procedures
      { source: "/treatments/abdominoplasty", destination: "/treatments/tummy-tuck", permanent: true },
      { source: "/treatments/buttock-enhancement", destination: "/treatments/buttock-calf-augmentation", permanent: true },
      { source: "/treatments/prp-scalp-therapy", destination: "/treatments/prp-therapy", permanent: true },
      { source: "/treatments/breast-augmentation", destination: "/treatments/breast-surgery#augmentation", permanent: true },
      { source: "/treatments/breast-lift", destination: "/treatments/breast-surgery#lift", permanent: true },
      { source: "/treatments/breast-reduction", destination: "/treatments/breast-surgery#reduction", permanent: true },
    ];
  },
};

export default nextConfig;
