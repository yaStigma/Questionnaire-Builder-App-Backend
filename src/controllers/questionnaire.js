import {
  createQuestionnaire,
  getAllQuestionnaires,
  getQuestionnaireById,
  updateQuestionnaire,
  deleteQuestionnaire,
} from '../services/questionnaire.js';
import createHttpError from 'http-errors';
import { env } from '../utils/env.js';

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
  const { questionnaireId } = req.params;
  const data = await getQuestionnaireById({ questionnaireId });

  if (!data) {
    throw createHttpError(404, 'Questionnaire not found');
  }

  res.json({
    status: 200,
    message: `Successfully found questionnaire with id ${questionnaireId}`,
    data,
  });
};

export const updateQuestionnaireController = async (req, res) => {
  const { questionnaireId } = req.params;

  const data = await updateQuestionnaire(questionnaireId, {
    ...req.body,
  });

  if (!data) {
    throw createHttpError(404, 'Questionnaire not found');
  }

  res.json({
    status: 200,
    message: 'Successfully patched a questionnaire!',
    data,
  });
};

export const deleteQuestionnaireController = async (req, res) => {
  const { questionnaireId } = req.params;

  const data = await deleteQuestionnaire(questionnaireId);

  if (!data) {
    throw createHttpError(404, 'Questionnaire not found');
  }
  res.status(204).send();
};
