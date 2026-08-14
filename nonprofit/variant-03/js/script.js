/* ==========================================================================
   Bridge Foundation — Minimal Professional
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
    var duration = 1000;
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

  /* ---- donation amount selector ---- */
  var amountButtons = document.querySelectorAll(".amount-btn");
  var customAmount = document.getElementById("customAmount");
  amountButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      amountButtons.forEach(function (b) { b.classList.remove("is-selected"); });
      btn.classList.add("is-selected");
      if (customAmount) customAmount.value = "";
    });
  });
  if (customAmount) {
    customAmount.addEventListener("input", function () {
      if (customAmount.value.trim() !== "") {
        amountButtons.forEach(function (b) { b.classList.remove("is-selected"); });
      }
    });
  }

  var forms = document.querySelectorAll("form[data-validate]");
  forms.forEach(function (form) {
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

      var successBox = form.querySelector(".form__success") || document.getElementById("formSuccess");
      if (valid) {
        if (successBox) successBox.classList.add("is-visible");
        form.reset();
        amountButtons.forEach(function (b) { b.classList.remove("is-selected"); });
      } else if (successBox) {
        successBox.classList.remove("is-visible");
      }
    });
  });
})();
