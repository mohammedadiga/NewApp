"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
require("dotenv/config");
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
/* Middleware */
app.use((0, helmet_1.default)());
// cors => cross origin resource sharing
app.use((0, cors_1.default)({ origin: process.env.ORIGIN }));
app.use(express_1.default.json({ limit: "50mb" }));
/* Routes */
// testing api
app.get('/test', (req, res, next) => {
    res.status(200).json({
        success: true,
        message: 'API is working fine!'
    });
});
// all api
app.all('*', (req, res, next) => {
    // const err = new Error(`Route ${req.originalUrl} not found`) as any;`
    // err.statusCode = 404;
    // next(err);
    res.status(404).json({
        success: false,
        message: `Route ${req.originalUrl} not found`
    });
});
// Start server
app.listen(process.env.PORT, () => {
    console.log(`Server is connected with port ${process.env.PORT}`);
});
