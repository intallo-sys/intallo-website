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
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ease-out pt-6 pb-2 pointer-events-none ${
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="mx-auto w-full max-w-[1600px] px-4 md:px-6 pointer-events-auto">
        <motion.div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          animate={{
            y: isHovered ? -12 : 0,
            boxShadow: isHovered
              ? "0 22px 50px rgba(0,0,0,0.22), 0 8px 24px rgba(0,0,0,0.14)"
              : "0 10px 35px rgba(0,0,0,0.15), 0 4px 12px rgba(0,0,0,0.08)",
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
          }}
          className="bg-white/95 backdrop-blur-md border border-white/60 rounded-full h-[80px] px-8 md:px-10 flex items-center justify-between transition-colors duration-300"
        >
          {/* Logo */}
          <ActionLink href="/" className="flex items-center hover:opacity-90 transition-opacity">
            <Image
              src="/images/brand/logo.png"
              alt="Intallo Logo"
              width={185}
              height={46}
              priority
              className="h-11 md:h-[46px] w-auto object-contain"
            />
          </ActionLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link, idx) => (
              <ActionLink
                key={idx}
                href={link.href}
                className="text-intallo-navy hover:text-intallo-blue font-medium text-base transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-intallo-blue origin-bottom-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
              </ActionLink>
            ))}
            <ActionLink
              href={headerCta.href}
              className="bg-intallo-blue hover:bg-blue-600 text-white font-medium text-base px-6 py-2.5 rounded-full shadow-sm transition-all flex items-center justify-center min-w-[145px] h-[44px] hover:scale-[1.03] active:scale-[0.98] duration-200"
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
