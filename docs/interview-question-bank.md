# API Testing Interview Question Bank

Use this as a living interview notebook. Keep answers short, practical, and based on examples from this repo.

## HTTP Basics

- What is an API?
- What is REST?
- What is the difference between REST and SOAP?
- What is an endpoint?
- What is the difference between path params and query params?
- What is the difference between request headers and request body?
- What does `Content-Type` mean?
- What does `Accept` mean?

## HTTP Methods

- What is the difference between `GET` and `POST`?
- What is the difference between `PUT` and `PATCH`?
- Is `DELETE` idempotent?
- Why should `GET` not change server state?
- When would you use `POST` for an action rather than resource creation?

## Status Codes

- What is the difference between `200`, `201`, and `204`?
- What is the difference between `400` and `422`?
- What is the difference between `401` and `403`?
- When should an API return `404`?
- What kind of issue should return `409`?
- Why should validation errors not return `500`?

## Authentication and Authorization

- What is authentication?
- What is authorization?
- What is a Bearer token?
- What is JWT?
- What is OAuth 2.0?
- How would you test unauthorized access?
- How would you test role-based access?

## Postman

- What is a Postman collection?
- What are Postman environments?
- What are pre-request scripts?
- What are Postman tests?
- How do you chain requests in Postman?
- How do you run data-driven tests in Postman?
- How do you avoid committing secrets from Postman exports?

## API Automation

- Why automate API tests?
- What should API tests assert besides status code?
- How do you design stable API tests?
- How do you handle test data?
- What is request chaining?
- What can make API tests flaky?
- How do you decide which API tests run in CI?

## CI/CD

- What is Newman?
- How do you run Postman collections in CI?
- What should happen when an API test fails in CI?
- Which tests should block deployment?
- How do you keep CI tests fast?

## Contract Testing

- What is an API contract?
- What is schema validation?
- What is a breaking API change?
- Why is OpenAPI useful for testers?
- What is the difference between contract testing and end-to-end testing?

## Security

- How do you test APIs for missing authentication?
- How do you test authorization?
- What is rate limiting?
- What is sensitive data exposure?
- What API security issues would you check first?

## Scenario Questions

- An API returns `200` but the response body is missing a required field. How do you report it?
- A `POST /orders` request creates duplicate orders when retried. What do you investigate?
- A user can access another user's data by changing an ID in the URL. What kind of bug is this?
- A public API sometimes returns slow responses. How do you decide whether it is a test issue or product issue?
- A backend team says your API test is too brittle. How do you evaluate that feedback?
