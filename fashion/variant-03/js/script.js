/* ==========================================================================
   Studio Wear — Minimal Professional
   Independent script. Not shared with any other variant or category.
   ========================================================================== */

(function () {
  "use strict";

  var WISHLIST_KEY = "studiowear-wishlist";

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

  function getWishlist() { try { return JSON.parse(localStorage.getItem(WISHLIST_KEY) || "[]"); } catch (e) { return []; } }
  function setWishlist(list) { localStorage.setItem(WISHLIST_KEY, JSON.stringify(list)); }
  var wishlist = getWishlist();
  document.querySelectorAll(".wishlist-btn").forEach(function (btn) {
    var id = btn.getAttribute("data-product-id");
    if (id && wishlist.indexOf(id) !== -1) { btn.classList.add("is-saved"); btn.setAttribute("aria-pressed", "true"); }
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
      lbImage.src = img.getAttribute("src");
      lbImage.alt = img.getAttribute("alt") || "";
      lbCaption.textContent = trigger.getAttribute("data-caption") || "";
      lightbox.classList.add("is-open");
      lightbox.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
      lbClose.focus();
    }
    function closeLightbox() {
      lightbox.classList.remove("is-open");
      lightbox.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
      if (lastTrigger) lastTrigger.focus();
    }
    function showRelative(delta) {
      openLightbox((currentIndex + delta + triggers.length) % triggers.length);
    }
    triggers.forEach(function (trigger, index) {
      trigger.addEventListener("click", function () { openLightbox(index); });
    });
    if (lbClose) lbClose.addEventListener("click", closeLightbox);
    if (lbPrev) lbPrev.addEventListener("click", function () { showRelative(-1); });
    if (lbNext) lbNext.addEventListener("click", function () { showRelative(1); });
    lightbox.addEventListener("click", function (e) { if (e.target === lightbox) closeLightbox(); });
    document.addEventListener("keydown", function (e) {
      if (!lightbox.classList.contains("is-open")) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") showRelative(-1);
      if (e.key === "ArrowRight") showRelative(1);
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
