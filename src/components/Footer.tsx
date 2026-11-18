import Link from "next/link";
import { Camera, Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/config/site";
import Logo from "./Logo";

const cols = [
  { h: "Explore", links: [["Home", "/"], ["About", "/about"], ["Facilities", "/facilities"], ["Gallery", "/gallery"], ["Contact", "/contact"]] },
  { h: "Train", links: [["Strength Training", "/training#strength"], ["Bodybuilding", "/training#bodybuilding"], ["Personal Training", "/training#personal"], ["Group Workouts", "/training#group"]] },
  { h: "Membership", links: [["Join Now", "/membership#join"], ["Book a Free Trial", "/membership#trial"], ["Membership Options", "/membership#plans"]] },
];

export default function Footer() {
  return (
    <footer className="border-t border-gold/30 bg-panel pb-24 text-mute lg:pb-0">
      <div className="container-x py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr_1.3fr]">
          <div>
            <Logo size="lg" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed">Where discipline meets determination and every workout brings you closer to your strongest self.</p>
            {site.tagline && <p className="mt-4 text-xs font-bold uppercase tracking-[0.25em] text-gold">{site.tagline}</p>}
            <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Baahubali Gym on Instagram" className="mt-6 inline-flex h-11 w-11 items-center justify-center border border-gold/50 text-gold hover:bg-gold hover:text-ink"><Camera size={18} /></a>
          </div>
          {cols.map((c) => (
            <div key={c.h}>
              <h3 className="font-display text-xl uppercase tracking-wider text-white">{c.h}</h3>
              <ul className="mt-5 space-y-3 text-sm">{c.links.map(([l, h]) => <li key={l}><Link href={h} className="hover:text-gold">{l}</Link></li>)}</ul>
            </div>
          ))}
          <div>
            <h3 className="font-display text-xl uppercase tracking-wider text-white">Visit us</h3>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex gap-3"><MapPin size={16} className="mt-0.5 shrink-0 text-gold" aria-hidden />{site.address.line1}, {site.address.city}</li>
              <li><a href={`tel:${site.phone.tel}`} className="flex gap-3 hover:text-gold"><Phone size={16} className="mt-0.5 shrink-0 text-gold" aria-hidden />{site.phone.display}</a></li>
              {site.email && <li><a href={`mailto:${site.email}`} className="flex gap-3 hover:text-gold"><Mail size={16} className="mt-0.5 shrink-0 text-gold" aria-hidden />{site.email}</a></li>}
            </ul>
            <Link href="/membership#trial" className="btn btn-gold mt-6">Book a free trial</Link>
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-3 border-t border-line pt-6 text-xs sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} {site.fullName}. All rights reserved.</p>
          <p>Train like a warrior.</p>
        </div>
      </div>
    </footer>
  );
}
