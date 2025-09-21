import request from 'supertest';
import { describe, expect, it } from 'vitest';

import { createApp } from '../server.js';

describe('Auth routes', () => {
  const app = createApp();

  it('returns a mock token on login', async () => {
    const response = await request(app).post('/api/auth/login').send({
      email: 'demo@example.com',
      password: 'password123'
    });

    expect(response.status).toBe(200);
    expect(response.body.data).toHaveProperty('token');
  });
});
