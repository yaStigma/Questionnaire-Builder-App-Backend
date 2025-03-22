import createHttpError from 'http-errors';
import { isValidObjectId } from 'mongoose';

export const isValidId = (req, res, next) => {
  const { questionnaireId } = req.params;
  if (!isValidObjectId(questionnaireId)) {
    return next(createHttpError(404, `${questionnaireId} not valid Id`));
  }
  next();
};
