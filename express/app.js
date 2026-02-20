import express, { response } from 'express';
import { corsMiddleware } from './middleware/cors.js';
import { jobsRouter } from './routes/jobs.js';

import { DEFAULTS } from './config.js';

const PORT = process.env.PORT ?? DEFAULTS.PORT;

const app = express();


app.use(corsMiddleware());
app.use(express.json());

app.use('/jobs', jobsRouter);

if (process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test') {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    }); 
}

export default app;