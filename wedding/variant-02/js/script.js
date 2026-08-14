/* ==========================================================================
   Vow & Co. — Creative Bold
   Independent script. Not shared with any other variant or category.
   ========================================================================== */

(function () {
  "use strict";

  /* ---------------------------------------------------------- sticky header */
  var header = document.getElementById("siteHeader");
  function onScroll() {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  }
  document.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------------------------------------------------------- mobile nav */
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

  /* ---------------------------------------------------------- scroll reveal */
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

  /* ---------------------------------------------------------- animated stat counters */
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
  } else {
    counters.forEach(function (el) {
      var target = parseFloat(el.getAttribute("data-count"));
      el.textContent = target + (el.getAttribute("data-suffix") || "");
    });
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

  /* ---------------------------------------------------------- pointer tilt on hero art */
  document.querySelectorAll(".hero__art").forEach(function (art) {
    art.addEventListener("mousemove", function (e) {
      var rect = art.getBoundingClientRect();
      var x = (e.clientX - rect.left) / rect.width - 0.5;
      var y = (e.clientY - rect.top) / rect.height - 0.5;
      art.style.transform = "rotate(2deg) translate(" + (x * 8) + "px," + (y * 8) + "px)";
    });
    art.addEventListener("mouseleave", function () {
      art.style.transform = "rotate(2deg)";
    });
  });

  /* ---------------------------------------------------------- countdown timer */
  var countdownRoot = document.getElementById("countdown");
  if (countdownRoot) {
    var targetDate = new Date("2027-09-18T15:00:00");
    var daysEl = document.getElementById("cdDays");
    var hoursEl = document.getElementById("cdHours");
    var minsEl = document.getElementById("cdMinutes");
    var secsEl = document.getElementById("cdSeconds");
    var noteEl = document.getElementById("cdNote");

    function pad(n) { return String(n).padStart(2, "0"); }

    function tickCountdown() {
      var now = new Date();
      var diff = targetDate.getTime() - now.getTime();

      if (diff <= 0) {
        daysEl.textContent = "00";
        hoursEl.textContent = "00";
        minsEl.textContent = "00";
        secsEl.textContent = "00";
        if (noteEl) noteEl.textContent = "Maya & Theo just said “I do.” Congratulations to them — let's plan yours next.";
        clearInterval(countdownInterval);
        return;
      }

      var totalSeconds = Math.floor(diff / 1000);
      var days = Math.floor(totalSeconds / 86400);
      var hours = Math.floor((totalSeconds % 86400) / 3600);
      var minutes = Math.floor((totalSeconds % 3600) / 60);
      var seconds = totalSeconds % 60;

      daysEl.textContent = pad(days);
      hoursEl.textContent = pad(hours);
      minsEl.textContent = pad(minutes);
      secsEl.textContent = pad(seconds);
    }

    tickCountdown();
    var countdownInterval = setInterval(tickCountdown, 1000);
  }

  /* ---------------------------------------------------------- gallery filter */
  var filterButtons = document.querySelectorAll(".filter-btn");
  var galleryItems = document.querySelectorAll("[data-category]");
  if (filterButtons.length && galleryItems.length) {
    filterButtons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        filterButtons.forEach(function (b) { b.classList.remove("is-active"); b.setAttribute("aria-pressed", "false"); });
        btn.classList.add("is-active");
        btn.setAttribute("aria-pressed", "true");
        var filter = btn.getAttribute("data-filter");
        galleryItems.forEach(function (item) {
          var show = filter === "all" || item.getAttribute("data-category") === filter;
          item.style.display = show ? "" : "none";
        });
      });
    });
  }

  /* ---------------------------------------------------------- lightbox */
  var lightbox = document.getElementById("lightbox");
  if (lightbox) {
    var lightboxImg = document.getElementById("lightboxImage");
    var lightboxCaption = document.getElementById("lightboxCaption");
    var lightboxClose = document.getElementById("lightboxClose");
    var lightboxBackdrop = lightbox.querySelector(".lightbox__backdrop");
    var lastFocused = null;

    function openLightbox(trigger) {
      var fullSrc = trigger.getAttribute("data-full") || trigger.querySelector("img").src;
      var alt = trigger.querySelector("img").alt;
      var caption = trigger.getAttribute("data-caption") || alt;

      lightboxImg.src = fullSrc;
      lightboxImg.alt = alt;
      lightboxCaption.textContent = caption;
      lastFocused = trigger;

      lightbox.classList.add("is-open");
      lightbox.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
      lightboxClose.focus();
    }

    function closeLightbox() {
      lightbox.classList.remove("is-open");
      lightbox.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
      lightboxImg.src = "";
      if (lastFocused) lastFocused.focus();
    }

    document.querySelectorAll(".masonry__item").forEach(function (item) {
      item.addEventListener("click", function () { openLightbox(item); });
    });

    lightboxClose.addEventListener("click", closeLightbox);
    lightboxBackdrop.addEventListener("click", closeLightbox);
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && lightbox.classList.contains("is-open")) closeLightbox();
    });
  }

  /* ---------------------------------------------------------- contact form validation */
  var form = document.getElementById("contactForm");
  if (form) {
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var phonePattern = /^[0-9()+\-\s]{7,}$/;

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var valid = true;

      form.querySelectorAll(".field").forEach(function (field) {
        var input = field.querySelector("input, select, textarea");
        if (!input) return;
        var value = input.value.trim();
        var ok = true;

        if (input.hasAttribute("required")) {
          ok = value.length > 0;
        }

        if (ok && value && input.type === "email") {
          ok = emailPattern.test(value);
        }

        if (ok && value && input.type === "tel") {
          ok = phonePattern.test(value);
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
