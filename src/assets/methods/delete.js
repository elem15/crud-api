import data from "../../data/index.js";
import failRes from "../responses/fail-res.js";

export default (res, path) => {
  if (path.startsWith('/api/users/')) {
    const arrOfDir = path.split('/');
    const num = arrOfDir[arrOfDir.length - 1];
    const user = data.users.find(user => user.id == num);
    if (user) {
      data.users = data.users.filter(user => user.id !== num);
      res.writeHead(204, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(res.statusCode));
    } else {
      failRes(res, 404, 'user');
    }
  } else {
    failRes(res, 404, 'URL');
  }
}

