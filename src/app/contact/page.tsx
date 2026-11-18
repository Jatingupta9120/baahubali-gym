import type { Metadata } from "next";
import { Camera, Clock, MapPin, MessageCircle, Phone, Mail } from "lucide-react";
import PageHero from "@/components/PageHero";
import TrialForm from "@/components/TrialForm";
import { site, waLink } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact Baahubali Gym",
  description: "Contact Baahubali Gym - call, WhatsApp, or send an enquiry to join the gym or book a free trial.",
  alternates: { canonical: "/contact" },
};

const row = "flex gap-4";
const lab = "text-xs font-semibold uppercase tracking-[0.18em] text-white/50";

export default function Contact() {
  return (
    <>
      <PageHero eyebrow="Contact us" title="Let&rsquo;s get you" accent="started" image="plates" position="50% 40%">
        <p>Call, message on WhatsApp or send an enquiry — we&rsquo;ll get back to you.</p>
      </PageHero>

      <section className="section">
        <div className="container-x grid gap-14 lg:grid-cols-[.85fr_1.15fr] lg:gap-20">
          <div>
            <h2 className="font-display text-4xl uppercase">{site.fullName}</h2>
            <ul className="mt-8 space-y-6">
              <li className={row}><Phone className="mt-1 shrink-0 text-gold" size={20} aria-hidden /><div><p className={lab}>Phone</p><a href={`tel:${site.phone.tel}`} className="text-lg hover:text-gold">{site.phone.display}</a></div></li>
              <li className={row}><MessageCircle className="mt-1 shrink-0 text-gold" size={20} aria-hidden /><div><p className={lab}>WhatsApp</p><a href={waLink()} target="_blank" rel="noopener noreferrer" className="text-lg hover:text-gold">Message us on WhatsApp</a></div></li>
              {site.email && <li className={row}><Mail className="mt-1 shrink-0 text-gold" size={20} aria-hidden /><div><p className={lab}>Email</p><a href={`mailto:${site.email}`} className="text-lg hover:text-gold">{site.email}</a></div></li>}
              <li className={row}><Camera className="mt-1 shrink-0 text-gold" size={20} aria-hidden /><div><p className={lab}>Instagram</p><a href={site.social.instagram} target="_blank" rel="noopener noreferrer" className="text-lg hover:text-gold">@baahubaligym</a></div></li>
              <li className={row}><MapPin className="mt-1 shrink-0 text-gold" size={20} aria-hidden /><div><p className={lab}>Gym address</p><p className="text-lg">{site.address.line1}, {site.address.city}</p></div></li>
              <li className={row}><Clock className="mt-1 shrink-0 text-gold" size={20} aria-hidden /><div><p className={lab}>Hours</p>{site.hours.map((h) => <p key={h.days}>{h.days}: {h.time}</p>)}</div></li>
            </ul>
            {(!site.phone.verified || !site.address.verified) && <p className="mt-8 border border-dashed border-gold/60 bg-panel p-4 text-sm text-mute"><strong className="text-gold">Demo note:</strong> phone, address and hours are placeholders until confirmed by the gym (edit <code>src/config/site.ts</code>).</p>}
          </div>
          <div>
            <h2 className="font-display text-4xl uppercase">Send an enquiry</h2>
            <div className="mt-8"><TrialForm variant="contact" /></div>
          </div>
        </div>
      </section>

      <section className="pb-16 sm:pb-24">
        <div className="container-x">
          {site.mapEmbedUrl
            ? <iframe src={site.mapEmbedUrl} title="Gym location on Google Maps" loading="lazy" className="h-[420px] w-full border-0 grayscale" referrerPolicy="no-referrer-when-downgrade" />
            : <div className="flex h-64 items-center justify-center border border-dashed border-line bg-panel px-6 text-center text-sm text-mute">Google Map will appear here once the gym address is confirmed.</div>}
        </div>
      </section>
    </>
  );
}
