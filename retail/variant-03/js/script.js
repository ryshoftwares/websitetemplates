/* ==========================================================================
   Basic Goods — Minimal Professional
   Independent script. Not shared with any other variant or category.
   ========================================================================== */

(function () {
  "use strict";

  var CART_KEY = "basicgoods-cart-count";
  var WISHLIST_KEY = "basicgoods-wishlist";

  var toggle = document.getElementById("navToggle");
  var nav = document.getElementById("primaryNav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  var revealTargets = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window && revealTargets.length) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); }
      });
    }, { threshold: 0.15 });
    revealTargets.forEach(function (el) { observer.observe(el); });
  } else {
    revealTargets.forEach(function (el) { el.classList.add("is-visible"); });
  }

  function getCartCount() { var s = parseInt(localStorage.getItem(CART_KEY) || "0", 10); return isNaN(s) ? 0 : s; }
  function renderCartCount(bump) {
    var el = document.getElementById("cartCount");
    var btn = document.getElementById("cartBtn");
    if (!el) return;
    var count = getCartCount();
    el.textContent = String(count);
    if (btn) btn.setAttribute("aria-label", "View cart, " + count + " item" + (count === 1 ? "" : "s"));
    if (bump) { el.classList.add("is-bumped"); window.setTimeout(function () { el.classList.remove("is-bumped"); }, 300); }
  }
  function addToCart(qty) { localStorage.setItem(CART_KEY, String(getCartCount() + qty)); renderCartCount(true); }
  renderCartCount(false);

  function getWishlist() { try { return JSON.parse(localStorage.getItem(WISHLIST_KEY) || "[]"); } catch (e) { return []; } }
  function setWishlist(list) { localStorage.setItem(WISHLIST_KEY, JSON.stringify(list)); }
  var wishlist = getWishlist();
  document.querySelectorAll(".wishlist-btn").forEach(function (btn) {
    var id = btn.getAttribute("data-product-id");
    if (id && wishlist.indexOf(id) !== -1) { btn.classList.add("is-saved"); btn.setAttribute("aria-pressed", "true"); }
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      var saved = btn.classList.toggle("is-saved");
      btn.setAttribute("aria-pressed", saved ? "true" : "false");
      var pid = btn.getAttribute("data-product-id");
      if (!pid) return;
      var current = getWishlist();
      var idx = current.indexOf(pid);
      if (saved && idx === -1) current.push(pid);
      if (!saved && idx !== -1) current.splice(idx, 1);
      setWishlist(current);
    });
  });

  var grid = document.getElementById("productGrid");
  if (grid) {
    var cards = Array.prototype.slice.call(grid.querySelectorAll(".product-card"));
    var searchInput = document.getElementById("productSearch");
    var sortSelect = document.getElementById("sortSelect");
    var checkboxes = Array.prototype.slice.call(document.querySelectorAll(".filter-option input[type='checkbox']"));
    var clearBtn = document.getElementById("clearFilters");
    var countEl = document.getElementById("resultCount");
    var emptyState = document.getElementById("emptyState");

    function activeValues(groupName) {
      return checkboxes.filter(function (cb) { return cb.name === groupName && cb.checked; }).map(function (cb) { return cb.value; });
    }
    function matchesPrice(price, ranges) {
      if (!ranges.length) return true;
      return ranges.some(function (range) {
        if (range === "under-50") return price < 50;
        if (range === "50-100") return price >= 50 && price <= 100;
        if (range === "over-100") return price > 100;
        return true;
      });
    }
    function applyFilters() {
      var term = (searchInput && searchInput.value.trim().toLowerCase()) || "";
      var categories = activeValues("category");
      var priceRanges = activeValues("price");
      var visibleCount = 0;
      cards.forEach(function (card) {
        var name = (card.getAttribute("data-name") || "").toLowerCase();
        var category = card.getAttribute("data-category") || "";
        var price = parseFloat(card.getAttribute("data-price") || "0");
        var show = (!term || name.indexOf(term) !== -1) && (!categories.length || categories.indexOf(category) !== -1) && matchesPrice(price, priceRanges);
        card.hidden = !show;
        if (show) visibleCount++;
      });
      if (countEl) countEl.textContent = visibleCount + (visibleCount === 1 ? " product" : " products");
      if (emptyState) emptyState.style.display = visibleCount === 0 ? "block" : "none";
      applySort();
    }
    function applySort() {
      var value = sortSelect ? sortSelect.value : "featured";
      var sorted = cards.slice();
      if (value === "price-low") sorted.sort(function (a, b) { return parseFloat(a.getAttribute("data-price")) - parseFloat(b.getAttribute("data-price")); });
      else if (value === "price-high") sorted.sort(function (a, b) { return parseFloat(b.getAttribute("data-price")) - parseFloat(a.getAttribute("data-price")); });
      else if (value === "newest") sorted.sort(function (a, b) { return parseInt(b.getAttribute("data-date"), 10) - parseInt(a.getAttribute("data-date"), 10); });
      else sorted.sort(function (a, b) { return parseInt(a.getAttribute("data-order"), 10) - parseInt(b.getAttribute("data-order"), 10); });
      sorted.forEach(function (card) { grid.appendChild(card); });
    }
    if (searchInput) searchInput.addEventListener("input", applyFilters);
    if (sortSelect) sortSelect.addEventListener("change", applyFilters);
    checkboxes.forEach(function (cb) { cb.addEventListener("change", applyFilters); });
    if (clearBtn) {
      clearBtn.addEventListener("click", function () {
        if (searchInput) searchInput.value = "";
        checkboxes.forEach(function (cb) { cb.checked = false; });
        if (sortSelect) sortSelect.value = "featured";
        applyFilters();
      });
    }
    applyFilters();
  }

  var gallery = document.querySelector(".product-gallery");
  if (gallery) {
    var mainImg = gallery.querySelector(".product-gallery__main img");
    gallery.querySelectorAll(".thumb").forEach(function (thumb) {
      thumb.addEventListener("click", function () {
        gallery.querySelectorAll(".thumb").forEach(function (t) { t.classList.remove("is-active"); t.setAttribute("aria-pressed", "false"); });
        thumb.classList.add("is-active");
        thumb.setAttribute("aria-pressed", "true");
        var full = thumb.getAttribute("data-full");
        var alt = thumb.querySelector("img") ? thumb.querySelector("img").getAttribute("alt") : "";
        if (mainImg && full) { mainImg.setAttribute("src", full); mainImg.setAttribute("alt", alt); }
      });
    });
  }

  document.querySelectorAll(".variant-options").forEach(function (group) {
    group.querySelectorAll(".variant-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        group.querySelectorAll(".variant-btn").forEach(function (b) { b.setAttribute("aria-pressed", "false"); });
        btn.setAttribute("aria-pressed", "true");
      });
    });
  });

  var qtyStepper = document.querySelector(".qty-stepper");
  if (qtyStepper) {
    var qtyInput = qtyStepper.querySelector("input");
    var decBtn = qtyStepper.querySelector("[data-step='down']");
    var incBtn = qtyStepper.querySelector("[data-step='up']");
    function clampQty(value) { var n = parseInt(value, 10); if (isNaN(n) || n < 1) n = 1; if (n > 20) n = 20; return n; }
    if (decBtn) decBtn.addEventListener("click", function () { qtyInput.value = clampQty(parseInt(qtyInput.value, 10) - 1); });
    if (incBtn) incBtn.addEventListener("click", function () { qtyInput.value = clampQty(parseInt(qtyInput.value, 10) + 1); });
    if (qtyInput) qtyInput.addEventListener("change", function () { qtyInput.value = clampQty(qtyInput.value); });
  }

  var addToCartBtn = document.getElementById("addToCartBtn");
  if (addToCartBtn) {
    addToCartBtn.addEventListener("click", function () {
      var qtyField = document.querySelector(".qty-stepper input");
      var qty = qtyField ? (parseInt(qtyField.value, 10) || 1) : 1;
      addToCart(qty);
      var note = document.getElementById("addToCartNote");
      if (note) {
        note.hidden = false;
        window.clearTimeout(note._hideTimer);
        note._hideTimer = window.setTimeout(function () { note.hidden = true; }, 2600);
      }
    });
  }

  var form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var valid = true;
      form.querySelectorAll("[required]").forEach(function (input) {
        var field = input.closest(".field");
        var value = input.value.trim();
        var ok = value.length > 0;
        if (input.type === "email" && ok) ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        field.classList.toggle("has-error", !ok);
        if (!ok) valid = false;
      });
      var successBox = document.getElementById("formSuccess");
      if (valid) { if (successBox) successBox.classList.add("is-visible"); form.reset(); }
      else if (successBox) successBox.classList.remove("is-visible");
    });
  }
})();
