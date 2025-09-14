// src/interactions.js
import { ELEMENTS } from "./elements.js";

/**
 * Registry of domain-relevant interactions.
 * Keys are sorted arrays of element numbers (stringified).
 * Always match lookupInteraction’s sorted key logic.
 */
export const INTERACTIONS = {
  // Water
  "1,1,8": {
    name: "Water",
    formula: "H2O",
    description: "Two Hydrogens and one Oxygen form water.",
  },

  // Salt
  "11,17": {
    name: "Sodium Chloride",
    formula: "NaCl",
    description: "Table salt.",
  },

  // Rust
  "8,26": {
    name: "Iron Oxide",
    formula: "Fe2O3 (simplified)",
    description: "Iron combined with Oxygen, commonly known as rust.",
  },
};

/**
 * Get known interaction product from a list of element numbers.
 * @param {number[]} elementNumbers - Array of atomic numbers (e.g. [1,1,8]).
 * @returns {object|null} Product definition or null if not registered.
 */
export function lookupInteraction(elementNumbers) {
  const key = [...elementNumbers].sort((a, b) => a - b).join(",");
  return INTERACTIONS[key] || null;
}
