import { Schema, model } from 'mongoose';

const questionSchema = new Schema({
  text: { type: String, required: true },
  type: { type: String, enum: ['text', 'single', 'multiple'], required: true },
  options: [{ text: String }],
});

const questionnaireSchema = new Schema(
  {
    quizName: { type: String, required: true },
    quizDescription: { type: String, required: true },
    questions: [questionSchema],
    completions: { type: Number, default: 0 },
  },
  { timestamps: true, versionKey: false },
);

export default model('Questionnaire', questionnaireSchema);
