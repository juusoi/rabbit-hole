# FastAPI Starter

## Contents
- `app/main.py` – Application entrypoint with healthcheck and lifespan hooks.
- `app/dependencies.py` – Shared dependency injection helpers.
- `tests/` – Pytest suite with httpx test client fixture.
- `pyproject.toml` – Poetry project definition with linting extras.

## Quickstart
```bash
poetry install
poetry run uvicorn app.main:app --reload
poetry run pytest
```

## Customization Notes
- Replace the placeholder routers under `app/routers/` with domain-specific modules.
- Configure logging via `app/settings.py` and keep secrets in `.env` (ignored by Git).
- Update `pyproject.toml` classifiers to match your intended Python version.
