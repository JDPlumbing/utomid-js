// src/core.js
import { ELEMENTS } from "./elements.js";

/**
 * Encode an element number into a UtomID hex string.
 * @param {number} number - Atomic number (1–118).
 * @returns {string} - Hex UtomID, e.g. "0x03" for Lithium.
 */
export function encodeUtomid(number) {
  if (!Number.isInteger(number) || number < 1 || number > 118) {
    throw new Error(`Invalid atomic number: ${number}`);
  }
  return "0x" + number.toString(16).padStart(2, "0");
}

/**
 * Decode a UtomID hex string back into element metadata.
 * @param {string} utomid - Hex string, e.g. "0x03".
 * @returns {object|null} - Element metadata or null if invalid.
 */
export function decodeUtomid(utomid) {
  if (typeof utomid !== "string" || !utomid.startsWith("0x")) {
    throw new Error(`Invalid UtomID format: ${utomid}`);
  }
  const number = parseInt(utomid, 16);
  return ELEMENTS[number] || null;
}

/**
 * Lookup element metadata by symbol.
 * @param {string} symbol - e.g. "Li".
 * @returns {object|null}
 */
export function getBySymbol(symbol) {
  const entry = Object.values(ELEMENTS).find(
    (el) => el.symbol.toLowerCase() === symbol.toLowerCase()
  );
  return entry || null;
}

/**
 * Lookup element metadata by name.
 * @param {string} name - e.g. "Lithium".
 * @returns {object|null}
 */
export function getByName(name) {
  const entry = Object.values(ELEMENTS).find(
    (el) => el.name.toLowerCase() === name.toLowerCase()
  );
  return entry || null;
}

/**
 * Convenience: get UtomID from symbol.
 * @param {string} symbol - e.g. "Li".
 * @returns {string|null} - UtomID like "0x03".
 */
export function encodeFromSymbol(symbol) {
  const entry = getBySymbol(symbol);
  return entry ? encodeUtomid(entry.number) : null;
}
