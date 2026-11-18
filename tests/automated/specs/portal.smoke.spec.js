const { test, expect } = require('@playwright/test');

// A few serial, non-destructive UI checks against the public practice demo.
// This is not a load/security test. Stop if the target owner disallows automation.
test('home page and exercise links are available', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('h1')).toContainText('Welcome to the-internet');
  await expect(page.getByRole('link', { name: 'Checkboxes' })).toBeVisible();
});

test('checkbox controls can be toggled', async ({ page }) => {
  await page.goto('/checkboxes');
  const boxes = page.locator('input[type="checkbox"]');
  await expect(boxes).toHaveCount(2);
  const initial = await boxes.nth(0).isChecked();
  await boxes.nth(0).click();
  await expect(boxes.nth(0)).toBeChecked({ checked: !initial });
});

test('dropdown exposes selectable options', async ({ page }) => {
  await page.goto('/dropdown');
  const dropdown = page.locator('#dropdown');
  await expect(dropdown).toBeVisible();
  await dropdown.selectOption({ label: 'Option 1' });
  await expect(dropdown).toHaveValue('1');
});

test('add and remove element updates the page', async ({ page }) => {
  await page.goto('/add_remove_elements/');
  await page.getByRole('button', { name: 'Add Element' }).click();
  const deleteButton = page.getByRole('button', { name: 'Delete' });
  await expect(deleteButton).toHaveCount(1);
  await deleteButton.click();
  await expect(page.getByRole('button', { name: 'Delete' })).toHaveCount(0);
});

test('status-code exercise is reachable', async ({ page }) => {
  await page.goto('/status_codes');
  await expect(page.locator('h3')).toContainText('Status Codes');
  await expect(page.getByRole('link', { name: '200' })).toBeVisible();
});
