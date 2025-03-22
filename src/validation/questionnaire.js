import Joi from 'joi';

const questionSchema = Joi.object({
  text: Joi.string().min(5).max(500).required().messages({
    'string.empty': 'Question text cannot be empty',
    'string.min': 'The question must be at least 5 characters long',
    'string.max': 'The question cannot exceed 500 characters',
    'any.required': '"text" field is required',
  }),
  type: Joi.string().valid('text', 'single', 'multiple').required().messages({
    'any.only': 'The question type must be "text", "single", or "multiple"',
    'any.required': '"type" field is required',
  }),
  options: Joi.array()
    .items(
      Joi.object({
        text: Joi.string().min(1).required().messages({
          'string.empty': 'Answer option text cannot be empty',
          'any.required': 'Answer option is required',
        }),
      }),
    )
    .when('type', {
      is: Joi.valid('single', 'multiple'),
      then: Joi.array().min(2).required().messages({
        'array.min':
          'At least 2 answer options are required for single or multiple choice questions',
      }),
    }),
});

const questionnaireSchema = Joi.object({
  quizName: Joi.string().min(3).max(100).required().messages({
    'string.empty': 'Quiz name cannot be empty',
    'string.min': 'Quiz name must be at least 3 characters long',
    'string.max': 'Quiz name cannot exceed 100 characters',
    'any.required': '"quizName" field is required',
  }),
  quizDescription: Joi.string().min(10).max(500).required().messages({
    'string.empty': 'Quiz description cannot be empty',
    'string.min': 'Description must be at least 10 characters long',
    'string.max': 'Description cannot exceed 500 characters',
    'any.required': '"quizDescription" field is required',
  }),
  questions: Joi.array().items(questionSchema).min(1).required().messages({
    'array.min': 'The questionnaire must contain at least one question',
    'any.required': '"questions" field is required',
  }),
});

export default questionnaireSchema;
