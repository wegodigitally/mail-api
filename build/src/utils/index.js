"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DATABASE_URI = exports.MAIL_PASSWORD = exports.MY_MAILID = exports.PORT = exports.NODE_ENV = void 0;
require("dotenv").config();
exports.NODE_ENV = process.env.NODE_ENV;
exports.PORT = process.env.PORT;
exports.MY_MAILID = process.env.MY_MAILID;
exports.MAIL_PASSWORD = process.env.MAIL_PASSWORD;
exports.DATABASE_URI = process.env.DATABASE_URI;
//# sourceMappingURL=index.js.map