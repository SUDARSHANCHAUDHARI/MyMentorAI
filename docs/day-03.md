# Day 3: Status Codes

## Objective

Learn how API status codes communicate success, client mistakes, authorization problems, and server failures.

## Learn

- `200 OK`
- `201 Created`
- `204 No Content`
- `400 Bad Request`
- `401 Unauthorized`
- `403 Forbidden`
- `404 Not Found`
- `409 Conflict`
- `422 Unprocessable Entity`
- `500 Internal Server Error`

## Practice

Use Postman and a public API to trigger:

- A successful request
- A request for a missing resource
- A request with an invalid body if supported
- An unauthorized request if supported

For each response, record:

- Status code
- What caused it
- Whether it is a client-side or server-side problem
- What a useful bug report would say

## Mini Quiz

1. What does `201` usually mean?
2. What is the difference between `401` and `403`?
3. When should an API return `404`?
4. Why is `500` not a good response for invalid user input?
5. What kind of problem can cause `409`?

## Challenge

Write a short bug report for an API returning `500` when the request body is missing a required field.

## Done When

- You can explain 2xx, 4xx, and 5xx categories.
- You can explain `401` vs `403`.
- `interview-notes.md` includes status code notes.
- `progress.md` has Day 3 checked off.
