const request = require('supertest');
const { validate } = require('uuid')
const assert = require('assert');
const { server } = require('../dist/index.js')

describe('Positive test', () => {
  let id;
  it('Get empty records with GET api/users request', async () => {
    const res = await request(server)
    .get('/api/users')
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([]);
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
  it('Get user by its ID with GET api/users request', async () => {
    const res = await request(server)
    .get(`/api/users/${id}`)    
    expect(res.statusCode).toBe(200);    
    expect(res.body.username).toBe("Petya");
    expect(res.body.age).toBe(22);
    assert.deepEqual(res.body.hobbies, ["running", "swimming"]);
    expect(res.body.id).toBe(id);
  });
  it('Put user by its ID with PUT api/users request', async () => {
    const res = await request(server)
    .put(`/api/users/${id}`)    
    .send({ "username": "Vanya","age": 23, "hobbies": ["running", "swimming", "driving"]  })
    .set('Accept', 'application/json');
    expect(res.statusCode).toBe(200);
  });
  it('Get updated user by its ID with GET api/users request', async () => {
    const res = await request(server)
    .get(`/api/users/${id}`)    
    expect(res.statusCode).toBe(200);
    expect(res.body.username).toBe("Vanya");
    expect(res.body.age).toBe(23);
    assert.deepEqual(res.body.hobbies, ["running", "swimming", "driving"]);
    expect(res.body.id).toBe(id); 
  });
  it('Delete user by its ID with GET api/users request', async () => {
    const res = await request(server)
    .delete(`/api/users/${id}`);
    expect(res.statusCode).toBe(204);
  });
  it('Get empty records with GET api/users request', async () => {
    const res = await request(server)
    .get('/api/users');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([]);
  });
  server.close();
});