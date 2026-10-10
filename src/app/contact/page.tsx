import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
import { contact } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact Intallo — Let's Build Your Next Digital System",
  description: contact.hero.body,
  openGraph: {
    title: "Contact Intallo — Let's Build Your Next Digital System",
    description: contact.hero.body,
    type: "website",
    siteName: "Intallo",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Intallo — Let's Build Your Next Digital System",
    description: contact.hero.body,
  },
};

export default function ContactPage() {
  return (
    <div className="relative overflow-hidden pt-28 pb-20">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#0099FF]/15 via-[#00E5FF]/10 to-transparent blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-2/3 right-0 w-[450px] h-[450px] bg-blue-600/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      {/* 1. Hero Section */}
      <section className="py-16 md:py-24 text-center">
        <Container className="max-w-4xl">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md mb-8">
            <span className="w-2 h-2 rounded-full bg-[#0099FF] animate-pulse shadow-[0_0_8px_#0099FF]" />
            <span className="text-xs font-mono tracking-wider text-blue-300 uppercase">
              {contact.hero.eyebrow}
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight leading-[1.1]">
            Let&apos;s discuss your{" "}
            <span className="serif-accent italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-cyan-200 to-white">
              next digital system.
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            {contact.hero.body}
          </p>
        </Container>
      </section>

      {/* 2. Interactive Form & Channels */}
      <section className="py-6">
        <Container className="max-w-[1240px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 h-full">
              <ContactInfo />
            </div>
            <div className="lg:col-span-7 h-full">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
