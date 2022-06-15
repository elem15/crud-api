import http from 'http';
import users from './data/users.js'
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  const { method, url } = req;
  const path = url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
  console.log(path)
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
});

server.listen(port, () => console.log(`server started on port ${port}; ` +
  'press Ctrl-C to terminate....'));