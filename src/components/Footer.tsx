import Link from "next/link";
import Monogram from "./Monogram";
import { nav, site } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative border-t border-ivory/10 bg-ink-900">
      <div className="container-site flex flex-col items-center py-16 text-center">
        <Link href="/" aria-label="Kehinde Abiuwa, home" className="text-brass transition-colors hover:text-ivory">
          <Monogram className="h-14 w-auto" />
        </Link>
        <span className="mt-6 font-display text-2xl font-semibold uppercase tracking-[0.24em] text-ivory">Kehinde Abiuwa</span>
        <span className="mt-2 text-[10px] font-semibold uppercase tracking-[0.46em] text-brass">Cloud Architect</span>

        <nav className="mt-10 flex flex-wrap justify-center gap-x-7 gap-y-3" aria-label="Footer">
          {[{ label: "Home", href: "/" }, ...nav, { label: "Contact", href: "/contact" }].map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="text-[12px] font-semibold uppercase tracking-[0.16em] text-ivory/55 transition-colors hover:text-brass"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="rule mt-12" />
        <div className="mt-8 flex w-full flex-col items-center justify-between gap-3 text-[12px] text-ivory/40 sm:flex-row">
          <span>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </span>
          <span>
            Site by{" "}
            <a href="#" target="_blank" rel="noreferrer" className="text-ivory/60 transition-colors hover:text-brass">
              @Judacris_Jude
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
