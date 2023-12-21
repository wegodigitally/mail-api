"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactPost = void 0;
const loggers_1 = __importDefault(require("../loggers"));
const contact_service_1 = require("../services/contact.service");
const contactPost = async (req, res) => {
    try {
        const { name, email, message, designation, companyname, service } = req.body;
        console.log({ name, email, message, designation, companyname, service });
        const mailDetails = {
            name, email, message, designation, companyname, service,
            subject: "Message",
            bodyOfTheMail: message,
        };
        await (0, contact_service_1.sendContactEmail)(mailDetails);
        await (0, contact_service_1.saveContactMessage)({ name, email, message, designation, companyname, service });
        return res.status(200).json({ message: "Email sent successfully" });
    }
    catch (error) {
        loggers_1.default.error({
            status: 500,
            message: `${error instanceof Error ? error.message : error} - Email sending failed`,
        });
        return res.status(500).json({ message: "Email sending failed" });
    }
};
exports.contactPost = contactPost;
//# sourceMappingURL=post.controller.js.map