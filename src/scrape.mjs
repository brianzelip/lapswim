// @ts-check
import { firefox } from 'playwright';
import { pools, targets, outputHeading, strOfXLength } from './utils.mjs';

/**
 * Return today's lap swim times from scraped Y schedules.
 * @param {Date} now - Date object returned from `new Date()`.
 * @returns {Promise<string>} - Lap swim times formatted for display.
 */
export default async function scrape(now) {
  const { eventType, weekDay } = targets(now);

  const browser = await firefox.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  let index = 0;
  let output = `\n${outputHeading(now)}\n\n`;

  for (const pool of pools) {
    const name =
      Object.keys(pool)[0].charAt(0).toUpperCase() +
      Object.keys(pool)[0].slice(1);
    const url = Object.values(pool)[0];

    await page.goto(url);

    const swimRows = await page
      .locator(`#GXP${weekDay} > .GXPEntry.row`)
      .filter({ hasText: eventType })
      .all();

    const header = `${name}\n${strOfXLength(name.length, '-')}`;
    const swimTimes = [];

    for (const row of swimRows) {
      const time = await row.locator('.GXPTime').innerText();
      const heading = await row.getByText(eventType).innerText();
      const lanes = heading.substring(
        heading.indexOf('('),
        heading.indexOf(')') + 1
      );

      swimTimes.push(`${time} ${lanes}`);
    }

    output += `${header}\n${swimTimes.join('\n')}`;

    if (index < pools.length - 1) output += '\n\n';

    index++;
  }

  await context.close();
  await browser.close();

  return output;
}
