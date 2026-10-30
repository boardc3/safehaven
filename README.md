# Safe Haven Payments — site redesign

Full redesign of [safehavenpayments.com](https://safehavenpayments.com) as a React single-page app (Vite + React Router + Framer Motion). Every page of the current site is rebuilt: home, solutions, merchant processing, Square, insurance, payroll, capital, who we serve, partners, about, careers, contact, login and privacy. All imagery is inline SVG; fonts come from Google Fonts.

## Run it

```
npm install
npm run dev        # http://localhost:5173
npm run build      # static output in dist/
npm run preview    # serve the build locally
```

The app uses hash routing so the `dist/` folder can be dropped on any static host (GitHub Pages included) with no server config.

## Structure

- `src/main.jsx` — routes
- `src/Layout.jsx` — header, nav, footer, mobile action bar, page transitions
- `src/components.jsx` — the interactive pieces: animated hero statement, fee check, partner residual calculator, payroll estimate, tabs, FAQ, lead form
- `src/ui.jsx` — `Section` (scroll reveal), `Stagger`, `Counter`, link helper
- `src/pages/*.jsx` — one component per page
- `src/styles.css` — the design system (tokens at the top)
- `tools/` — the scripts that converted the original static HTML into JSX; not needed to run the site

## Animation notes

Deliberately minimal: the hero headline and statement tally on load, sections fade-rise once on scroll, numbers ease to their value, tabs slide a pill, FAQ answers animate height, the partner chart draws its line, and routes cross-fade. Everything respects `prefers-reduced-motion`.

## Before launch

Real logo, attributable testimonials, trust stats, team photos, wiring the lead and login forms to Safe Haven's CRM and portal, and migrating the privacy policy text. See `UX-AUDIT.md`.
