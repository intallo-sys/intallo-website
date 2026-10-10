import { home } from "@/lib/content";
import ActionLink from "@/components/ui/ActionLink";
import { ArrowUpRight } from "lucide-react";

export default function ServicesSection() {
  const { services } = home;

  return (
    <section id="services" className="py-24 md:py-32 relative bg-[#07090D] overflow-hidden border-t border-white/[0.06]">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-[#0C34C5]/10 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono tracking-wider text-blue-300 uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1A76FF]" />
              <span>{services.eyebrow}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-[1.12]">
              {services.heading}
            </h2>
            <p className="mt-4 text-base sm:text-lg text-gray-400">
              {services.subheading}
            </p>
          </div>

          <ActionLink
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-white/10 hover:bg-[#1A76FF] px-6 py-3 rounded-full transition-all self-start md:self-end"
          >
            <span>All Services & Scope</span>
            <ArrowUpRight className="w-4 h-4" />
          </ActionLink>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.items.map((service, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-[#0D111A] border border-white/10 hover:border-[#1A76FF]/40 transition-all duration-300 flex flex-col justify-between group shadow-lg hover:shadow-2xl hover:shadow-[#0C34C5]/15"
            >
              <div>
                <div className="text-sm font-mono text-gray-500 mb-6">
                  {service.number}
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-blue-200 transition-colors">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Deliverable Tags */}
              <div className="pt-6 mt-6 border-t border-white/[0.08]">
                <div className="text-[11px] font-mono uppercase tracking-wider text-gray-500 mb-2">
                  Deliverables
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {service.deliverables.map((del, dIdx) => (
                    <span
                      key={dIdx}
                      className="px-2.5 py-0.5 rounded-md bg-white/[0.05] border border-white/5 text-xs text-gray-300 font-mono"
                    >
                      {del}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
