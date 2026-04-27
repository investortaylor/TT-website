import { useMemo } from "react";
import { Circle, MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function ItemLocationMap({
  lat,
  lng,
  title,
  locationType = "bubble",
  bubbleRadiusMiles = 1.24, // ~2 km
}) {
  const center = useMemo(() => [lat, lng], [lat, lng]);
  const radiusMeters = Math.max(100, bubbleRadiusMiles * 1609.34);
  const showBubble = locationType === "bubble";

  return (
    <section aria-label="Item location on map" className="space-y-2">
      <h2 className="font-body text-sm font-bold uppercase tracking-wide text-[#7F8C8D]">
        Location
      </h2>
      <div className="relative overflow-hidden rounded-xl border border-[#ECF0F1] bg-[#F5F5F5] aspect-[16/10] min-h-[220px] w-full shadow-sm">
        <MapContainer
          center={center}
          zoom={12}
          className="h-full w-full min-h-[220px]"
          scrollWheelZoom
          dragging
          touchZoom
          doubleClickZoom
          attributionControl={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {showBubble && (
            <Circle
              center={center}
              radius={radiusMeters}
              pathOptions={{
                color: "#2ECC71",
                weight: 2,
                fillColor: "#2ECC71",
                fillOpacity: 0.2,
              }}
            />
          )}
        </MapContainer>
      </div>
      <p className="font-body text-xs text-[#7F8C8D]">
        Approximate pickup area shown for privacy. Exact meetup details are coordinated in the TruTown app.
      </p>
    </section>
  );
}
