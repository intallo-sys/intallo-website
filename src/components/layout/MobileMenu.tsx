"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import ActionLink from "@/components/ui/ActionLink";
import { navLinks, headerCta } from "@/lib/content";
import { motion, AnimatePresence } from "framer-motion";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);

  // Close on route change during render
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setOpen(false);
  }

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
      }
    };
    if (open) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  return (
    <div className="md:hidden">
      <motion.button
        whileTap={{ scale: 0.92 }}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label="Toggle Navigation Menu"
        className="p-2 text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0099FF] rounded-full transition-colors hover:bg-white/10"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {open ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-4 right-4 top-full mt-3 bg-[#0D111A]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl shadow-black/80 flex flex-col gap-3 z-50 overflow-hidden"
          >
            {navLinks.map((link, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05, duration: 0.25 }}
              >
                <ActionLink
                  href={link.href}
                  className="text-gray-200 font-medium text-base py-2 hover:text-[#0099FF] transition-colors block border-b border-white/5"
                >
                  {link.label}
                </ActionLink>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.05, duration: 0.25 }}
              className="pt-2 space-y-3"
            >
              <ActionLink
                href={headerCta.href}
                className="bg-[#0099FF] text-white px-5 py-3 rounded-full text-center font-medium text-base hover:bg-blue-500 transition-colors shadow-lg shadow-blue-500/25 block active:scale-98"
              >
                {headerCta.label}
              </ActionLink>
              <div className="flex items-center justify-center gap-2 pt-1 text-xs font-mono text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_6px_#34d399]" />
                <span>SYSTEMS ACTIVE</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
