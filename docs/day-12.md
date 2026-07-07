# Day 12: Pre-Request Scripts

## Objective

Use pre-request scripts to prepare data before a request is sent.

## Learn

- Pre-request scripts
- Dynamic request data
- Timestamps and random values
- Setting variables before requests
- When scripts add value vs noise

## Practice

Add a pre-request script that creates a dynamic value:

```javascript
const uniqueTitle = `api-test-${Date.now()}`;
pm.environment.set("unique_title", uniqueTitle);
```

Use it in a request body:

```json
{
  "title": "{{unique_title}}",
  "body": "Created during API testing practice",
  "userId": 1
}
```

## Mini Quiz

1. When does a pre-request script run?
2. Why are dynamic values useful?
3. What is one risk of too much scripting?
4. How can a pre-request script support request chaining?
5. What should never be generated or stored carelessly?

## Challenge

Create one dynamic value and assert that the response includes it if the practice API supports that behavior.

## Done When

- You have used a pre-request script.
- You can explain when scripts are worth using.
- `progress.md` has Day 12 checked off.
