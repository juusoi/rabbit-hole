# Incident Debugging Checklist

1. Capture the failing request or command, including timestamps and environment variables.
2. Reproduce in a local container using `scripts/replay.sh --fixture <id>`.
3. Compare current behavior against the expected contract documented in `docs/`.
4. Isolate the regression with targeted unit tests before attempting fixes.
5. Document findings and remediation steps in the associated issue.
