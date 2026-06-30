# MyMentorAI

Personal AI mentorship workspace for building API testing skills through a practical, portfolio-first bootcamp.

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

This repo is ready for Day 1.

No tool installation is required yet. Postman, Newman, Playwright, and GitHub Actions setup will be added when the bootcamp reaches those topics.

## Bootcamp Rhythm

Daily target: 60-90 minutes.

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
    collections/           Exported Postman collections
    environments/          Exported Postman environments
  playwright-api-tests/
    clients/               Future API clients
    config/                Future test config
    data/                  Future test data
    tests/                 Future Playwright API specs
    utils/                 Future test helpers
  docs/                    Curriculum, reviews, rubrics, and project notes
  journal.md               Daily learning journal
  progress.md              30-day checklist and milestones
  interview-notes.md       Interview concepts and explanations
  mistakes.md              Debugging and mistake log
```

## Key Docs

- `docs/30-day-curriculum.md`: detailed daily roadmap
- `docs/day-01.md` to `docs/day-07.md`: detailed Week 1 lessons
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

For Day 1-14, use:

- Browser DevTools
- Postman
- Public practice APIs
- This repo for notes and exported collections

For Day 15 onward, this repo will add:

- Newman CLI
- Playwright API testing
- GitHub Actions

## Run

There is nothing to run yet.

Later commands will be added here, for example:

```bash
# Future Newman example
npm run test:postman

# Future Playwright example
npm run test:api
```

## Test

Current verification is documentation-based:

```bash
git status -sb
```

Once automation starts, this section will include Newman and Playwright commands.
