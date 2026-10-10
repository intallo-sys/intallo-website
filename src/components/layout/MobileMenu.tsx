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
        className="p-2 text-intallo-navy focus:outline-none focus:ring-2 focus:ring-intallo-blue rounded-full transition-colors hover:bg-intallo-band/50"
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
            className="absolute left-4 right-4 top-full mt-3 bg-white/95 backdrop-blur-md border border-intallo-border rounded-2xl p-6 shadow-2xl flex flex-col gap-4 z-50 overflow-hidden"
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
                  className="text-intallo-navy font-medium text-base py-2 hover:text-intallo-blue transition-colors block"
                >
                  {link.label}
                </ActionLink>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.05, duration: 0.25 }}
              className="pt-2"
            >
              <ActionLink
                href={headerCta.href}
                className="bg-intallo-blue text-white px-5 py-3 rounded-full text-center font-medium text-base hover:bg-blue-600 transition-colors shadow-sm block active:scale-98"
              >
                {headerCta.label}
              </ActionLink>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
