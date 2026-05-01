"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import RevealText from "@/components/ui/RevealText";
import Button from "@/components/ui/Button";
import GraphicElement from "@/components/ui/GraphicElement";
import PageTransition from "@/components/layout/PageTransition";

const softwareServices = [
  { title: "Web Applications", description: "Scalable, performant web apps built with modern frameworks and clean architecture." },
  { title: "SaaS Platforms", description: "End-to-end SaaS product development — from concept to launch and beyond." },
  { title: "Mobile Applications", description: "Native and cross-platform mobile experiences that users love." },
  { title: "API & Infrastructure", description: "Robust backends, cloud infrastructure, and seamless integrations." },
];

const marketingServices = [
  { title: "Brand Strategy", description: "Positioning, identity systems, and narratives that set you apart." },
  { title: "Digital Marketing", description: "Performance campaigns, SEO, and paid media that deliver measurable ROI." },
  { title: "Content & Creative", description: "Editorial content, social media, and creative direction with substance." },
  { title: "Analytics & Growth", description: "Data-driven insights and growth frameworks to scale what works." },
];

const processSteps = [
  { number: "01", title: "Discovery", description: "We listen. Understand your goals, market, and constraints before writing a single line." },
  { number: "02", title: "Strategy", description: "Define the roadmap. Clear milestones, deliverables, and a shared vision for success." },
  { number: "03", title: "Build", description: "Execute with precision. Iterative development with constant communication and quality checks." },
  { number: "04", title: "Launch & Scale", description: "Ship confidently. Then optimize, measure, and grow based on real data." },
];

function ServicePillar({
  id,
  label,
  title,
  subtitle,
  services,
  graphic,
}: {
  id: string;
  label: string;
  title: string;
  subtitle: string;
  services: { title: string; description: string }[];
  graphic: "grid" | "circles";
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id={id} className="py-section border-b border-border" ref={ref}>
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionLabel className="mb-6">{label}</SectionLabel>
            <RevealText>
              <h2 className="text-display mb-6">{title}</h2>
            </RevealText>
            <RevealText delay={0.1}>
              <p className="text-body-lg text-muted">{subtitle}</p>
            </RevealText>
            <div className="mt-8 w-48 h-48 hidden lg:block">
              <GraphicElement variant={graphic} className="w-full h-full" />
            </div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <div className="flex flex-col">
              {services.map((service, i) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="py-8 border-b border-border last:border-b-0"
                >
                  <h3 className="text-subheading mb-2">{service.title}</h3>
                  <p className="text-body text-muted">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-section" ref={ref}>
      <div className="container-wide">
        <SectionLabel className="mb-12">Our process</SectionLabel>

        <RevealText>
          <h2 className="text-heading mb-16 max-w-xl">
            A clear path from concept to completion.
          </h2>
        </RevealText>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {processSteps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{
                duration: 0.7,
                delay: i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative"
            >
              <span className="text-display text-accent-subtle block mb-4">
                {step.number}
              </span>
              <div className="w-full h-px bg-border mb-6" />
              <h3 className="text-subheading mb-3">{step.title}</h3>
              <p className="text-body text-muted">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Button href="/contact">Start your project</Button>
        </div>
      </div>
    </section>
  );
}

export default function ServicesPage() {
  return (
    <PageTransition>
    <div className="pt-20">
      {/* Page header */}
      <section className="py-section border-b border-border">
        <div className="container-wide">
          <SectionLabel className="mb-12">Our services</SectionLabel>
          <RevealText>
            <h1 className="text-display-xl max-w-4xl text-balance">
              Software that performs.{" "}
              <span className="font-serif-italic text-accent-light">Marketing that resonates.</span>
            </h1>
          </RevealText>
          <RevealText delay={0.15}>
            <p className="mt-10 text-body-lg text-muted max-w-2xl">
              Two disciplines, one mission — driving meaningful growth for
              ambitious brands through technology and creativity.
            </p>
          </RevealText>
        </div>
      </section>

      <ServicePillar
        id="software"
        label="Development"
        title="Software"
        subtitle="We engineer digital products with clean code, modern architecture, and an obsession for performance."
        services={softwareServices}
        graphic="grid"
      />

      <ServicePillar
        id="marketing"
        label="Growth"
        title="Marketing"
        subtitle="We craft campaigns and brand systems that cut through noise and create lasting impressions."
        services={marketingServices}
        graphic="circles"
      />

      <Process />
    </div>
    </PageTransition>
  );
}
