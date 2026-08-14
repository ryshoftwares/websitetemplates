# Orbit

**Category:** Mobile App
**Variant:** 01 — Premium Modern

A refined landing site for a premium habit-tracking app: elegant editorial typography,
warm sage/amber palette, a CSS phone-mockup with an inline-SVG app screen (no screenshot
image dependency).

## Pages

- `index.html` — Home (phone mockup, store badges, feature teasers, stats)
- `features.html` — Features
- `pricing.html` — Pricing (monthly/yearly toggle)
- `download.html` — Download (store badges + QR code graphic + platform requirements)
- `contact.html` — Contact

## Features

- Sticky header, mobile slide-down navigation, scroll-reveal animations
- Animated stat counters
- Working monthly/yearly pricing toggle switch
- Client-side contact form validation with inline error states
- Fully responsive from 320px to 1440px+, `prefers-reduced-motion` respected

## Technology

HTML5 · CSS3 (custom properties, no preprocessor) · Vanilla JavaScript
Fonts from Google Fonts CDN (Fraunces + Inter). No build step, no dependencies.

## How to run

Open `index.html` directly, or serve with any static file server, e.g. `npx serve .`.

## Customizing

**Colors** — edit `css/style.css`:
```css
:root {
  --ink: #16241c;
  --accent: #d98a3d;
  --accent-2: #4f7a68;
}
```

**Content** — edit copy directly inside each `.html` file.

**App screen** — the phone mockup screen is an inline SVG illustration; edit the `<svg>`
inside `index.html`'s `.phone-mockup__screen` directly, or replace it with a real screenshot
`<img>` if you have one.

## Folder structure

```
variant-01/
├── index.html / features.html / pricing.html / download.html / contact.html
├── css/style.css, css/responsive.css
├── js/script.js
└── assets/images, assets/icons, assets/fonts
```

Fully independent — copy this folder anywhere and open `index.html`.
