"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ease } from "./ui";

type Props = {
  eyebrow: string;
  title: string;
  /** The part of the title set in brass italic. */
  accent?: string;
  intro: string;
  image: string;
  alt: string;
  position?: string;
};

const item = (delay: number) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.95, ease, delay },
});

function Title({ title, accent }: { title: string; accent?: string }) {
  if (!accent || !title.includes(accent)) return <>{title}</>;
  const [before, after] = title.split(accent);
  return (
    <>
      {before}
      <em className="italic text-brass-light">{accent}</em>
      {after}
    </>
  );
}

/** Header for every inner page: photo as the full background, content centred on top. */
export default function PageHero({ eyebrow, title, accent, intro, image, alt, position = "50% 20%" }: Props) {
  return (
    <section className="relative isolate flex min-h-[92svh] items-end overflow-hidden bg-backdrop md:min-h-[88svh]">
      {/* Same treatment as the home hero: full background on phones, centred and feathered on wider screens */}
      <div className="hero-fade absolute inset-0 -z-10 md:inset-auto md:bottom-0 md:left-1/2 md:h-full md:w-auto md:-translate-x-1/2 md:aspect-[4/5]">
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease }}
        >
          <Image src={image} alt={alt} fill priority sizes="(min-width: 768px) 75vh, 100vw" className="object-cover" style={{ objectPosition: position }} />
        </motion.div>
      </div>
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_30%,transparent_30%,rgba(21,18,14,0.55)_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-40 bg-gradient-to-b from-ink/70 to-transparent" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_top,#15120E_0%,rgba(21,18,14,0.95)_38%,rgba(21,18,14,0.78)_55%,rgba(21,18,14,0.2)_72%,transparent_85%)]" />

      <div className="container-site flex flex-col items-center pb-16 pt-36 text-center sm:pb-20">
        <motion.nav aria-label="Breadcrumb" className="mb-8 text-[11px] font-semibold uppercase tracking-[0.2em] text-ivory/50" {...item(0.2)}>
          <Link href="/" className="transition-colors hover:text-brass">
            Home
          </Link>
          <span className="mx-3 text-brass">/</span>
          <span className="text-ivory/80">{eyebrow}</span>
        </motion.nav>
        <motion.span className="eyebrow" {...item(0.3)}>
          {eyebrow}
        </motion.span>
        <motion.h1
          className="mt-5 max-w-4xl text-[2.9rem] leading-[1] text-ivory sm:text-[4.4rem] lg:text-[5.6rem]"
          {...item(0.42)}
        >
          <Title title={title} accent={accent} />
        </motion.h1>
        <motion.p
          className="justify-center-last mt-7 max-w-[40rem] text-[15.5px] leading-[1.8] text-ivory/80 sm:text-[17px]"
          {...item(0.55)}
        >
          {intro}
        </motion.p>
      </div>
    </section>
  );
}
