import users from "../../data/users.js";
import failRes from "../responses/fail-res.js";

export default (req, res, path) => {
  if (path.startsWith('/api/users/')) {
    const arrOfDir = path.split('/');
    const num = arrOfDir[arrOfDir.length - 1];
    const user = users.find(user => user.id == num);
    if (user) {
      req.on('data', (data) => {
        const newUser = JSON.parse(data);
        if (typeof newUser.username === 'string' && typeof newUser.age === 'number' && Array.isArray(newUser.hobbies)) {
          users.map((user, idx) => {
            if (user.id == num) {
              users[idx].username = newUser.username;
              users[idx].age = newUser.age;
              users[idx].hobbies = newUser.hobbies;
            }
          })
          res.writeHead(201, { 'Content-Type': 'application/json' });
          res.end();
        } else {
          failRes(res, 400, 'type of users');
        }
      })
    } else {
      failRes(res, 404, 'URL');
    }
  }
}
