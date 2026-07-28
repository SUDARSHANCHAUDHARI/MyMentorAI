import { expect, test } from '@playwright/test';

test('gets a user returned by the users list', async ({ request }) => {
  const listStartedAt = Date.now();
  const listResponse = await request.get('/users');
  const listDuration = Date.now() - listStartedAt;

  expect(listResponse.status()).toBe(200);
  expect(listResponse.headers()['content-type']).toContain('application/json');
  expect(listDuration).toBeLessThan(3_000);

  const listBody = await listResponse.json();
  expect(Array.isArray(listBody.users)).toBe(true);
  expect(listBody.users.length).toBeGreaterThan(0);

  const userId = listBody.users[0].id;
  expect(typeof userId).toBe('number');

  const detailStartedAt = Date.now();
  const detailResponse = await request.get(`/users/${userId}`);
  const detailDuration = Date.now() - detailStartedAt;

  expect(detailResponse.status()).toBe(200);
  expect(detailResponse.headers()['content-type']).toContain('application/json');
  expect(detailDuration).toBeLessThan(3_000);

  const user = await detailResponse.json();
  expect(user.id).toBe(userId);
  expect(typeof user.firstName).toBe('string');
  expect(user.firstName.length).toBeGreaterThan(0);
});
