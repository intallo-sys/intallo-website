import type { Metadata } from "next";
import Image from "next/image";
import ActionLink from "@/components/ui/ActionLink";
import Container from "@/components/ui/Container";
import Lines from "@/components/ui/Lines";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import Reveal from "@/components/ui/Reveal";
import { home } from "@/lib/content";
import {
  StaggerContainer,
  StaggerItem,
  AnimatedCard,
  SpotlightCard,
  Magnetic,
  NumberTicker,
  SvgPathDraw,
} from "@/components/ui/Animations";

export const metadata: Metadata = {
  title: "Intallo — Digital Systems for Modern Businesses",
  description: home.hero.body,
  openGraph: {
    title: "Intallo — Digital Systems for Modern Businesses",
    description: home.hero.body,
    type: "website",
    siteName: "Intallo",
  },
  twitter: {
    card: "summary_large_image",
    title: "Intallo — Digital Systems for Modern Businesses",
    description: home.hero.body,
  },
};

export default function HomePage() {
  return (
    <div className="space-y-16 pt-0 pb-8">
      {/* 1. Hero Section */}
      <section className="relative text-white py-24 md:py-32 overflow-hidden min-h-[80vh] flex items-center">
        <Image
          src={home.hero.image}
          alt={home.hero.imageAlt}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-intallo-navy/70 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-intallo-navy/80 via-intallo-navy/30 to-intallo-navy/10" />
        
        {/* Animated decorative SVG lines */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-[5]">
          <svg
            className="w-full h-full opacity-25"
            viewBox="0 0 1440 800"
            fill="none"
            preserveAspectRatio="none"
          >
            <SvgPathDraw
              d="M-100 200 C 300 450, 700 100, 1540 300"
              stroke="#1a76ff"
              strokeWidth={1.5}
              duration={2}
            />
            <SvgPathDraw
              d="M-100 500 C 400 250, 900 650, 1540 400"
              stroke="#60a5fa"
              strokeWidth={1}
              duration={2.5}
              delay={0.2}
            />
          </svg>
        </div>
        
        <Container className="relative z-10 w-full">
          <StaggerContainer className="space-y-6 max-w-3xl" staggerDelay={0.1}>
            <StaggerItem>
              <p className="text-xs md:text-sm uppercase tracking-widest font-bold text-white/90">
                {home.hero.eyebrow}
              </p>
            </StaggerItem>
            <StaggerItem>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
                <Lines lines={home.hero.headingLines} />
              </h1>
            </StaggerItem>
            <StaggerItem>
              <p className="text-white/80 text-lg md:text-xl max-w-2xl leading-relaxed">
                {home.hero.body}
              </p>
            </StaggerItem>
            <StaggerItem>
              <div className="pt-4">
                <Magnetic strength={0.25}>
                  <ActionLink
                    href={home.hero.cta.href}
                    className="inline-block bg-intallo-blue text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 transition-all focus:outline-none focus:ring-2 focus:ring-white shadow-lg shadow-blue-500/25 active:scale-[0.98] duration-200"
                  >
                    {home.hero.cta.label}
                  </ActionLink>
                </Magnetic>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </Container>
      </section>

      {/* 2. What We Do Section */}
      <Reveal>
        <section className="py-8">
          <Container className="space-y-8">
            <div>
              <p className="text-xs uppercase tracking-widest font-semibold text-intallo-blue">
                {home.whatWeDo.eyebrow}
              </p>
              <h2 className="text-2xl md:text-4xl font-bold text-intallo-ink mt-2">
                {home.whatWeDo.heading}
              </h2>
            </div>
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.15}>
              {home.whatWeDo.items.map((item, i) => (
                <StaggerItem key={i}>
                  <SpotlightCard
                    spotlightColor="rgba(26, 118, 255, 0.22)"
                    className="bg-intallo-navy text-white p-7 rounded-xl space-y-3 h-full border border-white/10 hover:border-intallo-blue/50 transition-all duration-300 shadow-md hover:shadow-xl"
                  >
                    <span className="text-intallo-blue font-bold text-2xl inline-block">
                      <NumberTicker value={parseInt(item.number, 10)} padZero={true} />
                    </span>
                    <h3 className="text-xl font-semibold tracking-tight">{item.title}</h3>
                    <p className="text-intallo-on-navy text-sm leading-relaxed">{item.description}</p>
                    <div className="w-8 h-0.5 bg-intallo-blue/60 mt-4 rounded-full" aria-hidden="true" />
                  </SpotlightCard>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </Container>
        </section>
      </Reveal>

      {/* 3. Selected Work Section */}
      <Reveal>
        <section id={home.selectedWork.id} className="py-16 md:py-24 bg-[#F5F9FF] scroll-mt-12 rounded-xl my-8">
          <Container className="max-w-[1200px] mx-auto px-6 md:px-10 space-y-12">
            
            {/* Section Header */}
            <div className="space-y-3">
              <p className="text-[11px] uppercase tracking-[0.15em] font-semibold text-[#1677FF]">
                {home.selectedWork.eyebrow}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#12324A] max-w-xl leading-tight">
                {home.selectedWork.heading}
              </h2>
            </div>
            
            <StaggerContainer className="space-y-10" staggerDelay={0.2}>
              {home.selectedWork.items.map((item, i) => (
                <StaggerItem key={i}>
                  <AnimatedCard
                    className="flex flex-col md:flex-row bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    {/* Text Content */}
                    <div className={`md:w-1/2 p-10 md:p-14 flex flex-col justify-center bg-[#063B73] space-y-6 ${item.imageSide === 'left' ? 'order-last' : ''}`}>
                      <div className="space-y-4">
                        <p className="text-[11px] font-semibold uppercase text-[#2F8CFF] tracking-[0.15em]">
                          {item.category}
                        </p>
                        <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                          {item.name}
                        </h3>
                        <p className="text-[#EAF4FF]/80 text-[15px] md:text-base leading-relaxed max-w-md">
                          {item.description}
                        </p>
                      </div>
                      <div className="pt-2">
                        <Magnetic strength={0.15}>
                          <ActionLink href={item.cta.href} className="group inline-flex items-center text-[#2F8CFF] font-semibold hover:text-white transition-colors duration-300">
                            {item.cta.label.replace('→', '')} 
                            <span className="ml-1 transition-transform duration-300 group-hover:translate-x-1">→</span>
                          </ActionLink>
                        </Magnetic>
                      </div>
                    </div>
                    
                    {/* Image Area */}
                    <div className="md:w-1/2 min-h-[300px] md:min-h-[450px] relative overflow-hidden group">
                      <ImagePlaceholder src={item.image} alt={item.imageAlt} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]" />
                    </div>
                  </AnimatedCard>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </Container>
        </section>
      </Reveal>

      {/* 4. Why Intallo Section */}
      <Reveal>
        <section className="py-8">
          <Container className="space-y-8">
            <div>
              <p className="text-xs uppercase tracking-widest font-semibold text-intallo-blue">
                {home.whyIntallo.eyebrow}
              </p>
              <h2 className="text-2xl md:text-4xl font-bold text-intallo-ink mt-2">
                {home.whyIntallo.heading}
              </h2>
              <p className="text-intallo-muted text-base max-w-3xl mt-2">
                {home.whyIntallo.body}
              </p>
            </div>
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.1}>
              {home.whyIntallo.items.map((item, i) => (
                <StaggerItem key={i}>
                  <SpotlightCard
                    spotlightColor="rgba(26, 118, 255, 0.08)"
                    className="space-y-3 bg-white p-7 rounded-xl border border-gray-100/90 h-full shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <span className="text-intallo-blue font-bold text-lg inline-block">
                      <NumberTicker value={parseInt(item.number, 10)} padZero={true} />
                    </span>
                    <h3 className="text-lg font-bold text-intallo-ink">{item.title}</h3>
                    <p className="text-intallo-muted text-sm leading-relaxed">{item.description}</p>
                  </SpotlightCard>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </Container>
        </section>
      </Reveal>

      {/* 5. CTA Section */}
      <Reveal>
        <section className="py-8">
          <Container className="space-y-4">
            <p className="text-xs uppercase tracking-widest font-semibold text-intallo-blue">
              {home.cta.eyebrow}
            </p>
            <SpotlightCard
              spotlightColor="rgba(26, 118, 255, 0.28)"
              className="bg-intallo-navy text-white p-8 md:p-12 rounded-2xl space-y-5 border border-white/10 shadow-2xl relative overflow-hidden"
            >
              <div
                className="absolute -right-20 -bottom-20 w-80 h-80 bg-intallo-blue/20 rounded-full blur-3xl pointer-events-none"
                aria-hidden="true"
              />
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{home.cta.heading}</h2>
              <p className="text-intallo-on-navy text-sm md:text-base max-w-xl leading-relaxed">
                {home.cta.body}
              </p>
              <div className="pt-2">
                <Magnetic strength={0.25}>
                  <ActionLink
                    href={home.cta.button.href}
                    className="inline-block bg-intallo-blue text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-blue-600 transition-all focus:outline-none focus:ring-2 focus:ring-white shadow-lg shadow-blue-500/25 active:scale-[0.98] duration-200"
                  >
                    {home.cta.button.label}
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
