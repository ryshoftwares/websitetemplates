# RAW EDIT

**Category:** Fashion
**Variant:** 02 — Creative Bold

The most visually unconventional variant in this library — an experimental streetwear
label: condensed all-caps display type, near-black canvas, lime/red accent duo, asymmetric
collage grids.

## Pages

- `index.html` — Home
- `collections.html` — Collections
- `products.html` — Products (wishlist heart-toggle, `localStorage`)
- `lookbook.html` — Lookbook (masonry grid + prev/next lightbox, keyboard arrows + Escape)
- `contact.html` — Contact

## Features

- Sticky header with scroll shadow, mobile slide-down navigation
- Scroll-reveal animations
- Full lightbox with previous/next navigation, keyboard support, focus return to trigger
- Product wishlist heart-toggle
- Client-side contact form validation with inline error states
- Fully responsive from 320px to 1440px+, `prefers-reduced-motion` respected

## Technology

HTML5 · CSS3 (custom properties, no preprocessor) · Vanilla JavaScript
Fonts from Google Fonts CDN (Anton + Archivo). No build step, no dependencies.

## How to run

Open `index.html` directly, or serve with any static file server, e.g. `npx serve .`.

## Customizing

**Colors** — edit `css/style.css`:
```css
:root {
  --bg: #0d0d0d;
  --accent: #d4ff3f;
  --accent-2: #ff3d3d;
}
```

**Content** — edit copy directly inside each `.html` file.

**Images** — replace the Unsplash demo URLs with your own files in `assets/images/`.

## Folder structure

```
variant-02/
├── index.html / collections.html / products.html / lookbook.html / contact.html
├── css/style.css, css/responsive.css
├── js/script.js
└── assets/images, assets/icons, assets/fonts
```

Fully independent — copy this folder anywhere and open `index.html`.
