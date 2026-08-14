# Forge & Co.

**Category:** Corporate
**Variant:** 02 — Creative Bold

A punchy, high-contrast site for a "challenger" consultancy: oversized display type, dark
canvas, orange/gold accent duo, tilted cards and a scrolling keyword marquee.

## Pages

- `index.html` — Home
- `about.html` — About / values, timeline, leadership
- `services.html` — Services breakdown + process
- `case-studies.html` — Client results grid
- `contact.html` — Contact details + validated form

## Features

- Sticky header with scroll shadow, mobile slide-down navigation
- Infinite CSS scrolling keyword marquee
- Scroll-reveal animations + animated stat counters
- Client-side contact form validation with inline error states
- Fully responsive from 320px to 1440px+, `prefers-reduced-motion` respected

## Technology

HTML5 · CSS3 (custom properties, no preprocessor) · Vanilla JavaScript
Fonts from Google Fonts CDN (Unbounded + Plus Jakarta Sans). No build step, no dependencies.

## How to run

Open `index.html` directly, or serve with any static file server, e.g. `npx serve .`.

## Customizing

**Colors** — edit `css/style.css`:
```css
:root {
  --bg: #141110;
  --accent: #ff4d1f;
  --accent-2: #ffb100;
}
```

**Content** — edit copy directly inside each `.html` file.

**Images** — replace the Unsplash demo URLs with your own files in `assets/images/`.

## Folder structure

```
variant-02/
├── index.html / about.html / services.html / case-studies.html / contact.html
├── css/style.css, css/responsive.css
├── js/script.js
└── assets/images, assets/icons, assets/fonts
```

Fully independent — copy this folder anywhere and open `index.html`.
