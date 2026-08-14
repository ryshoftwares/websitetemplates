# NovaTech

**Category:** Technology
**Variant:** 01 — Premium Modern

A sophisticated marketing site for a product engineering studio: large editorial typography,
warm gold accent on deep ink, and generous spacing.

## Pages

- `index.html` — Home
- `about.html` — About / story, values, timeline, leadership
- `solutions.html` — Services breakdown + process
- `case-studies.html` — Client results grid
- `contact.html` — Contact details + validated form

## Features

- Sticky header with scroll shadow
- Mobile slide-down navigation
- Scroll-reveal animations via `IntersectionObserver`
- Animated stat counters
- Client-side contact form validation with inline error states
- Fully responsive from 320px to 1440px+
- `prefers-reduced-motion` respected throughout

## Technology

HTML5 · CSS3 (custom properties, no preprocessor) · Vanilla JavaScript
Fonts loaded from Google Fonts CDN (Fraunces + Inter). No build step, no dependencies.

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
  --primary: #0b0f1a;   /* ink navy */
  --accent:  #c9a13b;   /* gold accent */
  --background: #f8f7f3;
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
├── solutions.html
├── case-studies.html
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
