# Meridian Wealth

**Category:** Finance
**Variant:** 01 — Premium Modern

A sophisticated marketing site for a private wealth advisory firm: confident editorial typography,
a navy-and-brass palette, and generous spacing that reads as trustworthy rather than flashy.

## Pages

- `index.html` — Home, with trust indicators, animated stats and a consultation CTA
- `about.html` — Firm story, guiding principles, milestones and leadership
- `services.html` — Private Wealth Management, Retirement & Legacy Planning, Family Office Services, Trust & Estate Advisory
- `insights.html` — Advisory articles on markets, estate planning, tax and portfolio strategy
- `contact.html` — Office details and a validated consultation request form

## Features

- Sticky header with scroll shadow
- Mobile slide-down navigation
- Scroll-reveal animations via `IntersectionObserver`
- Animated stat counters (assets under advisement, years in business, retention, advisors)
- Client-side consultation form validation with inline error states
- Fully responsive from 320px to 1440px+
- `prefers-reduced-motion` respected throughout

## Technology

HTML5 · CSS3 (custom properties, no preprocessor) · Vanilla JavaScript
Fonts loaded from Google Fonts CDN (Playfair Display + Work Sans). No build step, no dependencies.

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
  --primary: #101b2f;   /* deep navy */
  --accent:  #a67c3d;   /* warm brass */
  --background: #f7f5f0;
}
```

**Content** — all copy lives directly in each `.html` file; there is no CMS or templating
layer. Search for the text you want to change and edit it in place.

**Images** — replace the `https://images.unsplash.com/...` URLs in each page with your own
files under `assets/images/`, then update the `src` attributes to point locally, e.g.
`src="assets/images/hero.jpg"`.

## Folder structure

```
variant-01/
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
