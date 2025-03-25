import Joi from 'joi';

export const answerSchema = Joi.object({
  questionnaireId: Joi.string().required(),
  answers: Joi.object()
    .pattern(
      Joi.string(),
      Joi.alternatives().try(Joi.string(), Joi.array().items(Joi.string())),
    )
    .required(),
  timeSpent: Joi.number().min(1).required(),
});
