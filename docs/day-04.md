# Day 4: Params, Headers, and Body

## Objective

Understand where data belongs in an API request and how to inspect request/response metadata.

## Learn

- Path parameters
- Query parameters
- Request headers
- Response headers
- JSON body
- Form data
- `Content-Type`
- `Accept`
- `Authorization`

## Practice

Use Postman to send requests that include:

- A path parameter, such as `/posts/1`
- A query parameter, such as `/posts?userId=1`
- A JSON body
- A custom header

For each request, write down:

- What data is in the URL
- What data is in headers
- What data is in the body
- Why it belongs there

## Mini Quiz

1. What is a path parameter?
2. What is a query parameter?
3. Where should an auth token usually go?
4. What does `Content-Type: application/json` tell the server?
5. When would form data be useful?

## Challenge

Explain the difference between:

```text
/users/123
/users?id=123
```

## Done When

- You can identify params, headers, and body in Postman.
- You can explain where authentication data usually belongs.
- `progress.md` has Day 4 checked off.
