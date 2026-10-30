"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { featuredRepos, labs, site } from "@/lib/data";
import { ArrowUpRight, Reveal, ease } from "./ui";

const INITIAL = 9;

/** White section, dark cards. */
export default function Lab() {
  const topics = useMemo(() => ["All", ...Array.from(new Set(labs.map((l) => l.topic)))], []);
  const [topic, setTopic] = useState("All");
  const [expanded, setExpanded] = useState(false);

  const filtered = topic === "All" ? labs : labs.filter((l) => l.topic === topic);
  const visible = expanded || topic !== "All" ? filtered : filtered.slice(0, INITIAL);

  return (
    <section className="relative bg-paper py-24 text-ink sm:py-32">
      <div className="container-site">
        <Reveal className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <span className="eyebrow text-brass-deep">Featured builds</span>
          <h2 className="mt-5 text-[2.4rem] leading-[1.05] sm:text-[3.4rem]">Two that grew into full repositories</h2>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {featuredRepos.map((r, i) => (
            <Reveal key={r.title} delay={i * 0.08}>
              <a
                href={r.href}
                target="_blank"
                rel="noreferrer"
                className="group flex h-full flex-col rounded-[2px] bg-ink p-7 text-ivory transition-colors duration-500 hover:bg-ink-700 sm:p-9"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="text-[10px] font-semibold uppercase tracking-label text-brass">On GitHub</span>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-ivory/20 transition-colors duration-300 group-hover:border-brass group-hover:bg-brass group-hover:text-ink">
                    <ArrowUpRight />
                  </span>
                </div>
                <h3 className="mt-5 text-[1.9rem] leading-tight">{r.title}</h3>
                <p className="mt-4 text-[15px] leading-[1.8] text-ivory/70">{r.body}</p>
                <ul className="mt-6 flex flex-wrap gap-2" aria-label="Services used">
                  {r.tags.map((t) => (
                    <li key={t} className="chip border-ivory/15 text-ivory/65">
                      {t}
                    </li>
                  ))}
                </ul>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-24 flex flex-col items-center gap-5 text-center">
          <span className="eyebrow text-brass-deep">The notebook</span>
          <h2 className="text-[2.4rem] leading-[1.05] sm:text-[3.4rem]">
            {labs.length} write-ups, {topics.length - 1} topics
          </h2>
          <p className="justify-center-last max-w-xl text-[15px] leading-[1.75] text-ink/65">
            Pick a topic to narrow it down. Every card opens the full write-up on GitHub.
          </p>
          <div className="mt-2 flex flex-wrap justify-center gap-2" role="tablist" aria-label="Filter by topic">
            {topics.map((t) => {
              const active = t === topic;
              return (
                <button
                  key={t}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => {
                    setTopic(t);
                    setExpanded(false);
                  }}
                  className={`rounded-full border px-4 py-2 text-[12px] font-semibold tracking-wide transition-colors duration-300 ${
                    active
                      ? "border-ink bg-ink text-ivory hover:bg-brass hover:text-ink hover:border-brass"
                      : "border-ink/20 text-ink/70 hover:border-ink hover:bg-ink hover:text-ivory"
                  }`}
                >
                  {t}
                </button>
              );
            })}
          </div>
        </Reveal>

        <motion.ul layout className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence initial={false} mode="popLayout">
            {visible.map((l) => (
              <motion.li
                layout
                key={l.path}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease }}
              >
                <a
                  href={l.path}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex h-full min-h-[160px] flex-col justify-between gap-6 rounded-[2px] bg-ink p-6 text-ivory transition-colors duration-300 hover:bg-ink-700 sm:p-7"
                >
                  <span className="text-[10px] font-semibold uppercase tracking-label text-brass">{l.topic}</span>
                  <span className="font-display text-[1.45rem] leading-snug">{l.title}</span>
                  <span className="flex items-center gap-2 text-[12px] font-semibold text-ivory/50 transition-colors group-hover:text-brass">
                    Read the write-up <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </a>
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          {topic === "All" && !expanded && (
            <button type="button" onClick={() => setExpanded(true)} className="btn btn-outline-ink">
              Show all {labs.length}
            </button>
          )}
          <a href={site.portfolioRepo} target="_blank" rel="noreferrer" className="btn btn-ink">
            Browse the repository <ArrowUpRight />
          </a>
        </div>
      </div>
    </section>
  );
}
