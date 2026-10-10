"use client";

import ActionLink from "@/components/ui/ActionLink";
import { home } from "@/lib/content";
import { Mail, ArrowUpRight } from "lucide-react";

export default function CtaSection() {
  const { cta } = home;

  return (
    <section className="py-24 md:py-32 relative bg-[#07090D] overflow-hidden border-t border-white/[0.06]">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[900px] h-[450px] bg-gradient-to-tr from-[#0C34C5]/25 via-[#1A76FF]/15 to-transparent blur-[160px] rounded-full pointer-events-none -z-10" />

      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl p-8 sm:p-14 md:p-20 text-center relative overflow-hidden bg-[#0D111A] border border-white/10 shadow-2xl shadow-black/80">
          {/* Subtle Ambient Corner Orbs */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#1A76FF]/15 blur-3xl rounded-full pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#0C34C5]/20 blur-3xl rounded-full pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono tracking-wider text-blue-300 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1A76FF]" />
              <span>{cta.eyebrow}</span>
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-[1.12]">
              Turn Manual Work{" "}
              <span className="serif-accent italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-sky-200 to-white drop-shadow-[0_0_35px_rgba(26,118,255,0.35)]">
                Into Digital Solutions.
              </span>
            </h2>

            <p className="text-gray-400 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              {cta.body}
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <ActionLink
                href={cta.button.href}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#0C34C5] to-[#1A76FF] hover:from-[#002FA7] hover:to-[#0066FF] text-white font-medium text-base px-8 py-4 rounded-full shadow-lg shadow-blue-600/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 min-w-[200px]"
              >
                <span>{cta.button.label}</span>
                <ArrowUpRight className="w-4 h-4" />
              </ActionLink>

              <ActionLink
                href={`mailto:${cta.contactEmail}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/[0.05] hover:bg-white/[0.09] text-gray-200 hover:text-white border border-white/10 hover:border-white/20 font-medium text-base px-8 py-4 rounded-full backdrop-blur-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 min-w-[200px]"
              >
                <Mail className="w-4 h-4" />
                <span>{cta.contactEmail}</span>
              </ActionLink>
            </div>

            {/* Commitments Bar */}
            <div className="pt-8 border-t border-white/[0.08] flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-gray-500">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Response within 24h</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1A76FF]" />
                <span>Direct Engineering Discovery</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                <span>100% Client-Owned IP</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
