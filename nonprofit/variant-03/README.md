# Bridge Foundation

**Category:** Nonprofit
**Variant:** 03 — Minimal Professional

A calm, restrained site for a policy and advocacy nonprofit: hairline-grid cards, a single
steel-blue accent, and no unnecessary decoration.

## Pages

- `index.html` — Home
- `about.html` — About / history
- `programs.html` — Programs
- `impact.html` — Impact (animated stat counters + stories)
- `donate.html` — Donate (amount selector + mock donation form — **no real payment gateway is connected**, this is a frontend demo only)

## Features

- Sticky header, mobile slide-down navigation
- Scroll-reveal animations + animated stat counters
- Donation amount selector (preset buttons + custom amount)
- Client-side form validation with inline error states
- Fully responsive from 320px to 1440px+, `prefers-reduced-motion` respected

## Technology

HTML5 · CSS3 (custom properties, no preprocessor) · Vanilla JavaScript
Fonts from Google Fonts CDN (Libre Franklin + Inter). No build step, no dependencies.

## How to run

Open `index.html` directly, or serve with any static file server, e.g. `npx serve .`.

## Customizing

**Colors** — edit `css/style.css`:
```css
:root {
  --ink: #17212b;
  --accent: #2a6f97;
  --background: #ffffff;
}
```

**Content** — edit copy directly inside each `.html` file.

**Images** — replace the Unsplash demo URLs with your own files in `assets/images/`.

## Folder structure

```
variant-03/
├── index.html / about.html / programs.html / impact.html / donate.html
├── css/style.css, css/responsive.css
├── js/script.js
└── assets/images, assets/icons, assets/fonts
```

Fully independent — copy this folder anywhere and open `index.html`.
