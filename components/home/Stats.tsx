"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { value: 50, suffix: "+", label: "Clients served", sublabel: "across MENA & Europe" },
  { value: 120, suffix: "+", label: "Projects delivered", sublabel: "since our founding" },
  { value: 8, suffix: "", label: "Markets reached", sublabel: "and growing" },
  { value: 2024, suffix: "", label: "Established", sublabel: "Dubai, UAE" },
];

function AnimatedNumber({ value, suffix, isInView }: { value: number; suffix: string; isInView: boolean }) {
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!isInView) return;

    const motionVal = { val: 0 };
    const controls = animate(motionVal, { val: value }, {
      duration: 2,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => {
        setDisplay(Math.round(latest.val).toString());
      },
    });

    return () => controls.stop();
  }, [isInView, value]);

  return (
    <span>
      {display}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="py-section" ref={ref}>
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{
                duration: 0.7,
                delay: i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative group"
            >
              {/* Top border that animates in */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="h-px bg-border origin-left"
              />

              <div className="py-10 md:py-14 md:pr-8">
                {/* Large number */}
                <p className="text-[clamp(3rem,6vw,5.5rem)] leading-none font-medium tracking-tight text-foreground transition-colors duration-500 group-hover:text-accent-light">
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} isInView={isInView} />
                </p>

                {/* Label */}
                <p className="text-caption uppercase tracking-widest text-foreground mt-5">
                  {stat.label}
                </p>

                {/* Sub-label */}
                <p className="text-caption text-muted mt-1">
                  {stat.sublabel}
                </p>
              </div>

              {/* Bottom border */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.12 + 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="h-px bg-border origin-left lg:hidden"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
