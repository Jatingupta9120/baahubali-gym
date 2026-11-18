import type { Metadata } from "next";
import { MessageCircle } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import TrialForm from "@/components/TrialForm";
import { waLink } from "@/config/site";

export const metadata: Metadata = {
  title: "Membership - Join the Gym or Book a Free Trial",
  description: "Become a member of Baahubali Gym or book a free trial. Membership options and fees are shared on enquiry.",
  alternates: { canonical: "/membership" },
};

// PLACEHOLDER plan cards - durations, inclusions and prices are NOT invented. Edit when the gym confirms.
const plans = [
  { n: "Option 01", t: "Starter", d: "Plan details to be confirmed by the gym." },
  { n: "Option 02", t: "Committed", d: "Plan details to be confirmed by the gym.", featured: true },
  { n: "Option 03", t: "Warrior", d: "Plan details to be confirmed by the gym." },
];

export default function Membership() {
  return (
    <>
      <PageHero eyebrow="Membership" title="Become a" accent="member" image="warrior-2" position="50% 30%">
        <p>Join Baahubali Gym or try a free session first. Membership options and fees are shared when you enquire.</p>
      </PageHero>

      <section id="plans" className="section">
        <div className="container-x">
          <Reveal><SectionHeading eyebrow="Membership options" title="Choose how you" accent="train">Final plans, inclusions and pricing to be confirmed with the gym.</SectionHeading></Reveal>
          <ul className="mt-14 grid gap-5 md:grid-cols-3">
            {plans.map((p, i) => (
              <li key={p.n}><Reveal delay={i * 90}>
                <div className={`flex h-full flex-col border p-8 text-center ${p.featured ? "border-gold bg-gold/10" : "border-line bg-panel"}`}>
                  <span className="eyebrow">{p.n}</span>
                  <h3 className="mt-3 font-display text-4xl uppercase">{p.t}</h3>
                  <p className="mt-3 flex-1 text-sm text-mute">{p.d}</p>
                  <p className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-gold">Fees on enquiry</p>
                  <a href={waLink(`Hello Baahubali Gym, I would like to know about the ${p.t} membership option. Please share the details.`)} target="_blank" rel="noopener noreferrer" className={`btn mt-5 ${p.featured ? "btn-gold" : "btn-line"}`}><MessageCircle size={16} aria-hidden /> Enquire</a>
                </div>
              </Reveal></li>
            ))}
          </ul>
        </div>
      </section>

      <section id="join" className="bg-panel section">
        <div className="container-x grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow">Join now</p>
            <h2 className="h-section mt-4">Join the <span className="text-gold">gym.</span></h2>
            <p className="mt-6 max-w-md leading-relaxed text-mute">Ready to commit? Send your details and we&rsquo;ll help you get started.</p>
          </Reveal>
          <Reveal delay={100}><TrialForm variant="join" /></Reveal>
        </div>
      </section>

      <section id="trial" className="section">
        <div className="container-x grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow">Free trial</p>
            <h2 className="h-section mt-4">Try before you <span className="text-gold">commit.</span></h2>
            <p className="mt-6 max-w-md leading-relaxed text-mute">Book a free trial and experience the floor for yourself.</p>
          </Reveal>
          <Reveal delay={100}><TrialForm variant="trial" /></Reveal>
        </div>
      </section>
    </>
  );
}
