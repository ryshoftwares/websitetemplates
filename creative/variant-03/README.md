# Studio Clean

**Category:** Creative
**Variant:** 03 — Minimal Professional

A calm, restrained marketing site for a graphic design studio: single deep-green accent,
hairline grid cards, generous whitespace and no unnecessary decoration.

## Pages

- `index.html` — Home
- `studio.html` — Studio / story, philosophy, values, timeline, team
- `services.html` — Six-service breakdown + four-step process
- `work.html` — Eight-project portfolio with a live category filter (All / Branding / Packaging / Editorial / Digital)
- `contact.html` — Contact details + validated form

## Features

- Sticky header, mobile slide-down navigation
- Scroll-reveal animations + animated stat counters
- Vanilla-JS category filter on `work.html` with `aria-pressed` state kept in sync on the filter buttons
- Client-side contact form validation with inline error states
- Hairline-grid card components (no shadows, no heavy rounding)
- Fully responsive from 320px to 1440px+, `prefers-reduced-motion` respected

## Technology

HTML5 · CSS3 (custom properties, no preprocessor) · Vanilla JavaScript
Fonts from Google Fonts CDN (Outfit + Karla). No build step, no dependencies.

## How to run

Open `index.html` directly, or serve with any static file server, e.g. `npx serve .`.

## Customizing

**Colors** — edit `css/style.css`:
```css
:root {
  --ink: #1a1a17;
  --accent: #1f4d3d;
  --background: #fafaf7;
}
```

**Content** — edit copy directly inside each `.html` file.

**Images** — replace the Unsplash demo URLs with your own files in `assets/images/`.

**Work filter** — each `.work-card` in `work.html` carries a `data-category` attribute
(`branding`, `packaging`, `editorial` or `digital`) that must match one of the `.filter-btn`
`data-filter` values for the filter to work correctly.

## Folder structure

```
variant-03/
├── index.html / studio.html / services.html / work.html / contact.html
├── css/style.css, css/responsive.css
├── js/script.js
└── assets/images, assets/icons, assets/fonts
```

Fully independent — copy this folder anywhere and open `index.html`.
