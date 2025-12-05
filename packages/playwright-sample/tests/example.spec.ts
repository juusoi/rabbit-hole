import { test, expect } from '@playwright/test';

test.describe('Playwright Documentation', () => {
    test('has title', async ({ page }) => {
        await page.goto('/');

        // Expect the title to contain "Playwright"
        await expect(page).toHaveTitle(/Playwright/);
    });

    test('get started link navigates to intro page', async ({ page }) => {
        await page.goto('/');

        // Click the get started link
        await page.getByRole('link', { name: 'Get started' }).click();

        // Expects page to have a heading with the name of Installation
        await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
    });

    test('can search for documentation', async ({ page }) => {
        await page.goto('/');

        // Open search
        await page.getByRole('button', { name: 'Search' }).click();

        // Type search query
        await page.getByPlaceholder('Search docs').fill('locators');

        // Verify search results appear - use .first() to avoid strict mode violation
        await expect(page.getByRole('link', { name: /Locators/ }).first()).toBeVisible();
    });
});

test.describe('Page Interactions', () => {
    test('navigation works correctly', async ({ page }) => {
        await page.goto('/docs/intro');

        // Check we're on the intro page
        await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();

        // Navigate to another page - use exact match to avoid multiple matches
        await page.getByRole('link', { name: 'Writing tests', exact: true }).click();

        // Verify navigation
        await expect(page).toHaveURL(/.*writing-tests/);
    });
});
