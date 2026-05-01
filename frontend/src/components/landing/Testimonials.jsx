import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Lamont T.",
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
        <Star key={i} size={14} className="fill-gold-400 text-gold-400" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      data-testid="testimonials-section"
      id="testimonials"
      className="py-20 md:py-32 relative overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute top-0 left-0 right-0 h-1/2 bg-stone-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-fun text-base md:text-lg font-semibold text-secondary tracking-wider uppercase">
            Testimonials
          </span>
          <h2
            data-testid="testimonials-title"
            className="font-fun text-5xl md:text-6xl font-semibold text-stone-900 tracking-tight mt-3"
          >
            Real people. Real transactions.
          </h2>
          <p className="font-body text-base md:text-lg text-stone-500 mt-4 max-w-xl mx-auto">
            Hear from buyers and sellers who are done with the games.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              data-testid={`testimonial-card-${i}`}
              className="bg-white rounded-2xl p-6 border border-stone-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-300"
            >
              <Quote size={24} className="text-emerald-200 mb-3" strokeWidth={1.5} />
              <p className="font-body text-sm text-stone-700 leading-relaxed mb-5">
                "{t.text}"
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-stone-100">
                <div>
                  <p className="font-body font-semibold text-sm text-stone-900">
                    {t.name}
                  </p>
                  <p className="font-body text-xs text-stone-500">{t.role}</p>
                </div>
                <StarRating rating={t.rating} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
