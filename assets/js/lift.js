/* ==========================================================================
   VEGA ELEVATOR SERVICES - LIFT ANIMATION
   Draws the animated lift (hero and "outside view") and the 3D cabin
   ("inside view"). You normally do not need to edit this file.
   ========================================================================== */
(function () {
  'use strict';

  var counter = 0;

  /* ---------- Sound: a soft two-note "ding" (plays only after a button press) ---------- */
  var audioCtx = null;
  function ding() {
    try {
      var Ctx = window.AudioContext || window.webkitAudioContext;
      if (!Ctx) return;
      if (!audioCtx) audioCtx = new Ctx();
      var ctx = audioCtx, now = ctx.currentTime;
      [880, 1318.5].forEach(function (freq, i) {
        var osc = ctx.createOscillator(), gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.value = freq;
        gain.gain.setValueAtTime(0.0001, now + i * 0.28);
        gain.gain.exponentialRampToValueAtTime(0.25, now + i * 0.28 + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.28 + 1.2);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + i * 0.28);
        osc.stop(now + i * 0.28 + 1.3);
      });
    } catch (e) { /* sound is optional */ }
  }

  /* ---------- Colours: apply a door / cabin finish ---------- */
  var current = { ext: 'Steel', int: 'Walnut' };

  function applyFinish(el) {
    var fins = (window.SITE && window.SITE.finishes) || {};
    var e = fins[current.ext] || fins.Steel;
    var n = fins[current.int] || fins.Walnut;
    if (!e || !n) return;
    el.style.setProperty('--door-bg', e.surface);
    el.style.setProperty('--frame-bg', e.frame);
    el.style.setProperty('--int-bg', n.surface);
  }

  function setFinish(ext, int) {
    if (ext) current.ext = ext;
    if (int) current.int = int;
    document.querySelectorAll('.lift, .cabin').forEach(applyFinish);
  }

  /* ---------- Lift entrance ---------- */
  function liftHTML(id, scrub) {
    return '' +
      '<div class="lift-scene">' +
        '<div class="a l-wall"></div><div class="a l-seams"></div><div class="a l-wash-a"></div><div class="a l-wash-b"></div><div class="a l-skirt"></div>' +
        '<div class="a l-floor"></div><div class="a l-sheen"></div><div class="a l-spill"></div>' +
        '<div class="a l-frame"><div class="l-open">' +
          '<div class="l-back"></div><div class="l-bloom-in"></div><div class="l-depth"></div><div class="l-rail"></div><div class="l-cabfloor"></div>' +
          '<div class="l-door l-door-l"><i class="hair"></i><i class="shine"></i><i class="kick"></i></div>' +
          '<div class="l-door l-door-r"><i class="hair"></i><i class="shine"></i><i class="kick"></i></div>' +
          '<div class="l-glint"></div>' +
        '</div></div>' +
        '<div class="a l-sill"></div>' +
        '<div class="a l-ind">' +
          '<svg class="l-arrow" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4l9 15H3z" fill="#A9C8FF"/></svg>' +
          '<span class="l-no">G</span>' +
        '</div>' +
        '<div class="a l-walker"><svg width="90" height="250" viewBox="0 0 90 250" aria-hidden="true">' +
          '<ellipse cx="45" cy="246" rx="38" ry="5" fill="rgba(0,0,0,0.5)"/>' +
          '<circle cx="45" cy="22" r="16" fill="#0B1020" stroke="rgba(150,185,255,0.35)"/>' +
          '<rect x="22" y="46" width="46" height="98" rx="16" fill="#0B1020" stroke="rgba(150,185,255,0.30)"/>' +
          '<rect x="11" y="52" width="13" height="88" rx="6" fill="#0B1020" stroke="rgba(150,185,255,0.30)"/>' +
          '<rect x="66" y="52" width="13" height="88" rx="6" fill="#0B1020" stroke="rgba(150,185,255,0.30)"/>' +
          '<rect x="27" y="138" width="16" height="106" rx="6" fill="#0B1020" stroke="rgba(150,185,255,0.30)"/>' +
          '<rect x="47" y="138" width="16" height="106" rx="6" fill="#0B1020" stroke="rgba(150,185,255,0.30)"/>' +
        '</svg></div>' +
        '<div class="a l-cone"></div><div class="a l-sconce"></div>' +
        (scrub
          ? '<div class="a l-panel"><span class="hall-btn"></span><span class="hall-btn"></span></div>'
          : '<div class="a l-panel">' +
          '<button class="hall-btn" data-dir="up" type="button" aria-label="Call the lift going up"><svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5l8 13H4z" fill="currentColor"/></svg></button>' +
          '<button class="hall-btn" data-dir="down" type="button" aria-label="Call the lift going down"><svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 19L4 6h16z" fill="currentColor"/></svg></button>' +
            '</div>') +
      '</div>' +
      '<div class="l-vignette"></div><div class="l-bloom"></div>' +
      '<svg class="l-grain" width="340" height="500" aria-hidden="true"><filter id="grainL' + id + '"><feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch"/><feColorMatrix type="saturate" values="0"/></filter><rect width="340" height="500" filter="url(#grainL' + id + ')"/></svg>' +
      '<div class="l-ring"></div>';
  }

  function Lift(root, opts) {
    var self = this;
    this.root = root;
    this.floor = 1;
    this.busy = false;
    this.timers = [];
    root.classList.add('lift');
    root.innerHTML = liftHTML(++counter, opts && opts.scrub);
    this.noEl = root.querySelector('.l-no');
    applyFinish(root);
    if (opts && opts.scrub) {
      /* scroll-driven lift: the page sets how far the doors are open */
      root.classList.add('scrub');
      this.noEl.textContent = 'G';
      return;
    }
    root.querySelectorAll('.hall-btn').forEach(function (b) {
      b.addEventListener('click', function () { self.press(b.getAttribute('data-dir'), b); });
    });
    root.classList.add('is-open');
    this.later(1200, function () { self.openDoors(); });
    this.loop = setInterval(function () {
      if (!root.isConnected) { clearInterval(self.loop); return; }
      if (!self.busy) self.cycle();
    }, 9000);
  }

  Lift.prototype.setProgress = function (v) {
    var st = this.root.style;
    st.setProperty('--open', v.open.toFixed(3));
    st.setProperty('--walk', v.walk.toFixed(3));
    st.setProperty('--enter', v.enter.toFixed(3));
    this.root.classList.toggle('dir-up', v.open > 0.05);
  };

  Lift.prototype.later = function (ms, fn) { this.timers.push(setTimeout(fn, ms)); };
  Lift.prototype.clear = function () { this.timers.forEach(clearTimeout); this.timers = []; };
  Lift.prototype.show = function () { this.noEl.textContent = this.floor === 1 ? 'G' : String(this.floor - 1); };

  Lift.prototype.openDoors = function () {
    var r = this.root, self = this;
    this.clear();
    r.classList.remove('walk-in', 'walk-enter');
    r.classList.add('snap', 'is-open');
    this.later(60, function () { r.classList.remove('snap'); });
    this.later(900, function () { r.classList.add('walk-in'); });
    this.later(3600, function () { r.classList.remove('walk-in'); r.classList.add('walk-enter'); });
  };

  Lift.prototype.closeDoors = function () {
    this.clear();
    this.root.classList.remove('is-open', 'walk-in', 'walk-enter');
  };

  Lift.prototype.arrive = function (dir) {
    this.floor = dir === 'up' ? (this.floor >= 8 ? 1 : this.floor + 1) : (this.floor <= 1 ? 8 : this.floor - 1);
    this.root.classList.remove('dir-up', 'dir-down');
    this.root.classList.add('dir-' + dir);
    this.show();
    this.openDoors();
  };

  Lift.prototype.cycle = function () {
    var self = this;
    this.closeDoors();
    this.later(1900, function () { self.arrive('up'); });
  };

  Lift.prototype.press = function (dir, btn) {
    var self = this;
    if (this.busy) return;
    this.busy = true;
    btn.classList.add('lit');
    this.closeDoors();
    this.later(1900, function () {
      ding();
      btn.classList.remove('lit');
      self.busy = false;
      self.arrive(dir);
    });
  };

  /* ---------- 3D cabin ---------- */
  function cabinHTML(id) {
    var lights = '';
    [[22, 18], [70, 18], [22, 48], [70, 48], [22, 78], [70, 78]].forEach(function (p) {
      lights += '<div class="cb-dl" style="left:' + p[0] + '%;top:' + p[1] + '%"></div>';
    });
    return '' +
      '<div class="cabin-room">' +
        '<div class="cb cb-back"><div class="cb-seams"></div><div class="cb-mirror"></div><div class="cb-light"></div><div class="cb-rail"></div><div class="cb-skirt"></div></div>' +
        '<div class="cb cb-left"><div class="cb-seams"></div><div class="cb-shade"></div><div class="cb-rail"></div><div class="cb-skirt"></div></div>' +
        '<div class="cb cb-right"><div class="cb-seams"></div><div class="cb-shade"></div><div class="cb-rail"></div><div class="cb-skirt"></div>' +
          '<div class="cb-cop"><span class="scr">G</span><span class="btn-dot"></span><span class="btn-dot on"></span><span class="btn-dot"></span><span class="btn-dot"></span></div></div>' +
        '<div class="cb cb-floor"><div class="cb-floor-inlay"></div><div class="cb-floor-sheen"></div></div>' +
        '<div class="cb cb-ceil">' + lights + '</div>' +
      '</div>' +
      '<div class="cabin-vignette"></div>' +
      '<svg class="cabin-grain" aria-hidden="true"><filter id="grainC' + id + '"><feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch"/><feColorMatrix type="saturate" values="0"/></filter><rect width="100%" height="100%" filter="url(#grainC' + id + ')"/></svg>' +
      '<div class="cabin-ring"></div>';
  }

  function Cabin(root) {
    root.classList.add('cabin');
    root.innerHTML = cabinHTML(++counter);
    applyFinish(root);
  }

  window.VegaLift = {
    Lift: Lift,
    Cabin: Cabin,
    setFinish: setFinish,
    getFinish: function () { return { ext: current.ext, int: current.int }; },
    ding: ding
  };
})();
