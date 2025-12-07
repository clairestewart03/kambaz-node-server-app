import mongoose from "mongoose";
const quizzesSchema =
    new mongoose.Schema(
        {
            _id: String,
            course: String,
            title: String,
            description: String,
            quizType: {
                type: String,
                default: 'Graded Quiz'
            },
            points: Number,
            assignmentGroup: {
                type: String,
                default: 'Quizzes'
            },
            shuffleAnswers: {
                type: Boolean,
                default: true
            },
            timeLimit: {
                type: Number,
                default: 20
            },
            multipleAttempts: Boolean,
            allowedAttempts: Number,
            showCorrectAnswers: String,
            accessCode: String,
            oneQuestionAtATime: Boolean,
            webCamRequired: Boolean,
            lockQuestionsAfterAnswering: Boolean,
            dueDate: String,
            availableDate: String,
            untilDate: String,
            published: Boolean,
            numQuestions: {
                type: Number,
                default: 0
            }
        },
        { collection: "quizzes" }
    );

export default quizzesSchema;