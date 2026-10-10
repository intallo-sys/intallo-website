"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import ActionLink from "@/components/ui/ActionLink";
import { navLinks, headerCta } from "@/lib/content";
import { motion, AnimatePresence } from "framer-motion";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Close on pathname change
  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[190] flex flex-col justify-between bg-[#07090D]/98 backdrop-blur-2xl px-6 sm:px-10 pt-28 pb-10 min-[981px]:hidden overflow-y-auto"
        >
          {/* Navigation Links with Numbered Numerals (Visuvate Style) */}
          <nav aria-label="Mobile Navigation" className="flex flex-col space-y-1">
            {navLinks.map((link, idx) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + idx * 0.06, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <ActionLink
                    href={link.href}
                    onClick={onClose}
                    className={`group flex items-baseline gap-4 border-b border-white/[0.08] py-4 transition-colors ${
                      isActive ? "border-white/30" : "hover:border-white/20"
                    }`}
                  >
                    <span
                      className={`w-6 shrink-0 font-mono text-xs transition-colors ${
                        isActive ? "text-[#0099FF]" : "text-gray-500 group-hover:text-gray-400"
                      }`}
                    >
                      {String(idx + 1).padStart(2, "0")}
                    </span>

                    <span
                      className={`text-3xl sm:text-4xl font-medium tracking-tight transition-transform duration-200 group-hover:translate-x-1.5 ${
                        isActive ? "text-white" : "text-gray-400 group-hover:text-white"
                      }`}
                    >
                      {link.label}
                    </span>

                    {isActive && (
                      <span
                        aria-hidden="true"
                        className="ml-auto w-2 h-2 self-center rounded-full bg-[#0099FF] shadow-[0_0_8px_#0099FF]"
                      />
                    )}
                  </ActionLink>
                </motion.div>
              );
            })}
          </nav>

          {/* Bottom Drawer Actions & Metadata */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.35 }}
            className="pt-8 space-y-6"
          >
            <ActionLink
              href={headerCta.href}
              onClick={onClose}
              className="w-full h-[46px] rounded-full bg-white hover:bg-gray-200 text-black font-semibold text-sm flex items-center justify-center transition-all active:scale-[0.98] shadow-lg shadow-white/10"
            >
              {headerCta.label}
            </ActionLink>

            <div className="flex items-center justify-between text-xs font-mono text-gray-500 pt-2 border-t border-white/[0.06]">
              <a href="mailto:hello@intallo.com" className="hover:text-white transition-colors">
                hello@intallo.com
              </a>
              <div className="flex items-center gap-2 text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_6px_#34d399]" />
                <span>SYSTEMS ACTIVE</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
