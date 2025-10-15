# Repository Guidelines

## Project Structure & Module Organization
Codex operates as a catalog. Store language-focused snippets under `snippets/<language>/`, project templates inside `boilerplate/<stack>/`, prompt libraries in `prompts/`, and practice guides in `guides/`. Cross-cutting references live in `docs/`, while helper automation belongs in `scripts/`. When you introduce a deep folder, add a local `README.md` that describes its scope and conventions.

## Build, Test, and Development Commands
### Python Assets
- `python -m venv .venv && source .venv/bin/activate`
- `python -m pip install -r requirements.txt`
- `ruff check snippets/python boilerplate prompts guides`
- `black snippets/python boilerplate/python_* guides`
- `pytest` or targeted module runs such as `pytest tests/python`

### TypeScript Assets
- `npm install --save-dev typescript ts-node eslint prettier vitest @types/node`
- `npx tsc --noEmit` to validate type safety
- `npx eslint "snippets/typescript/**/*.{ts,tsx}" "boilerplate/**/*.{ts,tsx}"`
- `npx prettier --check snippets/typescript boilerplate`
- `npx vitest run` for executable TypeScript examples

## Coding Style & Naming Conventions
### Python
Use Python 3.11+. Stick to four-space indentation, `snake_case` modules and functions, and `PascalCase` classes. Keep snippet files focused on one pattern and include docstrings that describe intent, dependencies, and example usage. Prefer standard library solutions; annotate types where clarity improves adoption.

### TypeScript
Target ES2022 and strict TypeScript settings (`"strict": true`). Export named utilities from files and mirror folder naming with kebab-case directories plus camelCase files (`httpClient.ts`). Leverage async/await over promise chains. Include inline comments when external services or experimental APIs are involved.

## Testing Guidelines
Keep executable examples covered by lightweight tests or doctests.

- Python: mirror snippet paths under `tests/python/` and follow `test_<feature>_<behavior>` naming. Use pytest fixtures to simulate external systems. Aim for 85% coverage per module (`pytest --cov=snippets/python`).
- TypeScript: create co-located test files (`foo.test.ts`) using Vitest. Share helpers in `tests/typescript/utils/`. Run `npx vitest run --coverage` when validating complex generators or API clients.

## Commit & Pull Request Guidelines
Follow Conventional Commits (for example, `feat:`, `fix:`, `docs:`) to keep history scanable. Summarize added snippets or templates in the PR description, link related issues, and list the validations you executed (linting, tests, manual walkthroughs). Provide screenshots or terminal transcripts for scripts or CLI instructions. Request a maintainer review and ensure CI passes before merging. Rebase instead of merging `main` to keep history linear.

## Security & Configuration Tips
Store secrets in `.env` (gitignored) and access them via environment lookups (`os.environ` or `process.env`). Redact tokens from examples unless using mocked values. Run `detect-secrets scan` before committing if you introduce new configuration files. Document any new environment variables in `docs/configuration.md`.
