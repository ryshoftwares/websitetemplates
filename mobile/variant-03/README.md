# Plainly

**Category:** Mobile App
**Variant:** 03 — Minimal Professional

A restrained, single-accent landing site for a budgeting app: hairline borders, generous
whitespace, one teal accent color, and a straightforward phone mockup showing a plain-language
budget breakdown.

## Pages

- `index.html` — Home (phone mockup, store badges, why-Plainly cards, stats)
- `features.html` — Features (four detailed feature blocks)
- `pricing.html` — Pricing (monthly/yearly toggle, 3 plans)
- `download.html` — Download (store badges + QR code graphic + platform requirements)
- `contact.html` — Contact

## Features

- Sticky header with scroll shadow, mobile slide-down navigation
- Scroll-reveal animations + animated stat counters
- Working monthly/yearly pricing toggle switch
- Client-side contact form validation with inline error states
- Fully responsive from 320px to 1440px+, `prefers-reduced-motion` respected

## Technology

HTML5 · CSS3 (custom properties, no preprocessor) · Vanilla JavaScript
Fonts from Google Fonts CDN (Manrope + Inter). No build step, no dependencies.

## How to run

Open `index.html` directly, or serve with any static file server, e.g. `npx serve .`.

## Customizing

**Colors** — edit `css/style.css`:
```css
:root {
  --ink: #181c22;
  --accent: #1c7a6e;
  --accent-soft: #e3f1ee;
}
```

**App screen** — the phone mockup screen is an inline SVG illustration; edit or replace it
inside `index.html`'s `.phone-mockup__screen`.

## Folder structure

```
variant-03/
├── index.html / features.html / pricing.html / download.html / contact.html
├── css/style.css, css/responsive.css
├── js/script.js
└── assets/images, assets/icons, assets/fonts
```

Fully independent — copy this folder anywhere and open `index.html`.
