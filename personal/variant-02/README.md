# JOON.

**Category:** Personal
**Variant:** 02 — Creative Bold

A loud, personal portfolio for illustrator and motion designer Joon Park: oversized black
display type, dark canvas, hot-pink/yellow accent duo, tilted cards.

## Pages

- `index.html` — Home
- `about.html` — About
- `skills.html` — Skills (proficiency bars + tool chip cloud)
- `portfolio.html` — Portfolio (project grid)
- `contact.html` — Contact

## Features

- Sticky header with scroll shadow, mobile slide-down navigation
- Scroll-reveal animations, animated stat counters, animated skill-proficiency bars
- Client-side contact form validation with inline error states
- Fully responsive from 320px to 1440px+, `prefers-reduced-motion` respected

## Technology

HTML5 · CSS3 (custom properties, no preprocessor) · Vanilla JavaScript
Fonts from Google Fonts CDN (Archivo Black + Space Grotesk). No build step, no dependencies.

## How to run

Open `index.html` directly, or serve with any static file server, e.g. `npx serve .`.

## Customizing

**Colors** — edit `css/style.css`:
```css
:root {
  --bg: #0e0e10;
  --accent: #ff3d7a;
  --accent-2: #ffd23f;
}
```

**Content** — edit copy directly inside each `.html` file.

**Images** — replace the Unsplash demo URLs with your own files in `assets/images/`.

## Folder structure

```
variant-02/
├── index.html / about.html / skills.html / portfolio.html / contact.html
├── css/style.css, css/responsive.css
├── js/script.js
└── assets/images, assets/icons, assets/fonts
```

Fully independent — copy this folder anywhere and open `index.html`.
