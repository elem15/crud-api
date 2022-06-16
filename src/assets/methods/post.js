import { v1 as uuid } from "uuid";

import data from "../../data/index.js";
import failRes from "../responses/fail-res.js";
import userCheck from "../verifications/user-check.js";
import failServer from "../responses/fail-server.js";

export default (req, res, path) => {
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