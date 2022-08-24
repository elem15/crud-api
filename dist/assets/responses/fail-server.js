"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (res) => {
    res.writeHead(500);
    res.end('Sorry, an internal server error has occurred');
};
