import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
import Reveal from "@/components/ui/Reveal";
import { contact } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact Intallo — Let's Talk About Your Next Idea",
  description: contact.hero.body,
  openGraph: {
    title: "Contact Intallo — Let's Talk About Your Next Idea",
    description: contact.hero.body,
    type: "website",
    siteName: "Intallo",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Intallo — Let's Talk About Your Next Idea",
    description: contact.hero.body,
  },
};

export default function ContactPage() {
  return (
    <div className="space-y-12 pt-0 pb-8">
      {/* 1. Hero Section */}
      <Reveal>
        <section className="pt-32 pb-12">
          <Container className="space-y-4 max-w-4xl">
            <p className="text-xs uppercase tracking-widest font-semibold text-intallo-blue">
              {contact.hero.eyebrow}
            </p>
            <h1 className="text-3xl md:text-5xl font-bold text-intallo-navy">
              {contact.hero.heading}
            </h1>
            <p className="text-intallo-muted text-base md:text-lg">
              {contact.hero.body}
            </p>
          </Container>
        </section>
      </Reveal>

      {/* 2. Cards Section */}
      <Reveal>
        <section className="py-4">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
              <ContactInfo />
              <ContactForm />
            </div>
          </Container>
        </section>
      </Reveal>
    </div>
  );
}
