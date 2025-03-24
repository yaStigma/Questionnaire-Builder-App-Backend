import { Router } from 'express';
import { saveAnswerController } from '../controllers/answers.js';
import { answerSchema } from '../validation/answers.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { validateBody } from '../utils/validateBody.js';
const answerRouter = Router();
answerRouter.post(
  '/',
  validateBody(answerSchema),
  ctrlWrapper(saveAnswerController),
);

export default answerRouter;
