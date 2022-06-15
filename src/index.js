import http from 'http';

import get from './assets/methods/get.js';
import post from './assets/methods/post.js';
import put from './assets/methods/put.js';
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  const { method, url } = req;
  const path = url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
  if (method === 'GET') {
    get(res, path);
  } else if (method === 'POST') {
    post(req, res, path);
  } else if (method === 'PUT') {
    put(req, res, path);
  }
});

server.listen(port, () => console.log(`server started on port ${port}; ` +
  'press Ctrl-C to terminate....'));