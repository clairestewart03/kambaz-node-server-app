import { v4 as uuidv4 } from "uuid";
import model from "./model.js";

export default function QuizzesDao() {

    async function findQuizById(quizId) {
        return model.findById(quizId);
    }
    async function findQuizzesForCourse(courseId) {
        return model.find({course: courseId});
    }
    async function createQuiz(quiz, courseId) {
        const newQuiz = {...quiz, _id: uuidv4() };
        return model.create(newQuiz);
    }

    async function deleteQuiz(courseId, quizId) {
        const status = await model.deleteOne({_id: quizId, course: courseId});
        return status;
    }
    async function updateQuiz(courseId, quizId, quizUpdates) {
        return model.updateOne({_id: quizId}, {$set: quizUpdates});
    }

    async function updatePublished(quizId){
        const quiz = await model.findById(quizId);
        quiz.published = !quiz.published;
        await quiz.save();
        return quiz;
    }


    return {
        findQuizzesForCourse, createQuiz, deleteQuiz, updateQuiz, findQuizById, updatePublished
    }
}