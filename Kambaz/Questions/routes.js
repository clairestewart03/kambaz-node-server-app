import QuestionsDao from "./dao.js";
export default function QuestionsRoutes(app) {
    const dao = QuestionsDao();

    const findQuestionsForQuiz = async (req, res) => {
        const { quizId } = req.params;
        const questions = await dao.findQuestionsForQuiz(quizId);
        res.json(questions);
    };

    const createQuestionForQuiz = async (req, res) => {
        const { quizId } = req.params;
        const question = {
            ...req.body,
            quiz: quizId,
        };
        const newQuestion = await dao.createQuestion(question, quizId);
        res.send(newQuestion);
    }

    const deleteQuestion = async (req, res) => {
        const { quizId } = req.params;
        const { questionId } = req.body;
        const status = await dao.deleteQuestion(quizId, questionId);
        res.send(status);
    }

    const updateQuestion = async (req, res) => {
        const { quizId } = req.params;
        const { questionId, ...questionUpdates } = req.body;

        const status = await dao.updateQuestion(quizId, questionId, questionUpdates);
        res.send(status);
    };

    app.delete("/api/quizzes/:quizId/questions/delete", deleteQuestion);
    app.put("/api/quizzes/:quizId/questions/update", updateQuestion);
    app.get("/api/quizzes/:quizId/questions", findQuestionsForQuiz);
    app.post("/api/quizzes/:quizId/questions", createQuestionForQuiz);

}