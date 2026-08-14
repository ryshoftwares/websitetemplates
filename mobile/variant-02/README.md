# Zapp

**Category:** Mobile App
**Variant:** 02 — Creative Bold

A high-energy landing site for a social/utility app: rounded playful display type, deep
violet canvas, pink/purple/yellow accent trio, tilted phone mockup with an inline-SVG chat
screen.

## Pages

- `index.html` — Home (phone mockup, store badges, feature teasers, stats)
- `features.html` — Features
- `pricing.html` — Pricing (monthly/yearly toggle)
- `download.html` — Download (store badges + QR code graphic + platform requirements)
- `contact.html` — Contact

## Features

- Sticky header with scroll shadow, mobile slide-down navigation
- Infinite CSS scrolling keyword marquee
- Scroll-reveal animations + animated stat counters
- Working monthly/yearly pricing toggle switch
- Client-side contact form validation with inline error states
- Fully responsive from 320px to 1440px+, `prefers-reduced-motion` respected

## Technology

HTML5 · CSS3 (custom properties, no preprocessor) · Vanilla JavaScript
Fonts from Google Fonts CDN (Baloo 2 + Inter). No build step, no dependencies.

## How to run

Open `index.html` directly, or serve with any static file server, e.g. `npx serve .`.

## Customizing

**Colors** — edit `css/style.css`:
```css
:root {
  --bg: #0f0a1f;
  --accent: #ff2e9c;
  --accent-2: #7c4dff;
}
```

**App screen** — the phone mockup screen is an inline SVG illustration; edit or replace it
inside `index.html`'s `.phone-mockup__screen`.

## Folder structure

```
variant-02/
├── index.html / features.html / pricing.html / download.html / contact.html
├── css/style.css, css/responsive.css
├── js/script.js
└── assets/images, assets/icons, assets/fonts
```

Fully independent — copy this folder anywhere and open `index.html`.
