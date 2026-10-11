import type { Metadata } from "next";
import ActionLink from "@/components/ui/ActionLink";

export const metadata: Metadata = {
  title: "Privacy Policy — Intallo",
  description: "Privacy Policy and data governance practices under DPDP Act for Intallo Technologies and intallo.in.",
  alternates: {
    canonical: "https://intallo.in/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy — Intallo",
    description: "Privacy Policy and data governance practices under DPDP Act for Intallo Technologies and intallo.in.",
    url: "https://intallo.in/privacy-policy",
    locale: "en_IN",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[#07090D] min-h-screen pt-32 pb-24 text-gray-300">
      <div className="mx-auto max-w-[880px] px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono tracking-wider text-blue-300 uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1A76FF]" />
            <span>LEGAL &amp; COMPLIANCE</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm font-mono text-gray-500">
            Last Updated: October 2026
          </p>
        </div>

        <div className="space-y-8 text-sm sm:text-base leading-relaxed text-gray-400">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white tracking-tight">
              1. Overview &amp; Data Fiduciary Details
            </h2>
            <p>
              Intallo Technologies (&quot;Intallo&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) operates the website located at{" "}
              <ActionLink href="https://intallo.in" className="text-[#1A76FF] hover:underline">
                https://intallo.in
              </ActionLink>{" "}
              and provides software engineering, operational systems development, and digital automation services. Under the Digital Personal Data Protection Act, 2023 (DPDP Act) of India, Intallo Technologies acts as the Data Fiduciary for personal data collected through this website.
            </p>
            <p>
              We are dedicated to safeguarding your digital privacy and handling personal and commercial information with strict transparency, integrity, and security.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white tracking-tight">
              2. Information We Collect
            </h2>
            <p>We collect information strictly when necessary to deliver services and respond to communications:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="text-white">Project Enquiries &amp; Contact Submissions:</strong> When you submit an enquiry via our contact form or email us at{" "}
                <ActionLink href="mailto:contact@intallo.in" className="text-[#1A76FF] hover:underline">
                  contact@intallo.in
                </ActionLink>
                , we collect your name, business email address, company name, and project scope details.
              </li>
              <li>
                <strong className="text-white">Security &amp; Rate-Limiting Telemetry:</strong> To prevent abuse, spam, and denial-of-service attempts, incoming requests are checked against an irreversibly hashed IP address (generated using an HMAC-SHA256 cryptographic secret). We do not store raw IP addresses in our application database.
              </li>
              <li>
                <strong className="text-white">Usage &amp; Performance Analytics:</strong> We collect aggregated, non-personally identifiable browser telemetry (including approximate geographic location, device class, and referral source) to monitor system performance and improve user experience.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white tracking-tight">
              3. Third-Party Service Providers (Data Processors)
            </h2>
            <p>
              We partner with vetted cloud infrastructure providers to host and operate our digital services. These processors process data strictly on our instructions:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="text-white">Vercel Inc.:</strong> Edge cloud hosting, serverless compute runtime, and privacy-preserving web vitals analytics.
              </li>
              <li>
                <strong className="text-white">Resend Inc.:</strong> Transactional email infrastructure utilized to securely dispatch project notifications to our team.
              </li>
              <li>
                <strong className="text-white">Prisma Postgres:</strong> Managed cloud database infrastructure utilized to store validated contact enquiries and dispatch audit logs.
              </li>
              <li>
                <strong className="text-white">Microsoft Clarity:</strong> Behavioral session telemetry and heatmap analytics to understand website usability without selling data.
              </li>
            </ul>
            <p>We do NOT sell, rent, monetize, or trade client or visitor personal data to any advertisers, data brokers, or third parties.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white tracking-tight">
              4. Data Retention Policy
            </h2>
            <p>
              In compliance with the DPDP Act, personal data is retained only for as long as necessary to fulfill the purposes for which it was collected:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="text-white">Project Enquiries:</strong> Inbound enquiry data is retained for a maximum period of twelve (12) months from the date of submission, after which it is systematically deleted, unless a contractual engagement is initiated or retention is required by Indian statutory obligations.
              </li>
              <li>
                <strong className="text-white">Diagnostic &amp; Rate-Limiting Logs:</strong> Rate-limiting records and transient technical logs are retained for no more than ninety (90) days.
              </li>
              <li>
                <strong className="text-white">Immediate Deletion:</strong> Any visitor may request immediate deletion of their enquiry data at any time by contacting our Grievance Officer.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white tracking-tight">
              5. Intellectual Property &amp; Commercial Confidentiality
            </h2>
            <p>
              All proprietary project requirements, workflows, and operational metrics shared during discovery consultations are held in strict confidence. For contracted client engagements, custom software built specifically for the client belongs to the client, while foundational and reusable engineering components are perpetually licensed to enable flexible hosting anywhere.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white tracking-tight">
              6. Rights of Data Principals (DPDP Act, 2023)
            </h2>
            <p>
              Under Indian data protection law, you hold specific rights regarding your personal digital data:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Right to access an itemized summary of personal data held and processed.</li>
              <li>Right to correction, completion, and updating of inaccurate data.</li>
              <li>Right to erasure of personal data that is no longer required.</li>
              <li>Right of grievance redressal with our designated Grievance Officer.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white tracking-tight">
              7. Grievance Officer &amp; Inquiries
            </h2>
            <p>
              In accordance with the Digital Personal Data Protection Act, 2023 and the Information Technology Act, 2000, please direct any data privacy questions, correction requests, or grievances to:
            </p>
            <div className="p-6 rounded-xl bg-[#0D111A] border border-white/10 font-mono text-xs text-gray-300 space-y-1">
              <div className="font-bold text-white text-sm mb-2">Grievance Redressal</div>
              <div>Officer: Shashidhar Pawadashetti</div>
              <div>Entity: Intallo Technologies</div>
              <div>Email: contact@intallo.in</div>
              <div>Location: Bengaluru, Karnataka, India</div>
              <div className="text-gray-500 pt-2 border-t border-white/10 mt-2">
                Acknowledgment: Within 48 hours · Resolution: Within 30 calendar days
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
