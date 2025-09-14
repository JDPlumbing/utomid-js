// src/materials.js
// Common material compositions using UtomID element numbers + weight fractions (%)

export const MATERIALS = {
  wood: {
    name: "Wood (generic cellulose)",
    composition: {
      C: 0.50, // 50% carbon
      H: 0.42, // 42% hydrogen
      O: 0.07, // 7% oxygen
      N: 0.01, // 1% other trace stuff
    },
  },
  concrete: {
    name: "Concrete",
    composition: {
      O: 0.52,
      Si: 0.33,
      Ca: 0.10,
      Al: 0.03,
      Fe: 0.02,
    },
  },
  brass: {
    name: "Brass (70/30 Cu/Zn)",
    composition: {
      Cu: 0.70,
      Zn: 0.30,
    },
  },
  pvc: {
    name: "Polyvinyl Chloride (PVC)",
    composition: {
      C: 0.38,
      H: 0.05,
      Cl: 0.57,
    },
  },
  steel: {
    name: "Steel (low-carbon)",
    composition: {
      Fe: 0.985,
      C: 0.015,
    },
  },
};
