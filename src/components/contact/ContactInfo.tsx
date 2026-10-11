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
            <span>ACCEPTING NEW PROJECTS</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            {info.subheading}
          </h3>
          <p className="mt-2 text-sm text-gray-400 leading-relaxed">
            Reach out directly to discuss architecture, timeline, and deliverables with our engineering team in Bengaluru.
          </p>
        </div>

        <div className="space-y-4 pt-2">
          {info.items.map((item, i) => {
            const Icon = item.label === "Email" ? Mail : item.label === "Location" ? MapPin : Phone;
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

          {/* Direct Mobile Lines */}
          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-[#1A76FF] shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-gray-400 uppercase tracking-wider block">
                  Direct Mobile Lines
                </span>
                <span className="text-xs text-gray-400">Call or message our team directly</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
              {info.phones.map((phone, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-white/15 transition-colors"
                >
                  <ActionLink
                    href={`tel:${phone.tel}`}
                    className="text-xs sm:text-sm font-mono text-gray-200 hover:text-white transition-colors"
                  >
                    {phone.number}
                  </ActionLink>
                  <ActionLink
                    href={phone.wa}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono font-medium text-emerald-400 hover:text-white bg-emerald-500/15 hover:bg-emerald-500/30 px-2.5 py-1 rounded-md border border-emerald-500/25 transition-all"
                    aria-label={`Chat on WhatsApp with ${phone.number}`}
                  >
                    WA
                  </ActionLink>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Instant Connect & Discovery Call Actions */}
        <div className="pt-2 space-y-3">
          <ActionLink
            href={info.whatsapp.href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2.5 bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/30 text-emerald-300 hover:text-white font-medium text-sm px-5 py-3 rounded-xl transition-all"
          >
            <Phone className="w-4 h-4 text-emerald-400" />
            <span>{info.whatsapp.label}</span>
          </ActionLink>

          <ActionLink
            href={info.discoveryCall.href}
            className="w-full inline-flex items-center justify-center gap-2 bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-gray-200 hover:text-white font-medium text-sm px-5 py-3 rounded-xl transition-all"
          >
            <span>{info.discoveryCall.label}</span>
          </ActionLink>
        </div>
      </div>

      {/* Commitments & Socials */}
      <div className="mt-8 pt-6 border-t border-white/[0.08] relative z-10 space-y-3">
        <div className="flex items-center gap-2 text-xs font-mono text-gray-400">
          <span className="text-blue-400">Response Window:</span>
          <span>&lt; 24 business hours</span>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono text-gray-400">
          <span className="text-emerald-400">Privacy:</span>
          <span>Mutual NDA provided upon request</span>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono text-gray-400">
          <span className="text-purple-400">Location:</span>
          <span>Bengaluru, Karnataka, India</span>
        </div>
      </div>
    </SpotlightCard>
  );
}
