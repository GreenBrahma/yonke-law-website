import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Legacy flat practice-area URLs → /what-we-handle/*
      { source: "/car-accidents", destination: "/what-we-handle/car-accidents", permanent: true },
      { source: "/truck-accidents", destination: "/what-we-handle/truck-accidents", permanent: true },
      { source: "/medical-malpractice", destination: "/what-we-handle/medical-malpractice", permanent: true },
      { source: "/wrongful-death", destination: "/what-we-handle/wrongful-death", permanent: true },
      { source: "/nursing-home-abuse", destination: "/what-we-handle/nursing-home-abuse", permanent: true },
      { source: "/workplace-injuries", destination: "/what-we-handle/workplace-injuries", permanent: true },
      { source: "/motorcycle-accidents", destination: "/what-we-handle/motorcycle-accidents", permanent: true },
      { source: "/premises-liability", destination: "/what-we-handle/premises-liability", permanent: true },
      { source: "/product-liability", destination: "/what-we-handle/product-liability", permanent: true },
      { source: "/pedestrian-bicycle", destination: "/what-we-handle/pedestrian-bicycle", permanent: true },
      // Legacy bio URL
      { source: "/michael-t-yonke", destination: "/about", permanent: true },
      // Legacy testimonials shortcut
      { source: "/testimonials", destination: "/about/testimonials", permanent: true },
    ];
  },
};

export default nextConfig;
