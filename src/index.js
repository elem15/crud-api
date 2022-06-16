import http from 'http';
import dotenv from 'dotenv';
import get from './assets/methods/get.js';
import post from './assets/methods/post.js';
import put from './assets/methods/put.js';
import remove from './assets/methods/delete.js';
import failRes from './assets/responses/fail-res.js';
import failServer from './assets/responses/fail-server.js';
dotenv.config();

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
  } else if (method === 'DELETE') {
    remove(res, path);
  } else {
    failRes(res, 404, 'method');
  }
  server.on('error', () => {
    failServer(res);
  })
});

server.listen(port, () => console.log(`server started on port ${port}; ` +
  'press Ctrl-C to terminate....'));  