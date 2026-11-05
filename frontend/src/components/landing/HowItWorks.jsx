import { motion } from "framer-motion";
import LineArt from "@/components/brand/LineArt";
import SectionKicker from "@/components/brand/SectionKicker";

const steps = [
  {
    num: "01",
    act: "I",
    title: "The Listing",
    feeling: "Post it, then go live your life.",
    description:
      "Snap a photo, set your price, describe the item. Listing is free, and it goes live to local buyers in minutes.",
  },
  {
    num: "02",
    act: "II",
    title: "The Pledge",
    feeling: "The ping that means business.",
    description:
      "An interested buyer puts down a refundable 5–25% deposit, held in bank-grade Stripe escrow — using any card on file, or a new one, without leaving the deal.",
  },
  {
    num: "03",
    act: "III",
    title: "The Meeting",
    feeling: "They’re already there when you pull up.",
    description:
      "Meet at a community-vetted safe spot. Arrival auto-confirms within 130 ft. Inspect properly: up to 30 minutes for electronics, 3 hours for vehicles, 21 days for real estate.",
  },
  {
    num: "04",
    act: "IV",
    title: "The Handshake",
    feeling: "Two taps. The item changes hands.",
    description:
      "Both of you tap Accept. Deposit + balance move from escrow into the seller’s wallet, and receipts are emailed the instant the charge clears — never before.",
  },
];

export default function HowItWorks() {
  return (
    <section
      data-testid="how-it-works-section"
      id="how-it-works"
      className="relative bg-stone-100 py-24 md:py-36 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-12 gap-8 items-end mb-16 md:mb-24"
        >
          <div className="lg:col-span-8">
            <SectionKicker>How it works</SectionKicker>
            <h2
              data-testid="how-it-works-title"
              className="font-display font-bold text-ink tracking-[-0.02em] leading-[0.95] text-5xl sm:text-6xl lg:text-7xl mt-5"
            >
              The exchange,
              <br />
              <span className="italic text-leaf">in four acts.</span>
            </h2>
          </div>
          <p className="lg:col-span-4 font-body text-lg text-stone-600 leading-relaxed">
            From listing to paid in a single Saturday afternoon. Here is exactly how an item
            changes hands on TruTown.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-[46px] left-0 right-0 h-px bg-stone-300" />
          <motion.div
            className="hidden lg:block absolute top-[46px] left-0 h-[2px] bg-crown-gradient origin-left"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.6, ease: [0.65, 0, 0.35, 1] }}
            style={{ width: "100%" }}
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.15 + i * 0.12 }}
                data-testid={`step-${step.num}`}
                className="relative"
              >
                <div className="relative z-10 inline-flex h-[92px] w-[92px] items-center justify-center rounded-full bg-ink ring-8 ring-stone-100">
                  <span className="font-display text-4xl font-bold italic text-crown-gradient">
                    {step.act}
                  </span>
                </div>
                <p className="font-body text-xs font-bold tracking-[0.24em] uppercase text-ochre mt-7">
                  Act {step.act}
                </p>
                <h3 className="font-display text-3xl font-bold text-ink mt-2">{step.title}</h3>
                <p
                  data-testid={`step-${step.num}-feeling`}
                  className="font-display italic text-xl text-bark mt-3 leading-snug"
                >
                  {step.feeling}
                </p>
                <p className="font-body text-[15px] text-stone-600 leading-relaxed mt-3">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Item changing hands */}
        <div className="mt-24 md:mt-32 flex flex-col items-center">
          <LineArt name="handoff" tone="earth" className="w-full max-w-4xl" />
          <p className="font-display italic text-2xl md:text-3xl text-ink text-center mt-8 max-w-2xl">
            &ldquo;Hand to hand. That&rsquo;s the whole point.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
