/* ==========================================================================
   VEGA ELEVATOR SERVICES - SITE SETTINGS

   This is the file you edit to change the website's words and numbers.
   1. Change only the text between the quote marks "like this".
   2. Do not delete commas, quote marks or brackets.
   3. Save the file, then refresh the page in your browser.

   All phone numbers, prices, licence numbers, years, project counts and
   brand names below are SAMPLES. Replace every one with your real details
   before the website goes live.
   ========================================================================== */

window.SITE = {

  /* ---------- 1. Your business ---------- */
  business: {
    name: "Vega Elevator Services",
    shortName: "VEGA",
    tagline: "Lifts you can rely on.",
    intro: "Vega Elevator Services installs, modernises and maintains lifts across Hyderabad, and supplies the parts that keep them running.",
    city: "Hyderabad",
    phone: "+91 98765 43210",
    whatsapp: "919876543210",            // digits only: country code + number, no + sign, no spaces
    email: "hello@vegaelevators.in",
    address: "Plot 42, Road No. 7, Banjara Hills, Hyderabad 500034",
    hours: "Mon–Sat, 9 am–7 pm",
    breakdownPhone: "+91 98765 43210",
    responseTime: "24 hours",             // how fast you reply to quote requests
    licence: "VES/TS/0412/2013",
    gstin: "36ABCDE1234F1Z5",
    mapLink: ""                           // optional: paste your Google Maps share link here
  },

  /* ---------- 2. Big numbers under the headline ---------- */
  stats: [
    { value: "15",     label: "years in Hyderabad" },
    { value: "850+",   label: "lifts installed" },
    { value: "60 min", label: "breakdown response" }
  ],

  /* ---------- 3. Hero lift ----------
     The home page shows an animated lift drawn in code.
     To use a real video instead, put your video file in assets/video/ and
     type its name below, for example: "assets/video/hero.mp4"
     (leave the quote marks empty to keep the animated lift). */
  heroVideo: { src: "", poster: "" },

  /* ---------- 4. Brands scrolling under the hero ----------
     "logo" is optional. To show a real logo, put the image in assets/images/
     and type its path, for example "assets/images/logos/orion.png".
     Only show logos of clients who have given you permission. */
  brands: [
    { name: "ORION TOWERS",       logo: "" },
    { name: "Meridian Hospitals", logo: "" },
    { name: "SKYLINE Residences", logo: "" },
    { name: "Crestview Mall",     logo: "" },
    { name: "APEX LOGISTICS",     logo: "" },
    { name: "Lumen Hotels",       logo: "" },
    { name: "Harbor Tech Park",   logo: "" },
    { name: "ZENITH REALTY",      logo: "" },
    { name: "Aurora Healthcare",  logo: "" },
    { name: "Pinnacle Infra",     logo: "" }
  ],

  /* ---------- 5. Services ---------- */
  services: [
    {
      icon: "M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM12 3v18M8.5 10l-2 2 2 2M15.5 10l2 2-2 2",
      title: "New installation",
      body: "Survey, design, supply, erection, testing and statutory handover for new lifts of every type.",
      includes: ["Shaft and pit survey", "Drawings and approvals", "Erection and commissioning", "Staff training at handover"],
      note: "Turnkey projects from ₹8 lakh*",
      cta: "Get an installation quote", link: "quote.html"
    },
    {
      icon: "M20 11a8 8 0 0 0-14-4M4 5v4h4M4 13a8 8 0 0 0 14 4M20 19v-4h-4",
      title: "Modernisation",
      body: "Give an ageing lift new life with modern controllers, doors and cabin interiors.",
      includes: ["Controller and drive upgrade", "New doors and cabin interior", "Quieter, more efficient running"],
      note: "Packages from ₹2.5 lakh*",
      cta: "Ask about modernisation", link: "quote.html"
    },
    {
      icon: "M12 3l7 3v5c0 5-3 8-7 10-4-2-7-5-7-10V6zM9 12l2 2 4-4",
      title: "Annual maintenance (AMC)",
      body: "Scheduled servicing that keeps your lift safe, quiet and reliable all year.",
      includes: ["Monthly servicing and safety checks", "Lubrication and adjustments", "Priority callouts"],
      note: "₹15,000–48,000 a year*",
      cta: "Get a maintenance quote", link: "quote.html"
    },
    {
      icon: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 7v5l3 2",
      title: "Repairs and 24/7 breakdowns",
      body: "Fast diagnosis and repair at any hour, with trained support for passenger rescue.",
      includes: ["60-minute response in Hyderabad", "Passenger rescue support", "Fault diagnosis and repair"],
      note: "Breakdown line +91 98765 43210",
      cta: "Call the breakdown line", link: "index.html#contact"
    },
    {
      icon: "M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1",
      title: "Spare parts supply",
      body: "Controllers, door operators, cables, governors and more, for lifts of most makes.",
      includes: ["1,200+ parts in stock", "Installation and replacement parts", "Help matching the right part"],
      note: "Parts from ₹850*",
      cta: "Browse the parts catalogue", link: "parts.html"
    }
  ],

  /* ---------- 6. Lift types ----------
     "scene" picks the picture drawn in code: passenger, home, hospital, goods or glass.
     To use your own photo or video, fill in "image" or "video"
     (files go in assets/images/ or assets/video/). */
  types: [
    { id: "passenger", scene: "passenger", name: "Passenger lifts",          use: "Apartments, offices and commercial buildings.",         price: "Equipment from about ₹4.8–7.5 lakh*", image: "", video: "" },
    { id: "home",      scene: "home",      name: "Home lifts",               use: "Villas and independent houses, compact and quiet.",     price: "Equipment from about ₹5 lakh*",        image: "", video: "" },
    { id: "hospital",  scene: "hospital",  name: "Hospital lifts",           use: "Wide stretcher and bed lifts with smooth, level stops.", price: "Equipment from about ₹7.45 lakh*",    image: "", video: "" },
    { id: "goods",     scene: "goods",     name: "Goods lifts",              use: "Heavy-duty lifts for warehouses, factories and shops.", price: "Equipment from about ₹6.5 lakh*",      image: "", video: "" },
    { id: "glass",     scene: "glass",     name: "Glass and panoramic lifts", use: "Malls, showrooms and feature atriums with open views.", price: "Equipment from about ₹12 lakh*",       image: "", video: "" }
  ],

  /* ---------- 7. Finishes for the "Design your lift" tool ----------
     Advanced: you can add a finish by copying a line and changing the name and colours.
     swatch = the small colour dot, frame = door frame colour,
     surface = the door or wall surface (a CSS background). */
  finishes: {
    Steel:     { swatch: "#B9BFC8", frame: "#8D949E", surface: "linear-gradient(90deg, #9AA1AB 0%, #D3D8DF 18%, #B4BAC3 45%, #DFE3E9 70%, #A3AAB4 100%)" },
    Black:     { swatch: "#1D2026", frame: "#0D0F13", surface: "linear-gradient(90deg, #14171C 0%, #2B3038 20%, #1A1D23 50%, #2F343C 75%, #12151A 100%)" },
    Champagne: { swatch: "#C9AE7C", frame: "#8F7747", surface: "linear-gradient(90deg, #A98F5E 0%, #E2CD9F 20%, #BFA670 50%, #E6D3A8 75%, #A38956 100%)" },
    Bronze:    { swatch: "#7A5636", frame: "#3F2A18", surface: "linear-gradient(90deg, #5A3D25 0%, #9A7149 20%, #6E4C2F 50%, #A37A50 75%, #563A23 100%)" },
    Pearl:     { swatch: "#E9E6DF", frame: "#BDB9AF", surface: "linear-gradient(90deg, #CFCBC2 0%, #F3F1EC 20%, #DCD8CF 50%, #F6F4EF 75%, #CAC6BD 100%)" },
    Walnut:    { swatch: "#6B4529", frame: "#4A2E19", surface: "repeating-linear-gradient(90deg, #5E3B22 0px, #7A4F30 7px, #64402A 14px, #835836 21px)" },
    Marble:    { swatch: "#E8E6E1", frame: "#BDB9AF", surface: "linear-gradient(115deg, #F2F0EB 0%, #E3E0D9 35%, #F4F2EE 55%, #DCD8D0 80%, #EFEDE8 100%)" }
  },
  outsideFinishes: ["Steel", "Black", "Champagne", "Bronze", "Pearl"],
  insideFinishes:  ["Steel", "Walnut", "Champagne", "Black", "Marble"],

  /* ---------- 7b. Blue contact section at the bottom of the home and services pages ---------- */
  contactTitle: "Tell us about your building's needs.",

  /* ---------- 8. How a project works ---------- */
  steps: [
    { title: "Site survey",            body: "We measure the shaft, pit and headroom and agree your needs." },
    { title: "Design and approvals",   body: "Drawings, specification and the paperwork your building needs." },
    { title: "Installation",           body: "Trained technicians erect guide rails, machine, doors and cabin." },
    { title: "Testing and inspection", body: "Safety tests and statutory inspection before the lift opens." },
    { title: "Handover and care",      body: "Training for your staff and a maintenance plan from day one." }
  ],

  /* Parts shown on the home page (use part numbers from parts-data.js) */
  featuredParts: ["VG-SF-101", "VG-DR-201", "VG-CB-401", "VG-CT-301"],

  whyPoints: [
    "Licensed lift contractor",
    "Works on most major lift makes",
    "Service areas: Hyderabad, Secunderabad, Cyberabad"
  ],

  /* ---------- 9. Facts shown on the quote page ---------- */
  quoteFacts: [
    { k: "Drive",                 v: "Machine-room traction, machine-room-less (MRL) traction or hydraulic" },
    { k: "Capacity",              v: "4, 6, 8, 10, 13 or 16 persons" },
    { k: "Speed",                 v: "0.5, 1.0 or 1.5 m/s" },
    { k: "Doors",                 v: "Automatic centre-opening or manual" },
    { k: "Safety",                v: "Overspeed governor, safety gear, automatic rescue device, intercom and emergency alarm" },
    { k: "Warranty",              v: "12 months, then annual maintenance" }
  ],
  faq: [
    { q: "How long does installation take?",       a: "Typically 8–12 weeks from approvals to handover, depending on shaft readiness." },
    { q: "Can you work in an existing building?",  a: "Yes. We survey the shaft first and tell you what civil work is needed." },
    { q: "Do you offer maintenance after handover?", a: "Yes. Plans start from handover, with a 60-minute breakdown response in Hyderabad." },
    { q: "Is the price on this page final?",       a: "No. It is an indicative range. You get a written quote after a site survey." }
  ]
};
