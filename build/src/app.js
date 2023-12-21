"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
const post_contact_1 = __importDefault(require("./routes/post.contact"));
const loggers_1 = __importDefault(require("./loggers"));
const app = (0, express_1.default)();
const server = http_1.default.createServer(app);
// app.use(cors(corsOptions));
app.use((0, cors_1.default)());
app.use((0, helmet_1.default)());
app.use(express_1.default.json());
app.use("/api/contact", post_contact_1.default);
app.use((req, res, next) => {
    loggers_1.default.info(`${res.statusCode} ${req.method} ${req.url} ${req.ip}`);
    next();
});
app.use((error, req, res, _) => {
    loggers_1.default.error(`${500}-${req.originalUrl}-${req.method}-${error}-${req.ip}`);
    res.status(500).send("Internal Server Error");
});
app.all("*", (req, res) => {
    loggers_1.default.info(`${res.statusCode} ${req.method} ${req.url} ${req.ip}`);
    return res.status(404).json({ message: "404 Not Found" });
});
exports.default = server;
//# sourceMappingURL=app.js.map