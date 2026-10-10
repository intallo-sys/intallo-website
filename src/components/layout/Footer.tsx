import Image from "next/image";
import ActionLink from "@/components/ui/ActionLink";
import { footer } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="bg-[#07090D] border-t border-white/10 py-16 text-gray-400 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[240px] bg-[#0099FF]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="mx-auto w-full max-w-[1440px] px-5 md:px-[5.4%] relative z-10">
        <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-0">
          {/* Left Column */}
          <div className="flex flex-col justify-between space-y-6 md:space-y-0 max-w-xs">
            <div className="space-y-3">
              <ActionLink href="/" className="inline-block hover:opacity-100 transition-opacity">
                <Image
                  src="/logo.png"
                  alt="Intallo Logo"
                  width={130}
                  height={32}
                  className="h-8 w-auto object-contain brightness-0 invert opacity-90 hover:opacity-100 transition-opacity"
                />
              </ActionLink>
              <p className="text-sm text-gray-400">{footer.tagline}</p>
            </div>
            <p className="text-xs text-gray-500 pt-4 md:pt-8">{footer.copyright}</p>
          </div>

          {/* Right Columns (Starts approx 57% from left) */}
          <div className="flex flex-wrap md:flex-nowrap gap-16 md:gap-[145px] md:pr-12">
            {footer.columns.map((col, i) => (
              <div key={i} className="flex flex-col space-y-7 min-w-[120px]">
                <h3 className="text-white font-mono text-xs tracking-wider uppercase">
                  {col.title}
                </h3>
                <ul className="flex flex-col space-y-3.5">
                  {col.links.map((link, j) => (
                    <li key={j}>
                      <ActionLink
                        href={link.href}
                        className={
                          link.href
                            ? "text-sm text-gray-400 hover:text-[#0099FF] transition-colors"
                            : "text-sm text-gray-500 cursor-default"
                        }
                      >
                        {link.label}
                      </ActionLink>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
