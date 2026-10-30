import Image from "next/image";
import Link from "next/link";
import { press } from "@/lib/data";
import { Arrow, ArrowUpRight, Reveal, SectionHeading } from "./ui";

/** Press coverage: dark cards with the real article screenshots, on a white section. */
export default function Press({ heading = true, preview = false }: { heading?: boolean; preview?: boolean }) {
  return (
    <section className="relative bg-paper py-24 text-ink sm:py-32">
      <div className="container-site">
        {heading && (
          <SectionHeading
            tone="light"
            className="mb-14 sm:mb-16"
            eyebrow="In the press"
            title={<>What others <em className="italic text-brass-deep">have written</em></>}
          />
        )}

        <div className="grid gap-6 md:grid-cols-2">
          {press.map((p, i) => (
            <Reveal key={p.outlet} delay={i * 0.08}>
              <a
                href={p.href}
                target="_blank"
                rel="noreferrer"
                className="group flex h-full flex-col overflow-hidden rounded-[2px] bg-ink text-ivory transition-colors duration-500 hover:bg-ink-700"
              >
                {/* Screenshot in a simple browser frame */}
                <div className="border-b border-ivory/10 bg-ink-700 px-4 py-3">
                  <div className="flex items-center gap-3">
                    <span className="flex gap-1.5" aria-hidden="true">
                      <span className="h-2.5 w-2.5 rounded-full bg-ivory/20" />
                      <span className="h-2.5 w-2.5 rounded-full bg-ivory/20" />
                      <span className="h-2.5 w-2.5 rounded-full bg-ivory/20" />
                    </span>
                    <span className="truncate rounded-full bg-ink px-3 py-1 text-[11px] text-ivory/50">
                      {new URL(p.href).hostname.replace("www.", "")}
                    </span>
                  </div>
                </div>
                <div className="relative aspect-[4/3] overflow-hidden bg-ivory">
                  <Image
                    src={p.image}
                    alt={p.imageAlt}
                    fill
                    sizes="(min-width: 768px) 45vw, 92vw"
                    className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.03]"
                    style={{ objectPosition: p.imagePosition }}
                  />
                </div>

                <div className="flex flex-1 flex-col p-7 sm:p-9">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-brass">{p.outlet}</span>
                    <span className="text-[12px] text-ivory/50">{p.date}</span>
                  </div>
                  <h3 className="mt-5 text-[1.7rem] leading-tight">&ldquo;{p.title}&rdquo;</h3>
                  <p className="mt-4 text-[15px] leading-[1.8] text-ivory/70">{p.body}</p>
                  <span className="mt-auto flex items-center gap-2 pt-6 text-[12px] font-semibold uppercase tracking-[0.14em] text-ivory transition-colors group-hover:text-brass">
                    Read the article <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        {preview && (
          <Reveal className="mt-12 flex justify-center">
            <Link href="/recognition" className="btn btn-ink">
              Awards and certifications <Arrow />
            </Link>
          </Reveal>
        )}
      </div>
    </section>
  );
}
