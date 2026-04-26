import { motion } from "framer-motion";
import { Shield, BadgeCheck, Smartphone } from "lucide-react";

const trustBadges = [
  { icon: Shield, label: "Secure Deposits" },
  { icon: BadgeCheck, label: "ID Verified Sellers" },
  { icon: Smartphone, label: "Safe Meetup Tools" },
];

function HeroIllustration() {
  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Soft glow behind photo */}
      <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-emerald-100/60 via-stone-100/40 to-gold-100/50 blur-2xl" />

      <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_60px_rgb(0,0,0,0.18)] ring-1 ring-stone-900/5 aspect-[4/5] bg-stone-100">
        <img
          src="https://images.unsplash.com/photo-1636202493066-c111030ea75e"
          alt="A buyer receiving an item from a seller during a peer-to-peer marketplace handoff"
          loading="eager"
          className="w-full h-full object-cover"
        />

        {/* Subtle bottom gradient for caption legibility */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-stone-900/60 via-stone-900/10 to-transparent" />

        {/* Floating badge: deposit confirmed */}
        <div className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-white/95 backdrop-blur px-3 py-1.5 shadow-md">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="font-body text-[11px] font-bold text-stone-900 tracking-wide uppercase">
            Deposit confirmed
          </span>
        </div>

        {/* Floating badge: handoff time */}
        <div className="absolute bottom-4 right-4 rounded-2xl bg-white/95 backdrop-blur px-4 py-2.5 shadow-lg">
          <p className="font-mono text-[10px] font-bold text-stone-500 tracking-wider uppercase">
            Handoff
          </p>
          <p className="font-fun text-lg font-semibold text-stone-900 leading-none mt-0.5">
            11 min
          </p>
        </div>
      </div>

      {/* Floating quote pill */}
      <div className="absolute -bottom-6 -left-2 sm:-left-6 rounded-2xl bg-white px-4 py-3 shadow-[0_8px_30px_rgb(0,0,0,0.12)] ring-1 ring-stone-100 max-w-[14rem]">
        <p className="font-body text-xs text-stone-700 leading-snug">
          &ldquo;Box handed off. Payment cleared.<br/>Home in 20.&rdquo;
        </p>
        <p className="font-body text-[10px] text-stone-400 mt-1">
          &mdash; James W., Seller
        </p>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      data-testid="hero-section"
      className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden"
      id="hero"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231c1917' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="font-body text-xs font-semibold text-primary tracking-wide uppercase">
                Now Available on iOS & Android
              </span>
            </div>

            <h1
              data-testid="hero-tagline"
              className="font-fun text-5xl sm:text-6xl lg:text-7xl font-semibold text-stone-900 tracking-tight leading-[0.95] mb-6"
            >
              The buyer&rsquo;s already there.{" "}
              <span className="text-primary">Already paid.</span> On time.
            </h1>

            <p
              data-testid="hero-description"
              className="font-body text-base md:text-lg text-stone-600 leading-relaxed max-w-xl mb-8"
            >
              No more &ldquo;is this still available?&rdquo; No more drives across town
              for nothing. The buyer&rsquo;s already paid to show up &mdash; so they do.
            </p>

            {/* App Store Buttons */}
            <div
              data-testid="hero-download-buttons"
              className="flex flex-wrap gap-4 mb-10"
              id="download"
            >
              <a
                href="#"
                data-testid="apple-store-btn"
                className="inline-flex items-center gap-3 rounded-full bg-stone-900 text-white px-7 py-3.5 font-body font-semibold text-sm hover:bg-stone-800 transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                App Store
              </a>
              <a
                href="#"
                data-testid="google-play-btn"
                className="inline-flex items-center gap-3 rounded-full bg-primary text-white px-7 py-3.5 font-body font-semibold text-sm hover:bg-primary-hover transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                  <path d="M3.18 23.75c-.36-.17-.68-.5-.82-.9-.06-.18-.1-.5-.1-4.57V14l1.35 1.35c.74.74 1.68 1.68 2.08 2.08l.73.73-3.24-3.24zm.5-9.08L14.36 3.99l-2.43 4.2c-1.34 2.31-2.73 4.72-3.1 5.35L8.31 14.51 3.68 14.68zm5.17 2.85l7.76-4.48-1.94-1.94c-1.07-1.07-2.87-2.87-4.01-4.01L6.64 3.07l2.21 14.45zm8.62-4.98l2.57-1.48c1.41-.82 2.6-1.52 2.63-1.56.05-.05-5.19-3.07-5.39-3.11-.05-.01.02.94.15 2.12l.24 2.14 1.06 1.06c.58.58 1.06 1.06 1.06 1.06L20.47 12.54zM20.47 12.54l-2.57 1.48.74-.43c.41-.24.74-.44.74-.45 0-.01-.1-.11-.22-.22l-1.26-1.26 2.57.88z" />
                </svg>
                Google Play
              </a>
            </div>

            {/* Trust Badges */}
            <div data-testid="trust-badges" className="flex flex-wrap gap-6">
              {trustBadges.map((badge) => (
                <div
                  key={badge.label}
                  className="flex items-center gap-2 text-stone-500"
                >
                  <badge.icon size={18} className="text-primary" strokeWidth={1.5} />
                  <span className="font-body text-sm font-medium">{badge.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            data-testid="hero-illustration"
          >
            <HeroIllustration />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

