"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const post_controller_1 = require("../controllers/post.controller");
const routes = express_1.default.Router();
routes.post("/", post_controller_1.contactPost);
exports.default = routes;
//# sourceMappingURL=post.contact.js.map