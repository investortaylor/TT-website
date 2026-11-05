import { motion } from "framer-motion";
import { Star } from "lucide-react";
import SectionKicker from "@/components/brand/SectionKicker";
import { CrownGlyph } from "@/components/brand/CrownSkyline";

const testimonials = [
  {
    name: "Kyle T.",
    role: "Seller",
    text: "I sold a PS5 on Facebook Marketplace three times before TruTown. Every single buyer either ghosted me or tried to lowball at the door. First sale on TruTown? The buyer showed up on time, payment initiated, ready to go. The deposit changes everything.",
    rating: 5,
  },
  {
    name: "Sarah K.",
    role: "Buyer",
    text: "I was nervous about buying a used car from a stranger. But knowing the seller was ID-verified, and that we met at a police station the app suggested I felt completely safe. The 3-hour inspection window sealed the deal.",
    rating: 5,
  },
  {
    name: "David R.",
    role: "Seller",
    text: "The 'Is this still available?' messages that go nowhere — that's what killed me on Craigslist. On TruTown, when someone messages you, they've already thought about putting down a deposit. Every conversation is with a real, committed buyer.",
    rating: 5,
  },
  {
    name: "Lisa M.",
    role: "Buyer",
    text: "Bought furniture for my new apartment. The seller tried to pass off a damaged couch as 'like new.' I cancelled the transaction and reported the seller. I got my deposit back in 48 hours. I think the seller got banned. This app has your back.",
    rating: 5,
  },
  {
    name: "James W.",
    role: "Seller",
    text: "I drive a truck, so I do a lot of local furniture flipping. Before TruTown, I'd drive 30 minutes across town just to have someone not show up. Now, if they flake, I keep part of their deposit. My time finally has value.",
    rating: 5,
  },
  {
    name: "Andrea P.",
    role: "Buyer & Seller",
    text: "It's like Airbnb's cancellation policy, but for buying a couch. That's literally how I describe it to everyone. Simple, fair, and it just works. I've done 12 transactions in two months — zero issues.",
    rating: 5,
  },
];

function StarRating({ rating }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: rating }).map((_, i) => (
        <Star key={i} size={14} className="fill-gilt text-gilt" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      data-testid="testimonials-section"
      id="testimonials"
      className="relative bg-parchment py-24 md:py-36 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20"
        >
          <SectionKicker>Stories</SectionKicker>
          <h2
            data-testid="testimonials-title"
            className="font-display font-bold text-ink tracking-[-0.02em] leading-[0.95] text-5xl sm:text-6xl lg:text-7xl mt-5"
          >
            Word on
            <br />
            <span className="italic text-leaf">the street.</span>
          </h2>
        </motion.div>

        {/* Featured quote */}
        <motion.figure
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          data-testid="featured-testimonial"
          className="relative rounded-[2rem] bg-ink text-stone-100 px-8 py-14 md:px-16 md:py-20 overflow-hidden mb-6"
        >
          <span className="absolute -top-16 left-6 font-display text-[16rem] leading-none text-crown-gradient opacity-40 select-none">
            &ldquo;
          </span>
          <blockquote className="relative font-display text-3xl sm:text-4xl md:text-5xl font-semibold leading-[1.1] max-w-4xl">
            First time I sold something without checking my phone twelve times
            wondering if they&rsquo;d show.
          </blockquote>
          <figcaption className="relative mt-8 flex items-center gap-3 font-body text-sm tracking-[0.2em] uppercase text-gilt">
            <CrownGlyph className="w-6 h-4" />
            Shawn T., Baltimore
          </figcaption>
        </motion.figure>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 [&>*]:mb-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
              data-testid={`testimonial-card-${i}`}
              className="break-inside-avoid rounded-3xl bg-white border border-stone-200 p-7 md:p-8 transition-all duration-500 hover:border-gilt hover:shadow-[0_24px_60px_-24px_rgba(107,78,36,0.35)]"
            >
              <StarRating rating={t.rating} />
              <p className="font-body text-[15px] text-stone-700 leading-relaxed mt-5">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3 mt-6 pt-5 border-t border-stone-200">
                <div className="w-10 h-10 rounded-full bg-crown-gradient flex items-center justify-center font-display font-bold text-ink">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-display text-lg font-bold text-ink leading-none">{t.name}</p>
                  <p className="font-body text-xs text-ochre font-semibold tracking-wider uppercase mt-1">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
