import { Link } from "react-router-dom";

export default function LegalLayout({ title, lastUpdated, children }) {
  return (
    <div className="min-h-screen bg-background" data-testid="legal-page">
      {/* Simple top bar */}
      <header className="border-b border-stone-200 bg-white/80 backdrop-blur">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3" data-testid="legal-logo">
            <img
              src="/logo.png"
              alt="TruTown Marketplace"
              className="h-[60px] w-auto"
              style={{ mixBlendMode: "multiply" }}
            />
          </Link>
          <Link
            to="/"
            data-testid="legal-back-home"
            className="font-body text-sm font-semibold text-stone-600 hover:text-primary transition-colors"
          >
            ← Back to home
          </Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        <p className="font-body text-xs font-semibold tracking-wide uppercase text-primary mb-3">
          TruTown Marketplace
        </p>
        <h1 className="font-fun text-4xl md:text-5xl font-semibold text-stone-900 tracking-tight leading-tight mb-3">
          {title}
        </h1>
        <p className="font-body text-sm text-stone-500 mb-10">
          Last updated: {lastUpdated}
        </p>
        <article className="font-body text-stone-700 leading-relaxed space-y-6 [&_h2]:font-fun [&_h2]:text-2xl [&_h2]:md:text-3xl [&_h2]:font-semibold [&_h2]:text-stone-900 [&_h2]:mt-10 [&_h2]:mb-3 [&_h3]:font-body [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-stone-900 [&_h3]:mt-6 [&_h3]:mb-2 [&_p]:text-base [&_p]:md:text-[17px] [&_p]:leading-relaxed [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_li]:text-base [&_li]:md:text-[17px] [&_a]:text-primary [&_a]:font-semibold [&_a:hover]:underline">
          {children}
        </article>

        <div className="mt-14 pt-8 border-t border-stone-200">
          <p className="font-body text-sm text-stone-500">
            Questions about this document? Email{" "}
            <a
              href="mailto:legal@trutown.market"
              className="text-primary font-semibold hover:underline"
            >
              legal@trutown.market
            </a>
            .
          </p>
        </div>
      </main>
    </div>
  );
}
