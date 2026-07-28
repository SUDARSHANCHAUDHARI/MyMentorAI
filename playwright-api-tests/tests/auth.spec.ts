import { expect, test } from '@playwright/test';

// Public practice credentials published in the DummyJSON auth documentation.
const demoUser = {
  username: 'emilys',
  password: 'emilyspass',
};

test('logs in and gets the authenticated user', async ({ request }) => {
  const loginStartedAt = Date.now();
  const loginResponse = await request.post('/auth/login', {
    data: {
      ...demoUser,
      expiresInMins: 30,
    },
  });
  const loginDuration = Date.now() - loginStartedAt;

  expect(loginResponse.status()).toBe(200);
  expect(loginResponse.headers()['content-type']).toContain('application/json');
  expect(loginDuration).toBeLessThan(3_000);

  const login = await loginResponse.json();
  expect(login.username).toBe(demoUser.username);
  expect(typeof login.accessToken).toBe('string');
  expect(login.accessToken.length).toBeGreaterThan(0);

  const profileStartedAt = Date.now();
  const profileResponse = await request.get('/auth/me', {
    headers: {
      Authorization: `Bearer ${login.accessToken}`,
    },
  });
  const profileDuration = Date.now() - profileStartedAt;

  expect(profileResponse.status()).toBe(200);
  expect(profileResponse.headers()['content-type']).toContain('application/json');
  expect(profileDuration).toBeLessThan(3_000);

  const profile = await profileResponse.json();
  expect(profile.id).toBe(login.id);
  expect(profile.username).toBe(demoUser.username);
  expect(typeof profile.email).toBe('string');
  expect(profile.email).toContain('@');
});

test('rejects an invalid password without returning a token', async ({ request }) => {
  const loginStartedAt = Date.now();
  const loginResponse = await request.post('/auth/login', {
    data: {
      username: demoUser.username,
      password: 'definitely-wrong',
    },
  });
  const loginDuration = Date.now() - loginStartedAt;

  expect(loginResponse.status()).toBe(400);
  expect(loginResponse.headers()['content-type']).toContain('application/json');
  expect(loginDuration).toBeLessThan(3_000);

  const error = await loginResponse.json();
  expect(typeof error.message).toBe('string');
  expect(error.message).toBe('Invalid credentials');
  expect(error).not.toHaveProperty('accessToken');
});
