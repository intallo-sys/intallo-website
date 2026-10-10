import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import ProjectShowreel from "@/components/home/ProjectShowreel";
import PositioningIntro from "@/components/home/PositioningIntro";
import FeaturedWorks from "@/components/home/FeaturedWorks";
import ServicesSection from "@/components/home/ServicesSection";
import PlatformsStrip from "@/components/home/PlatformsStrip";
import PackagesSection from "@/components/home/PackagesSection";
import ApproachSection from "@/components/home/ApproachSection";
import FaqSection from "@/components/home/FaqSection";
import CtaSection from "@/components/home/CtaSection";

export const metadata: Metadata = {
  title: "Intallo — Turn Manual Work Into Digital Solutions",
  description:
    "We engineer high-performance web platforms, custom operational software, and automated workflows that eliminate manual bottlenecks for growing businesses.",
  openGraph: {
    title: "Intallo — Turn Manual Work Into Digital Solutions",
    description:
      "We engineer high-performance web platforms, custom operational software, and automated workflows that eliminate manual bottlenecks for growing businesses.",
    type: "website",
    url: "https://intallo.in",
    siteName: "Intallo",
  },
  twitter: {
    card: "summary_large_image",
    title: "Intallo — Turn Manual Work Into Digital Solutions",
    description:
      "We engineer high-performance web platforms, custom operational software, and automated workflows that eliminate manual bottlenecks for growing businesses.",
  },
};

export default function HomePage() {
  return (
    <div className="relative overflow-hidden bg-[#07090D]">
      {/* 01. Hero */}
      <Hero />

      {/* 02. Project Showreel (Draggable horizontal demo reel) */}
      <ProjectShowreel />

      {/* 03. Positioning Introduction */}
      <PositioningIntro />

      {/* 04. Featured Work */}
      <FeaturedWorks />

      {/* 05. Services Overview */}
      <ServicesSection />

      {/* 06. Platforms and Capabilities */}
      <PlatformsStrip />

      {/* 07. Packages & Engagement Models (Scope-based quotes) */}
      <PackagesSection />

      {/* 08. Approach & Process */}
      <ApproachSection />

      {/* 09. FAQs */}
      <FaqSection />

      {/* 10. CTA Conversion */}
      <CtaSection />
    </div>
  );
}
