# RISE Collective

**Category:** Nonprofit
**Variant:** 02 — Creative Bold

An energetic, high-contrast marketing site for RISE Collective, a youth-led grassroots mentorship
movement founded in 2017 in Atlanta, Georgia. Oversized display type, a warm cream canvas, bold
coral-red and electric-indigo accents, tilted cards, and a scrolling keyword marquee — built for a
brand that refuses to sound corporate.

## Pages

- `index.html` — Home
- `about.html` — About / founding story, values, timeline, leadership, become-a-mentor (`#volunteer`)
- `programs.html` — RISE Circles, Launchpad Fellowship, Streetlight Nights, Voices Forward
- `impact.html` — Animated stats + mentee and volunteer stories
- `donate.html` — Donation form (front-end demo only) + mentor/volunteer sign-up CTA

## Features

- Sticky header with scroll shadow, mobile slide-down navigation
- Infinite CSS scrolling keyword marquee
- Scroll-reveal animations + animated, eased stat counters with `data-suffix` support
- Pointer-driven tilt effect on the hero image
- Donate page: preset/custom amount sync, one-time/monthly toggle, validated donor form with
  inline error states and a success message
- Client-side form validation (required fields + email regex) with inline error states
- Fully responsive from 320px to 1440px+, `prefers-reduced-motion` respected

## Technology

HTML5 · CSS3 (custom properties, no preprocessor) · Vanilla JavaScript
Fonts from Google Fonts CDN — **Unbounded** (display) + **Sora** (body). No build step, no dependencies.

**Important:** The Donate page (`donate.html`) is a front-end demonstration only. There is no real
payment gateway connected and no live transaction is ever processed — this is stated explicitly on
the page itself.

## How to run

Open `index.html` directly, or serve with any static file server, e.g. `npx serve .`.

## Customizing

**Colors** — edit `css/style.css`:
```css
:root {
  --bg: #fff8f0;      /* warm cream canvas */
  --ink: #1a1a2e;      /* near-black navy ink */
  --accent: #ff4d5e;   /* bold coral-red */
  --accent-2: #4b3cff; /* electric indigo */
}
```

**Content** — edit copy directly inside each `.html` file.

**Images** — replace the Unsplash demo URLs with your own files in `assets/images/`.

## Folder structure

```
variant-02/
├── index.html / about.html / programs.html / impact.html / donate.html
├── css/style.css, css/responsive.css
├── js/script.js
└── assets/images, assets/icons, assets/fonts
```

Fully independent — copy this folder anywhere and open `index.html`. Nothing in this folder
references or depends on any other variant, category, or the project root.
