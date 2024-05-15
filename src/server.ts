import type { Request, Response } from 'express';
import express from 'express';

import * as dotenv from 'dotenv';
dotenv.config();

const app = express();

app.get('/ping', (_req: Request, res: Response) => {
    return res.send('pong 🏓')
})

const PORT = process.env.PORT || 8022;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
