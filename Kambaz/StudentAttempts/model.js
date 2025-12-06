import mongoose from "mongoose";
import schema from "./schema.js";
const model = mongoose.model("StudentAttemptsModel", schema);
export default model;
