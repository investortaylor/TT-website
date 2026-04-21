import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { format } from "date-fns";
import { AlertCircle, ChevronLeft, Loader2, MapPin, Package, Star } from "lucide-react";

import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import ItemLocationMap from "@/components/item/ItemLocationMap";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { getPublicApiBaseUrl } from "@/lib/apiBase";
import { cn } from "@/lib/utils";

function statusBadgeVariant(status) {
  const s = (status || "").toLowerCase();
  if (s === "active" || s === "listed") return "default";
  if (s === "sold") return "secondary";
  if (s === "pending") return "outline";
  return "outline";
}

function formatUsd(price) {
  if (price == null || Number.isNaN(Number(price))) return "—";
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(Number(price));
}

function getExactCoords(item) {
  const lat = item?.location?.exact_location?.lat;
  const lng = item?.location?.exact_location?.lng;
  if (lat == null || lng == null) return null;
  const la = Number(lat);
  const ln = Number(lng);
  if (!Number.isFinite(la) || !Number.isFinite(ln)) return null;
  return { lat: la, lng: ln };
}

export default function ItemDetailPage() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [photoIndex, setPhotoIndex] = useState(0);

  const requestUrl = useMemo(() => {
    if (!id) return null;
    const base = getPublicApiBaseUrl();
    return `${base}/api/public/items/${encodeURIComponent(id)}`;
  }, [id]);

  useEffect(() => {
    if (!requestUrl) {
      setError("Missing item id.");
      setLoading(false);
      return undefined;
    }

    const controller = new AbortController();
    let cancelled = false;

    setLoading(true);
    setError(null);

    (async () => {
      try {
        const res = await fetch(requestUrl, {
          signal: controller.signal,
          headers: { Accept: "application/json" },
        });
        if (!res.ok) {
          const message =
            res.status === 404
              ? "This listing could not be found."
              : `Could not load this listing (${res.status}).`;
          throw new Error(message);
        }
        const data = await res.json();
        if (!cancelled) {
          setItem(data);
          setPhotoIndex(0);
        }
      } catch (e) {
        if (e.name === "AbortError" || cancelled) return;
        setItem(null);
        setError(e.message || "Something went wrong.");
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();

    return () => {
      cancelled = true;
      controller.abort();
    };
  }, [requestUrl]);

  useEffect(() => {
    if (!item) return;
    const title = item.og?.title || item.title || "Listing";
    document.title = `${title} | TruTown`;
    return () => {
      document.title = "TruTown Marketplace";
    };
  }, [item]);

  const photos = Array.isArray(item?.photos) ? item.photos : [];
  const mainPhoto = photos[photoIndex] || photos[0];
  const coords = item ? getExactCoords(item) : null;

  return (
    <div className="min-h-screen bg-white" data-testid="item-detail-page">
      <Navbar />
      <main className="pt-24 md:pt-28 pb-16 md:pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button
            variant="ghost"
            className="mb-4 -ml-2 font-body text-[#7F8C8D] hover:text-primary"
            asChild
          >
            <Link to="/">
              <ChevronLeft className="mr-1 h-4 w-4" aria-hidden />
              Back to home
            </Link>
          </Button>

          {loading && (
            <div
              className="flex flex-col items-center justify-center gap-4 rounded-xl border border-[#ECF0F1] bg-[#F5F5F5] py-24 text-[#7F8C8D]"
              data-testid="item-detail-loading"
            >
              <Loader2 className="h-10 w-10 animate-spin text-primary" aria-hidden />
              <p className="font-body text-sm font-medium">Loading listing…</p>
            </div>
          )}

          {!loading && error && (
            <Card className="border-[#E74C3C]/30 bg-[#E74C3C]/5">
              <CardHeader className="flex flex-row items-center gap-3 space-y-0">
                <AlertCircle className="h-8 w-8 shrink-0 text-[#E74C3C]" aria-hidden />
                <div>
                  <CardTitle className="font-body text-lg text-[#2C3E50]">
                    Unable to load listing
                  </CardTitle>
                  <CardDescription className="font-body text-[#7F8C8D]">
                    {error}
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <Button asChild className="font-body">
                  <Link to="/">Return home</Link>
                </Button>
              </CardContent>
            </Card>
          )}
        </div>

        {!loading && !error && item && (
          <>
            {/* Full-width gallery (matches in-app edge-to-edge hero image) */}
            <div className="relative left-1/2 w-screen max-w-[100vw] -translate-x-1/2">
              {/* Full width, natural height — no crop (portrait / document photos stay fully visible) */}
              {/* <div className="flex w-full justify-center bg-[#F5F5F5] py-2 sm:py-3"> */}
              <div className="flex w-full justify-center bg-[#F5F5F5] py-4">
                {mainPhoto ? (
                    <img
                    src={mainPhoto}
                    alt={item.title || "Listing photo"}
                    className="max-h-[70vh] w-auto max-w-full object-contain rounded-lg"
                    decoding="async"
                  />
                ) : (
                  <div className="flex min-h-[240px] w-full items-center justify-center text-[#BDC3C7]">
                    <Package className="h-16 w-16 opacity-50" aria-hidden />
                  </div>
                )}
              </div>
              {photos.length > 1 && (
                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                  <div className="flex gap-2 overflow-x-auto py-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                    {photos.map((src, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setPhotoIndex(i)}
                        className={cn(
                          "h-16 w-16 shrink-0 overflow-hidden rounded-lg border-2 bg-white transition-all",
                          i === photoIndex
                            ? "border-primary ring-2 ring-primary/25"
                            : "border-[#ECF0F1] opacity-90 hover:opacity-100",
                        )}
                      >
                        <img src={src} alt="" className="h-full w-full object-contain" />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="mx-auto max-w-6xl space-y-6 px-4 pb-6 pt-8 text-[#2C3E50] sm:px-6 lg:px-8">
              <div>
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  {item.category && (
                    <Badge
                      variant="secondary"
                      className="font-body text-xs font-semibold uppercase tracking-wide"
                    >
                      {item.category}
                    </Badge>
                  )}
                  {item.condition && (
                    <Badge variant="outline" className="border-[#ECF0F1] font-body text-xs text-[#2C3E50]">
                      {item.condition}
                    </Badge>
                  )}
                  {item.status && (
                    <Badge
                      variant={statusBadgeVariant(item.status)}
                      className="font-body text-xs capitalize"
                    >
                      {item.status}
                    </Badge>
                  )}
                </div>
                <h1 className="font-fun text-3xl font-semibold leading-tight tracking-tight text-[#2C3E50] sm:text-4xl">
                  {item.title}
                </h1>
                <p className="mt-4 font-body text-3xl font-bold text-primary">
                  {formatUsd(item.price)}
                </p>
                {item.quantity != null && (
                  <p className="mt-1 font-body text-sm text-[#7F8C8D]">
                    Quantity:{" "}
                    <span className="font-semibold text-[#2C3E50]">{item.quantity}</span>
                  </p>
                )}
              </div>

              <Separator className="bg-[#E0E0E0]" />

              <section>
                <h2 className="mb-2 font-body text-sm font-bold uppercase tracking-wide text-[#7F8C8D]">
                  Description
                </h2>
                <p className="font-body leading-relaxed text-[#2C3E50] whitespace-pre-wrap">
                  {item.description || "No description provided."}
                </p>
              </section>

              {(item.location_label || item.created_at) && (
                <>
                  <Separator className="bg-[#E0E0E0]" />
                  <div className="flex flex-col gap-2 font-body text-sm text-[#7F8C8D]">
                    {item.location_label && (
                      <p className="flex items-center gap-2 text-[#2C3E50]">
                        <MapPin className="h-4 w-4 shrink-0 text-primary" aria-hidden />
                        {item.location_label}
                      </p>
                    )}
                    {item.created_at && (
                      <p>
                        Listed{" "}
                        <time dateTime={item.created_at} className="font-medium text-[#2C3E50]">
                          {format(new Date(item.created_at), "MMM d, yyyy")}
                        </time>
                      </p>
                    )}
                  </div>
                </>
              )}

              <Separator className="bg-[#E0E0E0]" />
              <p className="font-body text-sm text-[#7F8C8D]">
                Deposits:{" "}
                <span className="font-semibold text-[#2C3E50]">{item.depositor_count ?? 0}</span>
              </p>

              {coords && (
                <>
                  <Separator className="bg-[#E0E0E0]" />
                  <ItemLocationMap lat={coords.lat} lng={coords.lng} title={item.title} />
                </>
              )}

              {item.seller && (
                <>
                  <Separator className="bg-[#E0E0E0]" />
                  <Card className="border-[#ECF0F1] shadow-sm">
                    <CardHeader className="pb-2">
                      <CardTitle className="font-body text-base text-[#2C3E50]">Seller</CardTitle>
                      <CardDescription className="font-body text-[#7F8C8D]">
                        Verified TruTown member
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2 font-body text-sm">
                      <p className="text-lg font-semibold text-[#2C3E50]">{item.seller.name}</p>
                      <div className="flex flex-wrap items-center gap-3 text-[#7F8C8D]">
                        <span className="inline-flex items-center gap-1">
                          <Star className="h-4 w-4 fill-gold-500 text-gold-500" aria-hidden />
                          <span className="font-semibold text-[#2C3E50]">{item.seller.rating ?? "—"}</span>
                          <span>({item.seller.review_count ?? 0} reviews)</span>
                        </span>
                        <span>{item.seller.total_sales ?? 0} sales</span>
                      </div>
                    </CardContent>
                  </Card>
                </>
              )}

              <div className="rounded-2xl border border-primary/20 bg-primary/10 px-5 py-4">
                <p className="font-body text-sm leading-relaxed text-[#2C3E50]">
                  Open the TruTown app to message the seller, reserve with a deposit, and complete your
                  pickup safely.
                </p>
                <Button className="mt-4 rounded-full font-body font-semibold" asChild>
                  <a href="/#download">Get the app</a>
                </Button>
              </div>
            </div>
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}
