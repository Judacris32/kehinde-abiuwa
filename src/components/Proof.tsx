import { credentials, stats } from "@/lib/data";
import { Reveal } from "./ui";

export default function Proof() {
  return (
    <section aria-label="At a glance" className="relative bg-ink">
      <div className="container-site">
        <div className="grid grid-cols-2 border-y border-ivory/10 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal
              key={s.value}
              delay={i * 0.08}
              className={`flex flex-col items-center px-3 py-10 text-center sm:px-6 sm:py-12 ${
                i % 2 === 1 ? "border-l border-ivory/10" : ""
              } ${i > 1 ? "border-t border-ivory/10 lg:border-t-0" : ""} ${i === 2 ? "lg:border-l" : ""}`}
            >
              <span className="font-display text-[2.6rem] font-medium leading-none text-brass sm:text-6xl">{s.value}</span>
              <span className="mt-4 max-w-[15rem] text-[13px] leading-[1.6] text-ivory-muted [text-wrap:balance] sm:text-sm">
                {s.label}
              </span>
            </Reveal>
          ))}
        </div>

        <Reveal className="flex flex-col items-center justify-center gap-x-10 gap-y-3 py-8 text-center sm:flex-row sm:flex-wrap">
          {credentials.map((c) => (
            <span key={c} className="text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-ivory/60">
              <svg viewBox="0 0 12 12" className="mr-3 inline-block h-2.5 w-2.5 -translate-y-px align-middle text-brass" aria-hidden="true">
                <path d="M6 0 7.4 4.6 12 6 7.4 7.4 6 12 4.6 7.4 0 6 4.6 4.6Z" fill="currentColor" />
              </svg>
              {c}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
