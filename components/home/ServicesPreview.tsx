"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import { InteractiveAccordion } from "@/components/ui/interactive-accordion";

const services = [
  {
    id: "design",
    number: "01",
    title: "Design",
    content:
      "Interfaces, visual systems, and brand identities crafted with intention — where every pixel serves a purpose and every detail elevates the experience.",
  },
  {
    id: "development",
    number: "02",
    title: "Development",
    content:
      "Robust, scalable software — from web applications and SaaS platforms to mobile products and APIs. Modern architecture, clean code, built to last.",
  },
  {
    id: "marketing",
    number: "03",
    title: "Marketing",
    content:
      "Data-driven campaigns, brand strategy, and growth systems designed to cut through noise, resonate with audiences, and convert at scale.",
  },
  {
    id: "launches",
    number: "04",
    title: "Product Launches",
    content:
      "End-to-end launch strategy — from positioning and messaging to go-to-market execution. We turn launches into moments that matter.",
  },
];

export default function ServicesPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-section" ref={ref}>
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <SectionLabel className="mb-8">What we do</SectionLabel>
            <h2 className="text-display text-balance">
              Transforming ideas into exceptional digital experiences.
            </h2>
          </motion.div>

          <motion.div
            className="lg:col-span-6 lg:col-start-7"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <InteractiveAccordion items={services} defaultActiveId="design" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
