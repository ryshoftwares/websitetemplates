/* ==========================================================================
   Solara Resort — Creative Bold
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

  /* ---- guest count stepper (hero booking bar + booking page) ---- */
  document.querySelectorAll(".guest-stepper").forEach(function (stepper) {
    var countEl = stepper.querySelector("span");
    var decBtn = stepper.querySelector("[data-step='down']");
    var incBtn = stepper.querySelector("[data-step='up']");
    var min = parseInt(stepper.getAttribute("data-min") || "1", 10);
    var max = parseInt(stepper.getAttribute("data-max") || "8", 10);
    function getCount() { return parseInt(countEl.textContent, 10) || min; }
    function setCount(n) {
      if (n < min) n = min;
      if (n > max) n = max;
      countEl.textContent = String(n);
      var hidden = stepper.parentElement.querySelector("input[type='hidden']");
      if (hidden) hidden.value = String(n);
    }
    if (decBtn) decBtn.addEventListener("click", function () { setCount(getCount() - 1); });
    if (incBtn) incBtn.addEventListener("click", function () { setCount(getCount() + 1); });
  });

  /* ---- rooms page: filter tabs by room type ---- */
  var roomGrid = document.getElementById("roomGrid");
  if (roomGrid) {
    var roomCards = Array.prototype.slice.call(roomGrid.querySelectorAll(".room-card"));
    var filterBtns = Array.prototype.slice.call(document.querySelectorAll(".room-filter-btn"));
    filterBtns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        filterBtns.forEach(function (b) { b.setAttribute("aria-pressed", "false"); });
        btn.setAttribute("aria-pressed", "true");
        var filter = btn.getAttribute("data-filter");
        roomCards.forEach(function (card) {
          var type = card.getAttribute("data-type");
          card.hidden = filter !== "all" && type !== filter;
        });
      });
    });
  }

  /* ---- gallery: category filter + lightbox with keyboard nav ---- */
  var galleryGrid = document.getElementById("galleryGrid");
  if (galleryGrid) {
    var galleryButtons = Array.prototype.slice.call(galleryGrid.querySelectorAll("button[data-full]"));
    var catButtons = Array.prototype.slice.call(document.querySelectorAll(".gallery-grid__cat button"));
    catButtons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        catButtons.forEach(function (b) { b.setAttribute("aria-pressed", "false"); });
        btn.setAttribute("aria-pressed", "true");
        var filter = btn.getAttribute("data-filter");
        galleryButtons.forEach(function (item) {
          var cat = item.getAttribute("data-category");
          item.parentElement.hidden = filter !== "all" && cat !== filter;
        });
      });
    });

    var lightbox = document.getElementById("lightbox");
    var lightboxImg = lightbox ? lightbox.querySelector("img") : null;
    var lightboxCaption = lightbox ? lightbox.querySelector(".lightbox__caption") : null;
    var closeBtn = lightbox ? lightbox.querySelector(".lightbox__close") : null;
    var prevBtn = lightbox ? lightbox.querySelector(".lightbox__prev") : null;
    var nextBtn = lightbox ? lightbox.querySelector(".lightbox__next") : null;
    var currentIndex = 0;
    var lastFocused = null;

    function openLightbox(index) {
      currentIndex = index;
      var btn = galleryButtons[index];
      if (!btn || !lightbox) return;
      lastFocused = document.activeElement;
      lightboxImg.setAttribute("src", btn.getAttribute("data-full"));
      lightboxImg.setAttribute("alt", btn.querySelector("img").getAttribute("alt"));
      if (lightboxCaption) lightboxCaption.textContent = btn.getAttribute("data-caption") || "";
      lightbox.classList.add("is-open");
      lightbox.setAttribute("aria-hidden", "false");
      closeBtn.focus();
    }
    function closeLightbox() {
      lightbox.classList.remove("is-open");
      lightbox.setAttribute("aria-hidden", "true");
      if (lastFocused) lastFocused.focus();
    }
    function showRelative(delta) {
      var visible = galleryButtons.filter(function (b) { return !b.parentElement.hidden; });
      var pos = visible.indexOf(galleryButtons[currentIndex]);
      if (pos === -1) pos = 0;
      var nextPos = (pos + delta + visible.length) % visible.length;
      openLightbox(galleryButtons.indexOf(visible[nextPos]));
    }

    galleryButtons.forEach(function (btn, index) {
      btn.addEventListener("click", function () { openLightbox(index); });
    });
    if (closeBtn) closeBtn.addEventListener("click", closeLightbox);
    if (prevBtn) prevBtn.addEventListener("click", function () { showRelative(-1); });
    if (nextBtn) nextBtn.addEventListener("click", function () { showRelative(1); });
    if (lightbox) {
      lightbox.addEventListener("click", function (e) { if (e.target === lightbox) closeLightbox(); });
      document.addEventListener("keydown", function (e) {
        if (!lightbox.classList.contains("is-open")) return;
        if (e.key === "Escape") closeLightbox();
        if (e.key === "ArrowLeft") showRelative(-1);
        if (e.key === "ArrowRight") showRelative(1);
      });
    }
  }

  /* ---- booking form: date validation + submit ---- */
  var bookingForm = document.getElementById("bookingForm");
  if (bookingForm) {
    var checkIn = document.getElementById("checkIn");
    var checkOut = document.getElementById("checkOut");

    function validateDates() {
      if (!checkIn || !checkOut || !checkIn.value || !checkOut.value) return true;
      var inDate = new Date(checkIn.value);
      var outDate = new Date(checkOut.value);
      var ok = outDate > inDate;
      var field = checkOut.closest(".field");
      field.classList.toggle("has-error", !ok);
      return ok;
    }
    if (checkIn) checkIn.addEventListener("change", validateDates);
    if (checkOut) checkOut.addEventListener("change", validateDates);

    bookingForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var valid = true;

      bookingForm.querySelectorAll("[required]").forEach(function (input) {
        var field = input.closest(".field");
        var value = input.value.trim();
        var ok = value.length > 0;
        if (input.type === "email" && ok) ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        field.classList.toggle("has-error", !ok);
        if (!ok) valid = false;
      });

      if (!validateDates()) valid = false;

      var successBox = document.getElementById("formSuccess");
      if (valid) {
        if (successBox) successBox.classList.add("is-visible");
        bookingForm.reset();
      } else if (successBox) {
        successBox.classList.remove("is-visible");
      }
    });
  }

  /* ---- generic contact form validation (used by pages without booking form) ---- */
  var contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var valid = true;
      contactForm.querySelectorAll("[required]").forEach(function (input) {
        var field = input.closest(".field");
        var value = input.value.trim();
        var ok = value.length > 0;
        if (input.type === "email" && ok) ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        field.classList.toggle("has-error", !ok);
        if (!ok) valid = false;
      });
      var successBox = document.getElementById("formSuccess");
      if (valid) {
        if (successBox) successBox.classList.add("is-visible");
        contactForm.reset();
      } else if (successBox) {
        successBox.classList.remove("is-visible");
      }
    });
  }
})();
