# Studio Wear

**Category:** Fashion
**Variant:** 03 — Minimal Professional

A clean, quiet site for a quality-basics apparel brand: light serif display type, single
terracotta accent, generous whitespace.

## Pages

- `index.html` — Home
- `collections.html` — Collections
- `products.html` — Products (wishlist heart-toggle, `localStorage`)
- `lookbook.html` — Lookbook (masonry grid + prev/next lightbox, keyboard arrows + Escape)
- `contact.html` — Contact

## Features

- Sticky header, mobile slide-down navigation, scroll-reveal animations
- Full lightbox with previous/next navigation, keyboard support, focus return to trigger
- Product wishlist heart-toggle
- Client-side contact form validation with inline error states
- Fully responsive from 320px to 1440px+, `prefers-reduced-motion` respected

## Technology

HTML5 · CSS3 (custom properties, no preprocessor) · Vanilla JavaScript
Fonts from Google Fonts CDN (Crimson Pro + Inter). No build step, no dependencies.

## How to run

Open `index.html` directly, or serve with any static file server, e.g. `npx serve .`.

## Customizing

**Colors** — edit `css/style.css`:
```css
:root {
  --ink: #201c1a;
  --accent: #a8623d;
  --background: #ffffff;
}
```

**Content** — edit copy directly inside each `.html` file.

**Images** — replace the Unsplash demo URLs with your own files in `assets/images/`.

## Folder structure

```
variant-03/
├── index.html / collections.html / products.html / lookbook.html / contact.html
├── css/style.css, css/responsive.css
├── js/script.js
└── assets/images, assets/icons, assets/fonts
```

Fully independent — copy this folder anywhere and open `index.html`.
