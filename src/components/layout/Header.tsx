"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import ActionLink from "@/components/ui/ActionLink";
import MobileMenu from "@/components/layout/MobileMenu";
import { navLinks, headerCta } from "@/lib/content";
import { motion } from "framer-motion";

export default function Header() {
  const [isHovered, setIsHovered] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ease-out pt-4 md:pt-6 pb-2 pointer-events-none ${
        isScrolled ? "bg-[#07090D]/40 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto w-full max-w-[1440px] px-4 md:px-6 pointer-events-auto">
        <motion.div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          animate={{
            boxShadow: isHovered
              ? "0 20px 40px -15px rgba(0, 153, 255, 0.22), 0 0 20px 0 rgba(255, 255, 255, 0.04)"
              : "0 10px 30px -10px rgba(0, 0, 0, 0.6), 0 0 10px 0 rgba(255, 255, 255, 0.02)",
            borderColor: isHovered ? "rgba(0, 153, 255, 0.35)" : "rgba(255, 255, 255, 0.1)",
          }}
          transition={{
            duration: 0.25,
            ease: "easeOut",
          }}
          className="bg-[#0D111A]/85 backdrop-blur-xl border rounded-full h-[72px] md:h-[76px] px-6 md:px-8 flex items-center justify-between transition-colors duration-300"
        >
          {/* Logo & Beacon */}
          <div className="flex items-center gap-4">
            <ActionLink href="/" className="flex items-center hover:opacity-90 transition-opacity">
              <Image
                src="/logo.png"
                alt="Intallo Logo"
                width={160}
                height={40}
                priority
                className="h-9 md:h-10 w-auto object-contain brightness-0 invert opacity-95 hover:opacity-100 transition-opacity"
              />
            </ActionLink>

            {/* Systems Active Badge */}
            <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-mono tracking-wider text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
              <span>SYSTEMS ACTIVE</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((link, idx) => (
              <ActionLink
                key={idx}
                href={link.href}
                className="text-gray-300 hover:text-white font-medium text-sm lg:text-base transition-colors relative group py-1"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-full h-[2px] bg-[#0099FF] origin-bottom-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out rounded-full shadow-[0_0_8px_#0099FF]"></span>
              </ActionLink>
            ))}
            <ActionLink
              href={headerCta.href}
              className="bg-[#0099FF] hover:bg-[#0088EE] text-white font-medium text-sm lg:text-base px-6 py-2.5 rounded-full shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all flex items-center justify-center min-w-[145px] h-[44px] hover:scale-[1.03] active:scale-[0.98] duration-200"
            >
              {headerCta.label}
            </ActionLink>
          </nav>

          {/* Mobile Menu */}
          <MobileMenu />
        </motion.div>
      </div>
    </motion.header>
  );
}
