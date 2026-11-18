export default function Marquee({ items }: { items: string[] }) {
  const row = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-gold/40 bg-gold py-3 text-ink" aria-hidden>
      <div className="marquee-track flex gap-8">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-8 whitespace-nowrap font-display text-2xl uppercase tracking-wider">{t}<span className="text-lg">◆</span></span>
        ))}
      </div>
    </div>
  );
}
