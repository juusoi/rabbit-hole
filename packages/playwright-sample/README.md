# 🎭 Playwright Sample

A sample Playwright testing project using **Bun** and **TypeScript**.

## Prerequisites

- [Bun](https://bun.sh/) installed on your system

## Setup

```bash
# Install dependencies
bun install

# Install Playwright browsers
bunx playwright install
```

## Running Tests

```bash
# Run all tests
bun run test

# Run tests in headed mode (see the browser)
bun run test:headed

# Run tests with UI mode (interactive debugging)
bun run test:ui

# Run tests in debug mode
bun run test:debug

# View HTML report after running tests
bun run test:report
```

## Generating Tests

Use Playwright's codegen feature to record browser interactions:

```bash
bun run codegen
```

## Project Structure

```
playwright-sample/
├── tests/
│   ├── example.spec.ts    # Example test file
│   └── fixtures.ts        # Custom test fixtures
├── playwright.config.ts   # Playwright configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Project dependencies
```

## Writing Tests

```typescript
import { test, expect } from '@playwright/test';

test('example test', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle(/Example/);
});
```

## Browser Configuration

The project is configured to run tests on:
- Chromium (Desktop Chrome)
- Firefox (Desktop Firefox)
- WebKit (Desktop Safari)
- Mobile Chrome (Pixel 5)
- Mobile Safari (iPhone 12)

## GitHub Actions

Tests can be run manually via GitHub Actions:

1. Go to **Actions** → **Playwright Tests**
2. Click **Run workflow**
3. Optionally change the base URL
4. Click **Run workflow**

Results are posted to Slack and HTML reports are uploaded as artifacts.

## Resources

- [Playwright Documentation](https://playwright.dev/docs/intro)
- [Bun Documentation](https://bun.sh/docs)
