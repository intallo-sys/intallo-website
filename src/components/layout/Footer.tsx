import Image from "next/image";
import ActionLink from "@/components/ui/ActionLink";
import { footer } from "@/lib/content";
import { Magnetic } from "@/components/ui/Animations";

export default function Footer() {
  return (
    <footer className="bg-intallo-footer border-t border-b border-intallo-border py-12 text-intallo-muted">
      <div className="mx-auto w-full max-w-[1440px] px-5 md:px-[5.4%]">
        <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-0">
          {/* Left Column */}
          <div className="flex flex-col justify-between space-y-6 md:space-y-0 max-w-xs">
            <div className="space-y-3">
              <Magnetic strength={0.15}>
                <ActionLink href="/" className="inline-block hover:opacity-90 transition-opacity">
                  <Image
                    src="/logo.png"
                    alt="Intallo Logo"
                    width={130}
                    height={32}
                    className="h-8 w-auto object-contain"
                  />
                </ActionLink>
              </Magnetic>
              <p className="text-sm text-intallo-muted">{footer.tagline}</p>
            </div>
            <p className="text-xs text-intallo-muted pt-4 md:pt-8">{footer.copyright}</p>
          </div>

          {/* Right Columns (Starts approx 57% from left) */}
          <div className="flex flex-wrap md:flex-nowrap gap-16 md:gap-[145px] md:pr-12">
            {footer.columns.map((col, i) => (
              <div key={i} className="flex flex-col space-y-9 min-w-[120px]">
                <h3 className="text-intallo-blue font-medium text-sm tracking-wide">
                  {col.title}
                </h3>
                <ul className="flex flex-col space-y-4">
                  {col.links.map((link, j) => (
                    <li key={j}>
                      <ActionLink
                        href={link.href}
                        className={
                          link.href
                            ? "text-sm text-intallo-muted hover:text-intallo-blue transition-colors"
                            : "text-sm text-intallo-muted cursor-default"
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
