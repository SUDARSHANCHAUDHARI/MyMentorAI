# Day 10 Answers: JSON Validation

1. A JSON object uses key-value pairs. A JSON array is an ordered list of values.
2. Data type checks catch contract breaks, such as an `id` becoming a string when clients expect a number.
3. A required field is a field that should always be present for a valid response or request.
4. A non-empty response can still contain the wrong structure, wrong fields, or wrong values.
5. Examples: `user.address.city`, `cart.products[0].id`, or `post.comments[0].email`.
