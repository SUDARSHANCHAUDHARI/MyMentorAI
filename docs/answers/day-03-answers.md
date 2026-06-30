# Day 3 Answers: Status Codes

1. `200` means the request succeeded.
2. `201` usually means a resource was created.
3. `401` means not authenticated. `403` means authenticated but not allowed.
4. `404` should be returned when the requested resource does not exist or is not available.
5. `500` means the server failed unexpectedly. Invalid client input should usually be a 4xx response.
