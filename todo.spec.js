const { test, expect } = require('@playwright/test');

test('add and complete a todo', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc/');

  await expect(page.getByRole('heading', { name: 'todos' })).toBeVisible();

  const input = page.getByPlaceholder('What needs to be done?');
  await input.fill('Finish my assignment');
  await input.press('Enter');

  await expect(page.getByTestId('todo-title'))
    .toHaveText('Finish my assignment');

  await page.getByRole('checkbox', { name: 'Toggle Todo' }).check();

  await expect(page.getByTestId('todo-count'))
    .toContainText('0 items left');

  await page.screenshot({
    path: 'screenshots/test-passed.png',
    fullPage: true
  });
});