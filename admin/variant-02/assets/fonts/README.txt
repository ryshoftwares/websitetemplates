Fonts (Unbounded for headings/display/numbers, Rubik for body and UI text) are
loaded from the Google Fonts CDN via the <link> tags in each page's <head>. To
self-host instead: download the woff2 files for the weights used (Unbounded
600/700/800, Rubik 400/500/600), place them in this folder, and add matching
@font-face rules at the top of css/style.css pointing at
assets/fonts/<file>.woff2 in place of the Google Fonts <link>.
