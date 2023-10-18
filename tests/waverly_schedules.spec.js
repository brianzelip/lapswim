import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }, testInfo) => {
  console.log(`Running ${testInfo.title}`);
  await page.goto(
    'https://ymaryland.org/locations/weinbergy/weinbergschedules'
  );
});

test(`has 'Swim' in the page title`, async ({ page }) => {
  await expect(page).toHaveTitle(/Swim/);
});

test(`shows today's schedule`, async ({ page }) => {
  // Schedule header reads like "Monday, October 15"
  const now = new Date();
  const day = now.toLocaleDateString('en-US', { weekday: 'long' });
  const heading = now.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    timeZone: 'America/New_York'
  });

  // Don't use the recommended `page.getByText(heading)` because `heading` can
  // potentially be found elsewhere on the page, so use a selector instead.
  // The daily schedules are represented as <div>s with IDs like `GXPMonday`,
  // and the current day's schedule is visible by default on page load.
  await expect(page.locator(`#GXP${day} :text('${heading}')`)).toBeVisible();
});
