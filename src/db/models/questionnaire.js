import { Schema, model } from 'mongoose';

const questionSchema = new Schema({
  text: { type: String, required: true }, // Текст вопроса
  type: { type: String, enum: ['text', 'single', 'multiple'], required: true }, // Тип вопроса
  options: [{ text: String }], // Варианты ответа (если есть)
});

const questionnaireSchema = new Schema(
  {
    quizName: { type: String, required: true }, // Название теста
    quizDescription: { type: String, required: true }, // Описание теста
    questions: [questionSchema], // Массив вопросов
    completions: { type: Number, default: 0 }, // Количество прохождений
  },
  { timestamps: true, versionKey: false },
);

export default model('Questionnaire', questionnaireSchema);
