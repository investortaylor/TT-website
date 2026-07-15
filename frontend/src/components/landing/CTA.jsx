import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

function DownloadIllustration() {
  return (
    <svg viewBox="0 0 400 280" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-sm mx-auto">
      {/* Phone */}
      <rect x="145" y="20" width="110" height="200" rx="18" fill="#1c1917" />
      <rect x="152" y="32" width="96" height="176" rx="12" fill="#fafaf9" />
      {/* Screen content - app logo */}
      <circle cx="200" cy="90" r="25" fill="#d1fae5" />
      <rect x="185" y="80" width="8" height="22" rx="1" fill="#5D4037" />
      <rect x="195" y="74" width="10" height="28" rx="1" fill="#5D4037" />
      <rect x="207" y="82" width="7" height="20" rx="1" fill="#5D4037" />
      {/* Text lines */}
      <rect x="170" y="128" width="60" height="6" rx="3" fill="#15803d" />
      <rect x="175" y="142" width="50" height="4" rx="2" fill="#d6d3d1" />
      {/* Button */}
      <rect x="168" y="160" width="64" height="20" rx="10" fill="#15803d" />
      <rect x="180" y="167" width="40" height="6" rx="3" fill="#d1fae5" />
      
      {/* Notification badges */}
      <g>
        <rect x="270" y="50" width="100" height="40" rx="10" fill="white" stroke="#e7e5e4" strokeWidth="1" />
        <circle cx="286" cy="70" r="8" fill="#d1fae5" />
        <path d="M283 70l2 2 4-4" stroke="#15803d" strokeWidth="1.5" strokeLinecap="round" />
        <rect x="300" y="64" width="56" height="4" rx="2" fill="#d6d3d1" />
        <rect x="300" y="72" width="40" height="3" rx="1.5" fill="#e7e5e4" />
      </g>
      
      <g>
        <rect x="30" y="80" width="100" height="40" rx="10" fill="white" stroke="#e7e5e4" strokeWidth="1" />
        <circle cx="46" cy="100" r="8" fill="#fef9c3" />
        <text x="42" y="104" fill="#ca8a04" fontSize="10" fontWeight="bold">$</text>
        <rect x="60" y="94" width="56" height="4" rx="2" fill="#d6d3d1" />
        <rect x="60" y="102" width="40" height="3" rx="1.5" fill="#e7e5e4" />
      </g>

      {/* Stars/sparkles */}
      <circle cx="100" cy="40" r="3" fill="#facc15" />
      <circle cx="310" cy="30" r="2" fill="#15803d" />
      <circle cx="340" cy="110" r="3" fill="#facc15" />
      <circle cx="60" cy="140" r="2" fill="#15803d" />
    </svg>
  );
}

export default function CTA() {
  return (
    <section
      id="download"
      data-testid="cta-section"
      className="py-20 md:py-32 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-stone-50 to-emerald-50/30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="bg-white rounded-3xl border border-stone-100 shadow-[0_8px_40px_rgb(0,0,0,0.06)] overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left: Content */}
            <div className="p-10 md:p-14">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2
                  data-testid="cta-title"
                  className="font-fun text-5xl md:text-6xl font-semibold text-stone-900 tracking-tight leading-tight"
                >
                  Done with the games?
                </h2>
                <p className="font-body text-base md:text-lg text-stone-600 leading-relaxed mt-4 mb-8">
                  Download TruTown Marketplace today and experience what buying and
                  selling locally should have been this whole time. Real accountability.
                  Real safety. Real people.
                </p>

                <div className="flex flex-wrap gap-4 mb-6">
                  <a
                    href="#"
                    data-testid="cta-apple-store-btn"
                    className="inline-flex items-center gap-3 rounded-full bg-stone-900 text-white px-7 py-3.5 font-body font-semibold text-sm hover:bg-stone-800 transition-all duration-300 hover:shadow-xl hover:scale-105"
                  >
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                    </svg>
                    App Store
                  </a>
                  <a
                    href="#"
                    data-testid="cta-google-play-btn"
                    className="inline-flex items-center gap-3 rounded-full bg-primary text-white px-7 py-3.5 font-body font-semibold text-sm hover:bg-primary-hover transition-all duration-300 hover:shadow-xl hover:scale-105"
                  >
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                      <path d="M3.18 23.75c-.36-.17-.68-.5-.82-.9-.06-.18-.1-.5-.1-4.57V14l1.35 1.35c.74.74 1.68 1.68 2.08 2.08l.73.73-3.24-3.24zm.5-9.08L14.36 3.99l-2.43 4.2c-1.34 2.31-2.73 4.72-3.1 5.35L8.31 14.51 3.68 14.68zm5.17 2.85l7.76-4.48-1.94-1.94c-1.07-1.07-2.87-2.87-4.01-4.01L6.64 3.07l2.21 14.45zm8.62-4.98l2.57-1.48c1.41-.82 2.6-1.52 2.63-1.56.05-.05-5.19-3.07-5.39-3.11-.05-.01.02.94.15 2.12l.24 2.14 1.06 1.06c.58.58 1.06 1.06 1.06 1.06L20.47 12.54zM20.47 12.54l-2.57 1.48.74-.43c.41-.24.74-.44.74-.45 0-.01-.1-.11-.22-.22l-1.26-1.26 2.57.88z" />
                    </svg>
                    Google Play
                  </a>
                </div>

                <p className="font-body text-xs text-stone-400">
                  Free to download. Available on iOS and Android.
                </p>
              </motion.div>
            </div>

            {/* Right: Illustration */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="p-8 lg:p-10"
              data-testid="cta-illustration"
            >
              <DownloadIllustration />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
