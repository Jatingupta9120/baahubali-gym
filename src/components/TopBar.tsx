import { Camera, MessageCircle, Phone } from "lucide-react";
import { site, waLink } from "@/config/site";

export default function TopBar() {
  return (
    <div className="border-b border-line bg-panel text-xs">
      <div className="container-x flex min-h-10 items-center justify-between gap-4 py-2">
        <p className="hidden font-semibold uppercase tracking-[0.2em] text-gold sm:block">Build strength. Break limits. Become unstoppable.</p>
        <div className="flex w-full items-center justify-between gap-5 sm:w-auto sm:justify-end">
          <a href={`tel:${site.phone.tel}`} className="inline-flex items-center gap-2 hover:text-gold"><Phone size={13} aria-hidden /> {site.phone.display}</a>
          <a href={waLink()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-gold"><MessageCircle size={13} aria-hidden /> WhatsApp</a>
          <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-gold"><Camera size={13} aria-hidden /> Instagram</a>
        </div>
      </div>
    </div>
  );
}
