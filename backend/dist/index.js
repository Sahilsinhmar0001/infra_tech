"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
const dotenv_1 = __importDefault(require("dotenv"));
const client_1 = require("@prisma/client");
const pg_1 = require("pg");
const adapter_pg_1 = require("@prisma/adapter-pg");
dotenv_1.default.config();
const app = (0, express_1.default)();
const connectionString = process.env.DATABASE_URL || "postgresql://postgres:postgres@localhost:5432/infratech?schema=public";
const pool = new pg_1.Pool({ connectionString });
const adapter = new adapter_pg_1.PrismaPg(pool);
const prisma = new client_1.PrismaClient({ adapter });
const port = process.env.PORT || 5000;
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use((0, morgan_1.default)('dev'));
const nodemailer_1 = __importDefault(require("nodemailer"));
// Nodemailer transporter setup
const transporter = nodemailer_1.default.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER || 'sahilsinhmar981@gmail.com',
        pass: process.env.EMAIL_PASS || 'your_app_password_here', // Requires a Google App Password
    },
});
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: 'API is running' });
});
// POST endpoint for contact requests
app.post('/api/contact', async (req, res) => {
    try {
        const { name, email, company, phone, message } = req.body;
        // Save to database
        const contactMessage = await prisma.contactMessage.create({
            data: { name, email, company, phone, message },
        });
        // Send email
        const mailOptions = {
            from: process.env.EMAIL_USER || 'sahilsinhmar981@gmail.com',
            to: 'sahilsinhmar981@gmail.com',
            subject: `New Quotation Request from ${name}`,
            text: `You have received a new quotation request:\n\nName: ${name}\nEmail: ${email}\nCompany: ${company || 'N/A'}\nPhone: ${phone || 'N/A'}\n\nMessage:\n${message}`,
        };
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Error sending email:', error);
                // We do not fail the request if the email fails, as the DB save was successful
            }
            else {
                console.log('Email sent: ' + info.response);
            }
        });
        res.status(201).json({ success: true, message: 'Request submitted successfully' });
    }
    catch (error) {
        console.error('Contact submission error:', error);
        res.status(500).json({ error: 'Failed to submit request' });
    }
});
// GET endpoint to retrieve all messages for the Admin page
app.get('/api/contact', async (req, res) => {
    try {
        const messages = await prisma.contactMessage.findMany({
            orderBy: { createdAt: 'desc' },
        });
        res.json(messages);
    }
    catch (error) {
        console.error('Error fetching messages:', error);
        res.status(500).json({ error: 'Failed to fetch messages' });
    }
});
// Basic Error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
