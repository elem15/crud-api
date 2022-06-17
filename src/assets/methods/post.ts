import { v1 as uuid } from "uuid";
import { IncomingMessage, ServerResponse } from 'http';
import data from "../../data/index";
import failRes from "../responses/fail-res";
import userCheck from "../verifications/user-check";
import failServer from "../responses/fail-server";

export default (req: IncomingMessage, res: ServerResponse, path: string): void => {
  if (path === '/api/users') {
    req.on('data', (body) => {
      const user = JSON.parse(body);
      if (userCheck(user)) {
        try {
          user.id = uuid();
          data.users.push(user);
          res.writeHead(201, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify(res.statusCode));
        } catch {
          failServer(res);
        }
      } else {
        failRes(res, 400, 'type of user');
      }
    });
  } else {
    failRes(res, 404, 'URL');
  }
}