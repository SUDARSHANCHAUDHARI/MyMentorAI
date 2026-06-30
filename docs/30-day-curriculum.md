# 30-Day API Testing Curriculum

This curriculum is built for someone with strong QA and automation experience. The focus is not memorizing definitions; the focus is building working judgment.

Daily target: 60-90 minutes.

## Week 1: REST API and Postman Fundamentals

### Day 1: API Basics

Learn:

- What an API is
- Client vs server
- Request and response
- Endpoint, resource, payload
- JSON basics

Practice:

- Open browser DevTools.
- Visit a website.
- Inspect requests in the Network tab.
- Identify URL, method, status code, headers, and response.

Definition of done:

- You can explain what happens when a browser or app calls an API.
- `journal.md` has a Day 1 entry.

### Day 2: HTTP Methods

Learn:

- `GET`
- `POST`
- `PUT`
- `PATCH`
- `DELETE`
- Safe vs unsafe methods
- Idempotency basics

Practice:

- Use Postman with JSONPlaceholder.
- Send one request for each method.

Definition of done:

- You can explain when to use each method.
- `interview-notes.md` includes PUT vs PATCH and idempotency notes.

### Day 3: Status Codes

Learn:

- `200`, `201`, `204`
- `400`, `401`, `403`, `404`, `409`, `422`
- `500`

Practice:

- Trigger successful and failing requests.
- Record examples in your notes.

Definition of done:

- You can explain 401 vs 403.
- You can explain why a client error should not usually return 500.

### Day 4: Params, Headers, and Body

Learn:

- Query params
- Path params
- Request headers
- Response headers
- JSON body
- Form data

Practice:

- Send requests using query params and path params.
- Send a JSON body.
- Inspect response headers.

Definition of done:

- You can identify where data belongs in a request.

### Day 5: Postman Collections

Learn:

- Collections
- Folders
- Saved requests
- Naming conventions
- Export and import

Practice:

- Create a collection with folders for users, posts, and comments.

Definition of done:

- A collection exists locally in Postman.
- Exported collection is saved under `postman/` when ready.

### Day 6: Environments and Variables

Learn:

- Base URL variables
- Environment variables
- Collection variables
- Secret handling

Practice:

- Create `base_url`.
- Switch between at least two public APIs or environments.

Definition of done:

- You understand why hardcoding URLs and tokens is poor practice.

### Day 7: Mini Postman Project

Build:

- Users requests
- Posts requests
- Comments requests
- Basic positive and negative scenarios

Review:

- What feels easy now?
- What still feels confusing?

Definition of done:

- Week 1 review is completed.

## Week 2: Practical API Testing

### Day 8: Authentication

Learn:

- API keys
- Bearer tokens
- JWT basics
- Cookies and sessions

Practice:

- Test a simple auth-style flow with a practice API.

Definition of done:

- You can explain authentication vs authorization.

### Day 9: Postman Assertions

Learn:

- `pm.test()`
- Status assertions
- Header assertions
- Response body assertions
- Response time checks

Practice:

- Add assertions to at least five requests.

Definition of done:

- You can write basic assertions without copying every line.

### Day 10: JSON Validation

Learn:

- Objects
- Arrays
- Nested JSON
- Required fields
- Data types

Practice:

- Validate response fields and nested values.

Definition of done:

- You can parse a nested JSON response and assert a value.

### Day 11: Request Chaining

Learn:

- Extracting response values
- Saving variables
- Reusing IDs or tokens

Practice:

- Create resource.
- Save ID.
- Fetch resource by ID.
- Update or delete resource.

Definition of done:

- You can explain why API tests often depend on dynamic data.

### Day 12: Pre-request Scripts

Learn:

- Random values
- Timestamp generation
- Dynamic payloads
- Avoiding duplicate test data

Practice:

- Generate an email, timestamp, or random value before a request.

Definition of done:

- Your test data is not fully hardcoded.

### Day 13: Collection Runner

Learn:

- Running a suite
- Data-driven execution
- Reading failures

Practice:

- Run a collection through Collection Runner.

Definition of done:

- You can explain one failed request clearly.

### Day 14: Swagger/OpenAPI

Learn:

- OpenAPI docs
- Schemas
- Required vs optional fields
- Example payloads
- API contract thinking

Practice:

- Use Swagger UI for a public API.
- Compare docs with real responses.

Definition of done:

- Week 2 review is completed.

## Week 3: API Automation

### Day 15: Newman CLI

Learn:

- Running Postman collections from terminal
- Exit codes
- CLI reports

Practice:

- Add Newman setup.
- Run a collection from the command line.

Definition of done:

- README includes the Newman command.

### Day 16: Newman in GitHub Actions

Learn:

- CI workflow basics
- Triggering on push
- Reading Actions output

Practice:

- Add a GitHub Actions workflow for Newman.

Definition of done:

- CI runs at least one API test command.

### Day 17: Playwright API Basics

Learn:

- `APIRequestContext`
- GET and POST requests
- Status assertions
- JSON parsing

Practice:

- Create first Playwright API test.

Definition of done:

- Playwright API test runs locally.

### Day 18: Authentication in Playwright

Learn:

- Login via API
- Store token
- Reuse token in headers

Practice:

- Automate an authenticated request where supported.

Definition of done:

- You can explain the token flow.

### Day 19: Playwright Assertions

Learn:

- Response body checks
- Header checks
- Response time sanity checks
- Useful failure messages

Practice:

- Add assertions beyond status codes.

Definition of done:

- Tests would catch meaningful API regressions.

### Day 20: CRUD Automation

Learn:

- Create-read-update-delete flow
- Data dependencies
- Cleanup strategy

Practice:

- Automate a CRUD flow.

Definition of done:

- CRUD flow passes from the command line.

### Day 21: Small API Framework Structure

Learn:

- Test organization
- Clients
- Test data
- Config
- Helpers

Practice:

- Organize Playwright tests under a clean structure.

Definition of done:

- Week 3 review is completed.

## Week 4: Professional Depth and Portfolio

### Day 22: SOAP Basics

Learn:

- XML
- WSDL
- SOAP request and response
- SoapUI basics

Practice:

- Inspect a sample SOAP request and response.

Definition of done:

- You can explain REST vs SOAP at interview level.

### Day 23: GraphQL Basics

Learn:

- Query
- Mutation
- Variables
- Overfetching and underfetching

Practice:

- Run one GraphQL query and one mutation if a public API is available.

Definition of done:

- You can explain REST vs GraphQL simply.

### Day 24: Performance Basics

Learn:

- Response time
- Latency
- Throughput
- Load vs stress testing

Practice:

- Add response time sanity checks.

Definition of done:

- You know when API performance testing requires a dedicated tool.

### Day 25: API Security Basics

Learn:

- Authentication
- Authorization
- SQL injection basics
- Rate limiting
- Sensitive data exposure

Practice:

- Add negative tests for unauthorized or invalid requests where possible.

Definition of done:

- You can explain at least three API security test ideas.

### Day 26: Contract Testing Basics

Learn:

- API contract
- Schema validation
- Breaking changes
- Backward compatibility

Practice:

- Compare response shape against expected schema.

Definition of done:

- You can explain why contract testing matters.

### Day 27: Mock APIs

Learn:

- Mock servers
- Service virtualization
- When mocks help
- When mocks hide real problems

Practice:

- Create or inspect a mock response.

Definition of done:

- You can explain what you would mock in a real project.

### Day 28: Portfolio Project Build

Build:

- Final API choice
- Postman collection
- Newman command
- Playwright tests
- Documentation

Definition of done:

- Final project has a clear structure.

### Day 29: Interview Preparation

Practice:

- 401 vs 403
- PUT vs PATCH
- Idempotency
- OAuth vs JWT
- Pagination
- Caching
- API versioning
- Contract testing
- Mocking
- CI test strategy

Definition of done:

- `interview-notes.md` has concise answers.

### Day 30: Final Challenge

Complete:

- Repo cleanup
- Final README
- CI verification
- Portfolio checklist
- Final reflection

Definition of done:

- The repo is ready to share.
- Week 4 review is completed.
