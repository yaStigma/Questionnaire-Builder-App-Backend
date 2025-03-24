import {
  createQuestionnaire,
  getAllQuestionnaires,
  getQuestionnaireById,
  updateQuestionnaire,
  deleteQuestionnaire,
} from '../services/questionnaire.js';
import createHttpError from 'http-errors';

export const createQuestionnaireController = async (req, res, next) => {
  const data = await createQuestionnaire({
    ...req.body,
  });

  res.status(201).json({
    status: 201,
    message: 'Successfully created a new questionnaire',
    data,
  });
};

export const getAllQuestionnairesController = async (req, res, next) => {
  const data = await getAllQuestionnaires({});

  res.json({
    status: 200,
    message: 'Successfully found all questionnaires!',
    data,
  });
};

export const getQuestionnaireByIdController = async (req, res, next) => {
  const { _id } = req.params;
  const data = await getQuestionnaireById({ _id });

  if (!data) {
    throw createHttpError(404, 'Questionnaire not found');
  }

  res.json({
    status: 200,
    message: `Successfully found questionnaire with id ${_id}`,
    data,
  });
};

export const updateQuestionnaireController = async (req, res) => {
  const { _id } = req.params;
  const updatedData = await updateQuestionnaire(_id, req.body);

  if (!updatedData) {
    throw createHttpError(404, 'Questionnaire not found');
  }

  res.json({
    status: 200,
    message: 'Successfully patched a questionnaire!',
    data: updatedData,
  });
};

export const deleteQuestionnaireController = async (req, res) => {
  const { _id } = req.params;

  const data = await deleteQuestionnaire(_id);

  if (!data) {
    throw createHttpError(404, 'Questionnaire not found');
  }
  res.status(204).send();
};
