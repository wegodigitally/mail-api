"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const utils_1 = require("../utils");
const loggers_1 = __importDefault(require("../loggers"));
const connectDB = async () => {
    try {
        await mongoose_1.default.connect(utils_1.DATABASE_URI);
        loggers_1.default.info(`db connected`);
    }
    catch (error) {
        loggers_1.default.error(`${error}`);
    }
};
exports.default = connectDB;
//# sourceMappingURL=db.config.js.map