const { v1: uuid } = require ("uuid");

const data = require ("../../data/index.js");
const failRes = require ("../responses/fail-res.js");
const userCheck = require ("../verifications/user-check.js");
const failServer = require ("../responses/fail-server.js");

module.exports = (req, res, path) => {
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