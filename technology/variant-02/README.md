# FluxLabs

**Category:** Technology
**Variant:** 02 — Creative Bold

An experimental, high-energy marketing site for a creative technology studio: oversized
type, dark canvas, neon-lime accent, tilted cards and a scrolling keyword marquee.

## Pages

- `index.html` — Home
- `about.html` — About / story, principles, timeline, leadership
- `solutions.html` — Services breakdown + process
- `case-studies.html` — Client results grid
- `contact.html` — Contact details + validated form

## Features

- Sticky header, mobile slide-down navigation
- Infinite CSS scrolling keyword marquee
- Scroll-reveal animations + animated stat counters
- Pointer-driven tilt effect on the hero image
- Client-side contact form validation with inline error states
- Fully responsive from 320px to 1440px+, `prefers-reduced-motion` respected

## Technology

HTML5 · CSS3 (custom properties, no preprocessor) · Vanilla JavaScript
Fonts from Google Fonts CDN (Space Grotesk + Inter). No build step, no dependencies.

## How to run

Open `index.html` directly, or serve with any static file server, e.g. `npx serve .`.

## Customizing

**Colors** — edit `css/style.css`:
```css
:root {
  --bg: #0d0d12;      /* canvas */
  --accent: #ddff00;  /* neon lime */
  --accent-2: #7c5cff;
}
```

**Content** — edit copy directly inside each `.html` file.

**Images** — replace the Unsplash demo URLs with your own files in `assets/images/`.

## Folder structure

```
variant-02/
├── index.html / about.html / solutions.html / case-studies.html / contact.html
├── css/style.css, css/responsive.css
├── js/script.js
└── assets/images, assets/icons, assets/fonts
```

Fully independent — copy this folder anywhere and open `index.html`.
