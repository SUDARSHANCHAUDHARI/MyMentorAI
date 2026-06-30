# Interview Notes

Add short, practical explanations as concepts come up.

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
