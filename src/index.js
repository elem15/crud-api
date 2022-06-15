import http from 'http';
import { v1 as uuid } from "uuid";
import users from './data/users.js'

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  const { method, url } = req;
  console.log(method)
  const path = url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
  console.log(path)
  if (method === 'GET') {
    if (path === '/api/users') {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(users));
    } else if (path.startsWith('/api/users/')) {
      const arrOfDir = path.split('/');
      const num = arrOfDir[arrOfDir.length - 1];
      const user = users.find(user => user.id == num)
      if (user) {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(user));
      } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end('Sorry, this user does not exist');
      }
    } else {
      res.writeHead(404, { 'content-type': 'application/json' });
      res.end('Sorry, this URL does not exist');
    }
  } else if (method === 'POST') {
    if (path === '/api/users') {
      let body = '';    
      req.on('data', (data) => {
        body += data;
      });      
      req.on('end', () => {
        console.log(body)
        const user = JSON.parse(body);
        console.log(user)
        if(typeof user.username === 'string' && typeof user.age === 'number' && Array.isArray(user.hobbies)) {
          user.id = uuid();
          users.push(user);
          res.writeHead(201, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify(res.statusCode));
        } else {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          res.end(`Code: ${res.statusCode}. User data is not correct.`);
        }
      });      
    }
  }
});

server.listen(port, () => console.log(`server started on port ${port}; ` +
  'press Ctrl-C to terminate....'));