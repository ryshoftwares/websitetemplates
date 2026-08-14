# The Wedding Studio

**Category:** Wedding
**Variant:** 03 — Minimal Professional

A calm, restrained site for a wedding-planning studio: warm cream background, sage-green
accent, hairline borders and generous whitespace.

## Pages

- `index.html` — Home (with a live countdown timer to a showcased wedding date)
- `story.html` — Story
- `packages.html` — Packages (pricing tiers + FAQ accordion)
- `gallery.html` — Gallery (filterable masonry grid with a click-to-enlarge lightbox)
- `contact.html` — Contact

## Features

- Sticky header, mobile slide-down navigation
- Live JS countdown timer (days/hours/minutes/seconds)
- Gallery category filter + lightbox (Escape or close-button dismissible, focus returns to trigger)
- Native `<details>`-based FAQ accordion
- Client-side contact form validation with inline error states
- Fully responsive from 320px to 1440px+, `prefers-reduced-motion` respected

## Technology

HTML5 · CSS3 (custom properties, no preprocessor) · Vanilla JavaScript
Fonts from Google Fonts CDN (Newsreader + Work Sans). No build step, no dependencies.

## How to run

Open `index.html` directly, or serve with any static file server, e.g. `npx serve .`.

## Customizing

**Colors** — edit `css/style.css`:
```css
:root {
  --ink: #2f2b28;
  --accent: #7d8c6b;
  --background: #faf8f5;
}
```

**Countdown date** — edit the target date in `js/script.js` (search for `new Date(`).

**Content** — edit copy directly inside each `.html` file.

**Images** — replace the Unsplash demo URLs with your own files in `assets/images/`.

## Folder structure

```
variant-03/
├── index.html / story.html / packages.html / gallery.html / contact.html
├── css/style.css, css/responsive.css
├── js/script.js
└── assets/images, assets/icons, assets/fonts
```

Fully independent — copy this folder anywhere and open `index.html`.
