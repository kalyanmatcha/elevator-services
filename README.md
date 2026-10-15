# Vega Elevator Services website: your guide

**This is version 2**, a full redesign with the same content and the same colours. The previous version is
kept in `vega-website-v1-previous.zip`. What changed: one typeface (Hanken Grotesk) plus the VEGA wordmark,
much larger text, a centred layout, a wide lift stage in the hero, a swipeable lift-type carousel, a large
"design your lift" stage, numbers that count up, and soft scroll motion.

This folder is a complete, working website. You do not need to know how to code to
use it. This guide explains how to see it, change it, and put it on the internet.

---

## 1. What is in this folder

| File or folder | What it is | Do you edit it? |
|---|---|---|
| `index.html` | The home page | Rarely (page title and description only) |
| `parts.html` | The parts catalogue page | Rarely |
| `quote.html` | The quote page with the "design your lift" tool | Rarely |
| `services.html` | The Services page, opened from the Services tab in the menu | Rarely |
| `assets/js/config.js` | **All your business details, services, lift types, brands and prices** | **Yes, this is your main file** |
| `assets/js/parts-data.js` | **Your parts list and part prices** | **Yes** |
| `assets/images/` | Put your photos and logos here | Yes (add files) |
| `assets/video/` | Put your videos here | Yes (add files) |
| `assets/css/styles.css` | Colours, fonts and text sizes (the `:root` block at the top) | Only to change colours, fonts or sizes |
| `assets/css/lift.css` | Styles for the animated lift and 3D cabin | No |
| `assets/js/lift.js`, `site.js`, `scenes.js`, `part-art.js` | The code that makes it work | No |
| `robots.txt`, `sitemap.xml` | Tell Google about your site | Once, before launch |

---

## 2. See the website on your computer

1. Open the folder.
2. Double-click `index.html`. It opens in your browser (Chrome is best).
3. You need an internet connection so the fonts load.

Nothing is installed. There is no server. The website is just files.

---

## 3. Change your details

Every word and number you are likely to change is in **`assets/js/config.js`**.

1. Right-click `config.js` and open it with **Notepad** (Windows) or **TextEdit** (Mac).
   For a better experience, install the free program **Visual Studio Code**.
2. Change only the words **between the quote marks**.
   Example: change `phone: "+91 98765 43210",` to `phone: "+91 90000 12345",`
3. Do **not** delete commas, quote marks, or brackets.
4. Save the file, then refresh the page in your browser (press F5).

### Where to change what

| I want to change... | Go to... |
|---|---|
| Phone, email, address, hours, licence, GSTIN | `config.js` → `business` |
| WhatsApp number | `config.js` → `business` → `whatsapp` (digits only, with country code, no + sign) |
| Big numbers (15 years, 850+ lifts) | `config.js` → `stats` |
| Services and their prices | `config.js` → `services` |
| Lift types and their prices | `config.js` → `types` |
| Brands that scroll on the home page | `config.js` → `brands` |
| Colours of doors and cabins | `config.js` → `finishes` |
| Parts, part numbers and prices | `parts-data.js` |
| Colours of the whole website | `styles.css` → the block called `:root` at the top |
| Fonts and text sizes | `styles.css` → the same `:root` block (`--sans`, `--brand`, `--fs-...`) |
| The heading in the blue contact section | `config.js` → `contactTitle` |
| Page title and description Google shows | The top of each `.html` file (`<title>` and `description`) |

**Important:** every phone number, price, year, project count, licence number, GSTIN and brand
name in this package is a **sample**. Replace all of them with your real details before launch.

### Add a part
Open `parts-data.js`, copy one whole line (from `{` to `},`), paste it below, and change the words.

---

## 4. Add your own photos and videos

Real photos and videos make the site far more convincing than the drawn pictures.

**Lift type photos or videos**
1. Copy the file into `assets/images/` (or `assets/video/`).
2. In `config.js`, find that lift type under `types` and fill in `image` or `video`,
   for example `image: "assets/images/passenger-lift.jpg"`.
   The drawn picture is replaced by your file.

**The opening lift on the home page.** On a computer the lift doors open as you scroll, then a person
walks in. On phones the lift animates by itself. If you add a hero video (below), the video replaces it.

**A video in the top section of the home page**
1. Copy your video (MP4 format) to `assets/video/`.
2. In `config.js`, set `heroVideo: { src: "assets/video/hero.mp4", poster: "assets/images/hero.jpg" }`.
3. Keep it short (10 to 20 seconds) and under about 8 MB so the page loads fast.

**Client logos**: put each logo in `assets/images/` and add its path to `logo:` in `brands`.
Use a client's logo only if they have agreed.

**Part photos**: every part already shows a small drawing of that part. A real photo replaces the
drawing automatically when it exists. Save each photo with the **part number** as its name:

1. Put the file in `assets/images/parts/`, for example `assets/images/parts/VG-SF-101.jpg`
   (VG-SF-101 is the overspeed governor, VG-DR-201 the door operator drive, and so on. The part
   numbers are in `parts-data.js`).
2. Refresh the page. That is all. You do not need to edit any file.
3. If you prefer a different file name, type its path in `image:` for that part in `parts-data.js`.

The file `PART-PHOTOS.md` lists all 22 parts with the exact file name for each and search terms for free
photo libraries.

Where to get the photos: take them yourself on a plain white sheet or table in daylight, use your
suppliers' or manufacturers' product pictures **with their written permission**, or buy licensed
stock photos. Do not copy pictures from other websites: they are usually protected by copyright.
Use square or landscape photos with the part centred, and keep each under about 300 KB.

Tips: use JPG for photos, PNG or SVG for logos. Shrink big photos first (the free site
squoosh.app does this). Aim for photos under 300 KB each.

---

## 5. Put it on the internet (about 15 minutes, free)

You need a place to "host" the files. The easiest free option is **Netlify**.

1. Go to **app.netlify.com/drop** and create a free account.
2. Drag this whole folder onto the page.
3. After a few seconds Netlify gives you a live address such as `something.netlify.app`.
   Open it and check everything works on your phone too.
4. Every time you change something, drag the folder in again to update the live site.

Other good free options: **Cloudflare Pages** and **GitHub Pages**. They work the same way.

---

## 6. Get your own web address and business email

1. **Buy a domain**, for example `vegaelevators.in` or `vegaelevators.com`, from a registrar such as
   GoDaddy, Namecheap, BigRock or Cloudflare. Search first to see if the name is free.
   Expect roughly ₹500 to ₹1,500 per year (check current prices).
2. **Connect it**: in Netlify open your site → Domain management → Add a custom domain.
   Netlify shows what to type into your registrar's DNS settings. Allow up to a few hours.
   The secure padlock (HTTPS) is added for free.
3. **Business email** (for `hello@vegaelevators.in`): use Google Workspace or Zoho Mail.
   Then put the address in `config.js`.
4. Open `robots.txt` and `sitemap.xml` and replace `www.vegaelevators.in` with your real domain.

---

## 7. Before you go live: checklist

- [ ] Every sample number, price, licence number, GSTIN and address replaced with real ones
- [ ] Brand names in the scroll replaced with real clients (and logos only with permission)
- [ ] Prices checked. The ranges shown are indicative, not official
- [ ] Licences and rules checked. Telangana was drafting a new Lifts, Escalators and Moving Walks
      Act. Ask a professional what you must display and obey
- [ ] A privacy policy added if you use Google Analytics or similar. Ask a professional.
      This site itself stores no customer data
- [ ] Real photos or a real video added
- [ ] WhatsApp number tested: send yourself a test quote
- [ ] Tested on a phone and a computer

---

## 8. After launch

1. **Google Business Profile** (free): claim your business so you appear on Google Maps and
   in "lift service near me" searches. This brings more enquiries than almost anything else.
2. **Google Search Console** (free): submit `sitemap.xml` so Google finds your pages.
3. Ask happy customers for Google reviews.
4. Keep a copy of this folder somewhere safe (Google Drive). It is your backup.

---

## 9. How the quote form works (no customer data is stored)

When someone presses **Send on WhatsApp** or **Send by email**, their own phone or email app opens
with their enquiry already written. They press send. The enquiry goes straight to you.
Nothing is saved on the website or on any server, which keeps things simple.

The limit: you only get the enquiry if the customer presses send. If you later want enquiries to
arrive in your inbox automatically, a developer can connect a free form service such as Formspree.

---

## 10. When to ask a developer for help

This setup is perfect to start. Consider a developer when you want:
- enquiries delivered to your email automatically
- a parts price list kept in Google Sheets instead of `parts-data.js`
- a Telugu or Hindi version
- real 3D lift models or professionally shot video built into the hero
- online payments or customer accounts (not needed now)

---

## 11. If something goes wrong

- **The page looks plain or broken after an edit:** you probably deleted a comma or quote mark in
  `config.js` or `parts-data.js`. Undo your last change (Ctrl+Z) and save again.
- **My change does not show:** refresh with Ctrl+F5.
- **Fonts look different:** you are offline. They load from the internet.
- **WhatsApp opens but the number is wrong:** check `whatsapp` in `config.js` is digits only with the
  country code, for example `919876543210`.
