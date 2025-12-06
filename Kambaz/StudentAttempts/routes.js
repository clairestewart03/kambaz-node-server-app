import StudentAttemptsDao from "./dao.js";
export default function StudentAttemptsRoutes(app) {
    const dao = StudentAttemptsDao();


    const createAttemptForQuiz = async (req, res) => {
        const { qid: quizId, userId } = req.params;
        const attempt = {
            ...req.body,
            quizId: quizId,
            userId: userId

        };
        const newAttempt = await dao.createAttempt(attempt);
        res.send(newAttempt);
    }

    const findAttemptById = async (req, res) => {
        const attempt = await dao.findAttemptById(req.params.aid);
        res.json(attempt);
    }

    const findAttemptForQuizForUser = async (req, res) => {
        const attempts = await dao.findAttemptsForQuizForUser(req.params.qid, req.params.userId)
        res.json(attempts);
    }

    const findLastAttempt = async (req, res) => {
        const attempt = await dao.findLastAttempt(req.params.qid, req.params.userId)
        res.json(attempt);
    }


    app.get('/api/quizzes/:qid/attempts/:userId/last', findLastAttempt)
    app.get("/api/quizzes/:qid/attempts/:userId", findAttemptForQuizForUser);
    app.get("/api/quizzes/attempts/:aid", findAttemptById);
    app.post("/api/quizzes/:qid/attempt/:userId", createAttemptForQuiz);

}
