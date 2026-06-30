# API Testing Glossary

## API

An application programming interface. In this bootcamp, it usually means a web API that accepts HTTP requests and returns responses.

## Endpoint

A specific URL that exposes a resource or action.

Example: `/users/123`

## Resource

The thing the API represents, such as user, product, order, post, or comment.

## Request

The message sent by the client to the server. It usually includes method, URL, headers, and sometimes a body.

## Response

The message returned by the server. It usually includes status code, headers, and body.

## Header

Metadata sent with a request or response.

Examples: `Authorization`, `Content-Type`, `Accept`

## Query Param

A value passed after `?` in the URL.

Example: `/products?limit=10`

## Path Param

A value embedded in the URL path.

Example: `/products/42`

## Payload

The body data sent in a request or returned in a response.

## JSON

A common data format used by REST APIs.

## Status Code

A numeric result code returned by the server.

Examples: `200`, `201`, `400`, `401`, `403`, `404`, `500`

## Authentication

Proving who you are.

## Authorization

Checking what you are allowed to do.

## Bearer Token

A token sent in the `Authorization` header to access protected APIs.

## JWT

JSON Web Token. A token format often used for authentication and authorization claims.

## Idempotent

Repeating the same request produces the same final server state.

## Schema

The expected shape of data, including fields and types.

## Contract

The agreed behavior of an API: endpoints, methods, payloads, responses, and errors.

## Mock API

A fake or simulated API used for development or testing.

## CI

Continuous integration. Automated checks that run when code changes.
