# Day 11 Answers: Request Chaining

1. Request chaining passes data from one API response into later requests.
2. Hardcoded IDs can disappear, collide with other data, or hide whether the create step actually worked.
3. Postman can store values in environment, collection, global, or local variables.
4. Chained tests can become flaky when data is not cleaned up, request order is wrong, or the API has eventual consistency delays.
5. Cleanup prevents polluted test data and makes repeated runs more reliable.
