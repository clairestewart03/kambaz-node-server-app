import { v4 as uuidv4 } from "uuid";
import model from "./model.js";
export default function EnrollmentsDao(db) {

    async function findUsersForCourse(courseId) {
        const enrollments = await model.find({ course: courseId }).populate("user");
        return enrollments.map((enrollment) => enrollment.user);
    }
    function unenrollAllUsersFromCourse(courseId) {
        return model.deleteMany({ course: courseId });
    }


    async function findCoursesForUser(userId) {
        return await model.find({user: userId})
    }
    async function enrollUserInCourse(userId, courseId) {
        return await model.create({
                                _id: `${userId}-${courseId}`,
                                user: userId,
                                course: courseId,
                            });
    }
    function unEnrollUserInCourse(user, course) {
        return model.deleteOne({user, course});
    }
    return { unenrollAllUsersFromCourse, findUsersForCourse, findEnrollmentsForUser: findCoursesForUser, enrollUserInCourse, unEnrollUserInCourse };
}
