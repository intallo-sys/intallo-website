"use client";

import { motion } from "framer-motion";
import { SpotlightCard } from "@/components/ui/Animations";

export default function BentoGrid() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono tracking-wider text-blue-400 mb-4">
            <span>CORE CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-[1.12]">
            Engineering{" "}
            <span className="serif-accent italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-cyan-200 to-white">
              digital infrastructure
            </span>{" "}
            for tomorrow.
          </h2>
          <p className="mt-5 text-base sm:text-lg text-gray-400 leading-relaxed max-w-2xl">
            From reactive web platforms to automated backend pipelines, we build dependable systems that eliminate bottlenecks and drive commercial growth.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Card 1: Large Span (2 Cols) - Web Platforms */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <SpotlightCard
              spotlightColor="rgba(0, 153, 255, 0.16)"
              className="glass-card glass-card-hover p-8 md:p-10 rounded-3xl h-full flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono tracking-wider text-blue-400 uppercase">
                    CAPABILITY 01 / SCALABILITY
                  </span>
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-mono text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>HIGH AVAILABILITY</span>
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
                  Custom Web Platforms Built to Scale
                </h3>
                <p className="mt-4 text-gray-400 text-sm sm:text-base leading-relaxed max-w-xl">
                  Enterprise-grade web applications engineered with Next.js, Node.js, and hardened cloud infrastructure. Fast load times, responsive architectures, and rock-solid uptime.
                </p>
              </div>

              {/* Visual Mock Platform Telemetry */}
              <div className="mt-10 p-5 rounded-2xl bg-black/40 border border-white/[0.06] backdrop-blur-md">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pb-4 border-b border-white/[0.06]">
                  <div>
                    <span className="text-[11px] font-mono text-gray-500 uppercase block">Cluster SLA</span>
                    <span className="text-lg font-mono font-bold text-emerald-400">99.98%</span>
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-gray-500 uppercase block">Edge Latency</span>
                    <span className="text-lg font-mono font-bold text-cyan-300">22ms</span>
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-gray-500 uppercase block">Type Coverage</span>
                    <span className="text-lg font-mono font-bold text-blue-400">100% TS</span>
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-gray-500 uppercase block">Security Tier</span>
                    <span className="text-lg font-mono font-bold text-purple-300">Zero-Trust</span>
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-2">
                  <span className="text-[11px] font-mono text-gray-500 mr-2">Core Stack:</span>
                  {["Next.js 16", "TypeScript", "Tailwind CSS", "PostgreSQL", "Node.js", "Docker"].map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/10 text-[11px] font-mono text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Card 2: 1 Col - Automation & Workflows */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-1"
          >
            <SpotlightCard
              spotlightColor="rgba(0, 229, 255, 0.16)"
              className="glass-card glass-card-hover p-8 md:p-10 rounded-3xl h-full flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono tracking-wider text-cyan-400 uppercase">
                    CAPABILITY 02 / AUTOMATION
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  Business Automation &amp; AI
                </h3>
                <p className="mt-4 text-gray-400 text-sm sm:text-base leading-relaxed">
                  Connect disjointed SaaS applications, eliminate repetitive manual workflows, and build autonomous background processing engines.
                </p>
              </div>

              {/* Visual Pipeline Flow */}
              <div className="mt-10 p-5 rounded-2xl bg-black/40 border border-white/[0.06] backdrop-blur-md space-y-3">
                <div className="text-[11px] font-mono text-gray-500 uppercase tracking-wider mb-2">
                  Event Pipeline Architecture
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-3 p-2 rounded-lg bg-white/[0.03] border border-white/5">
                    <span className="w-2 h-2 rounded-full bg-blue-400" />
                    <span className="text-xs font-mono text-gray-300">01. Webhook Ingestion</span>
                    <span className="ml-auto text-[10px] font-mono text-gray-500">&lt;5ms</span>
                  </div>
                  <div className="flex items-center gap-3 p-2 rounded-lg bg-white/[0.03] border border-white/5">
                    <span className="w-2 h-2 rounded-full bg-cyan-400" />
                    <span className="text-xs font-mono text-gray-300">02. Validation &amp; Transform</span>
                    <span className="ml-auto text-[10px] font-mono text-emerald-400">Verified</span>
                  </div>
                  <div className="flex items-center gap-3 p-2 rounded-lg bg-white/[0.03] border border-white/5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="text-xs font-mono text-gray-300">03. Automated Sync &amp; Dispatch</span>
                    <span className="ml-auto text-[10px] font-mono text-emerald-400">Live</span>
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Row 2: 3 Philosophy Cards */}
          {/* Card 3: Discovery First */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <SpotlightCard
              spotlightColor="rgba(0, 153, 255, 0.12)"
              className="glass-card glass-card-hover p-8 md:p-10 rounded-3xl h-full relative overflow-hidden group flex flex-col justify-between"
            >
              <div className="serif-accent absolute -bottom-4 right-4 text-7xl md:text-8xl font-bold text-white/[0.03] select-none pointer-events-none group-hover:text-blue-500/[0.07] transition-colors">
                01
              </div>

              <div>
                <span className="text-xs font-mono tracking-wider text-blue-400 uppercase block mb-6">
                  PHILOSOPHY 01
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Discovery First
                </h3>
                <p className="mt-3 text-gray-400 text-sm leading-relaxed">
                  We diagnose the real commercial bottleneck before writing a single line of production code. Architecture follows clear business intent.
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/[0.06] text-xs font-mono text-gray-500 flex items-center justify-between">
                <span>Phase: Strategy &amp; Scoping</span>
                <span className="text-blue-400">→</span>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Card 4: Clean Engineering */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-1"
          >
            <SpotlightCard
              spotlightColor="rgba(0, 229, 255, 0.12)"
              className="glass-card glass-card-hover p-8 md:p-10 rounded-3xl h-full relative overflow-hidden group flex flex-col justify-between"
            >
              <div className="serif-accent absolute -bottom-4 right-4 text-7xl md:text-8xl font-bold text-white/[0.03] select-none pointer-events-none group-hover:text-cyan-500/[0.07] transition-colors">
                02
              </div>

              <div>
                <span className="text-xs font-mono tracking-wider text-cyan-400 uppercase block mb-6">
                  PHILOSOPHY 02
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Clean Engineering
                </h3>
                <p className="mt-3 text-gray-400 text-sm leading-relaxed">
                  Strict type safety, automated linting, test suites, and transparent codebase ergonomics that your in-house engineers will appreciate.
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/[0.06] text-xs font-mono text-gray-500 flex items-center justify-between">
                <span>Phase: Architecture &amp; Code</span>
                <span className="text-cyan-400">→</span>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Card 5: Continuous Scale */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-1"
          >
            <SpotlightCard
              spotlightColor="rgba(168, 85, 247, 0.12)"
              className="glass-card glass-card-hover p-8 md:p-10 rounded-3xl h-full relative overflow-hidden group flex flex-col justify-between"
            >
              <div className="serif-accent absolute -bottom-4 right-4 text-7xl md:text-8xl font-bold text-white/[0.03] select-none pointer-events-none group-hover:text-purple-500/[0.07] transition-colors">
                03
              </div>

              <div>
                <span className="text-xs font-mono tracking-wider text-purple-400 uppercase block mb-6">
                  PHILOSOPHY 03
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Continuous Scale
                </h3>
                <p className="mt-3 text-gray-400 text-sm leading-relaxed">
                  Built for longevity. Our systems use modular primitives designed to scale horizontally as your user base and transaction volumes expand.
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/[0.06] text-xs font-mono text-gray-500 flex items-center justify-between">
                <span>Phase: Deployment &amp; Scale</span>
                <span className="text-purple-400">→</span>
              </div>
            </SpotlightCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
