let DANNYSWOKMENU = [
  { numberOfWings: 4, price: 4.55 },
  { numberOfWings: 5, price: 5.7 },
  { numberOfWings: 6, price: 6.8 },
  { numberOfWings: 7, price: 7.95 },
  { numberOfWings: 8, price: 9.1 },
  { numberOfWings: 9, price: 10.2 },
  { numberOfWings: 10, price: 11.35 },
  { numberOfWings: 11, price: 12.5 },
  { numberOfWings: 12, price: 13.6 },
  { numberOfWings: 13, price: 14.75 },
  { numberOfWings: 14, price: 15.9 },
  { numberOfWings: 15, price: 17.0 },
  { numberOfWings: 16, price: 18.15 },
  { numberOfWings: 17, price: 19.3 },
  { numberOfWings: 18, price: 20.4 },
  { numberOfWings: 19, price: 21.55 },
  { numberOfWings: 20, price: 22.7 },
  { numberOfWings: 21, price: 23.8 },
  { numberOfWings: 22, price: 24.95 },
  { numberOfWings: 23, price: 26.1 },
  { numberOfWings: 24, price: 27.25 },
  { numberOfWings: 25, price: 27.8 },
  { numberOfWings: 26, price: 28.95 },
  { numberOfWings: 27, price: 30.1 },
  { numberOfWings: 28, price: 31.2 },
  { numberOfWings: 29, price: 32.35 },
  { numberOfWings: 30, price: 33.5 },
  { numberOfWings: 35, price: 39.15 },
  { numberOfWings: 40, price: 44.8 },
  { numberOfWings: 45, price: 50.5 },
  { numberOfWings: 50, price: 55.6 },
  { numberOfWings: 60, price: 67.0 },
  { numberOfWings: 70, price: 78.3 },
  { numberOfWings: 75, price: 83.45 },
  { numberOfWings: 80, price: 89.1 },
  { numberOfWings: 90, price: 100.45 },
  { numberOfWings: 100, price: 111.25 },
  { numberOfWings: 125, price: 139.0 },
  { numberOfWings: 150, price: 166.85 },
  { numberOfWings: 200, price: 222.5 }
];

// This makes sure the data is exported in node.js
if (
  typeof module != "undefined" &&
  module.exports &&
  (typeof window == "undefined" || window.exports != exports)
)
  module.exports = DANNYSWOKMENU;
if (typeof global != "undefined" && !global.DANNYSWOKMENU)
  global.DANNYSWOKMENU = DANNYSWOKMENU;
