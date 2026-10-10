"use client";

import ActionLink from "@/components/ui/ActionLink";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] md:min-h-[95vh] flex items-center justify-center pt-28 pb-16 md:py-36 overflow-hidden">
      {/* Ambient Radial Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] md:w-[850px] h-[550px] md:h-[650px] bg-gradient-to-tr from-[#0099FF]/20 via-[#00E5FF]/10 to-transparent blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-blue-700/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      {/* Decorative Grid Mesh Overlay */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none -z-10"
        aria-hidden="true" 
      />

      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Systems Pill Beacon */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md mb-8 shadow-inner shadow-white/5"
        >
          <span className="w-2 h-2 rounded-full bg-[#0099FF] animate-pulse shadow-[0_0_10px_#0099FF]" />
          <span className="text-xs md:text-sm font-mono tracking-wider text-blue-200/90 uppercase">
            Crafting Digital Systems for Modern Businesses
          </span>
        </motion.div>

        {/* High-Impact Headline with Editorial Serif Accent */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-[84px] font-bold text-white tracking-tight leading-[1.08] max-w-5xl mx-auto"
        >
          Create Bold. Deliver{" "}
          <span className="serif-accent italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-cyan-200 to-white drop-shadow-[0_0_35px_rgba(0,153,255,0.3)]">
            Intelligent Systems.
          </span>
        </motion.h1>

        {/* Descriptive Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 md:mt-8 text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-normal"
        >
          We engineer high-performance web platforms, enterprise software, and automated workflows designed to accelerate business operations and scale reliably.
        </motion.p>

        {/* Dual Call-to-Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 md:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5"
        >
          <ActionLink
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#0099FF] hover:bg-[#0088EE] text-white font-medium text-base px-8 py-4 rounded-full shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 min-w-[190px]"
          >
            <span>Start a Project</span>
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </ActionLink>

          <ActionLink
            href="#selected-work"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/[0.05] hover:bg-white/[0.09] text-gray-200 hover:text-white border border-white/10 hover:border-white/20 font-medium text-base px-8 py-4 rounded-full backdrop-blur-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 min-w-[190px]"
          >
            <span>Explore Our Works</span>
          </ActionLink>
        </motion.div>

        {/* Engineering Proof Metrics Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 md:mt-24 pt-8 border-t border-white/[0.08] max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-left"
        >
          <div>
            <div className="font-mono text-2xl md:text-3xl font-bold text-white">99.98%</div>
            <div className="text-xs text-gray-500 mt-1 uppercase tracking-wider">Production SLA</div>
          </div>
          <div>
            <div className="font-mono text-2xl md:text-3xl font-bold text-white">&lt;100ms</div>
            <div className="text-xs text-gray-500 mt-1 uppercase tracking-wider">API Target Latency</div>
          </div>
          <div>
            <div className="font-mono text-2xl md:text-3xl font-bold text-white">Zero-Lockin</div>
            <div className="text-xs text-gray-500 mt-1 uppercase tracking-wider">Architecture</div>
          </div>
          <div>
            <div className="font-mono text-2xl md:text-3xl font-bold text-white">End-to-End</div>
            <div className="text-xs text-gray-500 mt-1 uppercase tracking-wider">Systems Lifecycle</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
