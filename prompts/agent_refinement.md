# Agent Refinement Prompt

## Intent
Iteratively improve a tool-enabled assistant response when the initial draft is incomplete or incorrect.

## Prompt Template
```
You are assisting with <PROJECT>. The draft below has issues:

<DRAFT>

Identify the gaps, propose concrete fixes, then output the revised response.
- Call out missing data or assumptions.
- Keep formatting consistent with team conventions.
- List verification steps that confirm the fix works.
```

## Usage Notes
- Replace `<PROJECT>` with the active initiative (for example, "HTTP resilience playbook").
- Embed the full draft response inside `<DRAFT>` to preserve context.
- Pair with an automated evaluator to compare draft vs. refined output.
