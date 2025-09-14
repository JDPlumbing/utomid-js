// test/core.test.js
import {
  encodeUtomid,
  decodeUtomid,
  getBySymbol,
  getByName,
  encodeFromSymbol,
} from "../src/core.js";
import { ELEMENTS } from "../src/elements.js";

describe("UtomID Core", () => {
  test("encodeUtomid should return hex string for valid numbers", () => {
    expect(encodeUtomid(1)).toBe("0x01");
    expect(encodeUtomid(118)).toBe("0x76");
  });

  test("encodeUtomid should throw on invalid numbers", () => {
    expect(() => encodeUtomid(0)).toThrow();
    expect(() => encodeUtomid(119)).toThrow();
    expect(() => encodeUtomid(1.5)).toThrow();
  });

  test("decodeUtomid should return element metadata", () => {
    const hydrogen = decodeUtomid("0x01");
    expect(hydrogen.symbol).toBe("H");
    expect(hydrogen.number).toBe(1);

    const oganesson = decodeUtomid("0x76");
    expect(oganesson.name).toBe("Oganesson");
  });

  test("decodeUtomid should throw on bad input", () => {
    expect(() => decodeUtomid("foo")).toThrow();
    expect(() => decodeUtomid("77")).toThrow();
  });

  test("getBySymbol should find correct element", () => {
    const fe = getBySymbol("Fe");
    expect(fe.name).toBe("Iron");
    expect(fe.number).toBe(26);
  });

  test("getByName should find correct element", () => {
    const oxygen = getByName("Oxygen");
    expect(oxygen.symbol).toBe("O");
    expect(oxygen.number).toBe(8);
  });

  test("encodeFromSymbol should give correct UtomID", () => {
    const li = encodeFromSymbol("Li");
    expect(li).toBe("0x03");
  });

  test("ELEMENTS registry should have all 118 entries", () => {
    expect(Object.keys(ELEMENTS).length).toBe(118);
    expect(ELEMENTS[79].symbol).toBe("Au"); // sanity check for Gold
  });
});
