# POP & CO

**Category:** Retail
**Variant:** 02 — Creative Bold

A loud, colorful storefront for a youth apparel/accessories brand: rounded playful display
type, hot-pink/electric-blue/yellow accent trio, tilted hero art.

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
Fonts from Google Fonts CDN (Fredoka + Nunito Sans). No build step, no dependencies.

## How to run

Open `index.html` directly, or serve with any static file server, e.g. `npx serve .`.

## Customizing

**Colors** — edit `css/style.css`:
```css
:root {
  --bg: #fffaf3;
  --accent: #ff3d78;
  --accent-2: #2f6fff;
}
```

**Products** — data lives directly in each `.html` file (name, price, `data-*` attributes
used by shop filters/sort).

**Images** — replace the Unsplash demo URLs with your own files in `assets/images/`.

## Folder structure

```
variant-02/
├── index.html / shop.html / product.html / collections.html / contact.html
├── css/style.css, css/responsive.css
├── js/script.js
└── assets/images, assets/icons, assets/fonts
```

Fully independent — copy this folder anywhere and open `index.html`.
