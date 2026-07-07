# Day 10: JSON Validation

## Objective

Validate JSON structure and values so API tests catch real contract problems.

## Learn

- JSON objects
- JSON arrays
- Nested JSON
- Required fields
- Data types
- Schema-style thinking

## Practice

Pick three API responses and identify:

- Top-level type
- Required fields
- Nested objects or arrays
- Field data types
- Values worth asserting

Add Postman tests for a response body, for example:

```javascript
const body = pm.response.json();

pm.test("Post has required fields", function () {
  pm.expect(body).to.have.property("id");
  pm.expect(body).to.have.property("title");
  pm.expect(body).to.have.property("body");
});
```

## Mini Quiz

1. What is the difference between an object and an array in JSON?
2. Why should API tests check data types?
3. What is one risk of only checking that a response is not empty?
4. What is a required field?
5. What is one nested JSON value you might validate?

## Challenge

Write a short expected-response checklist for one endpoint before adding assertions.

## Done When

- You can read a nested JSON response.
- At least one request validates required fields.
- `interview-notes.md` has a note about schema validation.
- `progress.md` has Day 10 checked off.
