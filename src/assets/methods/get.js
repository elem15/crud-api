import users from "../../data/users.js";
import failRes from "../responses/fail-res.js";

export default (res, path) => {
  if (path === '/api/users') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(users));
  } else if (path.startsWith('/api/users/')) {
    const arrOfDir = path.split('/');
    const num = arrOfDir[arrOfDir.length - 1];
    const user = users.find(user => user.id == num)
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