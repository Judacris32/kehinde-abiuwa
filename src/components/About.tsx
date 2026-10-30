import Image from "next/image";
import Link from "next/link";
import { about, aboutFacts } from "@/lib/data";
import { Arrow, Reveal, SectionHeading } from "./ui";

/**
 * About: portrait beside a white text box.
 * `preview` shows the opening paragraph only, with a link through to the full About page.
 */
export default function About({ heading = true, preview = false }: { heading?: boolean; preview?: boolean }) {
  const paragraphs = preview ? about.slice(0, 1) : about;

  return (
    <section className="relative bg-ink py-24 sm:py-32">
      <div className="container-site">
        {heading && (
          <SectionHeading
            className="mb-16 lg:mb-20"
            eyebrow="About"
            title={<>I learned cloud by <em className="italic text-brass-light">fixing it</em> first.</>}
          />
        )}

        <div className="grid items-stretch gap-8 lg:grid-cols-12 lg:gap-10">
          <Reveal className="relative mx-auto w-full max-w-[440px] lg:col-span-5 lg:max-w-none">
            <div className="relative h-full min-h-[460px] overflow-hidden rounded-[2px] bg-backdrop">
              <Image
                src="/images/side-arms.jpg"
                alt="Kehinde Abiuwa standing side-on with his arms folded, in a cream polo"
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover object-[55%_30%]"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="flex h-full flex-col rounded-[2px] bg-paper p-7 text-ink shadow-[0_30px_60px_-30px_rgba(0,0,0,0.6)] sm:p-12">
              <span className="text-center text-[10px] font-semibold uppercase tracking-label text-brass-deep sm:text-left">
                In my own words
              </span>
              <div className="mt-6">
                {paragraphs.map((para, i) => (
                  <p
                    key={i}
                    className={`text-[15.5px] leading-[1.9] text-ink/80 sm:text-[17px] ${i > 0 ? "mt-6" : ""} ${
                      i === 0
                        ? "first-letter:float-left first-letter:mr-2 first-letter:mt-1 first-letter:font-display first-letter:text-[4.6rem] first-letter:leading-[0.8] first-letter:text-brass-deep"
                        : ""
                    }`}
                  >
                    {para}
                  </p>
                ))}
              </div>

              <p className="mt-8 font-display text-3xl italic text-brass-deep">Kehinde</p>

              <div className="mt-8 grid grid-cols-1 border-t border-ink/10 sm:grid-cols-3">
                {aboutFacts.map((f, i) => (
                  <div
                    key={f.k}
                    className={`flex flex-col items-center gap-1 py-5 text-center ${
                      i > 0 ? "border-t border-ink/10 sm:border-l sm:border-t-0" : ""
                    }`}
                  >
                    <span className="text-[10px] font-semibold uppercase tracking-label text-brass-deep">{f.k}</span>
                    <span className="font-display text-xl text-ink">{f.v}</span>
                  </div>
                ))}
              </div>

              {preview && (
                <div className="mt-auto flex justify-center pt-6 sm:justify-start">
                  <Link href="/about" className="btn btn-ink">
                    Read the full story <Arrow />
                  </Link>
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
