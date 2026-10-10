import type { Metadata } from "next";
import { PenTool, Lightbulb, Handshake } from "lucide-react";
import ActionLink from "@/components/ui/ActionLink";
import Container from "@/components/ui/Container";
import Lines from "@/components/ui/Lines";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import Reveal from "@/components/ui/Reveal";
import { about } from "@/lib/content";
import {
  StaggerContainer,
  StaggerItem,
  SpotlightCard,
  Magnetic,
  NumberTicker,
} from "@/components/ui/Animations";

const iconMap: Record<string, any> = {
  "pen-tool": PenTool,
  "cpu": Lightbulb,
  "handshake": Handshake,
};

export const metadata: Metadata = {
  title: "About Intallo — Digital Experiences That Move Businesses Forward",
  description: about.hero.body,
  openGraph: {
    title: "About Intallo — Digital Experiences That Move Businesses Forward",
    description: about.hero.body,
    type: "website",
    siteName: "Intallo",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Intallo — Digital Experiences That Move Businesses Forward",
    description: about.hero.body,
  },
};

export default function AboutPage() {
  return (
    <div className="space-y-16 pt-0 pb-8">
      {/* 1. Hero Section */}
      <Reveal>
        <section className="bg-intallo-band pt-32 pb-16 rounded-xl">
          <Container className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-widest font-semibold text-intallo-blue">
                {about.hero.eyebrow}
              </p>
              <h1 className="text-3xl md:text-5xl font-bold text-intallo-navy leading-tight">
                <Lines lines={about.hero.headingLines} />
              </h1>
              <p className="text-intallo-muted text-base md:text-lg">
                {about.hero.body}
              </p>
            </div>
            <div>
              <ImagePlaceholder src={about.hero.image} alt={about.hero.imageAlt} className="h-64 w-full" />
            </div>
          </Container>
        </section>
      </Reveal>

      {/* 2. Who We Are Section */}
      <Reveal>
        <section className="py-8">
          <Container className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <ImagePlaceholder src={about.whoWeAre.image} alt={about.whoWeAre.imageAlt} className="h-64 w-full" />
            </div>
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-widest font-semibold text-intallo-blue">
                {about.whoWeAre.eyebrow}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="text-intallo-navy block">{about.whoWeAre.headingLine1}</span>
                <span className="text-intallo-blue block">{about.whoWeAre.headingLine2}</span>
              </h2>
              <p className="text-intallo-muted text-base">
                {about.whoWeAre.body}
              </p>
            </div>
          </Container>
        </section>
      </Reveal>

      {/* 3. Our Team Section (4 col -> 2 col on md/lg -> 1 col on mobile <420px) */}
      <Reveal>
        <section className="py-8">
          <Container className="space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <p className="text-xs uppercase tracking-widest font-semibold text-intallo-blue">
                {about.team.eyebrow}
              </p>
              <h2 className="text-2xl md:text-4xl font-bold text-intallo-navy">
                {about.team.heading}
              </h2>
              <p className="text-intallo-muted text-sm md:text-base">
                {about.team.intro}
              </p>
            </div>

            <StaggerContainer className="grid grid-cols-1 min-[420px]:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.12}>
              {about.team.members.map((member, i) => (
                <StaggerItem key={i}>
                  <SpotlightCard
                    spotlightColor="rgba(26, 118, 255, 0.08)"
                    className="bg-white border border-intallo-border p-5 rounded-xl space-y-3 shadow-sm hover:shadow-md transition-all duration-300 h-full group"
                  >
                    <div className="overflow-hidden rounded-lg">
                      <ImagePlaceholder
                        src={member.photo}
                        alt={member.photoAlt}
                        className="h-36 w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      />
                    </div>
                    <h3 className="font-bold text-intallo-navy text-base">{member.name}</h3>
                    <p className="text-intallo-blue text-xs font-semibold">{member.role}</p>
                    <p className="text-intallo-muted text-xs leading-relaxed">
                      <Lines lines={member.descriptionLines} />
                    </p>
                    <div className="flex items-center gap-3 pt-2 text-xs">
                      <ActionLink href={member.links.linkedin} className="text-intallo-muted hover:text-intallo-blue transition-colors">
                        LinkedIn
                      </ActionLink>
                      <span className="text-gray-300">·</span>
                      <ActionLink href={member.links.github} className="text-intallo-muted hover:text-intallo-blue transition-colors">
                        GitHub
                      </ActionLink>
                      <span className="text-gray-300">·</span>
                      <ActionLink href={member.links.email} className="text-intallo-blue hover:underline">
                        Mail
                      </ActionLink>
                    </div>
                  </SpotlightCard>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </Container>
        </section>
      </Reveal>

      {/* 4. Our Mission Section */}
      <Reveal>
        <section className="py-6">
          <Container className="max-w-[1200px]">
            <SpotlightCard
              spotlightColor="rgba(26, 118, 255, 0.22)"
              className="bg-[#063B73] text-white p-8 md:p-12 rounded-2xl border border-white/10 shadow-2xl relative overflow-hidden"
            >
              <div className="flex flex-col md:flex-row md:items-stretch gap-10 md:gap-14">
                {/* LEFT: Mission Statement */}
                <div className="md:w-[40%] space-y-4 flex flex-col justify-center">
                  <p className="text-[11px] uppercase tracking-[0.15em] font-medium text-intallo-blue/90">
                    {about.mission.eyebrow}
                  </p>
                  <h2 className="text-2xl md:text-[28px] lg:text-[32px] font-bold leading-[1.25]">
                    To make technology simple, accessible, and valuable for businesses of every size.
                  </h2>
                </div>
                
                {/* VERTICAL DIVIDER */}
                <div className="hidden md:block w-px bg-white/20 self-stretch my-2"></div>

                {/* RIGHT: 3 Value Columns */}
                <div className="md:w-[60%] grid grid-cols-1 sm:grid-cols-3 gap-8 py-2">
                  {about.mission.pillars.map((pillar, i) => {
                    const IconComponent = iconMap[pillar.icon] || PenTool;
                    return (
                      <div key={i} className="flex flex-col items-start text-left space-y-3">
                        <IconComponent className="w-8 h-8 text-intallo-blue mb-2 transition-transform duration-300 hover:scale-110" strokeWidth={1.75} />
                        <div className="font-semibold text-lg md:text-xl text-white">{pillar.title}</div>
                        <p className="text-white/80 text-[15px] leading-[1.45]">
                          <Lines lines={pillar.lines} />
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </SpotlightCard>
          </Container>
        </section>
      </Reveal>

      {/* 5. Why Intallo / What Makes Us Different Section */}
      <Reveal>
        <section className="py-8">
          <Container className="space-y-8">
            <div>
              <p className="text-xs uppercase tracking-widest font-semibold text-intallo-blue">
                {about.why.eyebrow}
              </p>
              <h2 className="text-2xl md:text-4xl font-bold text-intallo-navy mt-2">
                {about.why.heading}
              </h2>
            </div>

            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
              {about.why.items.map((item, i) => (
                <StaggerItem key={i}>
                  <div className="flex gap-4 items-start p-4 rounded-xl bg-white/60 hover:bg-white border border-transparent hover:border-intallo-border/60 transition-all duration-300 shadow-sm">
                    <div className="w-10 h-10 rounded-full bg-intallo-band text-intallo-blue font-bold flex items-center justify-center shrink-0 shadow-sm">
                      <NumberTicker value={parseInt(item.number, 10)} padZero={true} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-intallo-navy">{item.title}</h3>
                      <p className="text-intallo-muted text-sm mt-1 leading-relaxed">
                        <Lines lines={item.lines} />
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </Container>
        </section>
      </Reveal>

      {/* 6. CTA Section */}
      <Reveal>
        <section className="py-8">
          <Container>
            <SpotlightCard
              spotlightColor="rgba(26, 118, 255, 0.25)"
              className="bg-intallo-navy text-white p-8 md:p-12 rounded-2xl flex flex-col md:flex-row justify-between items-center gap-6 border border-white/10 shadow-2xl relative overflow-hidden"
            >
              <div>
                <p className="text-xs uppercase tracking-widest font-semibold text-intallo-blue">
                  {about.cta.eyebrow}
                </p>
                <h2 className="text-2xl md:text-3xl font-bold mt-2">
                  <Lines lines={about.cta.headingLines} />
                </h2>
              </div>
              <div>
                <Magnetic strength={0.25}>
                  <ActionLink
                    href={about.cta.button.href}
                    className="inline-block bg-white text-intallo-navy px-8 py-3.5 rounded-full font-semibold hover:bg-gray-100 transition-all focus:outline-none focus:ring-2 focus:ring-intallo-blue shadow-lg active:scale-98"
                  >
                    {about.cta.button.label}
                  </ActionLink>
                </Magnetic>
              </div>
            </SpotlightCard>
          </Container>
        </section>
      </Reveal>
    </div>
  );
}
