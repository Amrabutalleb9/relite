"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { NeonOrbs } from "@/components/ui/neon-orbs";
import SpinningText from "@/components/ui/spinning-text";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background">
      <NeonOrbs />

      <div className="container-wide relative z-10">
        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-caption uppercase tracking-widest text-muted mb-10"
          >
            Software &amp; Marketing Agency — Dubai, UAE
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="text-display-xl text-balance"
          >
            We architect{" "}
            <span className="font-serif-italic text-accent-light">growth.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 text-body-lg text-muted max-w-xl"
          >
            We build software that performs and craft marketing that resonates —
            turning ambition into measurable impact.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mt-14 flex flex-wrap gap-5"
          >
            <Button href="/services">Explore our services</Button>
            <Button href="/contact" variant="outline">Get in touch</Button>
          </motion.div>
        </div>
      </div>

      {/* Spinning scroll CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-10 right-8 md:right-16 z-10"
      >
        <button
          onClick={() => window.scrollBy({ top: window.innerHeight, behavior: "smooth" })}
          className="relative w-[7.5rem] h-[7.5rem] md:w-36 md:h-36 text-muted hover:text-accent-light transition-colors duration-500 group"
          aria-label="Scroll down"
        >
          <SpinningText
            text="SCROLL DOWN • DISCOVER MORE • SCROLL DOWN • DISCOVER MORE •"
            radius={32}
            textClassName="text-[5px]"
            speed={14}
            className="w-full h-full"
          />
          <span className="absolute inset-0 flex items-center justify-center">
            <svg
              width="20"
              height="20"
              viewBox="0 0 14 14"
              fill="none"
              className="group-hover:translate-y-0.5 transition-transform duration-300"
            >
              <path
                d="M7 1v12M1 7l6 6 6-6"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </button>
      </motion.div>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, delay: 1, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-0 left-0 right-0 h-px bg-border origin-left"
      />
    </section>
  );
}
