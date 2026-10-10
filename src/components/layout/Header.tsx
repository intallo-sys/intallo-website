"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import ActionLink from "@/components/ui/ActionLink";
import MobileMenu from "@/components/layout/MobileMenu";
import { navLinks, headerCta } from "@/lib/content";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isFloating, setIsFloating] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);
      setIsFloating(scrollY > 380);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[200] border-b transition-[padding,background-color,border-color,backdrop-filter] duration-500 ease-out ${
          isScrolled
            ? "border-white/10 bg-[#07090D]/80 backdrop-blur-xl backdrop-saturate-150"
            : "border-transparent bg-transparent"
        } ${
          isFloating
            ? "min-[981px]:border-transparent min-[981px]:bg-transparent min-[981px]:pt-4 min-[981px]:backdrop-filter-none"
            : ""
        }`}
      >
        <div
          className={`mx-auto grid max-w-[1380px] grid-cols-[auto_1fr] items-center gap-5 px-6 py-4 transition-[max-width,padding,background-color,border-radius,box-shadow,backdrop-filter] duration-500 ease-out min-[981px]:grid-cols-[1fr_auto_1fr] md:px-8 ${
            isFloating
              ? "min-[981px]:max-w-[920px] min-[981px]:rounded-full min-[981px]:bg-[#0D111A]/90 min-[981px]:px-5 min-[981px]:py-2.5 min-[981px]:ring-1 min-[981px]:ring-white/10 min-[981px]:backdrop-blur-xl min-[981px]:backdrop-saturate-150 min-[981px]:shadow-2xl min-[981px]:shadow-black/70"
              : ""
          }`}
        >
          {/* Column 1: Logo & Systems Beacon */}
          <div className={`flex items-center gap-3.5 justify-self-start ${isFloating ? "min-[981px]:pl-2" : ""}`}>
            <ActionLink href="/" aria-label="Intallo — Home" className="flex items-center hover:opacity-90 transition-opacity">
              <Image
                src="/logo.png"
                alt="Intallo Logo"
                width={130}
                height={32}
                priority
                className="h-7 sm:h-8 w-auto object-contain brightness-0 invert opacity-95 hover:opacity-100 transition-opacity"
              />
            </ActionLink>

            {/* Active Systems Beacon Pill */}
            <div className="hidden xl:flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-mono tracking-wider text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_6px_#34d399]" />
              <span>ACTIVE</span>
            </div>
          </div>

          {/* Column 2: Center Desktop Navigation (Visuvate Style) */}
          <nav aria-label="Primary" className="hidden items-center gap-7 min-[981px]:flex justify-self-center">
            {navLinks.map((link, idx) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <ActionLink
                  key={idx}
                  href={link.href}
                  className={`text-[14px] lg:text-[15px] tracking-[-0.01em] transition-colors relative py-1 ${
                    isActive
                      ? "font-medium text-white"
                      : "text-gray-400 hover:text-white font-normal"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span
                      aria-hidden="true"
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#0099FF] shadow-[0_0_6px_#0099FF]"
                    />
                  )}
                </ActionLink>
              );
            })}
          </nav>

          {/* Column 3: Actions & Mobile Hamburger (Visuvate Style) */}
          <div className="flex items-center gap-2 justify-self-end min-[981px]:gap-3">
            {/* Visuvate Signature White Pill CTA Button */}
            <ActionLink
              href={headerCta.href}
              className="inline-flex h-[36px] shrink-0 items-center rounded-full bg-white px-5 text-[13px] font-semibold tracking-[-0.01em] whitespace-nowrap text-black transition-all hover:bg-gray-200 hover:scale-[1.02] active:scale-[0.98] shadow-sm"
            >
              {headerCta.label}
            </ActionLink>

            {/* Visuvate 2-Bar Animated Round Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              className={`grid size-[38px] shrink-0 place-items-center rounded-full border transition-colors duration-300 min-[981px]:hidden cursor-pointer ${
                mobileOpen
                  ? "border-white bg-white text-black"
                  : "border-white/20 bg-white/5 text-white hover:bg-white/10"
              }`}
            >
              <span className="relative block h-[10px] w-4">
                <span
                  className={`absolute left-0 block h-[1.5px] w-full transition-all duration-300 ease-out ${
                    mobileOpen ? "top-[4.25px] rotate-45 bg-black" : "top-0 bg-white"
                  }`}
                />
                <span
                  className={`absolute left-0 block h-[1.5px] w-full transition-all duration-300 ease-out ${
                    mobileOpen ? "top-[4.25px] -rotate-45 bg-black" : "top-[8.5px] bg-white"
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Visuvate Fullscreen Numbered Drawer */}
      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
