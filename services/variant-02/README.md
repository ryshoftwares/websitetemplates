# FIXPOINT

**Category:** Services
**Variant:** 02 — Creative Bold

A loud, energetic marketing site for an on-demand repair and maintenance dispatch network: oversized
display type, tilted card grids, floating rotated badges, a looping marquee ticker, and a vivid orange
accent on a warm near-black background.

## Pages

- `index.html` — Home: hero, ticker, process, service area/availability, featured job, stats, testimonial
- `about.html` — About: founding story, values, team, milestones timeline
- `services.html` — Six repair categories with flat-rate pricing hints and a pricing FAQ
- `projects.html` — Grid of six recent completed jobs
- `contact.html` — Booking/quote-request form with client-side validation

## Features

- Sticky header with scroll shadow
- Mobile slide-down navigation
- Scroll-reveal animations via `IntersectionObserver`
- Animated stat counters
- Pointer-driven tilt interaction on the hero art
- Looping marquee ticker (respects `prefers-reduced-motion`)
- Client-side booking form validation with inline error states and a success message
- Fully responsive from 320px to 1440px+

## Technology

HTML5 · CSS3 (custom properties, no preprocessor) · Vanilla JavaScript
Fonts loaded from Google Fonts CDN (Unbounded + Plus Jakarta Sans). No build step, no dependencies.

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
  --bg: #12100f;       /* warm near-black */
  --accent: #ff5a1f;   /* signal orange */
  --accent-2: #17d6c7; /* electric teal */
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
├── projects.html
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
