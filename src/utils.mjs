const pools = [
  { waverly: 'https://ymaryland.org/locations/weinbergy/weinbergschedules' },
  { towson: 'https://ymaryland.org/locations/orokaway/orokawaschedules' }
];

/**
 * Provide DOM targets for Playwright locators when scraping.
 * @param {Date} now - Date object returned from `new Date()`.
 * @returns {object}
 */
function targets(now) {
  return {
    eventType: 'Lap Swim',
    weekDay: now.toLocaleDateString('en-US', { weekday: 'long' })
  };
}

/**
 * Provide the date heading for app output.
 * @param {Date} now - Date object returned from `new Date()`.
 * @returns {string} - Formatted like 'Monday, January 1'.
 */
function outputHeading(now) {
  return now.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    timeZone: 'America/New_York'
  });
}

/**
 * Returns a string of a given length with a given character.
 * @param {number} x - number of characters
 * @param {string} char - character to repeat
 * @returns {string}
 */
function strOfXLength(x, char) {
  return Array(x + 1).join(char);
}

export { pools, targets, outputHeading, strOfXLength };
