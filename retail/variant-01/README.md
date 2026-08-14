# Marché

**Category:** Retail
**Variant:** 01 — Premium Modern

An upscale, editorial storefront for a home-and-lifestyle marketplace: elegant serif
typography, warm terracotta accent, refined product cards.

## Pages

- `index.html` — Home
- `shop.html` — Shop (search, category/price filters, sort, wishlist)
- `product.html` — Product detail (gallery, variant selector, quantity, add to cart)
- `collections.html` — Collections
- `contact.html` — Contact

## Features

- Real, working frontend e-commerce interactions (no backend):
  - Live search + category/price checkboxes + sort (Featured / Price / Newest) on `shop.html`
  - Wishlist heart toggle, persisted per product in `localStorage`
  - Product gallery thumbnail swap, variant selector, quantity stepper, add-to-cart with a
    persistent cart-count badge in the header (`localStorage`, resets if you clear site data)
- Sticky header, mobile slide-down navigation, scroll-reveal animations
- Client-side contact form validation with inline error states
- Fully responsive from 320px to 1440px+, `prefers-reduced-motion` respected

## Technology

HTML5 · CSS3 (custom properties, no preprocessor) · Vanilla JavaScript
Fonts from Google Fonts CDN (Playfair Display + Karla). No build step, no dependencies.

## How to run

Open `index.html` directly, or serve with any static file server, e.g. `npx serve .`.

## Customizing

**Colors** — edit `css/style.css`:
```css
:root {
  --ink: #2a2521;
  --accent: #b8613d;
  --background: #faf6ef;
}
```

**Products** — each product card and detail page has its data written directly in the
`.html` files (name, price, image, `data-*` attributes used by the shop filters/sort).

**Images** — replace the Unsplash demo URLs with your own files in `assets/images/`.

## Folder structure

```
variant-01/
├── index.html / shop.html / product.html / collections.html / contact.html
├── css/style.css, css/responsive.css
├── js/script.js
└── assets/images, assets/icons, assets/fonts
```

Fully independent — copy this folder anywhere and open `index.html`.
