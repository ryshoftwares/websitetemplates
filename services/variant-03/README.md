# ProServe

**Category:** Services
**Variant:** 03 — Minimal Professional

A restrained, structured marketing site for a combined facilities-and-IT support services firm: hairline
borders, seamed 1px-gap grids, tight typography and a single deep-teal accent color on a clean white
background.

## Pages

- `index.html` — Home: hero, process, service area/availability, featured client, stats, testimonial
- `about.html` — About: founding story, values, leadership, milestones timeline
- `services.html` — Six B2B support services with pricing/proposal notes and an FAQ
- `projects.html` — Grid of six client engagement case studies
- `contact.html` — Proposal-request form with client-side validation

## Features

- Sticky header with hairline border
- Mobile slide-down navigation
- Scroll-reveal animations via `IntersectionObserver`
- Animated stat counters
- Client-side proposal-request form validation with inline error states and a success message
- Fully responsive from 320px to 1440px+
- `prefers-reduced-motion` respected throughout

## Technology

HTML5 · CSS3 (custom properties, no preprocessor) · Vanilla JavaScript
Fonts loaded from Google Fonts CDN (Sora + Public Sans). No build step, no dependencies.

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
  --ink: #171b1f;
  --accent: #0e7c66;   /* deep teal */
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
├── projects.html
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
