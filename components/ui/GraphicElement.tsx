"use client";

import { motion } from "framer-motion";

type GraphicVariant = "grid" | "circles" | "lines" | "dots" | "cross" | "rings";

interface GraphicElementProps {
  variant: GraphicVariant;
  className?: string;
  color?: string;
  animate?: boolean;
}

export default function GraphicElement({
  variant,
  className = "",
  color = "#1e3a5f",
  animate = true,
}: GraphicElementProps) {
  const wrapperClass = `${className}`;

  switch (variant) {
    case "grid":
      return (
        <motion.svg
          viewBox="0 0 200 200"
          className={wrapperClass}
          initial={animate ? { opacity: 0, rotate: -5 } : undefined}
          animate={animate ? { opacity: 0.15, rotate: 0 } : undefined}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {Array.from({ length: 9 }).map((_, i) => (
            <line
              key={`v-${i}`}
              x1={22 * (i + 1)}
              y1="0"
              x2={22 * (i + 1)}
              y2="200"
              stroke={color}
              strokeWidth="0.5"
            />
          ))}
          {Array.from({ length: 9 }).map((_, i) => (
            <line
              key={`h-${i}`}
              x1="0"
              y1={22 * (i + 1)}
              x2="200"
              y2={22 * (i + 1)}
              stroke={color}
              strokeWidth="0.5"
            />
          ))}
        </motion.svg>
      );

    case "circles":
      return (
        <motion.svg
          viewBox="0 0 200 200"
          className={wrapperClass}
          initial={animate ? { opacity: 0, scale: 0.8 } : undefined}
          animate={animate ? { opacity: 0.2, scale: 1 } : undefined}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {[30, 55, 80].map((r) => (
            <circle
              key={r}
              cx="100"
              cy="100"
              r={r}
              fill="none"
              stroke={color}
              strokeWidth="0.5"
            />
          ))}
        </motion.svg>
      );

    case "lines":
      return (
        <motion.svg
          viewBox="0 0 200 200"
          className={wrapperClass}
          initial={animate ? { opacity: 0 } : undefined}
          animate={animate ? { opacity: 0.15 } : undefined}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {Array.from({ length: 12 }).map((_, i) => (
            <line
              key={i}
              x1="0"
              y1={i * 18}
              x2="200"
              y2={i * 18}
              stroke={color}
              strokeWidth="0.5"
            />
          ))}
        </motion.svg>
      );

    case "dots":
      return (
        <motion.svg
          viewBox="0 0 200 200"
          className={wrapperClass}
          initial={animate ? { opacity: 0 } : undefined}
          animate={animate ? { opacity: 0.2 } : undefined}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {Array.from({ length: 10 }).map((_, row) =>
            Array.from({ length: 10 }).map((_, col) => (
              <circle
                key={`${row}-${col}`}
                cx={10 + col * 20}
                cy={10 + row * 20}
                r="1.5"
                fill={color}
              />
            ))
          )}
        </motion.svg>
      );

    case "cross":
      return (
        <motion.svg
          viewBox="0 0 200 200"
          className={wrapperClass}
          initial={animate ? { opacity: 0, rotate: -45 } : undefined}
          animate={animate ? { opacity: 0.15, rotate: 0 } : undefined}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <line x1="100" y1="20" x2="100" y2="180" stroke={color} strokeWidth="0.5" />
          <line x1="20" y1="100" x2="180" y2="100" stroke={color} strokeWidth="0.5" />
          <line x1="40" y1="40" x2="160" y2="160" stroke={color} strokeWidth="0.5" />
          <line x1="160" y1="40" x2="40" y2="160" stroke={color} strokeWidth="0.5" />
        </motion.svg>
      );

    case "rings":
      return (
        <motion.svg
          viewBox="0 0 200 200"
          className={wrapperClass}
          initial={animate ? { opacity: 0, scale: 0.9 } : undefined}
          animate={animate ? { opacity: 0.12, scale: 1 } : undefined}
          transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {[20, 40, 60, 80, 95].map((r) => (
            <circle
              key={r}
              cx="100"
              cy="100"
              r={r}
              fill="none"
              stroke={color}
              strokeWidth="0.3"
              strokeDasharray={r > 60 ? "4 4" : "none"}
            />
          ))}
        </motion.svg>
      );

    default:
      return null;
  }
}
