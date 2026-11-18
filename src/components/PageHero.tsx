import type { ReactNode } from "react";
import Photo from "./Photo";
import type { ImageKey } from "@/lib/images";

export default function PageHero({ eyebrow, title, accent, children, image, position }: { eyebrow: string; title: string; accent: string; children?: ReactNode; image: ImageKey; position?: string }) {
  return (
    <section className="relative isolate overflow-hidden border-b border-gold/30">
      <div className="absolute inset-0 -z-10"><Photo name={image} ratio="auto" className="h-full" sizes="100vw" position={position} priority /></div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/85 to-ink/40" aria-hidden />
      <div className="absolute inset-0 -z-10 gold-glow opacity-70" aria-hidden />
      <div className="container-x py-20 sm:py-28 lg:py-36">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="h-display mt-5 max-w-4xl text-[3rem] sm:text-7xl lg:text-8xl">{title} <span className="text-gold">{accent}</span></h1>
        {children && <div className="mt-6 max-w-xl text-lg leading-relaxed text-mute">{children}</div>}
      </div>
    </section>
  );
}
