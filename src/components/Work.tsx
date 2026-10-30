import Link from "next/link";
import { work } from "@/lib/data";
import { Arrow, Reveal, SectionHeading } from "./ui";

/** Case studies as white cards on the dark section. `preview` shows a compact grid for the home page. */
export default function Work({ heading = true, preview = false }: { heading?: boolean; preview?: boolean }) {
  return (
    <section className="relative bg-ink py-24 sm:py-32">
      <div className="container-site">
        {heading && (
          <SectionHeading
            className="mb-16 sm:mb-20"
            eyebrow="Selected work"
            title={<>Platform work, <em className="italic text-brass-light">told plainly</em>.</>}
            intro="Most of what I build sits behind client agreements, so the names stay out. The problems, the decisions and the results are real."
          />
        )}

        {preview ? (
          <>
            <div className="grid gap-5 md:grid-cols-2">
              {work.map((c, i) => (
                <Reveal key={c.no} delay={(i % 2) * 0.08}>
                  <Link
                    href="/work"
                    className="group flex h-full flex-col rounded-[2px] bg-paper p-7 text-ink transition-transform duration-500 hover:-translate-y-1 sm:p-9"
                  >
                    <div className="flex items-start justify-between gap-6">
                      <span className="font-display text-5xl font-medium leading-none text-brass-deep">{c.no}</span>
                      <span className="text-right text-[10px] font-semibold uppercase tracking-[0.18em] text-ink/45">{c.period}</span>
                    </div>
                    <h3 className="mt-6 text-[1.8rem] leading-[1.12]">{c.title}</h3>
                    <p className="mt-4 text-[15px] leading-[1.8] text-ink/70">{c.problem}</p>
                    <div className="mt-auto flex items-end justify-between gap-4 border-t border-ink/10 pt-6">
                      <div className="flex flex-col">
                        <span className="text-[10px] font-semibold uppercase tracking-label text-ink/45">Result</span>
                        <span className="mt-1 font-display text-3xl text-brass-deep">{c.metric}</span>
                      </div>
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ink text-ivory transition-colors duration-300 group-hover:bg-brass group-hover:text-ink">
                        <Arrow />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
            <Reveal className="mt-12 flex justify-center">
              <Link href="/work" className="btn btn-brass">
                Read the full case studies <Arrow />
              </Link>
            </Reveal>
          </>
        ) : (
          <ol className="flex flex-col gap-6 sm:gap-8">
            {work.map((c) => (
              <Reveal as="li" key={c.no}>
                <article className="grid gap-10 rounded-[2px] bg-paper p-7 text-ink sm:p-10 lg:grid-cols-12 lg:gap-14 lg:p-14">
                  <header className="flex flex-col items-center text-center lg:col-span-5 lg:items-start lg:text-left">
                    <span className="font-display text-6xl font-medium leading-none text-brass-deep sm:text-7xl">{c.no}</span>
                    <h2 className="mt-5 text-[1.9rem] leading-[1.1] sm:text-[2.4rem]">{c.title}</h2>
                    <span className="mt-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-ink/50">{c.period}</span>
                    <ul className="mt-6 flex flex-wrap justify-center gap-2 lg:justify-start" aria-label="Tools used">
                      {c.stack.map((s) => (
                        <li key={s} className="chip border-ink/15 text-ink/70">
                          {s}
                        </li>
                      ))}
                    </ul>
                  </header>

                  <div className="lg:col-span-7">
                    <div className="grid gap-8 sm:grid-cols-[110px_1fr]">
                      <span className="text-center text-[10px] font-semibold uppercase tracking-label text-brass-deep sm:pt-1.5 sm:text-left">
                        The problem
                      </span>
                      <p className="-mt-5 text-[15.5px] leading-[1.85] text-ink/75 sm:mt-0 sm:text-[16.5px]">{c.problem}</p>
                      <span className="text-center text-[10px] font-semibold uppercase tracking-label text-brass-deep sm:pt-1.5 sm:text-left">
                        What I did
                      </span>
                      <p className="-mt-5 text-[15.5px] leading-[1.85] text-ink/75 sm:mt-0 sm:text-[16.5px]">{c.approach}</p>
                    </div>

                    <div className="mt-10 flex flex-col items-center gap-4 rounded-[2px] bg-ink p-6 text-center sm:items-start sm:p-8 sm:text-left">
                      <span className="text-[10px] font-semibold uppercase tracking-label text-ivory/45">The result</span>
                      <span className="font-display text-[2.6rem] font-medium leading-none text-brass sm:text-5xl">{c.metric}</span>
                      <p className="w-full text-[15px] leading-[1.75] text-ivory/85">{c.result}</p>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </ol>
        )}
      </div>
    </section>
  );
}
