# The Goods Shop

**Category:** Shops
**Variant:** 03 — Minimal Professional

A restrained online shop for home essentials: lighting, kitchen &amp; table, bed &amp;
bath, decor and outdoor. Hairline borders, a single quiet accent color, generous
whitespace and small, calm type — no gradients, no heavy shadows.

## Pages

- `index.html` — Home (hero, shop-by-category, featured products, stats, testimonial, newsletter)
- `categories.html` — Browse all 5 departments as image tiles
- `products.html` — Full shop grid with search, category/price filters, sort, wishlist, add-to-cart
- `offers.html` — Active discount codes (copy-to-clipboard), clearance callouts, newsletter signup
- `contact.html` — Support contact info, FAQ, and contact form

## Features

- Sticky header with scroll border, mobile slide-down navigation, cart icon with persisted count
- Live product search + category/price checkbox filters + sort (featured/newest/price) — all client-side
- Wishlist heart toggle persisted per product via `localStorage`
- Cart count persisted via `localStorage`, bumps visually on add
- Offer codes copy to clipboard with confirmation state
- Newsletter and contact forms with inline client-side validation
- Scroll-reveal animations + animated stat counters, `prefers-reduced-motion` respected
- Fully responsive from 320px to 1440px+

## Technology

HTML5 · CSS3 (custom properties, no preprocessor) · Vanilla JavaScript
Fonts from Google Fonts CDN (Manrope + Work Sans). Product photography hotlinked from Unsplash.
No build step, no dependencies, no backend — cart/wishlist are UI-only via `localStorage`.

## How to run

Open `index.html` directly, or serve with any static file server, e.g. `npx serve .`.

## Customizing

**Colors** — edit `css/style.css`:
```css
:root {
  --ink: #1c1c1a;
  --accent: #4c5b73;
  --background: #fbfaf8;
}
```

**Products** — each `.product-card` in `products.html` carries `data-name`, `data-category`,
`data-price`, `data-date` and `data-order` attributes used by the filter/sort logic in `js/script.js`.

## Folder structure

```
variant-03/
├── index.html / categories.html / products.html / offers.html / contact.html
├── css/style.css, css/responsive.css
├── js/script.js
└── assets/images, assets/icons, assets/fonts
```

Fully independent — copy this folder anywhere and open `index.html`.
