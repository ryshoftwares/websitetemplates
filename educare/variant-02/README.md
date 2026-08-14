# LEARNLAB

**Category:** Educare
**Variant:** 02 — Creative Bold

An energetic marketing site for an online career bootcamp platform: oversized Sora display
type, an asymmetric tilted grid, and a bold coral-on-navy palette with an electric-blue accent.

## Pages

- `index.html` — Home
- `about.html` — Our story, mission and milestone timeline
- `courses.html` — Program catalog with pricing and a subject-area filter
- `faculty.html` — Instructor profiles
- `contact.html` — Enrollment application form and contact details

## Features

- Sticky header with scroll shadow
- Mobile slide-down navigation
- Scroll-reveal animations via `IntersectionObserver`
- Animated stat counters (placement rate, salary increase, graduates, years running)
- Client-side program category filter (Development, Data & AI, Design, Business)
- Client-side enrollment form validation with inline error states
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
  --bg: #0b0e14;        /* near-black navy */
  --accent: #ff5b3a;    /* bold coral-orange */
  --accent-2: #29d3ff;  /* electric blue */
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
├── courses.html
├── faculty.html
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
