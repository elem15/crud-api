import data from "../../data/index.js";
import failRes from "../responses/fail-res.js";
import uuidCheck from "../verifications/uuid-check.js";
import failServer from "../responses/fail-server.js";

export default (res, path) => {
  if (path === '/api/users') {
    try {
      const arrOfUsers = data.users;
      if (!arrOfUsers) throw new Error();
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(arrOfUsers));
    } catch {
      failServer(res);
      return;
    }
  } else if (path.startsWith('/api/users/')) {
    const arrOfDir = path.split('/');
    const num = arrOfDir[arrOfDir.length - 1];
    if (uuidCheck(num)) {
      failRes(res, 400, 'type of id');
      return;
    }
    let user;
    try {
      user = data.users.find(user => user.id == num)
    } catch {
      failServer(res);
      return;
    }
    if (user) {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(user));
    } else {
      failRes(res, 404, 'user');
    }
  } else {
    failRes(res, 404, 'URL');
  }
};