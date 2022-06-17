"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (res, code, item) => {
    res.writeHead(code, { 'content-type': 'text/plain' });
    res.end(`Sorry, this ${item} does not exist`);
};
