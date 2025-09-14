// bonding.js
import { ELEMENTS } from "./elements.js";

/**
 * General bonding algorithm.
 * @param {Array<string>} symbols - List of element symbols (e.g. ["H","H","O"])
 * @returns {object} { compounds: [ { formula, composition } ], leftovers: [] }
 */
export function bond(symbols) {
  // Count elements
  const counts = {};
  for (const s of symbols) {
    counts[s] = (counts[s] || 0) + 1;
  }

  const compounds = [];

  // Naive strategy:
  // - Check every pair/triple of elements
  // - Try to fill valence shells up to 8
  // - Construct empirical formula when satisfied

  const tryBond = (els) => {
    let totalValence = els.reduce((sum, e) => sum + ELEMENTS[e].valence, 0);
    if (totalValence % 8 === 0) {
      // They can combine (very simplified assumption!)
      const composition = {};
      for (const e of els) composition[e] = (composition[e] || 0) + 1;
      const formula = Object.entries(composition)
        .map(([sym, n]) => (n > 1 ? sym + n : sym))
        .join("");
      compounds.push({ formula, composition });
      for (const e of els) counts[e]--;
      return true;
    }
    return false;
  };

  // Greedy bonding loop
  let changed = true;
  while (changed) {
    changed = false;
    for (const e1 of Object.keys(counts)) {
      if (counts[e1] <= 0) continue;
      for (const e2 of Object.keys(counts)) {
        if (counts[e2] <= 0) continue;
        // Try binary combo
        if (tryBond([e1, e2])) {
          changed = true;
        }
        // Try ternary combos
        for (const e3 of Object.keys(counts)) {
          if (counts[e3] <= 0) continue;
          if (tryBond([e1, e2, e3])) {
            changed = true;
          }
        }
      }
    }
  }

  // Leftovers
  const leftovers = [];
  for (const [sym, n] of Object.entries(counts)) {
    for (let i = 0; i < n; i++) leftovers.push(sym);
  }

  return { compounds, leftovers };
}
