/* ==========================================================================
   Lumen Market — Premium Modern
   Independent script. Not shared with any other variant or category.
   ========================================================================== */

(function () {
  "use strict";

  var CART_KEY = "lumen-market-cart-count";
  var WISHLIST_KEY = "lumen-market-wishlist";

  /* ---- sticky header shadow ---- */
  var header = document.getElementById("siteHeader");
  function onScroll() {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  }
  document.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---- mobile nav toggle ---- */
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

  /* ---- scroll-reveal ---- */
  var revealTargets = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window && revealTargets.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    revealTargets.forEach(function (el) { observer.observe(el); });
  } else {
    revealTargets.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* ---- animated stat counters ---- */
  var counters = document.querySelectorAll("[data-count]");
  if (counters.length) {
    function animateCounter(el) {
      var target = parseFloat(el.getAttribute("data-count"));
      var suffix = el.getAttribute("data-suffix") || "";
      var isDecimal = String(target).indexOf(".") !== -1;
      var duration = 1400;
      var start = null;
      function step(ts) {
        if (!start) start = ts;
        var progress = Math.min((ts - start) / duration, 1);
        var eased = 1 - Math.pow(1 - progress, 3);
        var value = target * eased;
        el.textContent = (isDecimal ? value.toFixed(1) : Math.floor(value)) + suffix;
        if (progress < 1) window.requestAnimationFrame(step);
      }
      window.requestAnimationFrame(step);
    }
    if ("IntersectionObserver" in window) {
      var counterObserver = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              animateCounter(entry.target);
              counterObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.4 }
      );
      counters.forEach(function (el) { counterObserver.observe(el); });
    } else {
      counters.forEach(animateCounter);
    }
  }

  /* ---- cart count (persisted via localStorage, no backend) ---- */
  function getCartCount() {
    var stored = parseInt(localStorage.getItem(CART_KEY) || "0", 10);
    return isNaN(stored) ? 0 : stored;
  }
  function renderCartCount(bump) {
    var el = document.getElementById("cartCount");
    var btn = document.getElementById("cartBtn");
    if (!el) return;
    var count = getCartCount();
    el.textContent = String(count);
    if (btn) btn.setAttribute("aria-label", "View cart, " + count + " item" + (count === 1 ? "" : "s"));
    if (bump) {
      el.classList.add("is-bumped");
      window.setTimeout(function () { el.classList.remove("is-bumped"); }, 320);
    }
  }
  function addToCart(qty) {
    var next = getCartCount() + qty;
    localStorage.setItem(CART_KEY, String(next));
    renderCartCount(true);
  }
  renderCartCount(false);

  document.querySelectorAll(".add-mini").forEach(function (btn) {
    btn.addEventListener("click", function () { addToCart(1); });
  });

  /* ---- wishlist heart toggle (persisted per product id) ---- */
  function getWishlist() {
    try {
      return JSON.parse(localStorage.getItem(WISHLIST_KEY) || "[]");
    } catch (err) {
      return [];
    }
  }
  function setWishlist(list) {
    localStorage.setItem(WISHLIST_KEY, JSON.stringify(list));
  }
  var wishlist = getWishlist();
  document.querySelectorAll(".wishlist-btn").forEach(function (btn) {
    var id = btn.getAttribute("data-product-id");
    if (id && wishlist.indexOf(id) !== -1) {
      btn.classList.add("is-saved");
      btn.setAttribute("aria-pressed", "true");
    }
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

  /* ---- products page: search, category/price filters, sort ---- */
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
      return checkboxes
        .filter(function (cb) { return cb.name === groupName && cb.checked; })
        .map(function (cb) { return cb.value; });
    }

    function matchesPrice(price, ranges) {
      if (!ranges.length) return true;
      return ranges.some(function (range) {
        if (range === "under-40") return price < 40;
        if (range === "40-90") return price >= 40 && price <= 90;
        if (range === "over-90") return price > 90;
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

        var matchesTerm = !term || name.indexOf(term) !== -1;
        var matchesCategory = !categories.length || categories.indexOf(category) !== -1;
        var matchesPriceRange = matchesPrice(price, priceRanges);

        var show = matchesTerm && matchesCategory && matchesPriceRange;
        card.hidden = !show;
        if (show) visibleCount++;
      });

      if (countEl) countEl.textContent = visibleCount + (visibleCount === 1 ? " product" : " products");
      if (emptyState) emptyState.classList.toggle("is-visible", visibleCount === 0);
      applySort();
    }

    function applySort() {
      var value = sortSelect ? sortSelect.value : "featured";
      var sorted = cards.slice();

      if (value === "price-low") {
        sorted.sort(function (a, b) { return parseFloat(a.getAttribute("data-price")) - parseFloat(b.getAttribute("data-price")); });
      } else if (value === "price-high") {
        sorted.sort(function (a, b) { return parseFloat(b.getAttribute("data-price")) - parseFloat(a.getAttribute("data-price")); });
      } else if (value === "newest") {
        sorted.sort(function (a, b) { return parseInt(b.getAttribute("data-date"), 10) - parseInt(a.getAttribute("data-date"), 10); });
      } else {
        sorted.sort(function (a, b) { return parseInt(a.getAttribute("data-order"), 10) - parseInt(b.getAttribute("data-order"), 10); });
      }

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

  /* ---- offers page: copy discount code to clipboard ---- */
  document.querySelectorAll("[data-copy-code]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var code = btn.getAttribute("data-copy-code");
      function markCopied() {
        var original = btn.textContent;
        btn.textContent = "Copied!";
        btn.classList.add("is-copied");
        window.setTimeout(function () {
          btn.textContent = original;
          btn.classList.remove("is-copied");
        }, 1800);
      }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(code).then(markCopied).catch(markCopied);
      } else {
        markCopied();
      }
    });
  });

  /* ---- offers page: newsletter signup validation ---- */
  var newsletterForm = document.getElementById("newsletterForm");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var input = document.getElementById("newsletterEmail");
      var note = document.getElementById("newsletterNote");
      var value = input ? input.value.trim() : "";
      var valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      if (!note) return;
      note.classList.remove("is-error", "is-success");
      if (!valid) {
        note.textContent = "Please enter a valid email address.";
        note.classList.add("is-error");
        return;
      }
      note.textContent = "You're subscribed — welcome to Lumen Market.";
      note.classList.add("is-success");
      newsletterForm.reset();
    });
  }

  /* ---- contact form validation ---- */
  var form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var valid = true;

      form.querySelectorAll("[required]").forEach(function (input) {
        var field = input.closest(".field");
        var value = input.value.trim();
        var ok = value.length > 0;

        if (input.type === "email" && ok) {
          ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        }

        field.classList.toggle("has-error", !ok);
        if (!ok) valid = false;
      });

      var successBox = document.getElementById("formSuccess");
      if (valid) {
        if (successBox) successBox.classList.add("is-visible");
        form.reset();
      } else if (successBox) {
        successBox.classList.remove("is-visible");
      }
    });
  }
})();
