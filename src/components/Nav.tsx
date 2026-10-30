"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Monogram from "./Monogram";
import { cvLink, nav, site } from "@/lib/data";
import { ease } from "./ui";

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu whenever the route changes.
  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500 ${
          scrolled && !open
            ? "border-b border-ivory/10 bg-ink/85 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="container-site flex h-[72px] items-center justify-between">
          <Link href="/" className="group flex items-center gap-3" aria-label="Kehinde Abiuwa, home">
            <Monogram className="h-8 w-auto text-brass transition-colors duration-300 group-hover:text-ivory" />
            <span className="hidden flex-col leading-none sm:flex">
              <span className="font-display text-[1.15rem] font-semibold uppercase tracking-[0.2em] text-ivory">
                Kehinde Abiuwa
              </span>
              <span className="mt-1 text-[9px] font-semibold uppercase tracking-[0.42em] text-brass">Cloud Architect</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
            {nav.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative text-[12px] font-semibold uppercase tracking-[0.16em] transition-colors hover:text-ivory after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:origin-left after:bg-brass after:transition-transform after:duration-300 hover:after:scale-x-100 ${
                    active ? "text-brass after:scale-x-100" : "text-ivory/75 after:scale-x-0"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <a href={cvLink} className="btn btn-ghost hidden !px-5 !py-2.5 md:inline-flex" {...(site.cvAvailable ? { download: true } : {})}>
              {site.cvAvailable ? "Download CV" : "Request CV"}
            </a>
            <Link href="/contact" className="btn btn-brass hidden !px-5 !py-2.5 sm:inline-flex">
              Let&rsquo;s talk
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="relative flex h-11 w-11 items-center justify-center rounded-full border border-ivory/25 text-ivory transition-colors hover:bg-ivory hover:text-ink lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
            >
              <span className={`absolute h-px w-5 bg-current transition-transform duration-300 ${open ? "rotate-45" : "-translate-y-[4px]"}`} />
              <span className={`absolute h-px w-5 bg-current transition-transform duration-300 ${open ? "-rotate-45" : "translate-y-[4px]"}`} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="fixed inset-0 z-40 flex flex-col bg-ink px-6 pb-10 pt-28 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease }}
          >
            <nav className="flex flex-1 flex-col items-center justify-center gap-2" aria-label="Mobile">
              {[{ label: "Home", href: "/" }, ...nav, { label: "Contact", href: "/contact" }].map((item, i) => {
                const active = item.href === "/" ? pathname === "/" : isActive(item.href);
                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease, delay: 0.05 * i + 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      aria-current={active ? "page" : undefined}
                      className={`font-display text-[2.5rem] leading-tight transition-colors hover:text-brass ${
                        active ? "italic text-brass" : "text-ivory"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>
            <div className="flex flex-col gap-3">
              <a href={cvLink} onClick={() => setOpen(false)} className="btn btn-ghost w-full">
                {site.cvAvailable ? "Download CV" : "Request CV"}
              </a>
              <Link href="/contact" onClick={() => setOpen(false)} className="btn btn-brass w-full">
                Let&rsquo;s talk
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
