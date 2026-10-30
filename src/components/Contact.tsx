import Image from "next/image";
import { cvLink, mailto, site } from "@/lib/data";
import { Arrow, ArrowUpRight, Reveal } from "./ui";

const socials = [
  { label: "LinkedIn", href: site.linkedin },
  { label: "GitHub", href: site.github },
  { label: "Dev.to", href: site.devto },
];

/** The Contact page: dark section, white cards. */
export default function Contact() {
  return (
    <section className="relative isolate overflow-hidden bg-ink pb-24 pt-36 sm:pb-32 sm:pt-44">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[620px] bg-[radial-gradient(ellipse_at_70%_0%,rgba(194,159,98,0.16),transparent_60%)]" />
      <div className="container-site">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="relative mx-auto w-full max-w-[360px] lg:col-span-4 lg:max-w-none">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2px] bg-backdrop">
              <Image
                src="/images/portrait-chin.jpg"
                alt="Kehinde Abiuwa resting his chin on his fist, wearing a cream polo"
                fill
                priority
                sizes="(min-width: 1024px) 30vw, 90vw"
                className="object-cover object-top"
              />
            </div>
            <div className="pointer-events-none absolute -bottom-4 -left-4 hidden h-full w-full border border-brass/40 sm:block" />
          </Reveal>

          <Reveal className="flex flex-col items-center text-center lg:col-span-8" delay={0.1}>
            <span className="eyebrow">Contact</span>
            <h1 className="mt-5 text-[3.6rem] leading-[0.95] text-ivory sm:text-7xl lg:text-[6.4rem]">
              Let&rsquo;s <em className="italic text-brass-light">talk</em>.
            </h1>
            <p className="justify-center-last mt-7 max-w-[34rem] text-[15.5px] leading-[1.8] text-ivory/75 sm:text-[17px]">
              Whether you are filling a role or untangling a platform, email is the quickest way to reach me. LinkedIn
              works too.
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-8 break-all font-display text-[1.5rem] text-ivory underline decoration-brass/50 decoration-1 underline-offset-[10px] transition-colors hover:text-brass hover:decoration-brass sm:text-[2.2rem]"
            >
              {site.email}
            </a>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-ivory/15 px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.14em] text-ivory/70 transition-colors duration-300 hover:border-ivory hover:bg-ivory hover:text-ink"
                >
                  {s.label} <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-5 md:grid-cols-2">
          <Reveal className="flex flex-col rounded-[2px] bg-paper p-7 text-ink sm:p-10">
            <span className="text-center text-[10px] font-semibold uppercase tracking-label text-brass-deep">Hiring for a role?</span>
            <h2 className="mt-4 text-center text-[2rem] leading-tight">I&rsquo;m open to the right one</h2>
            <p className="mt-5 text-[15.5px] leading-[1.85] text-ink/75">
              I am looking at Cloud and Platform Engineer, Solutions Architect, DevOps or Kubernetes platform, and SRE
              roles in the UK, remote or hybrid. Send over the details and I will get back to you.
            </p>
            <div className="mt-auto grid gap-3 pt-8 sm:grid-cols-2">
              <a href={mailto("A role you might be interested in")} className="btn btn-ink w-full whitespace-nowrap">
                Discuss a role <Arrow />
              </a>
              <a href={cvLink} className="btn btn-outline-ink w-full whitespace-nowrap" {...(site.cvAvailable ? { download: true } : {})}>
                {site.cvAvailable ? "Download CV" : "Request CV"}
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="flex flex-col rounded-[2px] bg-paper p-7 text-ink sm:p-10">
            <span className="text-center text-[10px] font-semibold uppercase tracking-label text-brass-deep">Need help with your cloud?</span>
            <h2 className="mt-4 text-center text-[2rem] leading-tight">Tell me where things stand</h2>
            <p className="mt-5 text-[15.5px] leading-[1.85] text-ink/75">
              A landing zone, a migration, a pipeline that keeps failing or a bill that keeps growing. Tell me what is
              going on and I will reply with honest first thoughts and a sensible next step.
            </p>
            <div className="mt-auto grid gap-3 pt-8 sm:grid-cols-2">
              <a href={mailto("A project I'd like help with")} className="btn btn-ink w-full whitespace-nowrap">
                Discuss a project <Arrow />
              </a>
              <a href={site.linkedin} target="_blank" rel="noreferrer" className="btn btn-outline-ink w-full whitespace-nowrap">
                LinkedIn
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
