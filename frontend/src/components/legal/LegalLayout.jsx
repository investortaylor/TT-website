import { Link } from "react-router-dom";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import CrownSkyline from "@/components/brand/CrownSkyline";
import SectionKicker from "@/components/brand/SectionKicker";

export default function LegalLayout({ title, lastUpdated, children }) {
  return (
    <div className="min-h-screen bg-parchment" data-testid="legal-page">
      <Navbar />

      {/* Title band */}
      <header className="grain relative bg-ink text-stone-100 pt-36 md:pt-44 pb-16 md:pb-20 overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[500px] w-[900px] rounded-full bg-bark/40 blur-[130px] pointer-events-none" />
        <CrownSkyline
          draw
          strokeWidth={1.2}
          gradientId="legal-crown"
          className="absolute right-[-8%] bottom-[-18%] w-[520px] md:w-[640px] opacity-25 pointer-events-none"
        />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            data-testid="legal-back-home"
            className="inline-flex items-center gap-2 font-body text-sm font-semibold text-stone-400 hover:text-gilt transition-colors mb-8"
          >
            ← Back to home
          </Link>
          <div>
            <SectionKicker onDark>TruTown Marketplace</SectionKicker>
          </div>
          <h1 className="font-display font-bold tracking-[-0.02em] leading-[1] text-4xl sm:text-5xl md:text-6xl mt-5">
            {title}
          </h1>
          <p className="font-body text-sm text-stone-400 mt-5">Last updated: {lastUpdated}</p>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        <article className="[&>h2:first-child]:mt-0 [&>h2:first-child]:pt-0 [&>h2:first-child]:border-0 font-body text-stone-700 leading-relaxed space-y-6 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:md:text-3xl [&_h2]:font-bold [&_h2]:text-ink [&_h2]:mt-12 [&_h2]:mb-3 [&_h2]:pt-8 [&_h2]:border-t [&_h2]:border-stone-200 [&_h3]:font-display [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-ink [&_h3]:mt-6 [&_h3]:mb-2 [&_p]:text-base [&_p]:md:text-[17px] [&_p]:leading-relaxed [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_li]:text-base [&_li]:md:text-[17px] [&_li::marker]:text-leaf [&_a]:text-[#008536] [&_a]:font-semibold [&_a:hover]:underline [&_strong]:text-ink">
          {children}
        </article>

        <div className="mt-16 rounded-3xl bg-ink text-stone-300 p-8 md:p-10">
          <p className="font-display text-2xl font-bold text-white">Questions about this document?</p>
          <p className="font-body text-base mt-2">
            Email{" "}
            <a href="mailto:legal@trutown.market" className="text-gilt font-semibold hover:underline">
              legal@trutown.market
            </a>
            .
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
