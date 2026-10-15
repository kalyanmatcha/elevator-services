/* ==========================================================================
   VEGA ELEVATOR SERVICES - PARTS CATALOGUE

   One line = one part. To add a part, copy a whole line (from { to },),
   paste it on a new line and change the words. To remove a part, delete its line.
   To show a photo, put the file in assets/images/parts/ and type its path in "image",
   for example "assets/images/parts/governor.jpg".

   category : Safety, Doors, Control, Cabling, Machine or Cabin and panels
              (a new category name appears on the website automatically)
   number   : your part number
   image    : (optional) a photo path. Easier: save the photo as assets/images/parts/<part number>.jpg
   credit   : (optional) photo credit shown under the photo, if the photo's licence asks for one
   price    : the text shown to customers, for example "About ₹3,000 per set"
   Prices below are samples. Replace them with your real prices.
   ========================================================================== */

window.PARTS = [
  { category: "Safety", number: "VG-SF-101", name: "Overspeed governor",            price: "From about ₹3,000 per set", image: "" },
  { category: "Safety", number: "VG-SF-102", name: "Safety gear",                   price: "About ₹12,000 per set",     image: "" },
  { category: "Safety", number: "VG-SF-103", name: "Car and counterweight buffers", price: "About ₹4,500 each",         image: "" },
  { category: "Safety", number: "VG-SF-104", name: "Limit switches",                price: "About ₹850 each",           image: "" },
  { category: "Safety", number: "VG-SF-105", name: "Automatic rescue device (ARD)", price: "About ₹18,500",             image: "" },

  { category: "Doors", number: "VG-DR-201", name: "Door operator drive",            price: "From about ₹4,400 each",    image: "" },
  { category: "Doors", number: "VG-DR-202", name: "Door coupler and slider",        price: "About ₹2,200 per set",      image: "" },
  { category: "Doors", number: "VG-DR-203", name: "Door sensor and light curtain",  price: "About ₹6,800",              image: "" },

  { category: "Control", number: "VG-CT-301", name: "Lift controller",              price: "About ₹15,000–62,000 by spec", image: "" },
  { category: "Control", number: "VG-CT-302", name: "Door operator controller",     price: "About ₹35,000",             image: "" },
  { category: "Control", number: "VG-CT-303", name: "Controller cards",             price: "From about ₹2,500",         image: "" },
  { category: "Control", number: "VG-CT-304", name: "Variable-frequency drive (VFD)", price: "About ₹28,000",           image: "" },

  { category: "Cabling", number: "VG-CB-401", name: "Flat travelling cable",        price: "About ₹58–60 per metre",    image: "" },
  { category: "Cabling", number: "VG-CB-402", name: "Junction box and wiring",      price: "About ₹1,800",              image: "" },

  { category: "Machine", number: "VG-MC-501", name: "Traction motor and brake",     price: "About ₹65,000",             image: "" },
  { category: "Machine", number: "VG-MC-502", name: "Encoder",                      price: "About ₹9,500",              image: "" },
  { category: "Machine", number: "VG-MC-503", name: "Guide shoes",                  price: "About ₹1,200 per set",      image: "" },
  { category: "Machine", number: "VG-MC-504", name: "Wire ropes and belts",         price: "About ₹180 per metre",      image: "" },

  { category: "Cabin and panels", number: "VG-CP-601", name: "Car operating panel (COP)",       price: "About ₹14,000",   image: "" },
  { category: "Cabin and panels", number: "VG-CP-602", name: "Landing operating panel (LOP)",   price: "About ₹3,500 each", image: "" },
  { category: "Cabin and panels", number: "VG-CP-603", name: "Intercom and emergency alarm",    price: "About ₹4,200",    image: "" },
  { category: "Cabin and panels", number: "VG-CP-604", name: "Cabin fan and lighting",          price: "About ₹2,800",    image: "" }
];
