import ActionLink from "@/components/ui/ActionLink";
import { contact } from "@/lib/content";
import { SpotlightCard } from "@/components/ui/Animations";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactInfo() {
  const { info } = contact;

  return (
    <SpotlightCard
      spotlightColor="rgba(0, 153, 255, 0.2)"
      className="glass-card rounded-3xl p-8 sm:p-10 border border-white/10 flex flex-col justify-between h-full relative overflow-hidden"
    >
      <div className="space-y-8 relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-mono tracking-wider text-emerald-400 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
            <span>SYSTEMS ACTIVE · ACCEPTING PROJECTS</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            {info.subheading}
          </h3>
          <p className="mt-2 text-sm text-gray-400 leading-relaxed">
            Reach out directly to discuss architecture, timeline, and deliverables with our engineering team.
          </p>
        </div>

        <div className="space-y-5 pt-2">
          {info.items.map((item, i) => {
            const Icon = i === 0 ? Mail : i === 1 ? Phone : MapPin;
            return (
              <div
                key={i}
                className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06]"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-[#1A76FF] shrink-0 mt-0.5">
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-gray-400 uppercase tracking-wider block">
                    {item.label}
                  </span>
                  {item.href ? (
                    <ActionLink
                      href={item.href}
                      className="text-sm sm:text-base font-medium text-white hover:text-[#1A76FF] transition-colors"
                    >
                      {item.value}
                    </ActionLink>
                  ) : (
                    <span className="text-sm sm:text-base font-medium text-gray-300">
                      {item.value}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Commitments & Socials */}
      <div className="mt-8 pt-6 border-t border-white/[0.08] relative z-10 space-y-4">
        <div className="flex items-center gap-2 text-xs font-mono text-gray-400">
          <span className="text-blue-400">Response Window:</span>
          <span>&lt; 24 business hours</span>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono text-gray-400">
          <span className="text-emerald-400">Privacy:</span>
          <span>Mutual NDA provided upon request</span>
        </div>
      </div>
    </SpotlightCard>
  );
}
