import { saveAnswer } from '../services/answers.js';

export const saveAnswerController = async (req, res, next) => {
  const data = await saveAnswer(req.body);
  res.status(201).json({
    status: 201,
    message: 'Answer saved successfully',
    data,
  });
};
