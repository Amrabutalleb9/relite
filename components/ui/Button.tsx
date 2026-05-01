"use client";

import Link from "next/link";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline" | "ghost";
  className?: string;
  external?: boolean;
}

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-3 text-caption uppercase tracking-widest transition-all duration-500 group";

  const variants = {
    primary:
      "px-7 py-3.5 bg-accent text-background rounded-full hover:bg-accent-light",
    outline:
      "px-7 py-3.5 border border-accent text-accent rounded-full hover:bg-accent hover:text-background",
    ghost:
      "text-foreground hover:text-accent-light",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
        <span className="inline-block group-hover:translate-x-1 transition-transform duration-300">
          &rarr;
        </span>
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
      <span className="inline-block group-hover:translate-x-1 transition-transform duration-300">
        &rarr;
      </span>
    </Link>
  );
}
