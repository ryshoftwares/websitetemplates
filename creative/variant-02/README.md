# WILDFORM

**Category:** Creative
**Variant:** 02 — Creative Bold (Collage)

A deliberately unconventional marketing site for WILDFORM, an art-direction studio for music,
fashion and culture clients. Paper-and-ink punk-collage color blocking, oversized overlapping
display type, mixed-span grid tiles, rotated/offset image frames and a diagonal marquee replace
the usual uniform card-grid layout.

## Pages

- `index.html` — Home: overlapping hero, diagonal marquee, asymmetric "what we make" collage,
  featured-work spotlight, animated stat counters, pull-quote, tilted CTA banner
- `studio.html` — Studio: founding story, mission, values grid, milestones timeline, team grid
- `services.html` — Services: 6-service mixed-span grid, 4-step process, CTA banner
- `work.html` — Work: category filter (All / Branding / Packaging / Editorial / Digital), 8-project
  collage grid with mixed tile sizes, CTA banner
- `contact.html` — Contact: contact info + validated form

## Features

- Sticky header with scroll shadow
- Mobile slide-down navigation with `aria-expanded` toggle
- Scroll-reveal animations via `IntersectionObserver`
- Animated stat counters
- Cursor-following tilt effect on framed images (`[data-tilt]`, mousemove/mouseleave)
- Vanilla JS category filter on `work.html` with synced `aria-pressed` state
- Client-side contact form validation with inline error states
- Torn-paper section dividers via `clip-path`
- Fully responsive from 320px to 1440px+, collapsing the collage layout to a calm single column
  on smaller screens
- `prefers-reduced-motion` respected throughout — removes all rotation, tilt and marquee motion
  and lays every collage section out in normal stacked flow

## Technology

HTML5 · CSS3 (custom properties, no preprocessor) · Vanilla JavaScript
Fonts loaded from Google Fonts CDN (Unbounded + Archivo). No build step, no dependencies.

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
  --paper: #f3ede1;   /* base background */
  --ink: #14100c;      /* text / borders */
  --accent: #ff3d5a;   /* red-pink */
  --accent-2: #1e3fff; /* blue */
  --accent-3: #ffd400; /* yellow */
}
```

**Content** — all copy lives directly in each `.html` file; there is no CMS or templating
layer. Search for the text you want to change and edit it in place.

**Images** — replace the `https://images.unsplash.com/...` URLs in each page with your own
files under `assets/images/`, then update the `src` attributes to point locally, e.g.
`src="assets/images/hero.jpg"`.

**Work filter** — `work.html` cards carry `data-category="branding|packaging|editorial|digital"`
and the filter buttons carry a matching `data-filter` value. Add a project by duplicating a
`.work-card` article and giving it one of those four category values (or `all` is reserved for
the "show everything" button).

## Folder structure

```
variant-02/
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
