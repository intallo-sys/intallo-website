import { home } from "@/lib/content";

export default function PlatformsStrip() {
  const { platforms } = home;

  return (
    <section className="py-20 bg-[#07090D] border-t border-white/[0.06] overflow-hidden">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono tracking-wider text-blue-300 uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1A76FF]" />
            <span>{platforms.eyebrow}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
            {platforms.heading}
          </h2>
          <p className="mt-2 text-sm text-gray-400">
            {platforms.subheading}
          </p>
        </div>

        {/* Technology Tags Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {platforms.items.map((tech, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-[#0D111A] border border-white/10 hover:border-[#1A76FF]/30 transition-all flex flex-col justify-between"
            >
              <div className="text-[11px] font-mono tracking-wider text-gray-500 uppercase">
                {tech.category}
              </div>
              <div className="mt-2 text-lg font-bold text-white tracking-tight">
                {tech.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
