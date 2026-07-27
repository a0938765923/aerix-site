/* ============================================================
   AERIX — shared runtime
   Injects header/footer, powers interactions, bilingual EN/繁中.
   ============================================================ */
(function () {
  "use strict";

  var LOGO_SVG =
    '<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
    '<path d="M16 3 29 27H3L16 3Z" stroke="currentColor" stroke-width="2.4" stroke-linejoin="round"/>' +
    '<circle cx="16" cy="19.5" r="3.2" fill="#3D63FF"/></svg>';

  /* ---------------- mega menu builder (Skydio-anatomy, bilingual) ---------------- */
  function mega(m) {
    var h = '<div class="mega2"><div class="mega2-grid">';
    h += '<div><div class="m-group" data-zh="' + m.group[1] + '">' + m.group[0] + '</div><div class="m-big">';
    m.big.forEach(function (l) { h += '<a href="' + l[2] + '" data-zh="' + l[1] + '">' + l[0] + '</a>'; });
    h += '</div></div>';
    h += '<div><div class="m-group" data-zh="快速連結">Quick links</div><div class="m-small">';
    m.small.forEach(function (l) { h += '<a href="' + l[2] + '" data-zh="' + l[1] + '">' + l[0] + '</a>'; });
    h += '</div>';
    if (m.related && m.related.length) {
      h += '<div class="m-related" data-zh="相關主題">Related links</div><div class="m-small">';
      m.related.forEach(function (l) { h += '<a href="' + l[2] + '" data-zh="' + l[1] + '">' + l[0] + '</a>'; });
      h += '</div>';
    }
    h += '</div>';
    h += '<div class="m-media">' +
      '<button type="button" class="m-thumb" data-video aria-label="Play video"><img src="assets/img/' + m.img + '" alt=""><span class="play"><i></i></span></button>' +
      '<div class="m-caption" data-zh="' + m.cap[1] + '">' + m.cap[0] + '</div>' +
      (m.badge ? '<span class="m-badge">' + m.badge + '</span>' : '') +
      '</div>';
    h += '</div></div>';
    return h;
  }

  var MENUS = {
    dfr: {
      group: ["Drone as First Responder (DFR)", "無人機先遣應變（DFR）"],
      big: [
        ["DFR Overview", "DFR 總覽", "dfr.html"],
        ["How Deployment Works", "三種部署模式", "dfr.html#models"],
        ["Mission Command", "Mission Command 指揮系統", "software.html#command"],
        ["Indoor DFR", "室內 DFR（R5）", "r5.html"],
        ["Campus Safety", "校園安全應用", "dfr.html"],
        ["Fire Service", "消防救災應用", "dfr.html"]
      ],
      small: [
        ["Integrations", "系統整合生態", "software.html"],
        ["FAQs & Regulations", "法規與常見問題", "resources.html#guides"],
        ["Customer Stories", "客戶案例", "resources.html#stories"],
        ["Resources", "資源中心", "resources.html"]
      ],
      related: [
        ["Corrections Security", "矯正機關安防", "site-security.html"],
        ["Search & Rescue", "山域海域搜救", "dfr.html"],
        ["Crash Scene Documentation", "事故現場快速重建", "surveying-mapping.html"]
      ],
      img: "sol-dfr.png",
      cap: ["See how DFR changes response outcomes", "看 DFR 如何改變每一次抵達現場"],
      badge: "2026 · 1,000+ AGENCIES"
    },
    security: {
      group: ["Site Security", "場域安防"],
      big: [
        ["Security Overview", "安防總覽", "site-security.html"],
        ["Alarm Verification Flow", "警報查證流程", "site-security.html#how"],
        ["Persistent Dock Patrols", "機巢常駐巡邏", "dock.html"],
        ["Fleet Ops Remote Guarding", "Fleet Ops 遠端守望", "software.html#remote"]
      ],
      small: [
        ["Data Centers", "資料中心", "site-security.html"],
        ["Ports & Logistics", "港口物流", "site-security.html"],
        ["Energy & Utilities", "能源設施", "site-security.html"]
      ],
      related: [
        ["Base Defense", "基地防衛", "national-security.html#missions"],
        ["Border Awareness", "邊境態勢", "national-security.html"],
        ["Counter-UAS Trend 2026", "反無人機趨勢 2026", "resources.html#guides"]
      ],
      img: "sol-security.png",
      cap: ["Watch a perimeter patrol itself", "看周界如何自己巡邏"],
      badge: "C-UAS · $20B MARKET"
    },
    inspection: {
      group: ["Asset Inspection", "設施巡檢"],
      big: [
        ["Inspection Overview", "巡檢總覽", "asset-inspection.html"],
        ["Autonomous 3D Capture", "3D Capture 自主掃描", "software.html#scan"],
        ["Radiometric Thermal", "輻射熱像診斷", "v10.html#sensors"],
        ["Dock Remote Inspection", "機巢遠端巡檢", "dock.html"]
      ],
      small: [
        ["Utilities & Grid", "電網電力", "asset-inspection.html"],
        ["Bridges", "橋梁", "asset-inspection.html"],
        ["Oil & Gas", "油氣設施", "asset-inspection.html"],
        ["Telecom Towers", "電信鐵塔", "asset-inspection.html"]
      ],
      related: [
        ["Surveying & Mapping", "測繪與數位孿生", "surveying-mapping.html"],
        ["V10 Sensor Suite", "V10 感測器組", "v10.html#sensors"]
      ],
      img: "sol-inspection.png",
      cap: ["See a substation scanned hands-free", "看變電站如何免人力掃描"],
      badge: ""
    },
    mapping: {
      group: ["Surveying & Mapping", "測繪與製圖"],
      big: [
        ["Mapping Overview", "測繪總覽", "surveying-mapping.html"],
        ["Capture Workflow", "作業流程", "surveying-mapping.html#workflow"],
        ["Real-time 3D Models", "即時三維建模", "software.html#scan"],
        ["RTK / PPK Precision", "RTK / PPK 精度", "v10.html"]
      ],
      small: [
        ["Construction Progress", "營建進度", "surveying-mapping.html"],
        ["Land Survey", "土地測量", "surveying-mapping.html"],
        ["Mining & Aggregates", "礦業砂石", "surveying-mapping.html"],
        ["Scene Documentation", "現場重建", "surveying-mapping.html"]
      ],
      related: [
        ["Scheduled Dock Missions", "機巢排程任務", "dock.html"],
        ["Inspection Workflows", "巡檢應用", "asset-inspection.html"]
      ],
      img: "sol-mapping.png",
      cap: ["Watch a site become a model", "看工地變成 3D 模型"],
      badge: ""
    },
    natsec: {
      group: ["National Security", "國防安全"],
      big: [
        ["Defense Overview", "國防總覽", "national-security.html"],
        ["Mission Sets", "任務類型", "national-security.html#missions"],
        ["GPS-denied Navigation", "GPS 拒止導航", "national-security.html"],
        ["Link Shield Comms", "Link Shield 抗干擾通訊", "v10.html"]
      ],
      small: [
        ["Border Awareness", "邊境態勢", "national-security.html"],
        ["Base & Installation Defense", "基地與設施防衛", "national-security.html#missions"],
        ["NDAA Supply Chain", "NDAA 供應鏈", "products.html"]
      ],
      related: [
        ["V10D Capabilities", "V10D 能力", "v10.html"],
        ["Swarm Trend 2026", "蜂群趨勢 2026", "resources.html#guides"],
        ["Request a Briefing", "申請能力簡報", "contact.html"]
      ],
      img: "sol-natsec.png",
      cap: ["See survivable sUAS in the field", "看高生存性 sUAS 實戰"],
      badge: "REPLICATOR ERA"
    },
    products: {
      group: ["Products", "產品"],
      big: [
        ["All Products", "產品總覽", "products.html"],
        ["AERIX V10", "AERIX V10 旗艦機", "v10.html"],
        ["Dock for V10", "Dock 機巢", "dock.html"],
        ["AERIX R5", "AERIX R5 室內機", "r5.html"],
        ["AERIX F1 — Soon", "AERIX F1・即將登場", "products.html#f1"]
      ],
      small: [
        ["Mission Command", "Mission Command", "software.html#command"],
        ["Fleet Ops", "Fleet Ops", "software.html#remote"],
        ["3D Capture", "3D Capture", "software.html#scan"],
        ["AERIX Autonomy", "AERIX Autonomy", "software.html#autonomy"]
      ],
      related: [
        ["Security & Trust", "安全與信任", "v10.html"],
        ["Talk to Sales", "聯絡銷售", "contact.html"]
      ],
      img: "hero-products.png",
      cap: ["Meet the whole fleet in 25 seconds", "25 秒認識整支機隊"],
      badge: ""
    },
    resources: {
      group: ["Resources", "資源中心"],
      big: [
        ["Resource Hub", "資源總覽", "resources.html"],
        ["Customer Stories", "客戶案例", "resources.html#stories"],
        ["Guides & Playbooks", "指南與手冊", "resources.html#guides"],
        ["2026 Industry Radar", "2026 產業雷達報告", "resources.html#guides"]
      ],
      small: [
        ["Academy", "AERIX 學院", "resources.html#guides"],
        ["Contact", "聯絡我們", "contact.html"]
      ],
      related: [],
      img: "story-1.png",
      cap: ["Field results, on the record", "第一線成果，白紙黑字"],
      badge: "2026 RADAR"
    }
  };

  /* ---------------- header ---------------- */
  var HEADER =
    '<div class="nav-inner">' +
    '<a class="logo" href="index.html">' + LOGO_SVG + 'AERIX</a>' +
    '<button class="nav-burger" aria-label="Menu"><span></span><span></span><span></span></button>' +
    '<ul class="nav-links" id="navLinks">' +
    '<li><a href="dfr.html" data-nav="dfr" data-zh="警消先遣">DFR</a>' + mega(MENUS.dfr) + '</li>' +
    '<li><a href="site-security.html" data-nav="site-security" data-zh="場域安防">Site Security</a>' + mega(MENUS.security) + '</li>' +
    '<li><a href="asset-inspection.html" data-nav="inspection" data-zh="設施巡檢">Inspection</a>' + mega(MENUS.inspection) + '</li>' +
    '<li><a href="surveying-mapping.html" data-nav="mapping" data-zh="測繪製圖">Mapping</a>' + mega(MENUS.mapping) + '</li>' +
    '<li><a href="national-security.html" data-nav="natsec" data-zh="國防安全">National Security</a>' + mega(MENUS.natsec) + '</li>' +
    '<li><a href="products.html" data-nav="products" data-zh="產品">Products</a>' + mega(MENUS.products) + '</li>' +
    '<li><a href="solutions.html" data-nav="solutions" data-zh="產業應用">Industries</a></li>' +
    '<li><a href="resources.html" data-nav="resources" data-zh="資源中心">Resources</a>' + mega(MENUS.resources) + '</li>' +
    '</ul>' +
    '<div class="nav-cta">' +
    '<div class="lang-switch" role="group" aria-label="Language / 語言">' +
    '<button type="button" class="lang-btn" data-lang="en" aria-pressed="false">EN</button>' +
    '<button type="button" class="lang-btn" data-lang="zh" aria-pressed="false">中文</button>' +
    '</div>' +
    '<span class="mono-clock" id="navClock">--:--:--</span>' +
    '<a class="btn small" href="contact.html" data-zh="立即開始">Get started</a>' +
    '</div></div>';

  /* ---------------- footer ---------------- */
  var FOOTER =
    '<div class="wrap"><div class="footer-grid">' +
    '<div class="footer-brand"><a class="logo" href="index.html">' + LOGO_SVG + 'AERIX</a>' +
    '<p data-zh="為世界賴以運轉的工作而生的自主空中智能。">Autonomous aerial intelligence, engineered for the work the world depends on.</p>' +
    '<div class="badge-row"><span class="badge" data-zh="NDAA 對齊">NDAA aligned</span><span class="badge">SOC 2</span><span class="badge" data-zh="台美設計組裝">Made in TW/US</span></div></div>' +

    '<div class="footer-col"><b data-zh="飛行器">Aircraft</b><ul>' +
    '<li><a href="v10.html">AERIX V10</a></li>' +
    '<li><a href="dock.html" data-zh="Dock 機巢">Dock for V10</a></li>' +
    '<li><a href="r5.html">AERIX R5</a></li>' +
    '<li><a href="products.html#f1">AERIX F1</a></li>' +
    '<li><a href="products.html" data-zh="所有產品">All products</a></li></ul></div>' +

    '<div class="footer-col"><b data-zh="解決方案">Solutions</b><ul>' +
    '<li><a href="dfr.html" data-zh="無人機先遣應變">Drone as First Responder</a></li>' +
    '<li><a href="site-security.html" data-zh="場域安防">Site Security</a></li>' +
    '<li><a href="asset-inspection.html" data-zh="設施巡檢">Asset Inspection</a></li>' +
    '<li><a href="surveying-mapping.html" data-zh="測繪與製圖">Surveying &amp; Mapping</a></li>' +
    '<li><a href="national-security.html" data-zh="國防安全">National Security</a></li></ul></div>' +

    '<div class="footer-col"><b data-zh="軟體">Software</b><ul>' +
    '<li><a href="software.html">Mission Command</a></li>' +
    '<li><a href="software.html#remote">Fleet Ops</a></li>' +
    '<li><a href="software.html#scan">3D Capture</a></li>' +
    '<li><a href="software.html#autonomy">AERIX Autonomy</a></li></ul></div>' +

    '<div class="footer-col"><b data-zh="公司">Company</b><ul>' +
    '<li><a href="resources.html" data-zh="資源中心">Resources</a></li>' +
    '<li><a href="resources.html#stories" data-zh="客戶案例">Customer stories</a></li>' +
    '<li><a href="contact.html" data-zh="聯絡我們">Contact</a></li>' +
    '<li><a href="contact.html" data-zh="加入我們">Careers</a></li></ul></div>' +
    '</div>' +

    '<div class="footer-bottom">' +
    '<span data-zh="© 2026 AERIX ROBOTICS · 概念展示網站 · Mark製作">© 2026 AERIX ROBOTICS · CONCEPT SITE · MADE BY MARK</span>' +
    '<span class="disc" data-zh="本站為受現代自主無人機產業啟發之設計研究。站內所有產品名稱、數據與案例皆為虛構，僅供展示。">Design study inspired by the modern autonomous-drone industry. All product names, figures and stories on this site are fictional and for demonstration only.</span>' +
    '</div></div>';

  /* ---------------- inject ---------------- */
  var headerHost = document.getElementById("site-header");
  if (headerHost) { headerHost.className = "site-header"; headerHost.innerHTML = HEADER; }
  var footerHost = document.getElementById("site-footer");
  if (footerHost) { footerHost.className = "site-footer"; footerHost.innerHTML = FOOTER; }

  /* watermark badge (site-wide) */
  var wm = document.createElement("div");
  wm.className = "watermark";
  wm.setAttribute("aria-hidden", "true");
  wm.innerHTML = '<i>◢</i><span data-zh="Mark製作">MADE BY MARK</span>';
  document.body.appendChild(wm);

  /* active nav */
  var page = document.body.getAttribute("data-page");
  if (page) {
    var act = document.querySelector('[data-nav="' + page + '"]');
    if (act) act.classList.add("active");
  }

  /* ---------------- i18n ---------------- */
  function applyLang(lang) {
    document.documentElement.setAttribute("lang", lang === "zh" ? "zh-Hant" : "en");
    document.querySelectorAll("[data-zh]").forEach(function (el) {
      if (el.getAttribute("data-en") === null) el.setAttribute("data-en", el.innerHTML);
      var t = lang === "zh" ? el.getAttribute("data-zh") : el.getAttribute("data-en");
      if (t !== null) el.innerHTML = t;
    });
    document.querySelectorAll("[data-zh-ph]").forEach(function (el) {
      if (el.getAttribute("data-en-ph") === null) el.setAttribute("data-en-ph", el.getAttribute("placeholder") || "");
      el.setAttribute("placeholder", lang === "zh" ? el.getAttribute("data-zh-ph") : el.getAttribute("data-en-ph"));
    });
    var b = document.body;
    if (lang === "zh" && b.getAttribute("data-title-zh")) {
      if (!b.getAttribute("data-title-en")) b.setAttribute("data-title-en", document.title);
      document.title = b.getAttribute("data-title-zh");
    } else if (b.getAttribute("data-title-en")) {
      document.title = b.getAttribute("data-title-en");
    }
    document.querySelectorAll(".lang-btn").forEach(function (x) {
      var on = x.getAttribute("data-lang") === lang;
      x.classList.toggle("on", on);
      x.setAttribute("aria-pressed", on ? "true" : "false");
    });
    try { localStorage.setItem("aerix-lang", lang); } catch (e) {}
  }
  document.querySelectorAll(".lang-btn").forEach(function (btn) {
    btn.addEventListener("click", function () { applyLang(btn.getAttribute("data-lang")); });
  });
  var savedLang = "en";
  try { savedLang = localStorage.getItem("aerix-lang") || "en"; } catch (e) {}
  applyLang(savedLang);

  /* header scroll state */
  function onScroll() {
    if (!headerHost) return;
    headerHost.classList.toggle("scrolled", window.scrollY > 24);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* burger */
  var burger = document.querySelector(".nav-burger");
  if (burger) burger.addEventListener("click", function () {
    document.getElementById("navLinks").classList.toggle("open");
  });

  /* ---------------- live clock ---------------- */
  function pad(n) { return (n < 10 ? "0" : "") + n; }
  function tick() {
    var d = new Date();
    var t = pad(d.getHours()) + ":" + pad(d.getMinutes()) + ":" + pad(d.getSeconds());
    var dateStr = d.getFullYear() + "." + pad(d.getMonth() + 1) + "." + pad(d.getDate());
    var el = document.getElementById("navClock");
    if (el) el.textContent = t;
    document.querySelectorAll("[data-clock]").forEach(function (n) { n.textContent = t; });
    document.querySelectorAll("[data-date]").forEach(function (n) { n.textContent = dateStr; });
  }
  setInterval(tick, 1000); tick();

  /* ---------------- flight counter ---------------- */
  document.querySelectorAll("[data-count]").forEach(function (el) {
    var target = parseFloat(el.getAttribute("data-count"));
    var dur = 2200, started = false;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting || started) return;
        started = true;
        var t0 = performance.now();
        (function step(now) {
          var p = Math.min((now - t0) / dur, 1);
          var eased = 1 - Math.pow(1 - p, 3);
          var v = Math.floor(target * eased);
          el.textContent = v.toLocaleString("en-US");
          if (p < 1) requestAnimationFrame(step);
          else {
            el.textContent = target.toLocaleString("en-US");
            if (el.hasAttribute("data-count-live")) {
              setInterval(function () {
                target += Math.floor(Math.random() * 3) + 1;
                el.textContent = target.toLocaleString("en-US");
              }, 4000);
            }
          }
        })(t0);
        io.disconnect();
      });
    }, { threshold: .4 });
    io.observe(el);
  });

  /* ---------------- reveal on scroll ---------------- */
  var ro = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add("in"); ro.unobserve(e.target); }
    });
  }, { threshold: .14, rootMargin: "0px 0px -40px 0px" });
  document.querySelectorAll(".reveal").forEach(function (n) { ro.observe(n); });

  /* ---------------- carousels ---------------- */
  document.querySelectorAll("[data-carousel]").forEach(function (root) {
    var track = root.querySelector(".carousel-track");
    var prev = root.querySelector("[data-prev]");
    var next = root.querySelector("[data-next]");
    function stepSize() {
      var item = track.children[0];
      return item ? item.getBoundingClientRect().width + 18 : 320;
    }
    if (prev) prev.addEventListener("click", function () { track.scrollBy({ left: -stepSize(), behavior: "smooth" }); });
    if (next) next.addEventListener("click", function () { track.scrollBy({ left: stepSize(), behavior: "smooth" }); });
  });

  /* ---------------- tabs ---------------- */
  document.querySelectorAll("[data-tabs]").forEach(function (root) {
    var btns = root.querySelectorAll(".tab-btns button");
    var panels = root.querySelectorAll(".tab-panel");
    btns.forEach(function (b, i) {
      b.addEventListener("click", function () {
        btns.forEach(function (x) { x.classList.remove("on"); });
        panels.forEach(function (x) { x.classList.remove("on"); });
        b.classList.add("on");
        if (panels[i]) panels[i].classList.add("on");
      });
    });
  });

  /* ---------------- image fallback shimmer ---------------- */
  document.querySelectorAll("img[data-fallback]").forEach(function (img) {
    img.addEventListener("error", function () {
      img.style.display = "none";
      if (img.parentElement) img.parentElement.classList.add("img-fallback");
    });
  });

  /* ============================================================
     MOTION LAYER v2 (all effects skip when reduced motion is on)
     ============================================================ */
  var REDUCED = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---- scroll progress bar ---- */
  (function () {
    var bar = document.createElement("div");
    bar.className = "scroll-progress";
    bar.setAttribute("aria-hidden", "true");
    document.body.appendChild(bar);
    var raf = false;
    function update() {
      raf = false;
      var h = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.width = (h > 0 ? (window.scrollY / h) * 100 : 0) + "%";
    }
    window.addEventListener("scroll", function () {
      if (!raf) { raf = true; requestAnimationFrame(update); }
    }, { passive: true });
    update();
  })();

  /* ---- hero headline word/glyph stagger ---- */
  (function () {
    if (REDUCED) return;
    var h = document.querySelector(".hero h1.display");
    if (!h) return;
    var isZh = document.documentElement.getAttribute("lang") === "zh-Hant";
    var text = h.textContent;
    var parts = isZh ? Array.prototype.slice.call(text) : text.split(/(\s+)/);
    var i = 0, out = "";
    parts.forEach(function (p) {
      if (/^\s+$/.test(p) || p === "") { out += p; return; }
      out += '<span class="w" style="--i:' + (i++) + '">' +
        p.replace(/&/g, "&amp;").replace(/</g, "&lt;") + "</span>";
    });
    h.innerHTML = out;
  })();

  /* ---- card 3D tilt (fine pointers only) ---- */
  (function () {
    if (REDUCED || !window.matchMedia("(pointer: fine)").matches) return;
    document.querySelectorAll(".card").forEach(function (card) {
      var r = null;
      card.addEventListener("pointerenter", function () {
        r = card.getBoundingClientRect();
        card.style.transition = "transform .12s ease-out, border-color .35s";
      });
      card.addEventListener("pointermove", function (e) {
        if (!r) r = card.getBoundingClientRect();
        var px = (e.clientX - r.left) / r.width - 0.5;
        var py = (e.clientY - r.top) / r.height - 0.5;
        card.style.transform = "translateY(-4px) perspective(900px) rotateX(" +
          (-py * 4.5).toFixed(2) + "deg) rotateY(" + (px * 5.5).toFixed(2) + "deg)";
      });
      card.addEventListener("pointerleave", function () {
        r = null;
        card.style.transition = "";
        card.style.transform = "";
      });
    });
  })();

  /* ---- keep hero video alive across tab/visibility changes ---- */
  (function () {
    if (REDUCED) return;
    var v = document.querySelector(".hero-media video");
    if (!v) return;
    function nudge() {
      if (!document.hidden && v.paused) {
        var p = v.play();
        if (p && p.catch) p.catch(function () {});
      }
    }
    document.addEventListener("visibilitychange", nudge);
    window.addEventListener("pageshow", nudge);
    new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting) nudge();
    }, { threshold: 0.1 }).observe(v);
  })();

  /* ---- drone swarm particle field (first hero only) ---- */
  (function () {
    if (REDUCED) return;
    var host = document.querySelector(".hero .hero-media");
    if (!host) return;
    var cv = document.createElement("canvas");
    cv.className = "swarm";
    host.appendChild(cv);
    var ctx = cv.getContext("2d");
    var dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    var W = 0, H = 0, pts = [], running = false, inView = true;

    function resize() {
      W = host.clientWidth; H = host.clientHeight;
      cv.width = W * dpr; cv.height = H * dpr;
      cv.style.width = W + "px"; cv.style.height = H + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    function seed() {
      var n = W < 700 ? 16 : 32;
      pts = [];
      for (var i = 0; i < n; i++) {
        pts.push({
          x: Math.random() * W, y: Math.random() * H,
          vx: (Math.random() - 0.5) * 0.35, vy: (Math.random() - 0.5) * 0.3,
          r: Math.random() * 1.6 + 0.8
        });
      }
    }
    function step() {
      if (!running) return;
      ctx.clearRect(0, 0, W, H);
      for (var i = 0; i < pts.length; i++) {
        var p = pts[i];
        p.x += p.vx; p.y += p.vy;
        if (p.x < -10) p.x = W + 10; if (p.x > W + 10) p.x = -10;
        if (p.y < -10) p.y = H + 10; if (p.y > H + 10) p.y = -10;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, 6.283);
        ctx.fillStyle = "rgba(111,168,255,.8)";
        ctx.fill();
        for (var j = i + 1; j < pts.length; j++) {
          var q = pts[j], dx = p.x - q.x, dy = p.y - q.y;
          var d2 = dx * dx + dy * dy;
          if (d2 < 12100) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = "rgba(89,216,255," + (0.16 * (1 - d2 / 12100)).toFixed(3) + ")";
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
      requestAnimationFrame(step);
    }
    function setRunning(on) {
      var next = on && inView && !document.hidden;
      if (next && !running) { running = true; requestAnimationFrame(step); }
      else if (!next) running = false;
    }
    resize(); seed(); setRunning(true);
    window.addEventListener("resize", function () { resize(); seed(); }, { passive: true });
    document.addEventListener("visibilitychange", function () { setRunning(true); });
    new IntersectionObserver(function (entries) {
      inView = entries[0].isIntersecting;
      setRunning(true);
    }, { threshold: 0.05 }).observe(host);
  })();

  /* ---- video lightbox (mega menu media cards) ---- */
  (function () {
    var modal = document.createElement("div");
    modal.className = "vmodal";
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-modal", "true");
    modal.setAttribute("aria-label", "Video player");
    modal.innerHTML =
      '<button type="button" class="vclose" aria-label="Close video">✕</button>' +
      '<video controls playsinline preload="none" poster="assets/img/hero-home.png">' +
      '<source src="assets/video/hero.mp4?v=2" type="video/mp4"></video>';
    document.body.appendChild(modal);
    var vid = modal.querySelector("video");
    function openModal() {
      modal.classList.add("open");
      var p = vid.play();
      if (p && p.catch) p.catch(function () {});
    }
    function closeModal() {
      modal.classList.remove("open");
      vid.pause();
    }
    document.addEventListener("click", function (e) {
      var t = e.target.closest("[data-video]");
      if (t) { e.preventDefault(); openModal(); return; }
      if (e.target === modal || e.target.closest(".vclose")) closeModal();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && modal.classList.contains("open")) closeModal();
    });
  })();
})();
