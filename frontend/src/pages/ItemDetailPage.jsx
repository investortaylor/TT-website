import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { format } from "date-fns";
import { AlertCircle, ChevronLeft, Loader2, MapPin, Package, Star } from "lucide-react";

import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
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

  return (
    <div className="min-h-screen bg-background" data-testid="item-detail-page">
      <Navbar />
      <main className="pt-24 md:pt-28 pb-16 md:pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button
            variant="ghost"
            className="mb-6 -ml-2 text-stone-600 hover:text-primary font-body"
            asChild
          >
            <Link to="/">
              <ChevronLeft className="mr-1 h-4 w-4" aria-hidden />
              Back to home
            </Link>
          </Button>

          {loading && (
            <div
              className="flex flex-col items-center justify-center gap-4 rounded-xl border border-stone-200 bg-card py-24 text-stone-500"
              data-testid="item-detail-loading"
            >
              <Loader2 className="h-10 w-10 animate-spin text-primary" aria-hidden />
              <p className="font-body text-sm font-medium">Loading listing…</p>
            </div>
          )}

          {!loading && error && (
            <Card className="border-destructive/30 bg-destructive/5">
              <CardHeader className="flex flex-row items-center gap-3 space-y-0">
                <AlertCircle className="h-8 w-8 text-destructive shrink-0" aria-hidden />
                <div>
                  <CardTitle className="font-body text-lg text-stone-900">
                    Unable to load listing
                  </CardTitle>
                  <CardDescription className="font-body text-stone-600">
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

          {!loading && !error && item && (
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] items-start">
              <div className="space-y-4">
                <div className="overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm">
                  <div className="aspect-[4/3] w-full bg-stone-100">
                    {mainPhoto ? (
                      <img
                        src={mainPhoto}
                        alt={item.title || "Listing photo"}
                        className="h-full w-full object-contain"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center text-stone-400">
                        <Package className="h-16 w-16 opacity-40" aria-hidden />
                      </div>
                    )}
                  </div>
                </div>
                {photos.length > 1 && (
                  <div className="flex flex-wrap gap-2">
                    {photos.map((src, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setPhotoIndex(i)}
                        className={cn(
                          "h-16 w-16 overflow-hidden rounded-lg border-2 bg-stone-50 transition-all",
                          i === photoIndex
                            ? "border-primary ring-2 ring-primary/20"
                            : "border-transparent opacity-80 hover:opacity-100",
                        )}
                      >
                        <img src={src} alt="" className="h-full w-full object-cover" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="space-y-6">
                <div>
                  <div className="mb-3 flex flex-wrap items-center gap-2">
                    {item.category && (
                      <Badge variant="secondary" className="font-body text-xs uppercase tracking-wide">
                        {item.category}
                      </Badge>
                    )}
                    {item.condition && (
                      <Badge variant="outline" className="font-body text-xs">
                        {item.condition}
                      </Badge>
                    )}
                    {item.status && (
                      <Badge variant={statusBadgeVariant(item.status)} className="font-body text-xs capitalize">
                        {item.status}
                      </Badge>
                    )}
                  </div>
                  <h1 className="font-fun text-3xl sm:text-4xl font-semibold text-stone-900 tracking-tight leading-tight">
                    {item.title}
                  </h1>
                  <p className="mt-4 font-body text-3xl font-bold text-primary">
                    {formatUsd(item.price)}
                  </p>
                  {item.quantity != null && (
                    <p className="mt-1 font-body text-sm text-muted-foreground">
                      Quantity: <span className="font-semibold text-stone-700">{item.quantity}</span>
                    </p>
                  )}
                </div>

                <Separator />

                <section>
                  <h2 className="font-body text-sm font-bold uppercase tracking-wide text-stone-500 mb-2">
                    Description
                  </h2>
                  <p className="font-body text-stone-700 leading-relaxed whitespace-pre-wrap">
                    {item.description || "No description provided."}
                  </p>
                </section>

                {(item.location_label || item.created_at) && (
                  <>
                    <Separator />
                    <div className="flex flex-col gap-2 font-body text-sm text-stone-600">
                      {item.location_label && (
                        <p className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-primary shrink-0" aria-hidden />
                          {item.location_label}
                        </p>
                      )}
                      {item.created_at && (
                        <p>
                          Listed{" "}
                          <time dateTime={item.created_at}>
                            {format(new Date(item.created_at), "MMM d, yyyy")}
                          </time>
                        </p>
                      )}
                      {item.depositor_count != null && (
                        <p className="text-muted-foreground">
                          Deposits: <span className="font-medium text-stone-700">{item.depositor_count}</span>
                        </p>
                      )}
                    </div>
                  </>
                )}

                {item.seller && (
                  <>
                    <Separator />
                    <Card className="border-stone-200 shadow-sm">
                      <CardHeader className="pb-2">
                        <CardTitle className="font-body text-base text-stone-900">Seller</CardTitle>
                        <CardDescription className="font-body">Verified TruTown member</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-2 font-body text-sm">
                        <p className="text-lg font-semibold text-stone-900">{item.seller.name}</p>
                        <div className="flex flex-wrap items-center gap-3 text-stone-600">
                          <span className="inline-flex items-center gap-1">
                            <Star className="h-4 w-4 fill-gold-400 text-gold-500" aria-hidden />
                            <span className="font-semibold text-stone-800">{item.seller.rating ?? "—"}</span>
                            <span className="text-muted-foreground">
                              ({item.seller.review_count ?? 0} reviews)
                            </span>
                          </span>
                          <span className="text-muted-foreground">
                            {item.seller.total_sales ?? 0} sales
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </>
                )}

                <div className="rounded-2xl bg-emerald-50 border border-emerald-100 px-5 py-4">
                  <p className="font-body text-sm text-stone-700 leading-relaxed">
                    Open the TruTown app to message the seller, reserve with a deposit, and complete your pickup safely.
                  </p>
                  <Button
                    className="mt-4 font-body font-semibold rounded-full"
                    asChild
                  >
                    <a href="/#download">Get the app</a>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
