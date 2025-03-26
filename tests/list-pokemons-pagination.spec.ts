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
  await page.waitForLoadState('networkidle');

  test.step('click on the next button', async () => {
    await page.getByTitle('Next').scrollIntoViewIfNeeded();
    await page.getByTitle('Next').locator('..').click();
  });

  test.step('expect next page first pokemon to be Metapod', async () => {
    await page.waitForLoadState('networkidle');
    const firstPokemonName = page.locator('.list-pokemon-card .pokemon-details h1').first();
    await expect(firstPokemonName).toContainText(/metapod/g);
  });

  test.step('click on the previous button', async () => {
    await page.getByTitle('Previous').scrollIntoViewIfNeeded();
    await page.getByTitle('Previous').click();
  });

  test.step('expect previous page first pokemon to be Bulbasaur', async () => {
    await page.waitForLoadState('networkidle');
    const firstPokemonName = page.locator('.list-pokemon-card .pokemon-details h1').first();
    await expect(firstPokemonName).toContainText(/bulbasaur/g);
  });
});
