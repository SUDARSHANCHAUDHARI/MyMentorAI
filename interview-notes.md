# Interview Notes

Add short, practical explanations as concepts come up.

Use this format:

```text
Concept:
Plain English:
Example:
Common mistake:
Interview answer:
```

## Core Concepts

### 401 vs 403

- 401 means the client is not authenticated.
- 403 means the client is authenticated but not authorized for the resource.

### PUT vs PATCH

- PUT usually replaces a full resource.
- PATCH updates part of a resource.

### Idempotency

An operation is idempotent when repeating the same request produces the same final server state.

### JWT

JWT is a token format commonly used to carry signed authentication or authorization claims.

### OAuth 2.0

OAuth 2.0 is an authorization framework used to grant access without sharing passwords with the client app.

### Rate Limiting

Rate limiting controls how many requests a client can make in a time window.

## 60-Second Project Explanation

MyMentorAI is a portfolio API testing project built against DummyJSON. It has a
small Postman collection with seven requests and 35 focused assertions, which I
run from the command line with Newman. I then automated four flows with
Playwright: user request chaining, successful authentication, invalid login,
and CRUD-style product operations. The tests validate status codes, JSON
content types, important response fields, data types, negative behavior, and
response-time thresholds. GitHub Actions installs dependencies with a frozen
pnpm lockfile and runs both suites on pull requests and pushes to `main`. One
important limitation is that DummyJSON simulates mutations without persisting
them, so I verify the returned contracts and would use isolated data plus
cleanup against a real writable API.

## Questions To Practice

- What happens when an API returns `500` for a bad client request?
- Why should API tests include negative scenarios?
- What is the difference between validation and verification in API testing?
- Why is schema validation useful?
- What makes an API test flaky?
- How do you decide which API tests should run in CI?
- What should be mocked and what should be tested against a real service?
- How do you test pagination?
- How do you test authorization beyond just login?
- How do you explain an API bug clearly to a developer?
