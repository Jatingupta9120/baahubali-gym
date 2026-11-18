import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Photo from "@/components/Photo";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { values } from "@/config/content";

export const metadata: Metadata = {
  title: "About - Strength Is Not Given. It Is Built.",
  description: "The Baahubali Gym philosophy: discipline, consistency, strength and transformation. Train like a warrior.",
  alternates: { canonical: "/about" },
};

export default function About() {
  return (
    <>
      <PageHero eyebrow="About Baahubali Gym" title="Strength is not given." accent="It is built." image="warrior-1" position="50% 30%">
        <p>Discipline, consistency and determination — the foundation of everything we do.</p>
      </PageHero>

      <section className="section">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal><Photo name="back" ratio="4 / 5" sizes="(min-width:1024px) 45vw, 100vw" /></Reveal>
          <Reveal delay={100}>
            <p className="eyebrow">The warrior way</p>
            <h2 className="h-section mt-4">More than a <span className="text-gold">gym.</span></h2>
            <p className="mt-6 leading-relaxed text-mute">Baahubali Gym is a place to train with purpose. It is built around the idea that strength comes from showing up, doing the work and refusing to quit — in the gym and beyond it.</p>
            <p className="mt-4 leading-relaxed text-mute">Whether you are lifting for the first time or chasing a new personal best, you train alongside a community that pushes each other forward.</p>
            <p className="mt-6 border border-dashed border-gold/60 bg-panel p-4 text-sm text-mute"><strong className="text-gold">Editable placeholder:</strong> add the gym&rsquo;s own story, owner/coach introductions, training philosophy details and any real achievements or certifications once confirmed. Nothing has been assumed.</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-panel section">
        <div className="container-x">
          <Reveal><SectionHeading eyebrow="What we stand for" title="Four pillars of" accent="strength" /></Reveal>
          <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <li key={v.n}><Reveal delay={i * 90}><div className="h-full border border-line bg-ink p-8 hover:border-gold"><span className="font-display text-6xl text-gold">{v.n}</span><h3 className="mt-3 font-display text-2xl uppercase">{v.t}</h3><p className="mt-3 text-sm leading-relaxed text-mute">{v.d}</p></div></Reveal></li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container-x text-center">
          <Reveal>
            <h2 className="h-display text-[2.6rem] sm:text-7xl">Ready to <span className="text-gold">begin?</span></h2>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row"><Link href="/membership#join" className="btn btn-gold">Join the Gym</Link><Link href="/membership#trial" className="btn btn-line">Book a Free Trial</Link></div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
