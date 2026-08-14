# Atelier Noir

**Category:** Creative
**Variant:** 01 — Premium Modern

An elegant editorial marketing site for a design studio: large serif display type, a warm
terracotta accent on a warm paper background, and generous, magazine-like spacing.

## Pages

- `index.html` — Home
- `studio.html` — Studio / story, philosophy, values, timeline, team
- `services.html` — Services breakdown + process
- `work.html` — Selected work grid with a client-side category filter
- `contact.html` — Contact details + validated form

## Features

- Sticky header with scroll shadow
- Mobile slide-down navigation
- Scroll-reveal animations via `IntersectionObserver`
- Animated stat counters
- Client-side project filter on `work.html` (All / Branding / Packaging / Editorial / Digital), no page reload
- Client-side contact form validation with inline error states
- Fully responsive from 320px to 1440px+
- `prefers-reduced-motion` respected throughout

## Technology

HTML5 · CSS3 (custom properties, no preprocessor) · Vanilla JavaScript
Fonts loaded from Google Fonts CDN (Bodoni Moda + Jost). No build step, no dependencies.

## How to run

Open `index.html` directly in a browser, or serve the folder with any static file server:

```
npx serve .
```

No installation is required for the site itself — `npx serve` is just one convenient way to
preview it over HTTP instead of `file://`.

## Customizing

**Colors** — edit the CSS variables at the top of `css/style.css`:

```css
:root {
  --ink: #1c1916;      /* near-black ink */
  --accent: #a8462d;   /* terracotta accent */
  --paper: #f6f1e8;    /* warm paper background */
}
```

**Content** — all copy lives directly in each `.html` file; there is no CMS or templating
layer. Search for the text you want to change and edit it in place.

**Images** — replace the `https://images.unsplash.com/...` URLs in each page with your own
files under `assets/images/`, then update the `src` attributes to point locally, e.g.
`src="assets/images/hero.jpg"`.

**Work filter** — each `.work-card` in `work.html` carries a `data-category` attribute
(`branding`, `packaging`, `editorial` or `digital`) that must match a `.filter-btn`'s
`data-filter` value for the filter logic in `js/script.js` to pick it up.

## Folder structure

```
variant-01/
├── index.html
├── studio.html
├── services.html
├── work.html
├── contact.html
├── css/
│   ├── style.css
│   └── responsive.css
├── js/
│   └── script.js
└── assets/
    ├── images/
    ├── icons/
    └── fonts/
```

This variant is fully independent — copy this folder anywhere and open `index.html`.
