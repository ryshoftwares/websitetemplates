# Bright Path Academy

**Category:** Educare
**Variant:** 01 — Premium Modern

A sophisticated marketing site for a private PreK–12 independent school: editorial serif/sans
typography, a warm forest-green and terracotta palette, and generous, gallery-like spacing.

## Pages

- `index.html` — Home
- `about.html` — Our story, mission, history timeline and values
- `courses.html` — Academic course catalog with a subject-area filter
- `faculty.html` — Faculty and leadership profiles
- `contact.html` — Admissions inquiry form and contact details

## Features

- Sticky header with scroll shadow
- Mobile slide-down navigation
- Scroll-reveal animations via `IntersectionObserver`
- Animated stat counters (college acceptance rate, class size, years established)
- Client-side course category filter (STEM, Humanities, Arts, World Languages, Athletics & Wellness)
- Client-side admissions form validation with inline error states
- Fully responsive from 320px to 1440px+
- `prefers-reduced-motion` respected throughout

## Technology

HTML5 · CSS3 (custom properties, no preprocessor) · Vanilla JavaScript
Fonts loaded from Google Fonts CDN (Newsreader + Work Sans). No build step, no dependencies.

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
  --primary: #2c4a3e;   /* deep forest green */
  --accent:  #d97a3d;   /* warm terracotta */
  --background: #faf6ef;
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
