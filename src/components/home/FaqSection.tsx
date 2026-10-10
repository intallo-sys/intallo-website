"use client";

import { useState } from "react";
import { home } from "@/lib/content";
import { Plus, Minus } from "lucide-react";

export default function FaqSection() {
  const { faqs } = home;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faqs" className="py-24 md:py-32 relative bg-[#07090D] overflow-hidden border-t border-white/[0.06]">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 right-1/4 w-[450px] h-[450px] bg-[#0C34C5]/10 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="mx-auto max-w-[1080px] px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono tracking-wider text-blue-300 uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1A76FF]" />
            <span>{faqs.eyebrow}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-[1.12]">
            {faqs.heading}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-400">
            {faqs.subheading}
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.items.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="rounded-2xl bg-[#0D111A] border border-white/10 hover:border-white/20 transition-all overflow-hidden"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full py-6 px-6 sm:px-8 flex items-center justify-between text-left gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    {item.question}
                  </span>
                  <div className="p-2 rounded-full bg-white/[0.05] text-gray-300 shrink-0">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 sm:px-8 pb-6 pt-0 text-sm sm:text-base text-gray-400 leading-relaxed border-t border-white/[0.06] mt-1 pt-4">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
