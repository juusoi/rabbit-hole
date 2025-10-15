"""
Structured logging helper with JSON output and contextual correlation IDs.
"""

import json
import logging
import uuid
from typing import Any, Dict


class JsonLogger(logging.Logger):
    """Logger that renders records as single-line JSON objects."""

    def makeRecord(
        self,
        name: str,
        level: int,
        fn: str,
        lno: int,
        msg: str,
        args: Any,
        exc_info: Any,
        func: str | None = None,
        extra: Dict[str, Any] | None = None,
        sinfo: str | None = None,
    ) -> logging.LogRecord:
        record = super().makeRecord(name, level, fn, lno, msg, args, exc_info, func, extra, sinfo)
        record.correlation_id = getattr(record, "correlation_id", str(uuid.uuid4()))
        return record


class JsonFormatter(logging.Formatter):
    """Formatter that serializes LogRecord attributes into JSON."""

    def format(self, record: logging.LogRecord) -> str:
        payload = {
            "level": record.levelname,
            "message": record.getMessage(),
            "correlation_id": getattr(record, "correlation_id", None),
            "logger": record.name,
        }
        if record.exc_info:
            payload["exception"] = self.formatException(record.exc_info)
        return json.dumps(payload, sort_keys=True)


def configure_json_logging(level: int = logging.INFO) -> logging.Logger:
    """Return a root logger configured with the JSON formatter."""
    logging.setLoggerClass(JsonLogger)
    logger = logging.getLogger("service")
    logger.setLevel(level)
    if logger.handlers:
        return logger

    handler = logging.StreamHandler()
    handler.setFormatter(JsonFormatter())
    logger.addHandler(handler)
    return logger


if __name__ == "__main__":
    logger = configure_json_logging()
    logger = logging.LoggerAdapter(logger, {"correlation_id": "request-123"})
    logger.info("sample event", extra={"correlation_id": "request-123"})
