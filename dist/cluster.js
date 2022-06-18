"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cluster_1 = __importDefault(require("cluster"));
const os_1 = require("os");
const process_1 = __importDefault(require("process"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const port = process_1.default.env.PORT || 3300;
const numCPUs = (0, os_1.cpus)().length;
const process_2 = require("process");
void (() => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    if (cluster_1.default.isPrimary) {
        const numOfCpus = (0, os_1.cpus)().length;
        console.log(`Master pid: ${process_2.pid}`);
        console.log(`Starting ${numOfCpus} forks`);
        for (let i = 0; i < numOfCpus; i++)
            cluster_1.default.fork();
    }
    else {
        const id = (_a = cluster_1.default.worker) === null || _a === void 0 ? void 0 : _a.id;
        yield Promise.resolve().then(() => __importStar(require('./index')));
        console.log(`Worker: ${id}, pid: ${process_2.pid}`);
    }
}))();
// if (cluster.isPrimary) {
//   console.log(`Primary ${process.pid} is running`);
//   // Fork workers.
//   for (let i = 0; i < numCPUs; i++) {
//     cluster.fork();
//   }
//   cluster.on('exit', (worker, code, signal) => {
//     console.log(`worker ${worker.process.pid} died`);
//   });
// } else {
//   // Workers can share any TCP connection
//   // In this case it is an HTTP server
//   server.listen(8000);
//   console.log(`Worker ${process.pid} started`);
// }
