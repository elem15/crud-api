const data = require("../../data/index.js");
const failRes = require("../responses/fail-res.js");
const uuidCheck = require("../verifications/uuid-check.js");
const failServer = require("../responses/fail-server.js");

module.exports = (res, path) => {
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