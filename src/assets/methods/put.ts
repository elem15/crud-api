import { IncomingMessage, ServerResponse } from 'http';
import data from "../../data/index";
import failRes from "../responses/fail-res";
import userCheck from "../verifications/user-check";
import uuidCheck from "../verifications/uuid-check";
import failServer from "../responses/fail-server";

export default (req: IncomingMessage, res: ServerResponse, path: string): void => {
  if (path.startsWith('/api/users/')) {
    const arrOfDir = path.split('/');
    const num = arrOfDir[arrOfDir.length - 1];
    if (uuidCheck(num)) {
      failRes(res, 400, 'type of id');
      return;
    }
    let user;
    try {
      user = data.users.find(user => user.id == num);
    } catch {
      failServer(res);
      return;
    }
    if (user) {
      req.on('data', (body) => {
        const newUser = JSON.parse(body);
        if (userCheck(newUser)) {
          data.users.map((user, idx) => {
            if (user.id == num) {
              data.users[idx] = { ...user, ...newUser };
            }
          })
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify(res.statusCode));
        } else {
          failRes(res, 400, 'type of users');
        }
      })
    } else {
      failRes(res, 404, 'user');
    }
  } else {
    failRes(res, 404, 'URL');
  }
}
