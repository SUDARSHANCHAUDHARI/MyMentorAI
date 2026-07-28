# Playwright API Tests

This folder contains small code-based DummyJSON API flows: a chained Users
lookup, positive and negative authentication, and product CRUD-style operations.

## Current Structure

```text
playwright-api-tests/
  playwright.config.ts
  tests/
    auth.spec.ts
    products.spec.ts
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

The tests check response status codes, JSON content types, important body
fields, request chaining, and a three-second response-time threshold.

`auth.spec.ts` uses DummyJSON's published demo account. It stores the returned
access token only in memory for that test and sends it directly to `/auth/me`;
no real credentials or tokens are committed. Its negative test confirms an
invalid password returns `400`, a useful error message, and no access token.

`products.spec.ts` covers create, read, update, and delete responses. DummyJSON
simulates mutations without saving them, so the test verifies each returned
contract and chains a stable product ID instead of pretending a created product
can be fetched later.
