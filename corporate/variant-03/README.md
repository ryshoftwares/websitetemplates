# Sterling Partners

**Category:** Corporate
**Variant:** 03 — Minimal Professional

A restrained, editorial site for a traditional management consultancy: serif display type,
muted gold accent, hairline-grid cards, generous whitespace.

## Pages

- `index.html` — Home
- `about.html` — About / milestones, leadership
- `services.html` — Services breakdown + process
- `case-studies.html` — Client results grid
- `contact.html` — Contact details + validated form

## Features

- Sticky header, mobile slide-down navigation
- Scroll-reveal animations + animated stat counters
- Client-side contact form validation with inline error states
- Fully responsive from 320px to 1440px+, `prefers-reduced-motion` respected

## Technology

HTML5 · CSS3 (custom properties, no preprocessor) · Vanilla JavaScript
Fonts from Google Fonts CDN (Spectral + Inter). No build step, no dependencies.

## How to run

Open `index.html` directly, or serve with any static file server, e.g. `npx serve .`.

## Customizing

**Colors** — edit `css/style.css`:
```css
:root {
  --ink: #14213d;
  --accent: #9c7a2e;
  --background: #ffffff;
}
```

**Content** — edit copy directly inside each `.html` file.

**Images** — replace the Unsplash demo URLs with your own files in `assets/images/`.

## Folder structure

```
variant-03/
├── index.html / about.html / services.html / case-studies.html / contact.html
├── css/style.css, css/responsive.css
├── js/script.js
└── assets/images, assets/icons, assets/fonts
```

Fully independent — copy this folder anywhere and open `index.html`.
