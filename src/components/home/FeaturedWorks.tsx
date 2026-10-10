"use client";

import Image from "next/image";
import ActionLink from "@/components/ui/ActionLink";
import { home } from "@/lib/content";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

export default function FeaturedWorks() {
  const { featuredWork } = home;

  return (
    <section id="featured-work" className="py-24 md:py-32 relative bg-[#07090D] overflow-hidden border-t border-white/[0.06]">
      {/* Background Ambient Radial Glow */}
      <div className="absolute top-1/3 left-0 w-[550px] h-[550px] bg-[#0C34C5]/10 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-14 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono tracking-wider text-blue-300 uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1A76FF]" />
            <span>{featuredWork.eyebrow}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-[1.12]">
            {featuredWork.heading}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-400 leading-relaxed max-w-2xl">
            {featuredWork.subheading}
          </p>
        </div>

        {/* Project Showcase Cards */}
        <div className="space-y-12">
          {featuredWork.items.map((item, idx) => (
            <div
              key={item.id}
              className="rounded-3xl bg-[#0D111A] border border-white/10 hover:border-[#1A76FF]/40 transition-all duration-300 overflow-hidden shadow-2xl hover:shadow-[#0C34C5]/20 group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-8 md:p-12">
                {/* Text Content */}
                <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-mono text-gray-400">
                        {item.number}
                      </span>
                      <span className="text-xs font-mono tracking-wider text-[#1A76FF] uppercase">
                        {item.category}
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-mono text-emerald-400">
                        INTERACTIVE DEMO
                      </span>
                    </div>

                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
                      {item.name}
                    </h3>

                    <p className="mt-2 text-base font-medium text-blue-200/90">
                      {item.tagline}
                    </p>

                    <p className="mt-4 text-gray-400 text-sm sm:text-base leading-relaxed max-w-xl">
                      {item.description}
                    </p>
                  </div>

                  {/* Highlights Bullet List */}
                  <div className="space-y-2.5 pt-2">
                    {item.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2.5 text-sm text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-[#1A76FF] shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Link */}
                  <div className="pt-4">
                    <ActionLink
                      href={item.cta.href}
                      className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-white bg-white/[0.08] hover:bg-[#1A76FF] border border-white/10 px-5 py-2.5 rounded-full transition-all duration-200 group-hover:border-[#1A76FF]/40"
                    >
                      <span>{item.cta.label}</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </ActionLink>
                  </div>
                </div>

                {/* Media Preview */}
                <div className="lg:col-span-5 relative aspect-[16/11] rounded-2xl overflow-hidden bg-slate-900 border border-white/10">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 500px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D111A]/80 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
