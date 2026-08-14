/* ==========================================================================
   Template Library — root browser
   Renders the category/variant grid, and drives search + filter chips.
   This file belongs to the ROOT browser only — it is not shared with,
   imported by, or required by any individual template variant.
   ========================================================================== */

(function () {
  "use strict";

  var CATEGORIES = [
    { id: "personal",      label: "Personal",      blurb: "Portfolios and personal brands for creators and freelancers.",
      variants: [ { name: "Maren Cole",   style: "Premium Modern" }, { name: "JOON.",           style: "Creative Bold" }, { name: "Sam Rivera",       style: "Minimal Professional" } ] },
    { id: "entertainment", label: "Entertainment", blurb: "Sites for artists, venues, and media brands.",
      variants: [ { name: "Lumen",        style: "Premium Modern" }, { name: "PULSE",           style: "Creative Bold" }, { name: "Reel Co.",         style: "Minimal Professional" } ] },
    { id: "nonprofit",     label: "Nonprofit",     blurb: "Human-centered sites built to grow support and donations.",
      variants: [ { name: "Haven Trust",  style: "Premium Modern" }, { name: "RISE Collective", style: "Creative Bold" }, { name: "Bridge Foundation",style: "Minimal Professional" } ] },
    { id: "technology",    label: "Technology",    blurb: "Product and SaaS marketing sites for tech companies.",
      variants: [ { name: "NovaTech",     style: "Premium Modern" }, { name: "FluxLabs",        style: "Creative Bold" }, { name: "CoreDigital",      style: "Minimal Professional" } ] },
    { id: "wedding",       label: "Wedding",       blurb: "Elegant sites for planners, photographers and couples.",
      variants: [ { name: "EverAfter",    style: "Premium Modern" }, { name: "Vow & Co.",       style: "Creative Bold" }, { name: "The Wedding Studio",style: "Minimal Professional" } ] },
    { id: "corporate",     label: "Corporate",     blurb: "Trustworthy sites for consultancies and enterprise brands.",
      variants: [ { name: "Meridian Group",style: "Premium Modern" }, { name: "Forge & Co.",    style: "Creative Bold" }, { name: "Sterling Partners",style: "Minimal Professional" } ] },
    { id: "creative",      label: "Creative",      blurb: "Studio sites for designers, agencies and art directors.",
      variants: [ { name: "Atelier Noir", style: "Premium Modern" }, { name: "WILDFORM",        style: "Creative Bold" }, { name: "Studio Clean",     style: "Minimal Professional" } ] },
    { id: "retail",        label: "Retail",        blurb: "Commerce-first storefronts for product brands.",
      variants: [ { name: "Marché",       style: "Premium Modern" }, { name: "POP & CO",        style: "Creative Bold" }, { name: "Basic Goods",      style: "Minimal Professional" } ] },
    { id: "admin",         label: "Admin",         blurb: "Dashboard UIs with charts, tables and live-feeling widgets.",
      variants: [ { name: "Pulse Admin",  style: "Premium Modern" }, { name: "Nova Dash",       style: "Creative Bold" }, { name: "Clarity Admin",    style: "Minimal Professional" } ] },
    { id: "mobile",        label: "Mobile App",    blurb: "Launch pages for mobile apps and downloads.",
      variants: [ { name: "Orbit",        style: "Premium Modern" }, { name: "Zapp",            style: "Creative Bold" }, { name: "Plainly",          style: "Minimal Professional" } ] },
    { id: "fashion",       label: "Fashion",       blurb: "Editorial, lookbook-driven sites for apparel brands.",
      variants: [ { name: "Maison Ives",  style: "Premium Modern" }, { name: "RAW EDIT",        style: "Creative Bold" }, { name: "Studio Wear",      style: "Minimal Professional" } ] },
    { id: "finance",       label: "Finance",       blurb: "Advisory and fintech sites built on trust and clarity.",
      variants: [ { name: "Meridian Wealth",style: "Premium Modern" }, { name: "Ledger Labs",   style: "Creative Bold" }, { name: "Northbridge Advisory",style: "Minimal Professional" } ] },
    { id: "healthcare",    label: "Healthcare",    blurb: "Clean, reassuring sites for clinics and providers.",
      variants: [ { name: "Wellspring Health",style: "Premium Modern" }, { name: "VitalCare+",  style: "Creative Bold" }, { name: "Cedar Clinic",     style: "Minimal Professional" } ] },
    { id: "shops",         label: "Shops",         blurb: "Full storefront UIs with catalog, filters and cart.",
      variants: [ { name: "Lumen Market", style: "Premium Modern" }, { name: "CRATE",           style: "Creative Bold" }, { name: "The Goods Shop",   style: "Minimal Professional" } ] },
    { id: "educare",       label: "Educare",       blurb: "Sites for schools, academies and course providers.",
      variants: [ { name: "Bright Path Academy",style: "Premium Modern" }, { name: "LEARNLAB", style: "Creative Bold" }, { name: "Oakridge Institute",style: "Minimal Professional" } ] },
    { id: "services",      label: "Services",      blurb: "General-purpose sites for agencies and local services.",
      variants: [ { name: "Anchor Services",style: "Premium Modern" }, { name: "FIXPOINT",     style: "Creative Bold" }, { name: "ProServe",         style: "Minimal Professional" } ] },
    { id: "hotels",        label: "Hotels",        blurb: "Luxury hospitality sites with rooms and booking.",
      variants: [ { name: "Aurelia Hotel",style: "Premium Modern" }, { name: "Solara Resort",   style: "Creative Bold" }, { name: "The Stay",         style: "Minimal Professional" } ] }
  ];

  var grid   = document.getElementById("libraryGrid");
  var chips  = document.getElementById("filterChips");
  var search = document.getElementById("searchInput");
  var empty  = document.getElementById("emptyState");
  var count  = document.getElementById("resultCount");

  function styleClass(style) {
    if (style.indexOf("Creative") === 0) return "tag--creative";
    if (style.indexOf("Minimal") === 0) return "tag--minimal";
    return "tag--premium";
  }

  function renderGrid() {
    var html = CATEGORIES.map(function (cat, i) {
      var variantLinks = cat.variants.map(function (v, idx) {
        var num = String(idx + 1).padStart(2, "0");
        return (
          '<a class="variant-pill ' + styleClass(v.style) + '" ' +
          'href="./' + cat.id + '/variant-' + num + '/index.html" ' +
          'title="' + v.name + ' — ' + v.style + '">' +
          '<span class="variant-pill__name">' + v.name + '</span>' +
          '<span class="variant-pill__style">' + v.style + "</span>" +
          "</a>"
        );
      }).join("");

      return (
        '<article class="card" data-category="' + cat.id + '" data-search="' +
        (cat.label + " " + cat.variants.map(function (v) { return v.name; }).join(" ")).toLowerCase() +
        '">' +
        '<div class="card__index">' + String(i + 1).padStart(2, "0") + "</div>" +
        '<h2 class="card__title">' + cat.label + "</h2>" +
        '<p class="card__blurb">' + cat.blurb + "</p>" +
        '<div class="card__variants">' + variantLinks + "</div>" +
        "</article>"
      );
    }).join("");

    grid.innerHTML = html;
  }

  function renderChips() {
    var all = '<button class="chip is-active" data-filter="all" type="button">All categories</button>';
    var rest = CATEGORIES.map(function (cat) {
      return '<button class="chip" data-filter="' + cat.id + '" type="button">' + cat.label + "</button>";
    }).join("");
    chips.innerHTML = all + rest;
  }

  function applyFilters() {
    var activeChip = chips.querySelector(".chip.is-active");
    var activeFilter = activeChip ? activeChip.getAttribute("data-filter") : "all";
    var term = search.value.trim().toLowerCase();
    var cards = grid.querySelectorAll(".card");
    var visible = 0;

    cards.forEach(function (card) {
      var matchesCategory = activeFilter === "all" || card.getAttribute("data-category") === activeFilter;
      var matchesTerm = term === "" || card.getAttribute("data-search").indexOf(term) !== -1;
      var show = matchesCategory && matchesTerm;
      card.style.display = show ? "" : "none";
      if (show) visible++;
    });

    empty.hidden = visible !== 0;
    count.textContent = visible * 3;
  }

  chips && chips.addEventListener("click", function (e) {
    var btn = e.target.closest(".chip");
    if (!btn) return;
    chips.querySelectorAll(".chip").forEach(function (c) { c.classList.remove("is-active"); });
    btn.classList.add("is-active");
    applyFilters();
  });

  search && search.addEventListener("input", applyFilters);

  renderGrid();
  renderChips();
  applyFilters();
})();
