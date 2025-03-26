import { test, expect } from '@playwright/test';

test('contains 10 pokemons', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('.list-pokemon-card')).toHaveCount(10);
});

test('expect pokemon names to be present', async ({ page }) => {
  await page.goto('/');
  const elements = await page.locator('.pokemon-details h1');
  await expect(elements).toHaveCount(10);

  for (let i = 0; i < 10; i++) {
    const item = elements.nth(i);
    await expect(item).toContainText(/.+/);
  }
});

test('expect pokemon images to be present', async ({ page }) => {
  await page.goto('/');
  const elements = await page.locator('.list-pokemon-card img');
  await expect(elements).toHaveCount(10);

  for (let i = 0; i < 10; i++) {
    const item = elements.nth(i);
    await expect(item).toHaveAttribute('src');
  }
});

test('expect first pokemon to be bulbasaur', async ({ page }) => {
  await page.goto('/');

  const firstPokemonName = page.locator('.list-pokemon-card .pokemon-details h1').first();
  await expect(firstPokemonName).toContainText(/bulbasaur/g);
});
