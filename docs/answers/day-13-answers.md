# Day 13 Answers: Collection Runner

1. Collection Runner lets you execute many requests and tests as a repeatable suite.
2. Request order matters when later requests depend on variables created by earlier requests.
3. Check that the correct environment is selected, variables are safe, and secrets are not exported or committed.
4. Useful results include request count, test count, failures, run duration, and what changed after debugging.
5. Rerunning blindly can hide real defects or unstable tests instead of fixing the cause.
