import type { Metadata } from "next";
import ActionLink from "@/components/ui/ActionLink";

export const metadata: Metadata = {
  title: "Terms of Service — Intallo",
  description: "Terms of Service governing engineering engagements and website usage with Intallo.",
  openGraph: {
    title: "Terms of Service — Intallo",
    description: "Terms of Service governing engineering engagements and website usage with Intallo.",
    url: "https://intallo.in/terms",
  },
};

export default function TermsPage() {
  return (
    <div className="bg-[#07090D] min-h-screen pt-32 pb-24 text-gray-300">
      <div className="mx-auto max-w-[880px] px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono tracking-wider text-blue-300 uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1A76FF]" />
            <span>LEGAL & TERMS</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Terms of Service
          </h1>
          <p className="mt-3 text-sm font-mono text-gray-500">
            Last Updated: October 2026 // Canonical: https://intallo.in
          </p>
        </div>

        <div className="space-y-8 text-sm sm:text-base leading-relaxed text-gray-400">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white tracking-tight">
              1. Agreement to Terms
            </h2>
            <p>
              By accessing or using the website at{" "}
              <ActionLink href="https://intallo.in" className="text-[#1A76FF] hover:underline">
                https://intallo.in
              </ActionLink>{" "}
              or engaging Intallo for software engineering, design, or automation services, you agree to be bound by these Terms of Service.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white tracking-tight">
              2. Scope of Services & Engagement Model
            </h2>
            <p>
              Intallo provides bespoke software engineering, web application development, cloud deployment, and business process automation. All deliverables, timelines, and engagement specifications are governed by a mutually executed Statement of Work (SOW) or scope-based proposal.
            </p>
            <p>
              Any estimates provided on this website are illustrative and subject to formal technical scoping.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white tracking-tight">
              3. Intellectual Property Ownership
            </h2>
            <p>
              Upon receipt of full payment for commissioned milestones or project completions, Intallo assigns and transfers 100% intellectual property rights, source code ownership, database schemas, and custom visual assets directly to the client.
            </p>
            <p>
              Third-party open-source libraries incorporated into deliverables remain subject to their respective open-source licenses (such as MIT, Apache 2.0).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white tracking-tight">
              4. Client Warranties & Collaboration
            </h2>
            <p>
              Clients agree to provide necessary technical access, API credentials, and operational feedback in a timely manner to maintain agreed milestone schedules. Clients warrant that materials and assets provided to Intallo do not infringe any third-party copyrights or patents.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white tracking-tight">
              5. Warranties & Limitation of Liability
            </h2>
            <p>
              Intallo warrants that custom software will be engineered in accordance with modern engineering standards, without intentional backdoors or malicious code. Intallo provides a standard post-deployment warranty period specified in each individual agreement.
            </p>
            <p>
              To the maximum extent permitted by applicable law, neither party shall be liable for indirect, incidental, or consequential damages resulting from platform downtime or third-party cloud outages.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white tracking-tight">
              6. Enquiries & Notice
            </h2>
            <p>
              Formal contractual notices and general enquiries regarding these terms should be addressed to:
            </p>
            <div className="p-5 rounded-xl bg-[#0D111A] border border-white/10 font-mono text-xs text-gray-300">
              Intallo Legal Operations<br />
              Email: contact@intallo.in<br />
              Domain: https://intallo.in<br />
              Bengaluru, India
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
