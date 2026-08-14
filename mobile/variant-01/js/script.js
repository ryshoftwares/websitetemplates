/* ==========================================================================
   Orbit — Premium Modern mobile app landing site
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
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); }
      });
    }, { threshold: 0.15 });
    revealTargets.forEach(function (el) { observer.observe(el); });
  } else {
    revealTargets.forEach(function (el) { el.classList.add("is-visible"); });
  }

  var counters = document.querySelectorAll("[data-count]");
  if (counters.length && "IntersectionObserver" in window) {
    var counterObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        animateCount(entry.target);
        counterObserver.unobserve(entry.target);
      });
    }, { threshold: 0.5 });
    counters.forEach(function (el) { counterObserver.observe(el); });
  }
  function animateCount(el) {
    var target = parseFloat(el.getAttribute("data-count"));
    var suffix = el.getAttribute("data-suffix") || "";
    var duration = 1000, start = null;
    function step(ts) {
      if (!start) start = ts;
      var progress = Math.min((ts - start) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      var value = target * eased;
      el.textContent = (target % 1 === 0 ? Math.round(value) : value.toFixed(1)) + suffix;
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  /* ---- pricing monthly/yearly toggle ---- */
  var pricingSwitch = document.getElementById("pricingSwitch");
  if (pricingSwitch) {
    var monthlyLabel = document.getElementById("labelMonthly");
    var yearlyLabel = document.getElementById("labelYearly");
    pricingSwitch.addEventListener("click", function () {
      var checked = pricingSwitch.getAttribute("aria-checked") === "true";
      var next = !checked;
      pricingSwitch.setAttribute("aria-checked", next ? "true" : "false");
      if (monthlyLabel) monthlyLabel.classList.toggle("is-active", !next);
      if (yearlyLabel) yearlyLabel.classList.toggle("is-active", next);
      document.querySelectorAll("[data-period]").forEach(function (el) {
        var isYearly = el.getAttribute("data-period") === "yearly";
        el.style.display = (next && isYearly) || (!next && !isYearly) ? "" : "none";
      });
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
