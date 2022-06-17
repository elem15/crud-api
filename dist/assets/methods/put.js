"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../../data/index"));
const fail_res_1 = __importDefault(require("../responses/fail-res"));
const user_check_1 = __importDefault(require("../verifications/user-check"));
const uuid_check_1 = __importDefault(require("../verifications/uuid-check"));
const fail_server_1 = __importDefault(require("../responses/fail-server"));
exports.default = (req, res, path) => {
    if (path.startsWith('/api/users/')) {
        const arrOfDir = path.split('/');
        const num = arrOfDir[arrOfDir.length - 1];
        if ((0, uuid_check_1.default)(num)) {
            (0, fail_res_1.default)(res, 400, 'type of id');
            return;
        }
        let user;
        try {
            user = index_1.default.users.find(user => user.id == num);
        }
        catch (_a) {
            (0, fail_server_1.default)(res);
            return;
        }
        if (user) {
            req.on('data', (body) => {
                const newUser = JSON.parse(body);
                if ((0, user_check_1.default)(newUser)) {
                    index_1.default.users.map((user, idx) => {
                        if (user.id == num) {
                            index_1.default.users[idx] = Object.assign(Object.assign({}, user), newUser);
                        }
                    });
                    res.writeHead(201, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify(res.statusCode));
                }
                else {
                    (0, fail_res_1.default)(res, 400, 'type of users');
                }
            });
        }
        else {
            (0, fail_res_1.default)(res, 404, 'user');
        }
    }
    else {
        (0, fail_res_1.default)(res, 404, 'URL');
    }
};
