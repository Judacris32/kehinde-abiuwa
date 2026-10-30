import Image from "next/image";
import { awardLinks, certifications } from "@/lib/data";
import { ArrowUpRight, Reveal, SectionHeading } from "./ui";

/** The award (dark section, white card) and certifications. Press lives in Press.tsx. */
export default function Recognition() {
  return (
    <section className="relative bg-ink py-24 sm:py-32">
      <div className="container-site">
        <SectionHeading className="mb-14 sm:mb-16" eyebrow="The award" title={<>Titans of Tech <em className="italic text-brass-light">2023</em></>} />

        <Reveal className="grid items-center gap-10 rounded-[2px] bg-paper p-6 text-ink sm:p-10 lg:grid-cols-12 lg:gap-14 lg:p-14">
          <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:col-span-6">
            <figure>
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2px] bg-ink/10">
                <Image
                  src="/images/award/certificate.jpg"
                  alt="Titans of Tech award certificate: Emerging Cloud Architect of the Year 2023, Kehinde Ayomide Abiuwa"
                  fill
                  sizes="(min-width: 1024px) 25vw, 45vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 text-center text-[11px] font-semibold uppercase tracking-[0.16em] text-ink/50">
                The certificate
              </figcaption>
            </figure>
            <figure className="mt-10 sm:mt-14">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2px] bg-ink/10">
                <Image
                  src="/images/award/plaque.jpg"
                  alt="The Titans of Tech award plaque, a glass trophy topped with a gold star"
                  fill
                  sizes="(min-width: 1024px) 25vw, 45vw"
                  className="object-cover object-[60%_50%]"
                />
              </div>
              <figcaption className="mt-3 text-center text-[11px] font-semibold uppercase tracking-[0.16em] text-ink/50">
                The plaque
              </figcaption>
            </figure>
          </div>

          <div className="flex flex-col items-center text-center lg:col-span-6 lg:items-start lg:text-left">
            <span className="text-[11px] font-semibold uppercase tracking-label text-brass-deep">21 July 2023 · Lagos</span>
            <h3 className="mt-4 text-[2.4rem] leading-[1.05] sm:text-[3.2rem]">
              Emerging Cloud Architect <em className="italic">of the Year</em>
            </h3>
            <p className="mt-6 text-[15.5px] leading-[1.85] text-ink/75 sm:text-[16.5px]">
              The Titans of Tech Awards gave me their Emerging Cloud Architect of the Year award at the ceremony in
              Lagos. The category recognises people showing real technical skill and leadership in how cloud
              infrastructure gets built. It came at the point where I was moving from supporting platforms to designing
              them, and it meant a great deal to have that change noticed by people outside my own team.
            </p>
            <a href={awardLinks.winners} target="_blank" rel="noreferrer" className="btn btn-ink mt-8">
              See the 2023 winners <ArrowUpRight />
            </a>
          </div>
        </Reveal>

        <Reveal className="mt-24">
          <SectionHeading eyebrow="Certifications" title={<>The paperwork <em className="italic text-brass-light">behind it</em></>} />
          <ul className="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-2">
            {certifications.map((c, i) => (
              <li
                key={c.name}
                className={`flex flex-col items-center gap-2 rounded-[2px] bg-paper p-7 text-center text-ink ${
                  i === certifications.length - 1 && certifications.length % 2 === 1 ? "sm:col-span-2" : ""
                }`}
              >
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brass-deep">{c.date}</span>
                <span className="font-display text-[1.45rem] leading-snug">{c.name}</span>
                <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-ink/45">{c.detail}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
