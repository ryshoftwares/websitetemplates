/* ==========================================================================
   EverAfter — Luxury Wedding Editorial
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

  /* ---- countdown timer ---- */
  var countdown = document.querySelector("[data-countdown]");
  if (countdown) {
    var targetDate = new Date("2027-06-12T16:00:00");
    var daysEl = countdown.querySelector("[data-days]");
    var hoursEl = countdown.querySelector("[data-hours]");
    var minsEl = countdown.querySelector("[data-minutes]");
    var secsEl = countdown.querySelector("[data-seconds]");

    function pad(n) { return String(n).padStart(2, "0"); }

    function tick() {
      var now = new Date();
      var diff = targetDate.getTime() - now.getTime();

      if (diff <= 0) {
        if (daysEl) daysEl.textContent = "00";
        if (hoursEl) hoursEl.textContent = "00";
        if (minsEl) minsEl.textContent = "00";
        if (secsEl) secsEl.textContent = "00";
        clearInterval(timerId);
        return;
      }

      var totalSeconds = Math.floor(diff / 1000);
      var days = Math.floor(totalSeconds / 86400);
      var hours = Math.floor((totalSeconds % 86400) / 3600);
      var minutes = Math.floor((totalSeconds % 3600) / 60);
      var seconds = totalSeconds % 60;

      if (daysEl) daysEl.textContent = pad(days);
      if (hoursEl) hoursEl.textContent = pad(hours);
      if (minsEl) minsEl.textContent = pad(minutes);
      if (secsEl) secsEl.textContent = pad(seconds);
    }

    tick();
    var timerId = setInterval(tick, 1000);
  }

  /* ---- gallery filters ---- */
  var filterButtons = document.querySelectorAll("[data-filter]");
  var galleryGroups = document.querySelectorAll("[data-gallery-group]");
  if (filterButtons.length && galleryGroups.length) {
    filterButtons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        filterButtons.forEach(function (b) { b.classList.remove("is-active"); });
        btn.classList.add("is-active");
        var filter = btn.getAttribute("data-filter");
        galleryGroups.forEach(function (group) {
          if (filter === "all" || group.getAttribute("data-gallery-group") === filter) {
            group.style.display = "";
          } else {
            group.style.display = "none";
          }
        });
      });
    });
  }

  /* ---- gallery lightbox ---- */
  var lightbox = document.getElementById("lightbox");
  if (lightbox) {
    var lightboxImg = document.getElementById("lightboxImage");
    var lightboxCaption = document.getElementById("lightboxCaption");
    var lightboxClose = document.getElementById("lightboxClose");
    var triggers = document.querySelectorAll(".masonry__item");
    var lastTrigger = null;

    function openLightbox(trigger) {
      var fullSrc = trigger.getAttribute("data-full") || trigger.querySelector("img").src;
      var alt = trigger.querySelector("img").alt;
      var caption = trigger.getAttribute("data-caption") || alt;

      lightboxImg.src = fullSrc;
      lightboxImg.alt = alt;
      lightboxCaption.textContent = caption;
      lightbox.classList.add("is-open");
      lastTrigger = trigger;
      lightboxClose.focus();
      document.body.style.overflow = "hidden";
    }

    function closeLightbox() {
      lightbox.classList.remove("is-open");
      lightboxImg.src = "";
      document.body.style.overflow = "";
      if (lastTrigger) {
        lastTrigger.focus();
        lastTrigger = null;
      }
    }

    triggers.forEach(function (trigger) {
      trigger.addEventListener("click", function () {
        openLightbox(trigger);
      });
    });

    lightboxClose.addEventListener("click", closeLightbox);

    lightbox.addEventListener("click", function (e) {
      if (e.target === lightbox) closeLightbox();
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && lightbox.classList.contains("is-open")) {
        closeLightbox();
      }
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
