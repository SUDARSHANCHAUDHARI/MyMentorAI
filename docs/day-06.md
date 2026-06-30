# Day 6: Environments and Variables

## Objective

Use Postman variables to avoid hardcoded URLs, repeated values, and unsafe secrets.

## Learn

- Environment variables
- Collection variables
- Global variables
- `base_url`
- Variable scopes
- Secret handling

## Practice

Create a Postman environment with:

```text
base_url = https://jsonplaceholder.typicode.com
```

Update requests so they use:

```text
{{base_url}}/posts
{{base_url}}/posts/1
```

Optional:

- Add `user_id`
- Add `post_id`
- Add `invalid_post_id`

## Mini Quiz

1. Why is hardcoding a base URL a bad habit?
2. What is an environment variable?
3. What is the difference between environment and collection variables?
4. Why should tokens not be committed?
5. How do variables help CI later?

## Challenge

Switch the same collection between two base URLs or explain what would change in a real dev/staging/prod setup.

## Done When

- Your collection uses `{{base_url}}`.
- You can explain why variables matter.
- `progress.md` has Day 6 checked off.
