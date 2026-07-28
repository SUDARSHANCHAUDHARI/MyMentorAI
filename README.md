# MyMentorAI

Personal API testing mentorship workspace with practical lessons and a small,
runnable Postman project.

This repo is designed to work like a real mentorship project, not a folder of course notes. Each day should leave behind evidence: notes, examples, mistakes, interview explanations, and eventually runnable API tests.

## Goal

Build a real API testing portfolio project while learning:

- REST API testing fundamentals
- Postman collections and environments
- Swagger/OpenAPI exploration
- Newman CLI execution
- Playwright API automation
- GitHub Actions CI
- Interview-ready API testing explanations

## Current Status

The learning curriculum remains available in `docs/`. The repository now also
contains seven real Postman requests against DummyJSON, Newman command-line
execution, a simple GitHub Actions workflow, and focused Playwright coverage
for user chaining, positive and negative authentication, and product CRUD-style
operations.

## Bootcamp Rhythm

Daily target: 90–120 minutes.

After each lesson, record:

```text
Day X Complete
Lesson: /10
Challenge: pass/fail
Quiz: /5
Time spent:
Questions:
```

Recommended daily flow:

1. Read the day plan in `docs/day-XX.md` or the overview in `docs/30-day-curriculum.md`.
2. Do the practice task.
3. Answer the quiz in `docs/quizzes/`.
4. Check your answers in `docs/answers/`.
5. Update `journal.md`.
6. Add useful concepts to `interview-notes.md`.
7. Add mistakes or confusion to `mistakes.md`.
8. Mark progress in `progress.md`.
9. Send the daily check-in message from `docs/day-check-in-template.md`.

## Repository Structure

```text
MyMentorAI/
  postman/
    collections/           Runnable DummyJSON Postman collection
    environments/          Environment used by Postman and Newman
  playwright-api-tests/
    playwright.config.ts   Minimal Playwright API configuration
    tests/auth.spec.ts     Login and current-user token flow
    tests/products.spec.ts Product create/read/update/delete-style flow
    tests/users.spec.ts    First chained Users API flow
  docs/                    Curriculum, reviews, rubrics, and project notes
  journal.md               Daily learning journal
  progress.md              30-day checklist and milestones
  interview-notes.md       Interview concepts and explanations
  mistakes.md              Debugging and mistake log
```

## Key Docs

- `docs/30-day-curriculum.md`: detailed daily roadmap
- `docs/day-01.md` to `docs/day-14.md`: detailed Week 1 and Week 2 lessons
- `docs/quizzes/`: daily quiz questions
- `docs/answers/`: quiz answer keys
- `docs/day-check-in-template.md`: message template after each lesson
- `docs/mentor-prompts.md`: prompts for lesson review, debugging, and interview practice
- `docs/mentor-review-rubric.md`: how each day will be reviewed
- `docs/coverage-strategy.md`: how to choose useful API test coverage
- `docs/glossary.md`: API testing terminology
- `docs/resources.md`: recommended APIs and tools
- `docs/interview-question-bank.md`: growing interview prep notebook
- `docs/graduation-project.md`: final portfolio project requirements
- `docs/weekly-review-template.md`: weekly review questions
- `postman/collection-plan.md`: Week 1 Postman collection blueprint

## Practice APIs

Use these APIs during the bootcamp:

- ReqRes for auth-style examples
- DummyJSON for richer CRUD-style flows
- Fake Store API for portfolio-friendly e-commerce scenarios
- JSONPlaceholder for basic REST practice

## Definition of Done

A day is complete when:

- The practice task works.
- Notes are added to `journal.md`.
- Any useful interview concept is added to `interview-notes.md`.
- Any error or confusion is added to `mistakes.md`.
- `progress.md` is updated.
- You can explain the "why" behind the concept in plain English.

## Graduation Project

By the end, this repo should include:

- Postman collection
- Postman environment variables
- Postman test scripts
- Newman execution command
- Playwright API tests
- GitHub Actions workflow
- Professional README and project documentation

The final project should be good enough to share with a hiring manager or link from LinkedIn.

## Setup

### Prerequisites

- Node.js 20 or later
- pnpm
- Internet access to call the public DummyJSON API
- Postman is optional if you want to inspect or edit the collection visually

### Install

```bash
git clone https://github.com/SUDARSHANCHAUDHARI/MyMentorAI.git
cd MyMentorAI
pnpm install
```

## Run

Run all seven requests and their assertions:

```bash
ppnpm test:api
```

Generate CLI output and a JUnit report at `reports/api-results.xml`:

```bash
ppnpm test:api:report
```

Run the first Playwright Users API flow:

```bash
ppnpm test:playwright-api
```

The runnable assets are:

- `postman/collections/MyMentorAI.postman_collection.json`
- `postman/environments/MyMentorAI.postman_environment.json`
- `playwright-api-tests/tests/auth.spec.ts`
- `playwright-api-tests/tests/products.spec.ts`
- `playwright-api-tests/tests/users.spec.ts`

After execution, inspect:

- Which request and assertion names passed or failed in the Newman summary.
- How `Get all users` stores `userId` for `Get one user`.
- How `Get all products` stores `productId` for `Get one product`.
- How the invalid user request checks a real `404` error response.
- How `searchTerm` changes the product search without editing the request URL.

## What to Study Next

Inspect why `products.spec.ts` cannot fetch its newly created product:
DummyJSON returns realistic mutation responses but does not persist changes.
Explain how a real API would require isolated test data and cleanup before
adding any framework layers.
