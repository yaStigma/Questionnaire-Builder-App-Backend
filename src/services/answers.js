import Answer from '../db/models/answers.js';
import Questionnaire from '../db/models/questionnaire.js';
import createHttpError from 'http-errors';

export const saveAnswer = async (payload) => {
  const { questionnaireId } = payload;

  const questionnaire = await Questionnaire.findById(questionnaireId);
  if (!questionnaire) {
    throw createHttpError(404, 'Questionnaire not found');
  }

  const answer = await Answer.create(payload);

  // Увеличиваем счётчик `completions`
  questionnaire.completions += 1;
  await questionnaire.save();

  return answer;
};
