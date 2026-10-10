import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import BentoGrid from "@/components/home/BentoGrid";
import FeaturedWorks from "@/components/home/FeaturedWorks";
import CtaSection from "@/components/home/CtaSection";

export const metadata: Metadata = {
  title: "Intallo — Elite Digital Systems & Custom Software Engineering",
  description:
    "We engineer high-performance web platforms, enterprise software, and automated workflows designed to accelerate business operations.",
  openGraph: {
    title: "Intallo — Elite Digital Systems & Custom Software Engineering",
    description:
      "We engineer high-performance web platforms, enterprise software, and automated workflows designed to accelerate business operations.",
    type: "website",
    siteName: "Intallo",
  },
  twitter: {
    card: "summary_large_image",
    title: "Intallo — Elite Digital Systems & Custom Software Engineering",
    description:
      "We engineer high-performance web platforms, enterprise software, and automated workflows designed to accelerate business operations.",
  },
};

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      <Hero />
      <BentoGrid />
      <FeaturedWorks />
      <CtaSection />
    </div>
  );
}
