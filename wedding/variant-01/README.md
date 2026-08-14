# EverAfter

**Category:** Wedding
**Variant:** 01 — Luxury Editorial

A romantic, editorial marketing site for a full-service wedding planning and design studio:
large bridal photography, refined serif display typography, warm champagne-gold accent on deep
wine ink, and generous, magazine-style spacing.

## Pages

- `index.html` — Home: hero, live countdown to a showcase wedding, signature venues, services,
  featured real wedding, stats, testimonial and closing CTA
- `story.html` — Our Story: founding story, philosophy, milestones timeline, planner team grid
- `packages.html` — Packages &amp; pricing: three tiers (Elopement, Signature Day, Full Estate
  Wedding), add-ons and FAQ
- `gallery.html` — Gallery: filterable ceremony / reception / details masonry grid with a
  click-to-enlarge lightbox
- `contact.html` — Contact &amp; inquiry: studio contact details plus a validated inquiry form

## Features

- Sticky header with scroll shadow
- Mobile slide-down navigation that collapses below ~900px
- Scroll-reveal animations via `IntersectionObserver`
- Live countdown timer (days / hours / minutes / seconds) to a fixed showcase wedding date
- Animated stat counters
- Filterable photo gallery with a fully keyboard-operable lightbox (Escape, backdrop click,
  close button, and focus restoration on close)
- Client-side contact form validation with inline error states and a success banner
- Fully responsive from 320px to 1440px+
- `prefers-reduced-motion` respected throughout

## Technology

HTML5 · CSS3 (custom properties, no preprocessor) · Vanilla JavaScript
Fonts loaded from Google Fonts CDN (Playfair Display + Jost). No build step, no dependencies.

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
  --ink: #2b1620;       /* deep wine ink */
  --accent: #a9834b;    /* champagne gold */
  --background: #faf5ef; /* warm ivory */
}
```

**Content** — all copy lives directly in each `.html` file; there is no CMS or templating
layer. Search for the text you want to change and edit it in place. The countdown target date
lives in `js/script.js` (`new Date("2027-06-12T16:00:00")`).

**Images** — replace the `https://images.unsplash.com/...` URLs in each page with your own
files under `assets/images/`, then update the `src` (and `data-full`, for gallery images)
attributes to point locally, e.g. `src="assets/images/hero.jpg"`.

## Folder structure

```
variant-01/
├── index.html
├── story.html
├── packages.html
├── gallery.html
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
