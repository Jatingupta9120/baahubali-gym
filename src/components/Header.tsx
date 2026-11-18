"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { nav } from "@/config/content";
import { site } from "@/config/site";
import Logo from "./Logo";
import Photo from "./Photo";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openSub, setOpenSub] = useState<string | null>(null);
  const [menu, setMenu] = useState<string | null>(null);
  const path = usePathname();

  useEffect(() => { setOpen(false); setMenu(null); }, [path]);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on(); window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  useEffect(() => {
    const esc = (e: KeyboardEvent) => { if (e.key === "Escape") { setOpen(false); setMenu(null); } };
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, []);

  const isActive = (href: string) => (href === "/" ? path === "/" : path.startsWith(href));

  return (
    <header className={`sticky top-0 z-50 border-b border-gold/30 bg-ink/95 backdrop-blur ${scrolled ? "shadow-[0_8px_30px_-12px_rgba(201,164,76,.35)]" : ""}`}>
      <div className={`container-x flex items-center justify-between gap-4 transition-all ${scrolled ? "h-16" : "h-[4.5rem] lg:h-20"}`}>
        <Logo />

        <nav aria-label="Primary" className="hidden items-center gap-7 xl:gap-9 lg:flex">
          {nav.map((item) => (
            <div key={item.label} className="relative" onMouseEnter={() => item.children && setMenu(item.label)} onMouseLeave={() => setMenu(null)}>
              <Link href={item.href} aria-current={isActive(item.href) ? "page" : undefined}
                className={`inline-flex items-center gap-1 py-7 text-[0.85rem] font-bold uppercase tracking-[0.14em] transition-colors hover:text-champagne ${isActive(item.href) ? "text-gold" : "text-white"}`}>
                {item.label}
                {item.children && <ChevronDown size={14} aria-hidden />}
              </Link>
              {item.children && menu === item.label && (
                item.mega ? (
                  <div className="absolute left-1/2 top-full w-[820px] -translate-x-1/2 border border-gold/40 bg-panel p-6 shadow-2xl">
                    <div className="grid grid-cols-4 gap-4">
                      {item.children.map((c) => (
                        <Link key={c.label} href={c.href} className="group block">
                          <div className="img-zoom">{c.image && <Photo name={c.image} ratio="4 / 5" sizes="190px" />}</div>
                          <p className="mt-3 font-display text-lg uppercase tracking-wide group-hover:text-gold">{c.label}</p>
                        </Link>
                      ))}
                    </div>
                    <Link href={item.href} className="mt-5 inline-block border-t border-line pt-4 text-xs font-bold uppercase tracking-[0.2em] text-gold hover:text-champagne">All training →</Link>
                  </div>
                ) : (
                  <ul className="absolute left-1/2 top-full w-64 -translate-x-1/2 border border-gold/40 bg-panel py-3 shadow-2xl">
                    {item.children.map((c) => <li key={c.label}><Link href={c.href} className="block px-6 py-2.5 text-sm font-semibold uppercase tracking-wider hover:bg-ink hover:text-gold">{c.label}</Link></li>)}
                  </ul>
                )
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href={`tel:${site.phone.tel}`} className="hidden items-center gap-2 text-sm font-semibold xl:inline-flex" aria-label={`Call ${site.phone.display}`}>
            <Phone size={15} className="text-gold" aria-hidden /> {site.phone.display}
          </a>
          <Link href="/membership#join" className="btn btn-gold hidden !min-h-11 !px-6 sm:inline-flex">Join Now</Link>
          <button type="button" className="inline-flex h-11 w-11 items-center justify-center text-gold lg:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-menu" className="absolute inset-x-0 top-full max-h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-gold/30 bg-ink shadow-xl lg:hidden">
          <nav aria-label="Mobile" className="container-x py-3">
            {nav.map((item) => (
              <div key={item.label} className="border-b border-line">
                <div className="flex items-center justify-between">
                  <Link href={item.href} className="block flex-1 py-4 font-display text-2xl uppercase tracking-wide">{item.label}</Link>
                  {item.children && (
                    <button type="button" aria-label={`Toggle ${item.label} submenu`} aria-expanded={openSub === item.label} className="flex h-11 w-11 items-center justify-center text-gold" onClick={() => setOpenSub(openSub === item.label ? null : item.label)}>
                      <ChevronDown className={`transition-transform ${openSub === item.label ? "rotate-180" : ""}`} size={20} />
                    </button>
                  )}
                </div>
                {item.children && openSub === item.label && (
                  <ul className="pb-3 pl-3">{item.children.map((c) => <li key={c.label}><Link href={c.href} className="block py-2.5 text-mute">{c.label}</Link></li>)}</ul>
                )}
              </div>
            ))}
            <div className="grid gap-3 py-6">
              <Link href="/membership#join" className="btn btn-gold">Join the Gym</Link>
              <Link href="/membership#trial" className="btn btn-line">Book a Free Trial</Link>
              <a href={`tel:${site.phone.tel}`} className="btn btn-line"><Phone size={15} /> Call {site.phone.display}</a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
