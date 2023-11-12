//@ts-check
import DB from './DB.mjs';
import { firefox } from 'playwright';
import { pools, strOfXLength } from './utils.mjs';

/**
 * Parse lap swim times from Y schedules, console log them, and cache them;
 * or console them if cached.
 */
(async () => {
  const now = new Date();

  if (DB.isCurrent(now)) {
    console.log(DB.output);

    return;
  }

  const eventType = 'Lap Swim';
  const weekDay = now.toLocaleDateString('en-US', { weekday: 'long' });
  const dateString = now.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    timeZone: 'America/New_York'
  });

  const browser = await firefox.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  let index = 0;
  let output = `\n${dateString}\n\n`;

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

  console.log(output);

  DB.update(now, output);
})();
