import { ExternalLink } from "lucide-react";

const footerLinks = [
  {
    title: "Product",
    links: [
      { label: "How It Works", href: "#how-it-works" },
      { label: "Features", href: "#features" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About TruTown", href: "#" },
      { label: "Contact Us", href: "#" },
      { label: "Careers", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Cookie Policy", href: "#" },
    ],
  },
];

export default function Footer() {
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
            <a
              href="#"
              data-testid="admin-portal-link"
              className="inline-flex items-center gap-2 font-body text-sm font-semibold text-secondary hover:text-gold-300 transition-colors"
            >
              <ExternalLink size={14} />
              Admin Portal
            </a>
          </div>

          {/* Link Columns */}
          {footerLinks.map((col) => (
            <div key={col.title}>
              <h4 className="font-body font-semibold text-sm text-white mb-4 tracking-wide uppercase">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
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
          ))}
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
    </footer>
  );
}
