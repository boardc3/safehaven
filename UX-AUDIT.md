# Safe Haven Payments — UX Audit & Redesign Notes
Reviewed live site: safehavenpayments.com (Oct 29, 2026)

## Who visits, and what they need
| Visitor | Goal | Current site | Redesign |
|---|---|---|---|
| Business owner shopping rates | "Am I overpaying?" → get a review | Core offer (free statement review) buried in section 2; every CTA goes to a generic form | Hero leads with the review; fee checker gives instant value; form accepts a statement |
| Existing merchant | Log in / get support fast | Login hidden in a hover menu (`href="#"`, breaks on touch); phone only on Contact page | Utility bar with logins + phone on every page; "Current merchant" path in router |
| Referral partner / ISO / chamber | See earning potential, sign up | Calculator buried on Partner page | Partner section + residual calculator on home; partner login in header |
| Org buyer (franchise, enterprise, municipality) | See they're a fit | Six cards, most with no link | Tabbed "Who we serve" with tailored needs + CTA each |
| Job seeker | Careers | Top nav slot | Moved to footer (low-intent, frees nav) |

## Key problems found
1. **No phone number on the homepage.** For a "real people" brand, the number only appears on /contact. Footer shows email only.
2. **Primary CTA is vague.** "Get Started" ×7 all point to /contact. Nothing says what happens next.
3. **Contact form can't do the job.** Name/business/email/phone only — no message, no "what do you need", no statement upload, even though the offer is a statement review.
4. **Broken navigation patterns.** "Who We Serve" and "Login" are `href="#"` hover menus; only 2 of 6 segments are in the dropdown.
5. **Security/polish leak:** an `admin` author link (`/author/wp-safehp/`) is exposed on the homepage — reveals the WordPress username. Remove/disable author archives.
6. **Copy inconsistencies:** "Four ways we keep your money working" introduces six solutions. "Other Solutions" in nav is unclear.
7. **Generic stock imagery** (skyscrapers, handshake) contradicts the "kitchen tables and shop counters" story.
8. **Anonymous testimonials** ("Café owner") read as unverified. Need real names, businesses, cities, photos, and a Google rating.
9. **Large empty dark block** above the footer on desktop; homepage is ~10,500px tall with repeated messaging.
10. **No trust markers:** years in business, merchants served, review rating, PCI/security note, office location.

## What the redesign does
- Hero = one clear promise + one action ("Get my free review"), phone as secondary, three reassurances, and an animated statement that tallies the hidden fees.
- Interactive fee check (sales + fees → effective rate, gauge, verdict, value of a rate cut). Labeled as illustration.
- Trust strip under the hero; three-way audience path through the nav and router.
- Solutions restructured: "Start with payments, add the rest" (processing + Square featured, 6 add-ons).
- Brand promise ("if staying put is best, we'll say so") given its own moment with a lighthouse scene.
- Illustrated mosaic plus accessible tabs for segments, FAQ answering objections, upgraded lead form with need selection + statement upload.
- Partner residual calculator with a live growth chart.
- Sticky mobile action bar (Call / Free review), skip link, focus states, reduced-motion support, keyboard tabs.
- All imagery is inline SVG (no image requests); fonts: Fraunces + Manrope via Google Fonts.

## To finish before launch (needs Safe Haven input)
- [ ] Real logo file (shield-and-waves mark is a placeholder)
- [ ] Real testimonials with attribution + Google review rating/link
- [ ] Trust stats (years, merchants served) and any PCI/security statements
- [ ] Real photos of the team / merchants (can replace the illustrated scenes)
- [ ] Confirm partner residual figures shown in the example calculator
- [ ] Wire form to existing handler/CRM with file upload; confirm "next business day" response promise
- [ ] Remove WP author archive link; add phone to header/footer site-wide
- [ ] Rebuild subpages (Solutions, Square, Insurance, Payroll, Capital, Partners, Contact) on this system
