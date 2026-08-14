/* ==========================================================================
   Pulse Admin — Premium Modern
   Independent script. Not shared with any other variant or category.
   ========================================================================== */

(function () {
  "use strict";

  var dashboard = document.querySelector(".dashboard");
  var sidebar = document.getElementById("sidebar");

  /* ---------------------------------------------------------- 1. desktop collapse */
  var collapseToggle = document.getElementById("sidebarCollapseToggle");
  var COLLAPSE_KEY = "pulseAdmin:sidebarCollapsed";

  function setCollapsed(collapsed) {
    if (!dashboard) return;
    dashboard.classList.toggle("dashboard--collapsed", collapsed);
    if (collapseToggle) {
      collapseToggle.setAttribute("aria-expanded", collapsed ? "false" : "true");
    }
  }

  if (collapseToggle && dashboard) {
    var stored = null;
    try {
      stored = window.localStorage.getItem(COLLAPSE_KEY);
    } catch (err) {
      stored = null;
    }
    setCollapsed(stored === "true");

    collapseToggle.addEventListener("click", function () {
      var willCollapse = !dashboard.classList.contains("dashboard--collapsed");
      setCollapsed(willCollapse);
      try {
        window.localStorage.setItem(COLLAPSE_KEY, willCollapse ? "true" : "false");
      } catch (err) {
        /* localStorage unavailable — ignore, session-only behavior still works */
      }
    });
  }

  /* ---------------------------------------------------------- 2. mobile drawer */
  var mobileToggle = document.getElementById("sidebarMobileToggle");
  var overlay = document.getElementById("sidebarOverlay");

  function openDrawer() {
    if (!sidebar) return;
    sidebar.classList.add("is-open");
    if (overlay) overlay.classList.add("is-visible");
    if (mobileToggle) mobileToggle.setAttribute("aria-expanded", "true");
  }

  function closeDrawer() {
    if (!sidebar) return;
    sidebar.classList.remove("is-open");
    if (overlay) overlay.classList.remove("is-visible");
    if (mobileToggle) mobileToggle.setAttribute("aria-expanded", "false");
  }

  if (mobileToggle && sidebar) {
    mobileToggle.addEventListener("click", function () {
      var isOpen = sidebar.classList.contains("is-open");
      if (isOpen) {
        closeDrawer();
      } else {
        openDrawer();
      }
    });
  }

  if (overlay) {
    overlay.addEventListener("click", closeDrawer);
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && sidebar && sidebar.classList.contains("is-open")) {
      closeDrawer();
      if (mobileToggle) mobileToggle.focus();
    }
  });

  /* ---------------------------------------------------------- 3. user menu dropdown */
  var userMenuBtn = document.getElementById("userMenuToggle");
  var userMenuPanel = document.getElementById("userMenuPanel");

  if (userMenuBtn && userMenuPanel) {
    userMenuBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      var isOpen = userMenuPanel.classList.contains("is-open");
      userMenuPanel.classList.toggle("is-open", !isOpen);
      userMenuBtn.setAttribute("aria-expanded", !isOpen ? "true" : "false");
    });

    document.addEventListener("click", function (e) {
      if (!userMenuPanel.classList.contains("is-open")) return;
      if (userMenuBtn.contains(e.target) || userMenuPanel.contains(e.target)) return;
      userMenuPanel.classList.remove("is-open");
      userMenuBtn.setAttribute("aria-expanded", "false");
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && userMenuPanel.classList.contains("is-open")) {
        userMenuPanel.classList.remove("is-open");
        userMenuBtn.setAttribute("aria-expanded", "false");
        userMenuBtn.focus();
      }
    });
  }

  /* ---------------------------------------------------------- 4. users table live search */
  var userSearch = document.getElementById("userSearch");
  var usersTable = document.getElementById("usersTable");
  var resultsCount = document.getElementById("usersResultsCount");

  function getUserRows() {
    if (!usersTable) return [];
    var tbody = usersTable.tBodies[0];
    return tbody ? Array.prototype.slice.call(tbody.rows) : [];
  }

  function updateResultsCount() {
    if (!resultsCount) return;
    var rows = getUserRows();
    var total = rows.length;
    var visible = rows.filter(function (row) {
      return row.style.display !== "none";
    }).length;
    resultsCount.textContent = "Showing " + visible + " of " + total + " users";
  }

  function filterUsers() {
    var rows = getUserRows();
    if (!rows.length) return;
    var query = userSearch ? userSearch.value.trim().toLowerCase() : "";

    rows.forEach(function (row) {
      var name = (row.getAttribute("data-name") || row.cells[0].textContent || "").toLowerCase();
      var email = (row.getAttribute("data-email") || row.cells[1].textContent || "").toLowerCase();
      var matches = query === "" || name.indexOf(query) !== -1 || email.indexOf(query) !== -1;
      row.style.display = matches ? "" : "none";
    });

    updateResultsCount();
  }

  if (userSearch) {
    userSearch.addEventListener("input", filterUsers);
  }
  if (usersTable) {
    updateResultsCount();
  }

  /* ---------------------------------------------------------- 5. users table column sort */
  if (usersTable) {
    var sortHeaders = Array.prototype.slice.call(usersTable.querySelectorAll("th[data-sort-key]"));
    var currentSortKey = null;
    var currentSortDir = "none";

    function compareRows(key, dir) {
      var multiplier = dir === "ascending" ? 1 : -1;
      return function (rowA, rowB) {
        var a, b;
        if (key === "joined") {
          a = rowA.getAttribute("data-joined") || "";
          b = rowB.getAttribute("data-joined") || "";
        } else {
          a = (rowA.getAttribute("data-" + key) || "").toLowerCase();
          b = (rowB.getAttribute("data-" + key) || "").toLowerCase();
        }
        if (a < b) return -1 * multiplier;
        if (a > b) return 1 * multiplier;
        return 0;
      };
    }

    sortHeaders.forEach(function (th) {
      var btn = th.querySelector(".th-sort-btn");
      if (!btn) return;

      btn.addEventListener("click", function () {
        var key = th.getAttribute("data-sort-key");
        var nextDir;

        if (currentSortKey === key) {
          nextDir = currentSortDir === "ascending" ? "descending" : "ascending";
        } else {
          nextDir = "ascending";
        }

        sortHeaders.forEach(function (otherTh) {
          otherTh.setAttribute("aria-sort", "none");
        });
        th.setAttribute("aria-sort", nextDir);

        currentSortKey = key;
        currentSortDir = nextDir;

        var tbody = usersTable.tBodies[0];
        if (!tbody) return;
        var rows = Array.prototype.slice.call(tbody.rows);
        rows.sort(compareRows(key, nextDir));
        rows.forEach(function (row) {
          tbody.appendChild(row);
        });
      });
    });
  }

  /* ---------------------------------------------------------- 6. form validation */
  var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function validateForm(form) {
    var successBox = form.querySelector(".form__success");
    var valid = true;

    var requiredFields = Array.prototype.slice.call(form.querySelectorAll("[required]"));
    requiredFields.forEach(function (input) {
      var field = input.closest(".field");
      if (!field) return;
      var value = input.value.trim();
      var ok = value.length > 0;

      if (ok && input.type === "email") {
        ok = EMAIL_RE.test(value);
      }

      field.classList.toggle("has-error", !ok);
      if (!ok) valid = false;
    });

    if (valid) {
      if (successBox) successBox.classList.add("is-visible");
    } else if (successBox) {
      successBox.classList.remove("is-visible");
    }

    return valid;
  }

  var validatedFormIds = ["settingsForm", "profileForm"];
  validatedFormIds.forEach(function (id) {
    var form = document.getElementById(id);
    if (!form) return;
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      validateForm(form);
    });
  });
})();
