import type { Metadata } from "next";
import ActionLink from "@/components/ui/ActionLink";

export const metadata: Metadata = {
  title: "Terms of Service — Intallo",
  description: "Terms of Service governing software engineering engagements and website usage with Intallo Technologies.",
  alternates: {
    canonical: "https://intallo.in/terms",
  },
  openGraph: {
    title: "Terms of Service — Intallo",
    description: "Terms of Service governing software engineering engagements and website usage with Intallo Technologies.",
    url: "https://intallo.in/terms",
    locale: "en_IN",
  },
};

export default function TermsPage() {
  return (
    <div className="bg-[#07090D] min-h-screen pt-32 pb-24 text-gray-300">
      <div className="mx-auto max-w-[880px] px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono tracking-wider text-blue-300 uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1A76FF]" />
            <span>COMMERCIAL &amp; ENGAGEMENT TERMS</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Terms of Service
          </h1>
          <p className="mt-3 text-sm font-mono text-gray-500">
            Last Updated: October 2026
          </p>
        </div>

        <div className="space-y-8 text-sm sm:text-base leading-relaxed text-gray-400">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white tracking-tight">
              1. Agreement to Terms
            </h2>
            <p>
              By accessing the website at{" "}
              <ActionLink href="https://intallo.in" className="text-[#1A76FF] hover:underline">
                https://intallo.in
              </ActionLink>{" "}
              or engaging Intallo Technologies (&quot;Intallo&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) for software engineering, design, or automation services, you agree to be bound by these Terms of Service.
            </p>
            <p>
              Individual client projects are governed by a mutually executed Statement of Work (SOW) or Master Services Agreement (MSA), which incorporates and supplements these general terms.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white tracking-tight">
              2. Scope of Services &amp; Delivery
            </h2>
            <p>
              Intallo provides bespoke web application engineering, operational platforms, database architectures, and workflow automations. All project deliverables, timelines, milestones, and technical specifications are explicitly defined in the relevant SOW.
            </p>
            <p>
              Any exploratory estimates or ballpark timelines shared prior to a formal SOW are illustrative and subject to final technical discovery.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white tracking-tight">
              3. Intellectual Property &amp; Licensing Model
            </h2>
            <p>
              We believe in transparent, client-aligned intellectual property rights:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="text-white">Client-Specific Work:</strong> You own everything built specifically for you. Upon full settlement of project fees, all bespoke code, custom database schemas, branded interfaces, and unique business logic are assigned entirely to you.
              </li>
              <li>
                <strong className="text-white">Background IP &amp; Reusable Components:</strong> Our pre-existing software libraries, architectural templates, foundational components, and operational automation modules (collectively, &quot;Background IP&quot;) remain our property, but are licensed to you perpetually, non-exclusively, and royalty-free to operate, host, and modify your platform anywhere.
              </li>
              <li>
                <strong className="text-white">Zero Vendor Lock-In:</strong> You are free to host your applications on any infrastructure provider (Vercel, AWS, Cloudflare, etc.) and employ any engineering team for future maintenance.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white tracking-tight">
              4. Payment &amp; Milestone Terms
            </h2>
            <p>
              Unless otherwise specified in an executed Statement of Work:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Engagements follow milestone-based billing (e.g., initial deposit prior to kickoff, progress milestones upon staging approval, and final handover milestone).</li>
              <li>Invoices are payable within fourteen (14) calendar days from the date of presentation via direct bank transfer, UPI, or designated payment gateway.</li>
              <li>Final production credentials, DNS cutover, and repository ownership handover occur following full payment of the handover milestone.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white tracking-tight">
              5. Termination Terms
            </h2>
            <p>
              Either party may terminate an engagement by providing fourteen (14) calendar days&apos; written notice to the other party:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Upon receipt of termination notice, work shall cease on scheduled non-essential activities.</li>
              <li>The client remains responsible for payment for all deliverables completed and billable hours expended up to the effective termination date.</li>
              <li>Upon payment of outstanding amounts, Intallo shall deliver all work product, source files, and design assets developed up to the date of termination.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white tracking-tight">
              6. Warranties &amp; Limitation of Liability
            </h2>
            <p>
              Intallo warrants that all deliverables will be built in a professional, workmanlike manner adhering to current software engineering standards, free of intentional malicious code or backdoors.
            </p>
            <p>
              Each SOW provides a dedicated post-launch support and bug-fix warranty period. To the maximum extent permitted by applicable law, neither party shall be liable for indirect, consequential, or punitive damages. Intallo&apos;s aggregate liability under any engagement shall not exceed the total fees actually received under the relevant SOW.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white tracking-tight">
              7. Governing Law &amp; Jurisdiction
            </h2>
            <p>
              These Terms of Service and any contractual dispute arising out of or in connection with our services shall be governed by and construed in accordance with the laws of the Republic of India.
            </p>
            <p>
              The courts of competent jurisdiction located in Bengaluru, Karnataka, India shall have exclusive jurisdiction over all matters arising out of or relating to these terms.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white tracking-tight">
              8. Commercial Inquiries &amp; Legal Notices
            </h2>
            <p>
              All formal notices, commercial requests, and communications under these Terms should be directed to:
            </p>
            <div className="p-6 rounded-xl bg-[#0D111A] border border-white/10 font-mono text-xs text-gray-300 space-y-1">
              <div className="font-bold text-white text-sm mb-2">Legal Notices &amp; Commercial Operations</div>
              <div>Entity: Intallo Technologies</div>
              <div>Email: contact@intallo.in</div>
              <div>Location: Bengaluru, Karnataka, India</div>
              <div>Official Website: https://intallo.in</div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
