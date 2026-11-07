import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How does the deposit system work?",
    a: "When a buyer is interested in your item, they place a refundable deposit of 5-25% of the listing price into a bank-grade Stripe escrow account. This deposit shows they're committed. If the transaction completes successfully, the deposit is fully applied to the purchase. If the buyer no-shows or backs out, they forfeit part of their deposit and the seller receives compensation.",
  },
  {
    q: "What happens if a buyer ghosts the meet-up?",
    a: "The seller keeps a slice of the buyer's deposit automatically — 15% to start, and 25% once you reach Trusted Seller status. The compensation appears in your Wallet under 'Compensation Awaiting' and is included in your next Cash Out. No screenshots, no back-and-forth, no chasing anyone.",
  },
  {
    q: "What happens if the seller flakes?",
    a: "Accountability goes both ways. If a seller cancels or doesn't show up to an agreed meeting, they pay a fee to the buyer and can lose their Trusted Seller status. TruTown ensures everyone has skin in the game — not just the buyer.",
  },
  {
    q: "What if the buyer's card declines at the moment of sale?",
    a: "The app doesn't fake success. Both parties instantly see a red 'UNSUCCESSFUL transaction' popup with the exact Stripe reason. The item stays available and the buyer stays in the deal — they can pick a different card on file (or add a new one) without leaving the app. The seller taps Retry Payment and it's done. Receipts are only emailed once Stripe confirms the charge cleared.",
  },
  {
    q: "Is my personal information safe?",
    a: "Yes. Seller ID verification is handled by Didit and stored securely. Verified information is only accessed in the event of a dispute or safety incident, and can be shared with law enforcement if needed. Your day-to-day profile does not expose sensitive details — you're identified by a green check, not by your driver's license.",
  },
  {
    q: "What are safe meeting spots?",
    a: "TruTown recommends community-vetted locations such as police stations, credit-union branches, and well-lit coffee shops. Users upvote the best spots so the good ones bubble up, and the app auto-confirms both parties as 'arrived' once you're within 130 ft of the meeting point — unlocking the payment step.",
  },
  {
    q: "Can I really request police presence?",
    a: "Yes. If an ID-verified buyer or seller feels uncomfortable at any point in an active meeting, they can call the closest police line in two taps. The safe-spot address is shared automatically and TruTown admins follow up with the police department on your behalf. No other peer-to-peer marketplace offers this.",
  },
  {
    q: "How long do I have to inspect an item?",
    a: "Inspection windows vary by category: 30-45 minutes for electronics, up to 3 hours for vehicles, and up to 21 days for real estate. During this window the buyer can thoroughly examine the item before any money moves from escrow to the seller.",
  },
  {
    q: "What if the item isn't as described?",
    a: "The buyer cancels the transaction to start the refund and can report the seller to our compliance team, who will reach out to the seller directly. Repeat offenders are fined or banned by identity — not just email — so they can't create a new account and start over.",
  },
  {
    q: "What's the platform fee, and are there any listing fees?",
    a: "Listing is free — always. TruTown only takes an 8.9% platform fee on successful sales. Your Wallet's Net Balance reflects the fee automatically so there are no surprise deductions at Cash Out.",
  },
  {
    q: "How does Cash Out work?",
    a: "Tap Cash Out in your Wallet and proceeds are pushed to your linked bank account — instantly when eligible, and typically within 48 hours via ACH. Year-to-date earnings and this-month totals are also emailed to you each month for easy record-keeping.",
  },
];

export default function FAQ() {
  return (
    <section
      data-testid="faq-section"
      id="faq"
      className="py-20 md:py-32 bg-white"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="font-fun text-base md:text-lg font-semibold text-secondary tracking-wider uppercase">
            FAQ
          </span>
          <h2
            data-testid="faq-title"
            className="font-fun text-5xl md:text-6xl font-semibold text-stone-900 tracking-tight mt-3"
          >
            Questions? We've got answers.
          </h2>
        </motion.div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                data-testid={`faq-item-${i}`}
                className="bg-stone-50 rounded-xl border border-stone-100 px-6 overflow-hidden"
              >
                <AccordionTrigger
                  data-testid={`faq-trigger-${i}`}
                  className="font-body font-semibold text-left text-stone-900 text-sm md:text-base hover:no-underline py-5"
                >
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent
                  data-testid={`faq-content-${i}`}
                  className="font-body text-sm text-stone-600 leading-relaxed pb-5"
                >
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
