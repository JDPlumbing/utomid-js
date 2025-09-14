// test/interactions.test.js
import { lookupInteraction } from "../src/interactions.js";

describe("UtomID Interactions", () => {
  test("should find Water regardless of element order", () => {
    const combos = [
      [1, 1, 8],
      [1, 8, 1],
      [8, 1, 1],
    ];
    combos.forEach((arr) => {
      const result = lookupInteraction(arr);
      expect(result).not.toBeNull();
      expect(result.formula).toBe("H2O");
    });
  });

  test("should find Salt regardless of order", () => {
    const combos = [
      [11, 17],
      [17, 11],
    ];
    combos.forEach((arr) => {
      const result = lookupInteraction(arr);
      expect(result).not.toBeNull();
      expect(result.formula).toBe("NaCl");
    });
  });

  test("should find Rust regardless of order", () => {
    const combos = [
      [26, 8],
      [8, 26],
    ];
    combos.forEach((arr) => {
      const result = lookupInteraction(arr);
      expect(result).not.toBeNull();
      expect(result.name).toMatch(/Iron Oxide/);
    });
  });

  test("should return null for unknown combos", () => {
    const result = lookupInteraction([6, 79]); // Carbon + Gold → no entry
    expect(result).toBeNull();
  });
});
