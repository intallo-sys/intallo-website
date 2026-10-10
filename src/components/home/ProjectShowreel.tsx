"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import ActionLink from "@/components/ui/ActionLink";
import { home } from "@/lib/content";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";

export default function ProjectShowreel() {
  const { projectShowreel } = home;
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 20);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 20);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -460 : 460;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      setTimeout(checkScroll, 350);
    }
  };

  return (
    <section id="showreel" className="py-24 md:py-32 relative bg-[#07090D] overflow-hidden border-t border-white/[0.06]">
      {/* Background Ambient Radial Accent */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-[#0C34C5]/10 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        {/* Section Header with Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono tracking-wider text-blue-300 uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1A76FF]" />
              {projectShowreel.eyebrow}
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              {projectShowreel.heading}
            </h2>
            <p className="mt-3 text-base text-gray-400 max-w-xl">
              {projectShowreel.subheading}
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3 self-start md:self-end">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              aria-label="Scroll showreel left"
              className={`p-3 rounded-full border transition-all ${
                canScrollLeft
                  ? "bg-white/[0.06] border-white/20 text-white hover:bg-white/15"
                  : "bg-white/[0.02] border-white/5 text-gray-600 cursor-not-allowed"
              }`}
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              aria-label="Scroll showreel right"
              className={`p-3 rounded-full border transition-all ${
                canScrollRight
                  ? "bg-white/[0.06] border-white/20 text-white hover:bg-white/15"
                  : "bg-white/[0.02] border-white/5 text-gray-600 cursor-not-allowed"
              }`}
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Draggable & Scrollable Horizontal Reel */}
        <div
          ref={scrollContainerRef}
          onScroll={checkScroll}
          className="flex gap-6 overflow-x-auto pb-8 pt-2 scrollbar-none snap-x snap-mandatory cursor-grab active:cursor-grabbing select-none"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {projectShowreel.items.map((item, idx) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-[340px] sm:w-[420px] md:w-[460px] snap-start group relative rounded-2xl bg-[#0D111A] border border-white/10 hover:border-[#1A76FF]/40 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-xl hover:shadow-2xl hover:shadow-[#0C34C5]/20"
            >
              {/* Media Preview Container */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  sizes="(max-width: 768px) 340px, 460px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D111A] via-transparent to-black/30" />
                
                {/* Live Demo Status Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[11px] font-mono tracking-wider text-white">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_6px_#34d399]" />
                  <span>INTERACTIVE DEMO</span>
                </div>

                <div className="absolute top-4 right-4 text-xs font-mono text-gray-400 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
                  0{idx + 1}
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-[11px] font-mono tracking-wider text-[#1A76FF] uppercase mb-1">
                    {item.category}
                  </div>
                  <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-blue-200 transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-sm text-gray-400 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Highlights/Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {item.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-0.5 rounded-md bg-white/[0.05] border border-white/10 text-[11px] text-gray-300 font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Action Strip */}
                <div className="pt-6 mt-6 border-t border-white/[0.08] flex items-center justify-between">
                  <span className="text-[11px] font-mono text-gray-400 truncate max-w-[240px]">
                    {item.metrics}
                  </span>
                  <ActionLink
                    href={item.href}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-white/10 hover:bg-[#1A76FF] px-3.5 py-1.5 rounded-full transition-all"
                  >
                    <span>View Specs</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </ActionLink>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
