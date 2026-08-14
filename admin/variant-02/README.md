# Nova Dash

**Category:** Admin
**Variant:** 02 — Creative Bold

A vivid, energetic startup admin dashboard: near-black surfaces, a punchy orange
primary accent with a teal/mint secondary, bold display type, and more visual
energy in its charts and cards than a typical dashboard — while staying legible
and usable as a real admin product.

## Pages

- `index.html` — Dashboard: key metrics, revenue trend + sessions-by-device
  charts, recent orders table
- `users.html` — Users: searchable, sortable directory of teammates
- `reports.html` — Reports: filterable signups, revenue-by-channel and
  conversion-funnel charts
- `settings.html` — Settings: account form + notification toggle switches
- `profile.html` — Profile: avatar, editable bio form, activity summary

## Features

- Collapsible desktop sidebar (icon-only rail) via `#sidebarCollapseToggle`
- Off-canvas mobile sidebar drawer with overlay, hamburger toggle and
  Escape-to-close
- Live client-side search across the Users table (name + email)
- Fully working, keyboard-accessible column sorting on the Users table,
  including correct chronological sort on the Joined column
- Validated forms (Settings, Profile) with inline error states and a success
  confirmation — required fields + email format checking
- Inline SVG charts (line, bar and funnel) built and color-checked following
  dark-mode data-visualization contrast and legibility guidance
- Responsive from 320px to 1440px+, with an off-canvas nav below ~900px
- `prefers-reduced-motion` respected throughout

## Technology

HTML5 · CSS3 (custom properties, no preprocessor) · Vanilla JavaScript
Fonts loaded from Google Fonts CDN: **Unbounded** (600/700/800, display/headings/
numbers) + **Rubik** (400/500/600, body/UI text). No build step, no dependencies.

## How to run

Open `index.html` directly in a browser, or serve the folder with any static
file server:

```
npx serve .
```

No installation is required for the site itself — `npx serve` is just one
convenient way to preview it over HTTP instead of `file://`.

## Customizing

**Colors & tokens** — edit the CSS variables at the top of `css/style.css`:

```css
:root {
  --bg: #0b0b12;
  --surface: #15151f;
  --surface-2: #1c1c2b;
  --ink: #f4f3fb;
  --ink-muted: #a2a0b8;
  --border: #2a2a3c;
  --accent: #ff7a1a;
  --accent-ink: #1a0e02;
  --accent-2: #00e0b8;
  --success: #3ddc84;
  --danger: #ff4d6d;
  --radius: 20px;
  --radius-sm: 12px;
  --sidebar-w: 268px;
  --sidebar-w-collapsed: 78px;
  --topbar-h: 76px;
  --shadow: 0 24px 48px -24px rgba(0, 0, 0, 0.55);
  --font-display: "Unbounded", system-ui, sans-serif;
  --font-body: "Rubik", system-ui, sans-serif;
}
```

Chart-only colors (a categorical set and a teal ordinal ramp, both contrast-
checked against the dark card surface) live further down the same file as
`--chart-1`…`--chart-4` and `--chart-ord-1`…`--chart-ord-4`.

**Content** — all copy lives directly in each `.html` file; there is no CMS or
templating layer. Search for the text you want to change and edit it in place.

**Images** — the profile photo is hotlinked from `images.unsplash.com` as a
placeholder; replace it with your own file under `assets/images/` before
production use.

## Folder structure

```
variant-02/
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

This variant is fully independent — copy this folder anywhere and open
`index.html`.
