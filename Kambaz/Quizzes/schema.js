import mongoose from "mongoose";
const quizzesSchema =
    new mongoose.Schema(
        {
            _id: String,
            course: String,
            title: String,
            description: String,
            quizType: String,
            points: Number,
            assignmentGroup: String,
            shuffleAnswers: {
                type: Boolean,
                default: true
            },
            timeLimit: Number,
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
            numQuestions: Number
        },
        { collection: "quizzes" }
    );

export default quizzesSchema;