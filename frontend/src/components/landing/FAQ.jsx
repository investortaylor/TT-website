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
    a: "When a buyer is interested in your item, they place a refundable deposit of 1-20% of the listing price. This deposit shows they're committed. If the transaction completes successfully, the deposit is fully returned. If the buyer no-shows or backs out, they forfeit part of their deposit and the seller receives compensation.",
  },
  {
    q: "What happens if the seller flakes?",
    a: "Accountability goes both ways. If a seller cancels or doesn't show up to an agreed meeting, they pay a fee to the buyer. TruTown ensures everyone has skin in the game — not just the buyer.",
  },
  {
    q: "Is my personal information safe?",
    a: "Yes. Seller ID verification uses government-issued identification that is encrypted and stored securely. This information is only accessed in the event of a dispute or safety incident, and can be shared with law enforcement if needed. Your day-to-day profile doesn't expose sensitive details.",
  },
  {
    q: "What are safe meeting spots?",
    a: "TruTown recommends community-vetted meeting locations such as police stations, banks, coffee shops, and busy public spaces. Users can upvote the best spots, and the app uses GPS-based location tracking to verify both parties arrive at the agreed location.",
  },
  {
    q: "Can I really request police presence?",
    a: "Yes. If either the buyer or seller feels uncomfortable at any point, they can request police presence directly through the app. This is a feature no other marketplace offers, and it's part of our commitment to making local transactions genuinely safe.",
  },
  {
    q: "How long do I have to inspect an item?",
    a: "Inspection times vary by category: 45 minutes for electronics, 3 hours for vehicles, and up to 10 days for real estate. During this time, the buyer can thoroughly examine the item before finalizing the transaction.",
  },
  {
    q: "What if the item isn't as described?",
    a: "TruTown has a built-in dispute resolution system. Every listing detail, photo, and message is preserved as a 'transaction snapshot' at the point of sale. If an item doesn't match its description, you can file a free claim and our admin team will review the evidence to reach a fair resolution.",
  },
  {
    q: "How does TruTown make money?",
    a: "TruTown charges small platform fees on completed transactions and dispute filing fees that fund our resolution system. The goal is to keep fees minimal while maintaining the infrastructure that makes safe trading possible.",
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
          <span className="font-mono text-sm font-bold text-secondary tracking-wider uppercase">
            FAQ
          </span>
          <h2
            data-testid="faq-title"
            className="font-heading text-4xl md:text-5xl text-stone-900 tracking-tight mt-3"
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
