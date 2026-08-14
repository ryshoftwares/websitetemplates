# Basic Goods

**Category:** Retail
**Variant:** 03 — Minimal Professional

A clean, no-frills storefront for a minimalist essentials apparel brand: hairline-grid
cards, single olive accent, generous whitespace.

## Pages

- `index.html` — Home
- `shop.html` — Shop (search, category/price filters, sort, wishlist)
- `product.html` — Product detail (gallery, size selector, quantity, add to cart)
- `collections.html` — Collections
- `contact.html` — Contact

## Features

- Real, working frontend e-commerce interactions (no backend): search/filter/sort, wishlist
  toggle (`localStorage`), gallery thumbnail swap, quantity stepper, add-to-cart with a
  persistent cart-count badge (`localStorage`)
- Sticky header, mobile slide-down navigation, scroll-reveal animations
- Client-side contact form validation with inline error states
- Fully responsive from 320px to 1440px+, `prefers-reduced-motion` respected

## Technology

HTML5 · CSS3 (custom properties, no preprocessor) · Vanilla JavaScript
Fonts from Google Fonts CDN (Inter). No build step, no dependencies.

## How to run

Open `index.html` directly, or serve with any static file server, e.g. `npx serve .`.

## Customizing

**Colors** — edit `css/style.css`:
```css
:root {
  --ink: #17181a;
  --accent: #55603e;
  --background: #ffffff;
}
```

**Products** — data lives directly in each `.html` file.

**Images** — replace the Unsplash demo URLs with your own files in `assets/images/`.

## Folder structure

```
variant-03/
├── index.html / shop.html / product.html / collections.html / contact.html
├── css/style.css, css/responsive.css
├── js/script.js
└── assets/images, assets/icons, assets/fonts
```

Fully independent — copy this folder anywhere and open `index.html`.
