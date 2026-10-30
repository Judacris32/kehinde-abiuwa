"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

export const ease = [0.22, 1, 0.36, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease } },
};

export function Reveal({
  children,
  className,
  delay = 0,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li" | "article" | "section";
}) {
  const M = motion[as];
  return (
    <M
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      variants={{
        hidden: { opacity: 0, y: 26 },
        show: { opacity: 1, y: 0, transition: { duration: 0.9, ease, delay } },
      }}
    >
      {children}
    </M>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  tone = "dark",
  className = "",
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <Reveal className={`mx-auto flex max-w-3xl flex-col items-center text-center ${className}`}>
      <span className={`eyebrow ${tone === "light" ? "text-brass-deep" : ""}`}>{eyebrow}</span>
      <h2
        className={`mt-5 text-[2.6rem] leading-[1.02] sm:text-6xl lg:text-[4.4rem] ${
          tone === "light" ? "text-ink" : "text-ivory"
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={`justify-center-last mt-6 max-w-[60ch] text-[15px] leading-[1.8] sm:text-base ${
            tone === "light" ? "text-ink/70" : "text-ivory-muted"
          }`}
        >
          {intro}
        </p>
      )}
    </Reveal>
  );
}

export function Arrow({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
      <path d="M3 10h13m0 0-5-5m5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ArrowUpRight({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
      <path d="M6 14 14 6m0 0H7.5M14 6v6.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
