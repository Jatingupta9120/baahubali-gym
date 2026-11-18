import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import PageHero from "@/components/PageHero";
import Photo from "@/components/Photo";
import Reveal from "@/components/Reveal";
import { programs } from "@/config/content";

export const metadata: Metadata = {
  title: "Training - Strength, Bodybuilding, Personal & Group",
  description: "Training at Baahubali Gym: strength training, bodybuilding, personal training and group workouts for every level.",
  alternates: { canonical: "/training" },
};

export default function Training() {
  return (
    <>
      <PageHero eyebrow="Training" title="Train with" accent="purpose" image="strength" position="50% 35%">
        <p>Choose the training that fits your goal. Programme details are shared when you enquire.</p>
      </PageHero>

      {programs.map((p, i) => (
        <section key={p.id} id={p.id} className={`section ${i % 2 === 0 ? "bg-panel" : ""}`}>
          <div className="container-x grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
            <Reveal className={i % 2 === 0 ? "" : "lg:order-2"}><Photo name={p.image} ratio="4 / 5" sizes="(min-width:1024px) 40vw, 100vw" className="max-h-[640px]" /></Reveal>
            <Reveal delay={100}>
              <p className="eyebrow">Programme 0{i + 1}</p>
              <h2 className="h-section mt-3">{p.title}</h2>
              <p className="mt-5 max-w-lg leading-relaxed text-mute">{p.text}</p>
              <ul className="mt-6 space-y-3">{p.points.map((t) => <li key={t} className="flex items-center gap-3 font-semibold"><Check size={18} className="text-gold" aria-hidden />{t}</li>)}</ul>
              <p className="mt-6 text-xs text-white/40">Schedule &amp; fees: shared on enquiry</p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row"><Link href={`/membership?goal=${encodeURIComponent(p.title === "Strength Training" ? "Build strength" : p.title === "Bodybuilding" ? "Bodybuilding" : p.title === "Personal Training" ? "Personal training" : "Group workouts")}#trial`} className="btn btn-gold">Book a free trial</Link><Link href="/contact" className="btn btn-line">Ask a question</Link></div>
            </Reveal>
          </div>
        </section>
      ))}
    </>
  );
}
