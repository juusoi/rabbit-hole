# Configuration Reference

| Variable | Description | Default |
| --- | --- | --- |
| `OPENAI_API_KEY` | API key used for hosted model calls. | _unset_ |
| `SERVICE_ENV` | Deployment environment identifier (`dev`, `staging`, `prod`). | `dev` |
| `LOG_LEVEL` | Overrides default logging verbosity (`INFO`, `DEBUG`). | `INFO` |

Store these values in a local `.env` file and load them with `python-dotenv` or your runtime's equivalent secret manager. Never commit `.env` to version control.
