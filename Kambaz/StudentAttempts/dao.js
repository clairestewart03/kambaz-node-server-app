import {v4 as uuidv4} from "uuid";
import model from "./model.js";

export default function StudentAttemptsDao() {
    async function createAttempt(attempt) {
        const newAttempt = {...attempt, _id: uuidv4() };
        return model.create(newAttempt);
    }

    async function findAttemptById(id) {
        return model.findById(id);
    }

    async function findAttemptsForQuizForUser(quizId, userId) {
        return model.find({ quizId: quizId, userId: userId });
    }

    async function findLastAttempt(quizId, userId) {
        return model
            .findOne({ quizId, userId })
            .sort({ attemptNumber: -1 })
            .exec();
    }



    return {
        createAttempt, findAttemptById, findAttemptsForQuizForUser, findLastAttempt
    }
}