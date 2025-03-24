import Joi from 'joi';

export const answerSchema = Joi.object({
  questionnaireId: Joi.string().required(), // ID опроса
  answers: Joi.object()
    .pattern(
      Joi.string(), // ID вопроса
      Joi.alternatives().try(
        Joi.string(), // Один вариант ответа
        Joi.array().items(Joi.string()), // Несколько вариантов ответа
      ),
    )
    .required(),
  timeSpent: Joi.number().min(1).required(),
});
