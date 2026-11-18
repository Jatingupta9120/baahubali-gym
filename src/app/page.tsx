import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Camera, MapPin, MessageCircle, Phone } from "lucide-react";
import { site, waLink } from "@/config/site";
import { goals, instagramGallery, programs, values } from "@/config/content";
import Photo from "@/components/Photo";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import Marquee from "@/components/Marquee";
import TrialForm from "@/components/TrialForm";

export const metadata: Metadata = {
  title: { absolute: "Baahubali Gym | Train Like a Warrior" },
  description: "Build strength. Break limits. Become unstoppable. Baahubali Gym - strength training, bodybuilding, personal training and group workouts. Join the gym or book a free trial.",
  alternates: { canonical: "/" },
};

const tiles = [
  { eyebrow: "Heavy iron", title: "Strength Floor", href: "/facilities", img: "strength" as const, cta: "Explore facilities" },
  { eyebrow: "One-to-one", title: "Personal Training", href: "/training#personal", img: "personal-training" as const, cta: "Train with a coach" },
  { eyebrow: "Together", title: "Group Workouts", href: "/training#group", img: "group" as const, cta: "Join the floor" },
  { eyebrow: "Size & shape", title: "Bodybuilding", href: "/training#bodybuilding", img: "warrior-2" as const, cta: "Build your physique" },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden border-b border-gold/30 grain">
        <div className="absolute inset-0 -z-10"><Photo name="hero" ratio="auto" className="h-full" sizes="100vw" position="70% 40%" priority tone={false} /></div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/75 to-transparent max-lg:from-ink/90 max-lg:via-ink/75 max-lg:to-ink/55" aria-hidden />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-transparent to-ink/30" aria-hidden />
        <div className="absolute inset-0 -z-10 gold-glow" aria-hidden />
        <div className="container-x flex min-h-[calc(100svh-7.5rem)] flex-col justify-center py-16 sm:py-20">
          <p className="eyebrow flex items-center gap-3"><span className="font-deva text-lg font-extrabold tracking-normal">बाहुबली</span> GYM</p>
          <h1 className="h-display mt-5 max-w-4xl text-[3.6rem] sm:text-8xl xl:text-[8.5rem]">Train like a <span className="text-gold">warrior.</span></h1>
          <p className="mt-5 max-w-2xl font-display text-xl uppercase tracking-wide text-champagne sm:text-3xl">Build strength. Break limits. Become unstoppable.</p>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/80">Welcome to Baahubali Gym — where discipline meets determination and every workout brings you closer to your strongest self.</p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link href="/membership#join" className="btn btn-gold !min-h-14 !px-10">Join the Gym</Link>
            <Link href="/facilities" className="btn btn-line !min-h-14 !px-10">Explore our Facilities</Link>
          </div>
          <div className="mt-12">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-mute">What&rsquo;s your goal?</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {goals.map((g) => <li key={g}><Link href={`/membership?goal=${encodeURIComponent(g)}#trial`} className="inline-block border border-white/25 bg-ink/50 px-4 py-2.5 text-xs font-bold uppercase tracking-[0.14em] backdrop-blur hover:border-gold hover:text-gold">{g}</Link></li>)}
            </ul>
          </div>
        </div>
      </section>

      <Marquee items={["Train like a warrior", "Build strength", "Break limits", "Become unstoppable", "Discipline", "Consistency"]} />

      {/* BRAND STORY */}
      <section className="section">
        <div className="container-x">
          <Reveal>
            <p className="eyebrow text-center">Our belief</p>
            <h2 className="h-display mt-6 text-center text-[2.6rem] sm:text-7xl lg:text-8xl">
              Strength is <span className="outline-text">not given.</span><br />It is <span className="text-gold">built.</span>
            </h2>
            <p className="mx-auto mt-8 max-w-2xl text-center text-lg leading-relaxed text-mute">Every rep, every set and every early morning adds up. At Baahubali Gym we believe in the work — the discipline to show up, the consistency to keep going, and the determination to become stronger than yesterday.</p>
          </Reveal>
          <ul className="mt-16 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <li key={v.n} className="bg-ink"><Reveal delay={i * 90}>
                <div className="h-full p-8">
                  <span className="font-display text-6xl text-gold/90">{v.n}</span>
                  <h3 className="mt-3 font-display text-2xl uppercase tracking-wide">{v.t}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-mute">{v.d}</p>
                </div>
              </Reveal></li>
            ))}
          </ul>
        </div>
      </section>

      {/* PROMO TILES */}
      <section className="bg-panel section">
        <div className="container-x">
          <Reveal><SectionHeading eyebrow="Your place to train" title="Find your" accent="battleground">Strength, coaching, community and size - choose how you want to train.</SectionHeading></Reveal>
          <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {tiles.map((t, i) => (
              <li key={t.title}><Reveal delay={i * 90}>
                <Link href={t.href} className="img-zoom group relative block aspect-[3/4] overflow-hidden">
                  <span className="absolute inset-0"><Photo name={t.img} ratio="auto" className="h-full" sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw" /></span>
                  <span className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" aria-hidden />
                  <span className="absolute inset-x-0 bottom-0 p-6">
                    <span className="eyebrow !text-[0.7rem]">{t.eyebrow}</span>
                    <span className="mt-1 block font-display text-3xl uppercase leading-none">{t.title}</span>
                    <span className="mt-4 inline-flex items-center gap-2 border-b border-gold pb-1 text-xs font-bold uppercase tracking-[0.18em] text-gold">{t.cta} <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" aria-hidden /></span>
                  </span>
                </Link>
              </Reveal></li>
            ))}
          </ul>
        </div>
      </section>

      {/* WARRIOR BAND */}
      <section className="relative isolate overflow-hidden border-y border-gold/30">
        <div className="absolute inset-0 -z-10"><Photo name="warrior-1" ratio="auto" className="h-full" sizes="100vw" position="50% 10%" /></div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/85 to-ink/30" aria-hidden />
        <div className="container-x py-24 sm:py-32">
          <Reveal>
            <p className="eyebrow">The warrior mindset</p>
            <h2 className="h-display mt-5 max-w-3xl text-[2.8rem] sm:text-7xl">Discipline <span className="text-gold">builds</span> the body. Determination <span className="text-gold">builds</span> the will.</h2>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link href="/membership#join" className="btn btn-gold">Become a Member</Link>
              <Link href="/about" className="btn btn-line">Our Story</Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* MEMBERSHIP LADDER */}
      <section className="section">
        <div className="container-x">
          <Reveal><SectionHeading eyebrow="Start today" title="Your first rep is" accent="one step away">Pick the easiest way to begin — we&rsquo;ll take it from there.</SectionHeading></Reveal>
          <ul className="mt-14 grid gap-5 md:grid-cols-3">
            {[
              { t: "Book a Free Trial", d: "Try the gym floor before you commit.", href: "/membership#trial", cta: "Book trial", primary: true },
              { t: "Join the Gym", d: "Ready to go? Become a member now.", href: "/membership#join", cta: "Join now", primary: false },
              { t: "Talk to Us", d: "Questions first? Message us on WhatsApp.", href: waLink(), cta: "WhatsApp us", primary: false },
            ].map((c, i) => (
              <li key={c.t}><Reveal delay={i * 90}>
                <div className={`flex h-full flex-col border p-8 ${c.primary ? "border-gold bg-gold/10" : "border-line bg-panel"}`}>
                  <h3 className="font-display text-3xl uppercase">{c.t}</h3>
                  <p className="mt-3 flex-1 text-mute">{c.d}</p>
                  {c.href.startsWith("http")
                    ? <a href={c.href} target="_blank" rel="noopener noreferrer" className={`btn mt-6 ${c.primary ? "btn-gold" : "btn-line"}`}><MessageCircle size={16} aria-hidden /> {c.cta}</a>
                    : <Link href={c.href} className={`btn mt-6 ${c.primary ? "btn-gold" : "btn-line"}`}>{c.cta}</Link>}
                </div>
              </Reveal></li>
            ))}
          </ul>
        </div>
      </section>

      {/* PROGRAMS (compact) */}
      <section className="bg-panel section">
        <div className="container-x">
          <Reveal><SectionHeading eyebrow="Train" title="Programmes built for" accent="results" /></Reveal>
          <ul className="mt-12 grid gap-5 md:grid-cols-2">
            {programs.map((p, i) => (
              <li key={p.id}><Reveal delay={i * 80}>
                <Link href={`/training#${p.id}`} className="img-zoom group grid grid-cols-[38%_1fr] border border-line bg-ink hover:border-gold">
                  <Photo name={p.image} ratio="auto" className="h-full min-h-[11rem]" sizes="(min-width:768px) 18vw, 40vw" />
                  <span className="flex flex-col justify-center p-5 sm:p-7">
                    <span className="font-display text-2xl uppercase sm:text-3xl">{p.title}</span>
                    <span className="mt-2 text-sm text-mute">{p.text}</span>
                    <span className="mt-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-gold">Learn more <ArrowRight size={14} aria-hidden /></span>
                  </span>
                </Link>
              </Reveal></li>
            ))}
          </ul>
        </div>
      </section>

      {/* INSTAGRAM */}
      <section className="section">
        <div className="container-x">
          <Reveal><SectionHeading eyebrow="On Instagram" title="Follow the" accent="grind">@baahubaligym — training and gym life. <span className="text-white/40">(Demo photos shown — the gym&rsquo;s own posts go here.)</span></SectionHeading></Reveal>
          <ul className="mt-12 grid grid-cols-3 gap-2 sm:gap-3 lg:grid-cols-9">
            {instagramGallery.map((k) => (
              <li key={k}><a href={site.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Open Baahubali Gym on Instagram" className="img-zoom group relative block">
                <Photo name={k} ratio="1 / 1" sizes="(min-width:1024px) 11vw, 33vw" />
                <span className="absolute inset-0 flex items-center justify-center bg-ink/0 text-gold opacity-0 transition-all group-hover:bg-ink/60 group-hover:opacity-100"><Camera size={22} aria-hidden /></span>
              </a></li>
            ))}
          </ul>
          <div className="mt-8 text-center"><a href={site.social.instagram} target="_blank" rel="noopener noreferrer" className="btn btn-gold"><Camera size={16} aria-hidden /> Follow @baahubaligym</a></div>
        </div>
      </section>

      {/* TRIAL FORM */}
      <section id="trial" className="relative border-t border-gold/30 bg-panel section">
        <div className="container-x grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow">Free trial</p>
            <h2 className="h-section mt-4">Step onto the <span className="text-gold">floor.</span></h2>
            <p className="mt-6 max-w-md leading-relaxed text-mute">Tell us your goal and we&rsquo;ll get in touch to arrange your free trial.</p>
            <div className="mt-8 space-y-3 text-sm">
              <a href={`tel:${site.phone.tel}`} className="flex items-center gap-3 hover:text-gold"><Phone size={16} className="text-gold" aria-hidden />{site.phone.display}</a>
              <a href={waLink()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-gold"><MessageCircle size={16} className="text-gold" aria-hidden />Chat on WhatsApp</a>
              <p className="flex items-center gap-3"><MapPin size={16} className="shrink-0 text-gold" aria-hidden />{site.address.line1}, {site.address.city}</p>
            </div>
          </Reveal>
          <Reveal delay={100}><TrialForm variant="trial" /></Reveal>
        </div>
      </section>
    </>
  );
}
