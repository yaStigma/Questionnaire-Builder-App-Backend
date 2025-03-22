import Questionnaire from '../db/models/questionnaire.js';

export const createQuestionnaire = (payload) => Questionnaire.create(payload);

export const getAllQuestionnaires = async () => {
  const data = await Questionnaire.find();
  return data;
};

export const getQuestionnaireById = async (_id) => {
  const data = await Questionnaire.findById(_id);
  return data;
};

export const updateQuestionnaire = async (_id, payload, options = {}) => {
  const query = { _id };

  const data = await Questionnaire.findOneAndUpdate(query, payload, {
    new: true,
    includeResultMetadata: true,
    ...options,
  });

  if (!data || !data.value) return null;

  return data.value;
};
export const deleteQuestionnaire = async (_id) => {
  const query = { _id };

  const data = await Questionnaire.findOneAndDelete(query);
  return data;
};
