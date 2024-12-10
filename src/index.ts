import express, { NextFunction, Request, Response } from 'express';

import helmet from 'helmet';
import cors from 'cors';
import 'dotenv/config';

const app = express();
const port = process.env.PORT || 3000;

/* Middleware */

app.use(helmet());

// cors => cross origin resource sharing
app.use(cors( {origin: process.env.ORIGIN} ));


app.use(express.json({ limit: "50mb" }));

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