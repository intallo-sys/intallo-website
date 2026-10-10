import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/ui/Animations";
import { Analytics } from "@vercel/analytics/react";
import { ReactNode } from "react";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://intallo.in"),
  title: {
    default: "Intallo — Turn Manual Work Into Digital Solutions",
    template: "%s | Intallo",
  },
  description:
    "We engineer high-performance web platforms, custom operational software, and automated workflows that eliminate manual bottlenecks for growing businesses.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" },
      { url: "/logo.png", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png" },
      { url: "/logo.png" },
    ],
    shortcut: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://intallo.in",
    siteName: "Intallo",
    title: "Intallo — Turn Manual Work Into Digital Solutions",
    description:
      "We engineer high-performance web platforms, custom operational software, and automated workflows that eliminate manual bottlenecks for growing businesses.",
    images: [
      {
        url: "/logo.png",
        width: 1024,
        height: 558,
        alt: "Intallo Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Intallo — Turn Manual Work Into Digital Solutions",
    description:
      "We engineer high-performance web platforms, custom operational software, and automated workflows that eliminate manual bottlenecks for growing businesses.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Intallo",
  url: "https://intallo.in",
  logo: "https://intallo.in/logo.png",
  description:
    "Turn Manual Work Into Digital Solutions. Intallo engineers high-performance web platforms, custom operational software, and automated workflows for growing businesses.",
  contactPoint: {
    "@type": "ContactPoint",
    email: "contact@intallo.in",
    contactType: "customer service",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable} dark`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i+"?ref=bwt";
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "yvooxnfy3w");`,
          }}
        />
      </head>
      <body className="min-h-screen antialiased flex flex-col justify-between bg-[#07090D] text-[#E2E8F0]">
        <ScrollProgress />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
