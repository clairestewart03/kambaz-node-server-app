import mongoose from "mongoose";

const questionsSchema = new mongoose.Schema(
    {
        _id: String,
        quizId: String,
        questionType: {
            type: String,
            enum: ['multiple-choice', 'true-false', 'fill-in-blank'],
            default: 'multiple-choice'
        },
        title: {type: String, default: "New Question" },
        points: { type: Number, default: 0 },
        questionText: { type: String, default: ''},
        choices: [
            {
                text: String,
                isCorrect: Boolean
            }
        ],
        correctTrueOrFalse: { type: Boolean, default: false },
        correctText: [
            {
                type: String
            }
        ]
    },
    { collection: "questions"}
);
export default questionsSchema;