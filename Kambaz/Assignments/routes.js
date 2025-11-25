import AssignmentsDao from "./dao.js";
export default function AssignmentsRoutes(app, db) {
    const dao = AssignmentsDao(db);
    const findAssignmentsForCourse = async (req, res) => {
        const { courseId } = req.params;
        const assignments = await dao.findAssignmentsForCourse(courseId);
        res.json(assignments);
    }
    const createAssignmentsForCourse = async (req, res) => {
        const { courseId } = req.params;
        const assignment = {
            ...req.body,
            course: courseId,
        };
        const newAssignment = await dao.createAssignment(assignment, courseId);
        res.send(newAssignment);
    }
    const deleteAssignment = async (req, res) => {
        const { courseId, assignmentId } = req.params;
        const status = await dao.deleteAssignment(courseId, assignmentId);
        res.send(status);
    }
    const updateAssignment = async (req, res) => {
        const { courseId, assignmentId } = req.params;
        const assignmentUpdates = req.body;
        const status = await dao.updateAssignment(courseId, assignmentId, assignmentUpdates);
        res.send(status);
    }
    app.put("/api/courses/:courseId/assignments/:assignmentId", updateAssignment);
    app.delete("/api/courses/:courseId/assignments/:assignmentId", deleteAssignment);
    app.post("/api/courses/:courseId/assignments", createAssignmentsForCourse);
    app.get("/api/courses/:courseId/assignments", findAssignmentsForCourse);
}
