# Northbridge Advisory

**Category:** Finance
**Variant:** 03 — Minimal Professional

A restrained, structured marketing site for a traditional financial advisory firm: clean grid
layouts, hairline dividers and a calm forest-teal accent that reads as dependable rather than flashy.

## Pages

- `index.html` — Home, with trust indicators, animated stats and a consultation CTA
- `about.html` — Firm story, guiding principles, milestones and leadership
- `services.html` — Financial Planning, Retirement Planning, Investment Management, Insurance & Risk Review
- `insights.html` — Plain-language articles on retirement, planning, insurance and investing
- `contact.html` — Office details and a validated call-request form

## Features

- Sticky header with scroll shadow
- Mobile slide-down navigation
- Scroll-reveal animations via `IntersectionObserver`
- Animated stat counters (client households, assets under management, retention, years in operation)
- Client-side contact form validation with inline error states
- Fully responsive from 320px to 1440px+
- `prefers-reduced-motion` respected throughout

## Technology

HTML5 · CSS3 (custom properties, no preprocessor) · Vanilla JavaScript
Fonts loaded from Google Fonts CDN (Libre Franklin + Source Sans 3). No build step, no dependencies.

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
  --ink: #182229;      /* charcoal navy */
  --accent: #1f6f5c;   /* forest teal */
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
├── services.html
├── insights.html
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
