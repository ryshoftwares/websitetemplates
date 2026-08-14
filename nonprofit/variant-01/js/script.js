/* ==========================================================================
   Haven Trust — Premium Modern
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
  } else {
    counters.forEach(function (el) {
      var target = parseFloat(el.getAttribute("data-count"));
      var suffix = el.getAttribute("data-suffix") || "";
      el.textContent = target + suffix;
    });
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

  /* ---- donate: preset amount buttons synced with custom amount field ---- */
  var amountButtons = document.querySelectorAll(".amount-btn");
  var customAmount = document.getElementById("customAmount");
  if (amountButtons.length && customAmount) {
    amountButtons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        amountButtons.forEach(function (b) { b.classList.remove("is-active"); });
        btn.classList.add("is-active");
        customAmount.value = btn.getAttribute("data-amount");
      });
    });
    customAmount.addEventListener("input", function () {
      amountButtons.forEach(function (b) { b.classList.remove("is-active"); });
    });
  }

  /* ---- donate: one-time / monthly toggle visual state ---- */
  var freqInputs = document.querySelectorAll(".freq-toggle input[type=radio]");
  if (freqInputs.length) {
    freqInputs.forEach(function (input) {
      input.addEventListener("change", function () {
        freqInputs.forEach(function (i) {
          i.closest("label").classList.toggle("is-checked", i.checked);
        });
      });
      if (input.checked) input.closest("label").classList.add("is-checked");
    });
  }

  /* ---- validated form submission (donate form and any other form present) ---- */
  var forms = document.querySelectorAll("form[novalidate]");
  forms.forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var valid = true;

      form.querySelectorAll("[required]").forEach(function (input) {
        var field = input.closest(".field");
        if (!field) return;
        var value = input.value.trim();
        var ok = value.length > 0;

        if (input.type === "email" && ok) {
          ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        }

        field.classList.toggle("has-error", !ok);
        if (!ok) valid = false;
      });

      var successBox = form.querySelector(".form__success");
      if (valid) {
        if (successBox) successBox.classList.add("is-visible");
        form.reset();
        amountButtons.forEach(function (b) { b.classList.remove("is-active"); });
      } else if (successBox) {
        successBox.classList.remove("is-visible");
      }
    });
  });
})();
