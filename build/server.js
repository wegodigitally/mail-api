"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const loggers_1 = __importDefault(require("./src/loggers"));
const app_1 = __importDefault(require("./src/app"));
const utils_1 = require("./src/utils");
app_1.default.listen(utils_1.PORT || 8002, () => {
    loggers_1.default.info(`Server running on port ${utils_1.PORT}`);
});
//# sourceMappingURL=server.js.map