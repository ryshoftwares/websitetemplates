# Ledger Labs

**Category:** Finance
**Variant:** 02 — Creative Bold

A bold marketing site for a modern fintech startup: oversized display type, an asymmetric
tilted grid, and a dark indigo-and-mint palette that still reads as credible for a financial
product, not just flashy.

## Pages

- `index.html` — Home, with trust indicators, animated stats and an account-opening CTA
- `about.html` — Founding story, principles, milestones and leadership
- `services.html` — Business Banking, Treasury & Cash Management, Corporate Cards & Expense Management, Payments & Payouts API
- `insights.html` — Articles on treasury automation, B2B payments and spend management
- `contact.html` — Contact details and a validated inquiry form

## Features

- Sticky header with scroll shadow
- Mobile slide-down navigation
- Scroll-reveal animations via `IntersectionObserver`
- Animated stat counters (businesses served, payment volume, retention, years operating)
- Client-side contact form validation with inline error states
- Fully responsive from 320px to 1440px+
- `prefers-reduced-motion` respected throughout

## Technology

HTML5 · CSS3 (custom properties, no preprocessor) · Vanilla JavaScript
Fonts loaded from Google Fonts CDN (Sora + Plus Jakarta Sans). No build step, no dependencies.

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
  --bg: #0b1120;      /* deep indigo background */
  --accent: #46e3c2;  /* mint accent */
  --accent-2: #8d7bff; /* violet secondary accent */
}
```

**Content** — all copy lives directly in each `.html` file; there is no CMS or templating
layer. Search for the text you want to change and edit it in place.

**Images** — replace the `https://images.unsplash.com/...` URLs in each page with your own
files under `assets/images/`, then update the `src` attributes to point locally, e.g.
`src="assets/images/hero.jpg"`.

## Folder structure

```
variant-02/
├── index.html
├── about.html
├── services.html
├── insights.html
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
