import http from 'http';
import dotenv from 'dotenv';
dotenv.config();

const port = process.env.PORT || 3300;

const server = http.createServer((req, res) => {
  const { method, url } = req;
  const path = url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
  if (method === 'GET') {
    if (path === '/api/users') {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(['arrUsersAlls', process.env.NODE_ENV]));
    }
  }
});

server.listen(port, () => console.log(`server started on port ${port}; ` +
  'press Ctrl-C to terminate....'));  