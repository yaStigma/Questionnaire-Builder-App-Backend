import Questionnaire from '../db/models/questionnaire.js';

export const createQuestionnaire = (payload) => Questionnaire.create(payload);

export const getAllQuestionnaires = async () => {
  const data = await Questionnaire.find();
  return data;
};

export const getQuestionnaireById = async (questionnaireId) => {
  const data = await Questionnaire.findById(questionnaireId);
  return data;
};

export const updateQuestionnaire = async (
  questionnaireId,
  payload,
  options = {},
) => {
  const query = { _id: questionnaireId };

  const data = await Questionnaire.findOneAndUpdate(query, payload, {
    new: true,
    includeResultMetadata: true,
    ...options,
  });

  if (!data || !data.value) return null;

  return data.value;
};
export const deleteQuestionnaire = async (questionnaireId) => {
  const query = { _id: questionnaireId };

  const data = await Questionnaire.findOneAndDelete(query);
  return data;
};
