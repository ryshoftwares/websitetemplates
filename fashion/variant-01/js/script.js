/* ==========================================================================
   Maison Ives — Editorial Luxury
   Independent script. Not shared with any other variant or category.
   ========================================================================== */

(function () {
  "use strict";

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
    var duration = 1200;
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

  /* ---- wishlist heart-toggle ---- */
  document.querySelectorAll(".wishlist-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var pressed = btn.getAttribute("aria-pressed") === "true";
      btn.setAttribute("aria-pressed", pressed ? "false" : "true");
      var label = btn.querySelector(".visually-hidden");
      if (label) {
        label.textContent = pressed ? "Add to wishlist" : "Remove from wishlist";
      }
    });
  });

  /* ---- product colour swatches ---- */
  document.querySelectorAll(".swatch-row").forEach(function (row) {
    var swatches = row.querySelectorAll(".swatch");
    swatches.forEach(function (swatch) {
      swatch.addEventListener("click", function () {
        swatches.forEach(function (s) { s.setAttribute("aria-pressed", "false"); });
        swatch.setAttribute("aria-pressed", "true");
      });
    });
  });

  /* ---- lookbook lightbox ---- */
  var lightbox = document.getElementById("lightbox");
  if (lightbox) {
    var lbImage = document.getElementById("lightboxImage");
    var lbCaption = document.getElementById("lightboxCaption");
    var lbClose = lightbox.querySelector(".lightbox__close");
    var lbPrev = lightbox.querySelector(".lightbox__nav--prev");
    var lbNext = lightbox.querySelector(".lightbox__nav--next");
    var triggers = Array.prototype.slice.call(document.querySelectorAll(".look-item"));
    var lastTrigger = null;
    var currentIndex = 0;

    function openLightbox(index) {
      var trigger = triggers[index];
      if (!trigger) return;
      currentIndex = index;
      lastTrigger = trigger;
      var img = trigger.querySelector("img");
      var caption = trigger.getAttribute("data-caption") || "";
      lbImage.src = img.getAttribute("src");
      lbImage.alt = img.getAttribute("alt") || "";
      lbCaption.textContent = caption;
      lightbox.classList.add("is-open");
      lightbox.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
      lbClose.focus();
    }

    function closeLightbox() {
      lightbox.classList.remove("is-open");
      lightbox.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
      lbImage.src = "";
      if (lastTrigger) lastTrigger.focus();
    }

    function showRelative(delta) {
      var next = (currentIndex + delta + triggers.length) % triggers.length;
      openLightbox(next);
    }

    triggers.forEach(function (trigger, index) {
      trigger.addEventListener("click", function () { openLightbox(index); });
    });

    if (lbClose) lbClose.addEventListener("click", closeLightbox);
    if (lbPrev) lbPrev.addEventListener("click", function () { showRelative(-1); });
    if (lbNext) lbNext.addEventListener("click", function () { showRelative(1); });

    lightbox.addEventListener("click", function (e) {
      if (e.target === lightbox) closeLightbox();
    });

    document.addEventListener("keydown", function (e) {
      if (!lightbox.classList.contains("is-open")) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") showRelative(-1);
      if (e.key === "ArrowRight") showRelative(1);
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
