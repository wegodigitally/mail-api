"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const allowedOrigins_1 = __importDefault(require("./allowedOrigins"));
const loggers_1 = __importDefault(require("../loggers"));
const corsOptions = {
    origin: (origin, callback) => {
        if (allowedOrigins_1.default.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        }
        else {
            loggers_1.default.error({
                status: 500,
                message: `Not allowed by CORS`,
            });
            callback(new Error("Not allowed by CORS"), false);
        }
    },
    credentials: true,
    optionsSuccessStatus: 200,
};
exports.default = corsOptions;
//# sourceMappingURL=corsOptions.js.map