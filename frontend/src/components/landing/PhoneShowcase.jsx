import { motion } from "framer-motion";
import { ShieldCheck, MapPin, MessageSquare } from "lucide-react";
import SectionKicker from "@/components/brand/SectionKicker";

const screens = [
  {
    key: "browse",
    src: "https://customer-assets-7cd3h4nn.emergentagent.net/job_repo-changes-2/artifacts/whp5m37x_iphone_3_deep.webp",
    alt: "TruTown Browse Items screen — Safe. Verified. Trustworthy.",
    icon: ShieldCheck,
    kicker: "Browse",
    title: "Your neighborhood, verified.",
    body: "Every listing comes from an ID-verified neighbor, sorted by distance — so you always trade close to home.",
  },
  {
    key: "map",
    src: "https://customer-assets-7cd3h4nn.emergentagent.net/job_repo-changes-2/artifacts/o945oszx_iphone_7_live_map.webp",
    alt: "TruTown Live Meeting map — buyer and seller locations en route to a safe spot",
    icon: MapPin,
    kicker: "Meet live",
    title: "Watch each other arrive.",
    body: "A shared live map with buyer, seller and safe-spot pins. No more “I’m here, where are you?” texts.",
  },
  {
    key: "chat",
    src: "https://customer-assets-7cd3h4nn.emergentagent.net/job_repo-changes-2/artifacts/7q4kr966_iphone_6_chat_plants.webp",
    alt: "TruTown in-app chat with an ID-verified buyer discussing a purchase",
    icon: MessageSquare,
    kicker: "Chat",
    title: "Talk with people who mean it.",
    body: "Anyone messaging you on TruTown already has a deposit on the line. Every chat is a serious one.",
  },
];

function PhoneFrame({ src, alt }) {
  return (
    <div className="relative mx-auto" style={{ width: "240px" }}>
      <div
        className="relative rounded-[2.6rem] p-[9px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)]"
        style={{ background: "linear-gradient(145deg, #C9C23A 0%, #B09820 45%, #6B4E24 100%)" }}
      >
        <div className="relative rounded-[2rem] overflow-hidden bg-black">
          <div className="relative w-full overflow-hidden bg-white" style={{ paddingTop: "216.7%" }}>
            <img
              src={src}
              alt={alt}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover object-top"
            />
            <div className="pointer-events-none absolute left-1/2 top-2 z-10 h-[22px] w-[80px] -translate-x-1/2 rounded-full bg-black" />
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
      className="grain relative bg-ink text-stone-100 py-24 md:py-36 overflow-hidden"
    >
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 h-[500px] w-[900px] rounded-full bg-leaf/10 blur-[140px] pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <SectionKicker onDark>Inside the app</SectionKicker>
          <h2
            data-testid="phone-showcase-title"
            className="font-display font-bold tracking-[-0.02em] leading-[0.95] text-5xl sm:text-6xl lg:text-7xl mt-5"
          >
            Built for the moment
            <br />
            <span className="italic text-crown-gradient">hands meet.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 lg:gap-12">
          {screens.map((s, i) => (
            <motion.div
              key={s.key}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: "easeOut" }}
              data-testid={`phone-showcase-card-${s.key}`}
              className={`flex flex-col items-center text-center ${i === 1 ? "md:-mt-10" : "md:mt-10"}`}
            >
              <motion.div
                whileHover={{ y: -8, rotate: i === 1 ? 0 : i === 0 ? -2 : 2 }}
                transition={{ type: "spring", stiffness: 200, damping: 18 }}
                className="mb-10"
              >
                <PhoneFrame src={s.src} alt={s.alt} />
              </motion.div>
              <div className="max-w-xs">
                <div className="inline-flex items-center gap-2 text-gilt mb-3">
                  <s.icon size={15} strokeWidth={2} />
                  <span className="font-body text-[11px] font-bold tracking-[0.24em] uppercase">{s.kicker}</span>
                </div>
                <h3 className="font-display text-3xl font-bold text-white leading-tight mb-2">{s.title}</h3>
                <p className="font-body text-[15px] text-stone-400 leading-relaxed">{s.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
