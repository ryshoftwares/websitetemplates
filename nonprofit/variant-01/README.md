# Haven Trust

**Category:** Nonprofit
**Variant:** 01 — Premium Modern

A warm, editorial marketing site for a housing and community-support foundation: large serif
headlines, a terracotta accent on deep forest ink, and generous whitespace over a warm ivory
background.

## Pages

- `index.html` — Home: mission hero, partner strip, "how we help" grid, featured family story,
  impact numbers, a beneficiary quote, and a closing donate/volunteer banner.
- `about.html` — About: founding story (Portland, 2009), mission, values, a four-milestone
  timeline, leadership team, and an anchored `#volunteer` get-involved section.
- `programs.html` — Programs: the four named programs (Rapid Rehousing Initiative, Family
  Stability Fund, New Keys Mentorship, Neighbors Table) in alternating image/text rows.
- `impact.html` — Impact: animated stat counters plus two named stories — a beneficiary and a
  volunteer — with a closing donate CTA.
- `donate.html` — Donate: a donation form with preset/custom amount selection, a one-time/monthly
  toggle, a validated donor-details form, and a volunteer CTA.

## Features

- Sticky header with scroll shadow
- Mobile slide-down navigation
- Scroll-reveal animations via `IntersectionObserver`
- Animated impact-number counters
- Donate-amount preset buttons synced with a custom-amount field
- Client-side form validation with inline error states and a success confirmation
- Fully responsive from 320px to 1440px+
- `prefers-reduced-motion` respected throughout

**Important:** the Donate page (`donate.html`) is a **front-end demo only**. There is no real
payment gateway or processor connected to the donation form — submitting it never charges a card
or moves money; it only displays a sample confirmation message and resets the form.

## Technology

HTML5 · CSS3 (custom properties, no preprocessor) · Vanilla JavaScript
Fonts loaded from Google Fonts CDN (Newsreader + Karla). No build step, no dependencies.

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
  --ink: #1f2b22;        /* deep forest ink */
  --accent: #c1613f;     /* warm terracotta */
  --background: #faf6ef; /* warm ivory */
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
├── programs.html
├── impact.html
├── donate.html
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
