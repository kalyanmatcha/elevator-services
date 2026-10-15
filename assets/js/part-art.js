/* ==========================================================================
   VEGA ELEVATOR SERVICES - PART PICTURES
   A small drawing for each part, shown until you add a real photo.
   To use a real photo, save it as  assets/images/parts/<part number>.jpg
   (for example assets/images/parts/VG-SF-101.jpg). It replaces the drawing
   automatically. You do not need to edit this file.
   ========================================================================== */
(function () {
  'use strict';

  var DEFS =
    '<svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs>' +
    '<linearGradient id="pm" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#7C8798"/><stop offset=".35" stop-color="#E4E9F1"/><stop offset=".7" stop-color="#A9B3C3"/><stop offset="1" stop-color="#7C8798"/></linearGradient>' +
    '<linearGradient id="pd" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3A4560"/><stop offset="1" stop-color="#1B2338"/></linearGradient>' +
    '<linearGradient id="pg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2F8F5B"/><stop offset="1" stop-color="#1B5E3A"/></linearGradient>' +
    '</defs></svg>';

  function svg(inner) { return '<svg viewBox="0 0 160 110" aria-hidden="true">' + inner + '</svg>'; }
  function dots(cols, rows, x0, y0, dx, dy, r, fill) {
    var s = '';
    for (var i = 0; i < cols; i++) for (var j = 0; j < rows; j++) s += '<circle cx="' + (x0 + i * dx) + '" cy="' + (y0 + j * dy) + '" r="' + r + '" fill="' + fill + '"/>';
    return s;
  }
  function coil(strokes) {
    return '<g fill="none">' + strokes + '</g>';
  }

  var ART = {
    /* Safety */
    'VG-SF-101': svg('<rect x="62" y="92" width="36" height="10" rx="3" fill="url(#pm)"/><circle cx="80" cy="52" r="38" fill="url(#pm)"/><circle cx="80" cy="52" r="30" fill="url(#pd)"/><g stroke="#A9B3C3" stroke-width="3"><path d="M80 22v60M50 52h60M59 31l42 42M101 31L59 73"/></g><circle cx="80" cy="52" r="8" fill="url(#pm)"/>'),
    'VG-SF-102': svg('<path d="M38 18h84v66H38z" fill="url(#pm)"/><path d="M52 30l58 46H52z" fill="url(#pd)"/><circle cx="54" cy="30" r="7" fill="#C9D1DC"/><circle cx="106" cy="30" r="7" fill="#C9D1DC"/><rect x="38" y="84" width="84" height="10" rx="3" fill="url(#pd)"/>'),
    'VG-SF-103': svg('<rect x="48" y="90" width="64" height="12" rx="3" fill="url(#pm)"/><rect x="62" y="12" width="36" height="10" rx="3" fill="url(#pm)"/>' + coil('<path d="M62 30q18-7 36 0M62 40q18-7 36 0M62 50q18-7 36 0M62 60q18-7 36 0M62 70q18-7 36 0M62 80q18-7 36 0" stroke="url(#pm)" stroke-width="5"/>')),
    'VG-SF-104': svg('<rect x="44" y="40" width="66" height="46" rx="6" fill="url(#pd)"/><rect x="52" y="48" width="50" height="12" rx="3" fill="#C9D1DC"/><path d="M110 60l26-26" stroke="url(#pm)" stroke-width="6" stroke-linecap="round"/><circle cx="140" cy="32" r="10" fill="url(#pm)"/><circle cx="60" cy="76" r="4" fill="#8FB4FF"/>'),
    'VG-SF-105': svg('<rect x="28" y="24" width="104" height="62" rx="8" fill="url(#pd)"/><rect x="38" y="46" width="26" height="30" rx="3" fill="url(#pg)"/><rect x="68" y="46" width="26" height="30" rx="3" fill="url(#pg)"/><rect x="98" y="46" width="26" height="30" rx="3" fill="url(#pg)"/><circle cx="46" cy="35" r="4" fill="#8FB4FF"/><rect x="60" y="32" width="50" height="6" rx="3" fill="#5E6B85"/>'),

    /* Doors */
    'VG-DR-201': svg('<rect x="20" y="36" width="120" height="36" rx="6" fill="url(#pd)"/><circle cx="46" cy="54" r="17" fill="url(#pm)"/><circle cx="116" cy="54" r="12" fill="url(#pm)"/><path d="M46 37h70M46 71h70" stroke="#C9D1DC" stroke-width="3"/><rect x="20" y="76" width="120" height="8" rx="3" fill="url(#pm)"/>'),
    'VG-DR-202': svg('<rect x="72" y="12" width="16" height="26" rx="3" fill="url(#pd)"/><rect x="42" y="32" width="76" height="48" rx="6" fill="url(#pm)"/><circle cx="62" cy="80" r="13" fill="url(#pd)"/><circle cx="98" cy="80" r="13" fill="url(#pd)"/><circle cx="62" cy="80" r="5" fill="#C9D1DC"/><circle cx="98" cy="80" r="5" fill="#C9D1DC"/>'),
    'VG-DR-203': svg('<g stroke="#8FB4FF" stroke-opacity=".5" stroke-width="2" stroke-dasharray="3 5"><path d="M92 24h46M92 48h46M92 72h46M22 24h46M22 48h46M22 72h46"/></g><rect x="70" y="6" width="20" height="98" rx="6" fill="url(#pd)"/>' + dots(1, 7, 80, 18, 0, 12, 3, '#8FB4FF')),

    /* Control */
    'VG-CT-301': svg('<rect x="32" y="10" width="96" height="90" rx="6" fill="url(#pd)"/><rect x="42" y="20" width="76" height="30" rx="3" fill="#0B1226"/><rect x="48" y="26" width="34" height="8" fill="#8FB4FF"/><rect x="48" y="38" width="22" height="5" fill="#5E6B85"/><rect x="44" y="58" width="30" height="32" rx="3" fill="url(#pm)"/><rect x="82" y="58" width="34" height="13" rx="2" fill="url(#pm)"/><rect x="82" y="76" width="34" height="14" rx="2" fill="url(#pm)"/>'),
    'VG-CT-302': svg('<rect x="26" y="20" width="108" height="72" rx="5" fill="url(#pg)"/><rect x="42" y="34" width="30" height="24" fill="#10151F"/><rect x="82" y="32" width="14" height="14" fill="#10151F"/><rect x="102" y="32" width="22" height="32" fill="#C9D1DC"/><g stroke="#7BD3A0" stroke-width="1.5" fill="none"><path d="M34 72h32l8 10h44M34 80h22"/></g>' + dots(2, 2, 32, 28, 96, 56, 3, '#E4E9F1')),
    'VG-CT-303': svg('<rect x="48" y="8" width="64" height="80" rx="4" fill="url(#pg)"/><rect x="56" y="20" width="48" height="26" fill="#10151F"/><rect x="56" y="54" width="22" height="14" fill="#10151F"/><rect x="48" y="88" width="64" height="14" fill="url(#pm)"/><g stroke="#7BD3A0" stroke-width="1.5" fill="none"><path d="M84 56h20M84 64h14"/></g>'),
    'VG-CT-304': svg('<rect x="38" y="10" width="84" height="90" rx="6" fill="url(#pd)"/><rect x="48" y="20" width="64" height="22" rx="3" fill="#0B1226"/><rect x="54" y="26" width="28" height="8" fill="#8FB4FF"/>' + dots(3, 1, 60, 58, 20, 0, 6, 'url(#pm)') + '<g stroke="#5E6B85" stroke-width="3"><path d="M50 74h60M50 82h60M50 90h60"/></g>'),

    /* Cabling */
    'VG-CB-401': svg(coil('<ellipse cx="80" cy="55" rx="48" ry="32" stroke="#26304A" stroke-width="10"/><ellipse cx="80" cy="55" rx="35" ry="22" stroke="#26304A" stroke-width="10"/><ellipse cx="80" cy="55" rx="22" ry="12" stroke="#26304A" stroke-width="10"/><ellipse cx="80" cy="53" rx="48" ry="32" stroke="#8FA0BC" stroke-width="1.5"/><ellipse cx="80" cy="53" rx="35" ry="22" stroke="#8FA0BC" stroke-width="1.5"/><ellipse cx="80" cy="53" rx="22" ry="12" stroke="#8FA0BC" stroke-width="1.5"/>')),
    'VG-CB-402': svg('<rect x="34" y="24" width="92" height="62" rx="6" fill="url(#pm)"/><rect x="42" y="32" width="76" height="46" rx="3" fill="#10151F"/>' + dots(4, 2, 56, 46, 16, 18, 5, '#C9A24B') + '<g stroke="#8FA0BC" stroke-width="3"><path d="M56 86v14M72 86v14M88 86v14M104 86v14"/></g>'),

    /* Machine */
    'VG-MC-501': svg('<rect x="20" y="34" width="86" height="46" rx="8" fill="url(#pd)"/><rect x="30" y="41" width="66" height="6" fill="#5E6B85"/><circle cx="120" cy="56" r="28" fill="url(#pm)"/><circle cx="120" cy="56" r="18" fill="url(#pd)"/><circle cx="120" cy="56" r="6" fill="url(#pm)"/><rect x="20" y="82" width="86" height="8" rx="3" fill="url(#pm)"/>'),
    'VG-MC-502': svg('<rect x="72" y="4" width="16" height="18" rx="3" fill="url(#pm)"/><circle cx="80" cy="58" r="36" fill="url(#pd)"/><circle cx="80" cy="58" r="25" fill="url(#pm)"/><circle cx="80" cy="58" r="9" fill="url(#pd)"/><path d="M80 94q0 12 24 12" stroke="#26304A" stroke-width="4" fill="none"/>'),
    'VG-MC-503': svg('<path d="M36 18h26v50h36V18h26v76H36z" fill="url(#pm)"/><path d="M62 18h36v50H62z" fill="#10151F"/>' + dots(2, 1, 49, 82, 62, 0, 4, '#5E6B85')),
    'VG-MC-504': svg(coil('<ellipse cx="80" cy="55" rx="46" ry="30" stroke="url(#pm)" stroke-width="9"/><ellipse cx="80" cy="55" rx="33" ry="20" stroke="url(#pm)" stroke-width="9"/><ellipse cx="80" cy="55" rx="20" ry="11" stroke="url(#pm)" stroke-width="9"/><ellipse cx="80" cy="55" rx="46" ry="30" stroke="#3A4560" stroke-width="9" stroke-dasharray="2 5" stroke-opacity=".55"/><ellipse cx="80" cy="55" rx="33" ry="20" stroke="#3A4560" stroke-width="9" stroke-dasharray="2 5" stroke-opacity=".55"/><ellipse cx="80" cy="55" rx="20" ry="11" stroke="#3A4560" stroke-width="9" stroke-dasharray="2 5" stroke-opacity=".55"/>')),

    /* Cabin and panels */
    'VG-CP-601': svg('<rect x="48" y="6" width="64" height="98" rx="8" fill="url(#pm)"/><rect x="58" y="14" width="44" height="14" rx="3" fill="#0B1226"/><rect x="64" y="18" width="12" height="6" fill="#8FB4FF"/>' + dots(2, 4, 68, 44, 24, 16, 6, 'url(#pd)') + '<circle cx="92" cy="60" r="6" fill="#5B8CFF"/>'),
    'VG-CP-602': svg('<rect x="56" y="22" width="48" height="66" rx="9" fill="url(#pm)"/><circle cx="80" cy="46" r="11" fill="url(#pd)"/><circle cx="80" cy="70" r="11" fill="url(#pd)"/><circle cx="80" cy="46" r="5" fill="#5B8CFF"/><circle cx="80" cy="70" r="5" fill="#8E9CB8"/>'),
    'VG-CP-603': svg('<rect x="46" y="10" width="68" height="90" rx="8" fill="url(#pm)"/>' + dots(5, 4, 60, 26, 10, 9, 2.4, '#5E6B85') + '<circle cx="80" cy="76" r="11" fill="#B4232A"/><circle cx="80" cy="76" r="5" fill="#E7777C"/>'),
    'VG-CP-604': svg('<circle cx="80" cy="55" r="46" fill="#FFF3C8" fill-opacity=".22"/><circle cx="80" cy="55" r="38" fill="url(#pm)"/><circle cx="80" cy="55" r="28" fill="#FFF7DF"/><circle cx="80" cy="55" r="28" fill="none" stroke="#fff" stroke-opacity=".7" stroke-width="2"/>')
  };

  var GENERIC = svg('<g stroke="#A9B3C3" stroke-width="8"><path d="M80 14v14M80 82v14M30 55h14M116 55h14M45 20l10 10M105 80l10 10M115 20l-10 10M55 80l-10 10"/></g><circle cx="80" cy="55" r="28" fill="url(#pm)"/><circle cx="80" cy="55" r="12" fill="url(#pd)"/>');

  document.body.insertAdjacentHTML('afterbegin', DEFS);
  window.VEGA_PART_ART = function (number) { return ART[number] || GENERIC; };
})();
