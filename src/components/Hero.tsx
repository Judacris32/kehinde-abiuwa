"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { site } from "@/lib/data";
import { Arrow, ease } from "./ui";

const item = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1, ease, delay },
});

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-backdrop">
      {/* Portrait: full background on phones, centred and feathered into the backdrop on wider screens */}
      <div className="hero-fade absolute inset-0 -z-10 md:inset-auto md:bottom-0 md:left-1/2 md:h-full md:w-auto md:-translate-x-1/2 md:aspect-[4/5]">
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2.2, ease }}
        >
          <Image
            src="/images/hero-standing.jpg"
            alt="Kehinde Abiuwa standing with his arms folded, wearing a cream knit polo"
            fill
            priority
            sizes="(min-width: 768px) 80vh, 100vw"
            className="object-cover object-[57%_18%]"
          />
        </motion.div>
      </div>

      {/* Light and legibility */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_30%,transparent_30%,rgba(21,18,14,0.55)_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-40 bg-gradient-to-b from-ink/70 to-transparent" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_top,#15120E_0%,rgba(21,18,14,0.95)_36%,rgba(21,18,14,0.78)_52%,rgba(21,18,14,0.25)_68%,transparent_80%)]" />

      <div className="container-site relative mt-auto flex flex-col items-center pb-14 pt-40 text-center sm:pb-16 lg:pb-20">
        <motion.span className="eyebrow whitespace-nowrap !tracking-[0.18em] sm:!tracking-label" {...item(0.4)}>
          {site.role}
        </motion.span>

        <motion.h1
          className="mt-5 font-display text-[3.4rem] font-medium leading-[0.92] tracking-[-0.02em] text-ivory sm:text-[5.5rem] lg:text-[8.2rem]"
          {...item(0.55)}
        >
          Kehinde <em className="font-normal italic text-brass-light">Abiuwa</em>
        </motion.h1>

        <motion.p
          className="justify-center-last mt-7 max-w-[34rem] text-[15.5px] leading-[1.75] text-ivory/80 sm:text-[17px]"
          {...item(0.75)}
        >
          I design and build cloud platforms on AWS and Azure that are secure by default and dull to run. In my line
          of work, dull is the compliment.
        </motion.p>

        <motion.div className="mt-9 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row" {...item(0.9)}>
          <Link href="/work" className="btn btn-brass w-full sm:w-auto">
            See selected work <Arrow />
          </Link>
          <Link href="/contact" className="btn btn-ghost w-full sm:w-auto">
            Start a conversation
          </Link>
        </motion.div>

        <motion.div
          className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-ivory/55"
          {...item(1.05)}
        >
          <span>Based in the {site.location}</span>
          <span className="hidden h-1 w-1 rounded-full bg-brass sm:block" />
          <span>Open to roles and consulting</span>
        </motion.div>
      </div>
    </section>
  );
}
