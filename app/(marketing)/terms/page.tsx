import type { Metadata } from "next";
import Link from "next/link";
import PageTransition from "@/components/layout/PageTransition";

export const metadata: Metadata = {
  title: "Terms & Conditions — Relite",
  description: "Terms and conditions for using Relite website and services.",
};

export default function TermsPage() {
  return (
    <PageTransition>
      <div className="pt-28 pb-section">
        <div className="container-wide max-w-3xl">
          <p className="text-caption uppercase tracking-widest text-muted mb-6">
            Legal
          </p>
          <h1 className="text-display mb-10">Terms &amp; Conditions</h1>
          <p className="text-body text-muted mb-10">
            Last updated: {new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
          </p>

          <div className="space-y-8 text-body text-muted [&_strong]:text-foreground [&_strong]:font-medium">
            <section className="space-y-3">
              <h2 className="text-subheading text-foreground">1. Agreement to terms</h2>
              <p>
                By accessing or using the website at <strong>reliteagency.com</strong> and any services offered by
                Relite (&quot;we&quot;, &quot;us&quot;), you agree to be bound by these Terms &amp; Conditions. If you
                disagree with any part, you must not use our website or services.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-subheading text-foreground">2. Services</h2>
              <p>
                Relite provides software development, design, marketing, and related professional services as described
                on our website or in separate written agreements. Specific deliverables, timelines, and fees are
                governed by individual contracts or statements of work where applicable.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-subheading text-foreground">3. Intellectual property</h2>
              <p>
                All content on this website (including text, graphics, logos, and layout) is owned by Relite or its
                licensors and is protected by applicable intellectual property laws. You may not copy, modify,
                distribute, or create derivative works without our prior written consent, except as allowed by law.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-subheading text-foreground">4. Acceptable use</h2>
              <p>
                You agree not to misuse our website or services, including by attempting unauthorised access,
                introducing malware, scraping in a way that harms our systems, or using our contact channels for
                unlawful, abusive, or spam purposes.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-subheading text-foreground">5. Disclaimer of warranties</h2>
              <p>
                Our website and any information on it are provided on an &quot;as is&quot; and &quot;as available&quot;
                basis. To the fullest extent permitted by law, we disclaim all warranties, express or implied, including
                merchantability, fitness for a particular purpose, and non-infringement.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-subheading text-foreground">6. Limitation of liability</h2>
              <p>
                To the maximum extent permitted by applicable law in the United Arab Emirates, Relite shall not be
                liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of
                profits, data, or goodwill, arising from your use of the website or services, even if we have been
                advised of the possibility of such damages.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-subheading text-foreground">7. Indemnity</h2>
              <p>
                You agree to indemnify and hold harmless Relite and its team from any claims, damages, losses, or
                expenses (including reasonable legal fees) arising from your violation of these terms or misuse of our
                website or services.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-subheading text-foreground">8. Third-party links</h2>
              <p>
                Our website may contain links to third-party sites. We are not responsible for the content or practices
                of those sites. Accessing them is at your own risk.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-subheading text-foreground">9. Governing law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the United Arab Emirates,
                without regard to conflict-of-law principles. Disputes shall be subject to the exclusive jurisdiction of
                the courts of Dubai, UAE, where permitted by law.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-subheading text-foreground">10. Changes</h2>
              <p>
                We may revise these Terms at any time. The updated version will be posted on this page. Continued use of
                the website after changes constitutes acceptance of the revised Terms.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-subheading text-foreground">11. Contact</h2>
              <p>
                For questions about these Terms, contact us at{" "}
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
