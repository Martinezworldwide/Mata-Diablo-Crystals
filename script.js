/* script.js — renders The Prayer Deck from prayers.js.
   Adding a prayer never touches this file. */

(function () {
  "use strict";

  function esc(s) {
    var d = document.createElement("div");
    d.textContent = s;
    return d.innerHTML;
  }

  function fmtDate(iso) {
    if (!iso) return null;
    var d = new Date(iso + "T12:00:00");
    return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  }

  function renderParts(parts) {
    var html = "";
    parts.forEach(function (p) {
      if (p.type === "p") {
        html += "<p>" + esc(p.text) + "</p>";
      } else if (p.type === "verse") {
        html += "<p class='verse'><span class='vtext'>" + esc(p.text) + "</span><span class='ref'>" + esc(p.ref) + " · Douay-Rheims 1899</span></p>";
      } else if (p.type === "litany") {
        html += "<h3>" + esc(p.heading || "Litany") + "</h3><div class='litany'>";
        p.lines.forEach(function (line) {
          html += "<p>" + esc(line) + "<br /><span class='resp'>" + esc(p.response || "deliver us, Lord.") + "</span></p>";
        });
        html += "</div>";
      } else if (p.type === "spine") {
        html += "<div class='spine'><strong>" + esc(p.heading || "Scripture spine") + ":</strong><ul>";
        p.items.forEach(function (s) {
          html += "<li><span class='sref'>" + esc(s[0]) + "</span> — " + esc(s[1]) + "</li>";
        });
        html += "</ul></div>";
      }
    });
    return html;
  }

  function plainText(entry) {
    var lines = [];
    entry.parts.forEach(function (p) {
      if (p.type === "p") lines.push(p.text);
      else if (p.type === "verse") lines.push('"' + p.text + '" (' + p.ref + ", Douay-Rheims 1899)");
      else if (p.type === "litany") {
        lines.push(p.heading || "Litany");
        p.lines.forEach(function (l) { lines.push(l + " " + (p.response || "deliver us, Lord.")); });
      } else if (p.type === "spine") {
        lines.push(p.heading || "Scripture spine (Douay-Rheims 1899):");
        p.items.forEach(function (s) { lines.push(s[0] + " — " + s[1]); });
      }
    });
    return lines.join("\n\n");
  }

  function copyText(text, btn) {
    var done = function () {
      if (!btn) return;
      var old = btn.textContent;
      btn.textContent = "Copied ✓";
      setTimeout(function () { btn.textContent = old; }, 1600);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done, function () { fallbackCopy(text); done(); });
    } else { fallbackCopy(text); done(); }
  }

  function fallbackCopy(text) {
    var ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand("copy"); } catch (e) {}
    document.body.removeChild(ta);
  }

  function cardHTML(entry, featured) {
    var dateLabel = entry.date ? fmtDate(entry.date) : "The founding deck";
    var badge = featured
      ? "<span class='badge badge-today'>TODAY</span>"
      : (entry.date ? "<span class='badge'>" + esc(dateLabel) + "</span>" : "<span class='badge badge-base'>" + esc(dateLabel) + "</span>");
    return (
      "<article class='deck-card" + (featured ? " featured" : "") + "' id='card-" + esc(entry.id) + "' data-id='" + esc(entry.id) + "'>" +
        "<header class='card-head'>" +
          "<span class='card-icon'>" + esc(entry.icon || "🙏") + "</span>" +
          "<div class='card-title-wrap'>" +
            "<h2>" + esc(entry.title) + "</h2>" +
            "<div class='card-meta'><span class='tag'>" + esc(entry.tag || "Prayer") + "</span>" + badge + "</div>" +
          "</div>" +
        "</header>" +
        "<p class='card-desc'>" + esc(entry.desc || "") + "</p>" +
        "<div class='card-body' aria-hidden='true'>" + renderParts(entry.parts) + "</div>" +
        "<footer class='card-actions'>" +
          "<button class='expand-btn' aria-expanded='false'>Read the prayer</button>" +
          "<button class='copy-btn' style='display:none'>Copy prayer</button>" +
        "</footer>" +
      "</article>"
    );
  }

  function wireCard(card, entry) {
    var expand = card.querySelector(".expand-btn");
    var copy = card.querySelector(".copy-btn");
    var body = card.querySelector(".card-body");
    var open = false;

    function setOpen(v) {
      open = v;
      body.style.maxHeight = open ? body.scrollHeight + "px" : "0";
      body.setAttribute("aria-hidden", open ? "false" : "true");
      expand.textContent = open ? "Close" : "Read the prayer";
      expand.setAttribute("aria-expanded", open ? "true" : "false");
      copy.style.display = open ? "inline-block" : "none";
    }

    expand.addEventListener("click", function () { setOpen(!open); });
    copy.addEventListener("click", function () { copyText(plainText(entry), copy); });
    card._setOpen = setOpen;
  }

  function init() {
    var ordered = deckOrder();
    var today = todayEntry();
    var featuredSlot = document.getElementById("deck-featured");
    var deckSlot = document.getElementById("deck-grid");
    var counter = document.getElementById("deck-count");
    if (counter) counter.textContent = String(ordered.length);

    var featured = today ? cardHTML(today, true) : "";
    if (featuredSlot && featured) {
      featuredSlot.innerHTML = featured;
      wireCard(featuredSlot.querySelector(".deck-card"), today);
    }

    var rest = ordered.filter(function (e) { return !today || e.id !== today.id; });
    if (deckSlot) {
      rest.forEach(function (entry, i) {
        var wrap = document.createElement("div");
        wrap.className = "deck-slot";
        wrap.style.setProperty("--i", i);
        wrap.innerHTML = cardHTML(entry, false);
        deckSlot.appendChild(wrap);
        wireCard(wrap.querySelector(".deck-card"), entry);
      });
    }

    var param = new URLSearchParams(window.location.search).get("prayer");
    if (param) {
      var target = document.getElementById("card-" + param);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "center" });
        if (target._setOpen) target._setOpen(true);
        target.classList.add("lit");
      }
    }

    var todayStamp = document.getElementById("today-stamp");
    if (todayStamp && today && today.date) {
      todayStamp.textContent = "Today's card: " + today.title + " — added " + fmtDate(today.date) + ". New cards land here daily.";
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
