/* ==========================================================================
   WILDFORM — Creative Bold, collage variant
   Independent script. Not shared with any other variant or category.
   ========================================================================== */

(function () {
  "use strict";

  /* ---- sticky header scroll shadow ---- */
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

  /* ---- scroll-reveal via IntersectionObserver ---- */
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
  if (counters.length && "IntersectionObserver" in window) {
    var counterObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          animateCount(entry.target);
          counterObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.5 }
    );
    counters.forEach(function (el) { counterObserver.observe(el); });
  }

  function animateCount(el) {
    var target = parseFloat(el.getAttribute("data-count"));
    var suffix = el.getAttribute("data-suffix") || "";
    var duration = 1100;
    var start = null;

    function step(timestamp) {
      if (!start) start = timestamp;
      var progress = Math.min((timestamp - start) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      var value = target * eased;
      el.textContent = (target % 1 === 0 ? Math.round(value) : value.toFixed(1)) + suffix;
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  /* ---- pointer-driven tilt on hover for collage art frames ----
     Any element with [data-tilt] keeps its own base rotation
     (declared via data-tilt-base, in degrees) and layers a
     cursor-following translate + slight scale on top of it. */
  var prefersReducedMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!prefersReducedMotion) {
    document.querySelectorAll("[data-tilt]").forEach(function (art) {
      var base = parseFloat(art.getAttribute("data-tilt-base") || "0");
      art.addEventListener("mousemove", function (e) {
        var rect = art.getBoundingClientRect();
        var x = (e.clientX - rect.left) / rect.width - 0.5;
        var y = (e.clientY - rect.top) / rect.height - 0.5;
        art.style.transform = "rotate(" + base + "deg) translate(" + (x * 12) + "px," + (y * 12) + "px) scale(1.02)";
      });
      art.addEventListener("mouseleave", function () {
        art.style.transform = "rotate(" + base + "deg)";
      });
    });
  }

  /* ---- work.html category filter ---- */
  var filterButtons = document.querySelectorAll("[data-filter]");
  var workCards = document.querySelectorAll("[data-category]");
  if (filterButtons.length && workCards.length) {
    filterButtons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var filter = btn.getAttribute("data-filter");

        filterButtons.forEach(function (b) {
          var active = b === btn;
          b.setAttribute("aria-pressed", active ? "true" : "false");
        });

        workCards.forEach(function (card) {
          var match = filter === "all" || card.getAttribute("data-category") === filter;
          card.classList.toggle("is-hidden", !match);
        });
      });
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
