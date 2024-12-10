import express, { NextFunction, Request, Response } from 'express';

import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
import 'dotenv/config';

// middleware Hokies
import { ErrorMiddleware } from './middlewares/error';

const app = express();
const port = process.env.PORT || 3000;

/* Server Security */

app.use(helmet());
app.use(cors( {origin: process.env.ORIGIN} ));
app.use(express.json({ limit: "50mb" }));
app.use(morgan("dev"));

/* Routes */

// testing api
app.get('/test', (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({ 
        success: true,
        message: 'API is working fine!'
    });
});

// all api
app.all('*', (req: Request, res: Response, next: NextFunction) => {
    res.status(404).json({ 
        success: false,
        message: `Route ${req.originalUrl} not found`
    });
});

// middleware
app.use(ErrorMiddleware);

// Start server
app.listen(port, () => {
    console.log(`Server is connected with port ${port}`);
});