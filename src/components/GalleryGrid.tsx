"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { galleryItems } from "@/config/content";
import { images } from "@/lib/images";
import Photo from "./Photo";

const cats = ["All", "Strength", "Bodybuilding", "Gym Floor"] as const;

export default function GalleryGrid() {
  const [cat, setCat] = useState<string>("All");
  const [active, setActive] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const lastFocus = useRef<HTMLElement | null>(null);

  const filtered = cat === "All" ? galleryItems : galleryItems.filter((i) => i.category === cat);
  const step = useCallback((d: number) => setActive((a) => (a === null ? a : (a + d + filtered.length) % filtered.length)), [filtered.length]);

  useEffect(() => {
    if (active === null) return;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const key = (e: KeyboardEvent) => { if (e.key === "Escape") setActive(null); if (e.key === "ArrowRight") step(1); if (e.key === "ArrowLeft") step(-1); };
    window.addEventListener("keydown", key);
    return () => { window.removeEventListener("keydown", key); document.body.style.overflow = ""; lastFocus.current?.focus(); };
  }, [active, step]);

  const current = active !== null ? filtered[active] : null;

  return (
    <div>
      <div className="-mx-5 mb-10 flex gap-2 overflow-x-auto px-5 pb-2 sm:mx-0 sm:flex-wrap sm:justify-center sm:px-0" role="tablist" aria-label="Gallery categories">
        {cats.map((c) => (
          <button key={c} type="button" role="tab" aria-selected={cat === c} onClick={() => setCat(c)}
            className={`shrink-0 whitespace-nowrap px-6 py-3 text-xs font-bold uppercase tracking-[0.18em] transition-colors ${cat === c ? "bg-gold text-ink" : "border border-gold/40 text-white hover:border-gold hover:text-gold"}`}>{c}</button>
        ))}
      </div>

      <ul className="columns-2 gap-3 sm:gap-5 lg:columns-3">
        {filtered.map((item, i) => (
          <li key={item.image} className="mb-3 break-inside-avoid sm:mb-5">
            <button type="button" aria-label={`Open ${item.title}`} onClick={(e) => { lastFocus.current = e.currentTarget; setActive(i); }} className="img-zoom group relative block w-full overflow-hidden text-left">
              <Photo name={item.image} ratio={`${images[item.image].w} / ${images[item.image].h}`} sizes="(min-width:1024px) 33vw, 50vw" />
              <span className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-ink to-transparent p-4 transition-transform duration-500 group-hover:translate-y-0 group-focus-visible:translate-y-0">
                <span className="block text-[0.68rem] font-bold uppercase tracking-[0.22em] text-gold">{item.category}</span>
                <span className="font-display text-xl uppercase">{item.title}</span>
              </span>
            </button>
          </li>
        ))}
      </ul>

      {current && (
        <div role="dialog" aria-modal="true" aria-label={current.title} className="fixed inset-0 z-[90] flex items-center justify-center bg-black/95 p-4" onClick={() => setActive(null)}>
          <button ref={closeRef} type="button" aria-label="Close" onClick={() => setActive(null)} className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center text-gold"><X size={30} /></button>
          <button type="button" aria-label="Previous image" onClick={(e) => { e.stopPropagation(); step(-1); }} className="absolute left-2 flex h-12 w-12 items-center justify-center text-gold sm:left-6"><ChevronLeft size={36} /></button>
          <button type="button" aria-label="Next image" onClick={(e) => { e.stopPropagation(); step(1); }} className="absolute right-2 flex h-12 w-12 items-center justify-center text-gold sm:right-6"><ChevronRight size={36} /></button>
          <figure className="w-full max-w-lg" onClick={(e) => e.stopPropagation()}>
            <Photo name={current.image} ratio={`${images[current.image].w} / ${images[current.image].h}`} sizes="512px" tone={false} className="max-h-[78vh]" />
            <figcaption className="mt-4 text-center"><span className="block text-[0.68rem] font-bold uppercase tracking-[0.22em] text-gold">{current.category}</span><span className="font-display text-2xl uppercase">{current.title}</span></figcaption>
          </figure>
        </div>
      )}
    </div>
  );
}
