# Codex Catalog

## Purpose
Codex exists as a living catalog of reusable code snippets, boilerplate modules, and AI-focused instructions. Use it to bootstrap new projects, seed agent prompts, or document decision-making playbooks. Each entry must be concise, production-minded, and accompanied by the context that explains when to apply it.

## Repository Layout
| Path | What to store |
| --- | --- |
| `snippets/` | Language-specific code fragments with minimal dependencies. |
| `boilerplate/` | Project starters (for example, FastAPI skeletons, Terraform modules). |
| `prompts/` | Prompt templates, task briefs, and instruction sets for AI assistants. |
| `guides/` | How-to articles, debugging recipes, and process documentation. |
| `docs/` | Cross-cutting references such as architecture notes or terminology. |
| `scripts/` | Utility scripts that automate catalog curation or validation. |

Add nested folders when needed (for example, `snippets/python/asyncio/` or `prompts/security/red-team/`) and include a short `README.md` in any deep directory to summarize its contents.

## Using the Catalog
- Browse Markdown files directly or rely on `rg -g "*.md" '<keyword>'` to search quickly.
- Follow embedded usage blocks (for example, `bash` commands, `curl` examples) to reproduce setups.
- When adapting a snippet, copy it alongside its commentary so future readers retain the rationale.

## Adding New Entries
1. Pick the directory that best fits and mirror existing naming patterns (`snake_case.md` for prompts, `<language>_<feature>.py` for snippets).
2. Start each entry with a front-matter block or heading that states intent, prerequisites, and expected outputs.
3. Include verification steps (tests to run, commands to execute) and link to related resources when available.
4. Update index files or tables of contents if you introduce a new category.
5. Review `AGENTS.md` for detailed contribution workflow, tooling expectations, and security notes.

## Language Tooling & Quality Checks
### Python Workflow
- Create and activate a virtual environment (`python -m venv .venv && source .venv/bin/activate`).
- Install dependencies defined in `requirements.txt` (add modules per snippet as needed).
- Lint with `ruff check snippets boilerplate prompts guides` and format with `black snippets boilerplate prompts guides`.
- Run `pytest` or module-specific `pytest tests/<area>` when adding executable examples or doctest-ready snippets.

### TypeScript Workflow
- Install Node.js 18+ and bootstrap dependencies: `npm install --save-dev typescript ts-node eslint prettier vitest @types/node`.
- Use `npx tsc --noEmit` to type-check standalone snippets and boilerplate templates.
- Lint with `npx eslint "snippets/typescript/**/*.{ts,tsx}" "boilerplate/**/*.{ts,tsx}"` and format via `npx prettier --check .`.
- Run `npx vitest run` (or targeted `vitest run <file>`) for unit-tested snippets. Keep Vitest configs close to the snippet or boilerplate they validate.

Document any environment variables in `docs/configuration.md` and scrub secrets before committing.
