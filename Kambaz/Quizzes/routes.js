import QuizzesDao from "./dao.js";
export default function QuizzesRoutes(app) {
    const dao = QuizzesDao();
    const findQuizzesForCourse = async (req, res) => {
        const { courseId } = req.params;
        const quizzes = await dao.findQuizzesForCourse(courseId);
        res.json(quizzes);
    };

    const findQuizById = async (req, res) => {
        const { quizId } = req.params;
        const quiz = await dao.findQuizById(quizId);
        res.send(quiz);
    }

    const createQuizForCourse = async (req, res) => {
        const { courseId } = req.params;
        const quiz = {
            ...req.body,
            course: courseId,
        };
        const newQuiz = await dao.createQuiz(quiz, courseId);
        res.send(newQuiz);
    }
    const deleteQuiz = async (req, res) => {
        const { courseId, quizId } = req.params;
        const status = await dao.deleteQuiz(courseId, quizId);
        res.send(status);
    }

    const updateQuiz = async (req, res) => {
        const { courseId, quizId } = req.params;
        const quizUpdates = req.body;
        const status = await dao.updateQuiz(courseId, quizId, quizUpdates);
        res.send(status);
    }

    const updatePublished = async (req, res) => {
        const { quizId} = req.params;
        const newQuiz = await dao.updatePublished(quizId);
        res.send(newQuiz);
    }

    app.put("/api/quizzes/:quizId/publish", updatePublished);
    app.get("/api/quizzes/:quizId", findQuizById);
    app.get("/api/courses/:courseId/quizzes", findQuizzesForCourse);
    app.delete("/api/courses/:courseId/quizzes/:quizId", deleteQuiz);
    app.put("/api/courses/:courseId/quizzes/:quizId", updateQuiz);
    app.post("/api/courses/:courseId/quizzes", createQuizForCourse);

}
