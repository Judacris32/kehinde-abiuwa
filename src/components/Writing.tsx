import { articles, site } from "@/lib/data";
import { ArrowUpRight, Reveal, SectionHeading } from "./ui";

/** Dark section, white cards. */
export default function Writing() {
  return (
    <section className="relative bg-ink py-24 sm:py-32">
      <div className="container-site">
        <SectionHeading
          eyebrow="Writing"
          title={<>Notes from the <em className="italic text-brass-light">build</em></>}
          intro="A four-part series on Dev.to that walks through the serverless app from the notebook, including the parts that went wrong. Part four is mostly about a CORS bug, because the mistakes are usually where the useful lessons are."
        />

        <ol className="mx-auto mt-14 grid max-w-5xl gap-4 md:grid-cols-2">
          {articles.map((a, i) => (
            <Reveal as="li" key={a.href} delay={(i % 2) * 0.06}>
              <a
                href={a.href}
                target="_blank"
                rel="noreferrer"
                className="group flex h-full flex-col justify-between gap-8 rounded-[2px] bg-paper p-7 text-ink transition-transform duration-500 hover:-translate-y-1 sm:p-9"
              >
                <div>
                  <span className="font-display text-lg italic text-brass-deep">{a.part}</span>
                  <h3 className="mt-3 text-[1.6rem] leading-snug sm:text-[1.75rem]">{a.title}</h3>
                </div>
                <span className="flex items-center justify-between border-t border-ink/10 pt-5 text-[12px] font-semibold uppercase tracking-[0.14em]">
                  Read on Dev.to
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ink text-ivory transition-colors duration-300 group-hover:bg-brass group-hover:text-ink">
                    <ArrowUpRight />
                  </span>
                </span>
              </a>
            </Reveal>
          ))}
        </ol>

        <Reveal className="mt-10 flex justify-center">
          <a href={site.devto} target="_blank" rel="noreferrer" className="btn btn-ghost">
            More on Dev.to <ArrowUpRight />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
