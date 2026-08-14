# Oakridge Institute

**Category:** Educare
**Variant:** 03 — Minimal Professional

A restrained, trustworthy marketing site for a traditional higher-education institute: a
Libre Baskerville and Public Sans pairing, a navy-and-brass palette, and a clean structured
grid built for institutional credibility.

## Pages

- `index.html` — Home
- `about.html` — Our history, mission and founding timeline
- `courses.html` — Undergraduate and graduate program catalog with an area-of-study filter
- `faculty.html` — Faculty profiles
- `contact.html` — Admissions request-information form and contact details

## Features

- Sticky header with a persistent border
- Mobile slide-down navigation
- Scroll-reveal animations via `IntersectionObserver`
- Animated stat counters (graduation rate, student-faculty ratio, years founded, alumni)
- Client-side program filter (Arts & Humanities, Sciences, Business, Graduate Programs)
- Client-side admissions form validation with inline error states
- Fully responsive from 320px to 1440px+
- `prefers-reduced-motion` respected throughout

## Technology

HTML5 · CSS3 (custom properties, no preprocessor) · Vanilla JavaScript
Fonts loaded from Google Fonts CDN (Libre Baskerville + Public Sans). No build step, no dependencies.

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
  --ink: #16233c;     /* deep navy */
  --accent: #a9762f;  /* brass gold */
  --background: #ffffff;
}
```

**Content** — all copy lives directly in each `.html` file; there is no CMS or templating
layer. Search for the text you want to change and edit it in place.

**Images** — replace the `https://images.unsplash.com/...` URLs in each page with your own
files under `assets/images/`, then update the `src` attributes to point locally, e.g.
`src="assets/images/hero.jpg"`.

## Folder structure

```
variant-03/
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
