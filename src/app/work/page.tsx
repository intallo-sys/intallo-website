import type { Metadata } from "next";
import Image from "next/image";
import ActionLink from "@/components/ui/ActionLink";
import { workData } from "@/lib/content";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Selected Work & Interactive Demos — Intallo",
  description:
    "Explore Intallo's live demonstration systems: direct hotel booking engines, restaurant QR ordering & KDS, and bakery production automation.",
  openGraph: {
    title: "Selected Work & Interactive Demos — Intallo",
    description:
      "Explore Intallo's live demonstration systems: direct hotel booking engines, restaurant QR ordering & KDS, and bakery production automation.",
    url: "https://intallo.in/work",
  },
};

export default function WorkPage() {
  const { hero, projects } = workData;

  return (
    <div className="bg-[#07090D] min-h-screen pt-32 pb-24 text-gray-300">
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#0C34C5]/12 blur-[160px] rounded-full pointer-events-none -z-10" />

      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono tracking-wider text-blue-300 uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1A76FF]" />
            <span>{hero.eyebrow}</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight leading-[1.08]">
            {hero.headingLines[0]} <br className="hidden sm:inline" />
            <span className="serif-accent italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-sky-200 to-white">
              {hero.headingLines[1]}
            </span>{" "}
            {hero.headingLines[2]}
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-gray-400 leading-relaxed max-w-2xl">
            {hero.body}
          </p>
        </div>

        {/* Projects Showcase */}
        <div className="space-y-20">
          {projects.map((project) => (
            <div
              key={project.id}
              id={project.id}
              className="rounded-3xl bg-[#0D111A] border border-white/10 p-6 sm:p-10 md:p-14 overflow-hidden shadow-2xl scroll-mt-28"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                {/* Visual Preview */}
                <div className="lg:col-span-6 relative aspect-[16/10] rounded-2xl overflow-hidden bg-slate-900 border border-white/10">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 600px"
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[11px] font-mono tracking-wider text-white">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>INTERACTIVE DEMO</span>
                  </div>
                </div>

                {/* Details & Specs */}
                <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
                  <div>
                    <div className="text-xs font-mono tracking-wider text-[#1A76FF] uppercase mb-2">
                      {project.category}
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                      {project.title}
                    </h2>
                    <p className="text-base font-medium text-blue-200/90 mt-1">
                      {project.subtitle}
                    </p>
                    <p className="mt-4 text-sm sm:text-base text-gray-400 leading-relaxed">
                      {project.summary}
                    </p>
                  </div>

                  {/* Architecture Specs */}
                  <div className="space-y-2.5 pt-2">
                    <div className="text-xs font-mono uppercase tracking-wider text-gray-500">
                      Technical Architecture & Pipeline:
                    </div>
                    {project.architecture.map((arch, aIdx) => (
                      <div key={aIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-[#1A76FF] shrink-0 mt-0.5" />
                        <span>{arch}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tags & Action */}
                  <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-white/[0.08]">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-md bg-white/[0.05] border border-white/10 text-xs font-mono text-gray-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <ActionLink
                      href={`/contact?project=${project.id}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-white/10 hover:bg-[#1A76FF] px-5 py-2.5 rounded-full transition-all"
                    >
                      <span>Inquire About This System</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </ActionLink>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
