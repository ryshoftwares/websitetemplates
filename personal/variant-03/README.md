# Sam Rivera

**Category:** Personal
**Variant:** 03 — Minimal Professional

A clean, restrained portfolio for a freelance software engineer: hairline-grid cards, a
single indigo accent, and a skills page built as a data table rather than a bullet list.

## Pages

- `index.html` — Home
- `about.html` — About
- `skills.html` — Skills (proficiency bars + tool chip cloud)
- `portfolio.html` — Portfolio (case-study list)
- `contact.html` — Contact

## Features

- Sticky header, mobile slide-down navigation
- Scroll-reveal animations, animated stat counters, animated skill-proficiency bars
- Client-side contact form validation with inline error states
- Fully responsive from 320px to 1440px+, `prefers-reduced-motion` respected

## Technology

HTML5 · CSS3 (custom properties, no preprocessor) · Vanilla JavaScript
Fonts from Google Fonts CDN (Manrope + Inter). No build step, no dependencies.

## How to run

Open `index.html` directly, or serve with any static file server, e.g. `npx serve .`.

## Customizing

**Colors** — edit `css/style.css`:
```css
:root {
  --ink: #191c22;
  --accent: #4f46e5;
  --background: #ffffff;
}
```

**Content** — edit copy directly inside each `.html` file.

**Images** — replace the Unsplash demo URLs with your own files in `assets/images/`.

## Folder structure

```
variant-03/
├── index.html / about.html / skills.html / portfolio.html / contact.html
├── css/style.css, css/responsive.css
├── js/script.js
└── assets/images, assets/icons, assets/fonts
```

Fully independent — copy this folder anywhere and open `index.html`.
