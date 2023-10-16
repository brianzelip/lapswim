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

test(`has today's schedule`, async ({ page }) => {
  // Schedule header reads "Monday, October 15"
  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    timeZone: 'America/New_York'
  });

  await expect(page.getByText(today)).toBeVisible();
});
