"use client";

import ActionLink from "@/components/ui/ActionLink";
import { Magnetic, SpotlightCard } from "@/components/ui/Animations";
import { motion } from "framer-motion";

export default function CtaSection() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] h-[400px] bg-gradient-to-tr from-[#0099FF]/20 via-cyan-500/10 to-transparent blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <SpotlightCard
            spotlightColor="rgba(0, 153, 255, 0.25)"
            className="glass-card rounded-3xl p-8 sm:p-12 md:p-16 text-center relative overflow-hidden border border-white/10 shadow-2xl shadow-black/80"
          >
            {/* Ambient Corner Accents */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-600/20 blur-3xl rounded-full pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-cyan-600/15 blur-3xl rounded-full pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono tracking-wider text-blue-400">
                <span>PROJECT INITIATION</span>
              </div>

              <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-[1.12]">
                Have a{" "}
                <span className="serif-accent italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-cyan-200 to-white">
                  digital system
                </span>{" "}
                in mind?
              </h2>

              <p className="text-gray-400 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
                Tell us what you&apos;re looking to engineer. We&apos;ll diagnose your requirements and deliver a dependable, production-ready system architecture.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Magnetic strength={0.2}>
                  <ActionLink
                    href="/contact"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#0099FF] hover:bg-[#0088EE] text-white font-medium text-base px-8 py-4 rounded-full shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 min-w-[200px]"
                  >
                    <span>Start a Conversation</span>
                    <svg
                      className="w-4 h-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </ActionLink>
                </Magnetic>
              </div>

              {/* Status commitments */}
              <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-gray-500">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Avg Response &lt; 24h</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>Direct Principal Access</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                  <span>Strict NDA Protected</span>
                </div>
              </div>
            </div>
          </SpotlightCard>
        </motion.div>
      </div>
    </section>
  );
}
