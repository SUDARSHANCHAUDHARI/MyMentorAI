# Postman Workspace

Store Postman exports here as the bootcamp progresses.

## Planned Files

```text
postman/
  collections/
  environments/
  README.md
```

## Naming Convention

Use clear names:

```text
api-testing-bootcamp-day-07.postman_collection.json
dummyjson-local.postman_environment.json
final-project.postman_collection.json
```

## Export Rule

Before exporting:

- Remove secrets and real tokens.
- Use variables instead of hardcoded credentials.
- Keep request names readable.
- Group related requests in folders.
- Add assertions where possible.

## Collection Quality Checklist

- [ ] Uses `base_url` variable
- [ ] Has clear folder names
- [ ] Has positive scenarios
- [ ] Has negative scenarios
- [ ] Has assertions beyond status code
- [ ] Does not contain secrets
- [ ] Can run through Collection Runner
- [ ] Can later run through Newman
