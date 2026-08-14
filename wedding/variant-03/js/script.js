/* ==========================================================================
   The Wedding Studio — Minimal Professional
   Independent script. Not shared with any other variant or category.
   ========================================================================== */

(function () {
  "use strict";

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

  /* ---- countdown timer ---- */
  var countdownEl = document.getElementById("countdown");
  if (countdownEl) {
    var targetDate = new Date("2027-09-18T15:30:00");
    var dEl = document.getElementById("cdDays");
    var hEl = document.getElementById("cdHours");
    var mEl = document.getElementById("cdMinutes");
    var sEl = document.getElementById("cdSeconds");

    function pad(n) { return String(n).padStart(2, "0"); }

    function tick() {
      var diff = targetDate.getTime() - Date.now();
      if (diff <= 0) {
        if (dEl) dEl.textContent = "00";
        if (hEl) hEl.textContent = "00";
        if (mEl) mEl.textContent = "00";
        if (sEl) sEl.textContent = "00";
        return;
      }
      var days = Math.floor(diff / (1000 * 60 * 60 * 24));
      var hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      var minutes = Math.floor((diff / (1000 * 60)) % 60);
      var seconds = Math.floor((diff / 1000) % 60);
      if (dEl) dEl.textContent = pad(days);
      if (hEl) hEl.textContent = pad(hours);
      if (mEl) mEl.textContent = pad(minutes);
      if (sEl) sEl.textContent = pad(seconds);
    }
    tick();
    setInterval(tick, 1000);
  }

  /* ---- gallery filter ---- */
  var filterButtons = document.querySelectorAll(".filter-btn");
  var galleryItems = document.querySelectorAll(".gallery-item");
  filterButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      filterButtons.forEach(function (b) { b.classList.remove("is-active"); });
      btn.classList.add("is-active");
      var filter = btn.getAttribute("data-filter");
      galleryItems.forEach(function (item) {
        var show = filter === "all" || item.getAttribute("data-category") === filter;
        item.classList.toggle("is-hidden", !show);
      });
    });
  });

  /* ---- lightbox ---- */
  var lightbox = document.getElementById("lightbox");
  if (lightbox) {
    var lightboxImg = lightbox.querySelector("img");
    var lightboxCaption = lightbox.querySelector(".lightbox__caption");
    var closeBtn = lightbox.querySelector(".lightbox__close");
    var lastTrigger = null;

    document.querySelectorAll(".gallery-item button").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var img = btn.querySelector("img");
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        if (lightboxCaption) lightboxCaption.innerHTML = btn.getAttribute("data-caption") || "";
        lastTrigger = btn;
        lightbox.classList.add("is-open");
        closeBtn.focus();
      });
    });

    function closeLightbox() {
      lightbox.classList.remove("is-open");
      if (lastTrigger) lastTrigger.focus();
    }

    closeBtn.addEventListener("click", closeLightbox);
    lightbox.querySelector(".lightbox__backdrop").addEventListener("click", closeLightbox);
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && lightbox.classList.contains("is-open")) closeLightbox();
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
