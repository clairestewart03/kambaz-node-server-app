import { v4 as uuidv4 } from "uuid";
export default function EnrollmentsDao(db) {

    function findEnrollmentsForUser(userId) {
        const { enrollments } = db;
        return enrollments.filter((enrollment) => enrollment.user === userId);
    }
    function enrollUserInCourse(userId, courseId) {
        const newEnrollment = {_id: uuidv4(), user: userId, course: courseId};
        db.enrollments.push(newEnrollment);
        return newEnrollment;
    };
    function unEnrollUserInCourse(userId, courseId) {
        const { enrollments } = db;
        db.enrollments = enrollments.filter((enrollment) => !(enrollment.user === userId && enrollment.course === courseId));
}
    return { enrollUserInCourse, unEnrollUserInCourse };
}
