# Lumen

**Category:** Entertainment
**Variant:** 01 — Premium Modern

A cinematic marketing site for a film, live-events and brand-experience production studio:
large editorial serif typography, warm amber accent on deep charcoal, refined cards.

## Pages

- `index.html` — Home
- `about.html` — About / story, timeline, leadership
- `shows.html` — Shows (upcoming events listing)
- `media.html` — Media (video-style recap grid + press coverage)
- `contact.html` — Contact

## Features

- Sticky header with scroll shadow, mobile slide-down navigation
- Scroll-reveal animations, animated stat counters
- Media grid styled as video thumbnails (play-button overlay)
- Client-side contact form validation with inline error states
- Fully responsive from 320px to 1440px+, `prefers-reduced-motion` respected

## Technology

HTML5 · CSS3 (custom properties, no preprocessor) · Vanilla JavaScript
Fonts from Google Fonts CDN (Bodoni Moda + Jost). No build step, no dependencies.

## How to run

Open `index.html` directly, or serve with any static file server, e.g. `npx serve .`.

## Customizing

**Colors** — edit the CSS variables at the top of `css/style.css`.

**Content** — edit copy directly inside each `.html` file.

**Images** — replace the Unsplash demo URLs with your own files in `assets/images/`.

## Folder structure

```
variant-01/
├── index.html / about.html / shows.html / media.html / contact.html
├── css/style.css, css/responsive.css
├── js/script.js
└── assets/images, assets/icons, assets/fonts
```

Fully independent — copy this folder anywhere and open `index.html`.
