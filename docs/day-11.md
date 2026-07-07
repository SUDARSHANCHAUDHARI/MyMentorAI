# Day 11: Request Chaining

## Objective

Pass data from one API response into another request.

## Learn

- Extracting response values
- Saving variables
- Reusing IDs
- Create-read-update-delete flow
- Why test data must be dynamic

## Practice

Build a simple chained flow:

1. Create a resource.
2. Save the returned ID.
3. Fetch the resource by ID.
4. Update or patch the resource.
5. Delete the resource if the API supports it.

Example variable save:

```javascript
const body = pm.response.json();
pm.environment.set("created_post_id", body.id);
```

## Mini Quiz

1. What is request chaining?
2. Why is hardcoding created IDs risky?
3. Where can Postman store a value for later requests?
4. What can make chained tests flaky?
5. Why should cleanup matter in API testing?

## Challenge

Document one chained flow in `postman/collection-plan.md` or your journal before implementing it.

## Done When

- You can explain why dynamic data matters.
- One response value is saved and reused.
- `progress.md` has Day 11 checked off.
