import type { Metadata } from "next";
import Link from "next/link";
import PageTransition from "@/components/layout/PageTransition";

export const metadata: Metadata = {
  title: "Privacy Policy — Relite",
  description: "Privacy policy for Relite agency website and services.",
};

export default function PrivacyPage() {
  return (
    <PageTransition>
      <div className="pt-28 pb-section">
        <div className="container-wide max-w-3xl">
          <p className="text-caption uppercase tracking-widest text-muted mb-6">
            Legal
          </p>
          <h1 className="text-display mb-10">Privacy Policy</h1>
          <p className="text-body text-muted mb-10">
            Last updated: {new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
          </p>

          <div className="space-y-8 text-body text-muted [&_strong]:text-foreground [&_strong]:font-medium">
            <section className="space-y-3">
              <h2 className="text-subheading text-foreground">1. Introduction</h2>
              <p>
                Relite (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) operates the website{" "}
                <strong>reliteagency.com</strong> and provides software and marketing services. This Privacy Policy
                explains how we collect, use, disclose, and safeguard your information when you visit our website or
                contact us. If you do not agree with this policy, please do not use our services.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-subheading text-foreground">2. Information we collect</h2>
              <p>
                We may collect information you voluntarily provide (such as name, email address, company name, and
                message content when you use our contact form), and technical data automatically collected when you
                browse our site (such as IP address, browser type, device information, and pages visited), where
                permitted by law.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-subheading text-foreground">3. How we use your information</h2>
              <p>We use collected information to respond to inquiries, operate and improve our website, communicate with you about our services, comply with legal obligations, and protect our rights and the security of our users.</p>
            </section>

            <section className="space-y-3">
              <h2 className="text-subheading text-foreground">4. Cookies and similar technologies</h2>
              <p>
                Our website may use cookies or similar technologies to enhance functionality and understand how visitors
                use the site. You can control cookies through your browser settings.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-subheading text-foreground">5. Sharing of information</h2>
              <p>
                We do not sell your personal information. We may share information with service providers who assist our
                operations (e.g. hosting, analytics), when required by law, or to protect our legal interests.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-subheading text-foreground">6. Data retention</h2>
              <p>
                We retain personal information only as long as necessary for the purposes described in this policy,
                unless a longer period is required or permitted by law.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-subheading text-foreground">7. Your rights</h2>
              <p>
                Depending on your location, you may have rights to access, correct, delete, or restrict processing of your
                personal data, or to object to certain processing. To exercise these rights, contact us at{" "}
                <a href="mailto:hello@reliteagency.com" className="text-accent-light hover:underline">
                  hello@reliteagency.com
                </a>
                .
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-subheading text-foreground">8. International transfers</h2>
              <p>
                We are based in the United Arab Emirates. If you access our services from outside the UAE, your
                information may be transferred to and processed in the UAE or other jurisdictions where we or our
                providers operate.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-subheading text-foreground">9. Security</h2>
              <p>
                We implement reasonable technical and organisational measures to protect your information. No method of
                transmission over the Internet is completely secure.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-subheading text-foreground">10. Changes to this policy</h2>
              <p>
                We may update this Privacy Policy from time to time. The revised version will be posted on this page
                with an updated &quot;Last updated&quot; date.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-subheading text-foreground">11. Contact</h2>
              <p>
                For questions about this Privacy Policy, contact us at{" "}
                <a href="mailto:hello@reliteagency.com" className="text-accent-light hover:underline">
                  hello@reliteagency.com
                </a>
                <br />
                Relite — Golf Vita, Damac Hills, Dubai, United Arab Emirates
              </p>
            </section>
          </div>

          <p className="mt-14 text-caption text-muted">
            <Link href="/" className="text-foreground hover:text-accent-light transition-colors">
              &larr; Back to home
            </Link>
          </p>
        </div>
      </div>
    </PageTransition>
  );
}
