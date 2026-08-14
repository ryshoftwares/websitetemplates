# Maison Ives

**Category:** Fashion
**Variant:** 01 — Premium Modern

An editorial luxury site for a Paris ready-to-wear house: large serif display type,
deep burgundy accent on warm paper background, refined product and lookbook grids.

## Pages

- `index.html` — Home
- `collections.html` — Collections
- `products.html` — Products (wishlist heart-toggle)
- `lookbook.html` — Lookbook (masonry grid + prev/next lightbox, keyboard arrows + Escape)
- `contact.html` — Contact

## Features

- Sticky header with scroll shadow, mobile slide-down navigation
- Scroll-reveal animations via `IntersectionObserver`
- Full lightbox with previous/next navigation, keyboard support, and focus return to trigger
- Product wishlist heart-toggle
- Client-side contact form validation with inline error states
- Fully responsive from 320px to 1440px+, `prefers-reduced-motion` respected

## Technology

HTML5 · CSS3 (custom properties, no preprocessor) · Vanilla JavaScript
Fonts from Google Fonts CDN (Bodoni Moda + Jost). No build step, no dependencies.

## How to run

Open `index.html` directly, or serve with any static file server, e.g. `npx serve .`.

## Customizing

**Colors** — edit the CSS variables at the top of `css/style.css`.

**Content** — edit copy directly inside each `.html` file.

**Images** — replace the Unsplash demo URLs with your own files in `assets/images/`.

## Folder structure

```
variant-01/
├── index.html / collections.html / products.html / lookbook.html / contact.html
├── css/style.css, css/responsive.css
├── js/script.js
└── assets/images, assets/icons, assets/fonts
```

Fully independent — copy this folder anywhere and open `index.html`.
