# Postman Collection Plan

This is the plan for the Week 1 Postman collection before the real collection export exists.

## Collection Name

```text
API Testing Bootcamp - Week 1
```

## Environment Variables

```text
base_url = https://jsonplaceholder.typicode.com
valid_post_id = 1
invalid_post_id = 999999
valid_user_id = 1
```

## Folder: Users

| Request Name | Method | Endpoint | Purpose |
| --- | --- | --- | --- |
| Get all users | GET | `{{base_url}}/users` | Verify users list is available |
| Get user by valid ID | GET | `{{base_url}}/users/{{valid_user_id}}` | Verify a known user can be fetched |
| Get user by invalid ID | GET | `{{base_url}}/users/999999` | Observe missing resource behavior |

## Folder: Posts

| Request Name | Method | Endpoint | Purpose |
| --- | --- | --- | --- |
| Get all posts | GET | `{{base_url}}/posts` | Verify posts list is available |
| Get post by valid ID | GET | `{{base_url}}/posts/{{valid_post_id}}` | Verify a known post can be fetched |
| Get posts by user ID | GET | `{{base_url}}/posts?userId={{valid_user_id}}` | Verify query parameter filtering |
| Create post with valid body | POST | `{{base_url}}/posts` | Practice create request |
| Replace post with valid body | PUT | `{{base_url}}/posts/{{valid_post_id}}` | Practice full update |
| Patch post title | PATCH | `{{base_url}}/posts/{{valid_post_id}}` | Practice partial update |
| Delete post | DELETE | `{{base_url}}/posts/{{valid_post_id}}` | Practice delete request |

## Folder: Comments

| Request Name | Method | Endpoint | Purpose |
| --- | --- | --- | --- |
| Get all comments | GET | `{{base_url}}/comments` | Verify comments list is available |
| Get comments by post ID | GET | `{{base_url}}/comments?postId={{valid_post_id}}` | Verify query parameter filtering |

## Folder: Negative Scenarios

| Request Name | Method | Endpoint | Purpose |
| --- | --- | --- | --- |
| Get post by invalid ID | GET | `{{base_url}}/posts/{{invalid_post_id}}` | Verify missing resource behavior |
| Get invalid route | GET | `{{base_url}}/not-a-real-route` | Verify unknown path behavior |

## Starter Assertions

Add these gradually:

- Status code is expected
- Response is JSON when expected
- Required fields exist
- Arrays are not empty where expected
- IDs match the requested resource
- Negative scenarios return expected failure behavior

## Export Checklist

- [ ] Request names are clear
- [ ] Folders are organized
- [ ] `base_url` variable is used
- [ ] No secrets are included
- [ ] Collection exported to `postman/collections/`
- [ ] Environment exported to `postman/environments/`
