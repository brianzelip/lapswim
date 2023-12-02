//@ts-check
import DB from './DB.mjs';
import scrape from './scrape.mjs';

/**
 * Scrape and cache lap swim times if outdated; log data to stdout
 * if called by a human.
 */
(async () => {
  const calledByLaunchd = process.argv[2] === 'launchd';
  const now = new Date();

  if (calledByLaunchd && DB.isCurrent(now)) {
    return;
  } else if (calledByLaunchd && !DB.isCurrent(now)) {
    const output = await scrape(now);

    DB.update(now, output);

    return;
  }

  if (DB.isCurrent(now)) {
    console.log(DB.output);

    return;
  }

  const output = await scrape(now);

  console.log(output);

  DB.update(now, output);

  return;
})();
