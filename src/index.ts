import { createServer, IncomingMessage, ServerResponse } from 'http';
import dotenv from 'dotenv';
import get from './assets/methods/get';
import post from './assets/methods/post';
import put from './assets/methods/put';
import remove from './assets/methods/delete';
import failRes from './assets/responses/fail-res';
import failServer from './assets/responses/fail-server';
dotenv.config();

const port = process.env.PORT || 3000;

export const server = createServer((req: IncomingMessage, res: ServerResponse) => {
  const url = req?.url || '';
  const method = req?.method;
  const path: string = url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
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

server.listen(port, () => console.log(`server started on port ${port}; \n` 
+ `process in ${process.env.NODE_ENV} mode; \n`
+  'press Ctrl-C to terminate...'));  