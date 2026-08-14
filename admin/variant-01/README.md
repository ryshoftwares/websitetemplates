# Pulse Admin

**Category:** Admin
**Variant:** 01 — Premium Modern

A polished enterprise SaaS admin dashboard: a collapsible sidebar, a sticky topbar with
search and a user menu, elegant surfaces, subtle shadows, and a sophisticated
navy-on-light palette with an indigo accent.

## Pages

- `index.html` — Dashboard: key metrics, revenue/orders charts, recent orders table
- `users.html` — Users: searchable, sortable member directory
- `reports.html` — Reports: filters plus sessions, revenue-by-channel, and funnel charts
- `settings.html` — Settings: account details, time zone, notification switches
- `profile.html` — Profile: editable profile card, activity summary and recent activity

## Features

- Persistent app shell (sidebar + topbar) shared identically across all 5 pages
- Desktop sidebar collapse toggle (icon-only rail), state remembered via `localStorage`
- Off-canvas mobile sidebar drawer with overlay and Escape-to-close, below ~900px
- Notification bell with unread badge, and a real keyboard-accessible user menu dropdown
- Live client-side search and click-to-sort columns on the Users table
- Inline SVG charts (line, bar, and segmented funnel) with readable axis/value labels
- Settings and Profile forms share one validation routine: required-field and email
  checks, inline `.has-error` messaging, and a `.form__success` confirmation banner
- Status badges (Active/Invited/Suspended, Paid/Pending/Refunded) always pair color
  with a text label — never color alone
- Fully responsive from 320px to 1440px+, with every table wrapped for horizontal scroll
- `prefers-reduced-motion` respected throughout

## Technology

HTML5 · CSS3 (custom properties, no preprocessor) · Vanilla JavaScript
Fonts loaded from Google Fonts CDN: **Lexend** (display, weights 500/600/700) and
**Work Sans** (body, weights 400/500/600). No build step, no dependencies.

## How to run

Open `index.html` directly in a browser, or serve the folder with any static file server:

```
npx serve .
```

No installation is required for the dashboard itself — `npx serve` is just one
convenient way to preview it over HTTP instead of `file://`.

## Customizing

**Colors & tokens** — edit the CSS variables at the top of `css/style.css`:

```css
:root {
  --ink: #0f1729;
  --ink-muted: #5b6478;
  --bg: #f5f7fb;
  --surface: #ffffff;
  --surface-2: #eef1f8;
  --border: #e3e7f0;
  --accent: #2f6fed;
  --accent-soft: #e4ecfd;
  --accent-ink: #12306e;
  --success: #1a9c6b;
  --success-soft: #e5f7ee;
  --warning: #b7791f;
  --warning-soft: #fdf3e0;
  --danger: #d64550;
  --danger-soft: #fbe7e8;
  --radius: 16px;
  --radius-sm: 10px;
  --sidebar-w: 264px;
  --sidebar-w-collapsed: 76px;
  --topbar-h: 72px;
  --font-display: "Lexend", system-ui, sans-serif;
  --font-body: "Work Sans", system-ui, sans-serif;
}
```

**Content** — all copy, table rows, and chart values live directly in each `.html`
file; there is no CMS or templating layer. Search for the text you want to change
and edit it in place.

**Charts** — every chart is inline `<svg>` (polylines, rects and text) inside a
`.chart-card`; adjust the `points`/`rect` coordinates and the adjacent `<text>`
labels together so the shape and the numbers stay in sync.

**Images** — the only photograph in this variant is the Profile avatar, hotlinked
from `images.unsplash.com`. Replace that `<img src>` with a file under
`assets/images/` before deploying to production.

## Folder structure

```
variant-01/
├── index.html
├── users.html
├── reports.html
├── settings.html
├── profile.html
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
