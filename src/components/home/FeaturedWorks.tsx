"use client";

import Image from "next/image";
import ActionLink from "@/components/ui/ActionLink";
import { SpotlightCard } from "@/components/ui/Animations";
import { motion } from "framer-motion";

const projects = [
  {
    name: "Stayora",
    category: "HOSPITALITY ARCHITECTURE / WEB PLATFORM",
    description:
      "A high-concurrency digital booking engine engineered for modern boutique hotels, featuring instant reservation processing, multi-currency checkout, and calendar sync.",
    image: "/images/work/stayora.jpg",
    imageAlt: "Stayora hotel booking platform interface",
    tags: ["Next.js", "Realtime Sync", "Stripe API", "PostgreSQL"],
    href: "/contact",
  },
  {
    name: "SmartFlow",
    category: "LOGISTICS & ENTERPRISE AUTOMATION",
    description:
      "An automated workflow engine that orchestrates multi-vendor logistics data, eliminates manual order entry, and reduces operational fulfillment friction.",
    image: "/images/work/smartflow.jpg",
    imageAlt: "SmartFlow enterprise automation dashboard",
    tags: ["Event Pipelines", "Webhook Gateway", "Distributed Queue", "Node.js"],
    href: "/contact",
  },
];

export default function FeaturedWorks() {
  return (
    <section id="selected-work" className="py-24 md:py-32 relative overflow-hidden scroll-mt-20">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-14 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono tracking-wider text-blue-400 mb-4">
            <span>FEATURED CASE STUDIES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-[1.12]">
            <span className="serif-accent italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-cyan-200 to-white">
              Proven systems
            </span>{" "}
            in production.
          </h2>
          <p className="mt-5 text-base sm:text-lg text-gray-400 leading-relaxed max-w-2xl">
            A glimpse into custom software architectures and automation pipelines we&apos;ve designed, deployed, and scaled.
          </p>
        </div>

        {/* Project Showcase Cards */}
        <div className="space-y-10">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
            >
              <SpotlightCard
                spotlightColor="rgba(0, 153, 255, 0.18)"
                className="glass-card glass-card-hover rounded-3xl overflow-hidden border border-white/[0.08] hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-8 md:p-12">
                  {/* Left Column: Context & Metadata */}
                  <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
                    <div>
                      <span className="text-xs font-mono tracking-wider text-blue-400 uppercase block mb-3">
                        {project.category}
                      </span>
                      <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
                        {project.name}
                      </h3>
                      <p className="mt-4 text-gray-400 text-sm sm:text-base leading-relaxed max-w-lg">
                        {project.description}
                      </p>
                    </div>

                    {/* Tag Pills */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-gray-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action link */}
                    <div className="pt-2">
                      <ActionLink
                        href={project.href}
                        className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-[#0099FF] hover:text-white transition-colors duration-200 group"
                      >
                        <span>Start Similar Build</span>
                        <svg
                          className="w-4 h-4 transition-transform group-hover:translate-x-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </ActionLink>
                    </div>
                  </div>

                  {/* Right Column: Visual Frame */}
                  <div className="lg:col-span-6 relative rounded-2xl overflow-hidden aspect-[16/10] bg-black/40 border border-white/10 group">
                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      fill
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#07090D]/80 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
