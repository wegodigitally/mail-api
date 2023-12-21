"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveContactMessage = exports.sendContactEmail = exports.mailModel = exports.transporter = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const utils_1 = require("../utils");
const loggers_1 = __importDefault(require("../loggers"));
const mail_model_1 = __importDefault(require("../models/mail.model"));
const db_config_1 = __importDefault(require("../config/db.config"));
const mongoose_1 = __importDefault(require("mongoose"));
exports.transporter = nodemailer_1.default.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: utils_1.MY_MAILID,
        pass: utils_1.MAIL_PASSWORD,
    },
});
const mailModel = (mailDetails) => {
    const { name, email, message, designation, companyname, service, subject, bodyOfTheMail } = mailDetails;
    return { name, email, message, designation, companyname, service, subject, bodyOfTheMail };
};
exports.mailModel = mailModel;
const sendContactEmail = async (mailDetails) => {
    const mailOptions = {
        from: utils_1.MY_MAILID,
        to: utils_1.MY_MAILID,
        subject: mailDetails.subject,
        text: `NAME: ${mailDetails.name}\n\nDesignation: ${mailDetails.designation}\n\nCompanyname: ${mailDetails.companyname}\n\nService: ${mailDetails.service}\n\nMail sent by ${mailDetails.email}\n\n${mailDetails.bodyOfTheMail}`,
    };
    await exports.transporter.sendMail(mailOptions);
    loggers_1.default.info(`Mail sent!`);
};
exports.sendContactEmail = sendContactEmail;
const saveContactMessage = async (contactData) => {
    try {
        await (0, db_config_1.default)();
        const { name, email, message, designation, companyname, service } = contactData;
        const newContactMessage = new mail_model_1.default({ name, email, message, designation, companyname, service });
        await newContactMessage.save();
        loggers_1.default.info(`Data saved to the database`);
        await mongoose_1.default.connection.close();
        loggers_1.default.info(`Database connection closed`);
    }
    catch (error) {
        await mongoose_1.default.connection.close();
    }
};
exports.saveContactMessage = saveContactMessage;
//# sourceMappingURL=contact.service.js.map