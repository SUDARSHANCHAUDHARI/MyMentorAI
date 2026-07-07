# Day 9 Answers: Postman Assertions

1. `pm.test()` defines a named check that Postman can pass or fail.
2. A response can have the expected status but still return the wrong body, missing fields, or invalid data.
3. Examples: required field exists, array is not empty, returned ID matches requested ID, or error message is meaningful.
4. An assertion is too brittle when it fails because of harmless formatting or data-order changes instead of real behavior.
5. Negative scenarios should prove the API rejects invalid input in the expected way.
