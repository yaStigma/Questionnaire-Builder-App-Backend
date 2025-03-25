import { Schema, model } from 'mongoose';
const answerSchema = new Schema(
  {
    questionnaireId: {
      type: Schema.Types.ObjectId,
      ref: 'Questionnaire',
      required: true,
    },
    answers: {
      type: Map,
      of: Schema.Types.Mixed,
      required: true,
    },
    timeSpent: {
      type: Number,
      required: true,
    },
    submissionDate: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true, versionKey: false },
);

export default model('Answer', answerSchema);
