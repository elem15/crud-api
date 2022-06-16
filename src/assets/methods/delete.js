import data from "../../data/index.js";
import failRes from "../responses/fail-res.js";
import uuidCheck from "../verifications/uuid-check.js";
import failServer from "../responses/fail-server.js";

export default (res, path) => {
  try {
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
        data.users = data.users.filter(user => user.id !== num);
        res.writeHead(204);
        res.end();
      } else {
        failRes(res, 404, 'user');
      }
    } else {
      failRes(res, 404, 'URL');
    }
  } catch {
    throw new Error();
  }
}

