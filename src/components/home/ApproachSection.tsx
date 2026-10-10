import { home } from "@/lib/content";

export default function ApproachSection() {
  const { approach } = home;

  return (
    <section id="approach" className="py-24 md:py-32 relative bg-[#07090D] overflow-hidden border-t border-white/[0.06]">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-[#0C34C5]/10 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono tracking-wider text-blue-300 uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1A76FF]" />
            <span>{approach.eyebrow}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-[1.12]">
            {approach.heading}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-400">
            {approach.subheading}
          </p>
        </div>

        {/* 5-Step Process Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {approach.steps.map((step, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#0D111A] border border-white/10 hover:border-[#1A76FF]/40 transition-all duration-300 flex flex-col justify-between group shadow-lg"
            >
              <div>
                <div className="text-3xl font-mono font-bold text-gray-600 group-hover:text-[#1A76FF] transition-colors mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
