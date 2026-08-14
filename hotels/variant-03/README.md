# The Stay

**Category:** Hotels
**Variant:** 03 — Minimal Professional

A quiet, design-forward boutique hotel site for a fictional Copenhagen property: a restrained
neutral palette with a single quiet accent, hairline borders, small quiet type, and understated
card design — a 42-room hotel built inside a restored 1921 grain warehouse in Nordhavn.

## Pages

- `index.html` — Home (hero, quick booking bar, intro, featured rooms, amenities, testimonial, gallery teaser)
- `rooms.html` — All rooms &amp; lofts with filterable tabs (All / Studio / Loft / Suite)
- `amenities.html` — Kornet restaurant &amp; bar, The Bathhouse, The Loading Bay workspace, concierge details + hours tables
- `gallery.html` — Filterable photo gallery with a full lightbox (keyboard arrows + Escape, focus returns to trigger)
- `booking.html` — Reservation request form with guest-count stepper and check-in/check-out date validation

## Features

- Sticky header with scroll shadow, mobile slide-down navigation
- Floating quick-availability search bar with a guest-count stepper
- Room type filter tabs (client-side show/hide, no page reload)
- Full-featured lightbox gallery: category filters, keyboard navigation, click-outside-to-close, focus management
- Booking form validates that check-out is after check-in, plus required-field and email validation
- Scroll-reveal animations + animated stat counters, `prefers-reduced-motion` respected
- Fully responsive from 320px to 1440px+

## Technology

HTML5 · CSS3 (custom properties, no preprocessor) · Vanilla JavaScript
Fonts from Google Fonts CDN (Newsreader + Inter). Photography hotlinked from Unsplash.
No build step, no dependencies, no backend — the booking form is a static request form with
no real payment processing.

## How to run

Open `index.html` directly, or serve with any static file server, e.g. `npx serve .`.

## Customizing

**Colors** — edit `css/style.css`:
```css
:root {
  --ink: #1c1e1f;
  --accent: #4d6a78;
  --background: #faf9f7;
}
```

**Rooms** — each `.room-card` in `rooms.html` carries a `data-type` attribute (`studio`,
`loft`, `suite`) used by the filter-tab logic in `js/script.js`.

## Folder structure

```
variant-03/
├── index.html / rooms.html / amenities.html / gallery.html / booking.html
├── css/style.css, css/responsive.css
├── js/script.js
└── assets/images, assets/icons, assets/fonts
```

Fully independent — copy this folder anywhere and open `index.html`.
