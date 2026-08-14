# Template Library

A static, framework-free library of website templates: **17 categories**, **3 independent
design variants** per category, **5 finished pages** per variant.

Built with **HTML5 + CSS3 + vanilla JavaScript only** — no React, no build tools, no npm
install required for any individual template.

## Browse

Open [`index.html`](index.html) at the project root to browse every category and variant
with search and filtering.

## Structure

```
/
├── index.html                 ← template browser (root only)
├── assets/                    ← browser's own css/js (not used by any template)
├── personal/
│   ├── variant-01/            ← Premium Modern
│   ├── variant-02/            ← Creative Bold
│   └── variant-03/            ← Minimal Professional
├── entertainment/
├── nonprofit/
├── technology/
├── wedding/
├── corporate/
├── creative/
├── retail/
├── admin/
├── mobile/
├── fashion/
├── finance/
├── healthcare/
├── shops/
├── educare/
├── services/
└── hotels/
```

Each `variant-0X/` folder is a **completely independent website**: its own HTML pages, its
own `css/style.css` + `css/responsive.css`, its own `js/script.js`, and its own `assets/`.
No variant imports from another variant, and no category depends on another category.
Copy any `category/variant-0X/` folder to a new location and open its `index.html` — it
works on its own.

See each variant's own `README.md` for that template's pages, features, and customization
notes.

## Status

Complete. All 17 categories × 3 variants (51 independent sites, 255 pages) are built,
verified link-clean, and wired into the root browser.
