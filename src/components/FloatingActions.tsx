import Link from "next/link";
import { MessageCircle, Phone, Dumbbell } from "lucide-react";
import { site, waLink } from "@/config/site";

/** Floating WhatsApp button + sticky bottom action bar on mobile. */
export default function FloatingActions() {
  return (
    <>
      <a href={waLink()} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp"
        className="fixed bottom-24 right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#1f9d55] text-white shadow-xl transition-transform hover:scale-105 lg:bottom-6 lg:right-6">
        <MessageCircle size={26} aria-hidden />
      </a>
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-gold/40 bg-ink text-white lg:hidden">
        <a href={`tel:${site.phone.tel}`} className="flex min-h-14 flex-col items-center justify-center gap-0.5 text-[0.68rem] font-bold uppercase tracking-widest"><Phone size={17} aria-hidden />Call</a>
        <a href={waLink()} target="_blank" rel="noopener noreferrer" className="flex min-h-14 flex-col items-center justify-center gap-0.5 border-x border-line text-[0.68rem] font-bold uppercase tracking-widest"><MessageCircle size={17} aria-hidden />WhatsApp</a>
        <Link href="/membership#trial" className="flex min-h-14 flex-col items-center justify-center gap-0.5 bg-gold text-[0.68rem] font-bold uppercase tracking-widest text-ink"><Dumbbell size={17} aria-hidden />Free Trial</Link>
      </div>
    </>
  );
}
