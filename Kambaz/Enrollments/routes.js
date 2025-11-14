import EnrollmentsDao from "./dao.js";
export default function EnrollmentsRoutes(app, db) {
    const dao = EnrollmentsDao(db);
    const enrollUserInCourse = (req, res) => {
        const { userId, courseId } = req.params;
        const newEnrollment = dao.enrollUserInCourse(userId, courseId);
        res.status(201).json(newEnrollment);
    }
    const unEnrollUserInCourse = (req, res) => {
        const { userId, courseId } = req.params;
        const status = dao.unEnrollUserInCourse(userId, courseId);
        res.send(status);
    }
    app.post("/api/users/:userId/enrollments/enroll/:courseId", enrollUserInCourse);
    app.delete("/api/users/:userId/enrollments/unenroll/:courseId", unEnrollUserInCourse);
}