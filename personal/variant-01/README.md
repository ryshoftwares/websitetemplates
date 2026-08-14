# Maren Cole

**Category:** Personal
**Variant:** 01 — Premium Modern

A sophisticated portfolio for a photographer and visual designer: large editorial serif
typography, warm terracotta accent, and a project grid built for image-forward work.

## Pages

- `index.html` — Home
- `about.html` — About
- `skills.html` — Skills (proficiency bars, not a bullet list)
- `portfolio.html` — Portfolio (project grid)
- `contact.html` — Contact (booking-style form)

## Features

- Sticky header with scroll shadow, mobile slide-down navigation
- Scroll-reveal animations via `IntersectionObserver`
- Animated stat counters and animated skill-proficiency bars
- Client-side contact form validation with inline error states
- Fully responsive from 320px to 1440px+, `prefers-reduced-motion` respected

## Technology

HTML5 · CSS3 (custom properties, no preprocessor) · Vanilla JavaScript
Fonts from Google Fonts CDN (Cormorant Garamond + Jost). No build step, no dependencies.

## How to run

Open `index.html` directly, or serve with any static file server, e.g. `npx serve .`.

## Customizing

**Colors** — edit the CSS variables at the top of `css/style.css`.

**Content** — all copy lives directly in each `.html` file; edit it in place.

**Images** — replace the `https://images.unsplash.com/...` URLs with your own files under
`assets/images/`, then update the `src` attributes to point locally.

## Folder structure

```
variant-01/
├── index.html / about.html / skills.html / portfolio.html / contact.html
├── css/style.css, css/responsive.css
├── js/script.js
└── assets/images, assets/icons, assets/fonts
```

Fully independent — copy this folder anywhere and open `index.html`.
