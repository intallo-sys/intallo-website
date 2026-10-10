import type { Metadata } from "next";
import ActionLink from "@/components/ui/ActionLink";

export const metadata: Metadata = {
  title: "Privacy Policy — Intallo",
  description: "Privacy Policy and data governance practices for Intallo and intallo.in.",
  openGraph: {
    title: "Privacy Policy — Intallo",
    description: "Privacy Policy and data governance practices for Intallo and intallo.in.",
    url: "https://intallo.in/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[#07090D] min-h-screen pt-32 pb-24 text-gray-300">
      <div className="mx-auto max-w-[880px] px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono tracking-wider text-blue-300 uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1A76FF]" />
            <span>LEGAL & COMPLIANCE</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm font-mono text-gray-500">
            Last Updated: October 2026 // Canonical: https://intallo.in
          </p>
        </div>

        <div className="space-y-8 text-sm sm:text-base leading-relaxed text-gray-400">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white tracking-tight">
              1. Overview & Commitment
            </h2>
            <p>
              Intallo (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) operates the website located at{" "}
              <ActionLink href="https://intallo.in" className="text-[#1A76FF] hover:underline">
                https://intallo.in
              </ActionLink>{" "}
              and provides custom software development, digital platforms, and automation engineering services. We are dedicated to maintaining the confidentiality, integrity, and security of any personal and business data entrusted to us.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white tracking-tight">
              2. Information We Collect
            </h2>
            <p>We collect information in the following limited contexts:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="text-white">Project Enquiries & Communications:</strong> When you submit a project enquiry through our contact forms or email us at{" "}
                <ActionLink href="mailto:contact@intallo.in" className="text-[#1A76FF] hover:underline">
                  contact@intallo.in
                </ActionLink>
                , we collect your name, business email address, company name, and project requirements.
              </li>
              <li>
                <strong className="text-white">Technical Diagnostics:</strong> We collect non-personally identifiable server telemetry, including browser type, referring URLs, and approximate geographic region, to ensure uptime, detect spam, and harden application security.
              </li>
              <li>
                <strong className="text-white">Spam Prevention:</strong> We use Cloudflare Turnstile to protect enquiry forms from automated abuse without tracking user browsing habits across third-party websites.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white tracking-tight">
              3. Purpose of Processing
            </h2>
            <p>We process collected data exclusively to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Respond to your software enquiries and provide detailed technical proposals.</li>
              <li>Execute contractual software engineering and maintenance obligations.</li>
              <li>Safeguard our infrastructure from denial-of-service attacks and fraudulent activity.</li>
            </ul>
            <p>We do NOT sell, rent, broker, or monetize client or visitor data to advertisers or third parties.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white tracking-tight">
              4. Data Retention & Security
            </h2>
            <p>
              We enforce industry-standard security safeguards including TLS 1.3 encryption in transit, strict database access controls, and least-privilege administrative principles. Enquiry records are retained only for as long as necessary to facilitate project communication or satisfy legal obligations.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white tracking-tight">
              5. Intellectual Property & Client Confidentiality
            </h2>
            <p>
              All proprietary business logic, operational metrics, and proprietary trade secrets shared during discovery sessions are protected by strict confidentiality. Upon completion of commissioned work, full source code intellectual property is transferred directly to the client.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white tracking-tight">
              6. Contact & Data Rights
            </h2>
            <p>
              If you have any questions regarding this Privacy Policy or wish to request data access, correction, or deletion, please contact us directly at:
            </p>
            <div className="p-5 rounded-xl bg-[#0D111A] border border-white/10 font-mono text-xs text-gray-300">
              Intallo Engineering Compliance<br />
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
