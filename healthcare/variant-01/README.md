# Wellspring Health

**Category:** Healthcare
**Variant:** 01 — Premium Modern

A confident, editorial marketing site for a multi-specialty clinic: warm ivory backgrounds, a deep
forest-teal primary color, a terracotta accent, and generous, calm spacing throughout.

## Pages

- `index.html` — Home: trust indicators, services overview, patient testimonial
- `about.html` — Our story, values, milestones and leadership
- `services.html` — Departments and services offered, plus how referrals work
- `doctors.html` — Provider profiles: specialty, credentials and short bios
- `appointment.html` — Contact details + a validated appointment request form

## Features

- Sticky header with scroll shadow
- Mobile slide-down navigation
- Scroll-reveal animations via `IntersectionObserver`
- Animated trust-stat counters
- Client-side appointment form validation (text, email, phone, date, radio groups, consent checkbox)
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
  --primary: #163832;   /* deep forest teal */
  --accent:  #c17a52;   /* terracotta clay */
  --background: #f9f7f2;
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
├── doctors.html
├── appointment.html
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

This variant is fully independent — copy this folder anywhere and open `index.html`. It shares no
CSS, JavaScript or assets with any other variant or category in this library.

## Content note

All copy is written to be general, factual and reassuring. No medical outcomes, cure rates or
treatment guarantees are claimed anywhere on the site.
