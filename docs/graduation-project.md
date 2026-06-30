# Graduation Project

## Goal

Build a complete API testing solution that can be shared as portfolio work.

The project should show that Sudarshan can think like a professional QA/SDET: understand API behavior, design useful coverage, automate meaningful checks, document tradeoffs, and explain failures clearly.

## Candidate APIs

- ReqRes
- DummyJSON
- Fake Store API
- JSONPlaceholder

## Required Deliverables

- Postman collection
- Postman environment
- Postman assertions
- Newman command
- Playwright API tests
- Authentication flow where supported
- Positive and negative scenarios
- GitHub Actions workflow
- README with setup, run, and test instructions

## Recommended Coverage

- Smoke tests for critical endpoints
- Positive CRUD scenarios
- Negative validation scenarios
- Authentication or authorization scenarios where the API supports them
- Schema checks for important responses
- Response field checks for business rules
- Response time sanity checks
- Data cleanup strategy or clear note explaining why cleanup is not needed

## README Requirements

The final project README should explain:

- What API is being tested
- Why this API was chosen
- What tools are used
- How to import the Postman collection
- How to run Newman
- How to run Playwright tests
- How CI works
- What scenarios are covered
- Known limitations of the public API
- What would be improved in a real company project

## Portfolio Quality Checklist

- [ ] Clear project purpose
- [ ] Clean repo structure
- [ ] Repeatable setup instructions
- [ ] Tests can be run from the command line
- [ ] CI runs the test suite
- [ ] Documentation explains what is tested and why
- [ ] No secrets or private data committed
- [ ] Examples are named clearly
- [ ] Failures produce useful messages
- [ ] Negative tests are included
- [ ] The project can be understood by a recruiter or hiring manager
