import express from 'express';
import pino from 'pino-http';
import cors from 'cors';
import { env } from './utils/env.js';
import { errorHandler } from './middlewares/errorHandler.js';
import { notFoundHandler } from './middlewares/notFoundHandler.js';
import questionnaireRouter from './routers/questionnaire.js';
import answerRouter from './routers/answers.js';
export const setupServer = () => {
  const app = express();

  app.use(cors());
  const logger = pino({
    transport: {
      target: 'pino-pretty',
    },
  });
  app.use(logger);

  app.use(express.json());

  app.use('/questionnaire', questionnaireRouter);
  app.use('/answer', answerRouter);
  app.use('*', notFoundHandler);

  app.use(errorHandler);

  const port = Number(env('PORT', 3000));

  app.listen(port, () => console.log(`Server is running on port ${port}`));
};
