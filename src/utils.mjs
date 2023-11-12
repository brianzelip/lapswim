const pools = [
  { waverly: 'https://ymaryland.org/locations/weinbergy/weinbergschedules' },
  { towson: 'https://ymaryland.org/locations/orokaway/orokawaschedules' }
];

/**
 * Returns a string of a given length with a given character.
 * @param {number} x - number of characters
 * @param {string} char - character to repeat
 * @returns {string}
 */
function strOfXLength(x, char) {
  return Array(x + 1).join(char);
}

export { pools, strOfXLength };
