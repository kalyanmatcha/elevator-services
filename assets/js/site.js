/* ==========================================================================
   VEGA ELEVATOR SERVICES - SITE SCRIPT
   Builds the pages from config.js and parts-data.js.
   You normally do not need to edit this file.
   ========================================================================== */
(function () {
  'use strict';

  var S = window.SITE;
  var PARTS = window.PARTS || [];
  var SCENES = window.VEGA_SCENES || {};
  var page = document.body.getAttribute('data-page') || 'home';
  var home = page === 'home';

  /* ---------- Small helpers ---------- */
  function $(sel, root) { return (root || document).querySelector(sel); }
  function $$(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function esc(t) {
    return String(t == null ? '' : t).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function get(path) { return path.split('.').reduce(function (o, k) { return o && o[k]; }, S); }
  function params() { return new URLSearchParams(window.location.search); }
  function digits(t) { return String(t).replace(/[^\d+]/g, ''); }
  function slug(t) { return String(t).toLowerCase().replace(/\(.*?\)/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, ''); }
  function reduced() { return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches; }

  /* ---------- Fill in text and links from config.js ---------- */
  function bind() {
    $$('[data-bind]').forEach(function (el) {
      var v = get(el.getAttribute('data-bind'));
      if (v != null) el.textContent = v;
    });
    $$('[data-href]').forEach(function (el) {
      var href = el.getAttribute('data-href').replace(/\{([\w.]+)\}/g, function (m, p) { return get(p) || ''; });
      if (href.indexOf('tel:') === 0) href = 'tel:' + digits(href.slice(4));
      el.setAttribute('href', href);
    });
  }

  /* ---------- Header, footer and contact band ---------- */
  var STAR = '<svg aria-hidden="true" width="30" height="30" viewBox="0 0 24 24"><path d="M12 1l2.6 8.4L23 12l-8.4 2.6L12 23l-2.6-8.4L1 12l8.4-2.6z" fill="#5B8CFF"/></svg>';

  function navLinks() {
    var p = home ? '' : 'index.html';
    var c = (home || page === 'services') ? '' : 'index.html';
    var why = 'Why ' + S.business.name.split(' ')[0];
    return [
      ['Services', 'services.html', page === 'services'],
      ['Elevators', p + '#types', page === 'quote'],
      ['Parts', 'parts.html', page === 'parts'],
      ['Design your lift', p + '#design', false],
      [why, p + '#why', false],
      ['Contact', c + '#contact', false]
    ];
  }

  function renderHeader() {
    var el = $('[data-component="header"]');
    if (!el) return;
    el.className = 'site-header';
    el.innerHTML =
      '<div class="header-in">' +
        '<a class="logo" href="' + (home ? '#top' : 'index.html') + '" aria-label="' + esc(S.business.name) + ' home">' + STAR +
          '<span><b>' + esc(S.business.shortName) + '</b><small>Elevator Services</small></span></a>' +
        '<button class="nav-toggle" type="button" aria-label="Open menu" aria-expanded="false">' +
          '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg></button>' +
        '<nav class="nav" aria-label="Main">' + navLinks().map(function (l) {
          return '<a href="' + l[1] + '"' + (l[2] ? ' class="active"' : '') + '>' + esc(l[0]) + '</a>';
        }).join('') + '</nav>' +
        '<a class="btn btn-sm header-cta" href="quote.html">Get a quote</a>' +
      '</div>';
    var toggle = $('.nav-toggle', el), nav = $('.nav', el);
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    $$('.nav a', el).forEach(function (a) { a.addEventListener('click', function () { nav.classList.remove('open'); }); });
  }

  function renderFooter() {
    var el = $('[data-component="footer"]');
    if (!el) return;
    el.className = 'site-footer';
    el.innerHTML =
      '<div class="wrap">' +
        '<div class="footer-top">' +
          '<a class="logo" href="' + (home ? '#top' : 'index.html') + '">' + STAR + '<span><b style="font-size:22px">' + esc(S.business.shortName) + '</b><small>Elevator Services</small></span></a>' +
          '<nav class="footer-nav" aria-label="Footer">' + navLinks().map(function (l) { return '<a href="' + l[1] + '">' + esc(l[0]) + '</a>'; }).join('') + '</nav>' +
        '</div>' +
        '<div class="footer-bottom">' +
          '<span>© ' + new Date().getFullYear() + ' ' + esc(S.business.name) + ', ' + esc(S.business.city) + '. All rights reserved.</span>' +
          '<span>Licence no. ' + esc(S.business.licence) + ' · GSTIN ' + esc(S.business.gstin) + '</span>' +
        '</div>' +
      '</div>';
  }

  function renderContact() {
    var els = $$('[data-component="contact"]');
    if (!els.length) return;
    var b = S.business;
    var html =
      '<div class="wrap contact-in">' +
        '<h2>' + esc(S.contactTitle || "Tell us about your building's needs.") + '</h2>' +
        '<p>Share floors, use and timeline. We reply within ' + esc(b.responseTime) + ' with a site visit and a clear quote.</p>' +
        '<div class="contact-lines">' +
          '<b><a href="tel:' + esc(digits(b.phone)) + '">' + esc(b.phone) + '</a> · <a href="mailto:' + esc(b.email) + '">' + esc(b.email) + '</a></b>' +
          '<span>' + esc(b.address) + ' · ' + esc(b.hours) + '</span>' +
        '</div>' +
        '<div class="contact-actions">' +
          '<a class="btn btn-dark" href="quote.html">Request a quote</a>' +
          '<a class="btn btn-white" href="https://wa.me/' + esc(digits(b.whatsapp)) + '" target="_blank" rel="noopener">Chat on WhatsApp</a>' +
        '</div>' +
      '</div>';
    els.forEach(function (el) { el.className = 'contact-band'; el.id = 'contact'; el.innerHTML = html; });
  }

  /* ---------- Search-engine data (helps Google show your business) ---------- */
  function addStructuredData() {
    var b = S.business;
    var data = {
      '@context': 'https://schema.org', '@type': 'LocalBusiness', name: b.name, description: b.intro,
      telephone: b.phone, email: b.email,
      address: { '@type': 'PostalAddress', streetAddress: b.address, addressLocality: b.city, addressCountry: 'IN' },
      openingHours: b.hours
    };
    var s = document.createElement('script');
    s.type = 'application/ld+json';
    s.textContent = JSON.stringify(data);
    document.head.appendChild(s);
  }

  /* ---------- Home: opening story (the lift doors open as you scroll) ---------- */
  function renderChips() {
    var chips = $('#chips');
    if (chips) chips.innerHTML = S.services.map(function (s) {
      return '<a class="chip" href="services.html#svc-' + slug(s.title) + '">' + esc(s.title.replace(' (AMC)', '')) + '</a>';
    }).join('');
  }

  function ss(a, b, x) { var t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); }

  function initStory() {
    var story = $('.story');
    if (!story) return;
    var box = $('.story-lift-box', story);
    var holder = $('[data-story-lift]', story);

    /* Your own video replaces the animated lift */
    if (S.heroVideo && S.heroVideo.src) {
      story.classList.add('no-pin');
      box.style.height = 'auto';
      box.innerHTML = '<video src="' + esc(S.heroVideo.src) + '" poster="' + esc(S.heroVideo.poster || '') + '" autoplay muted loop playsinline style="width:340px;height:500px;object-fit:cover;border-radius:28px"></video>';
      return;
    }

    var wide = window.matchMedia('(min-width: 900px)').matches;
    if (!wide || reduced()) {
      /* Phones and reduced motion: a normal animated lift, no scroll pinning */
      story.classList.add('no-pin');
      new window.VegaLift.Lift(holder);
      return;
    }

    var lift = new window.VegaLift.Lift(holder, { scrub: true });
    var stage = $('.story-stage', story);
    var hint = $('.story-hint', story);
    var ticking = false;

    function fit() {
      var colW = $('.story-lift', story).clientWidth || 340;
      var k = Math.max(0.6, Math.min(1.5, (stage.clientHeight - 90) / 500, colW / 340));
      box.style.width = (340 * k) + 'px';
      box.style.height = (500 * k) + 'px';
      holder.style.setProperty('--k', k);
    }
    function update() {
      ticking = false;
      var head = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-h'), 10) || 64;
      var r = story.getBoundingClientRect();
      var total = story.offsetHeight - stage.offsetHeight;
      var p = total > 0 ? Math.min(1, Math.max(0, (head - r.top) / total)) : 1;
      lift.setProgress({ open: ss(0.05, 0.55, p), walk: ss(0.5, 0.85, p), enter: ss(0.85, 1, p) });
      if (hint) hint.style.opacity = p > 0.03 ? 0 : 1;
    }
    function onScroll() { if (!ticking) { ticking = true; requestAnimationFrame(update); } }
    fit(); update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', function () { fit(); onScroll(); });
  }

  /* ---------- Home: numbers and scrolling brands ---------- */
  function renderStats() {
    var stats = $('#stats');
    if (stats) stats.innerHTML = S.stats.map(function (s) {
      return '<div><b>' + esc(s.value) + '</b><span>' + esc(s.label) + '</span></div>';
    }).join('');
  }

  var BRAND_STYLES = ['brand-sans', 'brand-serif-i', 'brand-sans-b', 'brand-serif', 'brand-sans', 'brand-serif-i', 'brand-sans-b', 'brand-sans', 'brand-serif', 'brand-sans-b'];
  var BRAND_GLYPHS = [
    'M12 3l9 9-9 9-9-9z', 'M10 4h4v6h6v4h-6v6h-4v-6H4v-4h6z', 'M12 4l9 16H3z',
    'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zm0 4a5 5 0 1 1 0 10 5 5 0 0 1 0-10z',
    'M4 6h16v3H4zM4 11h16v3H4zM4 16h16v3H4z', 'M12 1l2.6 8.4L23 12l-8.4 2.6L12 23l-2.6-8.4L1 12l8.4-2.6z',
    'M12 3l8 4.5v9L12 21l-8-4.5v-9z', 'M5 5h14v14H5z', 'M12 3c5 3 7 8 0 18C5 11 7 6 12 3z', 'M3 20l6-12 4 7 3-5 5 10z'
  ];
  function brandItem(b, i) {
    if (b.logo) return '<div class="brand"><img src="' + esc(b.logo) + '" alt="' + esc(b.name) + '"></div>';
    return '<div class="brand"><svg width="26" height="26" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="' + BRAND_GLYPHS[i % BRAND_GLYPHS.length] + '" fill="currentColor"/></svg>' +
      '<span class="' + BRAND_STYLES[i % BRAND_STYLES.length] + '">' + esc(b.name) + '</span></div>';
  }
  function renderBrands() {
    var track = $('#brand-track');
    if (!track) return;
    var once = S.brands.map(brandItem).join('');
    track.innerHTML = once + '<div style="display:contents" aria-hidden="true">' + once + '</div>';
  }

  /* ---------- Services page ---------- */
  function renderServices() {
    var el = $('#services-bento');
    if (!el) return;
    el.innerHTML = S.services.map(function (s, i) {
      return '<article class="tile' + (i === 0 ? ' tile-wide' : '') + '" id="svc-' + slug(s.title) + '">' +
        '<div class="tile-icon"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="' + s.icon + '"/></svg></div>' +
        '<div class="tile-text"><h3>' + esc(s.title) + '</h3><p>' + esc(s.body) + '</p></div>' +
        '<div class="tile-side">' +
          '<div class="tile-inc">' + s.includes.map(function (t) { return '<span>' + esc(t) + '</span>'; }).join('') + '</div>' +
          '<span class="tile-note">' + esc(s.note) + '</span>' +
          '<a class="link-arrow" href="' + esc(s.link) + '">' + esc(s.cta) + '</a>' +
        '</div>' +
      '</article>';
    }).join('');
  }

  /* ---------- Home: lift types rail ---------- */
  function sceneHTML(kind) {
    return '<div class="scene"><div class="scene-inner">' + (SCENES[kind] || '') + '</div><div class="scene-glint"></div><div class="scene-vignette"></div></div>';
  }
  function typeMedia(t) {
    if (t.video) return '<video src="' + esc(t.video) + '" autoplay muted loop playsinline></video>';
    if (t.image) return '<img src="' + esc(t.image) + '" alt="' + esc(t.name) + '" loading="lazy">';
    return sceneHTML(t.scene);
  }
  function renderTypes() {
    var rail = $('#type-rail');
    if (!rail) return;
    rail.innerHTML = S.types.map(function (t) {
      return '<article class="type-card">' +
        '<div class="type-media">' + typeMedia(t) + '</div>' +
        '<div class="type-body"><h3>' + esc(t.name) + '</h3><p>' + esc(t.use) + '</p><p class="price">' + esc(t.price) + '</p>' +
        '<a class="link-arrow" href="quote.html?type=' + encodeURIComponent(t.id) + '">Get a quote</a></div>' +
      '</article>';
    }).join('');
    var prev = $('#rail-prev'), next = $('#rail-next');
    function step() { var c = $('.type-card', rail); return c ? c.getBoundingClientRect().width + 22 : 320; }
    function state() {
      prev.disabled = rail.scrollLeft < 8;
      next.disabled = rail.scrollLeft + rail.clientWidth >= rail.scrollWidth - 8;
    }
    prev.addEventListener('click', function () { rail.scrollBy({ left: -step(), behavior: 'smooth' }); });
    next.addEventListener('click', function () { rail.scrollBy({ left: step(), behavior: 'smooth' }); });
    rail.addEventListener('scroll', state, { passive: true });
    window.addEventListener('resize', state);
    state();
  }

  /* ---------- Design your lift (outside doors and inside cabin) ---------- */
  function initDesigner(root, opts) {
    opts = opts || {};
    var fins = S.finishes;
    var cur = window.VegaLift.getFinish();
    var qs = params();
    var ext = qs.get('ext'), int = qs.get('int');
    if (ext && fins[ext] && S.outsideFinishes.indexOf(ext) > -1) cur.ext = ext;
    if (int && fins[int] && S.insideFinishes.indexOf(int) > -1) cur.int = int;
    window.VegaLift.setFinish(cur.ext, cur.int);

    root.classList.add('designer');
    root.innerHTML =
      '<div class="designer-stage">' +
        '<div class="stage-box" data-pane="outside"><div data-lift-mount></div></div>' +
        '<div data-pane="inside" hidden><div data-cabin-mount></div></div>' +
      '</div>' +
      '<div class="designer-controls">' +
        '<div class="tabs" role="group" aria-label="View">' +
          '<button class="tab" type="button" data-view="outside" aria-pressed="true">Outside view</button>' +
          '<button class="tab" type="button" data-view="inside" aria-pressed="false">Inside view</button></div>' +
        '<div class="designer-picks">' +
          '<div class="pick-group"><span>Outside doors</span><div class="pick-row" data-row="ext"></div></div>' +
          '<div class="pick-group"><span>Inside cabin</span><div class="pick-row" data-row="int"></div></div>' +
        '</div>' +
        '<div class="design-summary"><span>Your design: <strong data-s="ext"></strong> doors outside, <strong data-s="int"></strong> inside.</span>' +
          (opts.cta ? '<a class="btn" data-cta href="quote.html">Get a quote for this design</a>' : '') + '</div>' +
      '</div>';

    new window.VegaLift.Lift($('[data-lift-mount]', root));
    new window.VegaLift.Cabin($('[data-cabin-mount]', root));

    function pickRow(key, names) {
      $('[data-row="' + key + '"]', root).innerHTML = names.map(function (n) {
        return '<button class="pick" type="button" data-name="' + esc(n) + '" aria-pressed="false"><i style="background:' + fins[n].swatch + '"></i>' + esc(n) + '</button>';
      }).join('');
    }
    pickRow('ext', S.outsideFinishes);
    pickRow('int', S.insideFinishes);

    function sync() {
      var f = window.VegaLift.getFinish();
      $$('[data-row="ext"] .pick', root).forEach(function (b) { b.setAttribute('aria-pressed', b.getAttribute('data-name') === f.ext ? 'true' : 'false'); });
      $$('[data-row="int"] .pick', root).forEach(function (b) { b.setAttribute('aria-pressed', b.getAttribute('data-name') === f.int ? 'true' : 'false'); });
      $('[data-s="ext"]', root).textContent = f.ext;
      $('[data-s="int"]', root).textContent = f.int;
      var cta = $('[data-cta]', root);
      if (cta) cta.setAttribute('href', 'quote.html?type=' + encodeURIComponent(opts.type || 'passenger') + '&ext=' + encodeURIComponent(f.ext) + '&int=' + encodeURIComponent(f.int));
    }
    function refresh() {
      sync();
      document.dispatchEvent(new CustomEvent('vega:finish', { detail: window.VegaLift.getFinish() }));
    }
    document.addEventListener('vega:finish', sync);
    root.addEventListener('click', function (e) {
      var pick = e.target.closest('.pick');
      var tab = e.target.closest('.tab');
      if (pick) {
        var group = pick.parentNode.getAttribute('data-row');
        window.VegaLift.setFinish(group === 'ext' ? pick.getAttribute('data-name') : null, group === 'int' ? pick.getAttribute('data-name') : null);
        refresh();
      } else if (tab) {
        var view = tab.getAttribute('data-view');
        $$('.tab', root).forEach(function (t) { t.setAttribute('aria-pressed', t === tab ? 'true' : 'false'); });
        $('[data-pane="outside"]', root).hidden = view !== 'outside';
        $('[data-pane="inside"]', root).hidden = view !== 'inside';
      }
    });
    refresh();
  }

  /* ---------- Parts (cards, home preview, catalogue) ---------- */
  /* A drawing of the part is always shown; a real photo covers it when the file exists.
     Photo lookup: assets/images/parts/<part number>.jpg, or the "image" path in parts-data.js */
  function partMedia(p) {
    var art = window.VEGA_PART_ART ? window.VEGA_PART_ART(p.number) : '';
    var local = 'assets/images/parts/' + p.number + '.jpg';
    var linked = (p.image && p.image !== local) ? '<img src="' + esc(p.image) + '" alt="' + esc(p.name) + '" loading="lazy">' : '';
    return '<div class="ph">' + art + linked + '<img src="' + esc(local) + '" alt="' + esc(p.name) + '" loading="lazy"></div>' +
      (p.credit ? '<span class="credit">' + esc(p.credit) + '</span>' : '');
  }
  function wirePhotos(root) {
    $$('.ph img', root || document).forEach(function (img) {
      function drop() { if (img.parentNode) img.parentNode.removeChild(img); }
      if (img.complete && img.naturalWidth === 0) drop();
      else img.addEventListener('error', drop);
    });
  }
  function enquiryLink(p) {
    var msg = 'Hello ' + S.business.name + ', I would like to enquire about: ' + p.name + ' (part no. ' + p.number + ').';
    return 'https://wa.me/' + digits(S.business.whatsapp) + '?text=' + encodeURIComponent(msg);
  }
  function partCard(p) {
    return '<article class="part">' + partMedia(p) +
      '<span class="cat">' + esc(p.category) + '</span><h3>' + esc(p.name) + '</h3>' +
      '<span class="no">Part no. ' + esc(p.number) + ' · Fits most standard lifts</span>' +
      '<span class="price">' + esc(p.price) + '</span>' +
      '<a class="btn btn-sm" href="' + enquiryLink(p) + '" target="_blank" rel="noopener">Enquire about this part</a></article>';
  }

  function renderPartsPreview() {
    var prev = $('#parts-preview');
    if (!prev) return;
    var wanted = S.featuredParts || ['VG-SF-101', 'VG-DR-201', 'VG-CB-401', 'VG-CT-301'];
    var list = wanted.map(function (n) { return PARTS.filter(function (p) { return p.number === n; })[0]; }).filter(Boolean);
    if (!list.length) list = PARTS.slice(0, 4);
    prev.innerHTML = list.map(function (p) {
      return '<article class="part">' + partMedia(p) + '<span class="cat">' + esc(p.category) + '</span><h3>' + esc(p.name) + '</h3><span class="price">' + esc(p.price) + '</span>' +
        '<a class="link-arrow" href="parts.html">Enquire</a></article>';
    }).join('');
    wirePhotos(prev);
  }

  function initParts() {
    var grid = $('#parts-grid');
    if (!grid) return;
    var state = { cat: 'All', q: '' };
    var cats = ['All'];
    PARTS.forEach(function (p) { if (cats.indexOf(p.category) < 0) cats.push(p.category); });
    var row = $('#cat-row');
    row.innerHTML = cats.map(function (c) { return '<button class="cat-btn" type="button" data-cat="' + esc(c) + '" aria-pressed="' + (c === 'All') + '">' + esc(c) + '</button>'; }).join('');
    function draw() {
      var q = state.q.trim().toLowerCase();
      var items = PARTS.filter(function (p) {
        return (state.cat === 'All' || p.category === state.cat) &&
          (!q || (p.name + ' ' + p.category + ' ' + p.number).toLowerCase().indexOf(q) > -1);
      });
      $('#parts-count').textContent = items.length + ' parts shown';
      grid.innerHTML = items.map(partCard).join('');
      wirePhotos(grid);
      $('#parts-empty').hidden = items.length > 0;
    }
    row.addEventListener('click', function (e) {
      var b = e.target.closest('.cat-btn');
      if (!b) return;
      state.cat = b.getAttribute('data-cat');
      $$('.cat-btn', row).forEach(function (x) { x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); });
      draw();
    });
    $('#part-search').addEventListener('input', function (e) { state.q = e.target.value; draw(); });
    draw();
  }

  /* ---------- Home: why us ---------- */
  function renderWhy() {
    var pts = $('#why-points');
    if (pts) pts.innerHTML = ['Licensed lift contractor · Licence no. ' + S.business.licence].concat(S.whyPoints.slice(1)).map(function (t) { return '<span>' + esc(t) + '</span>'; }).join('');
    var tl = $('#timeline');
    if (tl) tl.innerHTML = S.steps.map(function (s, i) {
      return '<div class="tl-step"><b>' + (i + 1) + '</b><h3>' + esc(s.title) + '</h3><p>' + esc(s.body) + '</p></div>';
    }).join('');
  }

  /* ---------- Quote page ---------- */
  function initQuote() {
    var form = $('#quote-form');
    if (!form) return;
    var qs = params();
    var typeSel = $('#q-type');
    typeSel.innerHTML = S.types.map(function (t) { return '<option value="' + esc(t.id) + '">' + esc(t.name) + '</option>'; }).join('');
    if (qs.get('type') && S.types.some(function (t) { return t.id === qs.get('type'); })) typeSel.value = qs.get('type');

    var title = $('#quote-title');
    function typeName() { return S.types.filter(function (t) { return t.id === typeSel.value; })[0].name; }
    function updateTitle() { if (title) title.textContent = 'Get a quote for ' + typeName().toLowerCase(); }
    typeSel.addEventListener('change', updateTitle);
    updateTitle();

    function chosen() {
      var f = window.VegaLift.getFinish();
      $('#chosen-design').textContent = f.ext + ' doors outside, ' + f.int + ' inside';
      return f;
    }
    document.addEventListener('vega:finish', chosen);
    chosen();

    function message() {
      var f = chosen();
      var v = function (id) { return ($('#' + id).value || '').trim(); };
      return [
        'Hello ' + S.business.name + ', I would like a quote.',
        'Lift type: ' + typeName(),
        'Floors (stops): ' + (v('q-stops') || 'not sure'),
        'Capacity (persons): ' + (v('q-cap') || 'not sure'),
        'Building: ' + v('q-building'),
        'Outside doors: ' + f.ext,
        'Inside cabin: ' + f.int,
        'Name: ' + v('q-name'),
        'Phone: ' + v('q-phone'),
        v('q-notes') ? 'Notes: ' + v('q-notes') : ''
      ].filter(Boolean).join('\n');
    }
    function valid() {
      var name = $('#q-name').value.trim(), phone = $('#q-phone').value.replace(/\D/g, '');
      var err = $('#form-error');
      if (!name) { err.textContent = 'Please enter your name.'; $('#q-name').focus(); return false; }
      if (phone.length < 8) { err.textContent = 'Please enter a phone number we can call.'; $('#q-phone').focus(); return false; }
      err.textContent = '';
      return true;
    }
    function done() { $('#quote-fields').hidden = true; $('#quote-thanks').hidden = false; }

    $('#send-whatsapp').addEventListener('click', function () {
      if (!valid()) return;
      window.open('https://wa.me/' + digits(S.business.whatsapp) + '?text=' + encodeURIComponent(message()), '_blank', 'noopener');
      done();
    });
    $('#send-email').addEventListener('click', function () {
      if (!valid()) return;
      window.location.href = 'mailto:' + S.business.email + '?subject=' + encodeURIComponent('Quote request: ' + typeName()) + '&body=' + encodeURIComponent(message());
      done();
    });
    form.addEventListener('submit', function (e) { e.preventDefault(); });

    var facts = $('#facts');
    if (facts) facts.innerHTML = S.quoteFacts.map(function (f) { return '<div class="fact"><b>' + esc(f.k) + '</b><span>' + esc(f.v) + '</span></div>'; }).join('');
    var faq = $('#faq');
    if (faq) faq.innerHTML = S.faq.map(function (q) { return '<div class="faq-item"><h3>' + esc(q.q) + '</h3><p>' + esc(q.a) + '</p></div>'; }).join('');
  }

  /* ---------- Smooth scroll reveals: content fades and rises gently as you scroll ---------- */
  function initReveal() {
    if (!('IntersectionObserver' in window) || reduced()) return;
    var sel = '.story-copy > *, .story-lift, .band-head, .type-card, .part, .tile, .tl-step, .why-points, .stats > div, ' +
      '.brands-label, .brands-mask, .designer > *, .contact-in > *, .page-hero .wrap > *, .facts, .faq-item, .quote-side, .quote-box, .toolbar, .band-foot, .rail-nav';
    var els = $$(sel);
    document.documentElement.classList.add('js-reveal');
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -6% 0px' });
    els.forEach(function (el) {
      el.classList.add('reveal');
      el.style.setProperty('--d', Math.min(Array.prototype.indexOf.call(el.parentNode.children, el), 5));
      io.observe(el);
    });
    /* Safety net: if someone scrolls very fast, reveal anything already on screen or scrolled past */
    var ticking = false;
    function sweep() {
      ticking = false;
      els.forEach(function (el) {
        if (el.classList.contains('in')) return;
        var r = el.getBoundingClientRect();
        if (r.width === 0 && r.height === 0) return;
        if (r.top < window.innerHeight * 0.94) { el.classList.add('in'); io.unobserve(el); }
      });
    }
    window.addEventListener('scroll', function () { if (!ticking) { ticking = true; requestAnimationFrame(sweep); } }, { passive: true });
    window.addEventListener('resize', sweep);
  }

  /* ---------- Start ---------- */
  renderHeader();
  renderContact();
  renderFooter();
  bind();
  addStructuredData();
  renderChips();
  renderStats();
  renderBrands();
  renderServices();
  renderTypes();
  renderWhy();
  renderPartsPreview();
  $$('[data-designer]').forEach(function (d) {
    initDesigner(d, { cta: d.getAttribute('data-with-cta') === 'true', type: 'passenger' });
  });
  initStory();
  initParts();
  initQuote();
  initReveal();
})();
