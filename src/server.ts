import type { Request, Response } from 'express';
import express from 'express';
import cors from 'cors'
import { ActionsRouter, TasksRouter } from './routes';

import * as dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json())

app.get('/ping', (_req: Request, res: Response) => {
    return res.send('pong 🏓');
})

app.use('/actions', ActionsRouter);

app.use('/tasks', TasksRouter);

const PORT = process.env.PORT || 8022;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
