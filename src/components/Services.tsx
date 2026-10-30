import Image from "next/image";
import { mailto, services } from "@/lib/data";
import { Arrow, Reveal, SectionHeading } from "./ui";

/** White section, dark cards. */
export default function Services() {
  return (
    <section className="relative bg-paper py-24 text-ink sm:py-32">
      <div className="container-site">
        <SectionHeading
          tone="light"
          eyebrow="Working together"
          title={<>Where I can help <em className="italic text-brass-deep">your team</em></>}
          intro="If you are hiring, my experience page is probably what you are after. If you run a team that needs a hand with its cloud, these are the jobs I do best. I am happy to come in for a short review or stay for the whole build."
        />

        <div className="mt-16 grid gap-12 lg:mt-20 lg:grid-cols-12 lg:gap-14">
          <ol className="grid gap-4 sm:grid-cols-2 lg:col-span-8">
            {services.map((s, i) => (
              <Reveal
                as="li"
                key={s.title}
                delay={(i % 2) * 0.08}
                className="group flex flex-col rounded-[2px] bg-ink p-7 text-ivory transition-colors duration-500 hover:bg-ink-700 sm:p-8"
              >
                <span className="font-display text-lg italic text-brass">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 text-[1.75rem] leading-tight">{s.title}</h3>
                <p className="mt-4 text-[15px] leading-[1.8] text-ivory/70">{s.body}</p>
              </Reveal>
            ))}
          </ol>

          <Reveal className="flex flex-col lg:col-span-4" delay={0.1}>
            <div className="relative mx-auto aspect-[4/5] w-full max-w-[400px] overflow-hidden rounded-[2px] bg-backdrop lg:max-w-none">
              <Image
                src="/images/portrait-cream.jpg"
                alt="Kehinde Abiuwa in a cream polo with his arms folded"
                fill
                sizes="(min-width: 1024px) 30vw, 90vw"
                className="object-cover object-top"
              />
            </div>
            <p className="justify-center-last mt-8 font-display text-[1.4rem] italic leading-snug text-ink">
              &ldquo;Tell me what you are running and what is bothering you about it. You will get honest first thoughts,
              even if the answer is that you do not need me.&rdquo;
            </p>
            <a href={mailto("A project I'd like help with")} className="btn btn-ink mt-8 self-center">
              Tell me about your project <Arrow />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
