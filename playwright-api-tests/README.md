# Playwright API Tests

This folder will contain code-based API automation when the bootcamp reaches Week 3.

## Planned Structure

```text
playwright-api-tests/
  clients/
  config/
  data/
  tests/
  utils/
```

## Test Design Rules

- Prefer clear test names over clever abstractions.
- Assert business behavior, not only status codes.
- Keep test data isolated where possible.
- Avoid committing secrets or real tokens.
- Add negative tests for important failure paths.
- Make failures easy to understand from CI logs.

## Future Commands

These will be added after Playwright is installed:

```bash
npm run test:api
npm run test:api:headed
```
