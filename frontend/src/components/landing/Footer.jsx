import { useState } from "react";
import ContactModal from "./ContactModal";

const productLinks = [
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Features", href: "/#features" },
  { label: "FAQ", href: "/#faq" },
];

const companyLinks = [
  { label: "About TruTown", href: "#" },
  { label: "Careers", href: "#" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Cookie Policy", href: "#" },
];

export default function Footer() {
  const [contactOpen, setContactOpen] = useState(false);

  const openContact = (e) => {
    e?.preventDefault();
    setContactOpen(true);
  };

  return (
    <footer data-testid="footer" className="bg-stone-900 text-stone-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/logo.png"
                alt="TruTown Marketplace"
                className="h-[60px] w-auto brightness-110"
                style={{ mixBlendMode: "screen" }}
              />
              <span className="font-fun text-xl font-semibold text-white">
                TruTown Marketplace
              </span>
            </div>
            <p className="font-body text-sm text-stone-400 leading-relaxed max-w-sm mb-6">
              The first marketplace designed for how local transactions actually
              work — in person, with trust, and without the games.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-body font-semibold text-sm text-white mb-4 tracking-wide uppercase">
              Product
            </h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    data-testid={`footer-link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                    className="font-body text-sm text-stone-400 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-body font-semibold text-sm text-white mb-4 tracking-wide uppercase">
              Company
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={companyLinks[0].href}
                  data-testid="footer-link-about-trutown"
                  className="font-body text-sm text-stone-400 hover:text-white transition-colors duration-200"
                >
                  {companyLinks[0].label}
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={openContact}
                  data-testid="footer-link-contact-us"
                  className="font-body text-sm text-stone-400 hover:text-white transition-colors duration-200 text-left p-0 bg-transparent border-0 cursor-pointer"
                >
                  Contact Us
                </button>
              </li>
              <li>
                <a
                  href={companyLinks[1].href}
                  data-testid="footer-link-careers"
                  className="font-body text-sm text-stone-400 hover:text-white transition-colors duration-200"
                >
                  {companyLinks[1].label}
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-body font-semibold text-sm text-white mb-4 tracking-wide uppercase">
              Legal
            </h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    data-testid={`footer-link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                    className="font-body text-sm text-stone-400 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-stone-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-stone-500">
            &copy; {new Date().getFullYear()} TruTown Marketplace. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              data-testid="cta-apple-store-footer"
              className="font-body text-xs text-stone-500 hover:text-white transition-colors"
            >
              Download on App Store
            </a>
            <a
              href="#"
              data-testid="cta-google-play-footer"
              className="font-body text-xs text-stone-500 hover:text-white transition-colors"
            >
              Get it on Google Play
            </a>
          </div>
        </div>
      </div>

      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </footer>
  );
}
