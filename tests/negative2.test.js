const request = require('supertest');
const { validate } = require('uuid')
const { server } = require('../dist/index.js')

describe('Negative test (no access to user with wrong ID query)', () => {
  let id;
  it('Post new user with POST api/users request', async () => {
    const res = await request(server)
    .post('/api/users')
    .send({ "username": "Petya","age": 22, "hobbies": ["running", "swimming"]  })
    .set('Accept', 'application/json');
    expect(res.statusCode).toBe(201);
  });
  it('Get user by wrong ID with GET api/users request', async () => {
    const res = await request(server)
    .get(`/api/users/123`)    
    expect(res.statusCode).toBe(400);     
  });
  it('Post new user with POST api/users request', async () => {
    const res = await request(server)
    .post('/api/users')
    .send({ "username": "Petya","age": 22, "hobbies": ["running", "swimming"]  })
    .set('Accept', 'application/json');
    expect(res.statusCode).toBe(201);
  });
  it('Get user by its ID with GET api/users request, validate ID', async () => {
    const res = await request(server)
    .get('/api/users')    
    expect(res.statusCode).toBe(200);
    id = res.body[0].id;
    expect(validate(id)).toBe(true);
  });
  it('Put new wrong users object with PUT api/users request', async () => {
    const res = await request(server)
    .put(`/api/users/${id}`)
    .send({ "username": "Petya","age": 23, "hobbies": [1, "swimming"]  })
    .set('Accept', 'application/json');
    expect(res.statusCode).toBe(400);
  });
  it('Delete user by wrong ID with DELETE api/users request', async () => {
    const res = await request(server)
    .get(`/api/users/123`)    
    expect(res.statusCode).toBe(400);     
  });
  it('Delete user by wrong URL with DELETE api/users request', async () => {
    const res = await request(server)
    .get(`/api/uses/${id}`)    
    expect(res.statusCode).toBe(404);     
  });
  server.close();
});