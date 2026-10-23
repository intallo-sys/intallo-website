import type { Metadata } from "next";
import Image from "next/image";
import ActionLink from "@/components/ui/ActionLink";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  ExternalLink,
  ShieldAlert,
  Play,
  Layers,
  Sparkles,
  Database,
  Cpu,
  Lock,
  Calendar,
  Users,
  TrendingDown,
} from "lucide-react";

export const metadata: Metadata = {
  title: "NOVA HOUSE — Boutique Hotel Direct Booking Platform Case Study | Intallo",
  description:
    "An in-depth case study on NOVA HOUSE: a modern direct-reservation platform with a guest booking flow, test payment integration, and front-desk admin console built to eliminate 15–25% OTA commissions.",
  alternates: {
    canonical: "https://intallo.in/work/nova-house",
  },
  openGraph: {
    title: "NOVA HOUSE — Boutique Hotel Direct Booking Platform Case Study | Intallo",
    description:
      "A complete direct-reservation system for boutique hotels: guest booking journey, test payments, and front-desk admin console. Built to show how independent hotels eliminate OTA fees.",
    url: "https://intallo.in/work/nova-house",
    locale: "en_IN",
    images: [
      {
        url: "https://intallo.in/images/work/nova-property.jpg",
        width: 1200,
        height: 630,
        alt: "NOVA HOUSE Boutique Hotel Direct Booking Engine Preview",
      },
    ],
  },
};

export default function NovaHouseCaseStudyPage() {
  return (
    <div className="bg-[#07090D] min-h-screen pt-28 md:pt-32 pb-24 text-gray-300 selection:bg-[#1A76FF]/30 selection:text-white">
      {/* Background Ambient Radial Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[750px] h-[550px] bg-[#0C34C5]/12 blur-[170px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-2/3 right-1/4 w-[450px] h-[450px] bg-[#1A76FF]/10 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumb */}
        <div className="mb-8">
          <ActionLink
            href="/work"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Work &amp; Case Studies</span>
          </ActionLink>
        </div>

        {/* Public Honesty Disclaimer Banner */}
        <div className="mb-10 p-4 sm:p-5 rounded-2xl bg-amber-500/[0.07] border border-amber-500/20 backdrop-blur-md flex items-start sm:items-center gap-3.5 text-amber-200/90 text-xs sm:text-sm">
          <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0 mt-0.5 sm:mt-0" />
          <div className="leading-relaxed">
            <span className="font-semibold text-amber-300 font-mono uppercase tracking-wider text-xs mr-2">
              Demo By Intallo:
            </span>
            NOVA HOUSE is a fictional boutique hotel platform built to demonstrate high-conversion direct booking architecture. All payment integrations operate strictly in <strong>Test Mode</strong> with zero live charges.
          </div>
        </div>

        {/* Hero Section */}
        <div className="max-w-4xl mb-14 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono tracking-wider text-blue-300 uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
            <span className="text-emerald-400 font-semibold">LIVE DEMO PLATFORM</span>
            <span className="text-gray-600">·</span>
            <span>HOSPITALITY SOFTWARE ARCHITECTURE</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight leading-[1.08]">
            NOVA HOUSE:{" "}
            <span className="serif-accent italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-sky-200 to-white">
              Direct Reservation Platform
            </span>{" "}
            for Boutique Stays.
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-gray-400 leading-relaxed max-w-3xl">
            A complete direct-reservation system featuring an editorial guest booking journey, integrated test card payment adapter, and an administrative console for the hotel front desk. Engineered to prove how independent properties can reclaim their margins from Online Travel Agencies.
          </p>

          {/* Quick Action Bar */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <ActionLink
              href="https://novahouse.intallo.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-gradient-to-r from-[#0C34C5] to-[#1A76FF] hover:from-[#002FA7] hover:to-[#0066FF] text-white font-medium text-sm sm:text-base px-6 py-3.5 rounded-full shadow-lg shadow-blue-600/30 transition-all duration-200"
            >
              <span>Explore Live Demo</span>
              <ExternalLink className="w-4 h-4" />
            </ActionLink>

            <ActionLink
              href="/contact?project=nova-house"
              className="inline-flex items-center gap-2 bg-white/[0.06] hover:bg-white/[0.12] text-gray-200 hover:text-white border border-white/10 font-medium text-sm sm:text-base px-6 py-3.5 rounded-full transition-all duration-200"
            >
              <span>Commission a Custom Build</span>
              <ArrowUpRight className="w-4 h-4" />
            </ActionLink>
          </div>
        </div>

        {/* Video / Interactive Walkthrough Container */}
        <div className="mb-24 rounded-3xl bg-[#0D111A] border border-white/10 p-4 sm:p-6 md:p-8 overflow-hidden shadow-2xl relative group">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 px-2">
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-[#1A76FF]">
                Full System Walkthrough (60–90s)
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Guest Search → Room Selection → Test Checkout → Front-Desk Console
              </h2>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-gray-400 bg-white/[0.04] px-3 py-1.5 rounded-full border border-white/10 shrink-0">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Full User Journey</span>
            </div>
          </div>

          {/* Video Player / Walkthrough Frame */}
          <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-slate-950 border border-white/10 flex items-center justify-center">
            <Image
              src="/images/work/nova-property.jpg"
              alt="NOVA HOUSE Video Walkthrough Poster"
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1200px"
              className="object-cover opacity-60 group-hover:opacity-75 transition-opacity duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#07090D] via-transparent to-black/40" />

            {/* Play Button Trigger */}
            <div className="relative z-10 flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-[#0C34C5] to-[#1A76FF] text-white flex items-center justify-center shadow-2xl shadow-blue-600/50 group-hover:scale-110 transition-transform duration-300 cursor-pointer">
                <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-white translate-x-0.5" />
              </div>
              <span className="mt-4 text-xs sm:text-sm font-mono uppercase tracking-wider text-blue-200">
                Interactive Video Walkthrough
              </span>
              <span className="text-xs text-gray-400 max-w-sm mt-1">
                Watch Ujwal demonstrate the direct booking sequence and real-time manager console.
              </span>
            </div>
          </div>
        </div>

        {/* Section 1: The Problem */}
        <div className="mb-24 rounded-3xl bg-[#0D111A] border border-white/10 p-8 sm:p-12 md:p-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-xs font-mono tracking-wider text-red-400 uppercase mb-4">
              <TrendingDown className="w-3.5 h-3.5" />
              <span>The Industry Bottleneck</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              Boutique hotels lose 15–25% of top-line revenue to third-party OTA commissions.
            </h2>
            <p className="mt-6 text-base sm:text-lg text-gray-400 leading-relaxed">
              When an independent hotel relies on booking aggregators like Booking.com or Expedia, they don&apos;t just surrender substantial profit margins on every night booked—they lose direct guest communication, cannot build recurring loyalty, and manage check-ins through fragmented spreadsheets and phone records.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3">
              <div className="text-2xl font-bold font-mono text-red-400">15%–25%</div>
              <div className="text-sm font-semibold text-white">Aggregator Commission Loss</div>
              <p className="text-xs text-gray-400 leading-relaxed">
                Hotels forfeit up to a quarter of each reservation fee to middlemen, eroding operating margins on boutique rooms.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3">
              <div className="text-2xl font-bold font-mono text-amber-400">0% Ownership</div>
              <div className="text-sm font-semibold text-white">Guest Relationship Detachment</div>
              <p className="text-xs text-gray-400 leading-relaxed">
                OTAs mask guest contact info with proxy emails, blocking direct pre-arrival hospitality upsells and custom check-in.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3">
              <div className="text-2xl font-bold font-mono text-blue-400">High Friction</div>
              <div className="text-sm font-semibold text-white">Manual Front-Desk Workflows</div>
              <p className="text-xs text-gray-400 leading-relaxed">
                Managing room inventory across paper logs, phone bookings, and external extranets leads to double-booking risks.
              </p>
            </div>
          </div>
        </div>

        {/* Section 2: What We Built (4 Key Pillars with Visual Previews) */}
        <div className="mb-24 space-y-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono tracking-wider text-blue-300 uppercase mb-4">
              <Layers className="w-3.5 h-3.5 text-[#1A76FF]" />
              <span>System Deliverables</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
              What We Built: An End-to-End Direct Reservation Platform.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-gray-400 leading-relaxed">
              NOVA HOUSE delivers the entire reservation lifecycle across four core functional modules, designed to be completely owned by the hotel operator.
            </p>
          </div>

          {/* Module 1: Guest Discovery & Experience */}
          <div className="rounded-3xl bg-[#0D111A] border border-white/10 p-6 sm:p-10 md:p-14 overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-4">
              <div className="text-xs font-mono uppercase tracking-wider text-[#1A76FF]">
                Module 01 // Guest Experience
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Editorial Property Showcase &amp; Room Discovery
              </h3>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                Fast, mobile-first property presentation highlighting amenities, location, architectural aesthetic, and curated room suites. Built with Next.js App Router for sub-second page transitions and high Google Core Web Vitals rankings.
              </p>
              <ul className="space-y-2 pt-2 text-xs sm:text-sm text-gray-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1A76FF] shrink-0" />
                  <span>Interactive room category gallery with high-resolution imagery</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1A76FF] shrink-0" />
                  <span>Transparent nightly rates with zero hidden OTA booking surcharges</span>
                </li>
              </ul>
            </div>
            <div className="lg:col-span-6 relative aspect-[16/10] rounded-2xl overflow-hidden bg-slate-900 border border-white/10">
              <Image
                src="/images/work/nova-property.jpg"
                alt="NOVA HOUSE Property Showcase Screenshot"
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover"
              />
            </div>
          </div>

          {/* Module 2: Booking Flow */}
          <div className="rounded-3xl bg-[#0D111A] border border-white/10 p-6 sm:p-10 md:p-14 overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1 relative aspect-[16/10] rounded-2xl overflow-hidden bg-slate-900 border border-white/10">
              <Image
                src="/images/work/nova-suite.jpg"
                alt="NOVA HOUSE Suite Selection and Date Picker Screenshot"
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover"
              />
            </div>
            <div className="lg:col-span-6 order-1 lg:order-2 space-y-4">
              <div className="text-xs font-mono uppercase tracking-wider text-[#1A76FF]">
                Module 02 // Booking Journey
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Fluid Date Selection &amp; Real-Time Room Availability
              </h3>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                An intuitive calendar date picker and guest counter that queries the room availability pipeline in real time. Guests configure their stay in three simple steps with immediate pricing calculations.
              </p>
              <ul className="space-y-2 pt-2 text-xs sm:text-sm text-gray-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1A76FF] shrink-0" />
                  <span>Real-time availability validation prevents conflicting reservation locks</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1A76FF] shrink-0" />
                  <span>Guest detail capture compliant with data privacy standards</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Module 3: Test Payment Flow */}
          <div className="rounded-3xl bg-[#0D111A] border border-white/10 p-6 sm:p-10 md:p-14 overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-4">
              <div className="text-xs font-mono uppercase tracking-wider text-[#1A76FF]">
                Module 03 // Payment Pipeline
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Frictionless Test Payment Capture &amp; Instant Receipt
              </h3>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                Configured with a dedicated payment gateway adapter running in test mode. Prospective guests simulate completing a reservation using test card numbers, experiencing instant transaction authorization and PDF confirmation generation.
              </p>
              <ul className="space-y-2 pt-2 text-xs sm:text-sm text-gray-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1A76FF] shrink-0" />
                  <span>Strict `PAYMENT_MODE=TEST` enforcement ensures no actual charges occur</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1A76FF] shrink-0" />
                  <span>Webhook handlers process simulated confirmation tokens idempotently</span>
                </li>
              </ul>
            </div>
            <div className="lg:col-span-6 relative aspect-[16/10] rounded-2xl overflow-hidden bg-slate-900 border border-white/10">
              <Image
                src="/images/work/novahouse2.jpeg"
                alt="NOVA HOUSE Booking and Payment Confirmation Screenshot"
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover"
              />
            </div>
          </div>

          {/* Module 4: Front-Desk Admin Console */}
          <div className="rounded-3xl bg-[#0D111A] border border-white/10 p-6 sm:p-10 md:p-14 overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1 relative aspect-[16/10] rounded-2xl overflow-hidden bg-slate-900 border border-white/10">
              <Image
                src="/images/work/nova-frontdesk.jpg"
                alt="NOVA HOUSE Front-Desk Administration Dashboard Screenshot"
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover"
              />
            </div>
            <div className="lg:col-span-6 order-1 lg:order-2 space-y-4">
              <div className="text-xs font-mono uppercase tracking-wider text-[#1A76FF]">
                Module 04 // Operations Console
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Front-Desk Reservation Dashboard &amp; Check-In Manager
              </h3>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                A clean, protected administrative console where the hotel front desk views real-time room occupancy, manages incoming guest bookings, toggles check-in status, and monitors nightly revenue without third-party portal logins.
              </p>
              <ul className="space-y-2 pt-2 text-xs sm:text-sm text-gray-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1A76FF] shrink-0" />
                  <span>Centralized view of all confirmed, pending, and completed reservations</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1A76FF] shrink-0" />
                  <span>Search by guest name, booking reference, or room number</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section 3: How It Works (Architecture Pipeline) */}
        <div className="mb-24 rounded-3xl bg-[#0D111A] border border-white/10 p-8 sm:p-12 md:p-16">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono tracking-wider text-blue-300 uppercase mb-4">
              <Cpu className="w-3.5 h-3.5 text-[#1A76FF]" />
              <span>Technical Architecture</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              How the System Works: Request &amp; Booking Lifecycle.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-gray-400 leading-relaxed">
              A streamlined, serverless architecture that connects guest discovery to inventory persistence and front-desk coordination.
            </p>
          </div>

          {/* Visual Architecture Flow Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3 relative">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 text-[#1A76FF] flex items-center justify-center font-mono font-bold text-sm">
                01
              </div>
              <div className="text-base font-bold text-white">Guest Client</div>
              <p className="text-xs text-gray-400 leading-relaxed">
                Guest selects dates and suite on mobile or desktop via Next.js React client with instant availability feedback.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3 relative">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 text-[#1A76FF] flex items-center justify-center font-mono font-bold text-sm">
                02
              </div>
              <div className="text-base font-bold text-white">API Validation Layer</div>
              <p className="text-xs text-gray-400 leading-relaxed">
                Next.js Route Handlers validate room availability against overlapping reservations with strict schema checks.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3 relative">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 text-[#1A76FF] flex items-center justify-center font-mono font-bold text-sm">
                03
              </div>
              <div className="text-base font-bold text-white">Payment Adapter (Test)</div>
              <p className="text-xs text-gray-400 leading-relaxed">
                Simulated card tokenization executes under test mode, returning idempotent authorization confirmation.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3 relative">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 text-[#1A76FF] flex items-center justify-center font-mono font-bold text-sm">
                04
              </div>
              <div className="text-base font-bold text-white">Database &amp; Console</div>
              <p className="text-xs text-gray-400 leading-relaxed">
                Prisma ORM writes confirmed booking to PostgreSQL and syncs live reservation state to the front-desk console.
              </p>
            </div>
          </div>
        </div>

        {/* Section 4: Tech & Engineering Choices */}
        <div className="mb-24 rounded-3xl bg-[#0D111A] border border-white/10 p-8 sm:p-12 md:p-16">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono tracking-wider text-blue-300 uppercase mb-4">
              <Database className="w-3.5 h-3.5 text-[#1A76FF]" />
              <span>Engineering Decisions</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              Technology Stack: Performance, SEO, and Full Code Ownership.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-gray-400 leading-relaxed">
              We chose technologies that maximize conversion velocity, eliminate recurring vendor subscriptions, and ensure complete portability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-7 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3">
              <div className="flex items-center gap-3">
                <div className="text-lg font-bold text-white">Next.js App Router &amp; TypeScript</div>
                <span className="text-xs font-mono text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded-md">
                  Core Runtime
                </span>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                Server-side rendering and edge caching enable sub-second page loads even on cellular networks. Strong type safety prevents runtime booking calculation errors.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3">
              <div className="flex items-center gap-3">
                <div className="text-lg font-bold text-white">PostgreSQL with Prisma ORM</div>
                <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md">
                  Data Layer
                </span>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                Relational schema modeling ensures strict data integrity across rooms, seasonal pricing tiers, and reservation records without database race conditions.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3">
              <div className="flex items-center gap-3">
                <div className="text-lg font-bold text-white">Tailwind CSS &amp; Editorial Design System</div>
                <span className="text-xs font-mono text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded-md">
                  Bespoke UI
                </span>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                No generic component library templates. The interface is engineered with high-contrast typography and fluid motion to mirror luxury boutique hospitality.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3">
              <div className="flex items-center gap-3">
                <div className="text-lg font-bold text-white">100% Client Code Ownership</div>
                <span className="text-xs font-mono text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-md">
                  Zero Lock-in
                </span>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                The entire codebase and database belong entirely to the property. It can be hosted on standard cloud infrastructure with zero recurring SaaS platform license fees.
              </p>
            </div>
          </div>
        </div>

        {/* Section 5: What a Production Version Adds (Roadmap Gaps) */}
        <div className="mb-24 rounded-3xl bg-[#0D111A] border border-white/10 p-8 sm:p-12 md:p-16">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono tracking-wider text-blue-400 uppercase mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Production Transition</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              Honest Engineering: What a Production Deployment Adds.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-gray-400 leading-relaxed">
              NOVA HOUSE is a working demonstration. For a commercial property rolling out to paying guests, our engineering roadmap transitions the demo into full production readiness:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2.5">
              <div className="flex items-center gap-2 text-white font-semibold text-sm">
                <Lock className="w-4 h-4 text-[#1A76FF]" />
                <span>Live PCI-DSS Payments</span>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed">
                Tokenized payment processing via Stripe or Razorpay with 3D Secure verification and automated chargeback protection.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2.5">
              <div className="flex items-center gap-2 text-white font-semibold text-sm">
                <Calendar className="w-4 h-4 text-[#1A76FF]" />
                <span>PMS / Channel Manager Sync</span>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed">
                Two-way calendar synchronization via iCal or channel APIs (Cloudbeds, Opera) to prevent double-booking across remaining channels.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2.5">
              <div className="flex items-center gap-2 text-white font-semibold text-sm">
                <Users className="w-4 h-4 text-[#1A76FF]" />
                <span>Staff Access Control (RBAC)</span>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed">
                Tiered staff permissions distinguishing front-desk check-in receptionists from general managers and financial auditors.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2.5">
              <div className="flex items-center gap-2 text-white font-semibold text-sm">
                <CheckCircle2 className="w-4 h-4 text-[#1A76FF]" />
                <span>Automated SMS &amp; WhatsApp Alerts</span>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed">
                Direct guest notifications with driving directions, keyless check-in codes, and automated pre-arrival welcome messages.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2.5">
              <div className="flex items-center gap-2 text-white font-semibold text-sm">
                <CheckCircle2 className="w-4 h-4 text-[#1A76FF]" />
                <span>Dynamic Seasonal Pricing</span>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed">
                Configurable weekend, holiday, and length-of-stay discount rules to maximize occupancy during off-peak periods.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2.5">
              <div className="flex items-center gap-2 text-white font-semibold text-sm">
                <CheckCircle2 className="w-4 h-4 text-[#1A76FF]" />
                <span>Full Audit Logging</span>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed">
                Detailed change histories recording every room price adjustment, date alteration, and staff check-in event.
              </p>
            </div>
          </div>
        </div>

        {/* Section 6: Timeline & Team Attribution */}
        <div className="mb-24 rounded-3xl bg-[#0D111A] border border-white/10 p-8 sm:p-12 md:p-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          <div className="max-w-xl space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-[#1A76FF]">
              Engineering Delivery &amp; Team
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Architected &amp; Built by Ujwal at Intallo
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed">
              NOVA HOUSE was developed in a focused 3-week engineering sprint as an operational blueprint for boutique hotels. When you partner with Intallo, you collaborate directly with the engineers authoring your platform—never outsourced or hidden behind account layers.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 shrink-0 w-full md:w-auto text-left sm:text-center space-y-1">
            <div className="text-xs font-mono uppercase tracking-wider text-gray-400">Build Timeline</div>
            <div className="text-3xl font-bold font-mono text-white">3 Weeks</div>
            <div className="text-xs text-blue-300 font-mono mt-1">Concept to Working Demo</div>
          </div>
        </div>

        {/* Closing High-Impact CTA */}
        <div className="rounded-3xl bg-gradient-to-tr from-[#0C34C5]/30 via-[#1A76FF]/20 to-transparent border border-white/15 p-10 sm:p-14 md:p-20 text-center relative overflow-hidden shadow-2xl">
          <div className="max-w-2xl mx-auto space-y-6 relative z-10">
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
              Need a direct booking platform for your property?
            </h2>
            <p className="text-base sm:text-lg text-blue-100/90 leading-relaxed">
              We design and build custom direct-reservation systems, operations dashboards, and automated guest workflows that eliminate OTA commissions. Let&apos;s discuss your property&apos;s requirements.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <ActionLink
                href="/contact?project=nova-house"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white hover:bg-gray-100 text-[#07090D] font-semibold text-base px-8 py-4 rounded-full shadow-xl transition-all duration-200"
              >
                <span>Book a Discovery Call</span>
                <ArrowUpRight className="w-4 h-4" />
              </ActionLink>

              <ActionLink
                href="https://novahouse.intallo.in"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/[0.08] hover:bg-white/15 text-white border border-white/15 font-semibold text-base px-8 py-4 rounded-full backdrop-blur-md transition-all duration-200"
              >
                <span>Launch Live Demo</span>
                <ExternalLink className="w-4 h-4" />
              </ActionLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
