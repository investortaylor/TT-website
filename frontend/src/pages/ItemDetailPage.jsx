import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// const API_BASE_URL = "http://localhost:8000";
const API_BASE_URL = "https://api.trutown.market";

const formatCurrency = (value) => {
  if (typeof value !== "number") return "N/A";
  return `$${value.toFixed(2)}`;
};

const formatDate = (value) => {
  if (!value) return "N/A";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleString();
};

export default function ItemDetailPage() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    const loadItem = async () => {
      setLoading(true);
      setError("");
      try {
        const res = await fetch(`${API_BASE_URL}/api/public/items/${id}`, {
          method: "GET",
          signal: controller.signal,
        });

        if (!res.ok) {
          if (res.status === 404) {
            setItem(null);
            setError("Item not found.");
            return;
          }
          throw new Error(`Request failed with status ${res.status}`);
        }

        const data = await res.json();
        setItem(data);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError("Unable to load this item right now. Please try again.");
          setItem(null);
        }
      } finally {
        setLoading(false);
      }
    };

    loadItem();

    return () => controller.abort();
  }, [id]);

  const coverImage = useMemo(() => {
    if (!item) return "";
    if (Array.isArray(item.photos) && item.photos.length > 0) return item.photos[0];
    return item?.og?.image || "";
  }, [item]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="mx-auto w-full max-w-7xl px-4 pb-12 pt-28 sm:px-6 md:pt-32 lg:px-8">
        <div className="mb-6 rounded-2xl border bg-card/60 p-4 backdrop-blur-sm sm:p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Public item page</p>
              <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">Item details</h1>
              <p className="mt-1 text-xs text-muted-foreground sm:text-sm">Item ID: {id}</p>
            </div>
            <div className="self-start sm:self-auto">
              <Button asChild variant="outline">
                <Link to="/">Back to home</Link>
              </Button>
            </div>
          </div>
        </div>

        {loading ? (
          <Card className="rounded-2xl">
            <CardContent className="py-14 text-center text-muted-foreground">
              Loading item...
            </CardContent>
          </Card>
        ) : error ? (
          <Card className="rounded-2xl">
            <CardContent className="py-14 text-center">
              <p className="text-destructive">{error}</p>
            </CardContent>
          </Card>
        ) : (
          item && (
            <div className="grid gap-6 lg:grid-cols-5">
              <Card className="overflow-hidden rounded-2xl lg:col-span-3">
                {coverImage ? (
                  <img
                    src={coverImage}
                    alt={item.title || "Item photo"}
                    className="h-[300px] w-full bg-muted object-cover sm:h-[420px]"
                  />
                ) : (
                  <div className="flex h-[300px] items-center justify-center bg-muted text-muted-foreground sm:h-[420px]">
                    No image available
                  </div>
                )}
              </Card>

              <Card className="rounded-2xl lg:col-span-2">
                <CardHeader>
                  <div className="mb-2 flex flex-wrap gap-2">
                    <Badge variant="secondary">{item.category || "Unknown category"}</Badge>
                    <Badge variant="outline">{item.condition || "Unknown condition"}</Badge>
                    <Badge>{item.status || "unknown"}</Badge>
                  </div>
                  <CardTitle className="text-2xl">{item.title || "Untitled item"}</CardTitle>
                  <p className="text-3xl font-bold text-primary">{formatCurrency(item.price)}</p>
                </CardHeader>
                <CardContent className="space-y-5">
                  <p className="text-sm leading-6 text-muted-foreground">
                    {item.description || "No description provided."}
                  </p>

                  <div className="grid grid-cols-1 gap-2 rounded-lg bg-muted/50 p-3 text-sm">
                    <p>
                      <span className="text-muted-foreground">Quantity:</span> {item.quantity ?? "N/A"}
                    </p>
                    <p>
                      <span className="text-muted-foreground">Location:</span>{" "}
                      {item.location_label || "Not specified"}
                    </p>
                    <p>
                      <span className="text-muted-foreground">Created:</span>{" "}
                      {formatDate(item.created_at)}
                    </p>
                    <p>
                      <span className="text-muted-foreground">Depositors:</span>{" "}
                      {item.depositor_count ?? 0}
                    </p>
                  </div>

                  {item.seller && (
                    <div className="rounded-lg border p-3 text-sm">
                      <p className="font-medium">{item.seller.name || "Seller"}</p>
                      <p className="text-muted-foreground">
                        Rating: {item.seller.rating ?? 0} | Reviews: {item.seller.review_count ?? 0}
                      </p>
                      <p className="text-muted-foreground">
                        Total sales: {item.seller.total_sales ?? 0}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          )
        )}
      </main>
      <Footer />
    </div>
  );
}
