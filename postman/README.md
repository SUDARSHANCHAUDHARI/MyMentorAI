# Postman Workspace

This folder contains the runnable DummyJSON Postman project and the original
Week 1 collection plan.

## Files

```text
postman/
  collections/
    MyMentorAI.postman_collection.json
  environments/
    MyMentorAI.postman_environment.json
  README.md
```

Run the collection from the repository root with `npm run test:api`. You can
also import both JSON files into Postman and use the Collection Runner.

## Export Rule

Before exporting:

- Remove secrets and real tokens.
- Use variables instead of hardcoded credentials.
- Keep request names readable.
- Group related requests in folders.
- Add assertions where possible.

## Collection Quality Checklist

- [x] Uses a `baseUrl` variable
- [x] Has clear folder names
- [x] Has positive scenarios
- [x] Has a negative scenario
- [x] Has assertions beyond status code
- [x] Does not contain secrets
- [x] Can run through Collection Runner
- [x] Can run through Newman
