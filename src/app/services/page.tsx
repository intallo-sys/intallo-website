import type { Metadata } from "next";
import Image from "next/image";
import ActionLink from "@/components/ui/ActionLink";
import Container from "@/components/ui/Container";
import { services } from "@/lib/content";
import { SpotlightCard } from "@/components/ui/Animations";
import CtaSection from "@/components/home/CtaSection";

export const metadata: Metadata = {
  title: "Services & Systems Architecture — Intallo",
  description:
    "Explore Intallo's core engineering capabilities: custom web platforms, event-driven workflow automation, and connected enterprise software.",
  openGraph: {
    title: "Services & Systems Architecture — Intallo",
    description:
      "Explore Intallo's core engineering capabilities: custom web platforms, event-driven workflow automation, and connected enterprise software.",
    type: "website",
    siteName: "Intallo",
  },
  twitter: {
    card: "summary_large_image",
    title: "Services & Systems Architecture — Intallo",
    description:
      "Explore Intallo's core engineering capabilities: custom web platforms, event-driven workflow automation, and connected enterprise software.",
  },
};

const serviceDetails = [
  {
    number: "01",
    title: "Web & Digital Platforms",
    subtitle: "High-concurrency web applications, customer portals, and enterprise SaaS.",
    description:
      "We design and build bespoke web platforms engineered for maximum uptime, snappy reactivity, and intuitive user experiences. Every application is built with modern full-stack frameworks and zero-bloat standards.",
    metrics: [
      { label: "Architecture", value: "Next.js 16 + React 19" },
      { label: "Target Uptime", value: "99.98% SLA" },
      { label: "Performance", value: "<100ms Edge TTFB" },
      { label: "Coverage", value: "Strict TypeScript" },
    ],
    tags: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS", "Redis"],
    cta: { label: "Initiate Web Build →", href: "/contact" },
  },
  {
    number: "02",
    title: "Workflow & Business Automation",
    subtitle: "Autonomous background pipelines, webhook gateways, and automated operations.",
    description:
      "Eliminate repetitive manual busywork and human data-entry errors. We build resilient asynchronous event queues, connect your disjointed SaaS tools, and automate mission-critical workflows with full auditability.",
    metrics: [
      { label: "Throughput", value: "Event-Driven" },
      { label: "Retry Policy", value: "Exponential Backoff" },
      { label: "Data Quality", value: "Strict Validation" },
      { label: "Human Effort", value: "Zero Repetitive Work" },
    ],
    tags: ["Webhook Gateways", "BullMQ", "Event Streams", "SaaS Sync", "API Routing"],
    cta: { label: "Automate Workflows →", href: "/contact" },
  },
  {
    number: "03",
    title: "Connected Business Systems",
    subtitle: "Custom ERP modules, internal operations hubs, and centralized data layers.",
    description:
      "Bridge gaps between your sales, operations, and fulfillment teams. We build custom internal tools and connected operational platforms designed specifically around how your business works.",
    metrics: [
      { label: "Source of Truth", value: "Centralized" },
      { label: "Access Control", value: "RBAC Security" },
      { label: "Integrations", value: "Multi-Cloud" },
      { label: "Telemetry", value: "Full Audit Trails" },
    ],
    tags: ["Operations Hubs", "Prisma ORM", "Secure Auth", "Real-time Telemetry"],
    cta: { label: "Build Business System →", href: "/contact" },
  },
];

const technicalStandards = [
  {
    title: "Type-Safe Rigor",
    description: "End-to-end static typing across frontend and API layers prevents runtime defects and regressions.",
    badge: "Reliability",
  },
  {
    title: "Event-Driven Architecture",
    description: "Decoupled asynchronous message processing keeps core APIs instantaneous even under high loads.",
    badge: "Throughput",
  },
  {
    title: "Zero Vendor Lock-in",
    description: "Clean codebases built on portable industry standards, open protocols, and modular primitives.",
    badge: "Longevity",
  },
  {
    title: "Observability & Security",
    description: "Built-in structured logging, automated health probes, and least-privilege credential management.",
    badge: "Compliance",
  },
];

export default function ServicesPage() {
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
              {services.hero.eyebrow}
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight leading-[1.1]">
            Digital systems built to{" "}
            <span className="serif-accent italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-cyan-200 to-white">
              solve real bottlenecks.
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            {services.hero.body}
          </p>
        </Container>
      </section>

      {/* 2. Core Service Offerings (Bento-style Cards) */}
      <section className="py-12 md:py-20">
        <Container className="space-y-12 max-w-[1320px]">
          <div className="max-w-2xl">
            <span className="text-xs font-mono tracking-wider text-blue-400 uppercase block mb-3">
              WHAT WE ENGINEER
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Comprehensive capabilities, zero unnecessary complexity.
            </h2>
          </div>

          <div className="space-y-10">
            {serviceDetails.map((service, i) => (
              <SpotlightCard
                key={i}
                spotlightColor="rgba(0, 153, 255, 0.16)"
                className="glass-card glass-card-hover rounded-3xl p-8 sm:p-10 md:p-14 border border-white/[0.08] relative overflow-hidden group"
              >
                {/* Large watermark numeral */}
                <div className="serif-accent absolute top-6 right-8 text-7xl md:text-9xl font-bold text-white/[0.03] select-none pointer-events-none group-hover:text-blue-500/[0.07] transition-colors">
                  {service.number}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
                  {/* Left Column: Scope & Description */}
                  <div className="lg:col-span-7 space-y-6">
                    <div>
                      <span className="text-xs font-mono tracking-wider text-[#0099FF] uppercase block mb-2">
                        SERVICE {service.number}
                      </span>
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
                        {service.title}
                      </h3>
                      <p className="mt-2 text-base text-cyan-300/90 font-medium">
                        {service.subtitle}
                      </p>
                      <p className="mt-4 text-sm sm:text-base text-gray-400 leading-relaxed max-w-xl">
                        {service.description}
                      </p>
                    </div>

                    {/* Tech Chips */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {service.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-gray-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Button */}
                    <div className="pt-2">
                      <ActionLink
                        href={service.cta.href}
                        className="inline-flex items-center gap-2 bg-[#0099FF] hover:bg-[#0088EE] text-white text-sm font-medium px-6 py-3 rounded-full shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
                      >
                        <span>{service.cta.label}</span>
                      </ActionLink>
                    </div>
                  </div>

                  {/* Right Column: Architectural Telemetry */}
                  <div className="lg:col-span-5 bg-black/40 border border-white/[0.06] rounded-2xl p-6 backdrop-blur-md space-y-4">
                    <span className="text-xs font-mono text-gray-400 uppercase tracking-wider block border-b border-white/[0.06] pb-3">
                      Architectural Targets
                    </span>
                    <div className="space-y-3">
                      {service.metrics.map((metric, mIdx) => (
                        <div
                          key={mIdx}
                          className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/5"
                        >
                          <span className="text-xs font-mono text-gray-400">{metric.label}</span>
                          <span className="text-sm font-mono font-bold text-white">{metric.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </Container>
      </section>

      {/* 3. Architectural Standards */}
      <section className="py-16 md:py-24 border-t border-white/[0.06]">
        <Container className="max-w-[1320px]">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-mono tracking-wider text-blue-400 uppercase block mb-3">
              STANDARDS & DISCIPLINE
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              How we guarantee production reliability.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {technicalStandards.map((std, idx) => (
              <SpotlightCard
                key={idx}
                spotlightColor="rgba(0, 153, 255, 0.12)"
                className="glass-card glass-card-hover rounded-2xl p-6 border border-white/[0.08] flex flex-col justify-between"
              >
                <div>
                  <span className="text-[11px] font-mono tracking-wider text-cyan-400 uppercase block mb-4">
                    {std.badge}
                  </span>
                  <h3 className="text-lg font-bold text-white">{std.title}</h3>
                  <p className="mt-2 text-sm text-gray-400 leading-relaxed">{std.description}</p>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. Bottom Consultation CTA */}
      <CtaSection />
    </div>
  );
}
