import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/ui/Animations";
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
  title: "Intallo — Digital Systems for Modern Businesses",
  description:
    "We design simple, reliable digital systems that help modern businesses work smarter, serve customers better, and grow with confidence.",
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
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable} dark`}>
      <body className="min-h-screen antialiased flex flex-col justify-between bg-[#07090D] text-[#E2E8F0]">
        <ScrollProgress />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
