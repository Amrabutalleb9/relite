"use client";

import SectionLabel from "@/components/ui/SectionLabel";
import RevealText from "@/components/ui/RevealText";
import ContactForm from "@/components/contact/ContactForm";
import GraphicElement from "@/components/ui/GraphicElement";
import PageTransition from "@/components/layout/PageTransition";

export default function ContactPage() {
  return (
    <PageTransition>
    <div className="pt-20">
      <section className="py-section">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
            {/* Left: Editorial text */}
            <div className="lg:col-span-5">
              <SectionLabel className="mb-12">Contact</SectionLabel>

              <RevealText>
                <h1 className="text-display text-balance">
                  Let&apos;s build something{" "}
                  <span className="font-serif-italic text-accent-light">remarkable.</span>
                </h1>
              </RevealText>

              <RevealText delay={0.15}>
                <p className="mt-8 text-body-lg text-muted">
                  Whether you have a clear vision or a rough idea, we&apos;re here
                  to help shape it into something extraordinary. Reach out, and
                  let&apos;s start the conversation.
                </p>
              </RevealText>

              <RevealText delay={0.3}>
                <div className="mt-12 space-y-6">
                  <div>
                    <p className="text-caption uppercase tracking-widest text-muted mb-2">
                      Email
                    </p>
                    <a
                      href="mailto:hello@relite.ae"
                      className="text-body-lg text-foreground hover:text-accent-light transition-colors duration-300"
                    >
                      hello@relite.ae
                    </a>
                  </div>

                  <div>
                    <p className="text-caption uppercase tracking-widest text-muted mb-2">
                      Location
                    </p>
                    <p className="text-body-lg text-foreground">
                      Dubai, United Arab Emirates
                    </p>
                  </div>

                  <div>
                    <p className="text-caption uppercase tracking-widest text-muted mb-2">
                      Social
                    </p>
                    <div className="flex gap-6">
                      <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-body text-foreground hover:text-accent-light transition-colors duration-300"
                      >
                        LinkedIn
                      </a>
                      <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-body text-foreground hover:text-accent-light transition-colors duration-300"
                      >
                        Instagram
                      </a>
                      <a
                        href="https://x.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-body text-foreground hover:text-accent-light transition-colors duration-300"
                      >
                        X
                      </a>
                    </div>
                  </div>
                </div>
              </RevealText>

              <div className="mt-12 w-40 h-40 hidden lg:block">
                <GraphicElement variant="cross" className="w-full h-full" />
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-6 lg:col-start-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
    </PageTransition>
  );
}
