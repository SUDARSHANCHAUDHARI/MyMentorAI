# Playwright API Tests

This folder contains the first code-based DummyJSON API flow. The test fetches
the users list, stores the first returned ID, and fetches that user by ID.

## Current Structure

```text
playwright-api-tests/
  playwright.config.ts
  tests/
    users.spec.ts
```

## Test Design Rules

- Prefer clear test names over clever abstractions.
- Assert business behavior, not only status codes.
- Keep test data isolated where possible.
- Avoid committing secrets or real tokens.
- Add negative tests for important failure paths.
- Make failures easy to understand from CI logs.

## Run

```bash
npm run test:playwright-api
```

The flow checks both response status codes, JSON content types, important body
fields, the chained user ID, and a three-second response-time threshold.
