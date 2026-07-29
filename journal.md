# Learning Journal

Use this after each lesson.

Keep entries short and honest. The goal is not to sound perfect; the goal is to make learning visible.

## Project Build Record — 2026-07-29

**What was built**

- A seven-request DummyJSON Postman collection with 35 assertions.
- Newman commands for terminal execution and JUnit reporting.
- Four Playwright tests covering chaining, authentication, negative login, and CRUD-style product operations.
- GitHub Actions that runs both suites on pull requests and pushes to `main`.

**Verified result**

- `pnpm test:api`: 7 requests and 35 assertions passed.
- `pnpm test:playwright-api`: 4 tests passed.
- `pnpm audit`: no known vulnerabilities.

**Important constraint**

- DummyJSON simulates create, update, and delete responses without persisting changes. A real CRUD suite would need isolated test data and cleanup.

**Review before claiming lesson completion**

- Explain each test in plain English and mark daily progress only after completing the corresponding lesson, quiz, and personal reflection.

## Day 1

**What I learned**

-

**What confused me**

-

**One thing I want to improve tomorrow**

-

**Check-in**

```text
Day 1 Complete
Lesson: /10
Challenge:
Quiz: /5
Time spent:
Questions:
```

## Copy/Paste Template

## Day X

**What I learned**

-

**What confused me**

-

**One thing I want to improve tomorrow**

-

**Practice completed**

-

**Check-in**

    Day X Complete
    Lesson: /10
    Challenge:
    Quiz: /5
    Time spent:
    Questions:
