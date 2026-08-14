# Reel Co.

**Category:** Entertainment
**Variant:** 03 — Minimal Professional

A clean, restrained site for a film and media production company: hairline-grid cards, a
single deep-crimson accent, condensed display type.

## Pages

- `index.html` — Home
- `about.html` — About / process, milestones
- `shows.html` — Shows (screenings/premieres listing)
- `media.html` — Media (video-style thumbnail grid + press)
- `contact.html` — Contact

## Features

- Sticky header, mobile slide-down navigation
- Scroll-reveal animations, animated stat counters
- Media grid styled as video thumbnails (play-button overlay)
- Client-side contact form validation with inline error states
- Fully responsive from 320px to 1440px+, `prefers-reduced-motion` respected

## Technology

HTML5 · CSS3 (custom properties, no preprocessor) · Vanilla JavaScript
Fonts from Google Fonts CDN (Oswald + Inter). No build step, no dependencies.

## How to run

Open `index.html` directly, or serve with any static file server, e.g. `npx serve .`.

## Customizing

**Colors** — edit `css/style.css`:
```css
:root {
  --ink: #1c1c1e;
  --accent: #8b2635;
  --background: #ffffff;
}
```

**Content** — edit copy directly inside each `.html` file.

**Images** — replace the Unsplash demo URLs with your own files in `assets/images/`.

## Folder structure

```
variant-03/
├── index.html / about.html / shows.html / media.html / contact.html
├── css/style.css, css/responsive.css
├── js/script.js
└── assets/images, assets/icons, assets/fonts
```

Fully independent — copy this folder anywhere and open `index.html`.
