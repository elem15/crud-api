const data = require( "../../data/index.js");
const failRes = require( "../responses/fail-res.js");
const uuidCheck = require( "../verifications/uuid-check.js");
const failServer = require( "../responses/fail-server.js");

module.exports = (res, path) => {
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

