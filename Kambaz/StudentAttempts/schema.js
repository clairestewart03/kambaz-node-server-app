import mongoose from "mongoose";

const studentAttemptsSchema = new mongoose.Schema(
{
    "_id": String,
    "quizId": String,
    "userId": String,
    "answers": [
        {
            "questionId": String,
            "selectedAnswer": mongoose.Schema.Types.Mixed
        }],
    "score": Number,
    "attemptNumber": Number,
},
{ collection: "studentAttempts" }
)

export default studentAttemptsSchema;