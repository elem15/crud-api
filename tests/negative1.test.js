const request = require('supertest');
const { server } = require('../dist/index.js')

describe('Negative test (user can not be created)', () => {
  it('Get empty records with PATCH api/users request, expect 404 code', async () => {
    const res = await request(server)
    .patch('/api/users')
    expect(res.statusCode).toBe(404);
  });
  it('Get empty records with GET wrong request, expect 404 code', async () => {
    const res = await request(server)
    .patch('/api/uses')
    expect(res.statusCode).toBe(404);
  });
  it('Post new wrong users object with POST  api/users request', async () => {
    const res = await request(server)
    .post('/api/users')
    .send({ "username": "Petya","age": "22", "hobbies": ["running", "swimming"]  })
    .set('Accept', 'application/json');
    expect(res.statusCode).toBe(400);
  });  
  it('Get empty records with GET api/users request', async () => {
    const res = await request(server)
    .get('/api/users');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([]);
  });
  server.close();
});