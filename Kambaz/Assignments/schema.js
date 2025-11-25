import mongoose from "mongoose";
const schema = new mongoose.Schema(
    {
        _id: String,
        title: String,
        course: String,
        points: String,
        description: String,
        availableDate: String,
        dueDate: String
    }
);
export default schema