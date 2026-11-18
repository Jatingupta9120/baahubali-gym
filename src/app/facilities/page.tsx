import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import PageHero from "@/components/PageHero";
import Photo from "@/components/Photo";
import Reveal from "@/components/Reveal";
import { facilityBlocks } from "@/config/content";

export const metadata: Metadata = {
  title: "Facilities - Strength Floor, Free Weights & Coaching",
  description: "Explore the facilities at Baahubali Gym: a focused strength floor, free weights, personal training and a training community.",
  alternates: { canonical: "/facilities" },
};

export default function Facilities() {
  return (
    <>
      <PageHero eyebrow="Facilities" title="Built for" accent="heavy work" image="gym-floor" position="50% 40%">
        <p>A training environment designed around strength, focus and progress.</p>
      </PageHero>

      {facilityBlocks.map((b, i) => (
        <section key={b.title} className={`section ${i % 2 ? "bg-panel" : ""}`}>
          <div className="container-x grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
            <Reveal className={i % 2 ? "lg:order-2" : ""}><Photo name={b.image} ratio="4 / 3" sizes="(min-width:1024px) 45vw, 100vw" /></Reveal>
            <Reveal delay={100}>
              <p className="eyebrow">{b.eyebrow}</p>
              <h2 className="h-section mt-3">{b.title}</h2>
              <p className="mt-5 max-w-lg leading-relaxed text-mute">{b.text}</p>
              <ul className="mt-6 space-y-3">{b.items.map((t) => <li key={t} className="flex items-center gap-3 font-semibold"><Check size={18} className="text-gold" aria-hidden />{t}</li>)}</ul>
              <Link href="/membership#trial" className="btn btn-gold mt-8">Try it free</Link>
            </Reveal>
          </div>
        </section>
      ))}

      <section className="section">
        <div className="container-x">
          <p className="mx-auto max-w-2xl border border-dashed border-gold/60 bg-panel p-5 text-center text-sm text-mute"><strong className="text-gold">Editable placeholder:</strong> this list covers general training areas only. Edit <code>src/config/content.ts</code> to match the equipment and services the gym actually offers.</p>
        </div>
      </section>
    </>
  );
}
