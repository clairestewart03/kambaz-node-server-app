import { v4 as uuidv4 } from "uuid";
import model from "./model.js";

export default function QuestionsDao() {
    async function findQuestionsForQuiz(quizId) {
        return model.find({quizId: quizId});
    }

    async function createQuestion(question, quizId) {
        const newQuestion = {...question, _id: uuidv4() };
        return model.create(newQuestion);
    }

    async function deleteQuestion(quizId, questionId) {
        const status = await model.deleteOne({_id: questionId, quizId: quizId});
        return status;
    }
    async function updateQuestion(quizId, questionId, questionUpdates) {
        return model.updateOne({_id: questionId}, {$set: questionUpdates});
    }

    return {
        findQuestionsForQuiz, createQuestion, deleteQuestion, updateQuestion

    }

}
