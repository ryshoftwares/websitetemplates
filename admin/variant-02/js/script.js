/* ==========================================================================
   Nova Dash — Admin Dashboard UI
   js/script.js — single IIFE, no external dependencies, no build step.
   Sections:
     1. Sidebar desktop collapse toggle
     2. Mobile off-canvas drawer (hamburger + overlay + Escape)
     3. User-menu dropdown toggle
     4. Users table — live search
     5. Users table — column sort
     6. Form validation (Settings + Profile)
   ========================================================================== */
(function () {
  "use strict";

  /* ------------------------------------------------------------------------
     1. Sidebar desktop collapse toggle
     ------------------------------------------------------------------------ */
  function initSidebarCollapse() {
    var dashboard = document.querySelector(".dashboard");
    var toggle = document.getElementById("sidebarCollapseToggle");

    if (!dashboard || !toggle) {
      return;
    }

    toggle.addEventListener("click", function () {
      var isCollapsed = dashboard.classList.toggle("dashboard--collapsed");
      toggle.setAttribute("aria-expanded", String(!isCollapsed));
      toggle.setAttribute(
        "aria-label",
        isCollapsed ? "Expand sidebar" : "Collapse sidebar"
      );
    });
  }

  /* ------------------------------------------------------------------------
     2. Mobile off-canvas drawer
     ------------------------------------------------------------------------ */
  function initMobileDrawer() {
    var sidebar = document.getElementById("sidebar");
    var mobileToggle = document.getElementById("sidebarMobileToggle");
    var overlay = document.querySelector(".sidebar-overlay");

    if (!sidebar || !mobileToggle) {
      return;
    }

    function openDrawer() {
      sidebar.classList.add("sidebar--open");
      mobileToggle.setAttribute("aria-expanded", "true");
      mobileToggle.setAttribute("aria-label", "Close menu");
      if (overlay) {
        overlay.classList.add("is-visible");
      }
    }

    function closeDrawer() {
      sidebar.classList.remove("sidebar--open");
      mobileToggle.setAttribute("aria-expanded", "false");
      mobileToggle.setAttribute("aria-label", "Open menu");
      if (overlay) {
        overlay.classList.remove("is-visible");
      }
    }

    mobileToggle.addEventListener("click", function () {
      var isOpen = sidebar.classList.contains("sidebar--open");
      if (isOpen) {
        closeDrawer();
      } else {
        openDrawer();
      }
    });

    if (overlay) {
      overlay.addEventListener("click", closeDrawer);
    }

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && sidebar.classList.contains("sidebar--open")) {
        closeDrawer();
        mobileToggle.focus();
      }
    });
  }

  /* ------------------------------------------------------------------------
     3. User-menu dropdown toggle
     ------------------------------------------------------------------------ */
  function initUserMenu() {
    var menuBtn = document.querySelector(".user-menu__btn");
    var dropdown = document.querySelector(".user-menu__dropdown");

    if (!menuBtn || !dropdown) {
      return;
    }

    function closeMenu() {
      dropdown.classList.remove("is-open");
      menuBtn.setAttribute("aria-expanded", "false");
    }

    function openMenu() {
      dropdown.classList.add("is-open");
      menuBtn.setAttribute("aria-expanded", "true");
    }

    menuBtn.addEventListener("click", function (event) {
      event.stopPropagation();
      var isOpen = dropdown.classList.contains("is-open");
      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    document.addEventListener("click", function (event) {
      if (!dropdown.contains(event.target) && event.target !== menuBtn) {
        closeMenu();
      }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        closeMenu();
      }
    });
  }

  /* ------------------------------------------------------------------------
     4. Users table — live search (name + email substring, case-insensitive)
     ------------------------------------------------------------------------ */
  function initUserSearch() {
    var input = document.getElementById("userSearch");
    var table = document.getElementById("usersTable");
    var countEl = document.getElementById("usersResultsCount");

    if (!input || !table) {
      return;
    }

    var tbody = table.querySelector("tbody");
    if (!tbody) {
      return;
    }

    var rows = Array.prototype.slice.call(tbody.rows);
    var totalCount = rows.length;

    function updateCount(visibleCount) {
      if (countEl) {
        countEl.textContent =
          "Showing " + visibleCount + " of " + totalCount + " users";
      }
    }

    function filterRows() {
      var query = input.value.trim().toLowerCase();
      var visibleCount = 0;

      rows.forEach(function (row) {
        var name = (row.getAttribute("data-name") || "").toLowerCase();
        var email = (row.getAttribute("data-email") || "").toLowerCase();
        var matches = query === "" || name.indexOf(query) !== -1 || email.indexOf(query) !== -1;

        row.style.display = matches ? "" : "none";
        if (matches) {
          visibleCount += 1;
        }
      });

      updateCount(visibleCount);
    }

    input.addEventListener("input", filterRows);

    /* initialize count on load */
    updateCount(totalCount);
  }

  /* ------------------------------------------------------------------------
     5. Users table — column sort
     ------------------------------------------------------------------------ */
  function initUserSort() {
    var table = document.getElementById("usersTable");
    if (!table) {
      return;
    }

    var tbody = table.querySelector("tbody");
    var headers = Array.prototype.slice.call(
      table.querySelectorAll("th[data-sort-key]")
    );

    if (!tbody || headers.length === 0) {
      return;
    }

    function getSortValue(row, key, type) {
      if (type === "date") {
        return row.getAttribute("data-joined") || "";
      }
      var cell = row.querySelector('[data-cell="' + key + '"]');
      return cell ? cell.textContent.trim().toLowerCase() : "";
    }

    headers.forEach(function (th) {
      var button = th.querySelector(".sort-btn");
      if (!button) {
        return;
      }

      button.addEventListener("click", function () {
        var key = th.getAttribute("data-sort-key");
        var type = th.getAttribute("data-sort-type") || "text";
        var currentSort = th.getAttribute("aria-sort");
        var nextSort = currentSort === "ascending" ? "descending" : "ascending";

        /* reset every other header's aria-sort to none */
        headers.forEach(function (otherTh) {
          if (otherTh !== th) {
            otherTh.setAttribute("aria-sort", "none");
          }
        });
        th.setAttribute("aria-sort", nextSort);

        var rows = Array.prototype.slice.call(tbody.rows);

        rows.sort(function (a, b) {
          var valueA = getSortValue(a, key, type);
          var valueB = getSortValue(b, key, type);

          if (valueA < valueB) {
            return nextSort === "ascending" ? -1 : 1;
          }
          if (valueA > valueB) {
            return nextSort === "ascending" ? 1 : -1;
          }
          return 0;
        });

        rows.forEach(function (row) {
          tbody.appendChild(row);
        });
      });
    });
  }

  /* ------------------------------------------------------------------------
     6. Form validation (Settings + Profile) — shared logic
     ------------------------------------------------------------------------ */
  var EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function showError(field, message) {
    field.classList.add("has-error");
    var errorEl = field.querySelector("small.error");
    if (errorEl && message) {
      errorEl.textContent = message;
    }
  }

  function clearError(field) {
    field.classList.remove("has-error");
  }

  function validateForm(form) {
    var isValid = true;
    var requiredInputs = form.querySelectorAll("[required]");

    requiredInputs.forEach(function (input) {
      var field = input.closest(".field");
      if (!field) {
        return;
      }

      var value = input.value.trim();

      if (value === "") {
        showError(field, field.dataset.errorRequired || "This field is required.");
        isValid = false;
        return;
      }

      if (input.type === "email" && !EMAIL_PATTERN.test(value)) {
        showError(field, "Enter a valid email address.");
        isValid = false;
        return;
      }

      clearError(field);
    });

    return isValid;
  }

  function initFormValidation(formId) {
    var form = document.getElementById(formId);
    if (!form) {
      return;
    }

    var successBox = form.querySelector(".form__success");

    form.addEventListener("submit", function (event) {
      event.preventDefault();

      var isValid = validateForm(form);

      if (isValid && successBox) {
        successBox.classList.add("is-visible");
      } else if (successBox) {
        successBox.classList.remove("is-visible");
      }

      if (!isValid) {
        var firstError = form.querySelector(".field.has-error input, .field.has-error select, .field.has-error textarea");
        if (firstError) {
          firstError.focus();
        }
      }
    });

    /* clear individual field errors as the user corrects them */
    form.addEventListener("input", function (event) {
      var field = event.target.closest(".field");
      if (field && field.classList.contains("has-error")) {
        var input = event.target;
        var value = input.value.trim();
        var stillInvalid =
          input.hasAttribute("required") &&
          (value === "" || (input.type === "email" && !EMAIL_PATTERN.test(value)));

        if (!stillInvalid) {
          clearError(field);
        }
      }
    });
  }

  /* ------------------------------------------------------------------------
     Init on DOM ready
     ------------------------------------------------------------------------ */
  document.addEventListener("DOMContentLoaded", function () {
    initSidebarCollapse();
    initMobileDrawer();
    initUserMenu();
    initUserSearch();
    initUserSort();
    initFormValidation("settingsForm");
    initFormValidation("profileForm");
  });
})();
