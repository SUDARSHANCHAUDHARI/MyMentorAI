# Day 2: HTTP Methods

## Objective

Understand the purpose of common HTTP methods and when each one should be used.

## Learn

- `GET`: read data
- `POST`: create data or trigger an action
- `PUT`: replace a full resource
- `PATCH`: update part of a resource
- `DELETE`: remove a resource
- Safe methods
- Idempotent methods

## Practice

Use Postman with JSONPlaceholder:

- `GET /posts`
- `GET /posts/1`
- `POST /posts`
- `PUT /posts/1`
- `PATCH /posts/1`
- `DELETE /posts/1`

For each request, record:

- Method
- URL
- Request body if present
- Status code
- Response body
- What the method is supposed to mean

## Mini Quiz

1. Which method should you use to fetch data?
2. What is the main difference between `PUT` and `PATCH`?
3. Why is `GET` considered safe?
4. Is `POST` usually idempotent?
5. Why should `DELETE` usually be idempotent?

## Challenge

Explain this in your own words:

```text
POST creates or triggers. PUT replaces. PATCH partially updates.
```

## Done When

- You have sent at least five different HTTP method requests.
- You can explain `PUT` vs `PATCH`.
- `interview-notes.md` includes idempotency notes.
- `progress.md` has Day 2 checked off.
