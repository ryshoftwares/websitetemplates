# VitalCare+

**Category:** Healthcare
**Variant:** 02 — Creative Bold

An energetic, modern marketing site for a virtual-first / hybrid telehealth brand: oversized
display type, bold teal and coral accents, rounded shapes and floating call-out badges — kept
light and reassuring rather than dark or garish.

## Pages

- `index.html` — Home: trust indicators, care options, member testimonial
- `about.html` — Our story, values, milestones and leadership
- `services.html` — Telehealth and in-person services offered, plus how to get started
- `doctors.html` — "Care Team": provider profiles across doctors, NPs and therapists
- `appointment.html` — "Book a Visit": contact details + a validated visit request form

## Features

- Sticky header with scroll shadow
- Mobile slide-down navigation
- Scroll-reveal animations via `IntersectionObserver`
- Animated trust-stat counters
- Subtle pointer-tilt effect on the hero image
- Client-side visit request form validation (text, email, phone, date, radio groups, consent checkbox)
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
  --ink: #0b2e2b;      /* deep teal-black */
  --accent: #0ea89a;   /* teal */
  --accent-2: #ff6f59; /* coral */
  --bg: #f4faf8;
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
