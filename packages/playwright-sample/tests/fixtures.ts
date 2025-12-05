import { test as base, expect, type Page } from '@playwright/test';

/**
 * Custom test fixtures example
 * This demonstrates how to extend Playwright's base test with custom fixtures
 */

// Define custom fixture types
interface CustomFixtures {
    // A fixture that provides test data
    testData: {
        username: string;
        email: string;
    };
    // A fixture for authenticated page
    authenticatedPage: Page;
}

// Extend base test with custom fixtures
export const test = base.extend<CustomFixtures>({
    // Provide test data fixture
    testData: async ({ }, use) => {
        await use({
            username: 'testuser',
            email: 'test@example.com',
        });
    },

    // Example: authenticated page fixture (mock implementation)
    authenticatedPage: async ({ page }, use) => {
        // In a real app, you would set auth cookies/tokens here
        // await page.context().addCookies([{ name: 'session', value: 'abc123', ... }]);
        await use(page);
    },
});

export { expect };
