# Part photos: what you need and how to add them

Every part on the website already shows a drawing. A real photo replaces the drawing as soon as you
save a file with the part's number as its name in `assets/images/parts/` (then refresh the page).

## Where to get photos you are allowed to use

1. **Your own photos (best).** Place the part on a plain white sheet near a window. Shoot straight on,
   part centred, no brand logos of other companies visible. 1200 pixels wide is plenty.
2. **Your suppliers or manufacturers.** Because Vega sells these parts, ask each supplier for their
   product photos and get **written permission** to use them on your website.
3. **Free-licence photo libraries.** Check the licence on every single photo before you use it:
   - Wikimedia Commons (commons.wikimedia.org): licences differ per photo. Public domain and CC0 are
     free to use. CC BY and CC BY-SA also need a credit line (see below).
   - Unsplash, Pexels and Pixabay: free to use under their own licence pages. Read each licence page.
   Search with the terms in the last column of the table.
4. **Never copy pictures from Google Images, shops or competitors' websites.** They are usually
   protected by copyright, even when they look free to download.

## Giving credit when a licence needs it

Open `assets/js/parts-data.js`, find the part, and fill in `credit`, for example:
`credit: "Photo: Jane Doe, CC BY-SA 4.0, via Wikimedia Commons"`. It appears in small type under the photo.

## The 22 parts

| Part number | Part | Save the photo as | Search terms for free libraries |
|---|---|---|---|
| VG-SF-101 | Overspeed governor | `VG-SF-101.jpg` | elevator overspeed governor sheave |
| VG-SF-102 | Safety gear | `VG-SF-102.jpg` | elevator safety gear wedge clamp |
| VG-SF-103 | Car and counterweight buffers | `VG-SF-103.jpg` | elevator buffer spring pit |
| VG-SF-104 | Limit switches | `VG-SF-104.jpg` | elevator limit switch roller |
| VG-SF-105 | Automatic rescue device (ARD) | `VG-SF-105.jpg` | elevator automatic rescue device battery |
| VG-DR-201 | Door operator drive | `VG-DR-201.jpg` | elevator door operator motor belt |
| VG-DR-202 | Door coupler and slider | `VG-DR-202.jpg` | elevator door hanger roller coupler |
| VG-DR-203 | Door sensor and light curtain | `VG-DR-203.jpg` | elevator door light curtain safety edge |
| VG-CT-301 | Lift controller | `VG-CT-301.jpg` | elevator controller cabinet |
| VG-CT-302 | Door operator controller | `VG-CT-302.jpg` | elevator door controller circuit board |
| VG-CT-303 | Controller cards | `VG-CT-303.jpg` | elevator main control board PCB |
| VG-CT-304 | Variable-frequency drive (VFD) | `VG-CT-304.jpg` | elevator frequency inverter drive VFD |
| VG-CB-401 | Flat travelling cable | `VG-CB-401.jpg` | elevator flat travelling cable |
| VG-CB-402 | Junction box and wiring | `VG-CB-402.jpg` | elevator junction box terminals |
| VG-MC-501 | Traction motor and brake | `VG-MC-501.jpg` | elevator traction machine motor brake |
| VG-MC-502 | Encoder | `VG-MC-502.jpg` | elevator motor encoder |
| VG-MC-503 | Guide shoes | `VG-MC-503.jpg` | elevator guide shoe guide rail |
| VG-MC-504 | Wire ropes and belts | `VG-MC-504.jpg` | elevator wire rope steel cable |
| VG-CP-601 | Car operating panel (COP) | `VG-CP-601.jpg` | elevator car operating panel buttons |
| VG-CP-602 | Landing operating panel (LOP) | `VG-CP-602.jpg` | elevator landing call button panel |
| VG-CP-603 | Intercom and emergency alarm | `VG-CP-603.jpg` | elevator intercom alarm panel |
| VG-CP-604 | Cabin fan and lighting | `VG-CP-604.jpg` | elevator cabin ceiling light fan |

Photos that show a clear, single part work best. If a library photo shows a whole lift or machine room,
skip it and keep the drawing for that part.
