"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
const dotenv_1 = __importDefault(require("dotenv"));
const get_1 = __importDefault(require("./assets/methods/get"));
const post_1 = __importDefault(require("./assets/methods/post"));
const put_1 = __importDefault(require("./assets/methods/put"));
const delete_1 = __importDefault(require("./assets/methods/delete"));
const fail_res_1 = __importDefault(require("./assets/responses/fail-res"));
const fail_server_1 = __importDefault(require("./assets/responses/fail-server"));
dotenv_1.default.config();
const port = process.env.PORT || 3300;
const server = (0, http_1.createServer)((req, res) => {
    const url = (req === null || req === void 0 ? void 0 : req.url) || '';
    const method = req === null || req === void 0 ? void 0 : req.method;
    const path = url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
    if (method === 'GET') {
        (0, get_1.default)(res, path);
    }
    else if (method === 'POST') {
        (0, post_1.default)(req, res, path);
    }
    else if (method === 'PUT') {
        (0, put_1.default)(req, res, path);
    }
    else if (method === 'DELETE') {
        (0, delete_1.default)(res, path);
    }
    else {
        (0, fail_res_1.default)(res, 404, 'method');
    }
    server.on('error', () => {
        (0, fail_server_1.default)(res);
    });
});
server.listen(port, () => console.log(`server started on port ${port}; \n`
    + `process in ${process.env.NODE_ENV} mode; \n`
    + 'press Ctrl-C to terminate....'));
