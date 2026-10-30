import Link from "next/link";
import Monogram from "./Monogram";
import { cvLink, site } from "@/lib/data";
import { Arrow, Reveal } from "./ui";

/** Closing call to action used at the foot of every page except Contact. */
export default function CtaBand() {
  return (
    <section className="relative bg-ink py-24 sm:py-28">
      <div className="container-site">
        <Reveal className="relative overflow-hidden rounded-[2px] bg-paper px-6 py-14 text-center text-ink sm:px-14 sm:py-20">
          <Monogram className="pointer-events-none absolute -right-10 -top-10 h-64 w-auto text-brass/10 sm:h-80" title="" />
          <div className="relative mx-auto flex max-w-2xl flex-col items-center">
            <span className="eyebrow text-brass-deep">Next step</span>
            <h2 className="mt-5 text-[2.5rem] leading-[1.02] sm:text-6xl">
              A role to fill, or a platform <em className="italic text-brass-deep">to fix?</em>
            </h2>
            <p className="justify-center-last mt-6 max-w-[34rem] text-[15.5px] leading-[1.8] text-ink/70">
              Either way, a short email is the best place to start. Tell me what you are working on and I will reply
              with honest first thoughts.
            </p>
            <div className="mt-9 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row">
              <Link href="/contact" className="btn btn-ink w-full sm:w-auto">
                Get in touch <Arrow />
              </Link>
              <a href={cvLink} className="btn btn-outline-ink w-full sm:w-auto" {...(site.cvAvailable ? { download: true } : {})}>
                {site.cvAvailable ? "Download CV" : "Request CV"}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
