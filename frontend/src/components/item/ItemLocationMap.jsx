import { useMemo } from "react";

/**
 * Embedded map (OpenStreetMap) from WGS84 coordinates — no API key required.
 * bbox order: min longitude, min latitude, max longitude, max latitude.
 */
function buildOsmEmbedSrc(lat, lng) {
  const pad = 0.014;
  const minLon = lng - pad;
  const minLat = lat - pad;
  const maxLon = lng + pad;
  const maxLat = lat + pad;
  const bbox = `${minLon},${minLat},${maxLon},${maxLat}`;
  return `https://www.openstreetmap.org/export/embed.html?bbox=${encodeURIComponent(bbox)}&layer=mapnik&marker=${encodeURIComponent(`${lat},${lng}`)}`;
}

export default function ItemLocationMap({ lat, lng, title }) {
  const src = useMemo(() => buildOsmEmbedSrc(lat, lng), [lat, lng]);

  return (
    <section aria-label="Item location on map" className="space-y-2">
      <h2 className="font-body text-sm font-bold uppercase tracking-wide text-[#7F8C8D]">
        Location
      </h2>
      <div className="overflow-hidden rounded-xl border border-[#ECF0F1] bg-[#F5F5F5] aspect-[16/10] min-h-[220px] w-full shadow-sm">
        <iframe
          title={title ? `Map: ${title}` : "Item location map"}
          src={src}
          className="h-full w-full min-h-[220px] border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <p className="font-body text-xs text-[#7F8C8D]">
        Approximate pickup area. Exact meetup details are coordinated in the TruTown app.
      </p>
    </section>
  );
}
