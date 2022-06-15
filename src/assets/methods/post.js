import users from "../../data/users.js";
import failRes from "../responses/fail-res.js";
import { v1 as uuid } from "uuid";

export default (req, res, path) => {
  if (path === '/api/users') {
    req.on('data', (data) => {
      const user = JSON.parse(data);
      if (typeof user.username === 'string' && typeof user.age === 'number' && Array.isArray(user.hobbies)) {
        user.id = uuid();
        users.push(user);
        res.writeHead(201, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(res.statusCode));
      } else {
        failRes(res, 400, 'type of users');
      }
    });
  } else {
    failRes(res, 404, 'user');
  }
}