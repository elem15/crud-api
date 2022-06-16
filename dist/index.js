"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const dotenv_1 = __importDefault(require("dotenv"));
const get_js_1 = __importDefault(require("./assets/methods/get.js"));
const post_js_1 = __importDefault(require("./assets/methods/post.js"));
const put_js_1 = __importDefault(require("./assets/methods/put.js"));
const delete_js_1 = __importDefault(require("./assets/methods/delete.js"));
const fail_res_js_1 = __importDefault(require("./assets/responses/fail-res.js"));
const fail_server_js_1 = __importDefault(require("./assets/responses/fail-server.js"));
dotenv_1.default.config();
const port = process.env.PORT || 3300;
const server = http_1.default.createServer((req, res) => {
    const { method, url } = req;
    const path = url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
    if (method === 'GET') {
        (0, get_js_1.default)(res, path);
    }
    else if (method === 'POST') {
        (0, post_js_1.default)(req, res, path);
    }
    else if (method === 'PUT') {
        (0, put_js_1.default)(req, res, path);
    }
    else if (method === 'DELETE') {
        (0, delete_js_1.default)(res, path);
    }
    else {
        (0, fail_res_js_1.default)(res, 404, 'method');
    }
    server.on('error', () => {
        (0, fail_server_js_1.default)(res);
    });
});
server.listen(port, () => console.log(`server started on port ${port}; ` +
    'press Ctrl-C to terminate....'));
