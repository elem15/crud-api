const data = require("../../data/index.js");
const failRes = require("../responses/fail-res.js");
const userCheck = require("../verifications/user-check.js");
const uuidCheck = require("../verifications/uuid-check.js");
const failServer = require("../responses/fail-server.js");

module.exports = (req, res, path) => {
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
          res.writeHead(201, { 'Content-Type': 'application/json' });
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
