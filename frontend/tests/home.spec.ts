import { test, expect } from '@playwright/test';

test('homepage loads', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await expect(page.locator('h1')).toHaveText('DevOps Assignment');
});

test('backend integration works', async ({ page }) => {
  await page.goto('http://localhost:3000');

  await expect(
    page.getByTestId('backend-status')
  ).toContainText('connected');

  await expect(
    page.getByTestId('backend-message')
  ).toBeVisible();
});
