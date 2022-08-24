"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const index_1 = __importDefault(require("../../data/index"));
const fail_res_1 = __importDefault(require("../responses/fail-res"));
const user_check_1 = __importDefault(require("../verifications/user-check"));
const fail_server_1 = __importDefault(require("../responses/fail-server"));
exports.default = (req, res, path) => {
    if (path === '/api/users') {
        req.on('data', (body) => {
            const user = JSON.parse(body);
            if ((0, user_check_1.default)(user)) {
                try {
                    user.id = (0, uuid_1.v1)();
                    index_1.default.users.push(user);
                    res.writeHead(201, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify(res.statusCode));
                }
                catch (_a) {
                    (0, fail_server_1.default)(res);
                }
            }
            else {
                (0, fail_res_1.default)(res, 400, 'type of user');
            }
        });
    }
    else {
        (0, fail_res_1.default)(res, 404, 'URL');
    }
};
