"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import RevealText from "@/components/ui/RevealText";
import GraphicElement from "@/components/ui/GraphicElement";
import PageTransition from "@/components/layout/PageTransition";

const values = [
  {
    title: "Precision",
    description:
      "Every decision is deliberate. We obsess over detail so the final product feels inevitable, not accidental.",
  },
  {
    title: "Ambition",
    description:
      "We partner with teams who refuse to settle. Our work is for those building the future, not maintaining the past.",
  },
  {
    title: "Clarity",
    description:
      "Complexity is the enemy. We distill problems to their essence and deliver solutions that are simple to understand, powerful to use.",
  },
  {
    title: "Impact",
    description:
      "Beautiful work that doesn't perform is decoration. Everything we build is measured against real outcomes.",
  },
];

function ValuesGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
      {values.map((value, i) => (
        <motion.div
          key={value.title}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{
            duration: 0.7,
            delay: i * 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="bg-background p-8 md:p-12"
        >
          <span className="text-caption text-accent-light block mb-4">
            0{i + 1}
          </span>
          <h3 className="text-subheading mb-3">{value.title}</h3>
          <p className="text-body text-muted">{value.description}</p>
        </motion.div>
      ))}
    </div>
  );
}

function LocationBlock() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className="relative overflow-hidden py-section">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <GraphicElement variant="dots" className="w-[500px] h-[500px]" color="#1e3a5f" />
      </div>

      <div className="container-wide relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-display max-w-2xl mx-auto text-balance"
        >
          Based in Dubai.{" "}
          <span className="font-serif-italic text-accent-light">Building globally.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 text-body-lg text-muted max-w-lg mx-auto"
        >
          From the heart of the UAE, we serve clients across the Middle East,
          Europe, and beyond — wherever ambition lives.
        </motion.p>
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <PageTransition>
    <div className="pt-20">
      {/* Opening statement */}
      <section className="py-section border-b border-border">
        <div className="container-wide">
          <SectionLabel className="mb-12">About Relite</SectionLabel>

          <RevealText>
            <h1 className="text-display-xl max-w-4xl text-balance">
              Precision meets{" "}
              <span className="font-serif-italic text-accent-light">ambition.</span>
            </h1>
          </RevealText>

          <RevealText delay={0.15}>
            <p className="mt-10 text-body-lg text-muted max-w-2xl leading-relaxed">
              Relite is a Dubai-based agency at the intersection of technology and
              storytelling. We build software that scales and craft marketing that
              moves — partnering with ambitious brands to create work that matters.
            </p>
          </RevealText>

          <RevealText delay={0.3}>
            <p className="mt-6 text-body-lg text-muted max-w-2xl leading-relaxed">
              We believe great work comes from clarity of purpose, depth of
              craft, and a relentless focus on outcomes. No fluff. No filler.
              Just results.
            </p>
          </RevealText>
        </div>
      </section>

      {/* Values */}
      <section className="py-section">
        <div className="container-wide">
          <SectionLabel className="mb-12">Our values</SectionLabel>

          <RevealText>
            <h2 className="text-heading mb-12 max-w-xl">
              The principles that guide every project we take on.
            </h2>
          </RevealText>

          <ValuesGrid />
        </div>
      </section>

      {/* Location */}
      <LocationBlock />
    </div>
    </PageTransition>
  );
}
