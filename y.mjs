//@ts-check
import { firefox } from 'playwright';

(async () => {
  const browser = await firefox.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  const swimHeading = 'Lap Swim';
  const now = new Date();
  const weekDay = now.toLocaleDateString('en-US', { weekday: 'long' });

  await page.goto(
    'https://ymaryland.org/locations/weinbergy/weinbergschedules'
  );

  const swimRows = await page
    .locator(`#GXP${weekDay} > .GXPEntry.row`)
    .filter({ hasText: swimHeading })
    .all();

  async function main() {
    console.log(`
Waverly lap swim today
----------------------`);

    for (const row of swimRows) {
      const time = await row.locator('.GXPTime').innerText();
      const heading = await row.getByText(swimHeading).innerText();
      const lanes = heading.substring(
        heading.indexOf('('),
        heading.indexOf(')') + 1
      );

      console.log(`${time} ${lanes}`);
    }
  }

  await main();

  await context.close();
  await browser.close();
})();
