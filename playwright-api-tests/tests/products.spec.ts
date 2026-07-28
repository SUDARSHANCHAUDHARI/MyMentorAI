import { expect, test } from '@playwright/test';

test('exercises simulated product create, read, update, and delete operations', async ({ request }) => {
  const createStartedAt = Date.now();
  const createResponse = await request.post('/products/add', {
    data: {
      title: 'MyMentorAI Test Product',
      price: 19.99,
      category: 'learning',
    },
  });
  const createDuration = Date.now() - createStartedAt;

  expect(createResponse.status()).toBe(201);
  expect(createResponse.headers()['content-type']).toContain('application/json');
  expect(createDuration).toBeLessThan(3_000);

  const createdProduct = await createResponse.json();
  expect(typeof createdProduct.id).toBe('number');
  expect(createdProduct.title).toBe('MyMentorAI Test Product');
  expect(createdProduct.price).toBe(19.99);

  // DummyJSON simulates mutations without persisting them, so the remaining
  // operations use a stable product and chain its returned ID.
  const readStartedAt = Date.now();
  const readResponse = await request.get('/products/1');
  const readDuration = Date.now() - readStartedAt;

  expect(readResponse.status()).toBe(200);
  expect(readResponse.headers()['content-type']).toContain('application/json');
  expect(readDuration).toBeLessThan(3_000);

  const existingProduct = await readResponse.json();
  expect(existingProduct.id).toBe(1);
  expect(typeof existingProduct.title).toBe('string');
  expect(typeof existingProduct.price).toBe('number');

  const updateStartedAt = Date.now();
  const updateResponse = await request.patch(`/products/${existingProduct.id}`, {
    data: {
      title: 'MyMentorAI Updated Product',
    },
  });
  const updateDuration = Date.now() - updateStartedAt;

  expect(updateResponse.status()).toBe(200);
  expect(updateResponse.headers()['content-type']).toContain('application/json');
  expect(updateDuration).toBeLessThan(3_000);

  const updatedProduct = await updateResponse.json();
  expect(updatedProduct.id).toBe(existingProduct.id);
  expect(updatedProduct.title).toBe('MyMentorAI Updated Product');

  const deleteStartedAt = Date.now();
  const deleteResponse = await request.delete(`/products/${existingProduct.id}`);
  const deleteDuration = Date.now() - deleteStartedAt;

  expect(deleteResponse.status()).toBe(200);
  expect(deleteResponse.headers()['content-type']).toContain('application/json');
  expect(deleteDuration).toBeLessThan(3_000);

  const deletedProduct = await deleteResponse.json();
  expect(deletedProduct.id).toBe(existingProduct.id);
  expect(deletedProduct.isDeleted).toBe(true);
  expect(Number.isNaN(Date.parse(deletedProduct.deletedOn))).toBe(false);
});
