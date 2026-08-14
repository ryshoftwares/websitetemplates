# Vow & Co.

**Category:** Wedding
**Variant:** 02 — Creative Bold

A bright, playful wedding-planning brand: oversized display type, warm cream background,
pink/blue accent duo, tilted cards and a scrolling keyword marquee.

## Pages

- `index.html` — Home (with a live countdown timer to a showcased wedding date)
- `story.html` — Story
- `packages.html` — Packages
- `gallery.html` — Gallery (masonry grid with a click-to-enlarge lightbox)
- `contact.html` — Contact

## Features

- Sticky header, mobile slide-down navigation
- Live JS countdown timer (days/hours/minutes/seconds)
- Gallery lightbox (Escape or close-button dismissible)
- Scroll-reveal animations + animated stat counters
- Client-side contact form validation with inline error states
- Fully responsive from 320px to 1440px+, `prefers-reduced-motion` respected

## Technology

HTML5 · CSS3 (custom properties, no preprocessor) · Vanilla JavaScript
Fonts from Google Fonts CDN (Unbounded + Sora). No build step, no dependencies.

## How to run

Open `index.html` directly, or serve with any static file server, e.g. `npx serve .`.

## Customizing

**Colors** — edit `css/style.css`:
```css
:root {
  --bg: #fff8f0;
  --accent: #ff4d6d;
  --accent-2: #3a86ff;
}
```

**Countdown date** — edit the target date in `js/script.js` (search for `new Date(`).

**Content** — edit copy directly inside each `.html` file.

**Images** — replace the Unsplash demo URLs with your own files in `assets/images/`.

## Folder structure

```
variant-02/
├── index.html / story.html / packages.html / gallery.html / contact.html
├── css/style.css, css/responsive.css
├── js/script.js
└── assets/images, assets/icons, assets/fonts
```

Fully independent — copy this folder anywhere and open `index.html`.
