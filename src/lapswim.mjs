//@ts-check
import DB from './DB.mjs';
import scrape from './scrape.mjs';

/**
 * Parse lap swim times from Y schedules, console log them, and cache them;
 * or console log them if cached.
 */
(async () => {
  const now = new Date();

  if (DB.isCurrent(now)) {
    console.log(DB.output);

    return;
  }

  const output = await scrape(now);

  console.log(output);

  DB.update(now, output);

  return;
})();
