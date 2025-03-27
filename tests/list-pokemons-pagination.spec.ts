import { test, expect } from '@playwright/test';

test('expect a disabled previous pagination button', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByTitle('Previous')).toHaveCount(1);
  await expect(page.getByTitle('Previous')).toBeDisabled();
});

test('expect a next pagination button', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByTitle('Next')).toHaveCount(1);
});

test('expect pagination to work', async ({ page }) => {
  await page.goto('/');
  await page.waitForSelector('.list-view.offset-0');

  await test.step('click next', async () => {
    await page.waitForSelector('.pagination');
    await page.getByTitle('Next').scrollIntoViewIfNeeded();
    await page.getByTitle('Next').click();
  });

  const firstPokemonLocator = page.locator('.pokemon-card .pokemon-details h1').first();

  await test.step('expect metapod in next page', async () => {
    await page.waitForSelector('.list-view.offset-10');
    await expect(firstPokemonLocator).toContainText(/metapod/g);
  });

  await test.step('click previous', async () => {
    await page.waitForSelector('.pagination');
    await page.getByTitle('Previous').scrollIntoViewIfNeeded();
    await page.getByTitle('Previous').click();
  });

  await test.step('expect bulbasaur in previous page', async () => {
    await page.waitForSelector('.list-view.offset-0');
    await expect(firstPokemonLocator).toContainText(/bulbasaur/g);
  });
});
