import { home } from "@/lib/content";
import ActionLink from "@/components/ui/ActionLink";
import { Check } from "lucide-react";

export default function PackagesSection() {
  const { packages } = home;

  return (
    <section id="packages" className="py-24 md:py-32 relative bg-[#07090D] overflow-hidden border-t border-white/[0.06]">
      {/* Background Ambient Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0C34C5]/10 blur-[160px] rounded-full pointer-events-none -z-10" />

      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono tracking-wider text-blue-300 uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1A76FF]" />
            <span>{packages.eyebrow}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-[1.12]">
            {packages.heading}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-400">
            {packages.subheading}
          </p>
        </div>

        {/* Packages Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {packages.items.map((pkg) => (
            <div
              key={pkg.id}
              className={`rounded-3xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 relative ${
                pkg.popular
                  ? "bg-[#0E131F] border-2 border-[#1A76FF]/60 shadow-2xl shadow-[#0C34C5]/25"
                  : "bg-[#0D111A] border border-white/10 hover:border-white/20"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#1A76FF] text-[11px] font-mono tracking-wider uppercase text-white font-bold shadow-lg shadow-blue-500/30">
                  MOST POPULAR
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    {pkg.title}
                  </h3>
                </div>

                <div className="inline-block px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 text-xs font-mono text-blue-300 uppercase mb-4">
                  {pkg.badge}
                </div>

                <p className="text-sm text-gray-400 leading-relaxed mb-6">
                  {pkg.summary}
                </p>

                {/* Deliverables List */}
                <div className="space-y-3 pt-4 border-t border-white/[0.08] mb-8">
                  <div className="text-xs font-mono uppercase tracking-wider text-gray-500 mb-2">
                    Scope & Features Included:
                  </div>
                  {pkg.deliverables.map((del, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2.5 text-sm text-gray-300">
                      <Check className="w-4 h-4 text-[#1A76FF] shrink-0 mt-0.5" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="text-xs text-gray-500 font-mono mb-4">
                  Ideal for: {pkg.idealFor}
                </div>
                <ActionLink
                  href={`/contact?package=${pkg.id}`}
                  className={`w-full inline-flex items-center justify-center text-center font-medium text-sm py-3.5 px-6 rounded-full transition-all duration-200 ${
                    pkg.popular
                      ? "bg-gradient-to-r from-[#0C34C5] to-[#1A76FF] text-white hover:from-[#002FA7] hover:to-[#0066FF] shadow-lg shadow-blue-600/30"
                      : "bg-white/10 text-white hover:bg-white/15 border border-white/10"
                  }`}
                >
                  Request Scope Proposal
                </ActionLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
