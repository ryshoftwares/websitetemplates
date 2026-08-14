# Aurelia Hotel

**Category:** Hotels
**Variant:** 01 — Premium Modern

A five-star clifftop hotel site for a fictional Amalfi Coast property: full-bleed hero
photography, a floating quick-availability search bar, warm gold/ink palette, and serif
display type (Cormorant Garamond) paired with Jost.

## Pages

- `index.html` — Home (hero, quick booking bar, intro, featured rooms, amenities, testimonial, gallery teaser)
- `rooms.html` — All rooms &amp; suites with filterable tabs (All / Classic / Deluxe Sea View / Suites)
- `amenities.html` — Beach club, spa, restaurant, concierge details + hours tables
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
Fonts from Google Fonts CDN (Cormorant Garamond + Jost). Photography hotlinked from Unsplash.
No build step, no dependencies, no backend — the booking form is a static request form with
no real payment processing.

## How to run

Open `index.html` directly, or serve with any static file server, e.g. `npx serve .`.

## Customizing

**Colors** — edit `css/style.css`:
```css
:root {
  --ink: #221c17;
  --accent: #a9822f;
  --background: #fbf8f3;
}
```

**Rooms** — each `.room-card` in `rooms.html` carries a `data-type` attribute (`classic`,
`deluxe`, `suite`) used by the filter-tab logic in `js/script.js`.

## Folder structure

```
variant-01/
├── index.html / rooms.html / amenities.html / gallery.html / booking.html
├── css/style.css, css/responsive.css
├── js/script.js
└── assets/images, assets/icons, assets/fonts
```

Fully independent — copy this folder anywhere and open `index.html`.
