# PULSE

**Category:** Entertainment
**Variant:** 02 — Creative Bold

A high-energy site for a live-music and festival events brand: oversized condensed display
type, dark canvas, magenta/cyan accent duo, tilted cards and a scrolling keyword marquee.

## Pages

- `index.html` — Home
- `about.html` — About / story, timeline
- `shows.html` — Shows (upcoming events listing)
- `media.html` — Media (video-style recap grid + press)
- `contact.html` — Contact

## Features

- Sticky header with scroll shadow, mobile slide-down navigation
- Infinite CSS scrolling keyword marquee
- Scroll-reveal animations, animated stat counters
- Media grid styled as video thumbnails (play-button overlay)
- Client-side contact form validation with inline error states
- Fully responsive from 320px to 1440px+, `prefers-reduced-motion` respected

## Technology

HTML5 · CSS3 (custom properties, no preprocessor) · Vanilla JavaScript
Fonts from Google Fonts CDN (Bebas Neue + Inter). No build step, no dependencies.

## How to run

Open `index.html` directly, or serve with any static file server, e.g. `npx serve .`.

## Customizing

**Colors** — edit `css/style.css`:
```css
:root {
  --bg: #0a0a12;
  --accent: #ff2e93;
  --accent-2: #2ee6ff;
}
```

**Content** — edit copy directly inside each `.html` file.

**Images** — replace the Unsplash demo URLs with your own files in `assets/images/`.

## Folder structure

```
variant-02/
├── index.html / about.html / shows.html / media.html / contact.html
├── css/style.css, css/responsive.css
├── js/script.js
└── assets/images, assets/icons, assets/fonts
```

Fully independent — copy this folder anywhere and open `index.html`.
