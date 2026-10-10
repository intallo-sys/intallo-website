import { home } from "@/lib/content";

export default function PositioningIntro() {
  const { positioning } = home;

  return (
    <section className="py-24 md:py-32 relative bg-[#07090D] overflow-hidden border-t border-white/[0.06]">
      {/* Ambient Blue Glow Orb */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[480px] h-[480px] bg-[#0C34C5]/12 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono tracking-wider text-blue-300 uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1A76FF]" />
            {positioning.eyebrow}
          </div>

          {/* Editorial Headline */}
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-[1.12]">
            We combine design craft, software engineering, and{" "}
            <span className="serif-accent italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-sky-200 to-white">
              business automation.
            </span>
          </h2>

          {/* High-Impact Prose */}
          <p className="mt-8 text-lg sm:text-xl text-gray-300 leading-relaxed font-normal">
            {positioning.body}
          </p>
        </div>

        {/* Triple Foundation Stats Grid */}
        <div className="mt-16 pt-12 border-t border-white/[0.08] grid grid-cols-1 sm:grid-cols-3 gap-8">
          {positioning.stats.map((stat, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
              <div className="text-3xl sm:text-4xl font-mono font-bold text-white">
                {stat.value}
              </div>
              <div className="mt-2 text-sm font-mono uppercase tracking-wider text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
