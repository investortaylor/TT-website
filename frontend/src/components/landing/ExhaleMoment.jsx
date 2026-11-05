import { CrownGlyph } from "@/components/brand/CrownSkyline";

const items = [
  "Headphones",
  "Vintage camera",
  "Laptop",
  "Armchair",
  "PS5",
  "Used car",
  "Sofa",
  "Road bike",
  "Dining table",
  "Guitar",
];

/** Bold gilded ticker: a constant stream of items changing hands. */
export default function ExhaleMoment() {
  const row = (
    <div className="flex shrink-0 items-center">
      {items.map((it) => (
        <span key={it} className="flex items-center gap-6 px-6">
          <span className="font-display text-2xl md:text-4xl font-bold italic text-ink whitespace-nowrap">
            {it}
          </span>
          <span className="font-body text-[11px] md:text-xs font-extrabold tracking-[0.25em] uppercase text-bark whitespace-nowrap">
            changed hands
          </span>
          <CrownGlyph className="w-7 h-5 text-ink/80" />
        </span>
      ))}
    </div>
  );
  return (
    <section
      data-testid="exhale-moment-section"
      aria-label="Items changing hands on TruTown"
      className="relative overflow-hidden bg-crown-gradient py-5 md:py-6 -rotate-[1.2deg] scale-[1.03] z-10 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.6)]"
    >
      <div data-testid="exhale-quote" className="flex w-max animate-marquee">
        {row}
        {row}
      </div>
    </section>
  );
}
