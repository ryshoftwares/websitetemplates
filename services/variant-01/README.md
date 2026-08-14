# Anchor Services

**Category:** Services
**Variant:** 01 — Premium Modern

A confident, editorial marketing site for a premium home-renovation and general contracting company:
large serif headings, warm terracotta accent on a deep forest-green ink, generous spacing, and
high-quality project photography.

## Pages

- `index.html` — Home: hero, process, service area/availability, featured project, stats, testimonial
- `about.html` — About: founding story, values, team, milestones timeline
- `services.html` — Six renovation services with pricing hints and quote CTAs, plus a pricing FAQ
- `projects.html` — Portfolio grid including three before/after transformations
- `contact.html` — Quote-request form with client-side validation

## Features

- Sticky header with scroll shadow
- Mobile slide-down navigation
- Scroll-reveal animations via `IntersectionObserver`
- Animated stat counters
- Client-side quote-request form validation with inline error states and a success message
- Fully responsive from 320px to 1440px+
- `prefers-reduced-motion` respected throughout

## Technology

HTML5 · CSS3 (custom properties, no preprocessor) · Vanilla JavaScript
Fonts loaded from Google Fonts CDN (Playfair Display + Work Sans). No build step, no dependencies.

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
  --primary: #22301f;  /* deep forest ink */
  --accent:  #b5622c;  /* terracotta accent */
  --background: #faf7f1;
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
