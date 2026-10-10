import type { Metadata } from "next";
import Image from "next/image";
import { PenTool, Cpu, Handshake } from "lucide-react";
import ActionLink from "@/components/ui/ActionLink";
import Container from "@/components/ui/Container";
import { about } from "@/lib/content";
import { SpotlightCard } from "@/components/ui/Animations";
import CtaSection from "@/components/home/CtaSection";

export const metadata: Metadata = {
  title: "About Intallo — Systems Builders & Software Engineering",
  description:
    "Learn about Intallo: our engineering philosophy, mission, and the builders crafting scalable digital systems for modern businesses.",
  openGraph: {
    title: "About Intallo — Systems Builders & Software Engineering",
    description:
      "Learn about Intallo: our engineering philosophy, mission, and the builders crafting scalable digital systems for modern businesses.",
    type: "website",
    siteName: "Intallo",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Intallo — Systems Builders & Software Engineering",
    description:
      "Learn about Intallo: our engineering philosophy, mission, and the builders crafting scalable digital systems for modern businesses.",
  },
};

const pillarIcons = [PenTool, Cpu, Handshake];

export default function AboutPage() {
  return (
    <div className="relative overflow-hidden pt-28 pb-20">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#0099FF]/15 via-[#00E5FF]/10 to-transparent blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-2/3 left-0 w-[450px] h-[450px] bg-blue-600/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      {/* 1. Hero Section */}
      <section className="py-16 md:py-24 text-center">
        <Container className="max-w-4xl">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md mb-8">
            <span className="w-2 h-2 rounded-full bg-[#0099FF] animate-pulse shadow-[0_0_8px_#0099FF]" />
            <span className="text-xs font-mono tracking-wider text-blue-300 uppercase">
              {about.hero.eyebrow}
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight leading-[1.1]">
            We build digital systems that{" "}
            <span className="serif-accent italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-cyan-200 to-white">
              move businesses forward.
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            {about.hero.body}
          </p>
        </Container>
      </section>

      {/* 2. Who We Are Section */}
      <section className="py-12 md:py-20">
        <Container className="max-w-[1320px]">
          <SpotlightCard
            spotlightColor="rgba(0, 153, 255, 0.16)"
            className="glass-card rounded-3xl p-8 sm:p-12 md:p-16 border border-white/[0.08]"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Column: Image with overlay */}
              <div className="lg:col-span-6 relative rounded-2xl overflow-hidden aspect-[16/11] bg-black/40 border border-white/10 group">
                <Image
                  src={about.whoWeAre.image}
                  alt={about.whoWeAre.imageAlt}
                  fill
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07090D]/80 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Right Column: Copy & Identity */}
              <div className="lg:col-span-6 space-y-6">
                <span className="text-xs font-mono tracking-wider text-blue-400 uppercase block">
                  {about.whoWeAre.eyebrow}
                </span>

                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                  More than an agency.{" "}
                  <span className="serif-accent italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-cyan-200 to-white">
                    We are systems builders.
                  </span>
                </h2>

                <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                  {about.whoWeAre.body}
                </p>

                <div className="pt-2 grid grid-cols-2 gap-4 border-t border-white/[0.08]">
                  <div>
                    <span className="text-2xl font-mono font-bold text-white">Full-Stack</span>
                    <span className="text-xs text-gray-400 block mt-1">Architecture to Deployment</span>
                  </div>
                  <div>
                    <span className="text-2xl font-mono font-bold text-white">Agile &amp; Direct</span>
                    <span className="text-xs text-gray-400 block mt-1">Zero Overhead Bureaucracy</span>
                  </div>
                </div>
              </div>
            </div>
          </SpotlightCard>
        </Container>
      </section>

      {/* 3. Our Mission & Pillars */}
      <section className="py-12 md:py-20 border-t border-white/[0.06]">
        <Container className="max-w-[1320px]">
          <SpotlightCard
            spotlightColor="rgba(0, 153, 255, 0.2)"
            className="glass-card rounded-3xl p-8 sm:p-12 md:p-16 border border-white/[0.08] relative overflow-hidden"
          >
            {/* Ambient Background Flare */}
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-blue-600/15 blur-3xl rounded-full pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
              <div className="lg:col-span-5 space-y-4">
                <span className="text-xs font-mono tracking-wider text-blue-400 uppercase block">
                  {about.mission.eyebrow}
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight leading-snug">
                  To make technology simple, accessible, and valuable for businesses of every size.
                </h2>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 lg:pt-0">
                {about.mission.pillars.map((pillar, i) => {
                  const Icon = pillarIcons[i] || PenTool;
                  return (
                    <div
                      key={i}
                      className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-3"
                    >
                      <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-[#0099FF]">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-bold text-white">{pillar.title}</h3>
                      <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                        {pillar.lines.join(" ")}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </SpotlightCard>
        </Container>
      </section>

      {/* 4. What Makes Us Different (4 Philosophy Bento Cards) */}
      <section className="py-12 md:py-20 border-t border-white/[0.06]">
        <Container className="max-w-[1320px]">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-mono tracking-wider text-blue-400 uppercase block mb-3">
              {about.why.eyebrow}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              {about.why.heading}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {about.why.items.map((item, i) => (
              <SpotlightCard
                key={i}
                spotlightColor="rgba(0, 153, 255, 0.12)"
                className="glass-card glass-card-hover rounded-2xl p-6 border border-white/[0.08] relative overflow-hidden group flex flex-col justify-between"
              >
                <div className="serif-accent absolute -bottom-4 right-4 text-7xl font-bold text-white/[0.03] select-none pointer-events-none group-hover:text-blue-500/[0.08] transition-colors">
                  {item.number}
                </div>

                <div>
                  <span className="text-xs font-mono tracking-wider text-[#0099FF] uppercase block mb-4">
                    PRINCIPIA {item.number}
                  </span>
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                    {item.lines.join(" ")}
                  </p>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. Team Section */}
      <section className="py-12 md:py-20 border-t border-white/[0.06]">
        <Container className="max-w-[1320px]">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-mono tracking-wider text-blue-400 uppercase block">
              {about.team.eyebrow}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              {about.team.heading}
            </h2>
            <p className="text-gray-400 text-sm sm:text-base">
              {about.team.intro}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {about.team.members.map((member, i) => (
              <SpotlightCard
                key={i}
                spotlightColor="rgba(0, 153, 255, 0.14)"
                className="glass-card glass-card-hover rounded-2xl p-5 border border-white/[0.08] space-y-4 group"
              >
                <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-black/40 border border-white/5">
                  <Image
                    src={member.photo}
                    alt={member.photoAlt}
                    fill
                    className="object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07090D]/90 via-transparent to-transparent pointer-events-none" />
                </div>

                <div>
                  <h3 className="text-base font-bold text-white">{member.name}</h3>
                  <p className="text-xs font-mono text-[#0099FF] mt-0.5">{member.role}</p>
                  <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                    {member.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-white/[0.06] flex items-center gap-3 text-xs font-mono text-gray-400">
                  <ActionLink href={member.links.email} className="hover:text-[#0099FF] transition-colors">
                    Contact
                  </ActionLink>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </Container>
      </section>

      {/* 6. Bottom Consultation CTA */}
      <CtaSection />
    </div>
  );
}
