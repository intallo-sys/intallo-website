import type { Metadata } from "next";
import ActionLink from "@/components/ui/ActionLink";
import { solutionsData } from "@/lib/content";
import { CheckCircle2, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Industry Solutions — Intallo",
  description:
    "Tailored digital systems and automated operational pipelines for hotels, restaurants, bakeries, and growing businesses.",
  openGraph: {
    title: "Industry Solutions — Intallo",
    description:
      "Tailored digital systems and automated operational pipelines for hotels, restaurants, bakeries, and growing businesses.",
    url: "https://intallo.in/solutions",
  },
};

export default function SolutionsPage() {
  const { hero, items } = solutionsData;

  return (
    <div className="bg-[#07090D] min-h-screen pt-32 pb-24 text-gray-300">
      {/* Ambient Background Radial Glow */}
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

        {/* Solutions Grid */}
        <div className="space-y-16">
          {items.map((solution, idx) => (
            <div
              key={solution.id}
              className="rounded-3xl bg-[#0D111A] border border-white/10 p-8 sm:p-12 md:p-16 relative overflow-hidden shadow-2xl"
            >
              <div className="flex flex-col lg:flex-row justify-between gap-12">
                {/* Left Side: Summary & Pain Points */}
                <div className="max-w-xl">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-mono text-gray-500">
                      {solution.number}
                    </span>
                    <span className="text-xs font-mono tracking-wider text-[#1A76FF] uppercase">
                      INDUSTRY BLUEPRINT
                    </span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
                    {solution.title}
                  </h2>

                  <p className="text-base text-gray-300 leading-relaxed mb-8">
                    {solution.summary}
                  </p>

                  <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3">
                    <div className="text-xs font-mono uppercase tracking-wider text-red-400/90 font-semibold mb-2">
                      Operational Bottlenecks Replaced:
                    </div>
                    {solution.painPoints.map((point, pIdx) => (
                      <div key={pIdx} className="text-sm text-gray-400 flex items-start gap-2">
                        <span className="text-red-400 shrink-0 font-bold">✕</span>
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Side: Features & Live Action */}
                <div className="max-w-xl flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="text-xs font-mono uppercase tracking-wider text-blue-300 font-semibold mb-2">
                      Digital System Features:
                    </div>
                    {solution.solutionFeatures.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-3 text-sm sm:text-base text-gray-200">
                        <CheckCircle2 className="w-5 h-5 text-[#1A76FF] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-10">
                    <ActionLink
                      href={solution.demoLink}
                      className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-[#0C34C5] to-[#1A76FF] hover:from-[#002FA7] hover:to-[#0066FF] px-6 py-3.5 rounded-full shadow-lg shadow-blue-600/30 transition-all"
                    >
                      <span>Explore Demo & Case Study</span>
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
