# Day 6 Answers: Environments and Variables

1. A Postman environment stores values like base URLs and IDs that can change between contexts.
2. `{{base_url}}` avoids repeating and hardcoding the same URL in every request.
3. Hardcoded tokens can leak credentials and make collections unsafe to share.
4. Variables let the same request run against different environments by changing values in one place.
5. Check that no real secrets, tokens, passwords, or private data are included.
