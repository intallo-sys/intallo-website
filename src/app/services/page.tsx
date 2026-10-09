import type { Metadata } from "next";
import ActionLink from "@/components/ui/ActionLink";
import Container from "@/components/ui/Container";
import Lines from "@/components/ui/Lines";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import Reveal from "@/components/ui/Reveal";
import { services } from "@/lib/content";

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
              <p className="text-intallo-muted text-base md:text-lg max-w-lg">
                {services.hero.body}
              </p>
            </div>
            <div>
              <ImagePlaceholder src={services.hero.image} alt={services.hero.imageAlt} className="h-64 w-full" />
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
                <div
                  key={i}
                  className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-4"
                >
                  {/* Text column */}
                  <div
                    className={`space-y-4 ${
                      item.imageSide === "left" ? "order-last md:order-last" : ""
                    }`}
                  >
                    <span className="text-3xl md:text-4xl font-bold text-intallo-blue block">
                      {item.number}
                    </span>
                    <h3 className="text-2xl font-semibold text-intallo-navy">{item.title}</h3>
                    <p className="text-intallo-body text-base">{item.description}</p>
                    {item.extra && (
                      <p className="text-intallo-body text-base font-normal">{item.extra}</p>
                    )}
                    <div>
                      <ActionLink
                        href={item.cta.href}
                        className="inline-block bg-intallo-blue text-white text-xs px-3 py-1.5 rounded-full font-medium"
                      >
                        {item.cta.label}
                      </ActionLink>
                    </div>
                  </div>

                  {/* Image column */}
                  <div>
                    <ImagePlaceholder src={item.image} alt={item.imageAlt} className="h-64 w-full" />
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>
      </Reveal>
    </div>
  );
}
