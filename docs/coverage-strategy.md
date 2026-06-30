# API Test Coverage Strategy

Use this when deciding what to test. The goal is meaningful coverage, not a large number of weak tests.

## Coverage Layers

### Smoke Tests

Small set of critical checks that answer: is the API basically alive?

Examples:

- Health endpoint returns success
- Key list endpoint returns `200`
- Login or auth flow works

### Positive Tests

Checks valid requests.

Examples:

- Create product with valid body
- Get existing user by ID
- Update resource with valid fields

### Negative Tests

Checks invalid or unauthorized requests.

Examples:

- Missing required field
- Invalid token
- Accessing another user's data
- Unsupported HTTP method

### Contract Tests

Checks the API response shape.

Examples:

- Required fields exist
- Field types match expectations
- Deprecated fields are not used by new clients

### Business Rule Tests

Checks product behavior.

Examples:

- Cart total equals item price times quantity
- Deleted item cannot be fetched
- Pagination returns expected number of items

## Good API Assertions

Weak:

```text
Status code is 200.
```

Better:

```text
Status code is 200.
Response contains an array.
Each item has id, name, and price.
Price is a number greater than or equal to 0.
```

## Risk-Based Prioritization

Prioritize tests for:

- Authentication and authorization
- Money or billing flows
- User data
- Data creation and deletion
- Integrations used by multiple clients
- Areas with frequent bugs

## What Not To Overdo

Avoid:

- Testing every field with brittle assertions when the contract is not stable
- Depending on test execution order without a reason
- Creating tests that require manual cleanup
- Calling public APIs too aggressively
- Treating public practice API behavior as perfect real-world behavior
