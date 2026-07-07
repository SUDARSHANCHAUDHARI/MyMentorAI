# Day 9: Postman Assertions

## Objective

Use Postman tests to turn manual requests into repeatable checks.

## Learn

- `pm.test()`
- Status code assertions
- Header assertions
- Response body assertions
- Response time checks
- Strong vs weak assertions

## Practice

Add tests to at least five requests in your Week 1 collection.

Start with:

```javascript
pm.test("Status code is 200", function () {
  pm.response.to.have.status(200);
});
```

Then add checks for:

- Response is JSON
- Expected fields exist
- Array responses are not empty
- Requested IDs match response IDs
- Negative scenarios return expected failure behavior

## Mini Quiz

1. What does `pm.test()` do?
2. Why is checking only status code sometimes weak?
3. What is one useful response body assertion?
4. What makes an assertion too brittle?
5. Why should negative scenarios have assertions too?

## Challenge

Add one meaningful assertion to each folder in your Postman collection.

## Done When

- At least five requests include tests.
- Assertions check more than status codes.
- `progress.md` has Day 9 checked off.
