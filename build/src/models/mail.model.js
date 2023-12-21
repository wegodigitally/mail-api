"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const mailSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true, uppercase: true },
    email: { type: String, required: true, lowercase: true },
    message: { type: String, required: true },
    number: { type: String },
    designation: { type: String },
    companyname: { type: String },
    service: { type: String },
});
const modelContact = mongoose_1.default.model("Mail_Contacts", mailSchema);
exports.default = modelContact;
//# sourceMappingURL=mail.model.js.map