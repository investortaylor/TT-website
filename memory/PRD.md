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
- Built scrolling Hero carousel (4 outdoor handoff items) in `Hero.jsx`:
  - Items: Headphones, Vintage Camera, Laptop, Chair
  - All Unsplash photos: outdoors with hands visible (handoff scenes)
  - Auto-rotates every 4s with horizontal slide transition (Framer Motion AnimatePresence)
  - Clickable dots for manual navigation
  - Each slide updates: image, handoff time, floating quote, seller name
- Updated H1 to: "I show up. The buyer is already there. **Payment Initiated.** **Wow.**" (green primary + gold accent)

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
