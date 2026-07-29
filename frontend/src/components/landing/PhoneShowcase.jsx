import { motion } from "framer-motion";
import { ShieldCheck, MapPin, MessageSquare } from "lucide-react";

const screens = [
  {
    key: "browse",
    src: "https://customer-assets-7cd3h4nn.emergentagent.net/job_repo-changes-2/artifacts/whp5m37x_iphone_3_deep.webp",
    alt: "TruTown Browse Items screen — Safe. Verified. Trustworthy.",
    icon: ShieldCheck,
    kicker: "Browse",
    title: "Safe. Verified. Trustworthy.",
    body:
      "Every listing you see is from an ID-verified neighbor. Sorted by distance, so you're always trading close to home.",
  },
  {
    key: "map",
    src: "https://customer-assets-7cd3h4nn.emergentagent.net/job_repo-changes-2/artifacts/o945oszx_iphone_7_live_map.webp",
    alt: "TruTown Live Meeting map — buyer and seller locations en route to a safe spot",
    icon: MapPin,
    kicker: "Meet Live",
    title: "See each other arrive — in real time.",
    body:
      "A shared live map with buyer, seller, and safe-spot pins. Both parties auto-confirm 'arrived' within 130 ft. No more 'I'm here, where are you?' texts.",
  },
  {
    key: "chat",
    src: "https://customer-assets-7cd3h4nn.emergentagent.net/job_repo-changes-2/artifacts/7q4kr966_iphone_6_chat_plants.webp",
    alt: "TruTown in-app chat with an ID-verified buyer discussing a purchase",
    icon: MessageSquare,
    kicker: "Chat",
    title: "Real conversations. Real buyers.",
    body:
      "When someone messages you on TruTown, they've already put a deposit on the line. Every chat is with a serious, committed buyer.",
  },
];

function PhoneFrame({ src, alt }) {
  // Tan-colored iPhone frame. Aspect ratio matches iPhone (~19.5:9 → ~0.462).
  return (
    <div className="relative mx-auto" style={{ width: "240px" }}>
      {/* Outer body: warm tan/champagne bezel */}
      <div
        className="relative rounded-[2.6rem] p-[10px] shadow-[0_20px_50px_-12px_rgba(120,80,40,0.35),0_8px_20px_-8px_rgba(0,0,0,0.15)]"
        style={{
          background:
            "linear-gradient(145deg, #E9CBA0 0%, #D6B285 40%, #C29968 70%, #D9B78A 100%)",
        }}
      >
        {/* Highlight edge */}
        <div
          className="pointer-events-none absolute inset-0 rounded-[2.6rem]"
          style={{
            boxShadow:
              "inset 0 1px 0 rgba(255,255,255,0.6), inset 0 -1px 0 rgba(0,0,0,0.15)",
          }}
        />

        {/* Side buttons (subtle) */}
        <div className="absolute -left-[3px] top-24 h-8 w-[3px] rounded-l bg-[#A87F4E]" />
        <div className="absolute -left-[3px] top-36 h-12 w-[3px] rounded-l bg-[#A87F4E]" />
        <div className="absolute -left-[3px] top-52 h-12 w-[3px] rounded-l bg-[#A87F4E]" />
        <div className="absolute -right-[3px] top-32 h-16 w-[3px] rounded-r bg-[#A87F4E]" />

        {/* Inner black bezel */}
        <div className="relative rounded-[2rem] overflow-hidden bg-black">
          {/* Screen */}
          <div
            className="relative w-full overflow-hidden bg-white"
            style={{ paddingTop: "216.7%" /* 19.5/9 * 100 */ }}
          >
            <img
              src={src}
              alt={alt}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover object-top"
            />

            {/* Dynamic Island / notch */}
            <div className="pointer-events-none absolute left-1/2 top-2 z-10 h-[22px] w-[80px] -translate-x-1/2 rounded-full bg-black" />

            {/* Subtle glass reflection */}
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "linear-gradient(115deg, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0) 22%, rgba(255,255,255,0) 78%, rgba(255,255,255,0.08) 100%)",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PhoneShowcase() {
  return (
    <section
      data-testid="phone-showcase-section"
      id="peek-inside"
      className="py-20 md:py-32 relative overflow-hidden"
    >
      {/* Background wash */}
      <div className="absolute inset-0 bg-gradient-to-b from-stone-50/70 via-white to-emerald-50/30" />

      {/* Soft blob */}
      <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-gold-100/50 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-emerald-100/40 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 md:mb-20"
        >
          <span className="font-fun text-base md:text-lg font-semibold text-secondary tracking-wider uppercase">
            Peek Inside
          </span>
          <h2
            data-testid="phone-showcase-title"
            className="font-fun text-5xl md:text-6xl font-semibold text-stone-900 tracking-tight mt-3"
          >
            What the app actually feels like.
          </h2>
          <p className="font-body text-base md:text-lg text-stone-500 mt-4 max-w-2xl mx-auto">
            Three moments most marketplaces don&rsquo;t bother thinking about &mdash; and the exact reason TruTown does.
          </p>
        </motion.div>

        {/* Grid of phones */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-12">
          {screens.map((s, i) => (
            <motion.div
              key={s.key}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: "easeOut" }}
              data-testid={`phone-showcase-card-${s.key}`}
              className="flex flex-col items-center text-center"
            >
              <motion.div
                whileHover={{ y: -6, rotate: i === 1 ? 0 : i === 0 ? -1.5 : 1.5 }}
                transition={{ type: "spring", stiffness: 200, damping: 18 }}
                className="mb-8"
              >
                <PhoneFrame src={s.src} alt={s.alt} />
              </motion.div>

              <div className="max-w-xs">
                <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-100 px-3 py-1 mb-3">
                  <s.icon size={14} className="text-primary" strokeWidth={2} />
                  <span className="font-mono text-[10px] font-bold tracking-wider uppercase text-primary">
                    {s.kicker}
                  </span>
                </div>
                <h3 className="font-fun text-2xl font-semibold text-stone-900 leading-tight mb-2">
                  {s.title}
                </h3>
                <p className="font-body text-sm text-stone-600 leading-relaxed">
                  {s.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
