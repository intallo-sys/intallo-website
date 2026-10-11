"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import ActionLink from "@/components/ui/ActionLink";
import { navLinks, headerCta } from "@/lib/content";
import { motion, AnimatePresence } from "framer-motion";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  triggerRef?: React.RefObject<HTMLButtonElement | null>;
}

export default function MobileMenu({ isOpen, onClose, triggerRef }: MobileMenuProps) {
  const pathname = usePathname();
  const prevPathname = useRef(pathname);
  const drawerRef = useRef<HTMLDivElement>(null);
  const prevIsOpen = useRef(isOpen);

  // Close when pathname actually changes (e.g. forward/back navigation or route change)
  useEffect(() => {
    if (prevPathname.current !== pathname) {
      prevPathname.current = pathname;
      if (isOpen) {
        onClose();
      }
    }
  }, [pathname, isOpen, onClose]);

  // Restore focus to trigger button when drawer closes
  useEffect(() => {
    if (prevIsOpen.current && !isOpen) {
      triggerRef?.current?.focus();
    }
    prevIsOpen.current = isOpen;
  }, [isOpen, triggerRef]);

  // Handle Escape key and body scroll lock while drawer is open
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Trap focus inside drawer dialog while open
  useEffect(() => {
    if (!isOpen) return;

    const drawer = drawerRef.current;
    if (!drawer) return;

    const focusableElements = drawer.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    // Focus first interactive link after open animation initiates
    const timer = setTimeout(() => {
      firstElement?.focus();
    }, 50);

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement?.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement?.focus();
        }
      }
    };

    window.addEventListener("keydown", handleTabKey);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("keydown", handleTabKey);
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={drawerRef}
          id="mobile-navigation-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation Menu"
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[190] overflow-y-auto overscroll-contain bg-[#07090D]/98 backdrop-blur-2xl min-[981px]:hidden"
        >
          <div className="flex min-h-full flex-col justify-between px-6 sm:px-10 pt-24 pb-10">
            {/* Navigation Links with Numbered Numerals (Visuvate Style) */}
            <nav aria-label="Site Navigation Links" className="flex flex-col space-y-1">
              {navLinks.map((link, idx) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);

                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + idx * 0.05, duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <ActionLink
                      href={link.href}
                      onClick={onClose}
                      className={`group flex items-baseline gap-4 border-b border-white/[0.08] py-3.5 transition-colors ${
                        isActive ? "border-white/30" : "hover:border-white/20"
                      }`}
                    >
                      <span
                        className={`w-6 shrink-0 font-mono text-xs transition-colors ${
                          isActive ? "text-[#1A76FF]" : "text-gray-500 group-hover:text-gray-400"
                        }`}
                      >
                        {String(idx + 1).padStart(2, "0")}
                      </span>

                      <span
                        className={`text-2xl sm:text-3xl font-medium tracking-tight transition-transform duration-200 group-hover:translate-x-1.5 ${
                          isActive ? "text-white" : "text-gray-400 group-hover:text-white"
                        }`}
                      >
                        {link.label}
                      </span>

                      {isActive && (
                        <span
                          aria-hidden="true"
                          className="ml-auto w-2 h-2 self-center rounded-full bg-[#1A76FF] shadow-[0_0_8px_#1A76FF]"
                        />
                      )}
                    </ActionLink>
                  </motion.div>
                );
              })}
            </nav>

            {/* Bottom Drawer Actions & Metadata */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.3 }}
              className="pt-8 space-y-5"
            >
              <ActionLink
                href={headerCta.href}
                onClick={onClose}
                className="w-full h-[46px] rounded-full bg-white hover:bg-gray-200 text-black font-semibold text-sm flex items-center justify-center transition-all active:scale-[0.98] shadow-lg shadow-white/10"
              >
                {headerCta.label}
              </ActionLink>

              <div className="flex flex-col gap-2 text-xs font-mono text-gray-500 pt-2 border-t border-white/[0.06]">
                <div className="flex items-center justify-between">
                  <a href="mailto:contact@intallo.in" onClick={onClose} className="hover:text-white transition-colors">
                    contact@intallo.in
                  </a>
                  <span className="text-gray-400">Bengaluru, India</span>
                </div>
                <div className="flex items-center justify-between text-[11px] text-gray-400">
                  <span>Direct Line:</span>
                  <a href="tel:+916363620308" onClick={onClose} className="text-blue-400 hover:underline">
                    +91 63636 20308
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
