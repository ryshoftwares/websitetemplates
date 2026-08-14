# Solara Resort

**Category:** Hotels
**Variant:** 02 — Creative Bold

A vibrant, design-forward boutique resort site for a fictional beachfront property in Tulum,
Mexico: full-bleed hero photography, a floating quick-availability search bar, a sunset
orange/teal/mango color palette, rotated sticker-style badges, a scrolling keyword marquee,
and a bold rounded display font (Baloo 2) paired with Manrope.

## Pages

- `index.html` — Home (hero, quick booking bar, intro, marquee ticker, featured rooms, amenities, testimonial, gallery teaser)
- `rooms.html` — All rooms &amp; suites with filterable tabs (All / Jungle Casita / Beach Bungalow / Sky Suite)
- `amenities.html` — Beach club, Cenote Spa, rooftop restaurant, concierge details + hours tables
- `gallery.html` — Filterable photo gallery with a full lightbox (keyboard arrows + Escape, focus returns to trigger)
- `booking.html` — Reservation request form with guest-count stepper and check-in/check-out date validation

## Features

- Sticky header with scroll shadow, mobile slide-down navigation
- Floating quick-availability search bar with a guest-count stepper
- Room type filter tabs (client-side show/hide, no page reload)
- Full-featured lightbox gallery: category filters, keyboard navigation, click-outside-to-close, focus management
- Booking form validates that check-out is after check-in, plus required-field and email validation
- Scroll-reveal animations, animated stat counters, and an infinite CSS scrolling marquee ticker
- Rotated room/amenity cards, thick bold borders and sticker-style badges throughout
- `prefers-reduced-motion` respected (marquee and reveal animations disabled)
- Fully responsive from 320px to 1440px+

## Technology

HTML5 · CSS3 (custom properties, no preprocessor) · Vanilla JavaScript
Fonts from Google Fonts CDN (Baloo 2 + Manrope). Photography hotlinked from Unsplash.
No build step, no dependencies, no backend — the booking form is a static request form with
no real payment processing.

## How to run

Open `index.html` directly, or serve with any static file server, e.g. `npx serve .`.

## Customizing

**Colors** — edit `css/style.css`:
```css
:root {
  --ink: #241206;
  --accent: #ff5a36;
  --accent-2: #00b3a4;
  --accent-3: #ffc83c;
  --bg: #fff8ee;
}
```

**Rooms** — each `.room-card` in `rooms.html` carries a `data-type` attribute (`casita`,
`bungalow`, `suite`) used by the filter-tab logic in `js/script.js`.

## Folder structure

```
variant-02/
├── index.html / rooms.html / amenities.html / gallery.html / booking.html
├── css/style.css, css/responsive.css
├── js/script.js
└── assets/images, assets/icons, assets/fonts
```

Fully independent — copy this folder anywhere and open `index.html`.
