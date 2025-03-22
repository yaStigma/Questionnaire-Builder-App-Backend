import { Router } from 'express';
import {
  createQuestionnaireController,
  getAllQuestionnairesController,
  getQuestionnaireByIdController,
  updateQuestionnaireController,
  deleteQuestionnaireController,
} from '../controllers/questionnaire.js';
import questionnaireSchema from '../validation/questionnaire.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { validateBody } from '../utils/validateBody.js';
import { isValidId } from '../middlewares/isValidId.js';
const questionnaireRouter = Router();

questionnaireRouter.post(
  '/',

  validateBody(questionnaireSchema),
  ctrlWrapper(createQuestionnaireController),
);

questionnaireRouter.get('/', ctrlWrapper(getAllQuestionnairesController));

questionnaireRouter.get(
  '/:questionnaireId',
  isValidId,
  ctrlWrapper(getQuestionnaireByIdController),
);

questionnaireRouter.put(
  '/:questionnaireId',
  isValidId,
  validateBody(questionnaireSchema),
  ctrlWrapper(updateQuestionnaireController),
);

questionnaireRouter.delete(
  '/:questionnaireId',
  isValidId,
  ctrlWrapper(deleteQuestionnaireController),
);
export default questionnaireRouter;
