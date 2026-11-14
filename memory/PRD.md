# TruTown Marketplace - Landing Page PRD

## Original Problem Statement
Build a landing/marketing page for TruTown Marketplace mobile app. Highlights app benefits, provides download links (Google Play + Apple Store), admin portal link. Uses SVG artwork/illustrations of people completing transactions, icons exemplifying text, colors complementing the green/gold/brown logo. Engaging, thought-provoking copy.

## Architecture
- **Frontend**: React + Tailwind CSS + Shadcn UI + Framer Motion
- **Backend**: FastAPI (minimal, no backend-heavy features for landing page)
- **Database**: MongoDB (available but unused for static landing page)
- **Hosting**: Kubernetes container with hot reload

## User Personas
- **Local sellers** frustrated with Facebook Marketplace/Craigslist no-shows
- **Local buyers** wanting safe, accountable transactions
- **Investors/Partners** evaluating the platform

## Core Requirements (Static)
- Hero section with tagline and app store download CTAs
- How It Works step-by-step process (4 steps)
- Features/Benefits bento grid (8 features)
- Safety features highlighted throughout
- Testimonials/Social proof
- FAQ accordion
- Admin portal link in footer
- Mobile responsive design
- Custom SVG illustrations (no stock photos per user request)

## What's Been Implemented (Dec 2025)
- Full single-page landing site with 8 sections
- Custom SVG artwork throughout (hero, how it works, social proof, CTA)
- Shadcn UI accordion for FAQ
- Framer Motion entrance animations
- Navigation with smooth scroll + mobile hamburger menu
- DM Serif Display + Manrope typography
- Green/gold/brown color palette matching logo
- App Store & Google Play placeholder download buttons
- Admin Portal link in footer
- All data-testid attributes for testing
- 100% test pass rate

## Feb 2026 — Visceral Relief Rewrite & Hero Carousel
- Rewrote homepage copy to focus on the "exhale" moment (buyer already there, payment initiated)
- Removed all physical-cash references — platform uses digital deposits/payments only
- Added `ExhaleMoment.jsx` pull-quote strip below hero
- Reframed `HowItWorks.jsx`, `Features.jsx`, `Testimonials.jsx` to be experiential
- Built scrolling Hero carousel (4 urban handoff items) in `Hero.jsx`:
  - Items: Headphones, Vintage Camera (hand + skyscrapers), Laptop (hand + city street + taxi), Chair (urban intersection)
  - All images: urban backgrounds (city streets, sidewalks, architecture) with hands visible
  - Auto-rotates every 5s with horizontal slide transition (Framer Motion AnimatePresence)
  - Clickable dots for manual navigation
  - Each slide updates: image, handoff time, floating quote, seller name
- Updated H1 to: "I show up. Buyer's there. **Payment's Initiated.** **Wow.**" (green primary + gold accent)

## Prioritized Backlog
### P0 (Critical)
- None - MVP landing page complete

### P1 (Important)
- Replace placeholder app store links with real URLs when available
- Replace placeholder admin portal link with real URL
- Add real social media links when accounts are created

### P2 (Nice to Have)
- Add email capture/newsletter signup form
- Add analytics tracking (Google Analytics, etc.)
- Add animated scroll-triggered counters for stats
- Add video demo of the app
- SEO meta tags optimization

## Next Tasks
- Provide real App Store / Google Play URLs
- Provide real Admin Portal URL
- Add social media profiles
- Consider adding email capture for waitlist/early access

## Sep 2026 — "Crown City" full redesign (all pages)
- Palette restricted to logo colours: green #00C850 / #2FE03A, lime #ADBA36, gilt #C9C23A, ochre #B09820, brown #6B4E24 (+ deep tints) and black #0B0906. Tailwind `primary/secondary/emerald/gold/stone` remapped so every page inherits it.
- Typography: Vollkorn (serif, matches logo wordmark) for display; Archivo for body.
- Brand components in `src/components/brand/`: CrownSkyline (crown-of-high-rises SVG traced from logo, line/solid, draw animation), LineArt (abstract one-line art via CSS mask painted in logo gradient, reveal on scroll), BrandLogo (transparent emblem + serif wordmark), StoreButtons, SectionKicker.
- Line-art assets: /public/art/handshake.png, negotiation.png, handoff.png; logo: /public/logo-emblem.png, logo-transparent.png.
- New copy: Hero "The city shakes on it." (dark, handshake background), "changed hands" ticker, Manifesto "Two people. One agreement. No games.", "The exchange, in four acts", "Ghosted? You still get paid.", "Protection fit for royalty.", "Built for the moment hands meet.", "Word on the street.", FAQ "Before you shake on it.", CTA "Your city. Your deal."
- Legal pages now share Navbar + Footer with dark title band; item detail page recoloured.
- All data-testids & section ids preserved. Store links still placeholders (#).

## TEMPORARY comparison route
- Original imported site (commit fbb4c21) is built into backend/classic_preview and served at /api/classic/ by a temporary route in server.py. Remove both once the user is done comparing.


## Sep 2026 — Reverted to ORIGINAL site layout + brand tweaks (current state)
- Landing/legal/item files restored from commit fbb4c21 (original GitHub import); the dark "Crown City" redesign is superseded (still in git history).
- Kept from redesign: BrandLogo (navbar, footer, legal header), black navbar (original labels), Vollkorn + Archivo fonts, logo palette in tailwind (primary #00C850, secondary #6B4E24, emerald/gold/stone remapped), LineArt negotiation image replaces Old Way / TruTown Way illustration.
- Stats: 5-25% Refundable buyer deposit required · Proximity Verified between parties · Stripe Bank-grade escrow · Mandatory ID Verified sellers · Optional ID Verified buyers · 8.9% Fee on successful sales.
- Compensation: added "Seller flakes? Buyer still gets paid." bullet (copy needs user confirmation of actual buyer compensation rule).
- Inspection copy updated in How It Works + Features. FAQ still mentions "up to 21 days for real estate" (not changed — ask user).
- /api/classic/ temporary original copy KEPT per user.

## Nov 2026 — Fee/compensation copy accuracy pass
- Compensation cards: Late cancels (reschedule 15% all to other person; ignored invite 12+ hrs = 10% forfeit); Trusted Seller (60% → 100% of forfeited fee; 20 sales + 8.0+ rating).
- Features "Trusted Seller Tier" updated to 60%/100%.
- FAQ: ghosting, seller flakes, no-show breakdown (neither shows 10% each; 48h unclosed rule), platform fee (8.9%, 1.8% real estate coming soon) updated; NEW FAQ "What if we meet but nobody taps Purchase, Cancel, or Report?" placed after no-show question.
