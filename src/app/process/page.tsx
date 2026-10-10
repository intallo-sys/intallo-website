import type { Metadata } from "next";
import ActionLink from "@/components/ui/ActionLink";
import { processData } from "@/lib/content";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Delivery Process & Engineering Framework — Intallo",
  description:
    "Explore Intallo's 5-stage software delivery methodology: from operational discovery to zero-downtime deployment and 100% IP handover.",
  openGraph: {
    title: "Delivery Process & Engineering Framework — Intallo",
    description:
      "Explore Intallo's 5-stage software delivery methodology: from operational discovery to zero-downtime deployment and 100% IP handover.",
    url: "https://intallo.in/process",
  },
};

export default function ProcessPage() {
  const { hero, phases } = processData;

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

        {/* 5-Phase Methodology Detailed Breakdown */}
        <div className="space-y-12">
          {phases.map((phase, idx) => (
            <div
              key={idx}
              className="rounded-3xl bg-[#0D111A] border border-white/10 p-8 sm:p-12 relative overflow-hidden shadow-2xl"
            >
              <div className="flex flex-col lg:flex-row justify-between gap-8 items-start">
                <div className="max-w-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-mono text-[#1A76FF] font-bold uppercase">
                      {phase.phase}
                    </span>
                    <span className="text-xs font-mono text-gray-500">
                      {"//"} {phase.timeline}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-4">
                    {phase.title}
                  </h2>

                  <p className="text-base text-gray-400 leading-relaxed">
                    {phase.description}
                  </p>
                </div>

                {/* Deliverables Box */}
                <div className="w-full lg:w-96 p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3">
                  <div className="text-xs font-mono uppercase tracking-wider text-blue-300 font-semibold mb-2">
                    Verified Deliverables:
                  </div>
                  {phase.deliverables.map((del, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2.5 text-sm text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-[#1A76FF] shrink-0 mt-0.5" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Card */}
        <div className="mt-20 p-10 rounded-3xl bg-gradient-to-r from-[#0C34C5]/30 to-[#1A76FF]/20 border border-[#1A76FF]/40 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Ready to initiate discovery on your system?
          </h3>
          <p className="text-gray-300 max-w-xl mx-auto mb-6 text-sm sm:text-base">
            We will conduct an operational audit of your bottlenecks and deliver a concrete scope proposal.
          </p>
          <ActionLink
            href="/contact"
            className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-[#0C34C5] to-[#1A76FF] hover:from-[#002FA7] hover:to-[#0066FF] px-8 py-4 rounded-full shadow-lg shadow-blue-600/30 transition-all"
          >
            <span>Start a Project Enquiry</span>
            <ArrowUpRight className="w-4 h-4" />
          </ActionLink>
        </div>
      </div>
    </div>
  );
}
