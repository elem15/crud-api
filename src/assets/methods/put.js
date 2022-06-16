import data from "../../data/index.js";
import failRes from "../responses/fail-res.js";
import userCheck from "../verifications/user-check.js";

export default (req, res, path) => {
  if (path.startsWith('/api/users/')) {
    const arrOfDir = path.split('/');
    const num = arrOfDir[arrOfDir.length - 1];
    const user = data.users.find(user => user.id == num);
    if (user) {
      req.on('data', (body) => {
        const newUser = JSON.parse(body);
        if (userCheck(newUser)) {
          data.users.map((user, idx) => {
            if (user.id == num) {
              data.users[idx] = {...user, ...newUser};       
            }
          })
          res.writeHead(201, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify(res.statusCode));
        } else {
          failRes(res, 400, 'type of users');
        }
      })
    } else {
      failRes(res, 404, 'URL');
    }
  }
}
