import type { Metadata } from "next";
import ActionLink from "@/components/ui/ActionLink";
import Container from "@/components/ui/Container";
import Lines from "@/components/ui/Lines";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import Reveal from "@/components/ui/Reveal";
import { services } from "@/lib/content";
import { Magnetic, NumberTicker } from "@/components/ui/Animations";

export const metadata: Metadata = {
  title: "Intallo Services — Digital Systems for Modern Businesses",
  description: services.hero.body,
  openGraph: {
    title: "Intallo Services — Digital Systems for Modern Businesses",
    description: services.hero.body,
    type: "website",
    siteName: "Intallo",
  },
  twitter: {
    card: "summary_large_image",
    title: "Intallo Services — Digital Systems for Modern Businesses",
    description: services.hero.body,
  },
};

export default function ServicesPage() {
  return (
    <div className="space-y-16 pt-0 pb-8">
      {/* 1. Hero Section */}
      <Reveal>
        <section className="pt-32 pb-12">
          <Container className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-widest font-semibold text-intallo-blue">
                {services.hero.eyebrow}
              </p>
              <h1 className="text-3xl md:text-5xl font-bold text-intallo-ink-teal leading-tight">
                <Lines lines={services.hero.headingLines} />
              </h1>
              <p className="text-intallo-muted text-base md:text-lg max-w-lg leading-relaxed">
                {services.hero.body}
              </p>
            </div>
            <div className="overflow-hidden rounded-2xl shadow-lg border border-intallo-border/50 group">
              <ImagePlaceholder
                src={services.hero.image}
                alt={services.hero.imageAlt}
                className="h-64 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
          </Container>
        </section>
      </Reveal>

      {/* 2. Our Expertise Section */}
      <Reveal>
        <section className="py-8">
          <Container className="space-y-12">
            <div>
              <p className="text-xs uppercase tracking-widest font-semibold text-intallo-blue">
                {services.expertise.eyebrow}
              </p>
              <h2 className="text-2xl md:text-4xl font-bold text-intallo-navy mt-2">
                {services.expertise.heading}
              </h2>
            </div>

            <div className="space-y-16">
              {services.expertise.items.map((item, i) => (
                <Reveal key={i} delay={0.1}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-6 px-6 md:px-8 bg-white/70 hover:bg-white border border-intallo-border/60 hover:border-intallo-blue/40 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
                    {/* Text column */}
                    <div
                      className={`space-y-4 ${
                        item.imageSide === "left" ? "order-last md:order-last" : ""
                      }`}
                    >
                      <span className="text-3xl md:text-4xl font-bold text-intallo-blue block">
                        <NumberTicker value={parseInt(item.number, 10)} padZero={true} />
                      </span>
                      <h3 className="text-2xl font-semibold text-intallo-navy tracking-tight">{item.title}</h3>
                      <p className="text-intallo-body text-base leading-relaxed">{item.description}</p>
                      {item.extra && (
                        <p className="text-intallo-body text-base font-normal leading-relaxed">{item.extra}</p>
                      )}
                      <div className="pt-2">
                        <Magnetic strength={0.2}>
                          <ActionLink
                            href={item.cta.href}
                            className="inline-block bg-intallo-blue text-white text-xs px-4 py-2 rounded-full font-medium hover:bg-blue-600 transition-colors shadow-sm"
                          >
                            {item.cta.label}
                          </ActionLink>
                        </Magnetic>
                      </div>
                    </div>

                    {/* Image column */}
                    <div className="overflow-hidden rounded-xl shadow-md group">
                      <ImagePlaceholder
                        src={item.image}
                        alt={item.imageAlt}
                        className="h-64 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      </Reveal>
    </div>
  );
}
