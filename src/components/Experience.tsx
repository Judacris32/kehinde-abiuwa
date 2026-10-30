import { cvLink, education, experience, site } from "@/lib/data";
import { Arrow, Reveal, SectionHeading } from "./ui";

/** Timeline with each role in a white card on the dark section. */
export default function Experience({ heading = true }: { heading?: boolean }) {
  return (
    <section className="relative bg-ink-800 py-24 sm:py-32">
      <div className="container-site">
        {heading && (
          <SectionHeading
            className="mb-16 sm:mb-20"
            eyebrow="Experience"
            title={<>From the support desk <em className="italic text-brass-light">to the whiteboard</em></>}
          />
        )}

        <ol className="relative mx-auto max-w-5xl">
          <span
            className="absolute bottom-2 left-[7px] top-2 w-px bg-gradient-to-b from-brass/60 via-ivory/15 to-transparent md:left-[calc(26%+7px)]"
            aria-hidden="true"
          />
          {experience.map((e, i) => (
            <Reveal
              as="li"
              key={e.role + e.period}
              delay={i * 0.05}
              className="relative grid gap-4 pb-10 pl-10 last:pb-0 md:grid-cols-[26%_1fr] md:gap-0 md:pl-0"
            >
              <span
                className="absolute left-0 top-[34px] h-[15px] w-[15px] rounded-full border border-brass bg-ink-800 md:left-[26%]"
                aria-hidden="true"
              >
                <span className="absolute inset-[4px] rounded-full bg-brass" />
              </span>
              <div className="md:pr-12 md:pt-7 md:text-right">
                <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-brass">{e.period}</span>
                <span className="mt-1 block text-[13px] text-ivory/50">{e.place}</span>
              </div>
              <div className="md:pl-12">
                <div className="rounded-[2px] bg-paper p-7 text-ink sm:p-9">
                  <h2 className="text-[1.9rem] leading-tight sm:text-[2.2rem]">{e.role}</h2>
                  <span className="mt-1 block font-display text-xl italic text-brass-deep">{e.org}</span>
                  <p className="mt-4 text-[15px] leading-[1.85] text-ink/75 sm:text-[16px]">{e.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>

        {/* Education */}
        <div className="mt-24 sm:mt-28">
          <SectionHeading eyebrow="Education" title={<>Two degrees, <em className="italic text-brass-light">one thread</em></>} />
          <div className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-2">
            {education.map((ed, i) => (
              <Reveal key={ed.degree} delay={i * 0.08} className="flex flex-col rounded-[2px] bg-paper p-7 text-ink sm:p-9">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brass-deep">{ed.period}</span>
                  <span className="text-[12px] text-ink/50">{ed.place}</span>
                </div>
                <h3 className="mt-5 text-[1.8rem] leading-tight sm:text-[2rem]">{ed.degree}</h3>
                <span className="mt-1 block font-display text-xl italic text-brass-deep">{ed.school}</span>
                <p className="mt-4 text-[15px] leading-[1.85] text-ink/75">{ed.body}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="mt-14 flex justify-center">
          <a href={cvLink} className="btn btn-ghost" {...(site.cvAvailable ? { download: true } : {})}>
            {site.cvAvailable ? "Download the full CV" : "Ask for the full CV"} <Arrow />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
