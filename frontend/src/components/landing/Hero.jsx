import { motion } from "framer-motion";
import { Shield, BadgeCheck, Smartphone } from "lucide-react";

const trustBadges = [
  { icon: Shield, label: "Secure Deposits" },
  { icon: BadgeCheck, label: "ID Verified Sellers" },
  { icon: Smartphone, label: "Safe Meetup Tools" },
];

function HeroIllustration() {
  return (
    <svg viewBox="0 0 500 450" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto max-w-md mx-auto">
      {/* Background circle */}
      <circle cx="250" cy="220" r="180" fill="#ecfdf5" />
      <circle cx="250" cy="220" r="140" fill="#d1fae5" opacity="0.5" />

      {/* Phone mockup */}
      <rect x="195" y="80" width="110" height="200" rx="16" fill="#1c1917" />
      <rect x="201" y="90" width="98" height="180" rx="10" fill="#fafaf9" />
      {/* Phone screen content */}
      <rect x="211" y="105" width="78" height="12" rx="3" fill="#15803d" />
      <rect x="211" y="125" width="60" height="6" rx="2" fill="#d6d3d1" />
      <rect x="211" y="137" width="50" height="6" rx="2" fill="#d6d3d1" />
      {/* Item cards on phone */}
      <rect x="211" y="153" width="35" height="35" rx="4" fill="#ecfdf5" />
      <rect x="252" y="153" width="35" height="35" rx="4" fill="#fef9c3" />
      <rect x="211" y="195" width="35" height="35" rx="4" fill="#fef9c3" />
      <rect x="252" y="195" width="35" height="35" rx="4" fill="#ecfdf5" />
      {/* Checkmarks on cards */}
      <circle cx="236" cy="170" r="6" fill="#15803d" />
      <path d="M233 170l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="277" cy="212" r="6" fill="#15803d" />
      <path d="M274 212l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />

      {/* Person on the left - Seller */}
      <circle cx="120" cy="180" r="22" fill="#ca8a04" opacity="0.2" />
      <circle cx="120" cy="170" r="14" fill="#d6a756" />
      <path d="M100 220c0-11 9-20 20-20s20 9 20 20" fill="#ca8a04" />
      {/* Box in seller's hands */}
      <rect x="105" y="205" width="30" height="22" rx="3" fill="#a16207" />
      <rect x="105" y="205" width="30" height="5" rx="1" fill="#854d0e" />

      {/* Person on the right - Buyer */}
      <circle cx="380" cy="180" r="22" fill="#15803d" opacity="0.2" />
      <circle cx="380" cy="170" r="14" fill="#6ea87a" />
      <path d="M360 220c0-11 9-20 20-20s20 9 20 20" fill="#15803d" />
      {/* Phone in buyer's hand */}
      <rect x="372" y="207" width="16" height="24" rx="3" fill="#1c1917" />
      <rect x="374" y="210" width="12" height="18" rx="2" fill="#d1fae5" />

      {/* Arrows showing exchange */}
      <path d="M155 200l30-10" stroke="#15803d" strokeWidth="2" strokeDasharray="4 3" />
      <path d="M185 190l-4 6 6-1" fill="#15803d" />
      <path d="M345 200l-30-10" stroke="#ca8a04" strokeWidth="2" strokeDasharray="4 3" />
      <path d="M315 190l4 6-6-1" fill="#ca8a04" />

      {/* Shield badge */}
      <g transform="translate(225, 290)">
        <path d="M25 0L50 12v18c0 16-12 30-25 36C12 60 0 46 0 30V12L25 0z" fill="#15803d" />
        <path d="M25 6L44 16v15c0 13-9 24-19 29-10-5-19-16-19-29V16L25 6z" fill="#d1fae5" />
        <path d="M18 30l5 5 10-10" stroke="#15803d" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      {/* Deposit coins */}
      <circle cx="160" cy="290" r="12" fill="#facc15" />
      <circle cx="160" cy="290" r="8" fill="#eab308" />
      <text x="157" y="294" fill="#713f12" fontSize="10" fontWeight="bold">$</text>
      <circle cx="175" cy="305" r="10" fill="#facc15" opacity="0.7" />
      <circle cx="175" cy="305" r="6" fill="#eab308" opacity="0.7" />

      <circle cx="340" cy="290" r="12" fill="#facc15" />
      <circle cx="340" cy="290" r="8" fill="#eab308" />
      <text x="337" y="294" fill="#713f12" fontSize="10" fontWeight="bold">$</text>
      <circle cx="325" cy="305" r="10" fill="#facc15" opacity="0.7" />
      <circle cx="325" cy="305" r="6" fill="#eab308" opacity="0.7" />

      {/* City skyline at bottom */}
      <rect x="60" y="370" width="380" height="80" fill="#f5f5f4" />
      <rect x="80" y="345" width="30" height="105" rx="2" fill="#e7e5e4" />
      <rect x="120" y="325" width="25" height="125" rx="2" fill="#d6d3d1" />
      <rect x="155" y="355" width="35" height="95" rx="2" fill="#e7e5e4" />
      <rect x="200" y="335" width="28" height="115" rx="2" fill="#d6d3d1" />
      <rect x="240" y="350" width="40" height="100" rx="2" fill="#e7e5e4" />
      <rect x="290" y="330" width="25" height="120" rx="2" fill="#d6d3d1" />
      <rect x="325" y="355" width="30" height="95" rx="2" fill="#e7e5e4" />
      <rect x="365" y="340" width="35" height="110" rx="2" fill="#d6d3d1" />
    </svg>
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
              Where serious buyers meet{" "}
              <span className="text-primary">trusted</span> sellers.
            </h1>

            <p
              data-testid="hero-description"
              className="font-body text-base md:text-lg text-stone-600 leading-relaxed max-w-xl mb-8"
            >
              Stop wasting time on no-shows and flaky buyers. TruTown's deposit-based
              system means everyone has skin in the game — so you only meet people
              who are actually serious.
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
