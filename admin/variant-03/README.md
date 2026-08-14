# Clarity Admin

**Category:** Admin
**Variant:** 03 — Minimal Professional

A clean, data-dense dashboard application UI (not a marketing site): collapsible sidebar,
topbar with search and notifications, metric cards, inline-SVG charts and sortable tables.

## Pages

- `index.html` — Dashboard overview (metrics, charts, recent orders)
- `users.html` — User directory with live search + sortable columns
- `reports.html` — Traffic/conversion charts + top-pages table
- `settings.html` — Account, notification and workspace settings (validated form)
- `profile.html` — User profile + recent activity

## Features

- Collapsible sidebar (desktop, persisted via `localStorage`) + off-canvas drawer (mobile)
- Topbar search, notification badge, user menu dropdown (click-outside + Escape to close)
- Inline-SVG line/bar/funnel charts — no charting library
- Live client-side user search and click-to-sort table columns (ascending/descending)
- Toggle switches for notification preferences
- Client-side form validation with inline error states
- Fully responsive from 320px to 1440px+, `prefers-reduced-motion` respected

## Technology

HTML5 · CSS3 (custom properties, no preprocessor) · Vanilla JavaScript
Fonts from Google Fonts CDN (IBM Plex Sans + Inter). No build step, no dependencies.

## How to run

Open `index.html` directly, or serve with any static file server, e.g. `npx serve .`.

## Customizing

**Colors** — edit `css/style.css`:
```css
:root {
  --ink: #1a1f27;
  --accent: #0f766e;
  --bg: #fafafa;
}
```

**Data** — all table rows and chart values are hand-written in each `.html` file; edit them
directly. Charts are inline SVG (`<polyline>`, `<rect>`) — adjust point coordinates to reflect
new values.

**Images** — the profile avatar is a CSS/text initials badge, not a photo, so this variant
ships with no image dependency by default. Add real photos to `assets/images/` if desired.

## Folder structure

```
variant-03/
├── index.html / users.html / reports.html / settings.html / profile.html
├── css/style.css, css/responsive.css
├── js/script.js
└── assets/images, assets/icons, assets/fonts
```

Fully independent — copy this folder anywhere and open `index.html`.
