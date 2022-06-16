"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const port = process.env.PORT || 3300;
const server = http_1.default.createServer((req, res) => {
    const { method, url } = req;
    const path = url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
    if (method === 'GET') {
        if (path === '/api/users') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(['arrUsersAlls', process.env.NODE_ENV]));
        }
    }
});
server.listen(port, () => console.log(`server started on port ${port}; ` +
    'press Ctrl-C to terminate....'));
